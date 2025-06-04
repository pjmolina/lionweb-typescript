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

import {
    collectingDeltaHandler,
    nodeBaseDeserializer,
    PropertyAddedDelta,
    PropertyChangedDelta,
    serializeNodeBases
} from "@lionweb/class-core"
import { AccumulatingSimplisticHandler, BuiltinPropertyValueDeserializer } from "@lionweb/core"
import { LionWebJsonMetaPointer } from "@lionweb/json"

import { deepEqual, equal, isTrue, throws } from "../assertions.js"
import { DatatypeTestConcept, TestLanguageBase } from "../gen/TestLanguage.g.js"

const testLanguageBase = TestLanguageBase.INSTANCE


describe("[1] string property", () => {

    it("getting an unset [1] string property", () => {
        const [handleDelta, deltas] = collectingDeltaHandler();
        const dtc = DatatypeTestConcept.create("dtc", handleDelta);

        // pre-check:
        equal(deltas.length, 0);

        // action+check:
        throws(
            () => {
                equal(dtc.stringValue_1, undefined);
            },
            `can't read required property "stringValue_1" that's unset on instance of TestLanguage.DatatypeTestConcept with id=dtc`
        )
        equal(deltas.length, 0);
    });

    const metaPointer: LionWebJsonMetaPointer = {
        language: "TestLanguage",
        version: "0",
        key: "DatatypeTestConcept-stringValue_1"
    };

    it("serializing and deserializing an unset [1] string property", () => {
        const dtc = DatatypeTestConcept.create("dtc");
        const serializationChunk = serializeNodeBases([dtc]);
        const {nodes} = serializationChunk;
        equal(nodes.length, 1);
        equal(nodes[0].properties.length, 0);

        const [handleDelta, deltas] = collectingDeltaHandler();
        const deserialize = nodeBaseDeserializer([testLanguageBase], handleDelta);
        const problemHandler = new AccumulatingSimplisticHandler();
        const deserializedNodes = deserialize(serializationChunk, [], new BuiltinPropertyValueDeserializer(), problemHandler);
        equal(problemHandler.allProblems.length, 0);
        equal(deserializedNodes.length, 1);
        const root = deserializedNodes[0];
        isTrue(root instanceof DatatypeTestConcept);
        const deserializedLtc = root as DatatypeTestConcept;
        equal(deserializedLtc.id, "dtc");
        equal(deserializedLtc.classifier, testLanguageBase.DatatypeTestConcept);
        equal(deserializedLtc.parent, undefined);
        throws(
            () => {
                equal(dtc.stringValue_1, undefined);
            },
            `can't read required property "stringValue_1" that's unset on instance of TestLanguage.DatatypeTestConcept with id=dtc`
        )
        equal(deltas.length, 0);
    });

    it("setting a [1] string property", () => {
        const [handleDelta, deltas] = collectingDeltaHandler();
        const dtc = DatatypeTestConcept.create("dtc", handleDelta);

        // pre-check:
        equal(deltas.length, 0);

        // action+check:
        dtc.stringValue_1 = "foo";
        equal(dtc.stringValue_1, "foo");
        equal(deltas.length, 1);
        deepEqual(
            deltas[0],
            new PropertyAddedDelta(dtc, testLanguageBase.DatatypeTestConcept_stringValue_1, "foo")
        );
    });

    it("serializing and deserializing a set [1] string property", () => {
        const dtc = DatatypeTestConcept.create("dtc");
        dtc.stringValue_1 = "foo";
        const serializationChunk = serializeNodeBases([dtc]);
        const {nodes} = serializationChunk;
        equal(nodes.length, 1);
        equal(nodes[0].properties.length, 1);
        deepEqual(
            nodes[0].properties[0],
            {
                property: metaPointer,
                value: "foo"
            }
        );

        const [handleDelta, deltas] = collectingDeltaHandler();
        const deserialize = nodeBaseDeserializer([testLanguageBase], handleDelta);
        const problemHandler = new AccumulatingSimplisticHandler();
        const deserializedNodes = deserialize(serializationChunk, [], new BuiltinPropertyValueDeserializer(), problemHandler);
        equal(problemHandler.allProblems.length, 0);
        equal(deserializedNodes.length, 1);
        const root = deserializedNodes[0];
        isTrue(root instanceof DatatypeTestConcept);
        const deserializedLtc = root as DatatypeTestConcept;
        equal(deserializedLtc.id, "dtc");
        equal(deserializedLtc.classifier, testLanguageBase.DatatypeTestConcept);
        equal(deserializedLtc.parent, undefined);
        equal(deserializedLtc.stringValue_1, "foo");
        equal(deltas.length, 0);
    });

    it("unsetting a [1] string property", () => {
        const [handleDelta, deltas] = collectingDeltaHandler();
        const dtc = DatatypeTestConcept.create("dtc", handleDelta);

        // pre-check:
        dtc.stringValue_1 = "foo";
        equal(deltas.length, 1);

        // action+check:
        throws(
            () => {
                // @ts-expect-error Doesn't compile, but we want to test the behavior anyway.
                dtc.stringValue_1 = undefined;
            },
            `can't unset required property "stringValue_1" on instance of TestLanguage.DatatypeTestConcept with id=dtc`
        )
        equal(deltas.length, 1);
    });

    it("changing a [1] string property", () => {
        const [handleDelta, deltas] = collectingDeltaHandler();
        const dtc = DatatypeTestConcept.create("dtc", handleDelta);

        // pre-check:
        dtc.stringValue_1 = "foo";
        equal(deltas.length, 1);

        // action+check:
        dtc.stringValue_1 = "bar";
        equal(dtc.stringValue_1, "bar");
        equal(deltas.length, 2);
        deepEqual(
            deltas[1],
            new PropertyChangedDelta(dtc, testLanguageBase.DatatypeTestConcept_stringValue_1, "foo", "bar")
        );
    });

});

