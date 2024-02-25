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
app.use(logger); //app.use(morgan("dev"))라고 사용해도 같음
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);

// #5.1 Configuring Pug
// Pug는 템플릿 엔진 => 템플릿을 이용해서 뷰를 만드는걸 돕는다

//pug 사용
//1. pug 설치(npm i pug)
//2. pug를 뷰엔진이라고 설정(app.set("view engine","pug"))
//3. 실제로 pug 파일을 생성한다.
//4. res.render("view name") => 이렇게 하면 home.pug가 랜더링 된다.
// 여기까지 했을때 에러발생원인을  console.log("process.cwd : ", process.cwd()); => 현재 작업 디렉토리 위치를 알려줌
// wetube안에 있는 package.json에서 node.js를 실행하고 있기 때문에(이곳이 현재 디렉토리란 의미)
// server.js가 있는 src폴더가 아니라 wetube파일이 현재 작업중인 파일 위치로 잡히게 된다.(즉, 현재작업디렉토리는 node.js를 실행하는 디렉토리다 node.js를 실행하는건 package.json이므로 package.json이 있는곳이 현재 디렉토리라는 의미)
//

//
