angular.module('LibroApp.services', [])
  .factory('libroService', function ($http) {

    var libroServicio = {};

    libroServicio.listar = function () {
      return $http({
        method: 'GET',
        url: 'http://localhost:8091/libro/listar'
      })
        .then(function success(response) {
          return response.data;
        });
    }

    libroServicio.guardar = function (libro) {
      return $http({
        method: 'POST',
        url: 'http://localhost:8091/libro/crear',
        data: libro
      })
        .then(function success(response) {
          return response.data;
        });
    }

    libroServicio.editar = function (libro) {
      return $http({
        method: 'PUT',
        url: 'http://localhost:8091/libro/editar',
        data: libro
      })
        .then(function success(response) {
          return response.data;
        });
    }

    libroServicio.eliminar = function (libro) {
      return $http({
        method: 'DELETE',
        url: 'http://localhost:8091/libro/eliminar',
        data: libro
      })
        .then(function success(response) {
          return response.data;
        });
    }

    return libroServicio;
  });