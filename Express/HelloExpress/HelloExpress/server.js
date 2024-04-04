const express = require("express");
const app = express();

// asegúrate de que las siguientes líneas se encuentren por encima de cualquier bloque de código app.get o app.post
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.post("/api/users", (req, res) => {
  // req.body contendrá los datos del formulario desde Postman o desde React
  console.log(req.body);
  // podemos hacer push en el array de usuarios por ahora...
  // más tarde esto se insertará en una base de datos
  users.push(req.body);
  // siempre tendremos que responder con algo
  res.json( { status: "ok" } );
});

app.put("/api/users/:id", (req, res) => {
  // podemos obtener la variable `id` de req.params
  const id = req.params.id;
  // asumiendo que este id es el índice del array de usuarios podemos reemplazar el usuario así
  users[id] = req.body;
  // siempre debemos responder con algo
  res.json( { status: "ok" } );
});




// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({message: "Hola "})
});
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/api/users", (req, res) => {
  res.json( users );
});

// si queremos obtener un usuario con un id específico, podemos hacer que el id sea parte de la url
// asegúrate de preceder la variable id con dos puntos `:`
app.get("/api/users/:id", (req, res) => {
  // podemos obtener esta variable `id` de req.params 
  console.log(req.params.id);
  // asumiendo que este id es el índice del array de usuarios podríamos devolver un usuario de esta manera
  res.json( users[req.params.id] );
});

app.delete("/api/users/:id", (req, res) => {
  // podemos obtener la variable `id` de req.params
  const id = req.params.id;
  //  asumiendo que este id es el índice del array de usuarios podemos eliminar el usuario así
  users.splice(id, 1);
  //  siempre debemos responder con algo
  res.json( { status: "ok" } );
});



const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
