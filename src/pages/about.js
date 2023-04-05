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
                    <div style={{ fontSize: "30px", marginBottom: "20px" }}>石井 湧</div>
                </div>
                <div className="Comment">
                    <b>
                        I am 26 years old, from Kagawa Prefecture. I graduated from Kansai University, Faculty of Law, and have been working as an engineer since March 2022. I mainly deal with infrastructure (AWS) in my work, but I also do programming as a hobby.
                        As for other hobbies, I enjoy playing guitar, watching soccer games, and reading books.<br />
                        I also love my job as much as my hobbies, and I often find myself studying even on days off.<br />
                    </b>
                    <br />
                    <p style={{marginBottom: "50px"}}>
                        香川県出身の26歳。関西大学法学部卒で、2022年3月よりエンジニアとして活動しております。業務ではインフラ(AWS)を主に扱っておりますが、趣味でプログラミングも行っています。<br />
                        その他の趣味としては、ギターを弾く事やサッカーを観戦する事、本を読む事です。<br />
                        仕事も趣味と同じくらい好きで、ついつい休日でも勉強してしまいます。
                    </p>
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