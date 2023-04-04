import React from 'react'
import Project from '../common/Project';
import '../styles/fade.css';
import 'animate.css';

const History = () => {

    const cardStyle = {
        listStyle: "none",
        position: "relative",
        padding: "40px",
        border: "2px solid black",
        borderRadius: "10px",
    }

    // const [ref, inView] = useInView({
    //     rootMargin: '-300px',
    //     triggerOnce: true,
    // });
    return (
        <div>
            <h1>History</h1>
            <h2>株式会社フィールドロジック</h2>
            <div style={{ textAlign: "left", }}>
                <Project
                    title="◯AWSに移行するシステムの運用設計・構築"
                    detail={<div style={cardStyle}>
                        期間：2022年6月 – 現在<br />
                        <br />
                        【概要】<br />
                        上司や開発グループの要望をもとに、AWSに移行後の運用設計・構築<br />
                        <br />
                        【詳細】<br />
                        ・IPアドレスの設計<br />
                        ・IAMロールやセキュリティグループの設計<br />
                        ・ドメインのネームサーバーをRoute53に移管<br />
                        ・AWSにて開発しているシステムのサーバーやネットワークの構成をTerraformを用いてコード化<br />
                        ・TerraformをAWSのCodePipelineを利用してCI/CD運用<br />
                        ・OpenTelemtry、Prometheus、Grafanaを用いたメトリクス監視の設計と構築<br />
                        ・Fluent Bit、Grafana Lokiを用いたログ監視の設計と構築<br />
                        ・OpenTelemetry、Grafana Tempoを用いたトレース監視の設計と構築<br />
                        ・AWSでのセキュリティサービスの選定とOpenSearchを用いたセキュリティログの可視化<br />
                        ・Ansibleを用いてインストールの自動化<br />
                        ・ECSにて監視ツールを導入するためのタスク定義を作成<br />
                        ・Systems ManagerやLambda等を用いてAWSでの運用の自動化<br />
                        ・Serverless Frameworkを用いたLambda関数の作成<br />
                        ・ドメイン管理を行うツールをAmplifyにて開発<br />
                        ・Apache HTTP Serverの構築とバージョンアップの対応<br />
                        ・AWS IAM Identity Centerを用いたログイン管理<br />
                        ・構築の手順書やマニュアルの作成<br />
                        <br />
                        【ポイント】<br />
                        社内にAWSに詳しい人がおらず、上司や開発グループからの要望をもとに一人で設計・構築しているため、AWSやOSSの幅広いサービスの深い知識を習得できた<br />
                        こちらの構成を紹介した記事が、はてなブックマークやQiitaでトレンド1位を獲得できた<br />
                        <a href="https://qiita.com/iStone/items/72417fe599e71e62f631" alt="【AWS】ぼくのかんがえたさいきょうの運用・監視構成" target="_blank" rel="noreferrer noopener">【AWS】ぼくのかんがえたさいきょうの運用・監視構成</a><br />
                        【人数】<br />
                        2人<br />
                    </div>
                    }
                />
                <Project
                    title="◯社内の管理ツール開発"
                    detail={<div style={cardStyle}>
                        期間：2022年5月 – 2022年5月<br />
                        <br />
                        【概要】<br />
                        営業やカスタマーサポート等、別部署の業務を円滑に行うための顧客情報やサイトを管理するツールの開発<br />
                        <br /><br />
                        【ポイント】<br />
                        短期間で慣れないプログラミング言語を理解し、要望されていた様々な機能を実装したツールを作成<br />
                        また、実務での開発の経験を積むことができ、今後も開発の案件を経験できることとなった<br />
                        【人数】<br />
                        1人<br />
                    </div>
                    }
                />
                <Project
                    title="◯企業HPのサーバー構築"
                    detail={<div style={cardStyle}>
                        期間：2022年5月 – 2022年5月<br />
                        <br />
                        【概要】<br />
                        他社のホームページ制作。<br />
                        <br /><br />
                        【詳細】<br />
                        S3とCloudFrontを利用した静的Webサイトの構築<br />
                        LambdaとAPI Gateway､SESを利用して確認メールを送信するお問合せフォームの作成<br />
                        Lambdaの言語はNode.jsを使用し、構築にはServerless Frameworkを使用<br />
                        WorkMailにて企業のメールサーバーの構築<br />
                        <br /><br />
                        【ポイント】<br />
                        設計から構築まですべて任せてもらえたので、AWSでの幅広い知識を習得できた<br />
                        当初はAWSを使う予定ではなかったため、構築の初期費用やサーバーの運用費を大幅に削減できた<br />
                        【人数】<br />
                        2人<br />
                    </div>
                    }
                />
                <Project
                    title="◯太陽光発電の計測システムのオンプレミスでの運用・保守"
                    detail={<div style={cardStyle}>
                        期間：2022年5月 – 2022年5月<br />
                        <br />
                        【概要】<br />
                        社内の主要サービスの運用・保守。円滑に運用していくためにデータの移行や、インシデントの対応等<br />
                        AWS移行後も一部オンプレミスでの運用<br />
                        <br /><br />
                        【ポイント】<br />
                        クラウドだけでなく、オンプレミスでのサーバーの運用保守の経験ができた<br />
                        【人数】<br />
                        3人<br />
                    </div>
                    }
                />
            </div>
        </div>
    )
}

export default History