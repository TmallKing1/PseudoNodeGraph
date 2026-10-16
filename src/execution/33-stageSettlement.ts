// 自动生成：执行节点 / 三十三、关卡结算（XXXIII. Stage Settlement）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置玩家结算计分板展示数据】 Set Player Settlement Scoreboard Data Display
 * 分类：执行节点 / 三十三、关卡结算（XXXIII. Stage Settlement）
 *
 * 设置玩家结算计分板展示数据，显示在关卡结算后弹出的计分板内。由于该节点涉及了局外功能的显示，故【数据值】和【数据名称】目前仅在手动输入文本的时候支持多语言翻译，若为连线输入，则不支持多语言翻译
 * 计分板上的数据最多显示三条，多余三条的数据即使成功运行了节点逻辑也会不显示在计分板内
 *
 * @en Set the Player's Scoreboard display data, which is shown on the Scoreboard after Stage Settlement. Since this node involves the display of external functions, [Data Value] and [Data Name] currently support multilingual translation only when manually entering text. If entered via connection input, multilingual translation is not supported.
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param setEntity 生效的玩家实体（设置实体：实体）
 * @param dataOrder 该数据的排序（数据顺序：整数）
 * @param dataName 该数据的名称（数据名称：字符串）
 * @param dataValue 该数据的值，支持整数、浮点数、字符串（数据值：泛型）
 */
export declare function setPlayerSettlementScoreboardDataDisplay<T extends NodeValue = NodeValue>(setEntity: Entity, dataOrder: int, dataName: str, dataValue: T): void;

/**
 * 【设置玩家结算排名数值】 Set Player Settlement Ranking Value
 * 分类：执行节点 / 三十三、关卡结算（XXXIII. Stage Settlement）
 *
 * 设置玩家结算后的排名数值，再按照【关卡设置】-【结算】中的【排名数值比较顺序】的设置来决定最终的排名顺序
 *
 * @en Set the Player's ranking value after Settlement, then determine the final ranking order according to [Ranking Value Comparison Order] in [Stage Settings] – [Settlement]
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param rankingValue 排名数值（排名数值：整数）
 */
export declare function setPlayerSettlementRankingValue(playerEntity: Entity, rankingValue: int): void;

/**
 * 【设置玩家结算成功状态】 Set Player Settlement Success Status
 * 分类：执行节点 / 三十三、关卡结算（XXXIII. Stage Settlement）
 *
 * 设置玩家结算成功状态
 *
 * @en Set Player Settlement Success Status
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param settlementStatus 分为未定、胜利、失败三种（结算状态：枚举）
 */
export declare function setPlayerSettlementSuccessStatus(playerEntity: Entity, settlementStatus: E.SettlementStatus): void;

/**
 * 【设置阵营结算排名数值】 Set Faction Settlement Ranking Value
 * 分类：执行节点 / 三十三、关卡结算（XXXIII. Stage Settlement）
 *
 * 设置阵营结算后的排名数值，再按照【关卡设置】-【结算】中的【排名数值比较顺序】的设置来决定最终的排名顺序
 *
 * @en Set the faction's ranking value after Settlement, then determine the final ranking order according to [Ranking Value Comparison Order] in [Stage Settings] – [Settlement]
 * @param faction 生效的阵营实体（阵营：阵营）
 * @param rankingValue 排名数值（排名数值：整数）
 */
export declare function setFactionSettlementRankingValue(faction: Faction, rankingValue: int): void;

/**
 * 【设置阵营结算成功状态】 Set Faction Settlement Success Status
 * 分类：执行节点 / 三十三、关卡结算（XXXIII. Stage Settlement）
 *
 * 设置阵营结算成功状态
 *
 * @en Set Faction Settlement Success Status
 * @param faction 生效的阵营实体（阵营：阵营）
 * @param settlementStatus 分为未定、胜利、失败三种（结算状态：枚举）
 */
export declare function setFactionSettlementSuccessStatus(faction: Faction, settlementStatus: E.SettlementStatus): void;
