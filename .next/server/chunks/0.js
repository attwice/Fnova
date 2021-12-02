"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = {

/***/ 1000:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helpers_StoreOrder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4658);
/* harmony import */ var constants_Routers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6693);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9915);
/* harmony import */ var helpers_Shipping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1922);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_6__]);
js_cookie__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const stageTabs = [
    {
        className: "details",
        text: "Your Details"
    },
    {
        className: "payment",
        text: "Payment"
    },
    {
        className: "confirm",
        text: "Confirmation"
    }, 
];
const generateOrderList = (orderList)=>orderList.map((order, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "checkout-panel-status-box-item",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "square",
                    children: order.quantity
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: order.type
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "quantity",
                            children: [
                                "x",
                                order.quantity
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "price",
                    children: `$${order.price}`
                })
            ]
        }, index)
    )
;
const OrderSuccess = ()=>{
    const { 0: orderList , 1: setOrderList  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(helpers_StoreOrder__WEBPACK_IMPORTED_MODULE_8__/* .getOrderList */ .Fw);
    const { 0: shippingInfo , 1: setShippingInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)((0,helpers_Shipping__WEBPACK_IMPORTED_MODULE_7__/* .getShippingInfoHelper */ .cr)());
    const { 0: stage , 1: setStage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(2);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: subTotal1 , 1: setSubTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        let subTotal = 0;
        orderList.forEach((order)=>{
            subTotal += order.price;
        });
        setSubTotal(subTotal + (0,helpers_Shipping__WEBPACK_IMPORTED_MODULE_7__/* .getShippingFeeHelper */ .kd)());
        // const orderList = getOrderList()
        // window.gtag("js", new Date())
        // window.gtag("config", "AW-314966559")
        // window.gtag("event", "conversion", {
        //   send_to: "AW-314966559/hJ14CMjQz-0CEJ-EmJYB",
        //   value: 1.0,
        //   currency: "USD",
        //   transaction_id: "",
        // })
        // resetOrderList([])
        conversionAd();
    }, [
        orderList
    ]);
    const handleClick = ()=>{
        router.push(constants_Routers__WEBPACK_IMPORTED_MODULE_5__/* ["default"].CUSTOM_STICKER */ .Z.CUSTOM_STICKER);
    };
    const conversionAd = async ()=>{
        try {
            const id = js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].get("intentId");
            const amount = js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].get("subTotal");
            js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].set("intentId", "");
            js_cookie__WEBPACK_IMPORTED_MODULE_6__["default"].set("subTotal", "");
            if (id && amount) {
                // eslint-disable-next-line no-undef
                gtag("event", "conversion", {
                    send_to: "AW-314966559/hJ14CMjQz-0CEJ-EmJYB",
                    value: parseFloat(amount),
                    currency: "USD",
                    transaction_id: id
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "checkout",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "checkout-header",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "checkout-header-title",
                        children: stageTabs.map((tab, index)=>{
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: tab.className,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "square " + (index == stage ? "active" : ""),
                                        children: index + 1
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: index == stage ? "active" : "",
                                        children: tab.text
                                    })
                                ]
                            }, index));
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "checkout-panel",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "checkout-panel-info",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "order-success flex flex-column",
                                children: [
                                    "Congratulations! ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "Your order has been submitted",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    }),
                                    "Thank you for using Sticker Cove!",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: handleClick,
                                        children: "Continue shopping"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "checkout-panel-status",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "checkout-panel-status-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Basket Summary"
                                        }),
                                        generateOrderList(orderList),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "checkout-panel-status-box-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "square"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Shopping Fee"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "price",
                                                    children: [
                                                        "$",
                                                        (0,helpers_Shipping__WEBPACK_IMPORTED_MODULE_7__/* .getShippingFeeHelper */ .kd)()
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "checkout-panel-status-box-total",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "total"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "$",
                                                        subTotal1
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "checkout-panel-status-box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Shipping Details"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "checkout-panel-status-box-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "square",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faMapMarkerAlt
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                shippingInfo && shippingInfo.shFirstName,
                                                                " ",
                                                                shippingInfo && shippingInfo.shLastName
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            children: [
                                                                shippingInfo && shippingInfo.streetAddress,
                                                                " ",
                                                                shippingInfo && shippingInfo.shState
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSuccess);

});

