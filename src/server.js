import express from "express";
const PORT = 4000;

const app = express();

/**
 * 3.6 Middlewares(part_2)
 * app.get() 말고 => app.use() 에 대해서
 *
 * app.use()는 global middleware를 만들수 있게 해준다
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

//finalware라서 next필요없음
const handleProtected = (req, res) => {
  return res.send("WELECOME TO THE PRIVATE LOUNGE.");
};

/**
 * app.use() 작성시 순서가 중요함
 * app.use하는게 먼저오고, 그다음에 url의 get이 와야한다.
 *
 * 모든 route에서 app.use함수를 사용한다.
 * app.get을 먼저쓰고 use를 쓰면 logger 작동X
 *
 * middleware위에다가 두면, 모든 route에 적용이 된다.
 *
 */

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
//app.get("/protected", handleProtected); //privateMiddleware함수로 차단당해서 실행X(next함수로 전달해주지 않았기때문)

const handleLogin = (req, res) => {
  return res.send({ message: "Login Here👍" });
};

app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);
