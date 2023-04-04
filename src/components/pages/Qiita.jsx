import React from 'react'

import Article from '../common/Article'
import Layout from '../layout.js';
import * as styles from "../index.module.css"

const Qiita = () => {

    return (
        <Layout>
            <div style={{ textAlign: "center", margin: "0 auto", overflowWrap: "normal" }}>
                <div className={styles.textCenter}>
                    <div className="Icon">
                        <div style={{ fontSize: "50px", }}><b>Qiita</b></div>
                    </div>
                </div>
                <div className="Comment" style={{ marginTop: "100px" }}>
                    <Article
                        title="【AWS】ぼくのかんがえたさいきょうの運用・監視構成"
                        url="https://qiita.com/iStone/items/72417fe599e71e62f631"
                        description="AWSのインフラを運用・監視する上で使いやすいと思ったサービスを組み合わせた構成図の紹介です。Qiitaのトレンドで１位になり、はてなブックマークの技術カテゴリでトップを飾りました。"
                        width={200}
                        alt=""
                        src=""
                    >
                    </Article>
                    <Article
                        title="【AWS】さいきょうの運用・監視構成を作成するのに参考になった書籍"
                        url="https://qiita.com/iStone/items/0fd385f07083a691ea05"
                        description="「ぼくのかんがえたさいきょうの運用・監視構成」を作成する上で参考になった書籍の紹介です。Qiitaのトレンドで２位になりました。"
                        width={200}
                        alt=""
                        src=""
                    >
                    </Article>
                    <Article
                        title="インフラエンジニア1年生がプログラミングを勉強するのに使った教材"
                        url="https://qiita.com/iStone/items/64c1ffe00e94a024af49"
                        description="プログラミングを学ぶために使用した教材の紹介です。Qiitaのトレンドで３位になりました。"
                        width={200}
                        alt=""
                        src=""
                    >
                    </Article>
                </div>
            </div>
        </Layout>
    )
}

export default Qiita