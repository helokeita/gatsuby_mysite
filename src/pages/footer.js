import React from "react"
import {Link} from "gatsby"
import "./footer.css"

export default function Footer(){
    return (
        <footer>
            <div className="about">
                <div className="b1">
                    <h3 className="h3">このサイトについて</h3>
                    <p className="p2">
                        このサイトでは今まで行ったことのある県や国についてまとめていきます。<br />
                        使用しているのはGatsbyというJavascriptのフレームワークを使用しています。<br />
                        初めて触るので慣れない点もありましたが、調べたりして作成することができました。<br />
                        よかったら、レビューやら感想やらもらえると嬉しいです！！
                    </p>
                </div>
                <div className="b2">
                    <h3 className="h3">サイトリンク</h3>
                        <Link to="/" className="e">
                        <p className="p first">Home</p>
                        </Link>
                        <Link to="/japan" className="e">
                        <p className="p">Japan</p>
                        </Link>
                        <Link to="/world" className="e">
                        <p className="p">World</p>
                        </Link>
                        <Link to="/contact" className="e">
                        <p className="p">Contact</p>
                        </Link>
                        
                </div>

            </div>
            <p className="footerp">&copy; 2022 keita</p>
        </footer>
    )
}