const ADMIN_FEE = 50.00;
const TT_PRICE = 250.00;

function calculate() {
    let qty = document.getElementById("qty").value;
    let subtotal = qty * TT_PRICE;
    let total = subtotal + ADMIN_FEE;

    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
}