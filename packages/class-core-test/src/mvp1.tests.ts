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

import {SerializationChunk} from "@lionweb/core";
import {readFileAsJson, writeJsonAsFile} from "@lionweb/utilities";
import {observe} from "mobx";
import {join} from "path";

import {deepEqual, equal, fail, isTrue, throws} from "./assertions.js";

import {DatatypeTestConcept, TestEnumeration, TestLanguageBase} from "./gen/TestLanguage.g.js";
import {
    collectingDeltaHandler,
    nodeBaseDeserializer,
    INodeBase,
    PropertyAddedDelta,
    PropertyChangedDelta,
    serializeNodeBases
} from "@lionweb/class-core";


describe("TestConcept", () => {

    const testLanguageBase = TestLanguageBase.INSTANCE;

    it("direct instantiation", () => {
        const instance = DatatypeTestConcept.create("foo");
        equal(instance.id, "foo");
        equal(instance.classifier, testLanguageBase.DatatypeTestConcept);
        equal(instance.parent, undefined);
        equal(instance.containment, undefined);
    });

    it("instantiation via factory", () => {
        const instance = testLanguageBase.factory()(testLanguageBase.DatatypeTestConcept, "foo");
        equal(instance.id, "foo");
        equal(instance.classifier, testLanguageBase.DatatypeTestConcept);
        equal(instance.parent, undefined);
        equal(instance.containment, undefined);
    });

    it("getting and setting .stringValue_1", () => {
        const instance = DatatypeTestConcept.create("foo");
        throws(() => instance.stringValue_1, `can't read required property "stringValue_1" that's unset on instance of TestLanguage.DatatypeTestConcept with id=foo`);
        instance.stringValue_1 = "bar";
        equal(instance.stringValue_1, "bar");
        instance.stringValue_1 = "fiddlesticks";
        equal(instance.stringValue_1, "fiddlesticks");
    });

    it("getting and setting .stringValue_1 via a value manager", () => {
        const instance = DatatypeTestConcept.create("foo");
        equal(instance.getPropertyValueManager(testLanguageBase.DatatypeTestConcept_stringValue_1).getDirectly(), undefined);
        instance.stringValue_1 = "bar";
        equal(instance.getPropertyValueManager(testLanguageBase.DatatypeTestConcept_stringValue_1).getDirectly(), "bar");
    });

    it("getting and setting .enumValue_1", () => {
        const instance = DatatypeTestConcept.create("foo");
        throws(() => instance.enumValue_1, `can't read required property "enumValue_1" that's unset on instance of TestLanguage.DatatypeTestConcept with id=foo`);
        instance.enumValue_1 = TestEnumeration.literal1;
        equal(instance.enumValue_1, TestEnumeration.literal1);
        instance.enumValue_1 = TestEnumeration.literal2;
        equal(instance.enumValue_1, TestEnumeration.literal2);
    });

    it("getting and setting .newValue via a value manager", () => {
        const instance = DatatypeTestConcept.create("foo");
        equal(instance.getPropertyValueManager(testLanguageBase.DatatypeTestConcept_enumValue_1).getDirectly(), undefined);
        instance.enumValue_1 = TestEnumeration.literal3;
        equal(instance.getPropertyValueManager(testLanguageBase.DatatypeTestConcept_enumValue_1).getDirectly(), TestEnumeration.literal3);
    });

    it("receiving ∂s when changing .stringValue_1", (done) => {
        const [deltaHandler, deltas] = collectingDeltaHandler();
        const instance = DatatypeTestConcept.create("foo", deltaHandler);

        // pre-check:
        equal(deltas.length, 0);

        // action+check:
        instance.stringValue_1 = "bar";
        equal(deltas.length, 1);
        const delta1 = deltas[0];
        isTrue(delta1 instanceof PropertyAddedDelta);
        const pcd1 = delta1 as PropertyAddedDelta<string>;
        equal(pcd1.container, instance);
        equal(pcd1.property, testLanguageBase.DatatypeTestConcept_stringValue_1);
        equal(pcd1.value, "bar");

        instance.stringValue_1 = "fiddlesticks";
        equal(deltas.length, 2);
        deepEqual(
            deltas[1],
            new PropertyChangedDelta(instance, testLanguageBase.DatatypeTestConcept_stringValue_1, "bar", "fiddlesticks")
        );

        instance.stringValue_1 = "fiddlesticks";  // change to the same value
        equal(deltas.length, 2);

        done();
    });

    it("MobX doesn't see a DatatypeTestConcept instance changing as a whole", (done) => {
        const instance = DatatypeTestConcept.create("foo");
        observe(instance, (change) => {
            console.dir(change);
            fail("saw a change while observing the instance");
        });
        done();
    });
    /*
     * Note: this should not imply that observer(<stateless React component instance />) doesn't work!
     * SomeClass is of the right type — IObservableValue
     */

    const artifactsPath = "artifacts";

    const persistSerialization = (nodes: INodeBase[], name: string) => {
        const actual = serializeNodeBases(nodes);
        writeJsonAsFile(join(artifactsPath, `${name}.actual.json`), actual);
        const expected = readFileAsJson(join(artifactsPath, `${name}.expected.json`));
        deepEqual(actual, expected);
    };

    it("can be serialized", () => {
        const instance = DatatypeTestConcept.create("foo");
        persistSerialization([instance], "DatatypeTestConcept-values=undefined");
        instance.stringValue_1 = "bar";
        instance.enumValue_1 = TestEnumeration.literal3;
        persistSerialization([instance], "DatatypeTestConcept-value=bar-enumValue_1=literal3");
    });

    it("can be deserialized without sending deltas, but then changes do send deltas", (done) => {
        const serializationChunk = readFileAsJson(join(artifactsPath, "DatatypeTestConcept-value=bar-enumValue_1=literal3.expected.json")) as SerializationChunk;
        const [deltaHandler, deltas] = collectingDeltaHandler();
        const deserialize = nodeBaseDeserializer([testLanguageBase], deltaHandler);
        const nodes = deserialize(serializationChunk, []);
        equal(deltas.length, 0);
        equal(nodes.length, 1);
        const node1 = nodes[0];
        equal(node1.id, "foo");
        equal(node1.classifier, testLanguageBase.DatatypeTestConcept);
        equal(node1.parent, undefined);
        equal(node1.containment, undefined);
        isTrue(node1 instanceof DatatypeTestConcept);
        const instance = node1 as DatatypeTestConcept;
        equal(instance.stringValue_1, "bar");
        equal(instance.enumValue_1, TestEnumeration.literal3);
        equal(deltas.length, 0);
        instance.stringValue_1 = "fiddlesticks";
        equal(deltas.length, 1);
        const delta1 = deltas[0];
        isTrue(delta1 instanceof PropertyChangedDelta);
        const pcd1 = delta1 as PropertyChangedDelta<string>;
        equal(pcd1.container, instance);
        equal(pcd1.property, testLanguageBase.DatatypeTestConcept_stringValue_1);
        equal(pcd1.oldValue, "bar");
        equal(pcd1.newValue, "fiddlesticks");
        instance.enumValue_1 = TestEnumeration.literal2;
        equal(deltas.length, 2);    // <-- failing
        const delta2 = deltas[1];
        isTrue(delta2 instanceof PropertyChangedDelta);
        const pcd2 = delta2 as PropertyChangedDelta<TestEnumeration>;
        equal(pcd2.container, instance);
        equal(pcd2.property, testLanguageBase.DatatypeTestConcept_enumValue_1);
        equal(pcd2.oldValue, TestEnumeration.literal3);
        equal(pcd2.newValue, TestEnumeration.literal2);
        done();
    });

});

