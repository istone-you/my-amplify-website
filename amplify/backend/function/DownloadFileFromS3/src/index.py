import boto3
import base64
import os

s3 = boto3.client('s3')

def handler(event, context):
    bucket = os.environ['bucket']
    key = os.environ['key']

    try:
        response = s3.get_object(Bucket=bucket, Key=key)
        file = base64.b64encode(response['Body'].read())
        return { 'file': file.decode('utf-8') }
    except Exception as e:
        print(e)
        raise e
