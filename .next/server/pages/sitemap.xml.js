"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 2773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sitemap_xml),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "next-sitemap"
const external_next_sitemap_namespaceObject = require("next-sitemap");
;// CONCATENATED MODULE: ./pages/sitemap.xml/index.js
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */ /* eslint-disable @typescript-eslint/no-empty-function */ 
const getServerSideProps = async (ctx)=>{
    // Method to source urls from cms
    // const urls = await fetch('https//example.com/api')
    return (0,external_next_sitemap_namespaceObject.getServerSideSitemap)(ctx, [
        {
            loc: 'https://www.stickercove.com',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/custom-sticker',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/products/die-cut-stickers',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/upload-sticker',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/cart',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/checkout',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/success',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/FAQ',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/help',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/status',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/terms-of-service',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/privacy-policy',
            lastmod: new Date().toISOString()
        },
        {
            loc: 'https://www.stickercove.com/refund-policy',
            lastmod: new Date().toISOString()
        }, 
    ]);
};
// Default export to prevent next.js errors
/* harmony default export */ const sitemap_xml = (()=>{
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2773));
module.exports = __webpack_exports__;

})();