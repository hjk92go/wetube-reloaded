import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

// /users + /URL 상태로 해줌
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);

//라우더 안에 다른 라우터를 사용해줄수 있음

export default userRouter;
