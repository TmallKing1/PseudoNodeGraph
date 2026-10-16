// 自动生成：执行节点 / 三十八、装备（XXXVIII. Equipment）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【装备添加词条】 Add Affix to Equipment
 * 分类：执行节点 / 三十八、装备（XXXVIII. Equipment）
 *
 * 对指定装备实例添加一条预先配置好的词条，可以覆写词条的数值
 *
 * @en Add a preconfigured Affix to the specified Equipment instance, with the option to overwrite the Affix value
 * @param equipmentID 【装备初始化】时生成的整数型索引来标识该装备实例（装备索引：整数）
 * @param affixConfigID 装备数据管理中预先配置好的词条的对应配置ID（词条配置ID：配置ID）
 * @param overwriteAffixValue 是否覆写词条值（是否覆写词条值：布尔值）
 * @param affixValue 可以覆写预先配置好的词条上的数值（词条数值：浮点数）
 */
export declare function addAffixToEquipment(equipmentID: int, affixConfigID: ConfigId, overwriteAffixValue: bool, affixValue: float): void;

/**
 * 【移除装备词条】 Remove Equipment Affix
 * 分类：执行节点 / 三十八、装备（XXXVIII. Equipment）
 *
 * 移除指定装备实例的对应词条
 *
 * @en Remove the specified Affix from the Equipment instance
 * @param equipmentID 【装备初始化】时生成的整数型索引来标识该装备实例（装备索引：整数）
 * @param affixID 词条序号（词条序号：整数）
 */
export declare function removeEquipmentAffix(equipmentID: int, affixID: int): void;

/**
 * 【设置装备词条值】 Set Equipment Affix Value
 * 分类：执行节点 / 三十八、装备（XXXVIII. Equipment）
 *
 * 设置指定装备实例对应词条上的值
 *
 * @en Sets the value on the corresponding entry for a specified equipment instance.
 * @param equipmentIndex 【装备初始化】时生成的整数型索引来标识该装备实例（装备索引：整数）
 * @param affixID 一个序号对应一个词条（词条序号：整数）
 * @param affixValue 词条数值（词条数值：浮点数）
 */
export declare function setEquipmentAffixValue(equipmentIndex: int, affixID: int, affixValue: float): void;

/**
 * 【装备指定序号添加词条】 Add Affix to Equipment at Specified ID
 * 分类：执行节点 / 三十八、装备（XXXVIII. Equipment）
 *
 * 对指定装备实例的指定词条序号位置添加预先配置好的词条，可以覆写词条的数值
 *
 * @en Add a preconfigured Affix at the specified Affix ID on the Equipment instance, with the option to overwrite the Affix value
 * @param equipmentID 【装备初始化】时生成的整数型索引来标识该装备实例（装备索引：整数）
 * @param affixConfigID 装备数据管理中预先配置好的词条的对应配置ID（词条配置ID：配置ID）
 * @param insertID 插入序号（插入序号：整数）
 * @param overwriteAffixValue 是否覆写词条值（是否覆写词条值：布尔值）
 * @param affixValue 可以覆写预先配置好的词条上的数值（词条数值：浮点数）
 */
export declare function addAffixToEquipmentAtSpecifiedID(equipmentID: int, affixConfigID: ConfigId, insertID: int, overwriteAffixValue: bool, affixValue: float): void;

/**
 * 【替换装备到指定栏位】 Replace Equipment to the Specified Slot
 * 分类：执行节点 / 三十八、装备（XXXVIII. Equipment）
 *
 * 将指定装备替换到目标实体的装备栏对应栏位
 * 如果这个装备已经装备在装备栏中，则此次替换无法生效
 * 如果所要替换的目标栏位已经有装备，则该装备会被替换
 *
 * @en Replaces the specified equipment in the corresponding equipment slot of the target entity.
 * @param targetEntity 目标实体（目标实体：实体）
 * @param equipmentRow 装备栏对应行（装备栏对应行：整数）
 * @param equipmentColumn 装备栏对应列（装备栏对应列：整数）
 * @param equipmentIndex 【装备初始化】时生成的整数型索引来标识该装备实例（装备索引：整数）
 */
export declare function replaceEquipmentToTheSpecifiedSlot(targetEntity: Entity, equipmentRow: int, equipmentColumn: int, equipmentIndex: int): void;

/**
 * 【卸下指定槽位装备】 Remove Equipment from Specified Slot
 * 分类：执行节点 / 三十八、装备（XXXVIII. Equipment）
 *
 * 卸下装备栏指定行列对应的槽位的装备
 *
 * @en Remove the equipment from the specified slot (by row and column)
 * @param equipmentSlotOwnerEntity 装备栏持有者实体（装备栏持有者实体：实体）
 * @param equipmentSlotRowCount 对应装备栏行数（对应装备栏行数：整数）
 * @param equipmentSlotColumnCount 对应装备栏列数（对应装备栏列数：整数）
 */
export declare function removeEquipmentFromSpecifiedSlot(equipmentSlotOwnerEntity: Entity, equipmentSlotRowCount: int, equipmentSlotColumnCount: int): void;
