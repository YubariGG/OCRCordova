/*global QUnit*/

sap.ui.define([
	"idom/ocr/controller/Escanear.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Escanear Controller");

	QUnit.test("I should test the Escanear controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});