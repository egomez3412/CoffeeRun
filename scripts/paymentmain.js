(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment-information="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var FormHandler = new FormHandler(FORM_SELECTOR);
    
    FormHandler.addSubmitHandler(function (data) {
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
          modal.style.display = "none";
        }
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    });

})(window);