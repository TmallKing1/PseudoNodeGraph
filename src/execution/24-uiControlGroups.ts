// 自动生成：执行节点 / 二十四、界面控件组（XXIV. UI Control Groups）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【切换当前界面布局】 Switch Current Interface Layout
 * 分类：执行节点 / 二十四、界面控件组（XXIV. UI Control Groups）
 *
 * 可以通过布局索引来切换目标玩家当前的界面布局
 *
 * @en Switch the Target Player's current Interface Layout via Layout ID
 * @param targetPlayer 生效的玩家实体（目标玩家：实体）
 * @param layoutIndex 界面布局的标识（布局索引：整数）
 */
export declare function switchCurrentInterfaceLayout(targetPlayer: Entity, layoutIndex: int): void;

/**
 * 【激活控件组库内界面控件组】 Activate UI Control Group in Control Group Library
 * 分类：执行节点 / 二十四、界面控件组（XXIV. UI Control Groups）
 *
 * 可以在目标玩家的界面布局上激活处于界面控件组库内的以自定义模板形式存在的界面控件组
 *
 * @en Activate the UI Control Groups stored as Custom Templates in the UI Control Group Library within the Target Player's Interface Layout
 * @param targetPlayer 生效的玩家实体（目标玩家：实体）
 * @param uiControlGroupIndex 界面控件组的标识（界面控件组索引：整数）
 */
export declare function activateUIControlGroupInControlGroupLibrary(targetPlayer: Entity, uiControlGroupIndex: int): void;

/**
 * 【设置界面控件(组)状态】 Set UI Control (Group) Status
 * 分类：执行节点 / 二十四、界面控件组（XXIV. UI Control Groups）
 *
 * 通过界面控件索引来修改目标玩家界面布局内对应界面控件的状态
 *
 * @en Edit the state of the UI Control in the Target Player's Interface Layout by its UI Control ID
 * @param targetPlayer 生效的玩家实体（目标玩家：实体）
 * @param uiControlGroupIndex 界面控件的标识（界面控件(组)索引：整数）
 * @param displayStatus 关闭：不可见且逻辑不运行 开启：可见+逻辑正常运行 隐藏：不可见+逻辑正常运行（显示状态：枚举）
 */
export declare function setUIControlGroupStatus(targetPlayer: Entity, uiControlGroupIndex: int, displayStatus: E.UIControlDisplayStatus): void;

/**
 * 【移除控件组库内界面控件组】 Remove Interface Control Group From Control Group Library
 * 分类：执行节点 / 二十四、界面控件组（XXIV. UI Control Groups）
 *
 * 可以在目标玩家的界面布局上移除已通过节点【激活控件组库内界面控件组】激活的界面控件组
 *
 * @en Remove the UI Control Groups activated via [ Activate UI Control Group in Control Group Library ] from the Target Player's Interface Layout
 * @param targetPlayer 生效的玩家实体（目标玩家：实体）
 * @param uiControlGroupIndex 界面控件组的标识（界面控件组索引：整数）
 */
export declare function removeInterfaceControlGroupFromControlGroupLibrary(targetPlayer: Entity, uiControlGroupIndex: int): void;

/**
 * 【播放界面动效控件】 Play UI Animation on Control
 * 分类：执行节点 / 二十四、界面控件组（XXIV. UI Control Groups）
 *
 * 在玩家实体的界面布局中播放该界面动效控件挂载的特效资产，如果想隐藏或关闭特效可以用【设置界面控件(组)状态】节点。该节点多次执行时特效可以多次播放。
 *
 * @en Plays the VFX asset mounted to this UI animation control in the Player Entity's Interface Layout. To hide or disable the VFX, use the [Set UI Control (Group) Status] node. If this node is executed multiple times, the VFX can be played multiple times as well.
 * @param playerEntity 生效的玩家实体（玩家实体：实体）
 * @param specialEffectControlIndex 界面动效控件/全屏界面动效控件的标识（动效控件索引：整数）
 */
export declare function playUIAnimationOnControl(playerEntity: Entity, specialEffectControlIndex: int): void;

/**
 * 【更新消息队列】 Refresh Notification Queue
 * 分类：执行节点 / 二十四、界面控件组（XXIV. UI Control Groups）
 *
 * 针对【消息队列】界面控件，支持通过节点图传输需要显示的一组数据，传输后会在指定【消息队列】界面控件中按照输入的图文组模板显示这组数据
 *
 * @en The Notification Queue UI Control allows for the transmission of a given set of data to be displayed via a node graph. Once transmitted, the data will be displayed in the specified Notification Queue UI Control according to the graphic-text group template entered
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param notificationQueueIndex 消息队列索引（消息队列索引：整数）
 * @param notificationItemID 消息项序号（消息项序号：整数）
 * @param notificationQueueData 消息队列数据（消息队列数据：泛型）
 */
export declare function refreshNotificationQueue<T extends NodeValue = NodeValue>(playerEntity: Entity, notificationQueueIndex: int, notificationItemID: int, notificationQueueData: T): void;

/**
 * 【发送客户端脚本信号】 Send Client Scripted Signal
 * 分类：执行节点 / 二十四、界面控件组（XXIV. UI Control Groups）
 *
 * 可以从服务器节点图向客户端节点图发送信号
 *
 * @en Send a signal from the Server Node Graph to the Client Node Graph
 *
 * —— 信号语义（创作者补充）——
 * 信号在编辑器【服务器信号管理器】中定义：每个信号有信号名和有序参数列表（参数名+类型），信号名与参数列表一一对应。
 * 在节点上选择信号名后，节点会追加该信号的参数引脚。伪代码中用 SignalRegistry 声明信号（见 core/signals.ts / README），信号名与参数在类型检查时校验。
 * 【发送客户端脚本信号】入参：信号名、目标玩家（玩家实体）+ 该信号的参数。
 * 发送到目标玩家客户端的 Lua 脚本，客户端用 script:RegisterServerSignalHandler 接收。
 * @param signalName 信号名（必须是 SignalRegistry 中声明的信号）
 * @param targetPlayer 目标玩家（玩家实体）
 * @param params 该信号的参数
 */
export declare function sendClientScriptedSignal<K extends SignalName>(signalName: K, targetPlayer: Entity, params: SignalParams<K>): void;
