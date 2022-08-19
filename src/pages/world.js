import React from "react"
import Layout from "./layout"
import  "./world.css"
import p1 from "../../static/c1.jpg"
import p2 from "../../static/c2.jpg"

export default function world(){
    return (
        <Layout>
            <div className="world">
            <h1 className="title">行ったことのある国</h1>
          <h2>タイ王国</h2>
          <div className="picture">
            <img src={p1} className="pic"/>
          </div>
          <p>
            バンコクや色々な観光スポットに行きました。<br/>
            人もとても優しく、観光スポットも多くて楽しめること間違いなしです！<br/>
            ほほえみの国とも言われています！
          </p>
          <h2>アメリカ合衆国</h2>
          <div className="picture">
            <img src={p2} className="pic"/>
          </div>
          <p>
          マサチューセッツ州のボストンに行きました。<br/>
            こんな街に住んでみたいと感じるような豪華な街でした。<br/>
            他の場所にも行ってみたいと思っています！
          </p>
          
          </div>
        </Layout>
      )
}
