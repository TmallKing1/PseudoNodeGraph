// 自动生成：执行节点 / 五十二、悬浮交互页（LI. Floating Interaction Page）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【关闭悬浮交互页】 Close Floating Interaction Page
 * 分类：执行节点 / 五十二、悬浮交互页（LI. Floating Interaction Page）
 *
 * 可以关闭该玩家实体对应索引的悬浮交互页
 *
 * @en Close the floating interaction page at the specified index for the Player Entity
 * @param playerEntity 生效的玩家实体（玩家实体：实体）
 * @param floatingInteractionPageIndex 悬浮交互页的唯一标识（悬浮交互页索引：整数）
 */
export declare function closeFloatingInteractionPage(playerEntity: Entity, floatingInteractionPageIndex: int): void;

/**
 * 【更新悬浮交互页列表数据】 Update Floating Interaction Page List Data
 * 分类：执行节点 / 五十二、悬浮交互页（LI. Floating Interaction Page）
 *
 * 以列表显示项入参的整数列表对应的列表项，覆盖列表索引对应的页签/单选项视窗的当前显示项
 *
 * @en Replace the current displayed items of the tab or single-choice window at the specified list index with the visible list items corresponding to the input integer list
 * @param playerEntity 生效的玩家实体（玩家实体：实体）
 * @param listIndex 页签/ 单选项视窗的唯一 标识（列表索引：整数）
 * @param visibleListItem 页签/ 单选项视窗的列表项列表，入参将会更新指定页签/单选项视窗的显示列表项（列表显示项：整数列表）
 * @param selectFirstItemByDefault 若配置为是，则默认选中第一个项； 若配置为否，则保持上一次的选中项（若存在）（是否默认选中首项：布尔值）
 */
export declare function updateFloatingInteractionPageListData(playerEntity: Entity, listIndex: int, visibleListItem: int[], selectFirstItemByDefault: bool): void;

/**
 * 【唤起悬浮交互页】 Show Floating Interaction Page
 * 分类：执行节点 / 五十二、悬浮交互页（LI. Floating Interaction Page）
 *
 * 可以在该玩家界面唤起对应索引的悬浮交互页，并支持初始化页签/单选项视窗数据
 *
 * @en Open the floating interaction page at the specified index for the Player, with optional initialization of tab or single-choice window data
 * @param playerEntity 生效的玩家实体（玩家实体：实体）
 * @param floatingInteractionPageIndex 悬浮交互页的唯一标识（悬浮交互页索引：整数）
 * @param initializeListData 键：整数，对应页签/单选项视窗的索引 值：整数列表，对应页签的页签项列表/单选项视窗的列表项列表（初始化列表数据：字典）
 */
export declare function showFloatingInteractionPage<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(playerEntity: Entity, floatingInteractionPageIndex: int, initializeListData: Dict<K, V>): void;
