// ファイルインポートする際に、やり方が複数あり
//  * = ファイルの全部
// {} = 要素の一つをインポートする (, で複数インポートも可)
import  * as net from "net";
import {connect} from "net";
import {Buffer} from "buffer";

const server = net.createServer(socket => {
    socket.on("data", data => {
        console.log(data.toString());

        // データを受け取ったら送信
        socket.write(Buffer.from("piyo"));
    })
});

server.listen(3359);