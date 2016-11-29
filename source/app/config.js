
'use strict';

/*-------------------------------------------------
	Source of this template in root directory
	environment/config.template.js
	this is only example which you may define any structure
---------------------------------------------------*/
angular
	/**
	 * app configuration from enveronment
	 */
	.module('authtutoapp')

	.constant('config', {
		version: 24354,
		apiPath: 'http://api.dev.uirouter.com/', // data type String may wrapped on quotes
		some1: {"number":1,"array":[1,2,3]},
		some2: [{"some":true,"else":"false"},{"some":1,"else":"false"}],
		static: {any: true}
	});