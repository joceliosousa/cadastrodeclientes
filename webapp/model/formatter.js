sap.ui.define([], function () {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit : function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},

		idText: function (sId) {
			//operação booleana em string verifica se tem valor preenchido
			if(sId) {// mesmo se 'if id = true'.
				var newId = parseInt(sId);
				return newId;
			}
		},

		
		statusText: function (sStatus) {
			switch (sStatus) {
				case "1":
					return 'Pendente';
		   		case "2":
					return 'Analise';
		   		case "3":
					return 'Aprovado';
		   		case "4":
					return 'Reprovado';
				case "8":
					return 'Concluido';
				default:
					return sStatus;
			}
		}

	}

});