sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("idom.ocr.controller.Escanear", {
		onInit: function () {

			var oData= {
				busyIndicatorVisible: false
			};

			var oModel = new JSONModel();
			oModel.setData(oData);

			sap.ui.getCore().setModel(oModel);
		},

		escanear: function (){

			navigator.camera.getPicture(onSuccess, onFail, { quality: 100, correctOrientation: true });

			var that = this;

			function onSuccess(imageData) {

				  sap.ui.getCore().getModel().setProperty("/busyIndicatorVisible", true);

			      textocr.recText(0, /*3,*/ imageData, onSuccess, onFail); // removed returnType (here 3) from version 2.0.0
			      // for sourceType Use 0,1,2,3 or 4
			      // for returnType Use 0,1,2 or 3 // 3 returns duplicates[see table]
			      function onSuccess(recognizedText) {
			            //var element = document.getElementById('pp');
			            //element.innerHTML=recognizedText;
			            //Use above two lines to show recognizedText in html
			            console.log(recognizedText);

			            that.getView().byId("TextAreaReasultado").setValue(recognizedText.lines.linetext[0]);
			            sap.ui.getCore().getModel().setProperty("/busyIndicatorVisible", false);
			            // alert(recognizedText);


			      }
			      function onFail(message) {
			            alert('Failed because: ' + message);
			            sap.ui.getCore().getModel().setProperty("/busyIndicatorVisible", false);
			      }
			}
			function onFail(message) {
			      alert('Failed because: ' + message);
			}



		}
	});
});