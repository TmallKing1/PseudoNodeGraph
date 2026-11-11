/**
 * 千星奇域 服务端节点图 —— 枚举
 *
 * 取值来自官方节点文档参数说明（中文为主，英文成员名取自英文版文档）。
 * 成员值使用中文原文字符串，便于与编辑器下拉框一一对应。
 * 文档未列出取值的枚举，取值来自编辑器下拉框截图（2026-10-16；受击等级为 2026-11-11）。
 */

/** 实体类型：分为玩家、角色、关卡、物件、造物 */
export const enum EntityType {
  /** 玩家 */ Player = '玩家',
  /** 角色 */ Character = '角色',
  /** 关卡 */ Stage = '关卡',
  /** 物件 */ Object = '物件',
  /** 造物 */ Creation = '造物',
}
/** 角色倒下原因 */
export const enum DownReason {
  /** 节点图导致：因节点图的【销毁实体】节点导致的角色倒下 */ NodeGraph = '节点图导致',
  /** 正常倒下：因生命值变为0导致的角色倒下 */ Normal = '正常倒下',
  /** 非正常倒下：因溺水、坠入深渊等导致的角色倒下 */ Abnormal = '非正常倒下',
}
/** 单位状态移除原因 */
export const enum UnitStatusRemovalReason {
  /** 其他单位状态顶替：因被施加了顶替状态导致单位状态被移除 */ Replaced = '其他单位状态顶替',
  /** 超出持续时间：超出单位状态持续时间 */ DurationExceeded = '超出持续时间',
  /** 被驱散：单位状态被直接移除 */ Dispelled = '被驱散',
  /** 状态失效：因其他原因导致的状态失效 */ Expired = '状态失效',
  /** 职业变更：因职业变更导致的状态被移除 */ ClassChanged = '职业变更',
}
/** 卡牌选择器完成原因：玩家完成、全量刷新、定量刷新、超时关闭、主动关闭、节点图关闭 */
export const enum DeckSelectorCompletionReason {
  /** 玩家完成 */ CompletedByPlayer = '玩家完成',
  /** 全量刷新 */ RefreshAll = '全量刷新',
  /** 定量刷新 */ FixedQuantityRefresh = '定量刷新',
  /** 超时关闭 */ Timeout = '超时关闭',
  /** 主动关闭 */ ClosedManually = '主动关闭',
  /** 节点图关闭 */ ClosedByNodeGraph = '节点图关闭',
}
/** 排序方式：顺序（从小到大）或逆序（从大到小） */
export const enum SortOrder {
  /** 顺序（从小到大） */ Ascending = '排序规则_顺序',
  /** 逆序（从大到小） */ Descending = '排序规则_逆序',
}
/** 伤害跳字类型：无跳字 普通跳字 暴击跳字 */
export const enum DamagePopUpType {
  /** 无跳字 */ None = '无跳字',
  /** 普通跳字 */ Normal = '普通跳字',
  /** 暴击跳字 */ Crit = '暴击跳字',
}
/** 定点运动器参数类型：分为固定速度、固定时间（编辑器下拉框确认，无前缀） */
export const enum FixedPointParamType {
  /** 固定速度 */ FixedSpeed = '固定速度',
  /** 固定时间 */ FixedTime = '固定时间',
}
/** 跟随坐标系：可选“相对坐标系”、“世界坐标系” */
export const enum FollowCoordinateSystem {
  /** 相对坐标系 */ Relative = '相对坐标系',
  /** 世界坐标系 */ World = '世界坐标系',
}
/** 跟随类型：可选“完全跟随”、“跟随位置”、“跟随旋转” */
export const enum FollowType {
  /** 完全跟随 */ Complete = '完全跟随',
  /** 跟随位置 */ Location = '跟随位置',
  /** 跟随旋转 */ Rotation = '跟随旋转',
}
/** 添加单位状态的施加结果 */
export const enum UnitStatusApplyResult {
  /** 失败，其他异常 */ FailedOther = '失败，其他异常',
  /** 失败，让位于其他状态：目标上已有的单位状态与尝试施加的状态之间有让位关系 */ FailedYielded = '失败，让位于其他状态',
  /** 失败，超出并存上限：超出目标实体上的指定单位状态的并存上限 */ FailedCoexistenceLimit = '失败，超出并存上限',
  /** 失败，附加叠层未成功：叠层失败 */ FailedStack = '失败，附加叠层未成功',
  /** 成功，施加新状态：成功附加新状态 */ SuccessNewStatus = '成功，施加新状态',
  /** 成功，槽位叠层：目标上已有该单位状态，叠层 */ SuccessSlotStacking = '成功，槽位叠层',
}
/** 移除单位状态的移除方式 */
export const enum UnitStatusRemovalMethod {
  /** 所有同名并存状态：移除以该配置ID施加的所有同名状态 */ AllCoexistingSameName = '所有同名并存状态',
  /** 最快丢失叠加层数的状态：移除最快丢失叠加层数的一层状态 */ FastestStackLoss = '最快丢失叠加层数的状态',
}
/** 更改职业时已有技能处理 */
export const enum ExistingSkillHandling {
  /** 全部清理：将已有技能全部清理 */ ClearAll = '全部清理',
  /** 保留无关技能：保留更换前后两个职业默认配置内均没有的技能 */ PreserveUnrelated = '保留无关技能',
}
/** 界面控件(组)显示状态 */
export const enum UIControlDisplayStatus {
  /** 关闭：不可见且逻辑不运行 */ Off = '关闭',
  /** 开启：可见+逻辑正常运行 */ On = '开启',
  /** 隐藏：不可见+逻辑正常运行 */ Hidden = '隐藏',
}
/** 技能槽位 —— 取值来自编辑器下拉框（无前缀）。文档中的“自定义技能”在编辑器中细分为 自定义技能槽位1~15 */
export const enum SkillSlot {
  /** 普通攻击 */ NormalAttack = '普通攻击',
  /** 技能1-E */ Skill1E = '技能1-E',
  /** 技能2-Q */ Skill2Q = '技能2-Q',
  /** 技能3-R */ Skill3R = '技能3-R',
  /** 技能4-T */ Skill4T = '技能4-T',
  /** 自定义技能槽位1 */ CustomSkillSlot1 = '自定义技能槽位1',
  /** 自定义技能槽位2 */ CustomSkillSlot2 = '自定义技能槽位2',
  /** 自定义技能槽位3 */ CustomSkillSlot3 = '自定义技能槽位3',
  /** 自定义技能槽位4 */ CustomSkillSlot4 = '自定义技能槽位4',
  /** 自定义技能槽位5 */ CustomSkillSlot5 = '自定义技能槽位5',
  /** 自定义技能槽位6 */ CustomSkillSlot6 = '自定义技能槽位6',
  /** 自定义技能槽位7 */ CustomSkillSlot7 = '自定义技能槽位7',
  /** 自定义技能槽位8 */ CustomSkillSlot8 = '自定义技能槽位8',
  /** 自定义技能槽位9 */ CustomSkillSlot9 = '自定义技能槽位9',
  /** 自定义技能槽位10 */ CustomSkillSlot10 = '自定义技能槽位10',
  /** 自定义技能槽位11 */ CustomSkillSlot11 = '自定义技能槽位11',
  /** 自定义技能槽位12 */ CustomSkillSlot12 = '自定义技能槽位12',
  /** 自定义技能槽位13 */ CustomSkillSlot13 = '自定义技能槽位13',
  /** 自定义技能槽位14 */ CustomSkillSlot14 = '自定义技能槽位14',
  /** 自定义技能槽位15 */ CustomSkillSlot15 = '自定义技能槽位15',
  /** 冲刺技能 */ SprintSkill = '冲刺技能',
  /** 跳跃技能 */ JumpSkill = '跳跃技能',
}
/** 原槽位技能处理 */
export const enum OriginalSlotSkillHandling {
  /** 销毁：销毁原技能 */ Destroy = '销毁',
  /** 保留槽位关系：继续保留在当前槽位，在新绑定的技能实例被移除后会自动显示在该槽位上 */ PreserveSlotBinding = '保留槽位关系',
  /** 脱离槽位关系：必须被重新绑定到指定槽位才可以显示在槽位上 */ RemoveSlotBinding = '脱离槽位关系',
}
/** 卡牌选择器刷新方式 */
export const enum DeckSelectorRefreshMode {
  /** 不可刷新：刷新数量下限和刷新数量上限，两入参无效，且选择界面无刷新按键 */ CannotRefresh = '不可刷新',
  /** 部分刷新：刷新数量下限和刷新数量上限，两入参有效，且选择界面有刷新按键 */ PartialRefresh = '部分刷新',
  /** 全量刷新：两入参无效，默认返回全量结果，且选择界面有刷新按键 */ FullRefresh = '全量刷新',
}
/** 结算状态：分为未定、胜利、失败三种（编辑器下拉框确认，无前缀） */
export const enum SettlementStatus {
  /** 未定 */ Undetermined = '未定',
  /** 胜利 */ Victory = '胜利',
  /** 失败 */ Defeat = '失败',
}
/** 段位结算状态：分为未定、胜利、失败、逃跑 */
export const enum RankSettlementStatus {
  /** 未定 */ Undetermined = '未定',
  /** 胜利 */ Victory = '胜利',
  /** 失败 */ Defeat = '失败',
  /** 逃跑 */ Escape = '逃跑',
}
/** 掉落类型：分为全员一份、每人一份 */
export const enum LootType {
  /** 全员一份 */ SharedReward = '全员一份',
  /** 每人一份 */ IndividualReward = '每人一份',
}
/** 扫描标签规则类型：分为视野优先、距离优先 */
export const enum ScanTagRuleType {
  /** 视野优先 */ PrioritizeView = '视野优先',
  /** 距离优先 */ PrioritizeDistance = '距离优先',
}
/** 游玩方式：分为试玩、房间游玩、匹配游玩 */
export const enum GameplayMode {
  /** 试玩 */ Playtest = '试玩',
  /** 房间游玩 */ RoomPlay = '房间游玩',
  /** 匹配游玩 */ Matchmaking = '匹配游玩',
}
/** 输入设备类型：分为键盘鼠标、手柄、触屏 */
export const enum InputDeviceType {
  /** 键盘鼠标 */ KeyboardMouse = '键盘鼠标',
  /** 手柄 */ Gamepad = '手柄',
  /** 触屏 */ Touchscreen = '触屏',
}
/** 取整方式 */
export const enum RoundingMode {
  /** 四舍五入：按照四舍五入规则进行取整 */ Round = '取整逻辑_四舍五入',
  /** 向上取整：返回大于输入且离输入值最近的一个整数 */ Ceil = '取整逻辑_向上取整',
  /** 向下取整：返回小于输入且离输入值最近的一个整数 */ Floor = '取整逻辑_向下取整',
  /** 截尾取整：截去浮点数尾部的小数部分，相当于向0方向取整 */ Truncate = '取整逻辑_截尾取整',
}

