// 自动生成：运算节点 / 二、数学（II. Math）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhnd4l069tk0
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【拆分三维向量】的多个出参 / Outputs of "Split 3D Vector"
 */
export interface Split3DVectorResult {
  /**
   * X分量（X分量：浮点数）
   */
  readonly xComponent: float;
  /**
   * Y分量（Y分量：浮点数）
   */
  readonly yComponent: float;
  /**
   * Z分量（Z分量：浮点数）
   */
  readonly zComponent: float;
}
/**
 * 【拆分三维向量】 Split 3D Vector
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将三维向量的x、y、z分量输出为三个浮点数
 *
 * @en Outputs the x, y, and z components of a 3D Vector as three Floating Point Numbers
 * @param _3dVector 三维向量（三维向量：三维向量）
 * @returns Split3DVectorResult（多出参，见接口字段）
 */
export function split3DVector(_3dVector: Vec3): Split3DVectorResult {
  return { xComponent: _3dVector.x, yComponent: _3dVector.y, zComponent: _3dVector.z } as any;
}

/**
 * 【三维向量加法】 3D Vector Addition
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算两个三维向量的加法
 *
 * @en Calculates the sum of two 3D Vectors
 * @param _3dVector1 三维向量1（三维向量1：三维向量）
 * @param _3dVector2 三维向量2（三维向量2：三维向量）
 * @returns 结果（结果：三维向量）
 */
export function _3dVectorAddition(_3dVector1: Vec3, _3dVector2: Vec3): Vec3 {
  return { x: _3dVector1.x + _3dVector2.x, y: _3dVector1.y + _3dVector2.y, z: _3dVector1.z + _3dVector2.z };
}

/**
 * 【三维向量减法】 3D Vector Subtraction
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算两个三维向量的减法
 *
 * @en Calculates the difference of two 3D Vectors
 * @param _3dVector1 三维向量1（三维向量1：三维向量）
 * @param _3dVector2 三维向量2（三维向量2：三维向量）
 * @returns 结果（结果：三维向量）
 */
export function _3dVectorSubtraction(_3dVector1: Vec3, _3dVector2: Vec3): Vec3 {
  return { x: _3dVector1.x - _3dVector2.x, y: _3dVector1.y - _3dVector2.y, z: _3dVector1.z - _3dVector2.z };
}

/**
 * 【三维向量缩放】 3D Vector Zoom
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将输入的三维向量缩放后输出（三维向量数乘）
 *
 * @en Scales the input 3D Vector (scalar multiplication) and outputs the result
 * @param _3dVector 三维向量（三维向量：三维向量）
 * @param zoomMultiplier 缩放倍率（缩放倍率：浮点数）
 * @returns 结果（结果：三维向量）
 */
export function _3dVectorZoom(_3dVector: Vec3, zoomMultiplier: float): Vec3 {
  return { x: _3dVector.x * zoomMultiplier, y: _3dVector.y * zoomMultiplier, z: _3dVector.z * zoomMultiplier };
}

/**
 * 【三维向量夹角】 3D Vector Angle
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算两个三维向量之间的夹角，以弧度输出
 *
 * @en Calculates the angle between two 3D Vectors and outputs it in radians
 * @param _3dVector1 三维向量1（三维向量1：三维向量）
 * @param _3dVector2 三维向量2（三维向量2：三维向量）
 * @returns 夹角(弧度)（夹角(弧度)：浮点数）
 */
export function _3dVectorAngle(_3dVector1: Vec3, _3dVector2: Vec3): float {
  const a = _3dVector1, b = _3dVector2;
  const l = Math.hypot(a.x, a.y, a.z) * Math.hypot(b.x, b.y, b.z);
  if (l === 0) return 0;
  return Math.acos(Math.max(-1, Math.min(1, (a.x * b.x + a.y * b.y + a.z * b.z) / l))); // 弧度
}

/**
 * 【三维向量归一化】 3D Vector Normalization
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将三维向量的长度归一化后输出
 *
 * @en Normalizes the length of a 3D Vector and outputs the result
 * @param _3dVector 三维向量（三维向量：三维向量）
 * @returns 结果（结果：三维向量）
 */
