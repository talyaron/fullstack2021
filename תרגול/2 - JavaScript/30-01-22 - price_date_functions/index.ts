//Price
const toCurrency = price => {
    return new Intl.NumberFormat('en-EN', {
        currency: "usd",
        style: 'currency'
    }).format(price)
}

document.querySelectorAll('.price').forEach(node => {
    node.textContent = toCurrency(node.textContent)
})

//Date
const toDate = date => {
    return new Intl.DateTimeFormat('en-EN', { //for locales also can write: "he-HE-u-ca-hebrew" or "en-EN-u-nu-lath"
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date(date))
}

document.querySelectorAll('.date').forEach(node => {
    node.textContent = toDate(node.textContent)
})
document.querySelectorAll('.dateNew').forEach(node => {
    node.textContent = toDate(new Date())
})