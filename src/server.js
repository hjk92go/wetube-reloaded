import express from "express";
const PORT = 4000;

//express app 생성
const app = express();

/**
 *
 * 3.2 서버에게, get request에 어떻게 응답해야하는지
 * && http request가 어떻게 작동하는지
 *
 * express application가 만들어진 다음부터 코드를 작성해야한다
 * (위치는 express()아래 ~ listen 위쪽 / application을 설정한다음 외부개방한다고 생각)
 *
 * request = 유저가 뭔갈 요청하거나 보내거나 나에게 어떠한 행동을 하는것
 *
 */

//누군가가 home으로 get request를 보낸다면 반응하는 callback
//반드시 함수로 보내야한다
app.get("/", () => console.log("Somebody is trying to go home😒"));
/*
 * 아래와 같이 사용 가능
 * const handleListeningHome = () => {
 * console.log("Somebody is trying to go home😒");};
 * app.get("/", handleListeningHome)
 *
 */

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);
