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
// "현재 작업 디렉토리 + views폴더" 가 되어야 에러 X (디폴트값)

// #5.2 Partials
// 위의 에러를 고치는 방법은 디폴트 값을 바꿔주는것이다.
// 해결 방법_1) views폴더를 src밖으로 꺼내기(비추)
// 해결 방법_2) 디폴트값 수정 - app.set("views", process.cwd()+"/src/views")

// pug 중복되는 부분 => views폴더 안에 partials 폴더를 만들어서 footer.pug
// 를 만들어서 include 해주면 중복으로 쓸 필요가 없어짐
// include 마저 중복으로 쓰기 싫다면, => 5.3에서

// pug의 장점
// 1) html를 깔끔하게 작성하도록 해줌
// 2) 우리의 html에 js를 포함시킬 수 있다.(사용할 수 있음)
// 3) 반복하지 않아도 한파일로 모든 템플릿 이용 가능

/**
 * 헤더에서 Express를 없애는 방법:
 * app.disable('x-powered-by');
 *
 */
