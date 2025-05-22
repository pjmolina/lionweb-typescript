import { LionWebId } from "@lionweb/json"
import { flatMapNonCyclingFollowing, trivialFlatMapper } from "@lionweb/ts-utils"
import { Node } from "./types.js"


/**
 * @return a list of itself and the ancestors of the given {@link Node node}, in anti-chronological order.
 */
export const containmentChain = (node: Node): Node[] => {
    const getParent = (t: Node): Node[] => t.parent === undefined ? [] : [t.parent]
    return flatMapNonCyclingFollowing(trivialFlatMapper, getParent)(node)
}


/**
 * Maps an array of {@link Node AST nodes} or `null`s to their IDs.
 * These `null`s might be the result of unresolved children.
 */
export const asIds = (nodeOrNulls: (Node | null)[]): (LionWebId | null)[] =>
    nodeOrNulls.map((nodeOrNull) => nodeOrNull === null ? null : nodeOrNull.id)


/**
 * @return the id of the given {@link Node node}.
 */
export const idOf = <T extends Node>({id}: T): LionWebId =>
    id

