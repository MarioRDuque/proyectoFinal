angular.module('LibroApp.controllers', []).

  /* Drivers controller */
  controller('libroController', function ($scope, libroService) {

    $scope.accion = "Listar";
    $scope.libros = [];
    $scope.libro = {};
    $scope.cargando = false;

    $scope.listar = function () {
      $scope.cargando = true;
      libroService.listar().then(function (response) {
        $scope.cargando = false;
        $scope.libros = response.extraInfo;
      });
    }

    $scope.listar();

    $scope.nuevo = function () {
      $scope.libro = {};
      $scope.accion = 'Nuevo';
    }

    $scope.editar = function (seleccionado) {
      $scope.accion = 'Editar';
      $scope.libro = seleccionado;
    }

    $scope.eliminar = function (seleccionado) {
      $scope.libro = seleccionado;
    }

    $scope.guardar = function () {
      $scope.cargando = true;
      libroService.guardar($scope.libro).then(function (response) {
        $scope.accion = 'Listar';
        $scope.listar();
      });
    }

    $scope.guardarEdicion = function () {
      $scope.cargando = true;
      libroService.editar($scope.libro).then(function (response) {
        $scope.accion = 'Listar';
        $scope.listar();
      });
    }

    $scope.confirmarEliminacion = function () {
      $scope.cargando = true;
      libroService.eliminar($scope.libro).then(function (response) {
        $scope.accion = 'Listar';
        let element = document.getElementById("cerrar");
        element ? element.click() : null;
        $scope.listar();
      });
    }

    $scope.cancelar = function () {
      $scope.accion = 'Listar';
    }

  })