import express from "express";
const PORT = 4000;

const app = express();

/**
 *
 * 3.10 Middleware Recap
 *
 * # Middleware
 *  - 중간에 있는 sw
 * 미들웨어는 컨트롤러가 request 처리 작업을 완료하고 response 를 전달하기 전에
 * request 처리를 도와주는 콜백함수이다. req와 res사이에 존재함
 *
 * 미들웨어는 request 오브젝트와, response 오브젝트 말고도 next 파라미터를 갖는다.
 * next 파라미터는 다음으로 request 를 처리할 콜백함수를 담고있다.
 *
 * 관습적으로 마지막 controller에는 next를 안써준다(쓸필요가 없기 때문)
 *
 * 미들웨어 전체적으로 다 사용하기 위해 => app.use를 사용해주면 미들웨어 전체에 적용된다
 * 그대신 순서가 중요 순서는 미들웨어전에 써줘야함
 *
 *
 * <비유_식당>
 * request: 입장
 * middleware: 몇분이세요?
 * request: 아 일행 먼저 왔어요!
 * middleware: 저쪽 테이블 맞으세요? next();
 * home: 오 왔어?
 *
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
