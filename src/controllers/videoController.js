//global router
export const trending = (req, res) => res.send("Home Page Videos");
export const search = (req, res) => res.send("search");

//video router
export const see = (req, res) => {
  console.log(req.params);
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit");
};
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};

//export default는 한개만
//const앞 export를 붙여주면 한파일이 여러개를 익스포트 할수잇다
