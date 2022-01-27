import {Socket} from "net";
import PlayerManager from "../Player/PlayerManager";

export default class NetworkManager
{
    public static _playerManager:PlayerManager = new PlayerManager();

    /**
     *  指定ソケットにデータを送信する
     *  @param socket 送信先(相手)
     *  @param buffer データ
     */
    public static SendMessage(buffer, socket:Socket)
    {
        // 引数の渡されたbuffer(データ)をstring化
        const message = JSON.stringify(buffer);

        // 送信
        socket.write(message);
    }

    /**
     * 接続しているPlayer全員似メッセージをおくる関数
     * @param buffer データ
     */
    public static BroadcastMessage(buffer)
    {
        // for of文で_activePlayerの数にメッセージ送信(Send)をおこなう
        for (const player of this._playerManager._activePlayer) {
            this.SendMessage(buffer, player.socket);
        }
    }
}