# 覆盖率报告（tools/coverage.py 生成）

| 页面 | 中文页节点数 | 英文页节点数 | 函数(声明) | 函数(真实实现) | 原生语法映射 | TODO | 缺失 |
|---|---|---|---|---|---|---|---|
| 事件节点 mhn7ko01v3yw | 65 | 65 | 65 | 0 | 0 | 0 | 0 |
| 执行节点 mhw66orrrfkm | 207 | 207 | 202 | 0 | 5 | 0 | 0 |
| 流程控制节点 mhe8yn9bysd6 | 2 | 2 | 0 | 0 | 2 | 0 | 0 |
| 查询节点 mhwbqlrw655q | 151 | 151 | 129 | 21 | 1 | 0 | 0 |
| 运算节点 mhnd4l069tk0 | 62 | 62 | 0 | 59 | 3 | 0 | 0 |
| **合计** | 487 | 487 | 396 | 80 | 11 | 0 | 0 |

函数声明在 src 中存在性校验失败：无

## 节点 → 标识符 对照表

| 页面 | 中文节点名 | 英文节点名 | 方式 | 标识符 / 原生语法 |
|---|---|---|---|---|
| event | 自定义变量变化时 | When Custom Variable Changes | 声明 | `onCustomVariableChanges` |
| event | 节点图变量变化时 | When Node Graph Variable Changes | 声明 | `onNodeGraphVariableChanges` |
| event | 预设状态变化时 | When Preset Status Changes | 声明 | `onPresetStatusChanges` |
| event | 实体创建时 | When Entity Is Created | 声明 | `onEntityIsCreated` |
| event | 实体移除/销毁时 | When Entity Is Removed/Destroyed | 声明 | `onEntityIsRemovedDestroyed` |
| event | 实体销毁时 | When Entity Is Destroyed | 声明 | `onEntityIsDestroyed` |
| event | 角色移动速度达到条件时 | When Character Movement SPD Meets Condition | 声明 | `onCharacterMovementSPDMeetsCondition` |
| event | 实体阵营变化时 | When Entity Faction Changes | 声明 | `onEntityFactionChanges` |
| event | 角色倒下时 | When the Character Is Down | 声明 | `onCharacterIsDown` |
| event | 角色复苏时 | When Character Revives | 声明 | `onCharacterRevives` |
| event | 玩家所有角色倒下时 | When All Player's Characters Are Down | 声明 | `onAllPlayersCharactersAreDown` |
| event | 玩家异常倒下并复苏时 | When Player Is Abnormally Downed and Revives | 声明 | `onPlayerIsAbnormallyDownedAndRevives` |
| event | 玩家所有角色复苏时 | When All Player's Characters Are Revived | 声明 | `onAllPlayersCharactersAreRevived` |
| event | 玩家传送完成时 | When Player Teleport Completes | 声明 | `onPlayerTeleportCompletes` |
| event | 前台角色变化时 | When the Active Character Changes | 声明 | `onActiveCharacterChanges` |
| event | 离开碰撞触发器时 | When Exiting Collision Trigger | 声明 | `onExitingCollisionTrigger` |
| event | 进入碰撞触发器时 | When Entering Collision Trigger | 声明 | `onEnteringCollisionTrigger` |
| event | 受到攻击时 | When Attacked | 声明 | `onAttacked` |
| event | 攻击命中时 | When Attack Hits | 声明 | `onAttackHits` |
| event | 被恢复生命值时 | When HP Is Recovered | 声明 | `onHpIsRecovered` |
| event | 发起恢复生命值时 | When Initiating HP Recovery | 声明 | `onInitiatingHPRecovery` |
| event | 进入易受打断状态时 | When Entering an Interruptible State | 声明 | `onEnteringAnInterruptibleState` |
| event | 基础运动器停止时 | When Basic Motion Device Stops | 声明 | `onBasicMotionDeviceStops` |
| event | 路径到达路点时 | When Path Reaches Waypoint | 声明 | `onPathReachesWaypoint` |
| event | 命中检测触发时 | When On-Hit Detection Is Triggered | 声明 | `onOnHitDetectionIsTriggered` |
| event | 定时器触发时 | When Timer Is Triggered | 声明 | `onTimerIsTriggered` |
| event | 全局计时器触发时 | When Global Timer Is Triggered | 声明 | `onGlobalTimerIsTriggered` |
| event | 界面控件组触发时 | When UI Control Group Is Triggered | 声明 | `onUiControlGroupIsTriggered` |
| event | 单位状态结束时 | When Unit Status Ends | 声明 | `onUnitStatusEnds` |
| event | 单位状态变更时 | When Unit Status Changes | 声明 | `onUnitStatusChanges` |
| event | 发生元素反应事件时 | When Elemental Reaction Event Occurs | 声明 | `onElementalReactionEventOccurs` |
| event | 护盾受到攻击时 | When Shield Is Attacked | 声明 | `onShieldIsAttacked` |
| event | 选项卡选中时 | When Tab Is Selected | 声明 | `onTabIsSelected` |
| event | 造物入战时 | When Creation Enters Combat | 声明 | `onCreationEntersCombat` |
| event | 造物脱战时 | When Creation Leaves Combat | 声明 | `onCreationLeavesCombat` |
| event | 玩家职业更改时 | When Player Class Changes | 声明 | `onPlayerClassChanges` |
| event | 玩家职业等级变化时 | When Player Class Level Changes | 声明 | `onPlayerClassLevelChanges` |
| event | 玩家职业解除时 | When Player Class Is Removed | 声明 | `onPlayerClassIsRemoved` |
| event | 技能节点调用时 | When Skill Node Is Called | 声明 | `onSkillNodeIsCalled` |
| event | 仇恨目标变化时 | When Aggro Target Changes | 声明 | `onAggroTargetChanges` |
| event | 自身入战时 | When Self Enters Combat | 声明 | `onSelfEntersCombat` |
| event | 自身脱战时 | When Self Leaves Combat | 声明 | `onSelfLeavesCombat` |
| event | 监听信号 | Monitor Signal | 声明 | `onMonitorSignal` |
| event | 卡牌选择器完成时 | When Deck Selector Is Complete | 声明 | `onDeckSelectorIsComplete` |
| event | 文本气泡完成时 | When Text Bubble Is Completed | 声明 | `onTextBubbleIsCompleted` |
| event | 商店出售自定义商品时 | When Custom Shop Item Is Sold | 声明 | `onCustomShopItemIsSold` |
| event | 商店出售背包物品时 | When Selling Inventory Items in the Shop | 声明 | `onSellingInventoryItemsInTheShop` |
| event | 商店收购道具时 | When selling items to the shop | 声明 | `onSellingItemsToTheShop` |
| event | 装备的词条数值改变时 | When Equipment Affix Value Changes | 声明 | `onEquipmentAffixValueChanges` |
| event | 装备初始化时 | When Equipment Is Initialized | 声明 | `onEquipmentIsInitialized` |
| event | 装备被穿戴时 | When Equipment Is Equipped | 声明 | `onEquipmentIsEquipped` |
| event | 装备被卸下时 | When Equipment Is Unequipped | 声明 | `onEquipmentIsUnequipped` |
| event | 装备买入时 | When Equipment is purchased | 声明 | `onEquipmentIsPurchased` |
| event | 装备卖出时 | When Equipment is sold | 声明 | `onEquipmentIsSold` |
| event | 背包道具新增时 | When Item Is Added to Inventory | 声明 | `onItemIsAddedToInventory` |
| event | 背包道具失去时 | When Item Is Lost From Inventory | 声明 | `onItemIsLostFromInventory` |
| event | 背包道具数量变化时 | When the Quantity of Inventory Item Changes | 声明 | `onQuantityOfInventoryItemChanges` |
| event | 背包货币数量变化时 | When the Quantity of Inventory Currency Changes | 声明 | `onQuantityOfInventoryCurrencyChanges` |
| event | 背包内道具被使用时 | When Items in the Inventory Are Used | 声明 | `onItemsInTheInventoryAreUsed` |
| event | 造物抵达巡逻路点时 | When Creation Reaches Patrol Waypoint | 声明 | `onCreationReachesPatrolWaypoint` |
| event | 复杂造物预设状态变化时 | When Complex Creation Preset Status Changes | 声明 | `onComplexCreationPresetStatusChanges` |
| event | 悬浮交互页操作触发时 | When Floating Interaction Page is Triggered | 声明 | `onFloatingInteractionPageIsTriggered` |
| event | 玩家离开操控运动器时 | When Player Leaves Control Motion Device | 声明 | `onPlayerLeavesControlMotionDevice` |
| event | 玩家跟随操控运动器时 | When Player Follows Control Motion Device | 声明 | `onPlayerFollowsControlMotionDevice` |
| event | 玩家激活操控运动器列表变化时 | When Player's Activated Control Motion Device List Changes | 声明 | `onPlayersActivatedControlMotionDeviceListChanges` |
| exec | 打印字符串 | Print String | 声明 | `printString` |
| exec | 有限循环 | Finite Loop | 原生语法 | `for (let i = start; i <= end; i++) { ... }（闭区间，见文档）` |
| exec | 跳出循环 | Break Loop | 原生语法 | `break;` |
| exec | 设置局部变量 | Set Local Variable | 原生语法 | `let x: T = value; x = newValue;` |
| exec | 转发事件 | Forwarding Event | 声明 | `forwardingEvent` |
| exec | 拼接列表 | Concatenate List | 声明 | `concatenateList` |
| exec | 清除列表 | Clear List | 声明 | `clearList` |
| exec | 对列表插入值 | Insert Value Into List | 声明 | `insertValueIntoList` |
| exec | 对列表移除值 | Remove Value From List | 声明 | `removeValueFromList` |
| exec | 对列表设置值 | Set List Value | 声明 | `setListValue` |
| exec | 列表排序 | List Sorting | 声明 | `listSorting` |
| exec | 列表迭代循环 | List Iteration Loop | 原生语法 | `for (const item of list) { ... }` |
| exec | 设置自定义变量 | Set Custom Variable | 声明 | `setCustomVariable` |
| exec | 设置节点图变量 | Set Node Graph Variable | 声明 | `setNodeGraphVariable` |
| exec | 设置预设状态 | Set Preset Status | 声明 | `setPresetStatus` |
| exec | 销毁实体 | Destroy Entity | 声明 | `destroyEntity` |
| exec | 创建实体 | Create Entity | 声明 | `createEntity` |
| exec | 创建元件 | Create Prefab | 声明 | `createPrefab` |
| exec | 激活/关闭模型显示 | Activate/Disable Model Display | 声明 | `activateDisableModelDisplay` |
| exec | 移除实体 | Remove Entity | 声明 | `removeEntity` |
| exec | 创建元件组 | Create Prefab Group | 声明 | `createPrefabGroup` |
| exec | 修改模型颜色和材质 | Edit Model Color & Material | 声明 | `editModelColorAndMaterial` |
| exec | 结算关卡 | Settle Stage | 声明 | `settleStage` |
| exec | 设置当前环境时间 | Set Current Environment Time | 声明 | `setCurrentEnvironmentTime` |
| exec | 设置环境时间流逝速度 | Set Environment Time Passage Speed | 声明 | `setEnvironmentTimePassageSpeed` |
| exec | 设置实体阵营 | Set Entity Faction | 声明 | `setEntityFaction` |
| exec | 激活复苏点 | Activate Revive Point | 声明 | `activateRevivePoint` |
| exec | 注销复苏点 | Deactivate Revive Point | 声明 | `deactivateRevivePoint` |
| exec | 允许/禁止玩家复苏 | Allow/Forbid Player to Revive | 声明 | `allowForbidPlayerToRevive` |
| exec | 设置玩家剩余复苏次数 | Set Player Remaining Revives | 声明 | `setPlayerRemainingRevives` |
| exec | 设置玩家复苏耗时 | Set Player Revive Time | 声明 | `setPlayerReviveTime` |
| exec | 复苏角色 | Revive Character | 声明 | `reviveCharacter` |
| exec | 击倒玩家所有角色 | Defeat All Player's Characters | 声明 | `defeatAllPlayersCharacters` |
| exec | 复苏玩家所有角色 | Revive All Player's Characters | 声明 | `reviveAllPlayersCharacters` |
| exec | 传送玩家(超限) | Teleport Player | 声明 | `teleportPlayer` |
| exec | 设置环境配置 | Set Environment Configuration | 声明 | `setEnvironmentConfiguration` |
| exec | 设置角色元素能量 | Set Character's Elemental Energy | 声明 | `setCharactersElementalEnergy` |
| exec | 增加角色元素能量 | Increases Character's Elemental Energy | 声明 | `increasesCharactersElementalEnergy` |
| exec | 复苏当前场上角色 | Revive the active character | 声明 | `reviveTheActiveCharacter` |
| exec | 传送玩家(经典) | Teleport Player (Classic Mode) | 声明 | `teleportPlayerClassicMode` |
| exec | 激活/关闭原生碰撞 | Activate/Disable Native Collision | 声明 | `activateDisableNativeCollision` |
| exec | 激活/关闭原生碰撞可攀爬性 | Activate/Disable Native Collision Climbability | 声明 | `activateDisableNativeCollisionClimbability` |
| exec | 激活/关闭额外碰撞 | Activate/Disable Extra Collision | 声明 | `activateDisableExtraCollision` |
| exec | 激活/关闭额外碰撞可攀爬性 | Activate/Disable Extra Collision Climbability | 声明 | `activateDisableExtraCollisionClimbability` |
| exec | 激活/关闭碰撞触发器 | Activate/Disable Collision Trigger | 声明 | `activateDisableCollisionTrigger` |
| exec | 发起攻击 | Initiate Attack | 声明 | `initiateAttack` |
| exec | 恢复生命 | Recover HP | 声明 | `recoverHP` |
| exec | 损失生命 | HP Loss | 声明 | `hpLoss` |
| exec | 直接恢复生命 | Recover HP Directly | 声明 | `recoverHPDirectly` |
| exec | 添加匀速直线型基础运动器 | Add Uniform Basic Linear Motion Device | 声明 | `addUniformBasicLinearMotionDevice` |
| exec | 添加匀速旋转型基础运动器 | Add Uniform Basic Rotation-Based Motion Device | 声明 | `addUniformBasicRotationBasedMotionDevice` |
| exec | 停止并删除基础运动器 | Stop and Delete Basic Motion Device | 声明 | `stopAndDeleteBasicMotionDevice` |
| exec | 暂停基础运动器 | Pause Basic Motion Device | 声明 | `pauseBasicMotionDevice` |
| exec | 恢复基础运动器 | Recover Basic Motion Device | 声明 | `recoverBasicMotionDevice` |
| exec | 激活基础运动器 | Activate Basic Motion Device | 声明 | `activateBasicMotionDevice` |
| exec | 添加朝向目标旋转型基础运动器 | Add Target-Oriented Rotation-Based Motion Device | 声明 | `addTargetOrientedRotationBasedMotionDevice` |
| exec | 开启定点运动器 | Activate Fixed-Point Motion Device | 声明 | `activateFixedPointMotionDevice` |
| exec | 以GUID切换跟随运动器的目标 | Switch Follow Motion Device Target by GUID | 声明 | `switchFollowMotionDeviceTargetByGUID` |
| exec | 激活/关闭跟随运动器 | Activate/Disable Follow Motion Device | 声明 | `activateDisableFollowMotionDevice` |
| exec | 以实体切换跟随运动器的目标 | Switch Follow Motion Device Target by Entity | 声明 | `switchFollowMotionDeviceTargetByEntity` |
| exec | 创建投射物 | Create Projectile | 声明 | `createProjectile` |
| exec | 播放限时特效 | Play Timed Effects | 声明 | `playTimedEffects` |
| exec | 挂载循环特效 | Mount Looping Special Effect | 声明 | `mountLoopingSpecialEffect` |
| exec | 清除循环特效 | Clear Looping Special Effect | 声明 | `clearLoopingSpecialEffect` |
| exec | 根据特效资产清除特效 | Clear Special Effects Based on Special Effect Assets | 声明 | `clearSpecialEffectsBasedOnSpecialEffectAssets` |
| exec | 启动定时器 | Start Timer | 声明 | `startTimer` |
| exec | 暂停定时器 | Pause Timer | 声明 | `pauseTimer` |
| exec | 恢复定时器 | Resume Timer | 声明 | `resumeTimer` |
| exec | 终止定时器 | Stop Timer | 声明 | `stopTimer` |
| exec | 暂停全局计时器 | Pause Global Timer | 声明 | `pauseGlobalTimer` |
| exec | 启动全局计时器 | Start Global Timer | 声明 | `startGlobalTimer` |
| exec | 恢复全局计时器 | Recover Global Timer | 声明 | `recoverGlobalTimer` |
| exec | 终止全局计时器 | Stop Global Timer | 声明 | `stopGlobalTimer` |
| exec | 增加全局计时器的值 | Increase Global Timer Value | 声明 | `increaseGlobalTimerValue` |
| exec | 切换主镜头模板 | Switch Main Camera Template | 声明 | `switchMainCameraTemplate` |
| exec | 设置玩家镜头跟随实体 | Set Player Camera to Follow Entity | 声明 | `setPlayerCameraToFollowEntity` |
| exec | 重置玩家镜头跟随实体 | Reset Player Camera to Follow Entity | 声明 | `resetPlayerCameraToFollowEntity` |
| exec | 设置角色扰动装置 | Set Character Disruptor Device | 声明 | `setCharacterDisruptorDevice` |
| exec | 添加单位状态 | Add Unit Status | 声明 | `addUnitStatus` |
| exec | 移除单位状态 | Remove Unit Status | 声明 | `removeUnitStatus` |
| exec | 激活/关闭选项卡 | Activate/Disable Tab | 声明 | `activateDisableTab` |
| exec | 激活/关闭碰撞触发源 | Activate/Disable Collision Trigger Source | 声明 | `activateDisableCollisionTriggerSource` |
| exec | 更改玩家职业 | Change Player Class | 声明 | `changePlayerClass` |
| exec | 提升玩家当前职业经验 | Increase Player's Current Class EXP | 声明 | `increasePlayersCurrentClassEXP` |
| exec | 更改玩家当前职业等级 | Change Player's Current Class Level | 声明 | `changePlayersCurrentClassLevel` |
| exec | 切换当前界面布局 | Switch Current Interface Layout | 声明 | `switchCurrentInterfaceLayout` |
| exec | 激活控件组库内界面控件组 | Activate UI Control Group in Control Group Library | 声明 | `activateUIControlGroupInControlGroupLibrary` |
| exec | 设置界面控件(组)状态 | Set UI Control (Group) Status | 声明 | `setUIControlGroupStatus` |
| exec | 移除控件组库内界面控件组 | Remove Interface Control Group From Control Group Library | 声明 | `removeInterfaceControlGroupFromControlGroupLibrary` |
| exec | 播放界面动效控件 | Play UI Animation on Control | 声明 | `playUIAnimationOnControl` |
| exec | 更新消息队列 | Refresh Notification Queue | 声明 | `refreshNotificationQueue` |
| exec | 发送客户端脚本信号 | Send Client Scripted Signal | 声明 | `sendClientScriptedSignal` |
| exec | 增加技能资源量 | Increase Skill Resource Amount | 声明 | `increaseSkillResourceAmount` |
| exec | 设置技能资源量 | Set Skill Resource Amount | 声明 | `setSkillResourceAmount` |
| exec | 添加角色技能 | Add Character Skill | 声明 | `addCharacterSkill` |
| exec | 以ID删除角色技能 | Delete Character Skill by ID | 声明 | `deleteCharacterSkillByID` |
| exec | 初始化角色技能 | Initialize Character Skill | 声明 | `initializeCharacterSkill` |
| exec | 以槽位删除角色技能 | Delete Character Skill by Slot | 声明 | `deleteCharacterSkillBySlot` |
| exec | 设置角色技能冷却 | Set Character Skill CD | 声明 | `setCharacterSkillCD` |
| exec | 增加角色技能冷却 | Increase Character Skill CD | 声明 | `increaseCharacterSkillCD` |
| exec | 按最大冷却时间比例设置技能冷却 | Set Skill CD Based on Maximum CD Percentage | 声明 | `setSkillCDBasedOnMaximumCDPercentage` |
| exec | 绑定自定义技能实例到指定槽位 | Bind Custom Skill Instance to Specified Slot | 声明 | `bindCustomSkillInstanceToSpecifiedSlot` |
| exec | 解绑技能实例 | Unbind Skill Instance | 声明 | `unbindSkillInstance` |
| exec | 解绑槽位上的所有技能实例 | Unbind all Skill Instances on the Slot | 声明 | `unbindAllSkillInstancesOnTheSlot` |
| exec | 创建自定义技能实例 | Create Custom Skill Instance | 声明 | `createCustomSkillInstance` |
| exec | 销毁自定义技能实例 | Destroy Custom Skill Instance | 声明 | `destroyCustomSkillInstance` |
| exec | 施放指定槽位面板技能 | Cast Skill From Specified Panel Slot | 声明 | `castSkillFromSpecifiedPanelSlot` |
| exec | 施放指定技能实例 | Cast Specified Skill Instance | 声明 | `castSpecifiedSkillInstance` |
| exec | 关闭指定音效播放器 | Close Specified Sound Effect Player | 声明 | `closeSpecifiedSoundEffectPlayer` |
| exec | 启动/暂停指定音效播放器 | Start/Pause Specified Sound Effect Player | 声明 | `startPauseSpecifiedSoundEffectPlayer` |
| exec | 调整指定音效播放器 | Adjust Specified Sound Effect Player | 声明 | `adjustSpecifiedSoundEffectPlayer` |
| exec | 添加音效播放器 | Add Sound Effect Player | 声明 | `addSoundEffectPlayer` |
| exec | 启动/暂停玩家背景音乐 | Start/Pause Player Background Music | 声明 | `startPausePlayerBackgroundMusic` |
| exec | 调整玩家背景音乐音量 | Adjust Player Background Music Volume | 声明 | `adjustPlayerBackgroundMusicVolume` |
| exec | 设置玩家背景音乐 | Set Player Background Music | 声明 | `setPlayerBackgroundMusic` |
| exec | 玩家播放单次2D音效 | Player Plays One-Shot 2D Sound Effect | 声明 | `playerPlaysOneShot2DSoundEffect` |
| exec | 实体添加单位标签 | Add Unit Tag to Entity | 声明 | `addUnitTagToEntity` |
| exec | 实体移除单位标签 | Remove Unit Tag from Entity | 声明 | `removeUnitTagFromEntity` |
| exec | 实体清空单位标签 | Clear Unit Tags from Entity | 声明 | `clearUnitTagsFromEntity` |
| exec | 设置指定实体的仇恨值 | Set the Aggro Value of Specified Entity | 声明 | `setTheAggroValueOfSpecifiedEntity` |
| exec | 将目标实体移除出仇恨列表 | Remove Target Entity From Aggro List | 声明 | `removeTargetEntityFromAggroList` |
| exec | 清空指定目标的仇恨列表 | Clear Specified Target's Aggro List | 声明 | `clearSpecifiedTargetsAggroList` |
| exec | 嘲讽目标 | Taunt Target | 声明 | `tauntTarget` |
| exec | 发送信号 | Send Signal | 声明 | `sendSignal` |
| exec | 设置实体生效铭牌 | Set Entity Active Nameplate | 声明 | `setEntityActiveNameplate` |
| exec | 切换生效的文本气泡 | Switch Active Text Bubble | 声明 | `switchActiveTextBubble` |
| exec | 唤起卡牌选择器 | Invoke Deck Selector | 声明 | `invokeDeckSelector` |
| exec | 关闭卡牌选择器 | Close Deck Selector | 声明 | `closeDeckSelector` |
| exec | 随机卡牌选择器选择列表 | Random Deck Selector Selection List | 声明 | `randomDeckSelectorSelectionList` |
| exec | 设置玩家结算计分板展示数据 | Set Player Settlement Scoreboard Data Display | 声明 | `setPlayerSettlementScoreboardDataDisplay` |
| exec | 设置玩家结算排名数值 | Set Player Settlement Ranking Value | 声明 | `setPlayerSettlementRankingValue` |
| exec | 设置玩家结算成功状态 | Set Player Settlement Success Status | 声明 | `setPlayerSettlementSuccessStatus` |
| exec | 设置阵营结算排名数值 | Set Faction Settlement Ranking Value | 声明 | `setFactionSettlementRankingValue` |
| exec | 设置阵营结算成功状态 | Set Faction Settlement Success Status | 声明 | `setFactionSettlementSuccessStatus` |
| exec | 开关实体光源 | Toggle Entity Light Source | 声明 | `toggleEntityLightSource` |
| exec | 以键对字典移除键值对 | Remove Key Value Pairs from Dictionary by Key | 声明 | `removeKeyValuePairsFromDictionaryByKey` |
| exec | 清空字典 | Clear Dictionary | 声明 | `clearDictionary` |
| exec | 对字典设置或新增键值对 | Set or Add Key Value Pairs to Dictionary | 声明 | `setOrAddKeyValuePairsToDictionary` |
| exec | 对字典按键排序 | Sort Dictionary by Key | 声明 | `sortDictionaryByKey` |
| exec | 对字典按值排序 | Sort Dictionary by Value | 声明 | `sortDictionaryByValue` |
| exec | 修改结构体 | Modify Structure | 原生语法 | `s.field1 = v1;` |
| exec | 打开商店 | Open Shop | 声明 | `openShop` |
| exec | 关闭商店 | Close Shop | 声明 | `closeShop` |
| exec | 设置自定义商店商品出售信息 | Set Custom Shop Item Sales Info | 声明 | `setCustomShopItemSalesInfo` |
| exec | 设置背包商店商品出售信息 | Set Inventory Shop Item Sales Info | 声明 | `setInventoryShopItemSalesInfo` |
| exec | 设置物品收购表中道具收购信息 | Set Item Purchase Info in the Purchase List | 声明 | `setItemPurchaseInfoInThePurchaseList` |
| exec | 向自定义商店出售表中新增商品 | Add New Item to Custom Shop Sales List | 声明 | `addNewItemToCustomShopSalesList` |
| exec | 向背包商店出售表中新增商品 | Add New Item to Inventory Shop Sales List | 声明 | `addNewItemToInventoryShopSalesList` |
| exec | 向物品收购表中新增物品 | Add Items to the Purchase List | 声明 | `addItemsToThePurchaseList` |
| exec | 从自定义商店出售表中移除商品 | Remove Item From Custom Shop Sales List | 声明 | `removeItemFromCustomShopSalesList` |
| exec | 从背包商店出售表中移除商品 | Remove Item From Inventory Shop Sales List | 声明 | `removeItemFromInventoryShopSalesList` |
| exec | 从物品收购表中移除物品 | Remove Item From Purchase List | 声明 | `removeItemFromPurchaseList` |
| exec | 装备添加词条 | Add Affix to Equipment | 声明 | `addAffixToEquipment` |
| exec | 移除装备词条 | Remove Equipment Affix | 声明 | `removeEquipmentAffix` |
| exec | 设置装备词条值 | Set Equipment Affix Value | 声明 | `setEquipmentAffixValue` |
| exec | 装备指定序号添加词条 | Add Affix to Equipment at Specified ID | 声明 | `addAffixToEquipmentAtSpecifiedID` |
| exec | 替换装备到指定栏位 | Replace Equipment to the Specified Slot | 声明 | `replaceEquipmentToTheSpecifiedSlot` |
| exec | 卸下指定槽位装备 | Remove Equipment from Specified Slot | 声明 | `removeEquipmentFromSpecifiedSlot` |
| exec | 增加背包最大容量 | Increase Maximum Inventory Capacity | 声明 | `increaseMaximumInventoryCapacity` |
| exec | 增加背包道具数量 | Increase Inventory Item Quantity | 声明 | `increaseInventoryItemQuantity` |
| exec | 设置背包掉落道具/货币数量 | Set Inventory Drop Items/Currency Amount | 声明 | `setInventoryDropItemsCurrencyAmount` |
| exec | 增加背包货币数量 | Increase Inventory Currency Quantity | 声明 | `increaseInventoryCurrencyQuantity` |
| exec | 设置背包道具掉落内容 | Set Inventory Item Drop Contents | 声明 | `setInventoryItemDropContents` |
| exec | 触发战利品掉落 | Trigger Loot Drop | 声明 | `triggerLootDrop` |
| exec | 设置战利品掉落内容 | Set Loot Drop Content | 声明 | `setLootDropContent` |
| exec | 增加掉落物组件道具数量 | Increase Loot Component Item Quantity | 声明 | `increaseLootComponentItemQuantity` |
| exec | 增加掉落物组件货币数量 | Increase Loot Component Currency Quantity | 声明 | `increaseLootComponentCurrencyQuantity` |
| exec | 设置小地图缩放 | Set Mini-Map Zoom | 声明 | `setMiniMapZoom` |
| exec | 设置小地图标识生效状态 | Set Mini-Map Marker Activation Status | 声明 | `setMiniMapMarkerActivationStatus` |
| exec | 设置可见小地图标识的玩家列表 | Set Player List for Visible Mini-Map Markers | 声明 | `setPlayerListForVisibleMiniMapMarkers` |
| exec | 设置追踪小地图标识的玩家列表 | Set Player List for Tracking Mini-Map Markers | 声明 | `setPlayerListForTrackingMiniMapMarkers` |
| exec | 设置小地图标识的玩家标记 | Set Player Markers on the Mini-Map | 声明 | `setPlayerMarkersOnTheMiniMap` |
| exec | 切换自定义地图 | Switch Custom Maps | 声明 | `switchCustomMaps` |
| exec | 切换造物巡逻模板 | Switch Creation Patrol Template | 声明 | `switchCreationPatrolTemplate` |
| exec | 以整数设置玩家排行榜分数 | Set Player Leaderboard Score as an Integer | 声明 | `setPlayerLeaderboardScoreAsAnInteger` |
| exec | 以浮点数设置玩家排行榜分数 | Set Player Leaderboard Score as a Float | 声明 | `setPlayerLeaderboardScoreAsAFloat` |
| exec | 设置成就进度计数 | Set Achievement Progress Tally | 声明 | `setAchievementProgressTally` |
| exec | 增加成就进度计数 | Increase Achievement Progress Tally | 声明 | `increaseAchievementProgressTally` |
| exec | 设置扫描标签的规则 | Set Scan Tag Rules | 声明 | `setScanTagRules` |
| exec | 设置扫描组件的生效扫描标签序号 | Set Scan Component's Active Scan Tag ID | 声明 | `setScanComponentsActiveScanTagID` |
| exec | 设置玩家逃跑合法性 | Set Player Escape Validity | 声明 | `setPlayerEscapeValidity` |
| exec | 设置玩家段位变化分数 | Set Player Rank Score Change | 声明 | `setPlayerRankScoreChange` |
| exec | 切换玩家竞技段位生效的计分组 | Switch the Scoring Group that Affects Player's Competitive Rank | 声明 | `switchTheScoringGroupThatAffectsPlayersCompetitiveRank` |
| exec | 激活/关闭实体布设组 | Activate/Disable Entity Deployment Group | 声明 | `activateDisableEntityDeploymentGroup` |
| exec | 设置聊天频道开关 | Set Chat Channel Switch | 声明 | `setChatChannelSwitch` |
| exec | 设置玩家频道权限 | Set Player Channel Permissions | 声明 | `setPlayerChannelPermissions` |
| exec | 设置玩家当前频道 | Set Player's Current Channel | 声明 | `setPlayersCurrentChannel` |
| exec | 设置玩家聊天语音范围 | Set Voice Chat Scope | 声明 | `setVoiceChatScope` |
| exec | 设置玩家聊天文字权限 | Set Text Chat Permissions | 声明 | `setTextChatPermissions` |
| exec | 设置玩家聊天语音权限 | Set Voice Chat Permissions | 声明 | `setVoiceChatPermissions` |
| exec | 消耗礼盒 | Consume Gift Box | 声明 | `consumeGiftBox` |
| exec | 打开礼盒界面 | Open Gift Box Interface | 声明 | `openGiftBoxInterface` |
| exec | 激活/关闭寻路阻挡功能 | Enable/Disable Pathfinding Obstacle Feature | 声明 | `enableDisablePathfindingObstacleFeature` |
| exec | 激活/关闭寻路阻挡 | Enable/Disable Pathfinding Obstacle | 声明 | `enableDisablePathfindingObstacle` |
| exec | 激活/关闭光标碰撞盒 | Activate/Disable Cursor Collision Box | 声明 | `activateDisableCursorCollisionBox` |
| exec | 设置复杂造物的预设状态值 | Set the Preset Status Value of the Complex Creation | 声明 | `setThePresetStatusValueOfTheComplexCreation` |
| exec | 关闭悬浮交互页 | Close Floating Interaction Page | 声明 | `closeFloatingInteractionPage` |
| exec | 更新悬浮交互页列表数据 | Update Floating Interaction Page List Data | 声明 | `updateFloatingInteractionPageListData` |
| exec | 唤起悬浮交互页 | Show Floating Interaction Page | 声明 | `showFloatingInteractionPage` |
| exec | 设置任务计数 | Set Task Count | 声明 | `setTaskCount` |
| exec | 增加任务计数 | Increase Task Count | 声明 | `increaseTaskCount` |
| exec | 设置玩家离开操控运动器 | Set Player to Leave Control Motion Device | 声明 | `setPlayerToLeaveControlMotionDevice` |
| exec | 设置玩家跟随操控运动器 | Set Player to Follow Control Motion Device | 声明 | `setPlayerToFollowControlMotionDevice` |
| exec | 设置玩家激活操控运动器 | Set Player to Activate Control Motion Device | 声明 | `setPlayerToActivateControlMotionDevice` |
| exec | 设置玩家光标是否常驻 | Set Player's Cursor to Always Visible | 声明 | `setPlayersCursorToAlwaysVisible` |
| exec | 设置玩家光标点击可选取目标 | Enable Player's Cursor to Click Selectable Targets | 声明 | `enablePlayersCursorToClickSelectableTargets` |
| exec | 设置玩家光标是否穿透UI控件 | Set Player's Cursor to Click Through UI Controls | 声明 | `setPlayersCursorToClickThroughUIControls` |
| flow | 双分支 | Double Branch | 原生语法 | `if (cond) { ... } else { ... }` |
| flow | 多分支 | Multiple Branches | 原生语法 | `switch (expr) { case 1: ...; default: ... }（仅整数或字符串）` |
| query | 获取局部变量 | Get Local Variable | 原生语法 | `let x: T = initial;（读取直接使用变量 x）` |
| query | 查询对局游玩方式及人数 | Query Game Mode and Player Number | 声明 | `queryGameModeAndPlayerNumber` |
| query | 获取随机浮点数 | Get Random Floating Point Number | 实现 | `getRandomFloatingPointNumber` |
| query | 权重随机 | Weighted Random | 实现 | `weightedRandom` |
| query | 圆周率 | Pi (π) | 实现 | `pi` |
| query | 三维向量：零向量 | 3D Vector: Zero Vector | 实现 | `_3dVectorZeroVector` |
| query | 三维向量：上方 | 3D Vector: Up | 实现 | `_3dVectorUp` |
| query | 三维向量：下方 | 3D Vector: Down | 实现 | `_3dVectorDown` |
| query | 三维向量：左侧 | 3D Vector: Left | 实现 | `_3dVectorLeft` |
| query | 三维向量：右侧 | 3D Vector: Right | 实现 | `_3dVectorRight` |
| query | 三维向量：前方 | 3D Vector: Forward | 实现 | `_3dVectorForward` |
| query | 三维向量：后方 | 3D Vector: Backward | 实现 | `_3dVectorBackward` |
| query | 获取随机整数 | Get Random Integer | 实现 | `getRandomInteger` |
| query | 查询时间戳（UTC+0时区） | Query Timestamp (UTC+0) | 声明 | `queryTimestampUTC` |
| query | 查询服务器时区 | Query Server Time Zone | 声明 | `queryServerTimeZone` |
| query | 列表是否包含该值 | List Includes This Value | 实现 | `listIncludesThisValue` |
| query | 查找列表并返回值的序号 | Search List and Return Value ID | 声明 | `searchListAndReturnValueID` |
| query | 获取列表对应值 | Get Corresponding Value From List | 实现 | `getCorrespondingValueFromList` |
| query | 获取列表长度 | Get List Length | 实现 | `getListLength` |
| query | 获取列表最大值 | Get Maximum Value from List | 实现 | `getMaximumValueFromList` |
| query | 获取列表最小值 | Get Minimum Value From List | 实现 | `getMinimumValueFromList` |
| query | 获取自定义变量 | Get Custom Variable | 声明 | `getCustomVariable` |
| query | 获取节点图变量 | Get Node Graph Variable | 声明 | `getNodeGraphVariable` |
| query | 查询自定义变量快照 | Query Custom Variable Snapshot | 声明 | `queryCustomVariableSnapshot` |
| query | 获取预设状态 | Get Preset Status | 声明 | `getPresetStatus` |
| query | 获取自身实体 | Get Self Entity | 声明 | `getSelfEntity` |
| query | 以GUID查询实体 | Query Entity by GUID | 声明 | `queryEntityByGUID` |
| query | 以实体查询GUID | Query GUID by Entity | 声明 | `queryGUIDByEntity` |
| query | 获取实体位置与旋转 | Get Entity Location and Rotation | 声明 | `getEntityLocationAndRotation` |
| query | 获取实体类型 | Get Entity Type | 声明 | `getEntityType` |
| query | 获取场上所有实体 | Get All Entities on the Field | 声明 | `getAllEntitiesOnTheField` |
| query | 获取场上指定类型实体 | Get Specified Type of Entities on the Field | 声明 | `getSpecifiedTypeOfEntitiesOnTheField` |
| query | 获取场上指定元件ID的实体 | Get Entities With Specified Prefab on the Field | 声明 | `getEntitiesWithSpecifiedPrefabOnTheField` |
| query | 获取指定类型的实体列表 | Get Entity List by Specified Type | 声明 | `getEntityListBySpecifiedType` |
| query | 获取指定元件ID的实体列表 | Get Entity List by Specified Prefab ID | 声明 | `getEntityListBySpecifiedPrefabID` |
| query | 获取指定阵营的实体列表 | Get Entity List by Specified Faction | 声明 | `getEntityListBySpecifiedFaction` |
| query | 获取指定范围的实体列表 | Get Entity List by Specified Range | 声明 | `getEntityListBySpecifiedRange` |
| query | 查询实体是否在场 | Query If Entity Is on the Field | 声明 | `queryIfEntityIsOnTheField` |
| query | 获取物件属性 | Get Object Attribute | 声明 | `getObjectAttribute` |
| query | 获取实体向前向量 | Get Entity Forward Vector | 声明 | `getEntityForwardVector` |
| query | 获取实体向右向量 | Get Entity Right Vector | 声明 | `getEntityRightVector` |
| query | 获取实体向上向量 | Get Entity Upward Vector | 声明 | `getEntityUpwardVector` |
| query | 查询角色当前移动速度 | Query Character's Current Movement SPD | 声明 | `queryCharactersCurrentMovementSPD` |
| query | 获取角色属性 | Get Character Attribute | 声明 | `getCharacterAttribute` |
| query | 获取拥有者实体 | Get Owner Entity | 声明 | `getOwnerEntity` |
| query | 获取实体拥有的实体列表 | Get List of Entities Owned by the Entity | 声明 | `getListOfEntitiesOwnedByTheEntity` |
| query | 获取实体进阶属性 | Get Entity Advanced Attribute | 声明 | `getEntityAdvancedAttribute` |
| query | 获取实体元素属性 | Get Entity Elemental Attribute | 声明 | `getEntityElementalAttribute` |
| query | 查询实体的元素附着状态 | Check Entity's Elemental Effect Status | 声明 | `checkEntitysElementalEffectStatus` |
| query | 获取模型颜色和材质 | Get Model Color & Material | 声明 | `getModelColorAndMaterial` |
| query | 查询游戏已进行时间 | Query Game Time Elapsed | 声明 | `queryGameTimeElapsed` |
| query | 查询当前环境时间 | Query Current Environment Time | 声明 | `queryCurrentEnvironmentTime` |
| query | 查询实体阵营 | Query Entity Faction | 声明 | `queryEntityFaction` |
| query | 查询阵营是否敌对 | Query If Faction Is Hostile | 声明 | `queryIfFactionIsHostile` |
| query | 获取在场玩家实体列表 | Get List of Player Entities on the Field | 声明 | `getListOfPlayerEntitiesOnTheField` |
| query | 获取指定玩家所有角色实体 | Get All Character Entities of Specified Player | 声明 | `getAllCharacterEntitiesOfSpecifiedPlayer` |
| query | 获取角色归属的玩家实体 | Get Player Entity to Which the Character Belongs | 声明 | `getPlayerEntityToWhichTheCharacterBelongs` |
| query | 获取玩家剩余复苏次数 | Get Player Remaining Revives | 声明 | `getPlayerRemainingRevives` |
| query | 获取玩家复苏耗时 | Get Player Revive Time | 声明 | `getPlayerReviveTime` |
| query | 查询玩家角色是否全部倒下 | Query If All Player Characters Are Down | 声明 | `queryIfAllPlayerCharactersAreDown` |
| query | 根据玩家序号获取玩家GUID | Get Player GUID by Player ID | 声明 | `getPlayerGUIDByPlayerID` |
| query | 根据玩家GUID获取玩家序号 | Get Player ID by Player GUID | 声明 | `getPlayerIDByPlayerGUID` |
| query | 获取玩家昵称 | Get Player Nickname | 声明 | `getPlayerNickname` |
| query | 获得玩家客户端输入设备类型 | Get Player Client Input Device Type | 声明 | `getPlayerClientInputDeviceType` |
| query | 查询经典模式角色编号 | Check Classic Mode Character ID | 声明 | `checkClassicModeCharacterID` |
| query | 获取指定玩家的前台角色 | Get Active Character of Specified Player | 声明 | `getActiveCharacterOfSpecifiedPlayer` |
| query | 获取跟随运动器的目标 | Get Follow Motion Device Target | 声明 | `getFollowMotionDeviceTarget` |
| query | 获取全局计时器当前时间 | Get Current Global Timer Time | 声明 | `getCurrentGlobalTimerTime` |
| query | 获取玩家当前界面布局 | Get Player's Current UI Layout | 声明 | `getPlayersCurrentUILayout` |
| query | 获取造物当前目标 | Get Creation's Current Target | 声明 | `getCreationsCurrentTarget` |
| query | 获取造物属性 | Get Creation Attribute | 声明 | `getCreationAttribute` |
| query | 获取默认模式的造物仇恨列表 | Get Aggro List of Creation in Default Mode | 声明 | `getAggroListOfCreationInDefaultMode` |
| query | 查询玩家职业 | Query Player Class | 声明 | `queryPlayerClass` |
| query | 查询玩家职业的等级 | Query Player Class Level | 声明 | `queryPlayerClassLevel` |
| query | 查询角色技能 | Query Character Skill | 声明 | `queryCharacterSkill` |
| query | 以技能实例ID查询技能配置ID | Query Skill Config ID by Skill Instance ID | 声明 | `querySkillConfigIDBySkillInstanceID` |
| query | 以技能配置ID查询所有技能实例ID | Query All Skill Instance IDs by Skill Config ID | 声明 | `queryAllSkillInstanceIDsBySkillConfigID` |
| query | 以技能槽位查询所有技能实例ID | Query All Skill Instance IDs by Skill Slot | 声明 | `queryAllSkillInstanceIDsBySkillSlot` |
| query | 以技能槽位和技能配置ID查询技能实例ID | Query Skill Instance ID by Skill Slot and Skill Config ID | 声明 | `querySkillInstanceIDBySkillSlotAndSkillConfigID` |
| query | 查询技能属性组值 | Query Skill Attribute Group Value | 声明 | `querySkillAttributeGroupValue` |
| query | 查询实体是否具有单位状态 | Query If Entity Has Unit Status | 声明 | `queryIfEntityHasUnitStatus` |
| query | 根据槽位序号查询单位状态层数 | Query Unit Status Stacks by Slot ID | 声明 | `queryUnitStatusStacksBySlotID` |
| query | 根据槽位序号查询单位状态施加者 | Query Unit Status Applier by Slot ID | 声明 | `queryUnitStatusApplierBySlotID` |
| query | 查询单位状态的槽位序号列表 | List of Slot IDs Querying Unit Status | 声明 | `listOfSlotIDsQueryingUnitStatus` |
| query | 获取实体单位标签列表 | Get Entity Unit Tag List | 声明 | `getEntityUnitTagList` |
| query | 获取单位标签的实体列表 | Get Entity List by Unit Tag | 声明 | `getEntityListByUnitTag` |
| query | 查询指定实体的仇恨值 | Query the Aggro Value of the Specified Entity | 声明 | `queryTheAggroValueOfTheSpecifiedEntity` |
| query | 查询指定实体的仇恨倍率 | Query the Aggro Multiplier of the Specified Entity | 声明 | `queryTheAggroMultiplierOfTheSpecifiedEntity` |
| query | 查询全局仇恨转移倍率 | Query Global Aggro Transfer Multiplier | 声明 | `queryGlobalAggroTransferMultiplier` |
| query | 获取指定实体的仇恨目标 | Get the Aggro Target of the Specified Entity | 声明 | `getTheAggroTargetOfTheSpecifiedEntity` |
| query | 获取目标所在仇恨列表的拥有者列表 | Get List of Owners Who Have the Target in Their Aggro List | 声明 | `getListOfOwnersWhoHaveTheTargetInTheirAggroList` |
| query | 获取以目标为仇恨目标的拥有者列表 | Get List of Owners That Have the Target As Their Aggro Target | 声明 | `getListOfOwnersThatHaveTheTargetAsTheirAggroTarget` |
| query | 获取指定实体的仇恨列表 | Get the Aggro List of the Specified Entity | 声明 | `getTheAggroListOfTheSpecifiedEntity` |
| query | 查询指定实体是否已入战 | Query if Specified Entity Is in Combat | 声明 | `queryIfSpecifiedEntityIsInCombat` |
| query | 获取指定路径点信息 | Get Specified Waypoint Info | 声明 | `getSpecifiedWaypointInfo` |
| query | 获得全局路径的路点个数 | Get the Number of Waypoints in the Global Path | 声明 | `getTheNumberOfWaypointsInTheGlobalPath` |
| query | 查询预设点位置旋转 | Query Preset Point Position Rotation | 声明 | `queryPresetPointPositionRotation` |
| query | 以单位标签获取预设点位列表 | Get Preset Point List by Unit Tag | 声明 | `getPresetPointListByUnitTag` |
| query | 获取玩家结算排名数值 | Get Player Settlement Ranking Value | 声明 | `getPlayerSettlementRankingValue` |
| query | 获取玩家结算成功状态 | Get Player Settlement Success Status | 声明 | `getPlayerSettlementSuccessStatus` |
| query | 获取阵营结算排名数值 | Get Faction Settlement Ranking Value | 声明 | `getFactionSettlementRankingValue` |
| query | 获取阵营结算成功状态 | Get Faction Settlement Success Status | 声明 | `getFactionSettlementSuccessStatus` |
| query | 以键查询字典值 | Query Dictionary Value by Key | 声明 | `queryDictionaryValueByKey` |
| query | 查询字典是否包含特定键 | Query If Dictionary Contains Specific Key | 实现 | `queryIfDictionaryContainsSpecificKey` |
| query | 查询字典是否包含特定值 | Query If Dictionary Contains Specific Value | 实现 | `queryIfDictionaryContainsSpecificValue` |
| query | 获取字典中键组成的列表 | Get List of Keys from Dictionary | 实现 | `getListOfKeysFromDictionary` |
| query | 获取字典中值组成的列表 | Get List of Values from Dictionary | 实现 | `getListOfValuesFromDictionary` |
| query | 查询字典长度 | Query Dictionary's Length | 实现 | `queryDictionarysLength` |
| query | 查询自定义商店商品出售列表 | Query Custom Shop Item Sales List | 声明 | `queryCustomShopItemSalesList` |
| query | 查询背包商店物品出售列表 | Query Inventory Shop Item Sales List | 声明 | `queryInventoryShopItemSalesList` |
| query | 查询商店收购物品列表 | Query Shop Purchase Item List | 声明 | `queryShopPurchaseItemList` |
| query | 查询自定义商店商品出售信息 | Query Custom Shop Item Sales Info | 声明 | `queryCustomShopItemSalesInfo` |
| query | 查询背包商店商品出售信息 | Query Inventory Shop Item Sales Info | 声明 | `queryInventoryShopItemSalesInfo` |
| query | 查询商店物品收购信息 | Query Shop Item Purchase Info | 声明 | `queryShopItemPurchaseInfo` |
| query | 获取装备词条列表 | Get Equipment Affix List | 声明 | `getEquipmentAffixList` |
| query | 获取装备词条配置ID | Get Equipment Affix Config ID | 声明 | `getEquipmentAffixConfigID` |
| query | 获取装备词条数值 | Get Equipment Affix Value | 声明 | `getEquipmentAffixValue` |
| query | 查询装备标签列表 | Query Equipment Tag List | 声明 | `queryEquipmentTagList` |
| query | 根据装备索引查询装备配置ID | Query Equipment Config ID by Equipment ID | 声明 | `queryEquipmentConfigIDByEquipmentID` |
| query | 获取指定装备栏位的装备索引 | Get the Equipment Index of the Specified Equipment Slot | 声明 | `getTheEquipmentIndexOfTheSpecifiedEquipmentSlot` |
| query | 获取背包容量 | Get Inventory Capacity | 声明 | `getInventoryCapacity` |
| query | 获取背包道具数量 | Get Inventory Item Quantity | 声明 | `getInventoryItemQuantity` |
| query | 获取背包货币数量 | Get Inventory Currency Quantity | 声明 | `getInventoryCurrencyQuantity` |
| query | 获取背包所有基础道具 | Get all basic items from Inventory | 声明 | `getAllBasicItemsFromInventory` |
| query | 获取背包所有货币 | Get All Currency From Inventory | 声明 | `getAllCurrencyFromInventory` |
| query | 获取背包所有装备 | Get all equipment from Inventory | 声明 | `getAllEquipmentFromInventory` |
| query | 获取掉落物组件道具数量 | Get Loot Component Item Quantity | 声明 | `getLootComponentItemQuantity` |
| query | 获取掉落物组件货币数量 | Get Loot Component Currency Quantity | 声明 | `getLootComponentCurrencyQuantity` |
| query | 获取掉落物组件所有道具 | Get All Items from Loot Component | 声明 | `getAllItemsFromLootComponent` |
| query | 获取掉落物组件所有货币 | Get All Currency from Loot Component | 声明 | `getAllCurrencyFromLootComponent` |
| query | 获取掉落物组件所有装备 | Get All Equipment from Loot Component | 声明 | `getAllEquipmentFromLootComponent` |
| query | 获取碰撞触发器内所有实体 | Get All Entities Within the Collision Trigger | 声明 | `getAllEntitiesWithinTheCollisionTrigger` |
| query | 查询指定小地图标识信息 | Query Specified Mini-Map Marker Information | 声明 | `querySpecifiedMiniMapMarkerInformation` |
| query | 获取实体的小地图标识状态 | Get Entity's Mini-Map Marker Status | 声明 | `getEntitysMiniMapMarkerStatus` |
| query | 获取当前造物的巡逻模板 | Get Current Creation's Patrol Template | 声明 | `getCurrentCreationsPatrolTemplate` |
| query | 查询成就是否完成 | Query If Achievement Is Completed | 声明 | `queryIfAchievementIsCompleted` |
| query | 获取当前生效的扫描标签配置ID | Get the Currently Active Scan Tag Config ID | 声明 | `getTheCurrentlyActiveScanTagConfigID` |
| query | 获取玩家段位变化分数 | Get Player Rank Score Change | 声明 | `getPlayerRankScoreChange` |
| query | 获取玩家段位信息 | Get Player Ranking Info | 声明 | `getPlayerRankingInfo` |
| query | 获取玩家逃跑合法性 | Get Player Escape Validity | 声明 | `getPlayerEscapeValidity` |
| query | 查询当前激活的实体布设组列表 | Get Currently Active Entity Deployment Groups | 声明 | `getCurrentlyActiveEntityDeploymentGroups` |
| query | 查询对应礼盒数量 | Query Corresponding Gift Box Quantity | 声明 | `queryCorrespondingGiftBoxQuantity` |
| query | 查询对应华丽演绎礼盒消耗数量 | Query Corresponding Gift Box Consumption | 声明 | `queryCorrespondingGiftBoxConsumption` |
| query | 获取复杂造物的预设状态值 | Get the Preset Status Value of the Complex Creation | 声明 | `getThePresetStatusValueOfTheComplexCreation` |
| query | 查询指定任务计数 | Query Specified Task Count | 声明 | `querySpecifiedTaskCount` |
| query | 查询指定任务是否完成 | Query If Specified Task is Completed | 声明 | `queryIfSpecifiedTaskIsCompleted` |
| query | 查询玩家当前激活操控运动器列表 | Query Player's Currently Activated Control Motion Device List | 声明 | `queryPlayersCurrentlyActivatedControlMotionDeviceList` |
| query | 查询玩家当前跟随操控运动器 | Query Player's Followed Control Motion Device | 声明 | `queryPlayersFollowedControlMotionDevice` |
| query | 查询操控运动器当前运动参数 | Query Control Motion Device's Current Movement Parameters | 声明 | `queryControlMotionDevicesCurrentMovementParameters` |
| query | 查询玩家是否订阅 | Check Whether Player Has Subscribed | 声明 | `checkWhetherPlayerHasSubscribed` |
| query | 查询玩家光标是否激活 | Check Whether Player Cursor Is Active | 声明 | `checkWhetherPlayerCursorIsActive` |
| operation | 是否相等 | Equal | 实现 | `equal` |
| operation | 拼装列表 | Assembly List | 原生语法 | `const list: T[] = [a, b, c];` |
| operation | 数据类型转换 | Data Type Conversion | 实现 | `dataTypeConversion` |
| operation | 枚举是否相等 | Enumerations Equal | 实现 | `enumerationsEqual` |
| operation | 拆分三维向量 | Split 3D Vector | 实现 | `split3DVector` |
| operation | 三维向量加法 | 3D Vector Addition | 实现 | `_3dVectorAddition` |
| operation | 三维向量减法 | 3D Vector Subtraction | 实现 | `_3dVectorSubtraction` |
| operation | 三维向量缩放 | 3D Vector Zoom | 实现 | `_3dVectorZoom` |
| operation | 三维向量夹角 | 3D Vector Angle | 实现 | `_3dVectorAngle` |
| operation | 三维向量归一化 | 3D Vector Normalization | 实现 | `_3dVectorNormalization` |
| operation | 加法运算 | Addition | 实现 | `addition` |
| operation | 减法运算 | Subtraction | 实现 | `subtraction` |
| operation | 乘法运算 | Multiplication | 实现 | `multiplication` |
| operation | 除法运算 | Division | 实现 | `division` |
| operation | 模运算 | Modulo Operation | 实现 | `moduloOperation` |
| operation | 幂运算 | Exponentiation | 实现 | `exponentiation` |
| operation | 取较大值 | Take Larger Value | 实现 | `takeLargerValue` |
| operation | 取较小值 | Take Smaller Value | 实现 | `takeSmallerValue` |
| operation | 对数运算 | Logarithm Operation | 实现 | `logarithmOperation` |
| operation | 绝对值运算 | Absolute Value Operation | 实现 | `absoluteValueOperation` |
| operation | 取符号运算 | Sign Operation | 实现 | `signOperation` |
| operation | 三维向量模运算 | 3D Vector Modulo Operation | 实现 | `_3dVectorModuloOperation` |
| operation | 算术平方根运算 | Arithmetic Square Root Operation | 实现 | `arithmeticSquareRootOperation` |
| operation | 范围限制运算 | Range Limiting Operation | 实现 | `rangeLimitingOperation` |
| operation | 取整数运算 | Round to Integer Operation | 实现 | `roundToIntegerOperation` |
| operation | 创建三维向量 | Create 3D Vector | 实现 | `create3DVector` |
| operation | 逻辑与运算 | Logical AND Operation | 实现 | `logicalANDOperation` |
| operation | 逻辑或运算 | Logical OR Operation | 实现 | `logicalOROperation` |
| operation | 逻辑异或运算 | Logical XOR Operation | 实现 | `logicalXOROperation` |
| operation | 逻辑非运算 | Logical NOT Operation | 实现 | `logicalNOTOperation` |
| operation | 数值小于 | Less Than | 实现 | `lessThan` |
| operation | 数值小于等于 | Less Than or Equal To | 实现 | `lessThanOrEqualTo` |
| operation | 数值大于 | Greater Than | 实现 | `greaterThan` |
| operation | 数值大于等于 | Greater Than or Equal To | 实现 | `greaterThanOrEqualTo` |
| operation | 两坐标点距离 | Distance Between Two Coordinate Points | 实现 | `distanceBetweenTwoCoordinatePoints` |
| operation | 正弦函数 | Sine Function | 实现 | `sineFunction` |
| operation | 余弦函数 | Cosine Function | 实现 | `cosineFunction` |
| operation | 正切函数 | Tangent Function | 实现 | `tangentFunction` |
| operation | 反正弦函数 | Arcsine Function | 实现 | `arcsineFunction` |
| operation | 反余弦函数 | Arccosine Function | 实现 | `arccosineFunction` |
| operation | 反正切函数 | Arctangent Function | 实现 | `arctangentFunction` |
| operation | 三维向量旋转 | 3D Vector Rotation | 实现 | `_3dVectorRotation` |
| operation | 方向向量转旋转 | Direction Vector to Rotation | 实现 | `directionVectorToRotation` |
| operation | 三维向量内积 | 3D Vector Dot Product | 实现 | `_3dVectorDotProduct` |
| operation | 三维向量外积 | 3D Vector Cross Product | 实现 | `_3dVectorCrossProduct` |
| operation | 弧度转角度 | Radians to Degrees | 实现 | `radiansToDegrees` |
| operation | 角度转弧度 | Degrees to Radians | 实现 | `degreesToRadians` |
| operation | 根据时间戳计算格式化时间 | Calculate Formatted Time From Timestamp | 实现 | `calculateFormattedTimeFromTimestamp` |
| operation | 根据格式化时间计算时间戳 | Calculate Timestamp From Formatted Time | 实现 | `calculateTimestampFromFormattedTime` |
| operation | 根据时间戳计算星期几 | Calculate Day of the Week From Timestamp | 实现 | `calculateDayOfTheWeekFromTimestamp` |
| operation | 左移运算 | Left Shift Operation | 实现 | `leftShiftOperation` |
| operation | 右移运算 | Right Shift Operation | 实现 | `rightShiftOperation` |
| operation | 按位与 | Bitwise AND | 实现 | `bitwiseAND` |
| operation | 按位或 | Bitwise OR | 实现 | `bitwiseOR` |
| operation | 按位异或 | XOR (Exclusive OR) | 实现 | `xorExclusiveOR` |
| operation | 按位取补 | Bitwise Complement | 实现 | `bitwiseComplement` |
| operation | 按位写入 | Write by bit | 实现 | `writeByBit` |
| operation | 按位读出 | Read by bit | 实现 | `readByBit` |
| operation | 拼装字典 | Assembly Dictionary | 实现 | `assemblyDictionary` |
| operation | 建立字典 | Create Dictionary | 实现 | `createDictionary` |
| operation | 拼装结构体 | Assemble Structure | 原生语法 | `const s: MyStruct = { field1: v1, field2: v2 };（结构体用 interface 声明）` |
| operation | 拆分结构体 | Split Structure | 原生语法 | `const { field1, field2 } = s;` |
