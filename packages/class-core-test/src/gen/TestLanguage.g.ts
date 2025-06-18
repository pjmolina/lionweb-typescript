// Copyright 2025 TRUMPF Laser SE and other contributors
//
// Licensed under the Apache License, Version 2.0 (the "License")
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-FileCopyrightText: 2025 TRUMPF Laser SE and other contributors
// SPDX-License-Identifier: Apache-2.0

// Warning: this file is generated!
// Modifying it by hand is useless at best, and sabotage at worst.

/*
 * language's metadata:
 *     name:    TestLanguage
 *     version: 0
 *     key:     TestLanguage
 *     id:      TestLanguage
 */


import {
    Annotation,
    Classifier,
    Concept,
    Containment,
    Enumeration,
    EnumerationLiteral,
    Language,
    Property,
    Reference,
    SingleRef
} from "@lionweb/core";

import {
    LionWebId
} from "@lionweb/json";

import {
    ContainmentValueManager,
    DeltaHandler,
    ILanguageBase,
    INodeBase,
    LionCore_builtinsBase,
    NodeBase,
    NodeBaseFactory,
    OptionalMultiContainmentValueManager,
    OptionalMultiReferenceValueManager,
    OptionalPropertyValueManager,
    OptionalSingleContainmentValueManager,
    OptionalSingleReferenceValueManager,
    Parentage,
    PropertyValueManager,
    ReferenceValueManager,
    RequiredMultiContainmentValueManager,
    RequiredMultiReferenceValueManager,
    RequiredPropertyValueManager,
    RequiredSingleContainmentValueManager,
    RequiredSingleReferenceValueManager
} from "@lionweb/class-core";


export class TestLanguageBase implements ILanguageBase {

    private readonly _language: Language = new Language("TestLanguage", "0", "TestLanguage", "TestLanguage");
    get language(): Language {
        this.ensureWiredUp();
        return this._language;
    }

    public readonly _TestEnumeration = new Enumeration(this._language, "TestEnumeration", "TestEnumeration", "TestEnumeration");
    get TestEnumeration(): Enumeration {
        this.ensureWiredUp();
        return this._TestEnumeration;
    }
    private readonly _TestEnumeration_literal1 = new EnumerationLiteral(this._TestEnumeration, "literal1", "TestEnumeration-literal1", "TestEnumeration-literal1");
    get TestEnumeration_literal1(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._TestEnumeration_literal1;
    }
    private readonly _TestEnumeration_literal2 = new EnumerationLiteral(this._TestEnumeration, "literal2", "TestEnumeration-literal2", "TestEnumeration-literal2");
    get TestEnumeration_literal2(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._TestEnumeration_literal2;
    }
    private readonly _TestEnumeration_literal3 = new EnumerationLiteral(this._TestEnumeration, "literal3", "TestEnumeration-literal3", "TestEnumeration-literal3");
    get TestEnumeration_literal3(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._TestEnumeration_literal3;
    }

    public readonly _SecondTestEnumeration = new Enumeration(this._language, "SecondTestEnumeration", "SecondTestEnumeration", "SecondTestEnumeration");
    get SecondTestEnumeration(): Enumeration {
        this.ensureWiredUp();
        return this._SecondTestEnumeration;
    }
    private readonly _SecondTestEnumeration_literal1 = new EnumerationLiteral(this._SecondTestEnumeration, "literal1", "SecondTestEnumeration-literal1", "SecondTestEnumeration-literal1");
    get SecondTestEnumeration_literal1(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._SecondTestEnumeration_literal1;
    }
    private readonly _SecondTestEnumeration_literal2 = new EnumerationLiteral(this._SecondTestEnumeration, "literal2", "SecondTestEnumeration-literal2", "SecondTestEnumeration-literal2");
    get SecondTestEnumeration_literal2(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._SecondTestEnumeration_literal2;
    }
    private readonly _SecondTestEnumeration_literal3 = new EnumerationLiteral(this._SecondTestEnumeration, "literal3", "SecondTestEnumeration-literal3", "SecondTestEnumeration-literal3");
    get SecondTestEnumeration_literal3(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._SecondTestEnumeration_literal3;
    }