export function _3dVectorNormalization(_3dVector: Vec3): Vec3 {
  const l = Math.hypot(_3dVector.x, _3dVector.y, _3dVector.z);
  return l === 0 ? { x: 0, y: 0, z: 0 } : { x: _3dVector.x / l, y: _3dVector.y / l, z: _3dVector.z / l };
}

/**
 * 【加法运算】 Addition
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算两个浮点数或整数的加法
 *
 * @en Adds two Floating Point Numbers or Integers
 * @param a （：泛型）
 * @param b （：泛型）
 * @returns 结果（结果：泛型）
 */
export function addition<T extends Num = Num>(a: T, b: T): T {
  return ((a as number) + (b as number)) as T;
}

/**
 * 【减法运算】 Subtraction
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算两个浮点数或整数的减法
 *
 * @en Subtracts two Floating Point Numbers or Integers
 * @param a （：泛型）
 * @param b （：泛型）
 * @returns 结果（结果：泛型）
 */
export function subtraction<T extends Num = Num>(a: T, b: T): T {
  return ((a as number) - (b as number)) as T;
}

/**
 * 【乘法运算】 Multiplication
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 乘法运算，支持浮点数乘法和整数乘法
 *
 * @en Performs multiplication, supporting Floating Point and Integer multiplication
 * @param a （：泛型）
 * @param b （：泛型）
 * @returns 结果（结果：泛型）
 */
export function multiplication<T extends Num = Num>(a: T, b: T): T {
  return ((a as number) * (b as number)) as T;
}

/**
 * 【除法运算】 Division
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 除法运算，支持浮点数除法和整数除法。整数除法返回整除结果
 * 除数为0时，结果为0
 * -2147483648除以-1的结果为0
 *
 * @en Performs division, supporting Floating Point division and Integer division. Integer division returns the quotient result
 * @param a （：泛型）
 * @param b （：泛型）
 * @returns 结果（结果：泛型）
 */
export function division<T extends Num = Num>(a: T, b: T): T {
  // 整数除法返回整除结果；除数为0时结果为0（伪代码无法区分 int/float，两个整数时按整除处理）
  if ((b as number) === 0) return 0 as T;
  const r = (a as number) / (b as number);
  return (Number.isInteger(a) && Number.isInteger(b) ? Math.trunc(r) : r) as T;
}

/**
 * 【模运算】 Modulo Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 返回输入1对输入2的取模运算，输入1为被除数
 *
 * @en Returns the result of input 1 modulo input 2, with input 1 as the dividend
 * @param a （：整数）
 * @param b （：整数）
 * @returns 结果（结果：整数）
 */
export function moduloOperation(a: int, b: int): int {
  return a % b; // 输入1为被除数（负数取模规则文档未说明，见 TODO.md）
}

/**
 * 【幂运算】 Exponentiation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算底数的指数次幂
 *
 * @en Raises the base to the given exponent and returns the result
 * @param base 底数（底数：泛型）
 * @param exponent 指数（指数：泛型）
 * @returns 结果（结果：泛型）
 */
export function exponentiation<T extends Num = Num>(base: T, exponent: T): T {
  return Math.pow(base as number, exponent as number) as T;
}

/**
 * 【取较大值】 Take Larger Value
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 取出两个输入中较大的一个
 *
 * @en Returns the larger of two inputs
 * @param input1 输入1（输入1：泛型）
 * @param input2 输入2（输入2：泛型）
 * @returns 较大值（较大值：泛型）
 */
export function takeLargerValue<T extends Num = Num>(input1: T, input2: T): T {
  return (input1 >= input2 ? input1 : input2);
}

/**
 * 【取较小值】 Take Smaller Value
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 取出两个输入中较小的一个
 *
 * @en Returns the smaller of two inputs
 * @param input1 输入1（输入1：泛型）
 * @param input2 输入2（输入2：泛型）
 * @returns 较小值（较小值：泛型）
 */
