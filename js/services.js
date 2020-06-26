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

    return libroServicio;
  });