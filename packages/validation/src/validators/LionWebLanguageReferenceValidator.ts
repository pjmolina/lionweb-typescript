import {
    Language_IncorrectContainmentMetaPointer_Issue,
    Language_IncorrectPropertyMetaPointer_Issue, Language_IncorrectReferenceMetaPointer_Issue,
    Language_UnknownConcept_Issue,
    Language_UnknownContainment_Issue,
    Language_UnknownProperty_Issue,
    Language_UnknownReference_Issue
} from "../issues/LanguageIssues.js";
import { JsonContext } from "./../issues/JsonContext.js";
import {
    LION_CORE_BUILTINS_INAMED_NAME,
    LIONWEB_BOOLEAN_TYPE,
    LIONWEB_INTEGER_TYPE,
    LIONWEB_JSON_TYPE,
    LIONWEB_STRING_TYPE, LionWebJsonChild,
    LionWebJsonProperty, LionWebJsonReference
} from "../json/LionWebJson.js";
import { LionWebJsonChunkWrapper } from "../json/LionWebJsonChunkWrapper.js";
import { LIONWEB_M3_CONCEPT_KEY, LIONWEB_M3_PROPERTY_KEY, LIONWEB_M3_PROPERTY_TYPE_KEY, LionWebLanguageDefinition } from "../json/LionWebLanguageDefinition.js";
import { SimpleFieldValidator } from "./SimpleFieldValidator.js";
import { ValidationResult } from "./ValidationResult.js";

/**
 * Check against the language definition
 */
export class LionWebLanguageReferenceValidator {
    validationResult: ValidationResult;
    language: LionWebLanguageDefinition;
    simpleFieldValidator: SimpleFieldValidator;

    constructor(validationResult: ValidationResult, lang: LionWebLanguageDefinition) {
        this.validationResult = validationResult;
        this.language = lang;
        this.simpleFieldValidator = new SimpleFieldValidator(this.validationResult);
    }

    // reset() {
    //     this.validationResult.reset();
    // }

    // TODO test reference and children implementation
    validate(obj: LionWebJsonChunkWrapper): void {
        if (this.language === undefined || this.language === null) {
            return;
        }
        obj.jsonChunk.nodes.forEach((node, nodeIndex) => {
            const nodeContext = new JsonContext(null, ["node", nodeIndex]);
            const jsonConcept = this.language.getNodeByMetaPointer(node.classifier);
            if (jsonConcept === null || jsonConcept === undefined) {
                this.validationResult.issue(new Language_UnknownConcept_Issue(nodeContext, node.classifier));
                return;
            }
            node.properties.forEach((property, propIndex) => {
                this.validateProperty(property, nodeContext.concat("properties", propIndex));
            });
            node.containments.forEach((containment, childIndex) => {
                this.validateContainment(containment, nodeContext.concat("containments", childIndex));
            });
            node.references.forEach((reference, refIndex) => {
                this.validateReference(reference, nodeContext.concat("references", refIndex));
            });
        });
    }

    private validateContainment(child: LionWebJsonChild, context: JsonContext) {
        const type = this.language.getNodeByMetaPointer(child.containment);
        if (type === null || type === undefined) {
            this.validationResult.issue(new Language_UnknownContainment_Issue(context, child.containment));
            return;
        }
        if (type.classifier.key !== LIONWEB_M3_CONCEPT_KEY) {
            this.validationResult.issue(new Language_IncorrectContainmentMetaPointer_Issue(context, child.containment, type.classifier.key));
        }
        // TODO check type of children
    }

    private validateReference(ref: LionWebJsonReference, context: JsonContext) {
        const type = this.language.getNodeByMetaPointer(ref.reference);
        if (type === null || type === undefined) {
            this.validationResult.issue(new Language_UnknownReference_Issue(context, ref.reference));
            return;
        }
        if (type.classifier.key !== LIONWEB_M3_CONCEPT_KEY) {
            this.validationResult.issue(new Language_IncorrectReferenceMetaPointer_Issue(context, ref.reference, type.classifier.key));
        }
        // TODO Check type of reference (if possible)

        // TODO Check for duplicate targets?
        // If so, what to check because there can be either or both a `resolveInfo` and a `reference`
    }
    
    /**
     * Checks wwhether the value of `prop1` is correct in relation with its property definition in the referred language.
     * @param prop
     */
    validateProperty(prop: LionWebJsonProperty, context: JsonContext): void {
        if (prop.value === null) {
            return;
        }
        const type = this.language.getNodeByMetaPointer(prop.property);
        if (type === null || type === undefined) {
            this.validationResult.issue(new Language_UnknownProperty_Issue(context, prop.property));
            return;
        }
        if (type.classifier.key !== LIONWEB_M3_PROPERTY_KEY) {
            this.validationResult.issue(new Language_IncorrectPropertyMetaPointer_Issue(context, prop.property, type.classifier.key));
            return;
        }
        // TODO check for property to exist inside the concept in the language
        //      Need to find inherited and implemented properties as well: complex!

        const refType = type.references.find((ref) => (ref.reference.key === LIONWEB_M3_PROPERTY_TYPE_KEY));
        const propertyName = type.properties.find(p => p.property.key === LION_CORE_BUILTINS_INAMED_NAME)?.value;
        // console.log("Fount type should be " + refType.targets[0].reference);
        if (propertyName !== undefined) {
            if (refType !== null && refType !== undefined) {
                switch (refType.targets[0].reference) {
                    case LIONWEB_BOOLEAN_TYPE:
                        this.simpleFieldValidator.validateBoolean(prop, propertyName, context);
                        break;
                    case LIONWEB_INTEGER_TYPE:
                        this.simpleFieldValidator.validateInteger(prop, propertyName, context);
                        break;
                    case LIONWEB_STRING_TYPE:
                        break;
                    case LIONWEB_JSON_TYPE:
                        this.simpleFieldValidator.validateJSON(prop, propertyName, context);
                        break;
                }
            } else {
                // TODO refType not found, but 
            }
        }
    }
}
