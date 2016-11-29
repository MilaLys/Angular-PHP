'use strict';

angular

    .module ( 'layout.contacts' )

    .controller ( 'contactsController', function ( $scope, $log, Restangular, fromRoot, $http ) {
        $scope.user = {
            username: '',
            password: ''
        };
        /*
         Function to submit the form after all validation has occurred
         */
        $scope.submitForm = function () {
            /* var users = Restangular.all( '/signin.php' );

             users
             //.customPOST ( {username: $scope.user.username, password: $scope.user.password} )
             .post ($scope.user )
             .then ( function ( response ) {
             if ( response == 'OK' ) {
             console.log( 'You sign in successfully.' );

             $scope.user = {};
             }
             }, function ( response ) {
             if ( response != 'OK' ) {
             console.log( 'The following error has appeared: \n' + response );
             }
             console.log( 'The following error has appeared: \n' + response );
             } );

             // check to make sure the form is completely valid
             if ( $scope.userForm.$valid ) {
             console.log( 'The form is completed correctly.' )
             }*/
            $http ( {
                url: 'http://api.dev.uitutorial.com/signin.php',
                method: "POST",
                data: JSON.stringify ( $scope.user )
            } ).then ( function ( response ) {
                if ( response == 'OK' ) {
                    console.log ( 'You sign in successfully.' );

                    $scope.user = {};
                }
            }, function ( response ) {
                if ( response != 'OK' ) {
                    console.log ( 'The following error has appeared: \n' + response );
                }
                console.log ( 'The following error has appeared: \n' + response );
            } );
        };
    } );