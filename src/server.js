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

// #5.3 Extending Templates
// template inheritance => 베이스를 만들어주므로써 거기서 확장하여 더더욱 중복된 내용을 막을수 있음

// base.pug를 만들고 extends사용하는 예시진행
// extends 한다는 것은 베이스가 되는 파일을 가져다가 그대로 쓰는것을 의미

// 베이스를 가져다 쓰되, 해당되는 페이지의 내용으로 반영하려면 => 블록(block)이라는 개념에 대해 알아야한다.
// 블록은 템플릿의 창문같은 것.
// 블록을 만드는방법은 body 안에 block content을 만들어준다. => content를 위한 공간이 마련된것을 의미

// content block안에 어떤내용을 넣고싶다면, 해당 페이지.pug로 가서 block content를 해주고 내용을 입력해준다.
// 자세한건 doc참조