// ---- 以下取值来自编辑器下拉框截图（文档未列出）----
/** 比较类型（【角色移动速度达到条件时】条件：比较类型）—— 取值来自编辑器下拉框 */
export const enum ComparisonType {
  /** 相等 */ Equal = '比较运算_相等',
  /** 小于 */ LessThan = '比较运算_小于',
  /** 小于等于 */ LessThanOrEqualTo = '比较运算_小于等于',
  /** 大于 */ GreaterThan = '比较运算_大于',
  /** 大于等于 */ GreaterThanOrEqualTo = '比较运算_大于等于',
}
/** 元素类型 —— 取值来自编辑器下拉框（显示为 元素类型_火元素 等） */
export const enum ElementType {
  /** 火元素 */ Pyro = '元素类型_火元素',
  /** 水元素 */ Hydro = '元素类型_水元素',
  /** 风元素 */ Anemo = '元素类型_风元素',
  /** 雷元素 */ Electro = '元素类型_雷元素',
  /** 草元素 */ Dendro = '元素类型_草元素',
  /** 冰元素 */ Cryo = '元素类型_冰元素',
  /** 岩元素 */ Geo = '元素类型_岩元素',
  /** 无 */ None = '元素类型_无',
}
/** 元素反应类型 —— 取值来自编辑器下拉框（完整，共 28 项，按编辑器顺序） */
export const enum ElementalReactionType {
  /** 超载 */ Overloaded = '超载',
  /** 蒸发 */ Vaporize = '蒸发',
  /** 燃烧 */ Burning = '燃烧',
  /** 潮湿 */ Wet = '潮湿',
  /** 绽放 */ Bloom = '绽放',
  /** 融化 */ Melt = '融化',
  /** 冻结 */ Frozen = '冻结',
  /** 感电 */ ElectroCharged = '感电',
  /** 超导 */ Superconduct = '超导',
  /** 扩散-火 */ SwirlPyro = '扩散-火',
  /** 扩散-水 */ SwirlHydro = '扩散-水',
  /** 扩散-雷 */ SwirlElectro = '扩散-雷',
  /** 扩散-冰 */ SwirlCryo = '扩散-冰',
  /** 结晶-火 */ CrystallizePyro = '结晶-火',
  /** 结晶-水 */ CrystallizeHydro = '结晶-水',
  /** 结晶-雷 */ CrystallizeElectro = '结晶-雷',
  /** 结晶-冰 */ CrystallizeCryo = '结晶-冰',
  /** 碎冰 */ Shatter = '碎冰',
  /** 激化 */ Quicken = '激化',
  /** 超激化 */ Aggravate = '超激化',
  /** 蔓激化 */ Spread = '蔓激化',
  /** 烈绽放 */ Burgeon = '烈绽放',
  /** 超绽放 */ Hyperbloom = '超绽放',
  /** 月感电 */ LunarCharged = '月感电',
  /** 月绽放 */ LunarBloom = '月绽放',
  /** 月结晶 */ LunarCrystallize = '月结晶',
  /** 星超导 */ StellarSuperconduct = '星超导',
  /** 星扩散 */ StellarSwirl = '星扩散',
}
/** 背包道具数量变化原因 —— 取值来自编辑器下拉框 */
export const enum InventoryItemChangeReason {
  /** 销毁 */ Destroyed = '销毁',
  /** 丢弃 */ Discarded = '丢弃',
  /** 使用 */ Used = '使用',
  /** 被击倒掉落 */ DroppedOnDefeat = '被击倒掉落',
  /** 商店交易 */ ShopTransaction = '商店交易',
  /** 节点图操作 */ NodeGraphOperation = '节点图操作',
  /** 拾取 */ PickedUp = '拾取',
  /** 默认 */ Default = '默认',
}
/** 颜色叠加类型 / 颜色叠加模式 —— 取值来自编辑器下拉框 */
export const enum ColorBlendType {
  /** 覆盖 */ Overwrite = '覆盖',
  /** 正片叠底 */ Multiply = '正片叠底',
}
/** 填充材质类型 / 材质 —— 取值来自编辑器下拉框 */
export const enum FillMaterialType {
  /** 冰冻 */ Frozen = '冰冻',
  /** 石化 */ Petrification = '石化',
}
/** 定点运动器移动方式（【开启定点运动器】）—— 取值来自编辑器下拉框 */
export const enum FixedPointMovementMode {
  /** 瞬间移动 */ Instant = '瞬间移动',
  /** 匀速直线运动 */ UniformLinear = '匀速直线运动',
}
/** 音效衰减方式（【添加音效播放器】）—— 取值来自编辑器下拉框 */
export const enum SoundAttenuationMode {
  /** 线性衰减 */ Linear = '线性衰减',
  /** 先快后慢 */ FastThenSlow = '先快后慢',
  /** 先慢后快 */ SlowThenFast = '先慢后快',
}
/** 当前受打断状态（【获取角色属性】【获取造物属性】）—— 取值来自编辑器下拉框 */
export const enum InterruptStatus {
  /** 抗打断状态 */ InterruptResistant = '抗打断状态',
  /** 易受打断状态 */ Interruptible = '易受打断状态',
  /** 受保护状态 */ Protected = '受保护状态',
}
/** 受击等级（【受到攻击时】出参）—— 取值来自编辑器下拉框截图（2026-11-11），按编辑器顺序；截图未显示前缀。数字码未知，见 TODO.md */
export const enum HitLevel {
  /** 无效果 */ NoEffect = '无效果',
  /** 轻颤 */ LightTremor = '轻颤',
  /** 轻受击 */ LightHit = '轻受击',
  /** 击退受击 */ KnockbackHit = '击退受击',
  /** 挑飞 */ Launch = '挑飞',
}
