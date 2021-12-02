"use strict";
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 3271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iC": () => (/* binding */ APP_NAME),
/* harmony export */   "O2": () => (/* binding */ API_ROOT),
/* harmony export */   "cZ": () => (/* binding */ API_REQUEST_TIMEOUT),
/* harmony export */   "Ys": () => (/* binding */ STRIPE_PKEY_LIVE)
/* harmony export */ });
/* unused harmony exports NODE_ENV, STRIPE_PKEY_TEST, GMAP_API_KEY */
const APP_NAME = "StickerCove";
//export const API_ROOT = "http://localhost:4000/api"
const API_ROOT = "https://api-dot-sticker-cove.uc.r.appspot.com/api";
const API_REQUEST_TIMEOUT = 30000;
const NODE_ENV = "production";
// export const NODE_ENV = "development"
//
const STRIPE_PKEY_TEST = "pk_test_51JN5CeEeX2HTK1srKneyi7trFKNlgt0CUjy5qSmFgjG7KYUakFbue6St2vy9s76PZdjERmdf46k2eFU6Qni53mn900TkJDaQY5";
const STRIPE_PKEY_LIVE = "pk_live_51JN5CeEeX2HTK1srXio2TAzotyqYOkBJG7W2dgzxf0bscBgfslelJcEEYd5Fu7L5aEqTVEffyUtkDAQJKXdbNcmd00uPPcHRal";
const GMAP_API_KEY = "";


/***/ }),

/***/ 8641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jD": () => (/* binding */ getIndentAction),
/* harmony export */   "$B": () => (/* binding */ stripePayAction),
/* harmony export */   "TK": () => (/* binding */ createOrderAction),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4984);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1727);
/* harmony import */ var constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);



const getInitialState = ()=>({
        status: "init_state",
        payload: null,
        error: null
    })
;
const getIndentAction = (0,redux_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_GET_INDENT */ .GS);
const stripePayAction = (0,redux_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_STRIPE_PAY */ .WW);
const createOrderAction = (0,redux_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_ORDER */ .jd);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_actions__WEBPACK_IMPORTED_MODULE_0__.handleActions)({
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestPending */ .CE)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_GET_INDENT */ .GS)]: (state)=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestPending */ .CE)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_GET_INDENT */ .GS)
        })
    ,
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestSuccess */ .pv)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_GET_INDENT */ .GS)]: (state, { payload  })=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestSuccess */ .pv)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_GET_INDENT */ .GS),
            payload
        })
    ,
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestFail */ .Sf)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_GET_INDENT */ .GS)]: (state, { payload  })=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestFail */ .Sf)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_GET_INDENT */ .GS),
            payload: null,
            error: payload
        })
    ,
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestPending */ .CE)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_STRIPE_PAY */ .WW)]: (state)=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestPending */ .CE)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_STRIPE_PAY */ .WW)
        })
    ,
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestSuccess */ .pv)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_STRIPE_PAY */ .WW)]: (state, { payload  })=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestSuccess */ .pv)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_STRIPE_PAY */ .WW),
            payload
        })
    ,
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestFail */ .Sf)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_STRIPE_PAY */ .WW)]: (state, { payload  })=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestFail */ .Sf)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_STRIPE_PAY */ .WW),
            payload: null,
            error: payload
        })
    ,
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestPending */ .CE)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_ORDER */ .jd)]: (state)=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestPending */ .CE)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_ORDER */ .jd)
        })
    ,
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestSuccess */ .pv)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_ORDER */ .jd)]: (state, { payload  })=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestSuccess */ .pv)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_ORDER */ .jd),
            payload
        })
    ,
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestFail */ .Sf)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_ORDER */ .jd)]: (state, { payload  })=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestFail */ .Sf)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_ORDER */ .jd),
            payload: null,
            error: payload
        })
}, getInitialState()));


/***/ })

};
;