"use strict";
exports.id = 840;
exports.ids = [840];
exports.modules = {

/***/ 7525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MainProcessSteps = ({ image , title , comment  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "main-process-steps flex flex-column",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "main-process-steps-image flex",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: image,
                        "max-width": "300",
                        "max-height": "155",
                        alt: "steps"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "main-process-steps-title",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "main-process-steps-comments",
                    children: comment
                })
            ]
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainProcessSteps);


/***/ }),

/***/ 1320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_Routers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6693);
/* harmony import */ var components_Dashboard_MainProcessSteps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7525);




const OrderButton = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const onClickHandler = ()=>{
        router.push(constants_Routers__WEBPACK_IMPORTED_MODULE_2__/* ["default"].CUSTOM_STICKER */ .Z.CUSTOM_STICKER);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `order-button ${props.cname}`,
        onClick: onClickHandler,
        children: props.title
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderButton);


/***/ }),

/***/ 4305:
/***/ ((module) => {


module.exports = {
    TESTIMORIAL: `StickerCove is founded on the principle of bringing quality and affordability back into the market of custom stickers! We truly strive to make sure every customer leaves satisfied with their purchase and amazing custom stickers.`,
    REVIEW_1: "Quick delivery, great quality, exactly as expected. Everything from the design & proofing steps to reordering is simple and seamless. This was our second round of ordering die cut sticker and we have been extremely happy thus far!",
    REVIEW_2: "The quality is great! The sticker it self is stiff and firm and feels like a high end sticker. The packaging was really nice and secure. I absolutely love them and will be ordering from them in the future!"
};


/***/ })

};
;