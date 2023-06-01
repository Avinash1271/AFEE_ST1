var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accno) {
        this.accno = accno;
        this.transactionCount = 0;
    }
    Account.prototype.process = function (trans) {
        this.transactionCount++;
        return trans.value() !== 0;
    };
    return Account;
}());
var Transaction = /** @class */ (function () {
    function Transaction(amount) {
        this.amount = amount;
    }
    Transaction.prototype.value = function () {
        return this.amount;
    };
    return Transaction;
}());
var FilteredAccount = /** @class */ (function (_super) {
    __extends(FilteredAccount, _super);
    function FilteredAccount(accno) {
        var _this = _super.call(this, accno) || this;
        _this.filteredCount = 0;
        return _this;
    }
    FilteredAccount.prototype.process = function (trans) {
        if (trans.value() === 0) {
            this.filteredCount++;
            return true;
        }
        else {
            return _super.prototype.process.call(this, trans);
        }
    };
    FilteredAccount.prototype.filtered = function () {
        return this.filteredCount;
    };
    return FilteredAccount;
}(Account));
// Usage example
var account = new Account(123456);
var transaction1 = new Transaction(100);
var transaction2 = new Transaction(0);
var transaction3 = new Transaction(200);
console.log(account.process(transaction1)); // true
console.log(account.process(transaction2)); // true
console.log(account.process(transaction3)); // true
console.log(account['transactionCount']); // 3
var filteredAccount = new FilteredAccount(987654);
var filteredTransaction1 = new Transaction(150);
var filteredTransaction2 = new Transaction(0);
var filteredTransaction3 = new Transaction(-50);
console.log(filteredAccount.process(filteredTransaction1)); // true
console.log(filteredAccount.process(filteredTransaction2)); // true
console.log(filteredAccount.process(filteredTransaction3)); // false
console.log(filteredAccount['transactionCount']); // 3
console.log(filteredAccount.filtered()); // 1
