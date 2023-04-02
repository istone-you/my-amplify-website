import React from 'react'
import ACM from '../../images/AWS/ACM.png';
import Amplify from '../../images/AWS/Amplify.png';
import APIGateway from '../../images/AWS/APIGateway.png';
import Athena from '../../images/AWS/Athena.png';
import AutoScaling from '../../images/AWS/AutoScaling.png';
import Backup from '../../images/AWS/Backup.png';
import CFn from '../../images/AWS/CFn.png';
import Cloud9 from '../../images/AWS/Cloud9.png';
import CloudFront from '../../images/AWS/CloudFront.png';
import CloudTrail from '../../images/AWS/CloudTrail.png';
import CloudWatch from '../../images/AWS/CloudWatch.png';
import CodeBuild from '../../images/AWS/CodeBuild.png';
import CodeCommit from '../../images/AWS/CodeCommit.png';
import CodeDeploy from '../../images/AWS/CodeDeploy.png';
import CodePipeline from '../../images/AWS/CodePipeline.png';
import ComputeOptimizer from '../../images/AWS/ComputeOptimizer.png';
import Cognito from '../../images/AWS/Cognito.png';
import Config from '../../images/AWS/Config.png';
import DataFirehose from '../../images/AWS/DataFirehose.png';
import DirectConnect from '../../images/AWS/DirectConnect.png';
import DS from '../../images/AWS/DS.png';
import DynamoDB from '../../images/AWS/DynamoDB.png';
import EBS from '../../images/AWS/EBS.png';
import EC2 from '../../images/AWS/EC2.png';
import ECR from '../../images/AWS/ECR.png';
import ECS from '../../images/AWS/ECS.png';
import ELB from '../../images/AWS/ELB.png';
import EventBridge from '../../images/AWS/EventBridge.png';
import Fargate from '../../images/AWS/Fargate.png';
import FM from '../../images/AWS/FM.png';
import FSx from '../../images/AWS/FSx.png';
import Glue from '../../images/AWS/Glue.png';
import GuardDuty from '../../images/AWS/GuardDuty.png';
import IAM from '../../images/AWS/IAM.png';
import Inspector from '../../images/AWS/Inspector.png';
import KMS from '../../images/AWS/KMS.png';
import Lambda from '../../images/AWS/Lambda.png';
import OpenSearch from '../../images/AWS/OpenSearch.png';
import RDS from '../../images/AWS/RDS.png';
import Route53 from '../../images/AWS/Route53.png';
import S3 from '../../images/AWS/S3.png';
import SecurityHub from '../../images/AWS/SecurityHub.png';
import Shield from '../../images/AWS/Shield.png';
import SM from '../../images/AWS/SM.png';
import SNS from '../../images/AWS/SNS.png';
import SSM from '../../images/AWS/SSM.png';
import SSO from '../../images/AWS/SSO.png';
import TransitGateway from '../../images/AWS/TransitGateway.png';
import TrustedAdvisor from '../../images/AWS/TrustedAdvisor.png';
import VPC from '../../images/AWS/VPC.png';
import WorkMail from '../../images/AWS/WorkMail.png';
import XRay from '../../images/AWS/X-Ray.png';


const SkillIcon = ({ imgSrc, alt, text, isStar }) => {
    const iconStyle = { flex: '1 0 25%', textAlign: 'center' }
    return (
        <div style={iconStyle}>
            <img src={imgSrc} height="100px" alt={text} />
            {isStar ? <p><b>{text}☆</b></p> : <p>{text}</p>}
        </div>
    )
}

const Aws = () => {
    return (
        <div>
            <p>業務で扱ったことのある主なAWSサービスです。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <SkillIcon imgSrc={VPC} text="VPC" />
                <SkillIcon imgSrc={ELB} text="ELB" />
                <SkillIcon imgSrc={Route53} text="Route53" />
                <SkillIcon imgSrc={CloudFront} text="CloudFront" />
                <SkillIcon imgSrc={DirectConnect} text="DirectConnect" />
                <SkillIcon imgSrc={TransitGateway} text="TransitGateway" />
                <SkillIcon imgSrc={EC2} text="EC2" />
                <SkillIcon imgSrc={AutoScaling} text="Auto Scaling" />
                <SkillIcon imgSrc={Lambda} text="Lambda" />
                <SkillIcon imgSrc={ECS} text="ECS" />
                <SkillIcon imgSrc={Fargate} text="Fargate" />
                <SkillIcon imgSrc={ECR} text="ECR" />
                <SkillIcon imgSrc={ComputeOptimizer} text="Compute Optimizer" />
                <SkillIcon imgSrc={RDS} text="RDS" />
                <SkillIcon imgSrc={DynamoDB} text="DynamoDB" />
                <SkillIcon imgSrc={EBS} text="EBS" />
                <SkillIcon imgSrc={S3} text="S3" />
                <SkillIcon imgSrc={FSx} text="FSx" />
                <SkillIcon imgSrc={Backup} text="Backup" />
                <SkillIcon imgSrc={IAM} text="IAM" />
                <SkillIcon imgSrc={ACM} text="ACM" />
                <SkillIcon imgSrc={Cognito} text="Cognito" />
                <SkillIcon imgSrc={SSO} text="IAM Identity Center" />
                <SkillIcon imgSrc={KMS} text="KMS" />
                <SkillIcon imgSrc={SM} text="Secrets Manager" />
                <SkillIcon imgSrc={FM} text="Firewall Manager" />
                <SkillIcon imgSrc={Inspector} text="Inspector" />
                <SkillIcon imgSrc={DS} text="Directory Service" />
                <SkillIcon imgSrc={GuardDuty} text="GuardDuty" />
                <SkillIcon imgSrc={SecurityHub} text="SecurityHub" />
                <SkillIcon imgSrc={Shield} text="Shield" />
                <SkillIcon imgSrc={CloudTrail} text="CloudTrail" />
                <SkillIcon imgSrc={CloudWatch} text="CloudWatch" />
                <SkillIcon imgSrc={Config} text="Config" />
                <SkillIcon imgSrc={CFn} text="CloudFormation" />
                <SkillIcon imgSrc={TrustedAdvisor} text="TrustedAdvisor" />
                <SkillIcon imgSrc={SSM} text="SSM" />
                <SkillIcon imgSrc={SNS} text="SNS" />
                <SkillIcon imgSrc={EventBridge} text="EventBridge" />
                <SkillIcon imgSrc={APIGateway} text="APIGateway" />
                <SkillIcon imgSrc={Cloud9} text="Cloud9" />
                <SkillIcon imgSrc={CodeBuild} text="CodeBuild" />
                <SkillIcon imgSrc={CodeCommit} text="CodeCommit" />
                <SkillIcon imgSrc={CodeDeploy} text="CodeDeploy" />
                <SkillIcon imgSrc={CodePipeline} text="CodePipeline" />
                <SkillIcon imgSrc={XRay} text="X-Ray" />
                <SkillIcon imgSrc={Athena} text="Athena" />
                <SkillIcon imgSrc={Glue} text="Glue" />
                <SkillIcon imgSrc={OpenSearch} text="OpenSearch" />
                <SkillIcon imgSrc={DataFirehose} text="DataFirehose" />
                <SkillIcon imgSrc={Amplify} text="Amplify" />
                <SkillIcon imgSrc={WorkMail} text="WorkMail" />
            </div>
        </div>
    )
}

export default Aws