export function takeSmallerValue<T extends Num = Num>(input1: T, input2: T): T {
  return (input1 <= input2 ? input1 : input2);
}

/**
 * 【对数运算】 Logarithm Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算以底数为底真数的对数
 * 底数不应为负数或等于1、真数不应为负数，否则可能产生非法值
 *
 * @en Calculates the logarithm of the argument with the specified base
 * @param realNumber 真数（真数：浮点数）
 * @param base 底数（底数：浮点数）
 * @returns 结果（结果：浮点数）
 */
export function logarithmOperation(realNumber: float, base: float): float {
  return Math.log(realNumber) / Math.log(base);
}

/**
 * 【绝对值运算】 Absolute Value Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 返回输入的绝对值
 *
 * @en Returns the absolute value of the input
 * @param input 输入（输入：泛型）
 * @returns 结果（结果：泛型）
 */
export function absoluteValueOperation<T extends Num = Num>(input: T): T {
  return Math.abs(input as number) as T;
}

/**
 * 【取符号运算】 Sign Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 输入为正数时，返回1
 * 输入为负数时，返回-1
 * 输入为0时，返回0
 *
 * @en When the input is positive, returns 1
 * @param input 输入（输入：泛型）
 * @returns 结果（结果：泛型）
 */
export function signOperation<T extends Num = Num>(input: T): T {
  return Math.sign(input as number) as T;
}

/**
 * 【三维向量模运算】 3D Vector Modulo Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算输入的三维向量的模
 *
 * @en Calculates the magnitude of the input 3D Vector
 * @param _3dVector 三维向量（三维向量：三维向量）
 * @returns 结果（结果：浮点数）
 */
export function _3dVectorModuloOperation(_3dVector: Vec3): float {
  return Math.hypot(_3dVector.x, _3dVector.y, _3dVector.z);
}

/**
 * 【算术平方根运算】 Arithmetic Square Root Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 返回输入值的算术平方根
 *
 * @en Returns the arithmetic square root of the input value
 * @param input 输入（输入：浮点数）
 * @returns 结果（结果：浮点数）
 */
export function arithmeticSquareRootOperation(input: float): float {
  return Math.sqrt(input);
}

/**
 * 【范围限制运算】 Range Limiting Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将输入值限制在[下限,上限]（上下限均包含）后输出。
 * 如果输入值在下限到上限范围内，则返回原值
 * 输入值如果小于下限，则返回下限值；如果输入值大于上限，则返回上限值
 * 如果下限大于上限，认为是错误输入，返回非法值
 *
 * @en Clamps the input value to the range [lower limit, upper limit] (both bounds inclusive) and outputs the result
 * @param input 输入（输入：泛型）
 * @param lowerLimit 下限（下限：泛型）
 * @param upperLimit 上限（上限：泛型）
 * @returns 结果（结果：泛型）
 */
export function rangeLimitingOperation<T extends Num = Num>(input: T, lowerLimit: T, upperLimit: T): T {
  if (lowerLimit > upperLimit) return NaN as T; // 下限大于上限：返回非法值
  return (input < lowerLimit ? lowerLimit : input > upperLimit ? upperLimit : input);
}

/**
 * 【取整数运算】 Round to Integer Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 根据取整方式进行一次取整运算，返回取整后的正数
 *
 * @en Performs a rounding operation based on the rounding method and returns the rounded positive number
 * @param input 输入（输入：浮点数）
 * @param roundingMode 四舍五入：按照四舍五入规则进行取整 向上取整：返回大于输入且离输入值最近的一个整数，例如：输入为1.2时，返回2；输入为-2.3时，返回-2 向下取整：返回小于输入且离输入值最近的一个整数。例如：输入为1.2时，返回1；输入为-2.3时，返回-3 截尾取整：截去浮点数尾部的小数部分，也相当于向0方向取整。例如：输入为1.2时，返回1；输入为-2.3时，返回-2（取整方式：枚举）
 * @returns 结果（结果：整数）
 */
