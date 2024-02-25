//global router
export const trending = (req, res) => res.render("home"); //res.render("view name") => 이렇게 하면 home.pug가 랜더링 된다.
export const search = (req, res) => res.send("search");

//video router
export const see = (req, res) => {
  console.log(req.params);
  res.send(`<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head>
<body><h1>Watch Video #${req.params.id}</h1></body></html><footer>&copy; 2021 Wetube- All rights reserved</footer>`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send(`<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head>
  <body><h1>Edit Video #${req.params.id}</h1></body></html><footer>&copy; 2021 Wetube- All rights reserved</footer>`);
};
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("delete");
};
