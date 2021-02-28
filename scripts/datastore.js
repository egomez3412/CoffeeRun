(function (window) {
    'use strict';
    var App = window.App || {};

    //Constructor
    function DataStore() {
        console.log('running the DataStore function');
        this.data = {};
    };
    // add
    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    };
    // at(i)
    DataStore.prototype.get = function (key) {
        return this.data[key];
    };
    // [:]
    DataStore.prototype.getAll = function () {
        return this.data;
    };
    // erase(i)
    DataStore.prototype.remove = function (key) {
        delete this.data[key];
    }

    App.DataStore = DataStore; //Label to call the inner function
    window.App = App;

})(window);
// Call on DOM console: window.App.DataStore();
// Not needed, can write: App.DataStore() because of the label.

// Creating a new instance of an object
// var dsOne = new App.DataStore();
// dsOne.data['email'] = 'james@bond.com';