    public readonly _DataTypeTestConcept = new Concept(this._language, "DataTypeTestConcept", "DataTypeTestConcept", "DataTypeTestConcept", false);
    get DataTypeTestConcept(): Concept {
        this.ensureWiredUp();
        return this._DataTypeTestConcept;
    }
    private readonly _DataTypeTestConcept_booleanValue_1 = new Property(this._DataTypeTestConcept, "booleanValue_1", "DataTypeTestConcept-booleanValue_1", "DataTypeTestConcept-booleanValue_1");
    get DataTypeTestConcept_booleanValue_1(): Property {
        this.ensureWiredUp();
        return this._DataTypeTestConcept_booleanValue_1;
    }
    private readonly _DataTypeTestConcept_integerValue_1 = new Property(this._DataTypeTestConcept, "integerValue_1", "DataTypeTestConcept-integerValue_1", "DataTypeTestConcept-integerValue_1");
    get DataTypeTestConcept_integerValue_1(): Property {
        this.ensureWiredUp();
        return this._DataTypeTestConcept_integerValue_1;
    }
    private readonly _DataTypeTestConcept_stringValue_1 = new Property(this._DataTypeTestConcept, "stringValue_1", "DataTypeTestConcept-stringValue_1", "DataTypeTestConcept-stringValue_1");
    get DataTypeTestConcept_stringValue_1(): Property {
        this.ensureWiredUp();
        return this._DataTypeTestConcept_stringValue_1;
    }
    private readonly _DataTypeTestConcept_enumValue_1 = new Property(this._DataTypeTestConcept, "enumValue_1", "DataTypeTestConcept-enumValue_1", "DataTypeTestConcept-enumValue_1");
    get DataTypeTestConcept_enumValue_1(): Property {
        this.ensureWiredUp();
        return this._DataTypeTestConcept_enumValue_1;
    }
    private readonly _DataTypeTestConcept_booleanValue_0_1 = new Property(this._DataTypeTestConcept, "booleanValue_0_1", "DataTypeTestConcept-booleanValue_0_1", "DataTypeTestConcept-booleanValue_0_1").isOptional();
    get DataTypeTestConcept_booleanValue_0_1(): Property {
        this.ensureWiredUp();
        return this._DataTypeTestConcept_booleanValue_0_1;
    }
    private readonly _DataTypeTestConcept_integerValue_0_1 = new Property(this._DataTypeTestConcept, "integerValue_0_1", "DataTypeTestConcept-integerValue_0_1", "DataTypeTestConcept-integerValue_0_1").isOptional();
    get DataTypeTestConcept_integerValue_0_1(): Property {
        this.ensureWiredUp();
        return this._DataTypeTestConcept_integerValue_0_1;
    }
    private readonly _DataTypeTestConcept_stringValue_0_1 = new Property(this._DataTypeTestConcept, "stringValue_0_1", "DataTypeTestConcept-stringValue_0_1", "DataTypeTestConcept-stringValue_0_1").isOptional();
    get DataTypeTestConcept_stringValue_0_1(): Property {
        this.ensureWiredUp();
        return this._DataTypeTestConcept_stringValue_0_1;
    }
    private readonly _DataTypeTestConcept_enumValue_0_1 = new Property(this._DataTypeTestConcept, "enumValue_0_1", "DataTypeTestConcept-enumValue_0_1", "DataTypeTestConcept-enumValue_0_1").isOptional();
    get DataTypeTestConcept_enumValue_0_1(): Property {
        this.ensureWiredUp();
        return this._DataTypeTestConcept_enumValue_0_1;
    }

