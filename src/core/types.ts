/**
 * 千星奇域 服务端节点图 —— 基础数据类型
 *
 * 节点图是强类型的：每个引脚都有确定的类型。本文件把节点图的基础类型映射为 TypeScript 类型。
 * 不透明句柄类型（实体、GUID、配置ID、元件ID、阵营等）使用“品牌类型”（branded type），
 * 防止误把一个整数当作实体或配置ID传入；只能从节点出参、事件出参或 `as` 字面量构造获得。
 */

declare const __brand: unique symbol;
/** 品牌类型工具：让结构相同的类型在类型检查时不可互换 */
export type Brand<TBase, TName extends string> = TBase & { readonly [__brand]: TName };

/** 整数（节点图类型：整数）。32 位有符号整数，伪代码中用 number 表示，请只放整数值 */
export type int = number;
/** 浮点数（节点图类型：浮点数） */
export type float = number;
/** 数值泛型约束：整数 或 浮点数（加减乘除等运算节点的“泛型”引脚仅支持这两种） */
export type Num = int | float;
/** 布尔值（节点图类型：布尔值） */
export type bool = boolean;
/**
 * 字符串（节点图类型：字符串）。
 *
 * ⚠ 节点图的字符串能力极其有限：**不支持拼接、截取/拆分、逐字符遍历、取长度**，
 * 字符串只能整体赋值/替换、相等比较，或由【数据类型转换】从其他类型得到。
 * 因此这里用不透明品牌类型表示：`+`、模板字符串、`.length`、`.slice()` 等在类型检查中都会报错。
 * 字面量请用 `str('文本')` 构造。
 */
export type str = Brand<object, 'NodeString'>;
/** 构造节点图字符串字面量（相当于在节点引脚上直接填写字符串） */
export function str(text: string): str {
  return text as unknown as str;
}
/** 去掉品牌的数值：用于把普通 int/float 与 GUID、阵营等品牌数值区分开 */
export type Unbranded<T> = T & { readonly [__brand]?: never };

/** 实体（节点图类型：实体）。运行时实体的引用（关卡、玩家、角色、物件、造物等） */
export type Entity = Brand<object, 'Entity'>;
/** GUID（节点图类型：GUID）。场景中预先布设实体的全局唯一标识 */
export type GUID = Brand<number, 'GUID'>;
/** 配置ID（节点图类型：配置ID）。各类配置（单位状态、技能、道具、特效……）的ID */
export type ConfigId = Brand<number, 'ConfigId'>;
/** 元件ID（节点图类型：元件ID）。元件（Prefab）的ID */
export type PrefabId = Brand<number, 'PrefabId'>;
/** 阵营（节点图类型：阵营） */
export type Faction = Brand<number, 'Faction'>;
/** 自定义变量快照（节点图类型：自定义变量快照） */
export type CustomVariableSnapshot = Brand<object, 'CustomVariableSnapshot'>;
/** 局部变量（节点图类型：局部变量）。【获取局部变量】/【设置局部变量】节点的句柄；伪代码中请直接使用 let 变量 */
export type LocalVariable = Brand<object, 'LocalVariable'>;

/** 三维向量（节点图类型：三维向量）。坐标/方向/欧拉角（单位：度，X 俯仰、Y 偏航、Z 翻滚） */
export interface Vec3 {
  readonly x: float;
  readonly y: float;
  readonly z: float;
}
/** 构造三维向量字面量的便捷函数（等价于运算节点【创建三维向量】） */
export function vec3(x: float, y: float, z: float): Vec3 {
  return { x, y, z };
}

/**
 * 枚举（节点图类型：枚举）中取值未在文档中列出的枚举，用不透明品牌字符串表示。
 * 见 TODO.md。用法：`'火' as OpaqueEnum<'元素类型'>`
 */
export type OpaqueEnum<TName extends string> = Brand<string, `Enum:${TName}`>;

/** 可作为字典键的类型（节点图字典键：整数、字符串、实体、GUID、阵营、配置ID、元件ID 等） */
export type DictKey = int | str | Entity | GUID | Faction | ConfigId | PrefabId;

/** 节点图中任意可用的值类型（“泛型”引脚可连接的类型） */
export type NodeScalar =
  | int | float | bool | str | Entity | GUID | ConfigId | PrefabId | Faction | Vec3 | OpaqueEnum<string> | object;
export type NodeValue = NodeScalar | readonly NodeScalar[] | Dict<any, any>;

/**
 * 字典（节点图类型：字典）。键值对无序。伪代码中可用 `new Map()` 或运算节点【建立字典】/【拼装字典】创建。
 */
export type Dict<K extends DictKey = DictKey, V = NodeValue> = Map<K, V>;

/**
 * 结构体（节点图类型：结构体）。在伪代码中用 interface 声明自定义结构体，
 * 【拼装结构体】= 对象字面量，【拆分结构体】= 解构，【修改结构体】= 字段赋值。
 */
export type Struct = Record<string, NodeValue>;
