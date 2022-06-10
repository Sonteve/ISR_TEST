const express = require("express");
const morgan = require("morgan");

const PORT = 3030;
const origin = [
  {
    id: 1,
    title: `제목 : 1`,
    content: `컨텐츠 1입니다~`,
  },
  {
    id: 2,
    title: `제목 : 2`,
    content: `컨텐츠 2입니다~`,
  },
  {
    id: 3,
    title: `제목 : 3`,
    content: `컨텐츠 3입니다~`,
  },
  {
    id: 4,
    title: `제목 : 4`,
    content: `컨텐츠 4입니다~`,
  },
];

const app = express();
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("<h2>hello</h2>");
});

app.get("/product/:id", (req, res) => {
  const data = origin.find((e) => e.id == req.params.id);
  return res.json(data);
});

app.get("/products", (req, res) => {
  return res.json(origin ?? []);
});

app.get("/products_path", (req, res) => {
  const path_list = origin.map((e, i) => e.id);
  return res.json(path_list ?? []);
});

app.listen(PORT, () => {
  console.log(`server listening ${PORT} PORT`);
});
