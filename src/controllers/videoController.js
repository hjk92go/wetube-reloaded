//global router
export const trending = (req, res) => res.send("Home Page Videos");

//video router
export const watch = (req, res) => res.send("Watch");
export const edit = (req, res) => res.send("Edit");

//export default는 한개만
//const앞 export를 붙여주면 한파일이 여러개를 익스포트 할수잇다
