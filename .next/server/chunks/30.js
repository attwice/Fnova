"use strict";
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 2030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Dashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/OrderButton/index.js
var OrderButton = __webpack_require__(1320);
;// CONCATENATED MODULE: ./src/components/Dashboard/MainBanner/index.js


const MAINBANNERSTICKER = "/resources/images/main-banner-stickers.webp";
const MainBanner = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "main-banner flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-banner-texts flex flex-column",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-banner-title flex",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "",
                            children: [
                                "Create your own",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "main-banner-gold",
                                    children: "Custom Stickers"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                }),
                                "today!"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-banner-comments",
                        children: "Easy ordering process, 4 day turnaround, and free online proofs. Proudly made in the USA."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-banner-order flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(OrderButton/* default */.Z, {
                            cname: "main-banner-order-now",
                            title: "ORDER NOW"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "main-banner-sticker-img",
                src: MAINBANNERSTICKER,
                alt: "main banner"
            })
        ]
    })
;
/* harmony default export */ const Dashboard_MainBanner = (MainBanner);

// EXTERNAL MODULE: ./src/components/StickerCategory/index.js
var StickerCategory = __webpack_require__(1352);
// EXTERNAL MODULE: ./src/components/Order/OrderCard/index.js
var OrderCard = __webpack_require__(7722);
;// CONCATENATED MODULE: ./src/components/Dashboard/MainOptions/index.js



const Kisscut = "/resources/images/sticker-images/KISSCUT.webp";
const Circle = "/resources/images/sticker-images/CIRCLE.webp";
const Rectangle = "/resources/images/sticker-images/RECTANGLE.webp";
const Square = "/resources/images/sticker-images/SQUARE.webp";
const Diecut = "/resources/images/sticker-images/DIECUT.webp";
const Oval = "/resources/images/sticker-images/OVAL.webp";
const Bumper = "/resources/images/sticker-images/BUMPER.webp";
const Rounded = "/resources/images/sticker-images/ROUNDED.webp";
const MainOptions = ({ handleOrder , handleNext  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "main-options flex flex-column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "withStrike"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Our",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                    }),
                    "Sticker Categories",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Select your sticker type to get started!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-options-items flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(StickerCategory/* default */.Z, {
                        className: "homepage-option",
                        image: Diecut,
                        title: "Die Cut Stickers",
                        comment: "Click above to start your order. Both backing and sticker cut to shape.",
                        onClick: ()=>handleOrder("Die cut stickers")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StickerCategory/* default */.Z, {
                        className: "homepage-option",
                        image: Kisscut,
                        title: "Kiss cut stickers",
                        route: true,
                        comment: "Click above to start your order. Cut to shape with a square backing.",
                        onClick: ()=>handleOrder("Kiss cut stickers")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StickerCategory/* default */.Z, {
                        className: "homepage-option",
                        image: Circle,
                        title: "Circle stickers",
                        comment: "Click above to start your order. Stickers in the shape of a circle.",
                        onClick: ()=>handleOrder("Circle stickers")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StickerCategory/* default */.Z, {
                        className: "homepage-option",
                        image: Rectangle,
                        title: "Rectangle stickers",
                        comment: "Click above to start your order. Cut into a rectangle shape.",
                        onClick: ()=>handleOrder("Rectangle stickers")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StickerCategory/* default */.Z, {
                        className: "homepage-option",
                        image: Square,
                        title: "Square stickers",
                        comment: "Click above to start your order. Stickers in the shape of a square.",
                        onClick: ()=>handleOrder("Square stickers")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StickerCategory/* default */.Z, {
                        className: "homepage-option",
                        image: Oval,
                        title: "Oval stickers",
                        comment: "Click above to start your order. Stickers in the shape of an oval.",
                        onClick: ()=>handleOrder("Oval stickers")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StickerCategory/* default */.Z, {
                        className: "homepage-option",
                        image: Rounded,
                        title: "Rounded stickers",
                        comment: "Click above to start your order. Stickers with rounded corners.",
                        onClick: ()=>handleOrder("Rounded stickers")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StickerCategory/* default */.Z, {
                        className: "homepage-option",
                        image: Bumper,
                        title: "Bumper stickers",
                        comment: "Click above to start your order. Stickers designed for your vehicle.",
                        onClick: ()=>handleOrder("Bumper stickers")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "main-options-more",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main-options-more-button",
                    onClick: ()=>handleNext()
                    ,
                    children: "VIEW MORE"
                })
            })
        ]
    })
;
/* harmony default export */ const Dashboard_MainOptions = (MainOptions);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Dashboard/MainProcessSteps/index.js
var MainProcessSteps = __webpack_require__(7525);
;// CONCATENATED MODULE: ./src/constants/ProcessSteps.js
const STEP1 = "/resources/images/process/main-process-step1.webp";
const STEP2 = "/resources/images/process/main-process-step2.webp";
const STEP3 = "/resources/images/process/main-process-step3.webp";
const STEP4 = "/resources/images/process/main-process-step4.webp";
const MOBILESTEP1 = "/resources/images/process/main-process-mobile-step1.webp";
const MOBILESTEP2 = "/resources/images/process/main-process-mobile-step2.webp";
const MOBILESTEP3 = "/resources/images/process/main-process-mobile-step3.webp";
const MOBILESTEP4 = "/resources/images/process/main-process-mobile-step4.webp";
const StepsOnMobile = [
    {
        image: MOBILESTEP1,
        title: "01",
        comment: "Select your product and upload your artwork."
    },
    {
        image: MOBILESTEP2,
        title: "02",
        comment: "We'll send you a digital proof shortly after purchase for your approval."
    },
    {
        image: MOBILESTEP3,
        title: "03",
        comment: "After proof approval your stickers will be ready within 3-4 business days unless noted otherwise."
    },
    {
        image: MOBILESTEP4,
        title: "04",
        comment: "Need it fast? We have rush options available at checkout!"
    }, 
];
const Steps = [
    {
        image: STEP1,
        title: "01",
        comment: "Select your product and upload your artwork."
    },
    {
        image: STEP2,
        title: "02",
        comment: "We'll send you a digital proof shortly after purchase for your approval."
    },
    {
        image: STEP3,
        title: "03",
        comment: "After proof approval your stickers will be ready within 3-4 business days unless noted otherwise."
    },
    {
        image: STEP4,
        title: "04",
        comment: "Need it fast? We have rush options available at checkout!"
    }, 
];
/* harmony default export */ const ProcessSteps = (Steps);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/components/Dashboard/MainProcess/index.js






const generateSteps = (width)=>{
    if (width > 1200) {
        return ProcessSteps.map((step, index)=>/*#__PURE__*/ jsx_runtime_.jsx(MainProcessSteps/* default */.Z, {
                image: step.image,
                title: step.title,
                comment: step.comment
            }, index)
        );
    } else {
        return StepsOnMobile.map((step, index)=>/*#__PURE__*/ jsx_runtime_.jsx(MainProcessSteps/* default */.Z, {
                image: step.image,
                title: step.title,
                comment: step.comment
            }, index)
        );
    }
};
const MainProcess = ()=>{
    const { 0: width , 1: setWidth  } = (0,external_react_.useState)(0);
    const updateSize = ()=>{
        setWidth(window.innerWidth);
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("resize", updateSize);
    }, []);
    (0,external_react_.useEffect)(()=>{
        updateSize();
    }, [
        width
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "main-process flex flex-column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "withStrike"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "main-title",
                children: [
                    "Our",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                    }),
                    "Order Process",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Here's how our order process goes!"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "main-process-step",
                children: generateSteps(width)
            })
        ]
    }));
};
/* harmony default export */ const Dashboard_MainProcess = (MainProcess);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
;// CONCATENATED MODULE: ./src/components/Testimoral/index.js