export function roundToIntegerOperation(input: float, roundingMode: E.RoundingMode): int {
  switch (roundingMode) {
    case '取整逻辑_向上取整': return Math.ceil(input);
    case '取整逻辑_向下取整': return Math.floor(input);
    case '取整逻辑_截尾取整': return Math.trunc(input);
    default: return Math.round(input);
  }
}

/**
 * 【创建三维向量】 Create 3D Vector
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 根据x、y、z分量创建一个三维向量
 *
 * @en Creates a 3D Vector from x, y, and z components
 * @param xComponent X分量（X分量：浮点数）
 * @param yComponent Y分量（Y分量：浮点数）
 * @param zComponent Z分量（Z分量：浮点数）
 * @returns 三维向量（三维向量：三维向量）
 */
export function create3DVector(xComponent: float, yComponent: float, zComponent: float): Vec3 {
  return { x: xComponent, y: yComponent, z: zComponent };
}

/**
 * 【逻辑与运算】 Logical AND Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 对输入的两个布尔值进行与运算后输出
 *
 * @en Performs a logical AND operation on the two input Boolean values and returns the result
 * @param input1 输入1（输入1：布尔值）
 * @param input2 输入2（输入2：布尔值）
 * @returns 结果（结果：布尔值）
 */
export function logicalANDOperation(input1: bool, input2: bool): bool {
  return input1 && input2;
}

/**
 * 【逻辑或运算】 Logical OR Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 对输入的两个布尔值进行或运算后输出
 *
 * @en Performs a logical OR operation on the two input Boolean values and returns the result
 * @param input1 输入1（输入1：布尔值）
 * @param input2 输入2（输入2：布尔值）
 * @returns 结果（结果：布尔值）
 */
export function logicalOROperation(input1: bool, input2: bool): bool {
  return input1 || input2;
}

/**
 * 【逻辑异或运算】 Logical XOR Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 对输入的两个布尔值进行异或运算后输出
 *
 * @en Performs a logical XOR operation on the two input Boolean values and returns the result
 * @param input1 输入1（输入1：布尔值）
 * @param input2 输入2（输入2：布尔值）
 * @returns 结果（结果：布尔值）
 */
export function logicalXOROperation(input1: bool, input2: bool): bool {
  return input1 !== input2;
}

/**
 * 【逻辑非运算】 Logical NOT Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 对输入的布尔值进行非运算后输出
 *
 * @en Performs a logical NOT operation on the input Boolean value and returns the result
 * @param input 输入（输入：布尔值）
 * @returns 结果（结果：布尔值）
 */
export function logicalNOTOperation(input: bool): bool {
  return !input;
}

/**
 * 【数值小于】 Less Than
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 返回左值是否小于右值
 *
 * @en Returns whether the left value is less than the right value
 * @param leftValue 左值（左值：泛型）
 * @param rightValue 右值（右值：泛型）
 * @returns 结果（结果：布尔值）
 */
export function lessThan<T extends Num = Num>(leftValue: T, rightValue: T): bool {
  return leftValue < rightValue;
}

/**
 * 【数值小于等于】 Less Than or Equal To
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 返回左值是否小于等于右值
 *
 * @en Returns whether the left value is less than or equal to the right value
 * @param leftValue 左值（左值：泛型）
 * @param rightValue 右值（右值：泛型）
 * @returns 结果（结果：布尔值）
 */
export function lessThanOrEqualTo<T extends Num = Num>(leftValue: T, rightValue: T): bool {
  return leftValue <= rightValue;
}

/**
 * 【数值大于】 Greater Than
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 返回左值是否大于右值
 *
 * @en Returns whether the left value is greater than the right value
 * @param leftValue 左值（左值：泛型）
 * @param rightValue 右值（右值：泛型）
 * @returns 结果（结果：布尔值）
 */
export function greaterThan<T extends Num = Num>(leftValue: T, rightValue: T): bool {
  return leftValue > rightValue;
}

/**
 * 【数值大于等于】 Greater Than or Equal To
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 返回左值是否大于等于右值
 *
 * @en Returns whether the left value is greater than or equal to the right value
 * @param leftValue 左值（左值：泛型）
 * @param rightValue 右值（右值：泛型）
 * @returns 结果（结果：布尔值）
 */
