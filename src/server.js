import express from "express";
const PORT = 4000;

const app = express();

/**
 *
 * 3.7 Setup Recap
 *
 * 1. package.json: node.js 관련 정보를 담는 방법으로 단순한 텍스트 형식.
 * - 해당 파일에 스크립트를 넣으면 npm이 어떤 행동을 할 수 있게 만들어줌.
 * Ex) Scripts를 생성하고 그 안에 입력하면 터미널에 스크립트_이름을 사용할 수 있음.
 *
 * 2. npm i
 * - npm이 버전 정보를 확인해서 정보 추가.
 * - 다운된 express는 node_module로 자동 폴더 생성.
 *   해당 폴더는 공유 작업시 git에 공유할 필요가 없음. 공유 작업자는 package.json만 전달 받고,
 *   "npm i" 하면 자동으로 node_module가 설치 되기 때문.)
 *
 * "dependencies"
 * 프로젝트가 작동하기 위해 필요한 것들
 *
 * "devDependencies"
 * 개발자가 개발할 때 필요한 것들(사람에게)
 * --save--dev 로 설치하면 package.json의 devDependencies에 표시된다
 *
 * babel: 최신 코드를 지원하지 않을 때 변환시키기 위해서 사용. (사용하기 위해선 babel.config.json 파일이 필요함. 해당 파일에 원하는 바벨 플러그인을 추가.)
 * 최신 자바스크립트를 사용하게 해주는 플러그인.
 *
 * "nodemon"
 * 파일을 지켜보다 변화가 생기면 재시작 해줌. (꼭 필요한 것은 아니지만, 개발할 때 편리하게 만들어줌.)
 *
 * 3. node_modules는 용량이 크기 때문에 git에 올리지 않음.
 * ".gitignore" 파일을 생성해서 안에 /node_modules 를 추가하여 업로드 제외 시킴.
 *
 */

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); //어떤 method가 어느 url로 향하는지 알수있게됨
  next();
};

const handleHome = (req, res) => {
  return res.send("i love middleware");
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    res.send("<h1>NOT ALLOWED</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleProtected = (req, res) => {
  return res.send("WELECOME TO THE PRIVATE LOUNGE.");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);

const handleLogin = (req, res) => {
  return res.send({ message: "Login Here👍" });
};

app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);
