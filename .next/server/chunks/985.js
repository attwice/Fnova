"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 9101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Advertise)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/constants/Sliders.js
const Slider2 = "/resources/images/sliders/slider-1.webp";
const Slider1 = "/resources/images/sliders/slider-2.webp";
const Slider3 = "/resources/images/sliders/slider-3.webp";
const Sliders = [
    Slider1,
    Slider2,
    Slider3
];
/* harmony default export */ const constants_Sliders = (Sliders);

// EXTERNAL MODULE: ./src/constants/Stickers.js
var Stickers = __webpack_require__(1958);
// EXTERNAL MODULE: ./src/components/Review/index.js + 1 modules
var Review = __webpack_require__(6413);
// EXTERNAL MODULE: ./src/components/Order/OrderCard/index.js
var OrderCard = __webpack_require__(7722);
// EXTERNAL MODULE: ./src/constants/Routers.js
var Routers = __webpack_require__(6693);
// EXTERNAL MODULE: ./src/helpers/StoreOrder.js
var StoreOrder = __webpack_require__(4658);
;// CONCATENATED MODULE: ./src/components/Advertise/index.js











const SliderRightDivs = (external_styled_components_default()).div`
  color: #6a7c93;
  background-color: #efedf5;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  overflow: hidden;

  &:before {
    content: "";
    display: flex;
    background-image: url("../../../${(props)=>props.image
}");
    background-size: cover;
    background-position: center center;
    padding-top: calc(100% / 16 * 9);
    width: 100%;
  }
`;
const generateStickerOption = (handleNext, counts)=>Stickers/* default.map */.Z.map((sticker, index)=>{
        if (index < counts) {
            return(/*#__PURE__*/ jsx_runtime_.jsx(OrderCard/* default */.Z, {
                image: sticker.image,
                title: sticker.title,
                comment: sticker.description,
                handleNext: handleNext
            }, index));
        }
    })
;
const generateProducts = (handleNext)=>{
    return Images.map((data, index)=>{
        const title = data.title.toLowerCase();
        return index < 4 && /*#__PURE__*/ _jsxs("div", {
            className: `custom-sticker-product-box ${index == 1 || index == 3 ? "margin-right-mobile" : ""}`,
            //className="custom-sticker-product-box flex flex-column"
            onClick: ()=>handleNext(title)
            ,
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "flex",
                    children: /*#__PURE__*/ _jsx("img", {
                        className: "more-products-image",
                        src: data.image,
                        alt: "more products"
                    })
                }),
                /*#__PURE__*/ _jsx("p", {
                    children: data.title
                })
            ]
        }, index);
    });
};
const Advertise = ()=>{
    const router = (0,router_.useRouter)();
    const handleNext = (title)=>{
        if (title) {
            const orderId = (0,StoreOrder/* createOrder */.LV)(title);
            const route = title.toLowerCase().replaceAll(" ", "-");
            router.push(`${Routers/* default.CHOOSE_SIZE_QUANTITY */.Z.CHOOSE_SIZE_QUANTITY}/${route}/${orderId}`);
        }
    };
    const { 0: curSlider , 1: setCurSlider  } = (0,external_react_.useState)(0);
    const { 0: showCount , 1: setShowCount  } = (0,external_react_.useState)(4);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "custom-sticker-image-panel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Some of our amazing stickers!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "custom-sticker-image-container flex",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "custom-sticker-image-container-box flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: curSlider == 0 ? "active" : "deactive",
                                        src: constants_Sliders[curSlider]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: curSlider == 1 ? "active" : "deactive",
                                        src: constants_Sliders[curSlider]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: curSlider == 2 ? "active" : "deactive",
                                        src: constants_Sliders[curSlider]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "custom-sticker-image-right flex flex-column",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SliderRightDivs, {
                                        image: constants_Sliders[1]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SliderRightDivs, {
                                        image: constants_Sliders[2]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "custom-sticker-image-pagination",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "custom-sticker-image-pagination-" + (curSlider == 0 ? "activeitem" : "item"),
                                onClick: ()=>{
                                    setCurSlider(0);
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "custom-sticker-image-pagination-" + (curSlider == 1 ? "activeitem" : "item"),
                                onClick: ()=>{
                                    setCurSlider(1);
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "custom-sticker-image-pagination-" + (curSlider == 2 ? "activeitem" : "item"),
                                onClick: ()=>{
                                    setCurSlider(2);
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "custom-sticker-product-panel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "We have more products!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: generateStickerOption(handleNext, showCount)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Review/* default */.Z, {
            })
        ]
    }));
};
/* harmony default export */ const components_Advertise = (Advertise);


