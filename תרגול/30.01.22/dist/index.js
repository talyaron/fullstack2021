//Price
var toCurrency = function (price) {
    return new Intl.NumberFormat('en-EN', {
        currency: "usd",
        style: 'currency'
    }).format(price);
};
document.querySelectorAll('.price').forEach(function (node) {
    node.textContent = toCurrency(node.textContent);
});
//Date
var toDate = function (date) {
    return new Intl.DateTimeFormat('en-EN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date(date));
};
document.querySelectorAll('.date').forEach(function (node) {
    node.textContent = toDate(node.textContent);
});
document.querySelectorAll('.dateNew').forEach(function (node) {
    node.textContent = toDate(new Date());
});
