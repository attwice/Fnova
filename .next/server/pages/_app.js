"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: external "@fortawesome/free-regular-svg-icons"
const free_regular_svg_icons_namespaceObject = require("@fortawesome/free-regular-svg-icons");
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(5368);
// EXTERNAL MODULE: ./src/components/FontButton/index.js + 1 modules
var FontButton = __webpack_require__(8244);
;// CONCATENATED MODULE: ./src/components/HeaderBar/index.js







const HeaderBar = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header-bar flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faPhoneAlt
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "tel:864-660-4023",
                                children: "864-660-4023"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_regular_svg_icons_namespaceObject.faEnvelope
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "mailto:help@stickercove.com",
                                children: "help@stickercove.com"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(FontButton/* default */.Z, {
                        to: "https://www.instagram.com/stickercove/",
                        icon: free_brands_svg_icons_.faInstagram
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FontButton/* default */.Z, {
                        to: "https://twitter.com/Sticker__Cove",
                        icon: free_brands_svg_icons_.faTwitter
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FontButton/* default */.Z, {
                        to: "https://www.facebook.com/StickerCove",
                        icon: free_brands_svg_icons_.faFacebookF
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_HeaderBar = (HeaderBar);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/constants/Routers.js
var Routers = __webpack_require__(6693);
// EXTERNAL MODULE: ./src/components/OrderButton/index.js
var OrderButton = __webpack_require__(1320);
;// CONCATENATED MODULE: ./src/components/Header/index.js








const LOGO = "/resources/images/logo/logo.webp";
const Header = ()=>{
    const { 0: collapsed , 1: setCollapsed  } = (0,external_react_.useState)(false);
    const { 0: active , 1: setActive  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const pathname = router.pathname;
    (0,external_react_.useEffect)(()=>{
        setActive(pathname);
    });
    router.listen = (location)=>{
        setCollapsed(false);
    };
    const handleClickLogo = ()=>{
        router.push(Routers/* default.HOME */.Z.HOME);
    };
    const handleOrder = ()=>{
        setCollapsed(!collapsed);
        router.push(Routers/* default.CUSTOM_STICKER */.Z.CUSTOM_STICKER);
    };
    const handleCollapse = ()=>{
        setCollapsed(!collapsed);
    };
    const generateHeaderNav = ()=>Routers/* NAVBAR_ROUTERS.map */.l.map((nav, index)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: active === nav.path ? "navbar-active" : "",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: nav.path,
                    onClick: ()=>setCollapsed(false)
                    ,
                    children: nav.title
                })
            }, index));
        })
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: LOGO,
                alt: "logo",
                "max-width": "250",
                "max-height": "90",
                onClick: handleClickLogo
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-nav flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-menus flex",
                        children: generateHeaderNav()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-order-now",
                        onClick: handleOrder,
                        children: "ORDER NOW"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-order-collapse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faBars,
                                onClick: handleCollapse
                            }),
                            collapsed && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "header-order-collapse-menu flex flex-column",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "header-order-collapse-menu-close flex",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                icon: free_solid_svg_icons_.faTimes,
                                                onClick: handleCollapse
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(OrderButton/* default */.Z, {
                                        title: "Order Now",
                                        onClick: handleOrder
                                    }),
                                    generateHeaderNav()
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./src/constants/DummyTexts.js
var DummyTexts = __webpack_require__(4305);
;// CONCATENATED MODULE: ./src/components/Footer/index.js