const Testimoral_Testimoral = ({ comment , avatar , name , role  })=>/*#__PURE__*/ _jsxs("div", {
        className: "testimoral-item flex flex-column",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "flex flex-column",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "testimoral-item-rating flex",
                        children: [
                            /*#__PURE__*/ _jsx(FontAwesomeIcon, {
                                icon: faStar
                            }),
                            /*#__PURE__*/ _jsx(FontAwesomeIcon, {
                                icon: faStar
                            }),
                            /*#__PURE__*/ _jsx(FontAwesomeIcon, {
                                icon: faStar
                            }),
                            /*#__PURE__*/ _jsx(FontAwesomeIcon, {
                                icon: faStar
                            }),
                            /*#__PURE__*/ _jsx(FontAwesomeIcon, {
                                icon: faStar
                            }),
                            "(5.0 Rating)"
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "testimoral-item-comment",
                        children: comment
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "testimoral-item-customer flex",
                children: [
                    /*#__PURE__*/ _jsx("img", {
                        src: avatar,
                        alt: "customer avatar"
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "testimoral-item-customer-info flex flex-column",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: name
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                children: role
                            })
                        ]
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const components_Testimoral = ((/* unused pure expression or super */ null && (Testimoral_Testimoral)));

// EXTERNAL MODULE: ./src/constants/DummyTexts.js
var DummyTexts = __webpack_require__(4305);
;// CONCATENATED MODULE: ./src/components/Dashboard/MainTestimoral/index.js



const AVATAR = "/resources/images/avatar/avatar.jpg";
const JOSEPH = "/resources/images/avatar/joseph.webp";
const MainTestimoral = ()=>/*#__PURE__*/ _jsxs("div", {
        className: "main-testimoral",
        children: [
            /*#__PURE__*/ _jsx("p", {
                children: "WHAT OUR CUSTOMERS ARE SAYING"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "main-testimoral-slide flex",
                children: [
                    /*#__PURE__*/ _jsx(Testimoral, {
                        comment: REVIEW_1,
                        avatar: JOSEPH,
                        name: "JOSEPH DINGMAN",
                        role: "General Customer"
                    }),
                    /*#__PURE__*/ _jsx(Testimoral, {
                        comment: REVIEW_2,
                        avatar: AVATAR,
                        name: "ERIC RUBIO",
                        role: "General Customer"
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const Dashboard_MainTestimoral = ((/* unused pure expression or super */ null && (MainTestimoral)));

;// CONCATENATED MODULE: ./src/components/Dashboard/MainEthics/index.js


const PORTRAIT1 = "/resources/images/sliders/slider-1.webp";
const PORTRAIT2 = "/resources/images/sliders/slider-2.webp";
const PORTRAIT3 = "/resources/images/sliders/slider-3.webp";
const portraits = [
    PORTRAIT1,
    PORTRAIT2,
    PORTRAIT3
];
const MainEthics = ()=>{
    const { 0: curPortrait , 1: setCurPortrait  } = (0,external_react_.useState)(0);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "main-ethics flex flex-column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "withStrike"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Our",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                    }),
                    "Past Work",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "We can produce your desired stickers today!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-ethics-portrait flex",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-ethics-portrait-pagination flex flex-column",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: curPortrait == 0 ? "active" : "",
                                onClick: ()=>setCurPortrait(0)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: curPortrait == 1 ? "active" : "",
                                onClick: ()=>setCurPortrait(1)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: curPortrait == 2 ? "active" : "",
                                onClick: ()=>setCurPortrait(2)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-ethics-portrait-image",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: curPortrait == 0 ? "active" : "deactive",
                                src: portraits[curPortrait],
                                "max-width": "760",
                                "max-height": "530"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: curPortrait == 1 ? "active" : "deactive",
                                src: portraits[curPortrait],
                                "max-width": "760",
                                "max-height": "530"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: curPortrait == 2 ? "active" : "deactive",
                                src: portraits[curPortrait],
                                "max-width": "760",
                                "max-height": "530"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-ethics-portrait-pagination slider-mobile flex flex-column",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: curPortrait == 0 ? "active" : "",
                                onClick: ()=>setCurPortrait(0)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: curPortrait == 1 ? "active" : "",
                                onClick: ()=>setCurPortrait(1)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: curPortrait == 2 ? "active" : "",
                                onClick: ()=>setCurPortrait(2)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "main-ethics-portrait-info",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "main-ethics-portrait-info-title",
                                children: "Perfect Stickers!"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "main-ethics-portrait-info-text",
                                children: "Order your perfect stickers today with exact color matching, precision cutting, and free shipping! All of our stickers are proudly made in the USA."
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Dashboard_MainEthics = (MainEthics);

// EXTERNAL MODULE: ./src/components/Review/index.js + 1 modules
var Review = __webpack_require__(6413);
;// CONCATENATED MODULE: ./src/components/Dashboard/index.js









const Dashboard = ({ handleOrder , handleNext  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Dashboard_MainBanner, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Dashboard_MainOptions, {
                handleOrder: handleOrder,
                handleNext: handleNext
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Dashboard_MainProcess, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Dashboard_MainEthics, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-word flex flex-column",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "withStrike"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Our",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            }),
                            "Previous Customers",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Listen to what our previous customers have to say about their stickers!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Review/* default */.Z, {
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const components_Dashboard = (Dashboard);

// EXTERNAL MODULE: ./src/constants/Routers.js
var Routers = __webpack_require__(6693);
// EXTERNAL MODULE: ./src/helpers/StoreOrder.js
var StoreOrder = __webpack_require__(4658);
;// CONCATENATED MODULE: ./src/containers/Dashboard/index.js






const Dashboard_Dashboard = ()=>{
    const router = (0,router_.useRouter)();
    const handleOrder = (title)=>{
        const orderId = (0,StoreOrder/* createOrder */.LV)(title);
        const route = title.toLowerCase().replaceAll(" ", "-");
        router.push(`${Routers/* default.CHOOSE_SIZE_QUANTITY */.Z.CHOOSE_SIZE_QUANTITY}/${route}/${orderId}`);
    // router.push(ROUTERS.CUSTOM_STICKER)
    };
    const handleNext = ()=>{
        router.push(Routers/* default.CUSTOM_STICKER */.Z.CUSTOM_STICKER);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_Dashboard, {
        handleOrder: handleOrder,
        handleNext: handleNext
    }));
};
/* harmony default export */ const containers_Dashboard = (Dashboard_Dashboard);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/Dashboard/index.js



const pages_Dashboard_Dashboard = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "StickerCove | Order Custom Stickers Today | Delivered In 48 Hours"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Sticker covers for you"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(containers_Dashboard, {
            })
        ]
    }));
};
/* harmony default export */ const pages_Dashboard = (pages_Dashboard_Dashboard);


/***/ })

};
;