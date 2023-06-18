import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

const about = () => {
    return (
        <Layout>
            <div className={styles.textCenter}>
                <div className="Icon">
                    <div style={{ fontSize: "50px", }}><b>About</b></div>
                    <StaticImage
                        src="../images/icon.jpg"
                        loading="eager"
                        width={100}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                        style={{
                            marginTop: `50px`,
                            borderRadius: `50%`,
                            zIndex: 1,
                            border: `1px solid black`,
                        }}
                    />
                    <div style={{ fontSize: "30px", margin: "10px 0 40px 0" }}>石井 湧</div>
                </div>
                <div className="Comment">
                    <br />
                    <b style={{ marginBottom: "50px" }}>
                        香川県出身の26歳。関西大学法学部卒業後、不動産の営業をしておりました。
                        そこから転職して2022年3月よりエンジニアとして活動しております。<br /><br />
                        社員が少ないために、AWSに詳しい人がおらず、皆、AWSへの知識習得に時間が割けないという環境の中で、AWSの知識習得と構築をほぼ一人で行なっております。<br /><br />
                        幅広い業務を経験したため、コンテナやIaC、CI/CD、オブザーバビリティ等の知識や構築経験に加えて、小規模ではありますが、JavaScriptやPyhtonでの開発経験もあります。<br /><br />
                        また、業務外でも評価をいただいており、Qiitaの記事でトレンド1位を獲得したり、AWSの書籍の執筆が決まったりといった成果を上げています。<br /><br />
                        その他にもコミュニティでNext.js(TypeScript)でのチーム開発を行うなど積極的に活動しております。
                    </b>
                    <br />
                    <br />
                    <br />
                    <div className={styles.textCenter}>
                        <p>My email adress is <a href="mailto:istoneyou1205@gmail.com">istoneyou1205@gmail.com</a> or find me on <a href="https://www.twitter.com/istone_you">Twitter</a></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default about