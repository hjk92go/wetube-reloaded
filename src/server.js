import express from "express";
import morgan from "morgan";

//해당 파일에 export default를 해준다음 main server.js 에 임포트 해준다
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

console.log("process.cwd : ", process.cwd()); //현재 작업디렉토리를 의미함

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); //pug를 뷰엔진이라고 설정
app.set("views", process.cwd() + "/src/views"); //디폴트값 수정

app.use(logger); //app.use(morgan("dev"))라고 사용해도 같음
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);

// #5.4 Variables to Templates
// 지정한 블록의 이름은 다른곳에서 블록을 사용할때 해당 네임을 사용해야한다.

// 템플릿으로 어떻게 변수를 보내는 방법(변수를 내보내주는 방법(pageTitle) js 사용)
// 템플릿을 렌더링 하고있는 컨드롤러에서 변수를 설정해준다

// 랜더는 2가지의 인수를 받는데, 1. view의 이름 2. 템플릿에 보낼 변수
// 컨트롤러에서 아래와 같이 변수 설정 해준다(해당컨트롤러에서 => videoController.js)
// export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
