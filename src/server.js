/**
 * 서버란 항상 켜져있는 컴퓨터
 * 사람들의 요청을 기다리고 답해준다
 */

import express from "express";

const PORT = 4000;

//express app 생성
const app = express();

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT} ✈️✈️`);
};

//서버가 사람들이 뭔가를 요청할 때까지 기다리게 하기
//어떤포트를 기다리는지 포트를 쓰고, callback을 써준다
app.listen(PORT, handleListening);

/**
 * 아래와 같이 사용도 가능
 * app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT} ✈️✈️`));
 *
 */
