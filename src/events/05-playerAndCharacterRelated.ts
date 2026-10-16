// 自动生成：事件节点 / 五、玩家与角色相关（V. Player and Character Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【角色倒下时】事件的出参 / Output parameters of "When the Character Is Down"
 */
export interface CharacterIsDownEvent {
  /**
   * 角色实体（角色实体：实体）
   */
  readonly characterEntity: Entity;
  /**
   * 节点图导致：因节点图的【销毁实体】节点导致的角色倒下 正常倒下：因生命值变为0导致的角色倒下 非正常倒下：因溺水、坠入深渊等导致的角色倒下（原因：枚举）
   */
  readonly reason: E.DownReason;
  /**
   * 击倒者实体（击倒者实体：实体）
   */
  readonly knockdownEntity: Entity;
}
/**
 * 【角色倒下时】 When the Character Is Down
 * 分类：事件节点 / 五、玩家与角色相关（V. Player and Character Related）
 *
 * 角色倒下时，角色实体上的节点图可以触发该事件
 *
 * @en When a Character is Downed, the Node Graph on the Character Entity can trigger this event
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onCharacterIsDown(handler: (ev: CharacterIsDownEvent) => void): void;

/**
 * 【角色复苏时】事件的出参 / Output parameters of "When Character Revives"
 */
export interface CharacterRevivesEvent {
  /**
   * 角色实体（角色实体：实体）
   */
  readonly characterEntity: Entity;
}
/**
 * 【角色复苏时】 When Character Revives
 * 分类：事件节点 / 五、玩家与角色相关（V. Player and Character Related）
 *
 * 角色复苏时，角色实体上的节点图可以触发该事件
 *
 * @en When a Character is Revived, the Node Graph on the Character Entity can trigger this event
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onCharacterRevives(handler: (ev: CharacterRevivesEvent) => void): void;

/**
 * 【玩家所有角色倒下时】事件的出参 / Output parameters of "When All Player's Characters Are Down"
 */
export interface AllPlayersCharactersAreDownEvent {
  /**
   * 玩家实体（玩家实体：实体）
   */
  readonly playerEntity: Entity;
  /**
   * 节点图导致：因节点图的【销毁实体】节点导致的角色倒下 正常倒下：因生命值变为0导致的角色倒下 非正常倒下：因溺水、坠入深渊等导致的角色倒下（原因：枚举）
   */
  readonly reason: E.DownReason;
}
/**
 * 【玩家所有角色倒下时】 When All Player's Characters Are Down
 * 分类：事件节点 / 五、玩家与角色相关（V. Player and Character Related）
 *
 * 玩家的所有角色实体均倒下时，玩家实体的节点图上触发该事件
 *
 * @en This event is triggered on the Player Entity's Node Graph when all of the Player's Character Entities are Downed
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onAllPlayersCharactersAreDown(handler: (ev: AllPlayersCharactersAreDownEvent) => void): void;

/**
 * 【玩家异常倒下并复苏时】事件的出参 / Output parameters of "When Player Is Abnormally Downed and Revives"
 */
export interface PlayerIsAbnormallyDownedAndRevivesEvent {
  /**
   * 玩家实体（玩家实体：实体）
   */
  readonly playerEntity: Entity;
}
/**
 * 【玩家异常倒下并复苏时】 When Player Is Abnormally Downed and Revives
 * 分类：事件节点 / 五、玩家与角色相关（V. Player and Character Related）
 *
 * 角色因溺水、坠入深渊等原因倒下并复苏时，玩家实体上触发该事件
 *
 * @en This event is triggered on the Player Entity when a Character is Downed and then Revived due to drowning, falling into an abyss, or similar reasons
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onPlayerIsAbnormallyDownedAndRevives(handler: (ev: PlayerIsAbnormallyDownedAndRevivesEvent) => void): void;

/**
 * 【玩家所有角色复苏时】事件的出参 / Output parameters of "When All Player's Characters Are Revived"
 */
export interface AllPlayersCharactersAreRevivedEvent {
  /**
   * 玩家实体（玩家实体：实体）
   */
  readonly playerEntity: Entity;
}
/**
 * 【玩家所有角色复苏时】 When All Player's Characters Are Revived
 * 分类：事件节点 / 五、玩家与角色相关（V. Player and Character Related）
 *
 * 玩家的所有角色均复苏时，玩家实体的节点图触发该事件
 *
 * @en This event is triggered on the Player Entity's Node Graph when all of the Player's Characters are Revived
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onAllPlayersCharactersAreRevived(handler: (ev: AllPlayersCharactersAreRevivedEvent) => void): void;

/**
 * 【玩家传送完成时】事件的出参 / Output parameters of "When Player Teleport Completes"
 */
export interface PlayerTeleportCompletesEvent {
  /**
   * 玩家实体（玩家实体：实体）
   */
  readonly playerEntity: Entity;
  /**
   * 玩家GUID（玩家GUID：GUID）
   */
  readonly playerGUID: GUID;
}
/**
 * 【玩家传送完成时】 When Player Teleport Completes
 * 分类：事件节点 / 五、玩家与角色相关（V. Player and Character Related）
 *
 * 玩家传送完成时，在玩家实体的节点图上可以触发该事件
 *
 * @en This event is triggered on the Player Entity's Node Graph when the Player completes teleportation
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onPlayerTeleportCompletes(handler: (ev: PlayerTeleportCompletesEvent) => void): void;

/**
 * 【前台角色变化时】事件的出参 / Output parameters of "When the Active Character Changes"
 */
export interface ActiveCharacterChangesEvent {
  /**
   * 玩家实体（玩家实体：实体）
   */
  readonly playerEntity: Entity;
  /**
   * 玩家GUID（玩家GUID：GUID）
   */
  readonly playerGUID: GUID;
  /**
   * 换下的角色实体（换下的角色实体：实体）
   */
  readonly replacedCharacterEntity: Entity;
  /**
   * 当前前台角色实体（当前前台角色实体：实体）
   */
  readonly currentActiveCharacterEntity: Entity;
}
/**
 * 【前台角色变化时】 When the Active Character Changes
 * 分类：事件节点 / 五、玩家与角色相关（V. Player and Character Related）
 *
 * 仅经典模式可用，前台角色变化时在玩家实体上触发该事件
 *
 * @en Available only in Classic Mode. This event is triggered on the player entity when the active character changes.
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onActiveCharacterChanges(handler: (ev: ActiveCharacterChangesEvent) => void): void;
