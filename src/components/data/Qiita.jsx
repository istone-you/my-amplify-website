import React from 'react'

import Article from '../common/Article'
import * as styles from "../index.module.css"
import No1 from '../../images/Qiita/No1.jpg'
import No2 from '../../images/Qiita/No2.jpg'
import No3 from '../../images/Qiita/No3.jpg'
import Comment from '../../images/Qiita/Comment.jpg'

const Qiita = () => {
    return (
        <div style={{ textAlign: "center", margin: "0 auto", overflowWrap: "normal" }}>
            <div className={styles.textCenter}>
                <div className="Icon">
                    <div style={{ fontSize: "50px", marginBottom: "10px" }}><b>Qiita</b></div>
                    <p>アカウントは<a href='https://qiita.com/iStone'>こちら</a></p>
                </div>
            </div>
            <div className="Comment" style={{ marginTop: "50px" }}>
                <Article
                    title="【AWS】ぼくのかんがえたさいきょうの運用・監視構成"
                    url="https://qiita.com/iStone/items/72417fe599e71e62f631"
                    description="AWSのインフラを運用・監視する上で使いやすいと思ったサービスを組み合わせた構成図の紹介です。Qiitaのトレンドで１位になり、はてなブックマークの技術カテゴリでトップを飾りました。"
                    width={300}
                    alt="No1.jpg"
                    src={No1}
                />
                <div className={styles.arrow_box}>
                    <p>Twitterやはてブで様々なコメントを頂きました！</p>
                    <img width={500} alt="Comment.jpg" src={Comment} />
                </div>
                <Article
                    title="【AWS】さいきょうの運用・監視構成を作成するのに参考になった書籍"
                    url="https://qiita.com/iStone/items/0fd385f07083a691ea05"
                    description="「ぼくのかんがえたさいきょうの運用・監視構成」を作成する上で参考になった書籍の紹介です。Qiitaのトレンドで２位になりました。"
                    width={300}
                    alt="No2.jpg"
                    src={No2}
                >
                </Article>
                <Article
                    title="インフラエンジニア1年生がプログラミングを勉強するのに使った教材"
                    url="https://qiita.com/iStone/items/64c1ffe00e94a024af49"
                    description="プログラミングを学ぶために使用した教材の紹介です。Qiitaのトレンドで３位になりました。"
                    width={300}
                    alt="No3.jpg"
                    src={No3}
                >
                </Article>
            </div>
        </div>
    )
}

export default Qiita