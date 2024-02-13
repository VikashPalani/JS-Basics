//Finding Discount rates using operators

var og_price = 799;
var selling_price = 199;

var discount_rate = ((og_price-selling_price)/og_price)*100
rounded_discount_rate = Math.round(discount_rate)

console.log("Discount rate is:", rounded_discount_rate,"%")
