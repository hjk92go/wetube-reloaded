//global router
export const trending = (req, res) => res.render("home", { pageTitle: "Home" }); //5.4 랜더는 2가지의 인수를 받는다. 1. view의 이름, 2. 템플릿에 보낼 변수

export const search = (req, res) => res.send("search");

//video router
export const see = (req, res) => {
  console.log(req.params);
  res.render("watch", { pageTitle: "Watch" });
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.render("edit", { pageTitle: "Edit" });
};
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};
