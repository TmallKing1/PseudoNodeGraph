// 示例：玩家角色受到攻击时，若伤害超过 100 且为暴击，则给攻击者添加单位状态并打印日志；
// 实体创建时启动一个循环定时器，定时器触发时让所有在场玩家角色回血。
// 注意：节点图字符串不能拼接/截取/遍历，只能整体赋值、比较或由【数据类型转换】得到，所以日志分多次打印。
import {
  onAttacked, onEntityIsCreated, onTimerIsTriggered,
  addUnitStatus, printString, startTimer, recoverHP,
  getSelfEntity, getListOfPlayerEntitiesOnTheField, getAllCharacterEntitiesOfSpecifiedPlayer,
  greaterThan, logicalANDOperation, dataTypeConversion, addition,
  UnitStatusApplyResult, ConfigId, str, int,
} from '../src';

const BURN_STATUS = 1001 as ConfigId; // 配置ID 用 as 从字面量构造
const HEAL_TIMER = str('heal');        // 字符串字面量用 str() 构造

onAttacked((ev) => {
  // 运算节点有真实实现，也可以直接写原生运算符 ev.damage > 100
  if (logicalANDOperation(greaterThan(ev.damage, 100), ev.critHitOrNot)) { // 双分支 → if
    const r = addUnitStatus(ev.eventSourceEntity, ev.attackerEntity, BURN_STATUS, 1, new Map());
    switch (r.applicationResult) { // 多分支 → switch
      case UnitStatusApplyResult.SuccessNewStatus:
        printString(str('施加成功'));
        break;
      default:
        printString(str('施加失败，槽位序号：'));
        printString(dataTypeConversion(r.slotID, 'str'));
    }
  }
});

onEntityIsCreated(() => {
  startTimer(getSelfEntity(), HEAL_TIMER, true, [5]);
});

onTimerIsTriggered((ev) => {
  if (ev.timerName !== HEAL_TIMER) return; // 字符串只能整体比较
  let healed: int = 0; // 设置/获取局部变量 → let
  for (const player of getListOfPlayerEntitiesOnTheField()) { // 列表迭代循环 → for...of
    for (const ch of getAllCharacterEntitiesOfSpecifiedPlayer(player)) {
      recoverHP(ch, 50, str(''), false, getSelfEntity());
      healed = addition(healed, 1);
    }
  }
  printString(str('本次回复角色数：'));
  printString(dataTypeConversion(healed, 'str'));
});

// 以下写法在类型检查中会报错（节点图不支持）：
// printString(str('a') + str('b'));             // 拼接
// dataTypeConversion(ev.eventSourceGUID, 'int'); // GUID 只能转字符串
