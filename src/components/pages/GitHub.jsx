import React from 'react'
import Repository from '../common/Repository'

import Layout from '../layout.js';
import GatsbyImg from '../../images/React-Gatsby.jpg'
import MernImg from '../../images/MernStack.png'
import '../styles/fade.css'

const GitHub = () => {

  const ulStyle = {
    padding: 0,
    fontSize: '14px',
    lineHeight: 1.6,
    listStyle: 'none'
  };

  return (
    <Layout>
      <div style={{ textAlign: "center",  margin: "0 auto", overflowWrap: "normal" }}>
        <div style={{ fontSize: "50px", }} className="Icon"><b>GitHub</b></div>
        <div className="Comment" style={{ marginTop: "100px" }}>
          <h2>JavaScript</h2>
          <ul style={ulStyle}>
            <Repository
              title="my-amplify-website"
              description="React.jsをベースとした静的サイトジェネレーターであるGatsby.jsを使ったWebサイトです。"
              width={200}
              alt="React-Gatsby.jpg"
              src={GatsbyImg}
            >
            </Repository>
            <Repository
              title="memo-app-mern-stack"
              description="MERN(MongoDB, Express.js, React.js, Node.js)スタックを利用したメモアプリです。"
              width={300}
              alt="MernStack.png"
              src={MernImg}
            >
            </Repository>
          </ul>
          <ul style={ulStyle}>
            <h2>Python</h2>
            <Repository
              title="aws-cost-mail-serverless"
              description="利用料金をメールで通知するLambdaを作成する構成を構築するServerless Frameworkのファイルです。"
              width={500}
              alt="CostMail.drawio.png"
              src="https://raw.githubusercontent.com/istone-you/aws-cost-mail-serverless/main/CostMail.drawio.png"
            >
            </Repository>
          </ul>
          <ul style={ulStyle}>
            <h2>Terraform</h2>
            <Repository
              title="my-amplify-website-terraform"
              description={<>上記<a href='https://github.com/istone-you/my-amplify-website'>my-amplify-website</a>をAmplifyを使って構築するTerraformファイルです。</>}
              width={500}
              alt="terraform.jpg"
              src="https://raw.githubusercontent.com/istone-you/my-amplify-website-terraform/master/terraform.jpg"
            >
            </Repository>
            <Repository
              title="aws-terraform-cicd"
              description={<>上記<a href='https://github.com/istone-you/my-amplify-website-terraform'>my-amplify-website-terraform</a>のTerraformファイルをCodeBuildとCodePipelineを使って実行する構成を構築するTerraformファイルです。</>}
              width={600}
              alt="terraform-cicd.drawio.png"
              src="https://raw.githubusercontent.com/istone-you/aws-terraform-cicd/main/terraform-cicd.drawio.png"
            >
            </Repository>
            <Repository
              title="memo-app-ecs-terraform"
              description="利用料金をメールで通知するLambdaを作成する構成を構築するServerless Frameworkのファイルです。"
              width={600}
              alt="ECSApp.drawio.png"
              src="https://raw.githubusercontent.com/istone-you/memo-app-ecs-terraform/main/ECSApp.drawio.png"
            >
            </Repository>
            <Repository
              title="aws-security-terraform"
              description="AWSのアカウントのセキュリティサービスを設定するTerraformファイルです。"
              width={400}
              alt="セキュリティ.drawio.png"
              src="https://raw.githubusercontent.com/istone-you/aws-security-terraform/main/%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3.drawio.png"
            >
            </Repository>
            <Repository
              title="aws-cost-terraform"
              description="AWS Cost and Usage Reportの結果をAmazon S3に保存。そのデータをAWS GlueとAmazon Athenaを使ってクエリする構成を設定するTerraformファイルです。"
              width={600}
              alt="CUR.drawio.png"
              src="https://raw.githubusercontent.com/istone-you/aws-cost-terraform/main/CUR.drawio.png"
            >
            </Repository>
          </ul>
          <ul style={ulStyle}>
            <h2>Ansible</h2>
            <Repository
              title="observability-ansible"
              description="PrometheusのNode ExporterとOpenTelemetry、Fluent Bitをサーバーにインストールして、メトリクスとログをそれぞれPrometheusとLokiに送信する設定をするAnsibleのPlaybookです。"
              width={400}
              alt="ansible-observability.drawio.png"
              src="https://raw.githubusercontent.com/istone-you/observability-ansible/master/ansible-observability.drawio.png"
            >
            </Repository>
            <Repository
              title="convenient-ami-pakcer-ansible"
              description="PackerとAnsibleを使って、自分がよく使うツールが予め用意されたEC2のAMIを作成するファイルです。"
              width={500}
              alt="packer-ansible.drawio.png"
              src="https://raw.githubusercontent.com/istone-you/convenient-ami-pakcer-ansible/main/packer-ansible.drawio.png"
            >
            </Repository>
          </ul>
          <ul style={ulStyle}>
            <h2>Dockerfile</h2>
            <Repository
              title="observability-ecs"
              description="OpenTelemetryとFluent BitをECSで使用するためのDockerfileです。"
              width={400}
              alt="ecs-observability.drawio.png"
              src="https://raw.githubusercontent.com/istone-you/observability-ecs/master/ecs-observability.drawio.png"
            >
            </Repository>
          </ul>
          <ul style={ulStyle}>
            <h2>その他</h2>
            <Repository
              title="RecordApp"
              description="未経験時に初めて作成したRuby on Railsのアプリです。"
              width={400}
            >
            </Repository>
            <Repository
              title="HTML-Test"
              description="未経験時に初めて作成したHTMLのサイトです。"
              width={400}
            >
            </Repository>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default GitHub