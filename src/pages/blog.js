import React from 'react'
import Seo from "../components/seo"
import Layout from '../components/layout';
import '../components/styles/fade.css'
import BlogImg from '../images/blog.png'

const blog = () => {
    return (
        <Layout>
            <div style={{ textAlign: "center", margin: "0 auto", overflowWrap: "normal" }}>
                <div className="Icon">
                    <b style={{ fontSize: "50px" }}>Blog</b>
                    <p>
                        ブログサイトは<a href='https://blog.istoneyou.net'>こちら</a><br />
                        (現在テスト記事のみになっています。)</p>
                </div>
                <br />
                <div className="Comment">
                    <p>
                        Jamstackで構築したブログサイトです。<br />
                        言語はReactのフレームワークである<b>Gatsby.js</b>、
                        ホスティングにはAWSの<b>Amplify</b>、
                        CMSには<b>microCMS</b>を使用しています。<br />
                    </p>
                    <img src={BlogImg} alt="blog.png" width="400px" />
                </div>
                <br />
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Blog" />

export default blog