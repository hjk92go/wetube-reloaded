import express from "express";
const PORT = 4000;

const app = express();

/**
 * 3.5 Middlewares(part_1)
 * middleware는 중간에 있는 sw  => middleware은 req와 res사이에 있다(브라우저가 req한다음 내가 응답하기전에 미들웨어가잇음)
 * 모든 middleware은 handler이고, 모든 handler는 middleware이다.
 *
 * 앞으로 handler => controller라는 말을 쓸 예정
 * 원래 controller에는 두개의 argument말고도 하나가 더 있다 => next
 * next argument는 다음 함수를 호출해준다.
 *
 */

const gossipMiddleware = (req, res, next) => {
  console.log(`SOMEONE IS GOING TO : ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("i love middleware");
};

/**
 * 아래의 함수(app.get("/", gossipMiddleware, handleHome); 실행되는 순서
 * 브라우저는 홈페이지를 get하려 할 거고,
 * express가 gossipMiddleware를 호출, gossipMiddleware은 콘솔을 실행하고나서 next함수를 호출할것
 * express next()를 보고, 다음 함수인 handleHome을 호출한다.
 *
 * 무엇이든 middleware가 될수있다.
 * 하지만, handleHome은 middleware가 아니라 finalware
 * 따라서 handleHome함수에는 next함수가 필요없음 브라우저에 res를 줘서 종료시키기 떄문
 *
 * 만약에 아래와 같이 gossipMiddleware함수를 가정 한다면 next()는 호출되지 않는다 => 그러면 next()를 호출하지 않았기때문에
 * handleHome함수도 실행되지 않는다.
 * const gossipMiddleware = (req, res, next) => {
 * console.log("I'm in the middleware");
 * return res.send("lalall")
 * next();
 * };
 *
 * 정리하자면, 어떤 함수든 middleware가 될수 있고
 * 어떤함수든 next()함수를 호출한다면 이 함수는 middleware라는걸 의미한다
 *
 */

app.get("/", gossipMiddleware, handleHome);

const handleLogin = (req, res) => {
  return res.send({ message: "Login Here👍" });
};

app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);
