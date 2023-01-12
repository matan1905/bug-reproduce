Steps to reproduce:
1. create a postgres database, change app.module to the credentials
2. run the npm start:dev to generate the entities
3. run the queries in tip.sql, user.sql, user_tip.sql
4. run the following curl to see a result from two users ()
```
curl --request GET \
  --url 'http://127.0.0.1:3000/user-tips?s=%7B%0A%09%09%0A%09%09%09%22tip.type%22%3A%20%7B%0A%09%09%09%09%22%24or%22%3A%20%5B%0A%09%09%09%09%09%22Connection%22%2C%0A%09%09%09%09%09%22Info%22%0A%09%09%09%09%5D%0A%09%09%09%7D%20%0A%09%0A%7D' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxNDQzNWQ3LWY2NTUtNDI3Ni1iYWEzLWM0Yzk2MjQwNTUzYyIsImlhdCI6MTY3MzIwOTA3NX0.OtJTEZ2a7oTZWfOs4fPlfLNyBq7605_MXvZCVtfkEsg'
```

5. (optional) uncomment line 48 in `user-tips.controller.ts` and run curl to see how it is expected to behave