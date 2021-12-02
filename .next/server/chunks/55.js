"use strict";
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 5055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ crateCommentAction),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
const crateCommentAction = (0,redux_actions__WEBPACK_IMPORTED_MODULE_0__.createAction)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_COMMENT */ .Dj);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_actions__WEBPACK_IMPORTED_MODULE_0__.handleActions)({
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestPending */ .CE)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_COMMENT */ .Dj)]: (state)=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestPending */ .CE)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_COMMENT */ .Dj)
        })
    ,
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestSuccess */ .pv)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_COMMENT */ .Dj)]: (state, { payload  })=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestSuccess */ .pv)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_COMMENT */ .Dj),
            payload
        })
    ,
    [(0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestFail */ .Sf)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_COMMENT */ .Dj)]: (state, { payload  })=>({
            ...state,
            status: (0,redux_ApiCaller_RequestStatus__WEBPACK_IMPORTED_MODULE_2__/* .requestFail */ .Sf)(constants_index__WEBPACK_IMPORTED_MODULE_1__/* .DO_CREATE_COMMENT */ .Dj),
            payload: null,
            error: payload
        })
}, getInitialState()));


/***/ })

};
;