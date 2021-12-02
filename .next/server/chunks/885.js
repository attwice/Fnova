"use strict";
exports.id = 885;
exports.ids = [885];
exports.modules = {

/***/ 6624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uY": () => (/* binding */ STANDARD_DELIVERY),
/* harmony export */   "uD": () => (/* binding */ FAST_DELIVERY),
/* harmony export */   "lz": () => (/* binding */ FASTER_DELIVERY),
/* harmony export */   "rN": () => (/* binding */ SCHEDULED_DELIVERY),
/* harmony export */   "Lj": () => (/* binding */ SCHEDULED_DELIVERY_SELECTED),
/* harmony export */   "sM": () => (/* binding */ FAST_SHIPPING_FEE_SMALL),
/* harmony export */   "J7": () => (/* binding */ FAST_SHIPPING_FEE_BIG),
/* harmony export */   "ZZ": () => (/* binding */ FASTER_SHIPPING_FEE_SMALL),
/* harmony export */   "pB": () => (/* binding */ FASTER_SHIPPING_FEE_BIG),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const STANDARD_DELIVERY = "Standard";
const FAST_DELIVERY = "Fast";
const FASTER_DELIVERY = "Faster";
const SCHEDULED_DELIVERY = "Scheduled";
const SCHEDULED_DELIVERY_SELECTED = "Scheduled_selected";
const FAST_SHIPPING_FEE_SMALL = 8.95;
const FAST_SHIPPING_FEE_BIG = 16.95;
const FASTER_SHIPPING_FEE_SMALL = 39.95;
const FASTER_SHIPPING_FEE_BIG = 79.95;
const ShippingMethods = [
    STANDARD_DELIVERY,
    FAST_DELIVERY,
    FASTER_DELIVERY,
    SCHEDULED_DELIVERY, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingMethods);


/***/ }),

/***/ 1885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aS": () => (/* binding */ getPrice),
/* harmony export */   "fL": () => (/* binding */ getDiscount),
/* harmony export */   "iW": () => (/* binding */ getShippingPrice)
/* harmony export */ });
/* harmony import */ var constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6624);

const getPrice = (size, quantity)=>{
    let finalPrice;
    const square = size[0] * size[1] * quantity;
    const price = 0.018 * square + 49;
    finalPrice = price < 50 ? parseInt(price / 1.5) : price < 55 ? parseInt(price - 5) : price < 500 ? parseInt(price) : price < 1000 ? parseInt(price * 19 / 20) : parseInt(price * 9 / 10);
    return Math.round(finalPrice - finalPrice * 0.25);
};
const getDiscount = (size, quantity)=>{
    /*
  const standardStickerPrice = 0.7
  const price = getPrice(size, quantity)
  const pricePerSticker = price / quantity
  return Math.abs(
    Math.round(
      ((standardStickerPrice - pricePerSticker) / standardStickerPrice) * 100
    )
  )*/ let discount = Math.round(Math.sqrt(quantity) * 3 + parseInt(size[0]) - 5);
    if (discount >= 100) {
        discount = 99;
    }
    return discount;
};
const getShippingPrice = (orderList, method)=>{
    let shippingFee;
    if (method === constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__/* .FASTER_DELIVERY */ .lz || method === constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__/* .FAST_DELIVERY */ .uD) {
        let biggestSize = 0;
        orderList.map((order)=>{
            const square = order.size[0] * order.size[1];
            if (square > biggestSize) {
                biggestSize = square;
            }
            return true;
        });
        if (method === constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__/* .FASTER_DELIVERY */ .lz) {
            shippingFee = biggestSize >= 25 ? constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__/* .FASTER_SHIPPING_FEE_BIG */ .pB : constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__/* .FASTER_SHIPPING_FEE_SMALL */ .ZZ;
        } else {
            shippingFee = biggestSize >= 25 ? constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__/* .FAST_SHIPPING_FEE_BIG */ .J7 : constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__/* .FAST_SHIPPING_FEE_SMALL */ .sM;
        }
    } else {
        shippingFee = 0;
    }
    return shippingFee;
};


/***/ })

};
;