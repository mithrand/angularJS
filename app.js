//Cargamos express
var express = require("express");
var __path ="D:\\webs\\AngularJS\\";

// ejecuctamos express y creamos una aplicacion
var app = express();
app.use('/controllers',express.static(__path+'controllers'));
app.use('/css',express.static(__path+'css'));
app.get("/", index);
app.get("/alumnos",alumnos);


function index(request,response)
{
	response.sendFile(__path+"index.html");
}

function alumnos(request,response)
{
	response.sendFile(__path+"alumnos.html");
}

app.listen(80);