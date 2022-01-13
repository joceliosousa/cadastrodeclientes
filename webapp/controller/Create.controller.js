sap.ui.define([
    "./BaseController",
        "sap/ui/model/json/JSONModel",
        "../model/formatter",
        "sap/ui/core/routing/History",
        "sap/m/MessageToast",
        "sap/ui/core/UIComponent"
    ], function (BaseController, JSONModel, formatter, History, MessageToast, UIComponent) {
        "use strict";
        return BaseController.extend("meufiori.cadastrodeclientes.controller.Create", {
         
            formatter: formatter, 
            onGravar:function(){

                var oModel = this.getView().getModel();

                var dados = {
                    Nome:       this.byId("inpNome").getValue(),
                    Telefone:   this.byId("inpEmail").getValue(),
                    UF:         this.byId("inpUF").getValue(),
                    Email:      this.byId("inpTelefone").getValue(),
                    Status:     "1"
                };

                oModel.create("/ClienteSet", dados, {
                    success: function(dados, resposta){
                        
                        sap.m.MessageToast.show('Cliente criado com sucesso.');
                        var mensagem = JSON.parse(resposta.headers["sap-message"]);
                        this.getRouter().navTo("object", {
                            objectId: dados.ClienteID
                        });


                    }.bind(this),
                    error: function(e){
                        console.error(e);
                    }.bind(this)
                } );

            },

            onNavBack: function () {
    
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
    
                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("worklist", {}, true);
                }
    
            },
        });
    });  