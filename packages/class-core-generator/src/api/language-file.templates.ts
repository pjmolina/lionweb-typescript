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

import {Concept, groupBy, Language} from "@lionweb/core"
import {asString, commaSeparated, when, withNewlineAppended} from "littoral-templates"

import {typeForLanguageEntity} from "./entity-types.templates.js"
import {reflectiveClassFor} from "./reflective-layer.templates.js"
import {indent} from "../utils/textgen.js"
import {sortedStringsByUppercase} from "../utils/string-sorting.js"
import {dependencyOrderOf} from "../utils/toposort.js"
import {Imports} from "./helpers/index.js"
import {GeneratorOptions} from "./generator.js"


const importStatement = (dep: string, items: string[]) =>
    when(items.length > 0)([
        `import {`,
        indent(commaSeparated(sortedStringsByUppercase(items))),
        `} from "${dep}";`,
        ``
    ])


export const languageFileFor = (language: Language, options: GeneratorOptions) => {

    const {name, version, key, id, entities} = language

    const imports = new Imports(language)

    const orderedEntities = dependencyOrderOf(entities, (entity) => (entity instanceof Concept && !!entity.extends) ? [entity.extends] : [])
    if (typeof orderedEntities === "boolean") {
        throw new Error(`language ${name} has a cycle among the graph of entities with edges formed by the inheritance dependency`)
    }

    const mpsAnnotationsPerId = groupBy(options.mpsAnnotations, ({annotatedNodeId}) => annotatedNodeId)

    const postImportsPart = [
        ``,
        reflectiveClassFor(imports)(language),
        ``,
        ``,
        orderedEntities
            .filter((entity) => entity.language === language)
            .map(withNewlineAppended(typeForLanguageEntity(imports, mpsAnnotationsPerId)))
    ]

    return asString([
        options?.header ?? [],
        `/*
 * language's metadata:
 *     name:    ${name}
 *     version: ${version}
 *     key:     ${key}
 *     id:      ${id}
 */`,
        ``,
        ``,
        importStatement(`@lionweb/core`, imports.coreImports),
        importStatement(options.genericImportLocation, imports.genericImports),
        importStatement(`./index.g.js`, imports.languageImports),
        postImportsPart
    ])
}