export function greaterThanOrEqualTo<T extends Num = Num>(leftValue: T, rightValue: T): bool {
  return leftValue >= rightValue;
}

/**
 * 【两坐标点距离】 Distance Between Two Coordinate Points
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算两个坐标点之间的欧式距离
 *
 * @en Calculates the Euclidean distance between two coordinates
 * @param coordinatePoint1 坐标点1（坐标点1：三维向量）
 * @param coordinatePoint2 坐标点2（坐标点2：三维向量）
 * @returns 距离（距离：浮点数）
 */
export function distanceBetweenTwoCoordinatePoints(coordinatePoint1: Vec3, coordinatePoint2: Vec3): float {
  return Math.hypot(coordinatePoint1.x - coordinatePoint2.x, coordinatePoint1.y - coordinatePoint2.y, coordinatePoint1.z - coordinatePoint2.z);
}

/**
 * 【正弦函数】 Sine Function
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算输入弧度的正弦
 *
 * @en Calculates the sine of the input in radians
 * @param radian 弧度（弧度：浮点数）
 * @returns 结果（结果：浮点数）
 */
export function sineFunction(radian: float): float {
  return Math.sin(radian);
}

/**
 * 【余弦函数】 Cosine Function
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算输入弧度的余弦
 *
 * @en Calculates the cosine of the input in radians
 * @param radian 弧度（弧度：浮点数）
 * @returns 结果（结果：浮点数）
 */
export function cosineFunction(radian: float): float {
  return Math.cos(radian);
}

/**
 * 【正切函数】 Tangent Function
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算输入弧度的正切
 *
 * @en Calculates the tangent of the input in radians
 * @param radian 弧度（弧度：浮点数）
 * @returns 结果（结果：浮点数）
 */
export function tangentFunction(radian: float): float {
  return Math.tan(radian);
}

/**
 * 【反正弦函数】 Arcsine Function
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算输入的反正弦值，返回为弧度值
 *
 * @en Calculates the arcsine of the input and returns the value in radians
 * @param input 输入（输入：浮点数）
 * @returns 弧度（弧度：浮点数）
 */
export function arcsineFunction(input: float): float {
  return Math.asin(input);
}

/**
 * 【反余弦函数】 Arccosine Function
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算输入的反余弦值，返回为弧度值
 *
 * @en Calculates the arccosine of the input and returns the value in radians
 * @param input 输入（输入：浮点数）
 * @returns 弧度（弧度：浮点数）
 */
export function arccosineFunction(input: float): float {
  return Math.acos(input);
}

/**
 * 【反正切函数】 Arctangent Function
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算输入的反正切值，返回为弧度值
 *
 * @en Calculates the arctangent of the input and returns the value in radians
 * @param input 输入（输入：浮点数）
 * @returns 弧度（弧度：浮点数）
 */
export function arctangentFunction(input: float): float {
  return Math.atan(input);
}

/**
 * 【三维向量旋转】 3D Vector Rotation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将被旋转的三维向量，按照旋转所表示的欧拉角进行旋转后返回结果
 * 说明：被旋转的三维向量是我们期望旋转的向量，旋转的欧拉角表示我们期望对该向量进行何种具体的旋转。而出参结果的三维向量则表示被旋转的原始三维向量在经过旋转后的情况
 *
 * @en Rotates the input 3D Vector by the Euler Angles specified by the rotation and returns the result
 * @param rotate 该三维向量指代一个特定的旋转欧拉角，其三个分量分别代表： X：俯仰角 (Pitch) - 围绕物体局部X轴（右侧轴）的旋转。上下抬头/低头 Y：偏航角 (Yaw) - 围绕物体局部Y轴（上方向轴）的旋转。左右转头 Z：翻滚角 (Roll) - 围绕物体局部Z轴（前方向轴）的旋转。左右倾斜（旋转：三维向量）
 * @param rotated3DVector 被旋转的三维向量（被旋转的三维向量：三维向量）
 * @returns 结果（结果：三维向量）
 */
