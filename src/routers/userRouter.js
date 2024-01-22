import express from "express";
import { edit, remove } from "../controllers/userController";

const userRouter = express.Router();

// /users + /URL 상태로 해줌
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

//라우더 안에 다른 라우터를 사용해줄수 있음

export default userRouter;
