angular.module('LibroApp.services', [])
  .factory('libroService', function ($http) {

    var libroServicio = {};

    libroServicio.getDrivers = function () {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    libroServicio.getDriverDetails = function (id) {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/drivers/' + id + '/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    libroServicio.getDriverRaces = function (id) {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/drivers/' + id + '/results.json?callback=JSON_CALLBACK'
      });
    }

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