    public readonly _LinkTestConcept = new Concept(this._language, "LinkTestConcept", "LinkTestConcept", "LinkTestConcept", false);
    get LinkTestConcept(): Concept {
        this.ensureWiredUp();
        return this._LinkTestConcept;
    }
    private readonly _LinkTestConcept_containment_0_1 = new Containment(this._LinkTestConcept, "containment_0_1", "LinkTestConcept-containment_0_1", "LinkTestConcept-containment_0_1").isOptional();
    get LinkTestConcept_containment_0_1(): Containment {
        this.ensureWiredUp();
        return this._LinkTestConcept_containment_0_1;
    }
    private readonly _LinkTestConcept_containment_1 = new Containment(this._LinkTestConcept, "containment_1", "LinkTestConcept-containment_1", "LinkTestConcept-containment_1");
    get LinkTestConcept_containment_1(): Containment {
        this.ensureWiredUp();
        return this._LinkTestConcept_containment_1;
    }
    private readonly _LinkTestConcept_containment_0_n = new Containment(this._LinkTestConcept, "containment_0_n", "LinkTestConcept-containment_0_n", "LinkTestConcept-containment_0_n").isOptional().isMultiple();
    get LinkTestConcept_containment_0_n(): Containment {
        this.ensureWiredUp();
        return this._LinkTestConcept_containment_0_n;
    }
    private readonly _LinkTestConcept_containment_1_n = new Containment(this._LinkTestConcept, "containment_1_n", "LinkTestConcept-containment_1_n", "LinkTestConcept-containment_1_n").isMultiple();
    get LinkTestConcept_containment_1_n(): Containment {
        this.ensureWiredUp();
        return this._LinkTestConcept_containment_1_n;
    }
    private readonly _LinkTestConcept_reference_0_1 = new Reference(this._LinkTestConcept, "reference_0_1", "LinkTestConcept-reference_0_1", "LinkTestConcept-reference_0_1").isOptional();
    get LinkTestConcept_reference_0_1(): Reference {
        this.ensureWiredUp();
        return this._LinkTestConcept_reference_0_1;
    }
    private readonly _LinkTestConcept_reference_1 = new Reference(this._LinkTestConcept, "reference_1", "LinkTestConcept-reference_1", "LinkTestConcept-reference_1");
    get LinkTestConcept_reference_1(): Reference {
        this.ensureWiredUp();
        return this._LinkTestConcept_reference_1;
    }
    private readonly _LinkTestConcept_reference_0_n = new Reference(this._LinkTestConcept, "reference_0_n", "LinkTestConcept-reference_0_n", "LinkTestConcept-reference_0_n").isOptional().isMultiple();
    get LinkTestConcept_reference_0_n(): Reference {
        this.ensureWiredUp();
        return this._LinkTestConcept_reference_0_n;
    }
    private readonly _LinkTestConcept_reference_1_n = new Reference(this._LinkTestConcept, "reference_1_n", "LinkTestConcept-reference_1_n", "LinkTestConcept-reference_1_n").isMultiple();
    get LinkTestConcept_reference_1_n(): Reference {
        this.ensureWiredUp();
        return this._LinkTestConcept_reference_1_n;
    }

    public readonly _TestAnnotation = new Annotation(this._language, "TestAnnotation", "TestAnnotation", "TestAnnotation");
    get TestAnnotation(): Annotation {
        this.ensureWiredUp();
        return this._TestAnnotation;
    }

