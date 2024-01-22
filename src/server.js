import express from "express";

//이름은 원하는 이름으로 임포트 해와도 됨
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger); //app.use(morgan("dev"))라고 사용해도 같음

/**
 * 4.1 Making Our Routers
 *
 * ----- global router(홈에서 바로 갈 수 있는 페이지들) -----
 * / -> home
 * /join -> Join
 * /login -> Login
 * /search -> Search
 *
 *  라우터를 쓰는법
 * 1. 루트url을 먼저 가져온다(비디오 라우터의 루트url은 /videos)
 * 2. app.use("/videos", videoRouter); app.use써준다.
 * 3. 라우터들에 함수를 넣어주기 위해 함수작성
 * 4. router.get을 사용한다
 */

//라우터
const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);
