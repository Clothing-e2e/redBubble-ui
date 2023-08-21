"use strict";
exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 5683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Button_Button)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/icons/loader.png
/* harmony default export */ const loader = ({"src":"/_next/static/media/loader.3b1bd1f3.png","height":120,"width":120,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAgUlEQVR42h2MPQrCYBBEp/jusidwj2lr4Q9os41NYBRRSGOTRkERBW1s0gSUQCApN5s0j3mvGDh2k4xbM1tzpQ6c9MBMHI6NzLlQ5MxD92mZHDOZEmdzHEMcRbA0FBHuY2gHGq68iOOZ/qGdtMRNH/yMp5XUbDTGS9/8WmkVf+roAUn2RySAMm2IAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/components/Button/Button.js



const Loader = ()=>/*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: loader,
        width: 30,
        height: 30,
        alt: "Loader",
        className: "animate-spin"
    });
/**
 * @description Button component
 * @param {string} text - Button text
 * @param {function} onClick - onClick handler for button
 * @param {boolean} isLoading - Button loading state
 * @param {boolean} isDisabled - Button disabled state
 */ const Button = ({ text, onClick, isLoading = false, isDisabled = false })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: `
                w-[300px] 
                h-[50px] 
                ${isDisabled ? "bg-slate-600 cursor-not-allowed" : "bg-slate-900 hover:bg-slate-800"} 
                text-white 
                rounded-md 
                text-center 
                mt-4 
                flex 
                justify-center 
                items-center
            `,
        onClick: onClick,
        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(Loader, {}) : text
    });
};
/* harmony default export */ const Button_Button = (Button);


/***/ })

};
;