    private _wiredUp: boolean = false;
    private ensureWiredUp() {
        if (this._wiredUp) {
            return;
        }
        this._language.havingEntities(this._TestEnumeration, this._SecondTestEnumeration, this._DataTypeTestConcept, this._LinkTestConcept, this._TestAnnotation);
        this._TestEnumeration.havingLiterals(this._TestEnumeration_literal1, this._TestEnumeration_literal2, this._TestEnumeration_literal3);
        this._SecondTestEnumeration.havingLiterals(this._SecondTestEnumeration_literal1, this._SecondTestEnumeration_literal2, this._SecondTestEnumeration_literal3);
        this._DataTypeTestConcept.havingFeatures(this._DataTypeTestConcept_booleanValue_1, this._DataTypeTestConcept_integerValue_1, this._DataTypeTestConcept_stringValue_1, this._DataTypeTestConcept_enumValue_1, this._DataTypeTestConcept_booleanValue_0_1, this._DataTypeTestConcept_integerValue_0_1, this._DataTypeTestConcept_stringValue_0_1, this._DataTypeTestConcept_enumValue_0_1);
        this._DataTypeTestConcept_booleanValue_1.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._DataTypeTestConcept_integerValue_1.ofType(LionCore_builtinsBase.INSTANCE._Integer);
        this._DataTypeTestConcept_stringValue_1.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._DataTypeTestConcept_enumValue_1.ofType(this._TestEnumeration);
        this._DataTypeTestConcept_booleanValue_0_1.ofType(LionCore_builtinsBase.INSTANCE._Boolean).isOptional();
        this._DataTypeTestConcept_integerValue_0_1.ofType(LionCore_builtinsBase.INSTANCE._Integer).isOptional();
        this._DataTypeTestConcept_stringValue_0_1.ofType(LionCore_builtinsBase.INSTANCE._String).isOptional();
        this._DataTypeTestConcept_enumValue_0_1.ofType(this._TestEnumeration).isOptional();
        this._LinkTestConcept.havingFeatures(this._LinkTestConcept_containment_0_1, this._LinkTestConcept_containment_1, this._LinkTestConcept_containment_0_n, this._LinkTestConcept_containment_1_n, this._LinkTestConcept_reference_0_1, this._LinkTestConcept_reference_1, this._LinkTestConcept_reference_0_n, this._LinkTestConcept_reference_1_n);
        this._LinkTestConcept_containment_0_1.ofType(this._DataTypeTestConcept);
        this._LinkTestConcept_containment_1.ofType(this._DataTypeTestConcept);
        this._LinkTestConcept_containment_0_n.ofType(this._DataTypeTestConcept);
        this._LinkTestConcept_containment_1_n.ofType(this._DataTypeTestConcept);
        this._LinkTestConcept_reference_0_1.ofType(this._DataTypeTestConcept);
        this._LinkTestConcept_reference_1.ofType(this._DataTypeTestConcept);
        this._LinkTestConcept_reference_0_n.ofType(this._DataTypeTestConcept);
        this._LinkTestConcept_reference_1_n.ofType(this._DataTypeTestConcept);
        this._wiredUp = true;
    }

    factory(handleDelta?: DeltaHandler): NodeBaseFactory {
        return (classifier: Classifier, id: LionWebId) => {
            switch (classifier.key) {
                case this._DataTypeTestConcept.key: return DataTypeTestConcept.create(id, handleDelta);
                case this._LinkTestConcept.key: return LinkTestConcept.create(id, handleDelta);
                case this._TestAnnotation.key: return TestAnnotation.create(id, handleDelta);
                default: {
                    const {language} = classifier;
                    throw new Error(`can't instantiate ${classifier.name} (key=${classifier.key}): classifier is not known in language ${language.name} (key=${language.key}, version=${language.version})`);
                }
            }
        }
    }

    enumLiteralFrom<EnumType>(enumerationLiteral: EnumerationLiteral): EnumType {
        const {enumeration} = enumerationLiteral;
        switch (enumeration.key) {
            case this._TestEnumeration.key: return enumerationLiteral.key as EnumType;
            case this._SecondTestEnumeration.key: return enumerationLiteral.key as EnumType;
            default: {
                const {language} = enumeration;
                throw new Error(`enumeration with key ${enumeration.key} is not known in language ${language.name} (key=${language.key}, version=${language.version})`);
            }
        }
    }

    public static readonly INSTANCE = new TestLanguageBase();
}


export enum TestEnumeration {
    literal1 = "TestEnumeration-literal1",
    literal2 = "TestEnumeration-literal2",
    literal3 = "TestEnumeration-literal3"
}

export enum SecondTestEnumeration {
    literal1 = "SecondTestEnumeration-literal1",
    literal2 = "SecondTestEnumeration-literal2",
    literal3 = "SecondTestEnumeration-literal3"
}

export class DataTypeTestConcept extends NodeBase {
    static create(id: LionWebId, handleDelta?: DeltaHandler, parentInfo?: Parentage): DataTypeTestConcept {
        return new DataTypeTestConcept(TestLanguageBase.INSTANCE.DataTypeTestConcept, id, handleDelta, parentInfo);
    }

    private readonly _booleanValue_1: RequiredPropertyValueManager<boolean>;
    get booleanValue_1(): boolean {
        return this._booleanValue_1.get();
    }
    set booleanValue_1(newValue: boolean) {
        this._booleanValue_1.set(newValue);
    }