const Footer_LOGO = "/resources/images/logo/logo.webp";
const FOOTER = "/resources/images/main-footer.webp";
const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "main-footer-fill"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-footer-getapp flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: FOOTER,
                        "max-width": "1920",
                        "max-height": "150",
                        alt: "get order"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-footer-getapp-content flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "GET STARTED TODAY"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(OrderButton/* default */.Z, {
                                title: "ORDER NOW"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-footer flex",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-footer-info",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: Footer_LOGO,
                                "max-width": "270",
                                "max-height": "90",
                                alt: "logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: DummyTexts.TESTIMORIAL
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-footer-service flex flex-column",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "HELPFUL LINKS"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/terms-of-service",
                                children: "TERMS OF SERVICE"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/privacy-policy",
                                children: "PRIVACY POLICY"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/refund-policy",
                                children: "REFUND POLICY"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/help",
                                children: "CONTACT US"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/faq",
                                children: "FAQ"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-footer-information flex flex-column",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "INFORMATION"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: "Looking for additional help? Contact StickerCove today."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-footer-information-contacts",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            "Tel: ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:864-660-4023",
                                                children: "+1 864-660-4023"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            "Email:",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "mailto:help@stickercove.com",
                                                children: "help@stickercove.com"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex main-footer-location",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: "Location:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "655H Fairview Rd. Ste 109 Simpsonville, SC"
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
;
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/FooterBar/index.js

const FooterBar = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer-bar flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "Copyright \xa9 2021 Sticker Cove."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "All rights reserved"
            })
        ]
    })
;
/* harmony default export */ const components_FooterBar = (FooterBar);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux-logger"
const external_redux_logger_namespaceObject = require("redux-logger");
var external_redux_logger_default = /*#__PURE__*/__webpack_require__.n(external_redux_logger_namespaceObject);
;// CONCATENATED MODULE: external "redux-saga"
const external_redux_saga_namespaceObject = require("redux-saga");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
// EXTERNAL MODULE: ./src/redux/Reducers/Order.js
var Order = __webpack_require__(8641);
// EXTERNAL MODULE: ./src/redux/Reducers/Comment.js
var Comment = __webpack_require__(5055);
// EXTERNAL MODULE: ./src/constants/index.js
var constants = __webpack_require__(3135);
;// CONCATENATED MODULE: ./src/redux/Reducers/Checkout.js

