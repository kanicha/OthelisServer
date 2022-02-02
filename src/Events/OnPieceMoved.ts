import {Socket} from "net";
import NetworkManager from "../Manager/NetworkManager";

export default function (data, socket:Socket) {
    // 自分のIDを代入
    const myId = data.id;
    // 自分から見た相手の情報を送信しないように中身を空にする
    data.id = "";

    /*console.log("x座標" + data.piecePos.x);
    console.log("z座標" + data.piecePos.z);
    console.log("y座標" + data.piecePos.y);*/

    NetworkManager.OpponentSendMessage(data, myId);
}