import boto3

def Handler(event, context):
    ses = boto3.client('ses', region_name='ap-northeast-1')
    adminadress = 'istoneyou1205@gmail.com'

    email = {
        'Source': adminadress,
        'Destination': {
            'ToAddresses': [adminadress]
        },
        'Message': {
            'Subject': {'Data': 'フォームからのお問い合わせ'},
            'Body': {
                'Text': {
                    'Data': '\n'.join([
                        'お名前: ' + event['name'],
                        'メールアドレス: ' + event['email'],
                        'お問い合わせ内容: ' + event['message']
                    ])
                }
            }
        }
    }

    confirm_mail = {
        'Source': adminadress,
        'Destination': {
            'ToAddresses': [event['email']]
        },
        'Message': {
            'Subject': {'Data': 'お問い合わせありがとうございます'},
            'Body': {
                'Text': {
                    'Data': '\n'.join([
                        'このたびはお問い合わせを頂きまして',
                        '誠にありがとうございます。\n',
                        '下記内容にてお問い合わせを受け付けました。',
                        'お問い合わせの内容によっては、',
                        '返答にお時間をいただく場合がありますのでご了承ください。\n',
                        '[お問い合わせの内容] : ' + event['message'] + '\n\n\n',
                        '----------------------------------------------------',
                        '本メールは送信専用アドレスより送信しております。',
                        'ご返信いただくことはできませんので、ご了承ください。\n',
                        '----------------------------------------------------',
                    ])
                }
            }
        }
    }

    ses.send_email(**email)
    ses.send_email(**confirm_mail)