export function _3dVectorRotation(rotate: Vec3, rotated3DVector: Vec3): Vec3 {
  // 欧拉角（度）：X 俯仰、Y 偏航、Z 翻滚。旋转顺序文档未说明，此处假设 Z→X→Y（Unity 约定），见 TODO.md
  const d = Math.PI / 180, [px, py, pz] = [rotate.x * d, rotate.y * d, rotate.z * d];
  let { x, y, z } = rotated3DVector;
  [x, y] = [x * Math.cos(pz) - y * Math.sin(pz), x * Math.sin(pz) + y * Math.cos(pz)];
  [y, z] = [y * Math.cos(px) - z * Math.sin(px), y * Math.sin(px) + z * Math.cos(px)];
  [x, z] = [x * Math.cos(py) + z * Math.sin(py), -x * Math.sin(py) + z * Math.cos(py)];
  return { x, y, z };
}

/**
 * 【方向向量转旋转】 Direction Vector to Rotation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 给定向前向量和向上向量，转化为欧拉角
 * 举例：以人物为例，人物现在在三维空间中有一个初始朝向。我们想将此人物在三维空间中转到我们期望的朝向，那么向前向量表示我们期望其鼻子正对的方向，向上向量表示期望其头顶正对的方向。最终的三维向量出参则是该人物从初始朝向转向我们给定的期望朝向所需要经过的欧拉角旋转
 * 说明：给定的向前向量和向上向量必须要单位化，否则可能会出现非预期的缩放效应，导致计算出错
 *
 * @en Converts the Forward Vector and Upward Vector to Euler Angles
 * @param forwardVector 表示单位期望的朝向（向前向量：三维向量）
 * @param upwardVector 定义单位的上方向（用于确定旋转的旋转角度），默认值为世界坐标系Y轴正方向（向上向量：三维向量）
 * @returns 输出的是欧拉角，其三个分量分别代表： X：俯仰角 (Pitch) - 围绕物体局部X轴（右侧轴）的旋转。上下抬头/低头 Y：偏航角 (Yaw) - 围绕物体局部Y轴（上方向轴）的旋转。左右转头 Z：翻滚角 (Roll) - 围绕物体局部Z轴（前方向轴）的旋转。左右倾斜（旋转：三维向量）
 */
export function directionVectorToRotation(forwardVector: Vec3, upwardVector: Vec3): Vec3 {
  // 近似实现：由向前向量求偏航/俯仰，由向上向量求翻滚（Unity LookRotation 约定，见 TODO.md）
  const f = forwardVector, r = 180 / Math.PI;
  const yaw = Math.atan2(f.x, f.z) * r;
  const pitch = -Math.asin(Math.max(-1, Math.min(1, f.y / (Math.hypot(f.x, f.y, f.z) || 1)))) * r;
  const roll = 0 * upwardVector.x;
  return { x: pitch, y: yaw, z: roll };
}

/**
 * 【三维向量内积】 3D Vector Dot Product
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算两个输入三维向量的内积（点乘）
 *
 * @en Calculates the dot product of two input 3D Vectors
 * @param _3dVector1 三维向量1（三维向量1：三维向量）
 * @param _3dVector2 三维向量2（三维向量2：三维向量）
 * @returns 结果（结果：浮点数）
 */
export function _3dVectorDotProduct(_3dVector1: Vec3, _3dVector2: Vec3): float {
  return _3dVector1.x * _3dVector2.x + _3dVector1.y * _3dVector2.y + _3dVector1.z * _3dVector2.z;
}

/**
 * 【三维向量外积】 3D Vector Cross Product
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 计算两个三维向量的外积（叉乘）
 *
 * @en Calculates the cross product of two 3D Vectors
 * @param _3dVector1 三维向量1（三维向量1：三维向量）
 * @param _3dVector2 三维向量2（三维向量2：三维向量）
 * @returns 结果（结果：三维向量）
 */
export function _3dVectorCrossProduct(_3dVector1: Vec3, _3dVector2: Vec3): Vec3 {
  const a = _3dVector1, b = _3dVector2;
  return { x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x };
}

