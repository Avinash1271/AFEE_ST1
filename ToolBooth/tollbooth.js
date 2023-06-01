var TollBooth = /** @class */ (function () {
    function TollBooth() {
        this.carTotal = 0;
        this.cashTotal = 0;
    }
    TollBooth.prototype.payingCar = function () {
        this.carTotal++;
        this.cashTotal += 50;
    };
    TollBooth.prototype.nopayCar = function () {
        this.carTotal++;
    };
    TollBooth.prototype.display = function () {
        console.log("Total cars: ".concat(this.carTotal));
        console.log("Total cash: ".concat(this.cashTotal));
    };
    return TollBooth;
}());
function testTollBooth() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var tollBooth = new TollBooth();
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg === 'p') {
            tollBooth.payingCar();
        }
        else if (arg === 'n') {
            tollBooth.nopayCar();
        }
    }
    tollBooth.display();
}
// Test cases
testTollBooth('p', 'p', 'n', 'p', 'n');
testTollBooth('p', 'p', 'n', 'p', 'p', 'n', 'p');
testTollBooth('p', 'p', 'n', 'p', 'n', 'p', 'p', 'p', 'n');
