import express from "express";
import { see, upload, deleteVideo, edit } from "../controllers/videoController";

const videoRouter = express.Router();
//1
videoRouter.get("/upload", upload);

//2_파라미터에 숫자만 들어갈수 있게 정규식 사용 => 이렇게 사용하면 1번의 upload는 어떤위치에 와도 상관없다
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

/**
 * 4.8 URL Parameters(part_2)
 *
 * id를 숫자만 인정하고 싶다 => 정규식 사용(공문참조)
 * 정규식은 모든 프로그래밍 언어에 존재
 *
 * Routing
 * https://expressjs.com/ko/guide/routing.html
 *
 * 정규표현식 테스트 사이트
 * https://www.regexpal.com
 *
 * \w+: 모든 문자, 숫자 선택
 * \d+: 모든 숫자 선택
 *
 * ex) /(nico\w+)/니꼬로 시작하는 모든 문자를 선택하세요
 * ex) /(\d+)/ 숫자로 시작하는 문자를 선택 => Js의 경우 //두개 써줘야함 (\\d+)
 *
 *
 */

export default videoRouter;
