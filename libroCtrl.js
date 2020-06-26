/*var libroController = function ($timeout, $scope) {
    $scope.libros = [
        { nombre: "AngularJS", abreviatura: "AngularJS", autor: "Equipos Google" },
        { nombre: "Algoritmos", abreviatura: "ALG", autor: "Receta" },
        { nombre: "Gestor de Ventas", abreviatura: "GV", autor: "Manuel Manrique" },
        { nombre: "Gestión de Redes", abreviatura: "GR", autor: "Ignacio Chavez" }
    ];
}
*/
//var calculator = angular.module('calculator', []).
//    controller('libroController', libroController);
//CONECTANDO A LA BD

    (function () {
        'use strict';
        angular.module('calculator')
            .controller('libroController', ['$scope', '$mdDialog', 'mantenimientoService', 'utilService',
                function ($scope, $mdDialog, mantenimientoService, utilService) {

                    $scope.permisos = utilService.obtenerPermisos();
                    $scope.SHORTCUTS = utilService.obtenerShortCuts();
                    $scope.buttons = {};

                    $scope.nuevo = function () {
                        $scope.datos.limpiarFormulario();
                        $scope.datos.cambiarControles(true);
                        nuevo($scope.buttons);
                        focusFirstInputFormulario();
                    }

                    $scope.cancelar = function () {
                        if (typeof ($scope.datos) !== "undefined") {
                            $scope.datos.limpiarFormulario();
                            $scope.datos.cambiarControles(false);
                        }

                        cancelar($scope.buttons);
                    }

                    $scope.seleccionarLibro = function (libro) {
                        showLoader(true);
                        mantenimientoService.obtener("libro", libro.id)
                            .then(function (data) {
                                showLoader(false);
                                if (data) {
                                    data.abreviatura = data.abreviatura.trim();
                                    $scope.datos.meterDatos(data);
                                    $scope.datos.cambiarControles(false);
                                    seleccionar($scope.buttons);
                                } else {
                                    utilService.alert('El almacen seleccionado ya no se encuentra registrado.');
                                }
                            })
                            .catch(function (err) {
                                showLoader(false);
                                utilService.alert('Error al conectarse con el servidor.');
                            });
                    }
                }
            ]);

    })();