/***/ }),

/***/ 8062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getDateTimeFormat)
/* harmony export */ });
const getDateTimeFormat = (date)=>{
    let formatedDate;
    const theDay = new Date(date);
    //theDay.setDate(date.getDate() + 1)
    theDay.setDate(date.getDate());
    const dayOfWeek = theDay.toUTCString().split(",")[0];
    const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December", 
    ];
    formatedDate = `${MONTHS[date.getMonth()]} ${date.getDate()} (${dayOfWeek})`;
    return formatedDate;
};


/***/ }),

/***/ 1922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fS": () => (/* binding */ getDeliveryDayFromMethod),
/* harmony export */   "qz": () => (/* binding */ setShippingFeeHelper),
/* harmony export */   "kd": () => (/* binding */ getShippingFeeHelper),
/* harmony export */   "yE": () => (/* binding */ setShippingInfoHelper),
/* harmony export */   "cr": () => (/* binding */ getShippingInfoHelper)
/* harmony export */ });
/* harmony import */ var constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6624);
/* harmony import */ var _DateTimeHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8062);


const getDates = ()=>{
    let dateList = [];
    const today = new Date();
    const fasterDelivery = new Date(today);
    fasterDelivery.setDate(today.getDate() + 1);
    if ((0,_DateTimeHelper__WEBPACK_IMPORTED_MODULE_1__/* .getDateTimeFormat */ .V)(fasterDelivery).indexOf("Sun") > -1) {
        fasterDelivery.setDate(fasterDelivery.getDate() + 1);
    }
    dateList.push(fasterDelivery);
    const fastDelivery = new Date(fasterDelivery);
    fastDelivery.setDate(fastDelivery.getDate() + 1);
    if ((0,_DateTimeHelper__WEBPACK_IMPORTED_MODULE_1__/* .getDateTimeFormat */ .V)(fastDelivery).indexOf("Sun") > -1) {
        fastDelivery.setDate(fastDelivery.getDate() + 1);
    }
    dateList.push(fastDelivery);
    const standardDelivery = new Date(fastDelivery);
    standardDelivery.setDate(standardDelivery.getDate() + 3);
    if ((0,_DateTimeHelper__WEBPACK_IMPORTED_MODULE_1__/* .getDateTimeFormat */ .V)(standardDelivery).indexOf("Sun") > -1) {
        standardDelivery.setDate(standardDelivery.getDate() + 1);
    }
    dateList.push(standardDelivery);
    return dateList;
};
const getDeliveryDayFromMethod = (method)=>{
    if (method === constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__/* .FASTER_DELIVERY */ .lz) {
        return (0,_DateTimeHelper__WEBPACK_IMPORTED_MODULE_1__/* .getDateTimeFormat */ .V)(getDates()[0]);
    } else if (method === constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__/* .FAST_DELIVERY */ .uD) {
        return (0,_DateTimeHelper__WEBPACK_IMPORTED_MODULE_1__/* .getDateTimeFormat */ .V)(getDates()[1]);
    } else if (method === constants_ShippingMethods__WEBPACK_IMPORTED_MODULE_0__/* .STANDARD_DELIVERY */ .uY) {
        return (0,_DateTimeHelper__WEBPACK_IMPORTED_MODULE_1__/* .getDateTimeFormat */ .V)(getDates()[2]);
    }
};
const setShippingFeeHelper = (fee)=>{
    localStorage.setItem("shipping_fee", fee);
    const test = localStorage.getItem("shipping_fee");
};
const getShippingFeeHelper = ()=>{
    const fee = localStorage.getItem("shipping_fee");
    if (fee) {
        return parseFloat(fee);
    }
    return 0;
};
const setShippingInfoHelper = (info)=>{
    localStorage.setItem("shipping_info", JSON.stringify(info));
};
const getShippingInfoHelper = ()=>{
    let info = localStorage.getItem("shipping_info");
    info = JSON.parse(info);
    return info;
};


/***/ })

};
;