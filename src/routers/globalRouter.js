import express from "express";

/** export default가 아닌경우 아래와 같이 임포트
 * 디폴트로 익스포트할땐 내가 원하는이름으로 지정할수 잇지만
 * export const를 하면, 지정된 원래 이름을 그대로 써야한다.
 *
 */
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
