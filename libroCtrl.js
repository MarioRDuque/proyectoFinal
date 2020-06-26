function libroController($scope){
    $scope.libros=[
            {nombre:"AngularJS", abreviatura: "AngularJS", autor:"Equipos Google"},
            {nombre:"Algoritmos", abreviatura: "ALG", autor:"Receta"},
            {nombre:"Gestor de Ventas", abreviatura: "GV", autor:"Manuel Manrique"},
            {nombre:"Gestión de Redes", abreviatura: "GR", autor:"Ignacio Chavez"}
            ];
    }
//CONECTANDO A LA BD
/*
    (function () {
        'use strict';
        angular.module('app.controllers')
            .controller('libroCtrl', ['$scope', '$mdDialog', 'mantenimientoService', 'utilService',
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
    
                    $scope.seleccionarAlmacen = function (almacen) {
                        showLoader(true);
                        mantenimientoService.obtener("almacen", almacen.id)
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
    
                    $scope.guardar = function () {
                        $scope.datos.guardar();
                    }
    
                    $scope.respuestaFormulario = function (data) {
                        if (data.estado == "exito") {
                            $scope.reload.start();
                            $scope.cancelar();
                        }
                        utilService.alert(data.mensaje);
                    };
    
                    $scope.mensajesDesdeFormulario = function (mensaje) {
                        utilService.alert(mensaje);
                    }
    
                    $scope.modificar = function () {
                        $scope.datos.cambiarControles(true);
                        modificar($scope.buttons);
                    }
    
                    $scope.eliminar = function () {
                        var id = $scope.datos.obtenerDatos().id;
                        $mdDialog.show(utilService.confirm("¿Está seguro de eliminar el almacén?")).then(function () {
                            showLoader(true);
                            mantenimientoService.borrar("almacen", id)
                                .then(function (data) {
                                    showLoader(false);
                                    if (data.estado === "exito") {
                                        utilService.alert(data.mensaje);
                                        $scope.reload.start();
                                        $scope.cancelar();
                                    }
    
                                    if (data.estado === "error") {
                                        utilService.alert(data.mensaje);
                                    }
                                })
                                .catch(function (err) {
                                    showLoader(false);
                                    utilService.alert("Error al conectarse con el servidor");
                                });
                        });
                    }
    
                    $scope.events = {
                        resultSearch: function (data) {
                            if(!esNullOUndefined(data) && !esArrayVacio(data.registros)){
                                $scope.seleccionarAlmacen(data.registros[0]);
                            }else{
                                $scope.cancelar();
                            }
                        }
                    };
    
                    var parametros = {
                        nombreReporte: 'almacen',
                        formatoExportacion: 'PDF'
                    }
                    var filtros = {};
                    function leerParametrosDeReporte() {
                        filtros = $scope.filtro.obtener();
                        parametros.nombre = filtros.nombre;
                        parametros.abreviatura = filtros.abreviatura;
                    }
    
                    $scope.visualizar = function () {
                        leerParametrosDeReporte();
                        $scope.mostrarModal.abrirModal(parametros);
                    }
    
                    $scope.imprimir = function () {
                        leerParametrosDeReporte();
                        $scope.imprimirOperaciones.imprimir(parametros);
                    }
    
                    $scope.cancelar();
    
                }
            ]);
    
    })();
  */  

