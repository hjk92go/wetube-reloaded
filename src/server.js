import express from "express";

//이름은 원하는 이름으로 임포트 해와도 됨
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

/**
 * 4.0 What are Routers?
 * 라우터는 컨트롤러와 URL관리를 쉽게해줌 -> mini application이라고 생각하면 편함
 *
 * - 프로젝트에 있어서 가장 먼저 생각해야 하는것
 * 1. 데이터 -> 어떤 종류의 데이터를 이용할 것인가
 *  => wetube에서는 크게 2가지의 데이터가 있음 1) 비디오 2) 유저
 *  이것들은 프로젝트의 도메인임 이것들을 URL차원에서 생각하면
 *  URL을 디자인해야한다
 *
 *
 * / -> home
 * /join -> Join
 * /login -> Login
 * /search -> Search
 *
 *
 * /users/edit -  -> Edit user
 * /users/delete - user -> Delete user
 *
 *
 * /videos/watch  -> Watch Video
 * /videos/edit  -> Edit Video
 * /videos/delete -> Delete Video
 * /videos/comments -> Comment on a video
 * /videos/comments/delete -> Delete A Comment of a Video
 *
 * 라우터는 우리가 작업중인 주제를 기반으로 URL을 그룹화 해줌
 *
 *
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
