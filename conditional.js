// If and Else statements

var temperature = 20;
if(temperature<20){
    console.log("COLD");
}
if(temperature == 20){
    console.log("20 degree");
}
else{
    console.log("HOT")
}

// If and else using AND(&&) and OR(||)

// Ternary operators -->  condition ? exprIfTrue : exprIfFalse

// Switch cases

var user = "admin";
switch(user){
    case "admin":
        console.log(".....");

    case "subadmin":
        console.log(".....!!");
    default:
        console.log("......");
        break;
    
}


// Coersion, for strict checking use ===