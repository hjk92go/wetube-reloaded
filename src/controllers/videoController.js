//global router
export const trending = (req, res) => res.render("home"); //res.render("view name") => 이렇게 하면 home.pug가 랜더링 된다.

export const search = (req, res) => res.send("search");

//video router
export const see = (req, res) => {
  console.log(req.params);
  res.render("watch");
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.render("edit");
};
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};
