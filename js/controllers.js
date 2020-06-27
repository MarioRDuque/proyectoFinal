angular.module('LibroApp.controllers', []).

  /* Drivers controller */
  controller('libroController', function ($scope, libroService) {

    $scope.accion = "Listar";
    $scope.libros = [];
    $scope.libro = {};
    $scope.cargando = false;
    $scope.color = "alert-warning";
    $scope.mensaje = "";

    $scope.eliminarMensaje = function () {
      setTimeout(() => { $scope.mensaje = "" }, 1000);
    }

    $scope.listar = function () {
      $scope.cargando = true;
      libroService.listar().then(function (response) {
        if (response && response.extraInfo) {
          $scope.libros = response.extraInfo;
          $scope.mensaje = response.operacionMensaje;
          $scope.color = "alert-success";
        } else {
          $scope.mensaje = (response && response.operacionMensaje) || "Error desconocido.";
        }
        $scope.cargando = false;
        $scope.eliminarMensaje();
      }).catch(function (err) {
        $scope.cargando = false;
        $scope.mensaje = err && err.message;
        $scope.eliminarMensaje();
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

    $scope.guardar = function (formulario) {
      if ($scope.validarCampos()) {
        if (!formulario.$valid) {
          $scope.mensaje = "Existen errores en el formulario";
          $scope.eliminarMensaje();
        } else {
          $scope.cargando = true;
          libroService.guardar($scope.libro).then(function (response) {
            if (response && response.extraInfo) {
              $scope.accion = 'Listar';
              $scope.mensaje = response.operacionMensaje;
              $scope.libros.push(response.extraInfo);
            } else {
              $scope.mensaje = (response && response.operacionMensaje) || "Error desconocido.";
            }
            $scope.cargando = false;
            $scope.eliminarMensaje();
          }).catch(function (err) {
            $scope.cargando = false;
            $scope.mensaje = err && err.message;
            $scope.eliminarMensaje();
          });
        }
      }
    }

    $scope.validarCampos = function () {
      if ($scope.libro.nombre && $scope.libro.nombre.length > 50) {
        $scope.mensaje = "El nombre del libro debe tener menos de 50 caracteres.";
        $scope.eliminarMensaje();
        return false;
      }
      if ($scope.libro.nombre && $scope.libro.abreviatura.length > 10) {
        $scope.mensaje = "El nombre del libro debe tener menos de 10 caracteres.";
        $scope.eliminarMensaje();
        return false;
      }
      if (!['BUENO', 'MALO', 'REGULAR'].includes($scope.libro.estado)) {
        $scope.mensaje = "El valor ingresado no corresponde al combo.";
        $scope.eliminarMensaje();
        return false;
      }
      return true;
    }

    $scope.guardarEdicion = function (formulario) {
      if (!formulario.$valid) {
        $scope.mensaje = "Existen errores en el formulario";
        $scope.eliminarMensaje();
      } else {
        $scope.cargando = true;
        libroService.editar($scope.libro).then(function (response) {
          if (response && response.extraInfo) {
            $scope.accion = 'Listar';
            $scope.mensaje = response.operacionMensaje;
            var index = $scope.libros.findIndex(item => item.id = $scope.libro.id);
            if (index) {
              $scope.libros[index] = response.extraInfo;
            }
          } else {
            $scope.mensaje = (response && response.operacionMensaje) || "Error desconocido.";
          }
          $scope.cargando = false;
          $scope.eliminarMensaje();
        }).catch(function (err) {
          $scope.cargando = false;
          $scope.mensaje = err && err.message;
          $scope.eliminarMensaje();
        });
      }
    }

    $scope.confirmarEliminacion = function () {
      $scope.cargando = true;
      libroService.eliminar($scope.libro.id).then(function (response) {
        if (response && response.extraInfo) {
          $scope.accion = 'Listar';
          $scope.mensaje = response.operacionMensaje;
          let element = document.getElementById("cerrar");
          element ? element.click() : null;
          var index = $scope.libros.findIndex(item => item.id = $scope.libro.id);
          if (index) {
            $scope.libros.splice(index, 1);
          }
        } else {
          $scope.mensaje = (response && response.operacionMensaje) || "Error desconocido.";
        }
        $scope.cargando = false;
        $scope.eliminarMensaje();
      }).catch(function (err) {
        $scope.cargando = false;
        $scope.mensaje = err && err.message;
        $scope.eliminarMensaje();
      });
    }

    $scope.cancelar = function () {
      $scope.accion = 'Listar';
    }

  })