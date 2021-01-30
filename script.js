// Buy Now Button Click event
document.getElementById("buyNowBtn").addEventListener("click", function () {
    document.getElementById("booking-section").style.display = "none"; // Hide Booking Page
    document.getElementById("order-section").style.display = "block"; // Show Order Confirmation Page
    showDetails("from-input", "from", "value");
    showDetails("to-input", "to", "value");
    showDetails("departure-input", "departure", "value");
    showDetails("return-input", "return", "value");
    showDetails("subTotal-input", "showSubTotals", "text");
    showDetails("vat-input", "showVat", "text");
    showDetails("total-input", "showTotal", "text");
});
// Show Details Function For Confirm order Page
function showDetails(getInputId, setInputId, valueOrText) {
    if (valueOrText == "text") {
        var getValue = document.getElementById(getInputId).innerText;
        document.getElementById(setInputId).innerText = getValue;
    }
    else {
        var getValue = document.getElementById(getInputId).value;
        document.getElementById(setInputId).innerText = getValue;
    }
}
// Ticket Add & Remove Button Function
function TicketBtnHandel(inputId, isIncrease) {
    const getInput = document.getElementById(inputId);
    let ticketInput = parseInt(getInput.value);
    let ticketAmount = ticketInput;
    if (isIncrease == true) {
        ticketAmount = ticketInput + 1;
    }
    if (isIncrease == false && ticketInput > 0) {
        ticketAmount = ticketInput - 1;
    }
    document.getElementById(inputId).value = ticketAmount;
    PriceCalculate()
}
// Ticket Price Calculation Function
function PriceCalculate() {
    var getFC_ticketInput = document.getElementById("FC-input").value;
    var FC_ticketAmount = parseInt(getFC_ticketInput);
    var getEC_ticketInput = document.getElementById("EC-input").value;
    var EC_ticketAmount = parseInt(getEC_ticketInput);
    // SubTotal Calculation
    var getSubTotal = FC_ticketAmount * 150 + EC_ticketAmount * 100;
    var subTotal = parseFloat(getSubTotal);
    subTotal = subTotal.toFixed(2);
    document.getElementById("subTotal-input").innerText = subTotal;
    // vat Calculation
    var getVat = subTotal * 0.1;
    var vat = parseFloat(getVat);
    vat = vat.toFixed(2);
    document.getElementById("vat-input").innerText = vat;
    // Total calculation
    var getTotal = parseFloat(subTotal) + parseFloat(vat);
    var total = getTotal.toFixed(2);
    document.getElementById("total-input").innerText = total;
}