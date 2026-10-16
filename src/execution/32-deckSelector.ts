// 自动生成：执行节点 / 三十二、卡牌选择器（XXXII. Deck Selector）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【唤起卡牌选择器】 Invoke Deck Selector
 * 分类：执行节点 / 三十二、卡牌选择器（XXXII. Deck Selector）
 *
 * 对目标玩家打开提前制作好的卡牌选择器
 *
 * @en Open the pre-made Deck Selector for the Target Player
 * @param targetPlayer 指定运行时玩家，唤起卡牌选择器（目标玩家：实体）
 * @param deckSelectorID 引用的界面控件组索引（卡牌选择器索引：整数）
 * @param selectDuration 若为空，则读取卡牌选择器默认配置；若不为空，以此处时间参数为实际生效时长 单位为秒。超过2000000秒会无法唤起（选择时长：浮点数）
 * @param selectResultCorrespondingList 和显示项一一对应，卡牌选择器返回的实际结果是显示项对应的结果值 推荐配置1至X（选择结果对应列表：整数列表）
 * @param selectDisplayCorrespondingList 卡牌库中的配置引用（选择显示对应列表：整数列表）
 * @param selectMinimumQuantity 选择卡牌数量下限，满足数量才可进行合法的选择交互（选择数量下限：整数）
 * @param selectMaximumQuantity 选择卡牌数量上限，满足数量才可进行合法的选择交互（选择数量上限：整数）
 * @param refreshMode 不可刷新：刷新数量下限和刷新数量上限，两入参无效，且选择界面无刷新按键 部分刷新：刷新数量下限和刷新数量上限，两入参有效，且选择界面有刷新按键 全量刷新：刷新数量下限和刷新数量上限，两入参无效，默认返回全量结果，且选择界面有刷新按键（刷新方式：枚举）
 * @param refreshMinimumQuantity 选择卡牌数量下限，满足数量才可进行合法的刷新交互（刷新数量下限：整数）
 * @param refreshMaximumQuantity 选择卡牌数量上限，满足数量才可进行合法的刷新交互（刷新数量上限：整数）
 * @param defaultReturnSelection 如果卡牌选择器超时/未交互/卡牌选择器异常关闭等情况，支持强制赋予配置的该结果 该结果的列表长度，需要和合法选择卡牌数量一致（默认返回选择：整数列表）
 */
export declare function invokeDeckSelector(targetPlayer: Entity, deckSelectorID: int, selectDuration: float, selectResultCorrespondingList: int[], selectDisplayCorrespondingList: int[], selectMinimumQuantity: int, selectMaximumQuantity: int, refreshMode: E.DeckSelectorRefreshMode, refreshMinimumQuantity: int, refreshMaximumQuantity: int, defaultReturnSelection: int[]): void;

/**
 * 【关闭卡牌选择器】 Close Deck Selector
 * 分类：执行节点 / 三十二、卡牌选择器（XXXII. Deck Selector）
 *
 * 关闭指定玩家当前生效的卡牌选择器
 *
 * @en Close the currently active Deck Selector for the specified Player
 * @param targetPlayer 生效的玩家实体（目标玩家：实体）
 * @param deckSelectorIndex 卡牌选择器索引（卡牌选择器索引：整数）
 */
export declare function closeDeckSelector(targetPlayer: Entity, deckSelectorIndex: int): void;

/**
 * 【随机卡牌选择器选择列表】 Random Deck Selector Selection List
 * 分类：执行节点 / 三十二、卡牌选择器（XXXII. Deck Selector）
 *
 * 将输入的列表进行随机排序
 *
 * @en Randomly sort the input List
 * @param selectList 选择列表（选择列表：整数列表）
 */
export declare function randomDeckSelectorSelectionList(selectList: int[]): void;