    private readonly _integerValue_1: RequiredPropertyValueManager<number>;
    get integerValue_1(): number {
        return this._integerValue_1.get();
    }
    set integerValue_1(newValue: number) {
        this._integerValue_1.set(newValue);
    }

    private readonly _stringValue_1: RequiredPropertyValueManager<string>;
    get stringValue_1(): string {
        return this._stringValue_1.get();
    }
    set stringValue_1(newValue: string) {
        this._stringValue_1.set(newValue);
    }

    private readonly _enumValue_1: RequiredPropertyValueManager<TestEnumeration>;
    get enumValue_1(): TestEnumeration {
        return this._enumValue_1.get();
    }
    set enumValue_1(newValue: TestEnumeration) {
        this._enumValue_1.set(newValue);
    }

    private readonly _booleanValue_0_1: OptionalPropertyValueManager<boolean>;
    get booleanValue_0_1(): boolean | undefined {
        return this._booleanValue_0_1.get();
    }
    set booleanValue_0_1(newValue: boolean | undefined) {
        this._booleanValue_0_1.set(newValue);
    }

    private readonly _integerValue_0_1: OptionalPropertyValueManager<number>;
    get integerValue_0_1(): number | undefined {
        return this._integerValue_0_1.get();
    }
    set integerValue_0_1(newValue: number | undefined) {
        this._integerValue_0_1.set(newValue);
    }

    private readonly _stringValue_0_1: OptionalPropertyValueManager<string>;
    get stringValue_0_1(): string | undefined {
        return this._stringValue_0_1.get();
    }
    set stringValue_0_1(newValue: string | undefined) {
        this._stringValue_0_1.set(newValue);
    }

    private readonly _enumValue_0_1: OptionalPropertyValueManager<TestEnumeration>;
    get enumValue_0_1(): TestEnumeration | undefined {
        return this._enumValue_0_1.get();
    }
    set enumValue_0_1(newValue: TestEnumeration | undefined) {
        this._enumValue_0_1.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, handleDelta?: DeltaHandler, parentInfo?: Parentage) {
        super(classifier, id, handleDelta, parentInfo);
        this._booleanValue_1 = new RequiredPropertyValueManager<boolean>(TestLanguageBase.INSTANCE.DataTypeTestConcept_booleanValue_1, this);
        this._integerValue_1 = new RequiredPropertyValueManager<number>(TestLanguageBase.INSTANCE.DataTypeTestConcept_integerValue_1, this);
        this._stringValue_1 = new RequiredPropertyValueManager<string>(TestLanguageBase.INSTANCE.DataTypeTestConcept_stringValue_1, this);
        this._enumValue_1 = new RequiredPropertyValueManager<TestEnumeration>(TestLanguageBase.INSTANCE.DataTypeTestConcept_enumValue_1, this);
        this._booleanValue_0_1 = new OptionalPropertyValueManager<boolean>(TestLanguageBase.INSTANCE.DataTypeTestConcept_booleanValue_0_1, this);
        this._integerValue_0_1 = new OptionalPropertyValueManager<number>(TestLanguageBase.INSTANCE.DataTypeTestConcept_integerValue_0_1, this);
        this._stringValue_0_1 = new OptionalPropertyValueManager<string>(TestLanguageBase.INSTANCE.DataTypeTestConcept_stringValue_0_1, this);
        this._enumValue_0_1 = new OptionalPropertyValueManager<TestEnumeration>(TestLanguageBase.INSTANCE.DataTypeTestConcept_enumValue_0_1, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case TestLanguageBase.INSTANCE.DataTypeTestConcept_booleanValue_1.key: return this._booleanValue_1;
            case TestLanguageBase.INSTANCE.DataTypeTestConcept_integerValue_1.key: return this._integerValue_1;
            case TestLanguageBase.INSTANCE.DataTypeTestConcept_stringValue_1.key: return this._stringValue_1;
            case TestLanguageBase.INSTANCE.DataTypeTestConcept_enumValue_1.key: return this._enumValue_1;
            case TestLanguageBase.INSTANCE.DataTypeTestConcept_booleanValue_0_1.key: return this._booleanValue_0_1;
            case TestLanguageBase.INSTANCE.DataTypeTestConcept_integerValue_0_1.key: return this._integerValue_0_1;
            case TestLanguageBase.INSTANCE.DataTypeTestConcept_stringValue_0_1.key: return this._stringValue_0_1;
            case TestLanguageBase.INSTANCE.DataTypeTestConcept_enumValue_0_1.key: return this._enumValue_0_1;
            default: return super.getPropertyValueManager(property);
        }
    }
}

