//Cargamos express
var express = require("express");
var path =  require("path");

var basePath ="D:\\webs\\AngularJS";
var controllePath = path.join(basePath,'controllers');
var cssPath = path.join(basePath,'css');

// ejecuctamos express y creamos una aplicacion
var app = express();

// <- FOLDERS ->
app.use('/controllers',express.static(controllePath));
app.use('/css',express.static(cssPath));

//<- ROUTING ->
app.get("/", function (req,res){
	var myPath = path.join(basePath,"index.html");
	res.sendFile(myPath);
});

app.get("/alumnos",alumnos);
function alumnos(request,response)
{
	var myPath = path.join(basePath,"alumnos.html");
	response.sendFile(myPath);
}

app.listen(80);