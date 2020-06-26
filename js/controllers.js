angular.module('LibroApp.controllers', []).

  /* Drivers controller */
  controller('libroController', function ($scope, libroService) {
    $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.libros = [
      { nombre: "AngularJS", abreviatura: "AngularJS", autor: "Equipos Google" },
      { nombre: "Algoritmos", abreviatura: "ALG", autor: "Receta" },
      { nombre: "Gestor de Ventas", abreviatura: "GV", autor: "Manuel Manrique" },
      { nombre: "Gestión de Redes", abreviatura: "GR", autor: "Ignacio Chavez" }
    ];

    libroService.listar().then(function (response) {
      console.log(response)
      $scope.libros =response.extraInfo;
    });
  })