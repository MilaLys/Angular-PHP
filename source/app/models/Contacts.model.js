
'use strict';

angular
	// as a deep for root module
	.module('authtutoapp')
	// Model injector name
	.factory('Contacts', function () {
		// privat methods of model
		function valid (  ) {

		}

		/**
		 * 
		 *
		 * @param: { Object } - inherit data
		 * @constructor
		 */
		function Contacts ( data ) {

			angular.extend(this, data);

		}

		Contacts.prototype = {
			constructor: Contacts,
			// publick methods of model


		};

		return Contacts;
	});