export class LinkTestConcept extends NodeBase {
    static create(id: LionWebId, handleDelta?: DeltaHandler, parentInfo?: Parentage): LinkTestConcept {
        return new LinkTestConcept(TestLanguageBase.INSTANCE.LinkTestConcept, id, handleDelta, parentInfo);
    }

    private readonly _containment_0_1: OptionalSingleContainmentValueManager<DataTypeTestConcept>;
    get containment_0_1(): DataTypeTestConcept | undefined {
        return this._containment_0_1.get();
    }
    set containment_0_1(newValue: DataTypeTestConcept | undefined) {
        this._containment_0_1.set(newValue);
    }

    private readonly _containment_1: RequiredSingleContainmentValueManager<DataTypeTestConcept>;
    get containment_1(): DataTypeTestConcept {
        return this._containment_1.get();
    }
    set containment_1(newValue: DataTypeTestConcept) {
        this._containment_1.set(newValue);
    }

    private readonly _containment_0_n: OptionalMultiContainmentValueManager<DataTypeTestConcept>;
    get containment_0_n(): DataTypeTestConcept[] {
        return this._containment_0_n.get();
    }
    addContainment_0_n(newValue: DataTypeTestConcept) {
        this._containment_0_n.add(newValue);
    }
    removeContainment_0_n(valueToRemove: DataTypeTestConcept) {
        this._containment_0_n.remove(valueToRemove);
    }
    addContainment_0_nAtIndex(newValue: DataTypeTestConcept, index: number) {
        this._containment_0_n.insertAtIndex(newValue, index);
    }
    moveContainment_0_n(oldIndex: number, newIndex: number) {
        this._containment_0_n.move(oldIndex, newIndex);
    }

    private readonly _containment_1_n: RequiredMultiContainmentValueManager<DataTypeTestConcept>;
    get containment_1_n(): DataTypeTestConcept[] {
        return this._containment_1_n.get();
    }
    addContainment_1_n(newValue: DataTypeTestConcept) {
        this._containment_1_n.add(newValue);
    }
    removeContainment_1_n(valueToRemove: DataTypeTestConcept) {
        this._containment_1_n.remove(valueToRemove);
    }
    addContainment_1_nAtIndex(newValue: DataTypeTestConcept, index: number) {
        this._containment_1_n.insertAtIndex(newValue, index);
    }
    moveContainment_1_n(oldIndex: number, newIndex: number) {
        this._containment_1_n.move(oldIndex, newIndex);
    }

    private readonly _reference_0_1: OptionalSingleReferenceValueManager<DataTypeTestConcept>;
    get reference_0_1(): SingleRef<DataTypeTestConcept> | undefined {
        return this._reference_0_1.get();
    }
    set reference_0_1(newValue: SingleRef<DataTypeTestConcept> | undefined) {
        this._reference_0_1.set(newValue);
    }

    private readonly _reference_1: RequiredSingleReferenceValueManager<DataTypeTestConcept>;
    get reference_1(): SingleRef<DataTypeTestConcept> {
        return this._reference_1.get();
    }
    set reference_1(newValue: SingleRef<DataTypeTestConcept>) {
        this._reference_1.set(newValue);
    }

    private readonly _reference_0_n: OptionalMultiReferenceValueManager<DataTypeTestConcept>;
    get reference_0_n(): SingleRef<DataTypeTestConcept>[] {
        return this._reference_0_n.get();
    }
    addReference_0_n(newValue: DataTypeTestConcept) {
        this._reference_0_n.add(newValue);
    }
    removeReference_0_n(valueToRemove: DataTypeTestConcept) {
        this._reference_0_n.remove(valueToRemove);
    }
    addReference_0_nAtIndex(newValue: DataTypeTestConcept, index: number) {
        this._reference_0_n.insertAtIndex(newValue, index);
    }
    moveReference_0_n(oldIndex: number, newIndex: number) {
        this._reference_0_n.move(oldIndex, newIndex);
    }

