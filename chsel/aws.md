API
메소드 및 리소스 생성

작업에서 API 배포로 간다



AWS 람다

함수 생성
이름 저장
코드 입력


다이나모 db

https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/http-api-dynamo-db.html

파티션 키 = Title과 같은 가장 맨위에 배치되는 값으로 여러개가 존재 가능
// 그러나 키는 하나만 존재 할 수 있기 때문에 각각 하나당 다른 값을 가진다.
파티션키로 한번 묶고 안의 값으로 정렬해준다

파티션 키는 수정 불가 -> 삭제하고 다시 생성하면 된다

파시션 키 id로 생성후  tilte 및 내용 입력

람다 함수로 와서 

```
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "todo_5701605";

export const handler = async (event) => {
  
  let result = await dynamo.send(
          new ScanCommand({ TableName: tableName })
        );
  //body = body.Items;
  
  const response = {
    statusCode: 200,
    //body: JSON.stringify(messages[n]),
    body: result
  };
  return response;
};
```

입력해준다

그러면 자신의 데이터베이스에 있는 값들이 출력된다


집에 가고 싶다........