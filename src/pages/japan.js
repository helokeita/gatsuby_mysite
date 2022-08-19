import React from "react"
import Layout from "./layout"
import "./japan.css"
import p1 from "../../static/1.jpg"
import p2 from "../../static/2.jpg"
import p3 from "../../static/3.jpg"
import p4 from "../../static/4.jpg"
import p5 from "../../static/5.jpg"
import p6 from "../../static/6.jpg"
import p7 from "../../static/7.jpg"
import p8 from "../../static/8.jpg"

export default function japan(){
    return (
        <Layout>
            <div className="japan">
            <h1 className="title">行ったことのある国内</h1>
          <h2>埼玉県</h2>
          <div className="picture">
            <img src={p1} className="pic"/>
          </div>
          <p>
            地元です！<br/>
            あるのが当たり前という感じで、普段は悪口しか出てきませんが、<br/>
            住みやすくていいところだと思います
          </p>
          <h2>東京都</h2>
          <div className="picture">
            <img src={p2} className="pic"/>
          </div>
          <p>
            なにかとお世話になる場所です！<br/>
            日本の首都ということで色々とそろっています。<br/>
            が、ごちゃごちゃし過ぎていて高確率で迷子になります！
          </p>
          <h2>神奈川県</h2>
          <div className="picture">
            <img src={p3} className="pic"/>
          </div>
          <p>
            横浜中華街に行きました。<br/>
            これぐらいしか行ったことないので機会があったら他のところにも行ってみたいです！
          </p>
          <h2>千葉県</h2>
          <div className="picture">
            <img src={p4} className="pic"/>
          </div>
          <p>
            東京ディスティニーランド、シーを言えばこの場所！<br/>
            もちろん何度か行きました。
          </p>
          <h2>群馬県</h2>
          <div className="picture">
            <img src={p5} className="pic"/>
          </div>
          <p>
            積善館に行きました。<br/>
            千と千尋の世界観を感じることができて楽しかったです
          </p>
          <h2>静岡県</h2>
          <div className="picture">
            <img src={p6} className="pic"/>
          </div>
          <p>
            熱海に行きました！<br/>
            海がとてもきれいで、食事がとてもおいしかったです！
          </p>
          <h2>三重県</h2>
          <div className="picture">
            <img src={p7} className="pic"/>
          </div>
          <p>
            鳥羽水族館や伊勢神宮に行きました。<br/>
            食べ歩きスポットも多くとても楽しい場所でした！
          </p>
          <h2>大阪府</h2>
          <div className="picture">
            <img src={p8} className="pic"/>
          </div>
          <p>
            UFJに行きました<br/>
            料理もおいしかったし、楽しい場所でした！
          </p>
          </div>
        </Layout>
      )
}


