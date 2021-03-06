angular.module('LibroApp.services', [])
  .factory('libroService', function ($http) {

    var libroServicio = {};

    libroServicio.listar = function () {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/libro/listar'
      })
        .then(function success(response) {
          return response.data;
        }).catch(function (err) {
          return err;
        });
    }

    libroServicio.guardar = function (libro) {
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/libro/crear',
        data: libro
      })
        .then(function success(response) {
          return response.data;
        }).catch(function (err) {
          return err;
        });
    }

    libroServicio.editar = function (libro) {
      return $http({
        method: 'PUT',
        url: 'http://localhost:8080/libro/editar',
        data: libro
      })
        .then(function success(response) {
          return response.data;
        }).catch(function (err) {
          return err;
        });
    }

    libroServicio.eliminar = function (id) {
      return $http({
        method: 'DELETE',
        url: 'http://localhost:8080/libro/eliminar/' + id
      })
        .then(function success(response) {
          return response.data;
        }).catch(function (err) {
          return err;
        });
    }

    return libroServicio;
  });