import express from "express";

//이름은 원하는 이름으로 임포트 해와도 됨
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

/**
 *
 * 3.11 External Middlewares
 * morgan은 node.js용 request logger middleware이다
 * npm i morgan 설치
 *
 * morgan이랑 직접만든 미들웨어의 차이점?
 * morgan이 좀더 정교(GET, state code, 응답시간 제공.. => 옵션에 따라 제공되는 정보가 다름)
 * morgan도 next함수 존재함
 *
 * https://www.npmjs.com/package/morgan 확인가능
 *
 *
 */

const handleHome = (req, res) => {
  return res.send("i love middleware");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login Here👍" });
};

app.use(logger); //app.use(morgan("dev"))라고 사용해도 같음
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);
