// 自动生成：查询节点 / 二十四、装备（XXIV. Equipment）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取装备词条列表】 Get Equipment Affix List
 * 分类：查询节点 / 二十四、装备（XXIV. Equipment）
 *
 * 获取该装备实例的所有词条组成的列表
 * 装备初始化时，词条的数值会发生随机，所以装备实例上的装备词条也会生成对应的实例，故数据类型为整数而不是配置ID
 *
 * @en Returns a list of all Affixes on this Equipment instance
 * @param equipmentIndex 装备索引（装备索引：整数）
 * @returns 装备词条列表（装备词条列表：整数列表）
 */
export declare function getEquipmentAffixList(equipmentIndex: int): int[];

/**
 * 【获取装备词条配置ID】 Get Equipment Affix Config ID
 * 分类：查询节点 / 二十四、装备（XXIV. Equipment）
 *
 * 根据装备实例上装备词条的序号获取该词条的配置ID
 *
 * @en Returns the Config ID of an Equipment Affix by its ID on the Equipment instance
 * @param equipmentIndex 装备索引（装备索引：整数）
 * @param affixID 词条序号（词条序号：整数）
 * @returns 词条配置ID（词条配置ID：配置ID）
 */
export declare function getEquipmentAffixConfigID(equipmentIndex: int, affixID: int): ConfigId;

/**
 * 【获取装备词条数值】 Get Equipment Affix Value
 * 分类：查询节点 / 二十四、装备（XXIV. Equipment）
 *
 * 获取装备实例上对应序号词条的数值
 *
 * @en Returns the value of the Affix at the specified ID on the Equipment instance
 * @param equipmentIndex 装备索引（装备索引：整数）
 * @param affixID 词条序号（词条序号：整数）
 * @returns 词条数值（词条数值：浮点数）
 */
export declare function getEquipmentAffixValue(equipmentIndex: int, affixID: int): float;

/**
 * 【查询装备标签列表】 Query Equipment Tag List
 * 分类：查询节点 / 二十四、装备（XXIV. Equipment）
 *
 * 查询该装备实例的所有标签组成的列表
 *
 * @en Searches the list of all Tags on this Equipment instance
 * @param equipmentIndex 装备索引（装备索引：整数）
 * @returns 标签列表（标签列表：配置ID列表）
 */
export declare function queryEquipmentTagList(equipmentIndex: int): ConfigId[];

/**
 * 【根据装备索引查询装备配置ID】 Query Equipment Config ID by Equipment ID
 * 分类：查询节点 / 二十四、装备（XXIV. Equipment）
 *
 * 根据装备索引查询装备配置ID，装备实例的索引可以在【装备初始化】事件中获取到
 *
 * @en Searches the Equipment Config ID by Equipment ID. The Equipment Instance ID can be obtained in the [Equipment Initialization] event
 * @param equipmentIndex 装备索引（装备索引：整数）
 * @returns 装备配置ID（装备配置ID：配置ID）
 */
export declare function queryEquipmentConfigIDByEquipmentID(equipmentIndex: int): ConfigId;

/**
 * 【获取指定装备栏位的装备索引】 Get the Equipment Index of the Specified Equipment Slot
 * 分类：查询节点 / 二十四、装备（XXIV. Equipment）
 *
 * 获取目标实体装备栏上指定行列对应装备的索引
 *
 * @en Get the equipment index of the specified equipment slot
 * @param targetEntity 目标实体（目标实体：实体）
 * @param row 行（行：整数）
 * @param column 列（列：整数）
 * @returns 装备索引（装备索引：整数）
 */
export declare function getTheEquipmentIndexOfTheSpecifiedEquipmentSlot(targetEntity: Entity, row: int, column: int): int;