var initialState = {
    phoneNumber: '',
    emailAddress: '',
    shippingFirstname: '',
    shippingLastname: '',
    shippingCompany: '',
    shippingStreetOne: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    billingEmail: '',
    billingStreetOne: '',
    billingStreetTwo: '',
    billingCity: '',
    billingState: '',
    billingShippingSame: false
};
/* harmony default export */ function Checkout(state = initialState, action) {
    switch(action.type){
        case constants/* CHANGE_PHONE_NUMBER */.fL:
            return {
                ...state,
                phoneNumber: action.payload
            };
        case constants/* CHANGE_EMAIL_ADDRESS */.Np:
            return {
                ...state,
                emailAddress: action.payload
            };
        case constants/* CHANGE_SHIPPING_FIRSTNAME */.sf:
            return {
                ...state,
                shippingFirstname: action.payload
            };
        case constants/* CHANGE_SHIPPING_LASTNAME */.fs:
            return {
                ...state,
                shippingLastname: action.payload
            };
        case constants/* CHANGE_SHIPPING_COMPANY */.$P:
            return {
                ...state,
                shippingCompany: action.payload
            };
        case constants/* CHANGE_SHIPPING_STREET_ONE */.kN:
            if (state.billingShippingSame) {
                return {
                    ...state,
                    shippingStreetOne: action.payload,
                    billingStreetOne: action.payload
                };
            }
            return {
                ...state,
                shippingStreetOne: action.payload
            };
        case constants/* CHANGE_SHIPPING_CITY */.cV:
            if (state.billingShippingSame) {
                return {
                    ...state,
                    shippingCity: action.payload,
                    billingCity: action.payload
                };
            }
            return {
                ...state,
                shippingCity: action.payload
            };
        case constants/* CHANGE_SHIPPING_STATE */.wk:
            if (state.billingShippingSame) {
                return {
                    ...state,
                    shippingState: action.payload,
                    billingState: action.payload
                };
            }
            return {
                ...state,
                shippingState: action.payload
            };
        case constants/* CHANGE_SHIPPPING_ZIP */._k:
            return {
                ...state,
                shippingZip: action.payload
            };
        case constants/* CHANGE_BILLING_EMAIL */.WU:
            return {
                ...state,
                billingEmail: action.payload
            };
        case constants/* CHANGE_BILLING_STREET_ONE */.yH:
            return {
                ...state,
                billingStreetOne: action.payload
            };
        case constants/* CHANGE_BILLING_STREET_TWO */.n5:
            return {
                ...state,
                billingStreetTwo: action.payload
            };
        case constants/* CHANGE_BILLING_CITY */.Ir:
            return {
                ...state,
                billingCity: action.payload
            };
        case constants/* CHANGE_BILLING_STATE */.Rt:
            return {
                ...state,
                billingState: action.payload
            };
        case constants/* BILLING_SHIPPING_SAME */.Zb:
            let billingStreetOne, billingCity, billingState;
            if (action.payload) {
                billingStreetOne = state.shippingStreetOne;
                billingCity = state.shippingCity;
                billingState = state.shippingState;
            } else {
                billingStreetOne = "";
                billingCity = "";
                billingState = "";
            }
            return {
                ...state,
                billingShippingSame: action.payload,
                billingStreetOne,
                billingCity,
                billingState
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/redux/Reducers/Abandon.js

var Abandon_initialState = {
    abandonUser: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        streetAddress: "",
        shippingCity: "",
        shippingStreet: "",
        shippingZip: "",
        date: ""
    }
};
/* harmony default export */ function Abandon(state = Abandon_initialState, action) {
    switch(action.type){
        case constants/* CHANGE_ABANDON_USER */.F7:
            return {
                ...state,
                abandonUser: action.payload
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/redux/AppReducers.js





const appReducers = (0,external_redux_namespaceObject.combineReducers)({
    order: Order/* default */.ZP,
    comment: Comment/* default */.Z,
    checkout: Checkout,
    abandon: Abandon
});
/* harmony default export */ const AppReducers = (appReducers);

;// CONCATENATED MODULE: external "redux-saga/effects"
const effects_namespaceObject = require("redux-saga/effects");
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./src/configuration/index.js
var configuration = __webpack_require__(3271);
// EXTERNAL MODULE: ./src/redux/ApiCaller/RequestStatus.js + 1 modules
var RequestStatus = __webpack_require__(1727);
;// CONCATENATED MODULE: ./src/redux/ApiCaller/index.js






const defaultHeaders = ()=>{
    const auth = localStorage.getItem(configuration/* APP_NAME */.iC);
    (external_axios_default()).defaults.baseURL = configuration/* API_ROOT */.O2;
    (external_axios_default()).defaults.timeout = configuration/* API_REQUEST_TIMEOUT */.cZ;
    let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    };
    if (auth) {
        const token = JSON.parse(auth).token;
        headers["Authorization"] = "Bearer " + token;
    }
    return headers;
};
const apiCaller = ({ type , method , path , headers , successSaga , failureSaga , payloadOnSuccess , payloadOnFailure  })=>function*(action) {
        const { body , header , params , onSuccess , onFailure  } = action.payload || {
        };
        try {
            yield (0,effects_namespaceObject.put)({
                type: (0,RequestStatus/* requestPending */.CE)(type)
            });
            // * Get response from server after AXIOS CALL
            const res = yield (0,effects_namespaceObject.call)((external_axios_default()).request, {
                url: typeof path === "function" ? path(action) : path,
                method: method.toLowerCase(),
                headers: Object.assign({
                }, defaultHeaders(), headers, header),
                data: body,
                params
            });
            // * Call callback functions of reducer & redux-saga
            onSuccess && onSuccess(res);
            successSaga && successSaga(res, action);
            // * Action dispatch
            yield (0,effects_namespaceObject.put)({
                type: (0,RequestStatus/* requestSuccess */.pv)(type),
                payload: payloadOnSuccess ? payloadOnSuccess(res.data, action) : res.data
            });
        } catch (err) {
            const errRes = (0,external_lodash_.get)(err, "response", err);
            onFailure && onFailure(errRes);
            failureSaga && failureSaga(errRes);
            yield (0,effects_namespaceObject.put)({
                type: (0,RequestStatus/* requestFail */.Sf)(type),
                payload: payloadOnFailure ? payloadOnFailure(errRes, action) : errRes
            });
        }
    }
;
/* harmony default export */ const ApiCaller = (apiCaller);

;// CONCATENATED MODULE: ./src/redux/Sagas/Order.js



const doGetIndent = ApiCaller({
    type: constants/* DO_GET_INDENT */.GS,
    method: "post",
    path: ()=>"/stripe"
});
const doStripePay = ApiCaller({
    type: constants/* DO_STRIPE_PAY */.WW,
    method: "get",
    path: ()=>"/stripe"
});
const doCreateOrder = ApiCaller({
    type: constants/* DO_CREATE_ORDER */.jd,
    method: "post",
    path: ()=>"/order"
});
function* rootSaga() {
    yield (0,effects_namespaceObject.takeLatest)(constants/* DO_GET_INDENT */.GS, doGetIndent);
    yield (0,effects_namespaceObject.takeLatest)(constants/* DO_STRIPE_PAY */.WW, doStripePay);
    yield (0,effects_namespaceObject.takeLatest)(constants/* DO_CREATE_ORDER */.jd, doCreateOrder);
};

;// CONCATENATED MODULE: external "@redux-saga/core/effects"
const core_effects_namespaceObject = require("@redux-saga/core/effects");
;// CONCATENATED MODULE: ./src/redux/Sagas/Comment.js



const doCreateComment = ApiCaller({
    type: constants/* DO_CREATE_COMMENT */.Dj,
    method: "post",
    path: ()=>"/comment"
});
function* Comment_rootSaga() {
    yield (0,core_effects_namespaceObject.takeLatest)(constants/* DO_CREATE_COMMENT */.Dj, doCreateComment);
};

;// CONCATENATED MODULE: ./src/redux/Sagas/index.js



const appSaga = function*() {
    yield (0,effects_namespaceObject.all)([
        rootSaga(),
        Comment_rootSaga()
    ]);
};
/* harmony default export */ const Sagas = (appSaga);

;// CONCATENATED MODULE: ./src/redux/ConfigureStore.js


 // defaults to localStorage for web




const ConfigureStore_initialState = {
};
const enhancers = [];
const persistConfig = {
    key: 'root',
    storage: (storage_default())
};
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, AppReducers);
const sagaMiddleware = external_redux_saga_default()();
const middleware = [
    sagaMiddleware,
    (external_redux_logger_default())
];
const composedEnhancers = (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middleware), ...enhancers);
const store = (0,external_redux_namespaceObject.createStore)(persistedReducer, ConfigureStore_initialState, composedEnhancers);
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
sagaMiddleware.run(Sagas);

;// CONCATENATED MODULE: ./pages/_app.js









function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "https://www.googletagmanager.com/gtag/js?id=AW-314966559"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9mxZ7IdcEup9vC5on0sXx-PpMnSo9Gwc&libraries=places"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                type: "text/javascript",
                src: "./tawk.js"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.PersistGate, {
                loading: null,
                persistor: persistor,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_HeaderBar, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_FooterBar, {
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_FontButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-ripples"
const external_react_ripples_namespaceObject = require("react-ripples");
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
;// CONCATENATED MODULE: ./src/components/FontButton/index.js




const Ripples = (0,external_react_ripples_namespaceObject.createRipples)({
    during: 1500
});
const FontButton = ({ to , icon  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "font-button-wrapper flex",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Ripples, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "font-button flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: {
                        pathname: to
                    },
                    target: "_blank",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: icon
                    })
                })
            })
        })
    })
;
/* harmony default export */ const components_FontButton = (FontButton);


/***/ }),

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

/***/ 5368:
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4984:
/***/ ((module) => {

module.exports = require("redux-actions");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [628,664,303,840,55,261], () => (__webpack_exec__(9724)));
module.exports = __webpack_exports__;

})();