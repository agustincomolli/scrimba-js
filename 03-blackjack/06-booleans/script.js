let points = 10;
let name = "Agustín";

// Booleanos
let isVegan = true;
console.log(isVegan);
let hasDiscountCode = true;

function processOrder() {
  if (hasDiscountCode) {
    console.log("El descuento ha sido aplicado a la orden de comida.");
    hasDiscountCode = false;
  } else {
    console.log("No se aplica ningún descuento.");
  };
};

processOrder();
processOrder();