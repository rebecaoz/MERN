// server/index.js
const express = require("express");

const port = 8000;

const app = express();


// req es la abreviatura para request
// res es la abreviatura para response
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});



const User= require("../src/fakeUser.js");
var user = new User();

app.get("/api/users/new", (req, res) => {
  res.json({ user });
});

const Empresa= require("../src/fakeEmpresa.js");
var empresa = new Empresa();

app.get("/api/companies/new", (req, res) => {
  res.json({ empresa });
});

app.get("/api/user/company", (req, res) => {
  res.json({ usuario:user,empresa:empresa });
});


// esto tiene que estar debajo de los otros bloques de código
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});