var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $ ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice("Jack", "Work in USA", 9585);
var invTwo = new Invoice("Maria", "Work in UK", 8585);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (invoice) {
    console.log(invoice.client);
});
