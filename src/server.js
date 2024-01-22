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
 * 4.3 Exports
 * 라우터(함수를 사용하는)와 컨트롤러(함수)를 함께 쓰지 않는것이 좋다
 * 데이터(함수)가 길어 질수 있으니 구분해서 써주는게 좋음 => controller 폴더를 따로 만들어 준다.
 */
