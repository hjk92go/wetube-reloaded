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
 * 4.5 Architecture Recap
 * export & import
 * 뭔갈 임포트 전엔 반드시 export해줘야함

 * export default면 하나만 내보낼수 있지만
 * 디폴트로 익스포트할땐 내가 원하는이름으로 지정할수 잇지만
 * export const를 하면, 지정된 원래 이름을 그대로 써야한다.
 *
 */
