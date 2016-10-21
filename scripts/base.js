(function() {
    "use strict";

    var cta;

    window.addEventListener("load", checkIfEBInitialized);

    function checkIfEBInitialized(event) {
        if (EB.isInitialized()) {
            initializeCreative();
        }
        else {
            EB.addEventListener(EBG.EventName.EB_INITIALIZED, checkIfEBInitialized);
        }
    }

    function initializeCreative() {
        cta 	= document.getElementById("ola");

        addListeners();
    }

    function addListeners(){
        cta.addEventListener("click", onCTAClick);
    }


    function onCTAClick(event) {
        EB.clickthrough();
    }

}());