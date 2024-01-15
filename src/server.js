import express from "express";
const PORT = 4000;

const app = express();

/**
 *
 * 3.8 Servers Recap
 *
 * 서버란?
 *  - 항상 켜져있고 인터넷에 연결 돼 있으면서 req를 listening 하고 있는 컴퓨터
 *  - req는 우리가 서버에게 요청하는 것들
 *
 * 컴퓨터에는 많은 포트들이 있고 서버는 전부 listening 할수는 없다
 * 포트는 창문을 여는거라고 생각할 것 / PORT = 4000는 백엔드의 관습
 *
 * 브라우저는 서버에게 페이지를 request( 요청)하고 서버는 그에 대해 response(응답)한다.
 * 만약 브라우저의 요청에 대해 서버가 return을 통해 응답하지 않으면 무한 로딩상태가 됨
 *
 * 브라우저는 서버에게 페이지를 request하는것
 * 서버가 이 request를 받아들이고, 브라우저에게 response를 준다
 *
 */

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); //어떤 method가 어느 url로 향하는지 알수있게됨
  next();
};

const handleHome = (req, res) => {
  return res.send("i love middleware");
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    res.send("<h1>NOT ALLOWED</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleProtected = (req, res) => {
  return res.send("WELECOME TO THE PRIVATE LOUNGE.");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);

const handleLogin = (req, res) => {
  return res.send({ message: "Login Here👍" });
};

app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);
