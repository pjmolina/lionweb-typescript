#!/usr/bin/env node


import {argv} from "process"

import {extractFromSerialization} from "./serialization-extractor.js"
import {diagramFromSerialization} from "./m3/diagram-generator.js"
import {generateTsTypesWith} from "./m3/ts-types-generator.js"


const main = (args: string[])=> {

    const DIAGRAM_COMMAND = "diagram"
    const EXTRACT_COMMAND = "extract"
    const GENERATE_TS_TYPES_COMMAND = "generate-ts-types"
    const commands = [DIAGRAM_COMMAND, EXTRACT_COMMAND, GENERATE_TS_TYPES_COMMAND]

    if (args.length <= 2) {
        console.log(
`lionweb-cli is a LionWeb utility around LionWeb-TypeScript

Usage: $ npx @lionweb/cli <command> <arguments>

Available commands are:

${commands.map((command) => `    ${command}\n`).join(``)}
`
        )
        return
    }

    const command = args[2]
    const commandArgs = args.slice(3)
    switch (command) {

        case DIAGRAM_COMMAND: {
            if (commandArgs.length === 0) {
                console.log(
                    `The ${DIAGRAM_COMMAND} command generates a PlantUML and Mermaid diagram for the language that the given paths point to.`
                )
            } else {
                commandArgs.forEach(diagramFromSerialization)
            }
            return
        }

        case EXTRACT_COMMAND: {
            if (commandArgs.length === 0) {
                console.log(
`The ${EXTRACT_COMMAND} command extracts the following from a serialization chunk in the form of files: a sorted JSON, and a shortened JSON.
If the chunk is the serialization of a LionCore Language/M2, then a textual rendering is already output.
(See the README.md for more information.)`
                )
            } else {
                commandArgs.forEach(extractFromSerialization)
            }
            return
        }

        case GENERATE_TS_TYPES_COMMAND: {
            if (commandArgs.length === 0) {
                console.log(
`The ${GENERATE_TS_TYPES_COMMAND} command generates a TypeScript source files with type definitions for the given (JSON serializations of) languages, assuming the use of the dynamic façade.`
                )
            } else {
                generateTsTypesWith(commandArgs)
            }
            return
        }

        // TODO  generate schema, import Ecore

        default: {
            console.error(`command "${command}" is not recognized`)
        }
    }

}

main(argv)