    private readonly _reference_1_n: RequiredMultiReferenceValueManager<DataTypeTestConcept>;
    get reference_1_n(): SingleRef<DataTypeTestConcept>[] {
        return this._reference_1_n.get();
    }
    addReference_1_n(newValue: DataTypeTestConcept) {
        this._reference_1_n.add(newValue);
    }
    removeReference_1_n(valueToRemove: DataTypeTestConcept) {
        this._reference_1_n.remove(valueToRemove);
    }
    addReference_1_nAtIndex(newValue: DataTypeTestConcept, index: number) {
        this._reference_1_n.insertAtIndex(newValue, index);
    }
    moveReference_1_n(oldIndex: number, newIndex: number) {
        this._reference_1_n.move(oldIndex, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, handleDelta?: DeltaHandler, parentInfo?: Parentage) {
        super(classifier, id, handleDelta, parentInfo);
        this._containment_0_1 = new OptionalSingleContainmentValueManager<DataTypeTestConcept>(TestLanguageBase.INSTANCE.LinkTestConcept_containment_0_1, this);
        this._containment_1 = new RequiredSingleContainmentValueManager<DataTypeTestConcept>(TestLanguageBase.INSTANCE.LinkTestConcept_containment_1, this);
        this._containment_0_n = new OptionalMultiContainmentValueManager<DataTypeTestConcept>(TestLanguageBase.INSTANCE.LinkTestConcept_containment_0_n, this);
        this._containment_1_n = new RequiredMultiContainmentValueManager<DataTypeTestConcept>(TestLanguageBase.INSTANCE.LinkTestConcept_containment_1_n, this);
        this._reference_0_1 = new OptionalSingleReferenceValueManager<DataTypeTestConcept>(TestLanguageBase.INSTANCE.LinkTestConcept_reference_0_1, this);
        this._reference_1 = new RequiredSingleReferenceValueManager<DataTypeTestConcept>(TestLanguageBase.INSTANCE.LinkTestConcept_reference_1, this);
        this._reference_0_n = new OptionalMultiReferenceValueManager<DataTypeTestConcept>(TestLanguageBase.INSTANCE.LinkTestConcept_reference_0_n, this);
        this._reference_1_n = new RequiredMultiReferenceValueManager<DataTypeTestConcept>(TestLanguageBase.INSTANCE.LinkTestConcept_reference_1_n, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case TestLanguageBase.INSTANCE.LinkTestConcept_containment_0_1.key: return this._containment_0_1;
            case TestLanguageBase.INSTANCE.LinkTestConcept_containment_1.key: return this._containment_1;
            case TestLanguageBase.INSTANCE.LinkTestConcept_containment_0_n.key: return this._containment_0_n;
            case TestLanguageBase.INSTANCE.LinkTestConcept_containment_1_n.key: return this._containment_1_n;
            default: return super.getContainmentValueManager(containment);
        }
    }

    getReferenceValueManager(reference: Reference): ReferenceValueManager<INodeBase> {
        switch (reference.key) {
            case TestLanguageBase.INSTANCE.LinkTestConcept_reference_0_1.key: return this._reference_0_1;
            case TestLanguageBase.INSTANCE.LinkTestConcept_reference_1.key: return this._reference_1;
            case TestLanguageBase.INSTANCE.LinkTestConcept_reference_0_n.key: return this._reference_0_n;
            case TestLanguageBase.INSTANCE.LinkTestConcept_reference_1_n.key: return this._reference_1_n;
            default: return super.getReferenceValueManager(reference);
        }
    }
}

export class TestAnnotation extends NodeBase {
    static create(id: LionWebId, handleDelta?: DeltaHandler, parentInfo?: Parentage): TestAnnotation {
        return new TestAnnotation(TestLanguageBase.INSTANCE.TestAnnotation, id, handleDelta, parentInfo);
    }
}

