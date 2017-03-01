var TestApp = function() {};

TestApp.prototype.show = function(num1,num2,success, fail) {
	
	
    cordova.exec(success, fail, "TestAppPlugin","show", [num1,num2]);
};

var ts = new TestApp();
module.exports = ts;