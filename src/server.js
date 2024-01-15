import express from "express";
const PORT = 4000;

const app = express();

/**
 *
 * 3.9 Controllers Recap
 * 모든 controller에는 req,res가 있다
 * req,res는 express에서 제공
 *
 * express api 보면 많은 method가 존재
 *
 * but 지금은 send와 end에 집중
 *
 *  end는 연결을 종료시킨다(아무응답안하고) res.end() 주면 끝
 * (return res.end()와 같음)
 *
 * send는(응답하고 종료시킴)
 *
 * 서버는 request 를 받으면 반드시 response 를 해주어야 한다.
 * 브라우저 무한 로딩 되기 때문이다.
 *
 * controller자리에는 반드시 함수가 들어가야한다
 * 화살표 함수는 리턴값을 포함시킴
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
