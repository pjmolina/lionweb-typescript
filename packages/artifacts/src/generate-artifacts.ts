import { Language, lioncore, lioncoreBuiltins, nodeSerializer, serializeLanguages } from "@lionweb/core"
import { ioLionWebMpsSpecificLanguage } from "@lionweb/io-lionweb-mps-specific"
import { LionWebJsonChunk } from "@lionweb/json"
import {
    generateMermaidForLanguage,
    generatePlantUmlForLanguage,
    GenerationOptions,
    genericAsTreeText,
    languageAsText,
    readFileAsJson,
    tsTypesForLanguage,
    writeJsonAsFile
} from "@lionweb/utilities"
import { writeFileSync } from "fs"

import { libraryModel, libraryReader } from "@lionweb/test/dist/instances/library.js"
import { multiModel, multiReader } from "@lionweb/test/dist/instances/multi.js"
import { libraryLanguage } from "@lionweb/test/dist/languages/library.js"
import { multiLanguage } from "@lionweb/test/dist/languages/multi.js"
import { shapesLanguage } from "@lionweb/test/dist/languages/shapes.js"
import { languageWithEnum } from "@lionweb/test/dist/languages/with-enum.js"
import { diagramPath, instancePath, languagePath } from "./paths.js"

writeFileSync(diagramPath("metametamodel-gen.puml"), generatePlantUmlForLanguage(lioncore))
writeFileSync(diagramPath("metametamodel-gen.md"), generateMermaidForLanguage(lioncore))
console.log(`generated diagrams for LionCore M3`)

writeFileSync(diagramPath("builtins.puml"), generatePlantUmlForLanguage(lioncoreBuiltins))
writeFileSync(diagramPath("builtins.md"), generateMermaidForLanguage(lioncoreBuiltins))
console.log(`generated diagrams for LionCore Built-ins`)

const saveLanguageFiles = (language: Language, name: string, ...generationOptions: GenerationOptions[]) => {
    writeJsonAsFile(languagePath(`${name}.json`), serializeLanguages(language))
    writeFileSync(languagePath(`${name}.txt`), languageAsText(language))
    writeFileSync(languagePath(`${name}.ts.txt`), tsTypesForLanguage(language, ...generationOptions))
    // (Generate with a '.txt' file extension to avoid it getting picked up by the compiler.)
    console.log(`saved files for ${language.name} M2`)
}

saveLanguageFiles(lioncore, "lioncore")
saveLanguageFiles(lioncoreBuiltins, "builtins")

saveLanguageFiles(shapesLanguage, "shapes", GenerationOptions.assumeSealed)

saveLanguageFiles(libraryLanguage, "library")

writeFileSync(diagramPath("library-gen.puml"), generatePlantUmlForLanguage(libraryLanguage))
writeFileSync(diagramPath("library-gen.md"), generateMermaidForLanguage(libraryLanguage))
console.log(`generated diagrams for Library M2`)

writeJsonAsFile(instancePath("library.json"), nodeSerializer(libraryReader)(libraryModel))
console.log(`serialized library M1`)

saveLanguageFiles(languageWithEnum, "with-enum")

saveLanguageFiles(multiLanguage, "multi")

writeJsonAsFile(instancePath("multi.json"), nodeSerializer(multiReader)(multiModel))
console.log(`serialized multi-language M1`)

const serializationChunk = readFileAsJson(`../${ioLionWebMpsSpecificLanguage.key}/meta/${ioLionWebMpsSpecificLanguage.name}.json`) as LionWebJsonChunk
writeFileSync(languagePath(`${ioLionWebMpsSpecificLanguage.name}.generic.txt`), genericAsTreeText(serializationChunk, [lioncore]))
console.log(`wrote generic textualization of ${ioLionWebMpsSpecificLanguage.name}`)

