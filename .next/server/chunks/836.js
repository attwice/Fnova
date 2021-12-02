"use strict";
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 7722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_StickerCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1352);


const OrderCard = ({ image , title , comment , handleNext  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "order-card",
        onClick: ()=>handleNext(title)
        ,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_StickerCategory__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            image: image,
            title: title,
            comment: comment
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderCard);


/***/ }),

/***/ 6413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Review)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/constants/Reviews.js
const AVATAR1 = "/resources/images/avatar/joseph.webp";
const AVATAR2 = "/resources/images/avatar/avatar.webp";
const AVATAR3 = "/resources/images/avatar/david.webp";
const Reviews = [
    {
        name: "Joey Dingman",
        role: "General Customer",
        image: AVATAR1,
        rating: 5,
        review: {
            title: "The quality is great!",
            content: "The quality is great! The sticker it self is stiff and firm and feels like a high end sticker. The packaging was really nice and secure. I absolutely love them and will be ordering from them in the future!"
        }
    },
    {
        name: "Patrick Warner",
        role: "General Customer",
        image: AVATAR3,
        rating: 5,
        review: {
            title: "Easy to use!",
            content: "The ease of use for getting your stickers is second to none. I was able to quickly upload, select size and material, and then complete my purchase very quickly. Eventually, I had to engage customer service and they went above and beyond to ensure I was satisfied with the service. Consequently, I have placed my second order and will continue to do so whenever the needs arise."
        }
    },
    {
        name: "Eric Rubio",
        role: "General Customer",
        image: AVATAR2,
        rating: 5,
        review: {
            title: "Quick delivery!",
            content: "Quick delivery, great quality, exactly as expected. Everything from the design & proofing steps to reordering is simple and seamless. This was our second round of ordering die cut sticker and we have been extremely happy thus far!"
        }
    }, 
];

;// CONCATENATED MODULE: ./src/components/Review/index.js






const generateRatings = (counts)=>{
    let stars = [];
    for(let i = 0; i < counts; i++){
        stars.push(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "star",
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                icon: free_solid_svg_icons_.faStar,
                color: "#FFA500"
            })
        }));
    }
    return stars;
};
const generateReviews = (selected, setSelected)=>Reviews.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            name: index,
            className: `custom-sticker-word-box ${selected === index ? "review-selected" : ""} `,
            onClick: (e)=>setSelected(index)
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "info",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "square flex",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "more-products-img",
                                src: data.image,
                                alt: "avatar"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: data.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: data.role
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rating",
                    children: generateRatings(data.rating)
                })
            ]
        }, index)
    )
;
const Review = ()=>{
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)(0);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "custom-sticker-word-panel",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "custom-sticker-word-container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "custom-sticker-word-container-left",
                    children: generateReviews(selected, setSelected)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "custom-sticker-word-container-right",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: Reviews[selected].review.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: Reviews[selected].review.content
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Review = (Review);


/***/ }),

/***/ 1352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const StickerCategory = ({ image , title , comment , popular , onClick  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sticker-category-item",
        onClick: onClick,
        image: image,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sticker-category-image-wrapper",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: "sticker-category-image-type",
                    src: image,
                    alt: "option"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sticker-category-title-wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sticker-category-title-popular",
                        children: title == "Die Cut Stickers" ? "Most Popular" : ""
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickerCategory);
{
}{
}

/***/ })

};
;