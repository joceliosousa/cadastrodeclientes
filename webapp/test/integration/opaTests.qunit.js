/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"meufiori/cadastrodeclientes/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});