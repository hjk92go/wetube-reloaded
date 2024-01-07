/**
 *
 *
 *
 * 바벨을 require하지않고
 * package.json에 babel로 컴파일하는 scripts를
 * 만들예정
 * => npm install @babel/node 설치
 *
 *  "scripts": {
 *  "dev": "babel-node index.js" }로 수정
 *
 * 위와같이 변경하면 babel도 같이 적용되서 실행된다
 *
 * babel을 설치했기때문에  2번뿐만 아니라 1번처럼 사용가능
 *
 *
 */

import express from "express"; //1
//const express = require("express"); //2

console.log("good");

/**
 * nodemon 은 파일이 수정되는걸 감시해주는 패키지
 * npm i nodemon --save-dev 설치
 *
 * package.json에서 script를 아래와 같이 수정해준다
 * "dev": "nodemon --exec babel-node index.js"
 *
 * 그러면 파일 수정할때마다 nodemon이 알아서 재시작 된다
 */