/**
 * 【弧度转角度】 Radians to Degrees
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将弧度值转为角度值
 *
 * @en Converts radians to degrees
 * @param radianValue 弧度值（弧度值：浮点数）
 * @returns 角度值（角度值：浮点数）
 */
export function radiansToDegrees(radianValue: float): float {
  return radianValue * 180 / Math.PI;
}

/**
 * 【角度转弧度】 Degrees to Radians
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将角度值转为弧度值
 *
 * @en Converts degrees to radians
 * @param angleValue 角度值（角度值：浮点数）
 * @returns 弧度值（弧度值：浮点数）
 */
export function degreesToRadians(angleValue: float): float {
  return angleValue * Math.PI / 180;
}

/**
 * 【根据时间戳计算格式化时间】的多个出参 / Outputs of "Calculate Formatted Time From Timestamp"
 */
export interface CalculateFormattedTimeFromTimestampResult {
  /**
   * 年（年：整数）
   */
  readonly year: int;
  /**
   * 月（月：整数）
   */
  readonly month: int;
  /**
   * 日（日：整数）
   */
  readonly day: int;
  /**
   * 时（时：整数）
   */
  readonly hour: int;
  /**
   * 分（分：整数）
   */
  readonly minute: int;
  /**
   * 秒（秒：整数）
   */
  readonly second: int;
}
/**
 * 【根据时间戳计算格式化时间】 Calculate Formatted Time From Timestamp
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 根据输入的时间戳将其转化为格式化时间
 *
 * @en Converts a timestamp to formatted time
 * @param timestamp 时间戳（时间戳：整数）
 * @returns CalculateFormattedTimeFromTimestampResult（多出参，见接口字段）
 */
export function calculateFormattedTimeFromTimestamp(timestamp: int): CalculateFormattedTimeFromTimestampResult {
  // 时间戳单位为秒；时区按 UTC+0 计算（服务器时区影响见 TODO.md）
  const d = new Date(timestamp * 1000);
  return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate(), hour: d.getUTCHours(), minute: d.getUTCMinutes(), second: d.getUTCSeconds() } as any;
}

/**
 * 【根据格式化时间计算时间戳】 Calculate Timestamp From Formatted Time
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 根据输入的格式化时间将其转化为时间戳
 *
 * @en Converts a formatted time to a timestamp
 * @param year 年（年：整数）
 * @param month 月（月：整数）
 * @param day 日（日：整数）
 * @param hour 时（时：整数）
 * @param minute 分（分：整数）
 * @param second 秒（秒：整数）
 * @returns 时间戳（时间戳：整数）
 */
export function calculateTimestampFromFormattedTime(year: int, month: int, day: int, hour: int, minute: int, second: int): int {
  return Math.floor(Date.UTC(year, month - 1, day, hour, minute, second) / 1000);
}

/**
 * 【根据时间戳计算星期几】 Calculate Day of the Week From Timestamp
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 根据输入的时间戳将其转化为星期几
 *
 * @en Converts a timestamp to the day of the week
 * @param timestamp 时间戳（时间戳：整数）
 * @returns 星期（星期：整数）
 */
export function calculateDayOfTheWeekFromTimestamp(timestamp: int): int {
  // 星期日返回 0 还是 7 文档未说明，此处 1~7（周一=1），见 TODO.md
  const w = new Date(timestamp * 1000).getUTCDay();
  return w === 0 ? 7 : w;
}

/**
 * 【左移运算】 Left Shift Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将输入值作为二进制数逻辑左移一定位数后输出
 *
 * @en Performs a logical left shift on the input by the specified bit count and outputs the result
 * @param value 值（值：整数）
 * @param leftShiftCount 左移位数（左移位数：整数）
 * @returns 结果（结果：整数）
 */
export function leftShiftOperation(value: int, leftShiftCount: int): int {
  return value << leftShiftCount;
}

/**
 * 【右移运算】 Right Shift Operation
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将输入值作为二进制数逻辑右移一定位数后输出
 *
 * @en Performs a logical right shift on the input by the specified bit count and outputs the result
 * @param value 值（值：整数）
 * @param rightShiftCount 右移位数（右移位数：整数）
 * @returns 结果（结果：整数）
 */
