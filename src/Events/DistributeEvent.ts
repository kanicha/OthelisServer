import {Buffer} from "buffer";

export default class DistributeEvent
{
    private static _instance: DistributeEvent;

    // コンストラクタ
    private constructor() {
    }

    public static get instance()
    {
        if (this._instance == null)
        {
            this._instance = new DistributeEvent();
        }

        return this._instance;
    }

    // 通信ごとに分配をおこなう関数
    public Distribution(buffer: Buffer)
    {
        // 取得してきたデータをJson化
        const jsonMessage = JSON.parse(buffer.toString());

        // イベントの名前変数を用意 (文字列の中にファイル名(通信名))
        const eventName = `On${jsonMessage._packetType}`;
        const event = require(eventName);

        if (event)
        {
            event(jsonMessage);
        }
    }
}