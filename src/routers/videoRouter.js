import express from "express";
import { see, upload, deleteVideo, edit } from "../controllers/videoController";

const videoRouter = express.Router();
//1
videoRouter.get("/upload", upload);
//2
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

/**
 * 4.7 URL Parameters(part_1)
 *
 * " /:id "에서 :가 의미하는 것?
 * 반드시 :id 일 필요는 없다 :potato 등등 중요한건 ":"를 넣는것
 * id는 변수명일뿐
 * :id은 파라미터라고 불리는데 이걸로  URL안에 변수를 넣을수 있게 해준다.
 * 파라미터가 없다면 모든 영상마다 라우터를 새로 만들어야 했을것이다.
 *
 * 변수명은 어떠한것이 되어도 상관없지만 " : "" 은 꼭 잇어야한다.
 *
 * upload가 :id위로 쓴 이유 => (1,2번)순서를 바꾼다면 upload가 id자리에 있어서id 취급됨
 * 그래서 가장 위로 옮기면 upload 변수 취급X -> URL취급함
 *
 *
 */

export default videoRouter;
