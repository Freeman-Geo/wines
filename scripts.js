
let mysql = require("mysql");

let conexion = mysql.createConnection({
host: "localhost",
database: "tienda_de_autos",
user: "Geo",
password: "Alfabeto@5"
})

conexion.connect(function(err){
if(err){
throw err;
}else{
console.log("La conexión ha sido exitosa")
}
})