'use strict';

angular
/**
 * root controller
 */
    .module ( 'authtutoapp.layout' )

    .controller ( 'layoutController', function ( $scope, toastr, user, $http ) {
        $http.defaults.useXDomain = true;
        var root = $scope.root = {
            sayNo: function ( state ) {
                toastr.error ( 'Sorry but this state not specified by scaffolding.', state );
            }
        };

    } );