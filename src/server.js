import express from "express";

//express app 생성
const app = express();
const PORT = 4000;

const handleListening = () => {
  console.log(`Server listening on port ✅http://localhost:${PORT} ✈️✈️`);
};

/**
 *
 * 3.1 서버가 request에 respond하는법
 *
 * 아무런 설정을 하지않은상태에서 서버만 열면
 * Cannot GET / 라고 출력되는데 여기서 '/'의 의미는 서버의 root, 혹은 첫번째페이지를 의미
 *
 * ex)google.com === google.com/
 *
 * GET은 HTTP method => 쉽게 페이지를 가져와! 라고 생각하면된다
 * http는 서버끼리 의사소통하는방법
 *
 */

app.listen(PORT, handleListening);
