import express from "express";
const PORT = 4000;

const app = express();

/**
 * 브라우저가 req를 보내서 우리가 req를 받는다면,  res를 return 해줘야함
 * res.end하면 서버는 req를 종료 더이상 무한로딩X
 * res.end()는 req를 종료시키는 여러 방법중 하나
 * res.send()를 이용해도 req를 종료시킬수 잇음
 *
 * 정리하면
 * 우리는 브라우저가 보낸 request를 받고 ~~페이지를 가져달라는 request를 받으면
 * 우리는 응답해주는것이 브라우저와의 상호작용이다.
 *
 */

const handleListeningHome = (req, res) => {
  return res.send("I still love you 😭");
};
app.get("/", handleListeningHome);

/**
 * 서버는 request를 받고, listening하지만 응답은 안해준다.
 *
 * JS에서는 eventListener에는 handler가 있고, handler에는 event가 있음
 * Express에선, route handler에는 event는 없지만 object 두개가 잇음
 *
 * request(req)와 response(res) => 이름은 아무거나 상관없음.
 * 핵심은 첫번째 argument는 request object 이고, 두번째는 response object
 *
 * => 즉 home으로 get request가 오면, express는 handleHome에다가
 * handleHome({...},{...}) 뒤에서 일어남(req object를 제공한단말)
 *
 */

const handleLogin = (req, res) => {
  return res.send("Login Here👍");
};

app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};
app.listen(PORT, handleListening);
