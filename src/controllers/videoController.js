//global router
export const trending = (req, res) => res.send("Home Page Videos");
export const search = (req, res) => res.send("search");

//video router
export const see = (req, res) => res.send("Watch");
export const edit = (req, res) => res.send("Edit");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("delete");

//export default는 한개만
//const앞 export를 붙여주면 한파일이 여러개를 익스포트 할수잇다
