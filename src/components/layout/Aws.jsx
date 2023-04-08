import React from 'react'
import SkillIcon from '../common/SkillIcon';
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
import DevOpsGuru from '../../images/AWS/DevOpsGuru.png';
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
import TrustedAdvisor from '../../images/AWS/TrustedAdvisor.png';
import VPC from '../../images/AWS/VPC.png';
import WorkMail from '../../images/AWS/WorkMail.png';
import XRay from '../../images/AWS/X-Ray.png';

const Aws = () => {
    return (
        <div>
            <p>業務で扱ったことのある主なAWSサービスです。</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: "50px" }}>
                <SkillIcon imgSrc={VPC} text="VPC" aws={true} />
                <SkillIcon imgSrc={ELB} text="ELB" aws={true} />
                <SkillIcon imgSrc={Route53} text="Route53" aws={true} />
                <SkillIcon imgSrc={CloudFront} text="CloudFront" aws={true} />
                <SkillIcon imgSrc={DirectConnect} text={<>Direct<br />Connect</>} aws={true} />
                <SkillIcon imgSrc={EC2} text="EC2" aws={true} />
                <SkillIcon imgSrc={AutoScaling} text="AutoScaling" aws={true} />
                <SkillIcon imgSrc={Lambda} text="Lambda" aws={true} />
                <SkillIcon imgSrc={ECS} text="ECS" aws={true} />
                <SkillIcon imgSrc={Fargate} text="Fargate" aws={true} />
                <SkillIcon imgSrc={ECR} text="ECR" aws={true} />
                <SkillIcon imgSrc={ComputeOptimizer} text={<>Compute<br />Optimizer</>} aws={true} />
                <SkillIcon imgSrc={RDS} text="RDS" aws={true} />
                <SkillIcon imgSrc={DynamoDB} text="DynamoDB" aws={true} />
                <SkillIcon imgSrc={EBS} text="EBS" aws={true} />
                <SkillIcon imgSrc={S3} text="S3" aws={true} />
                <SkillIcon imgSrc={FSx} text="FSx" aws={true} />
                <SkillIcon imgSrc={Backup} text="Backup" aws={true} />
                <SkillIcon imgSrc={IAM} text="IAM" aws={true} />
                <SkillIcon imgSrc={ACM} text="ACM" aws={true} />
                <SkillIcon imgSrc={Cognito} text="Cognito" aws={true} />
                <SkillIcon imgSrc={SSO} text={<>IAM Identity<br />Center</>} aws={true} />
                <SkillIcon imgSrc={KMS} text="KMS" aws={true} />
                <SkillIcon imgSrc={SM} text={<>Secrets<br />Manager</>} aws={true} />
                <SkillIcon imgSrc={FM} text={<>Firewall<br />Manager</>} aws={true}/>
                <SkillIcon imgSrc={Inspector} text="Inspector" aws={true} />
                <SkillIcon imgSrc={DS} text={<>Directory<br />Service</>} aws={true} />
                <SkillIcon imgSrc={GuardDuty} text="GuardDuty" aws={true} />
                <SkillIcon imgSrc={SecurityHub} text="SecurityHub" aws={true} />
                <SkillIcon imgSrc={Shield} text="Shield" aws={true} />
                <SkillIcon imgSrc={CloudTrail} text="CloudTrail" aws={true} />
                <SkillIcon imgSrc={CloudWatch} text="CloudWatch" aws={true} />
                <SkillIcon imgSrc={Config} text="Config" aws={true} />
                <SkillIcon imgSrc={CFn} text="CFn" aws={true} />
                <SkillIcon imgSrc={TrustedAdvisor} text={<>Trusted<br />Advisor</>} aws={true} />
                <SkillIcon imgSrc={SSM} text={<>Systems<br />Manager</>} aws={true} />
                <SkillIcon imgSrc={SNS} text="SNS" aws={true} />
                <SkillIcon imgSrc={EventBridge} text="EventBridge" aws={true} />
                <SkillIcon imgSrc={APIGateway} text="APIGateway" aws={true} />
                <SkillIcon imgSrc={Cloud9} text="Cloud9" aws={true} />
                <SkillIcon imgSrc={CodeBuild} text="CodeBuild" aws={true} />
                <SkillIcon imgSrc={CodeCommit} text="CodeCommit" aws={true} />
                <SkillIcon imgSrc={CodeDeploy} text="CodeDeploy" aws={true} />
                <SkillIcon imgSrc={CodePipeline} text="CodePipeline" aws={true} />
                <SkillIcon imgSrc={XRay} text="X-Ray" aws={true} />
                <SkillIcon imgSrc={Athena} text="Athena" aws={true} />
                <SkillIcon imgSrc={Glue} text="Glue" aws={true} />
                <SkillIcon imgSrc={OpenSearch} text="OpenSearch" aws={true} />
                <SkillIcon imgSrc={DataFirehose} text={<>Kinesis<br />DataFirehose</>} aws={true} />
                <SkillIcon imgSrc={Amplify} text="Amplify" aws={true} />
                <SkillIcon imgSrc={WorkMail} text="WorkMail" aws={true} />
                <SkillIcon imgSrc={DevOpsGuru} text="DevOpsGuru" aws={true} />
                <SkillIcon imgSrc="" text="" />
                <SkillIcon imgSrc="" text="" />
            </div>
        </div>
    )
}

export default Aws