/***/ }),

/***/ 282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Order_OrderAd)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Order/OrderAdItem/index.js

;
const OrderAdItem = ({ image , title , comment  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "custom-sticker-shipping-box",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: image,
                alt: "order ad"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: comment
            })
        ]
    })
;
/* harmony default export */ const Order_OrderAdItem = (OrderAdItem);

;// CONCATENATED MODULE: ./src/components/Order/OrderAd/index.js


const BOX = "/resources/images/vector/box.webp";
const CIRCUIT = "/resources/images/vector/circuit.webp";
const CLOUD = "/resources/images/vector/cloud.webp";
const OrderAd = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "custom-sticker-shipping-panel",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Order_OrderAdItem, {
                image: BOX,
                title: "Free shipping in 5 days",
                comment: "All order including free express shipping to ensure your order arrives within 5 days."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Order_OrderAdItem, {
                image: CIRCUIT,
                title: "Get an online proof",
                comment: "Once your order is submited we will email out a proof before we begin production."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Order_OrderAdItem, {
                image: CLOUD,
                title: "Durable and weatherproof",
                comment: "Enjoy your stickers worry free with our 4+ year UV rating and water resistantice."
            })
        ]
    })
;
/* harmony default export */ const Order_OrderAd = (OrderAd);


/***/ }),

/***/ 1958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const KISSCUT = "/resources/images/sticker-images/KISSCUT.webp";
const CIRCLE = "/resources/images/sticker-images/CIRCLE.webp";
const RECTANGLE = "/resources/images/sticker-images/RECTANGLE.webp";
const SQUARE = "/resources/images/sticker-images/SQUARE.webp";
const DIECUT = "/resources/images/sticker-images/DIECUT.webp";
const OVAL = "/resources/images/sticker-images/OVAL.webp";
const BUMPER = "/resources/images/sticker-images/BUMPER.webp";
const SHEET = "/resources/images/sticker-images/SHEET.webp";
const ROUNDED = "/resources/images/sticker-images/ROUNDED.webp";
const TRANSFER = "/resources/images/sticker-images/TRANSFER.webp";
const VINYL = "/resources/images/sticker-images/VINYL.webp";
const SLINGS = "/resources/images/stickers/static-cling.webp";
const Images = [
    {
        image: DIECUT,
        title: "Die Cut Stickers",
        description: "Click above to start your order. Both backing and sticker cut to shape."
    },
    {
        image: KISSCUT,
        title: "Kiss Cut Stickers",
        description: "Click above to start your order. Cut to shape with a square backing."
    },
    {
        image: CIRCLE,
        title: "Circle Stickers",
        description: "Click above to start your order. Stickers in the shape of a circle."
    },
    {
        image: RECTANGLE,
        title: "Rectangle Stickers",
        description: "Click above to start your order. Cut into a rectangle shape."
    },
    {
        image: SQUARE,
        title: "Square Stickers",
        description: "Click above to start your order. Stickers in the shape of a square."
    },
    {
        image: OVAL,
        title: "Oval Stickers",
        description: "Click above to start your order. Stickers in the shape of an oval."
    },
    {
        image: BUMPER,
        title: "Bumper Stickers",
        description: "Click above to start your order. The perfect sticker for your car."
    },
    {
        image: SHEET,
        title: "Sticker Sheets",
        description: "Click above to start your order. Multiple stickers on a single backer."
    },
    {
        image: ROUNDED,
        title: "Rounded Stickers",
        description: "Click above to start your order. Stickers with rounded corners."
    },
    {
        image: TRANSFER,
        title: "Transfer Image",
        description: "Click above to start your order. Image transfering with transfer tape."
    },
    {
        image: VINYL,
        title: "Vynil Lettering",
        description: "Click above to start your order. Letter transfering with transfer tape."
    },
    {
        image: SLINGS,
        title: "Static Clings",
        description: "Click above to start your order. Stickers for your windows."
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Images);


/***/ })

};
;