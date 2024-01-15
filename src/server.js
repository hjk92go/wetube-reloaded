import express from "express";
const PORT = 4000;

const app = express();

/**
 *  3.4 Recap
 * request는 응답이 필수 => 응답x => 브라우저는 하염없이 기다림
 *
 * status code로 응답하거나,,, html로 하거나.. end하거나 꼭 응답이 필요함
 */

//html도 보낼수잇고
const handleListeningHome = (req, res) => {
  return res.send("<h1>I still love you 😭</h1>");
};

//json도보낼수잇음(react.js나 api만드는중이라면 유용)
const handleLogin = (req, res) => {
  return res.send({ message: "Login Here👍" });
};

app.get("/", handleListeningHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} ✈️✈️`);
};

app.listen(PORT, handleListening);
