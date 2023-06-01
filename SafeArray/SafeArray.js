var Safearray = /** @class */ (function () {
    function Safearray() {
        this.arr = [];
        this.size = 5;
        this.failed_arr = [];
        this.failed_count = 0;
    }
    Safearray.prototype.putElement = function (index, value) {
        if (index < 0 || index >= this.size) {
            this.failed_count++;
            this.failed_arr.push(index);
            //console.log(`Not a valid index: ${this.failed_count} failed attempts at ${this.failed_arr}` );
            console.log("Not a valid index", this.failed_count, " Failed attempts, index are ", this.failed_arr);
        }
        else
            this.arr[index] = value;
    };
    Safearray.prototype.getElement = function (index) {
        if (index < 0 || index >= this.size) {
            this.failed_count++;
            this.failed_arr.push(index);
            //console.log(`Not a valid index: ${this.failed_count} failed attempts at ${this.failed_arr}` );
            console.log("Not a valid index", this.failed_count, " Failed attempts, index are ", this.failed_arr);
            return -1;
        }
        else
            return this.arr[index];
    };
    return Safearray;
}());
var obj = new Safearray();
obj.putElement(3, 20);
console.log(obj.getElement(3));
obj.putElement(27, 20);
obj.putElement(30, 10);
obj.getElement(40);
