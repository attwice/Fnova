"use strict";
exports.id = 619;
exports.ids = [619];
exports.modules = {

/***/ 6693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ NAVBAR_ROUTERS),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ROUTERS = {
    HOME: "/",
    CUSTOM_STICKER: "/custom-sticker",
    CHOOSE_SIZE_QUANTITY: "/products",
    UPLOAD_STICKER: "/upload-sticker",
    CART: "/cart",
    CHECKOOUT: "/checkout",
    SUCCESS: "/success",
    FAQ: "/faq",
    HELP: "/help",
    STATUS: "/status",
    TERMSOFSERVICE: "/terms-of-service",
    PRIVACYPOLICY: "/privacy-policy",
    REFUNDPOLICY: "/refund-policy"
};
const NAVBAR_ROUTERS = [
    {
        title: "HOME",
        path: ROUTERS.HOME
    },
    {
        title: "FAQ",
        path: ROUTERS.FAQ
    },
    {
        title: "STATUS",
        path: ROUTERS.STATUS
    },
    {
        title: "HELP",
        path: ROUTERS.HELP
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ROUTERS);


/***/ }),

/***/ 4658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LV": () => (/* binding */ createOrder),
/* harmony export */   "co": () => (/* binding */ getOrder),
/* harmony export */   "Cs": () => (/* binding */ updateOrder),
/* harmony export */   "Fw": () => (/* binding */ getOrderList),
/* harmony export */   "zP": () => (/* binding */ resetOrderList)
/* harmony export */ });
/* unused harmony export deleteOrder */
const createOrder = (stickerType, value = null)=>{
    const orderCount = localStorage.length;
    const newId = (orderCount + 1).toString();
    const newOrder = value && value.toString().length ? value : {
        type: stickerType,
        id: newId
    };
    localStorage.setItem(`order_id_${newId}`, JSON.stringify(newOrder));
    return newId;
};
const getOrder = (id)=>{
    const orderById = localStorage.getItem(`order_id_${id}`);
    if (orderById) {
        const order = JSON.parse(orderById);
        return order;
    }
    return {
    };
};
const updateOrder = (id, value)=>{
    const orderById = localStorage.getItem(`order_id_${id}`);
    if (orderById) {
        const order = JSON.parse(orderById);
        const newOrder = Object.assign(order, value);
        localStorage.setItem(`order_id_${id}`, JSON.stringify(newOrder));
        return true;
    }
    console.error("Order", id, "does not exist");
    return false;
};
const deleteOrder = (id)=>{
    const orderById = localStorage.getItem(`order_id_${id}`);
    if (orderById) {
        localStorage.removeItem(`order_id_${id}`);
    }
};
const getOrderList = ()=>{
    let orderKeys = [];
    for(let key in localStorage){
        if (key.includes("order_id")) {
            orderKeys.push(key);
        }
    }
    if (orderKeys.length > 0) {
        let orderList = [];
        orderKeys.map((item)=>{
            const order = JSON.parse(localStorage.getItem(item));
            if (order.price) {
                orderList.push(order);
            }
        });
        // for (let i = 1; i <= orderKeys.length; i++) {
        //   const order = JSON.parse(localStorage.getItem(i))
        //   if (order.price) {
        //     orderList.push(order)
        //   }
        // }
        resetOrderList(orderList);
        return orderList;
    }
    return [];
};
const resetOrderList = (newList)=>{
    const fee = localStorage.getItem("shipping_fee");
    const info = localStorage.getItem("shipping_info");
    localStorage.clear();
    if (fee) localStorage.setItem("shipping_fee", fee);
    if (info) localStorage.setItem("shipping_info", info);
    newList.forEach((order)=>{
        createOrder(null, order);
    });
};


/***/ })

};
;