export function rightShiftOperation(value: int, rightShiftCount: int): int {
  return value >> rightShiftCount;
}

/**
 * 【按位与】 Bitwise AND
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将输入的两个值作为二进制进行按位与运算后返回结果
 *
 * @en Performs a bitwise AND operation on the two inputs and returns the result
 * @param value1 值1（值1：整数）
 * @param value2 值2（值2：整数）
 * @returns 结果（结果：整数）
 */
export function bitwiseAND(value1: int, value2: int): int {
  return value1 & value2;
}

/**
 * 【按位或】 Bitwise OR
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将输入的两个值作为二进制进行按位或运算后返回结果
 *
 * @en Performs a bitwise OR operation on the two inputs and returns the result
 * @param value1 值1（值1：整数）
 * @param value2 值2（值2：整数）
 * @returns 结果（结果：整数）
 */
export function bitwiseOR(value1: int, value2: int): int {
  return value1 | value2;
}

/**
 * 【按位异或】 XOR (Exclusive OR)
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将输入的两个值作为二进制进行按位异或运算后返回结果
 *
 * @en Performs a bitwise XOR operation on the two inputs and returns the result
 * @param value1 值1（值1：整数）
 * @param value2 值2（值2：整数）
 * @returns 结果（结果：整数）
 */
export function xorExclusiveOR(value1: int, value2: int): int {
  return value1 ^ value2;
}

/**
 * 【按位取补】 Bitwise Complement
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将输入值作为二进制进行按位取补运算后返回结果
 *
 * @en Performs a bitwise complement operation on the input and returns the result
 * @param value 值（值：整数）
 * @returns 结果（结果：整数）
 */
export function bitwiseComplement(value: int): int {
  return ~value;
}

/**
 * 【按位写入】 Write by bit
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 将写入值作为二进制数，写入被写入值（同样作为二进制数）的【起始位，结束位】。起始位从0开始算，写入的值长度包含起始位和结束位
 * 如果写入值的二进制有效数字长度（从左起第一个1开始计算）超过写入的长度，则写入失败，返回被写入值
 * 如果写入值是负数，也会因为写入值超出长度而写入失败（负数的二进制首位为符号位1）
 *
 * @en Writes the write value as a binary number to the [start bit, end bit] of the target value (also a binary number). The start bit is indexed from 0, and the write length includes both the start and end bits
 * @param writtenValue 被写入值（被写入值：整数）
 * @param writeValue 写入值（写入值：整数）
 * @param writeStartingPosition 写入起始位（写入起始位：整数）
 * @param writeEndPosition 写入结束位（写入结束位：整数）
 * @returns 结果（结果：整数）
 */
export function writeByBit(writtenValue: int, writeValue: int, writeStartingPosition: int, writeEndPosition: int): int {
  const len = writeEndPosition - writeStartingPosition + 1;
  if (writeValue < 0 || (len < 32 && writeValue >= (1 << len))) return writtenValue; // 超出写入长度：写入失败
  const mask = (len >= 32 ? -1 : ((1 << len) - 1)) << writeStartingPosition;
  return (writtenValue & ~mask) | ((writeValue << writeStartingPosition) & mask);
}

/**
 * 【按位读出】 Read by bit
 * 分类：运算节点 / 二、数学（II. Math）
 *
 * 从值（以二进制表示）的【起始位，结束位】读出值
 *
 * @en Reads the value from [start bit, end bit] of the value (in binary representation)
 * @param value 值（值：整数）
 * @param readStartingPosition 读出起始位（读出起始位：整数）
 * @param readEndPosition 读出结束位（读出结束位：整数）
 * @returns 结果（结果：整数）
 */
export function readByBit(value: int, readStartingPosition: int, readEndPosition: int): int {
  const len = readEndPosition - readStartingPosition + 1;
  const v = value >>> readStartingPosition;
  return len >= 32 ? v | 0 : v & ((1 << len) - 1);
}
