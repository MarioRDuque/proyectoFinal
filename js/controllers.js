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
    $scope.searchFilter = function (driver) {
      var re = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

    libroService.listar().then(function (response) {
      console.log(response)
    });

    libroService.getDrivers().success(function (response) {
      //Digging into the response to get the relevant data
      $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  })