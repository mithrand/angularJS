var myApp = angular.module('myApp',[]);

myApp.controller('AlumnosController', ['$scope', function($scope){
	
	$scope.alumnos=[
		{id:1,nombre:"Pepito Perez",curso:"1º ESO",telefono:666666666},
		{id:2,nombre:"Juan Lopez",curso:"1º ESO",telefono:777777777},
		{id:3,nombre:"Francisco guitierrez",curso:"3 º ESO",telefono:888888888},
		{id:4,nombre:"Luis Suarez",curso:"4º ESO",telefono:999999999},
		{id:5,nombre:"Jose Monje",curso:"5º ESO",telefono:111111111}
	];

	$scope.formVisivility = false; //Por defecto es formulario está oculto
	                          

	/**
	 * Añade un nuevoAlumno a la lista de alumnos
	 * @return none
	 */
	$scope.save=function(){

		var nuevoAlumno = {
			nombre:$scope.nuevoAlumno.nombre,
			curso:$scope.nuevoAlumno.curso,
			telefono:$scope.nuevoAlumno.telefono,
			id:new Date().getTime()
		};

		$scope.alumnos.push(nuevoAlumno);
		$scope.hideForm();
	};

	/**
	 * Elimina el alumno con idAlumno de los alumnos
	 * @param  {id del aumno a eliminar}
	 */
	$scope.remove=function(idAlumno){
		var newAlumnos = $scope.alumnos.filter(function(alumno){
			return alumno.id!=idAlumno;}
			);
		$scope.alumnos = newAlumnos;
	};


	/**
	 * Muestra el formulario
 	 */
	$scope.showForm = function(){
		$scope.formVisivility = true;
	};

	/**
	 * Oculta el formulario de entrada
	 */
	$scope.hideForm = function(){
		$scope.formVisivility = false;
	};
	
}
]);