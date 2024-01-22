import express from "express";
import morgan from "morgan";

//해당 파일에 export default를 해준다음 main server.js 에 임포트 해준다
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger); //app.use(morgan("dev"))라고 사용해도 같음

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);

/**
 * 4.4 Router Recap
 *
 * Router은 URL이 어떻게 시작하는지에 따라 나누는 방법이다
 * URL을 더 낫고 독립적인 방법으로 관리하기 위해 사용
 *
 *  */
