exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 6739:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8262, 23))

/***/ }),

/***/ 3628:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7230, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5453));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5345));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1332))

/***/ }),

/***/ 5144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Accordian_Accordian)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/icons/arrow.png
/* harmony default export */ const arrow = ({"src":"/_next/static/media/arrow.702ac7e2.png","height":120,"width":120,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAOUlEQVR42mMAAnYGLiAGk2AuEIIBjM3FgAAgHlhelYGNgQVIAnlgBORqMWiDWAgtbEAI1oJhKIa1AGwGAZ+yIfyhAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/components/Accordian/Accordian.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Accordian({ title, children, size = "small", isNested = false, isOpen = false }) {
    const [isActive, setIsActive] = (0,react_.useState)(isOpen);
    const handleClick = ()=>{
        setIsActive((prev)=>!prev);
    };
    const textSize = size === "small" ? "text-xs" : "text-sm";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `w-full ${!isNested ? "border-b border-slate-200 p-4" : "p-1"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex items-center justify-between py-2 cursor-pointer`,
                onClick: handleClick,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: textSize,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${isActive ? "transform rotate-180" : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: arrow,
                            width: 20,
                            height: 20,
                            alt: "Arrow"
                        })
                    })
                ]
            }),
            isActive && children
        ]
    });
}
/* harmony default export */ const Accordian_Accordian = (Accordian);


/***/ }),

/***/ 1332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Cart_Cart)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./app/store/store.js + 2 modules
var store = __webpack_require__(9794);
// EXTERNAL MODULE: ./app/components/Sidebar/Wrapper.js + 1 modules
var Wrapper = __webpack_require__(8158);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./app/icons/add.png
var add = __webpack_require__(5917);
// EXTERNAL MODULE: ./app/icons/minus.png
var minus = __webpack_require__(9197);
;// CONCATENATED MODULE: ./app/components/Counter/Counter.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Counter = ({ initialCount = 0, onChange = null, data = null })=>{
    const [count, setCount] = (0,react_.useState)(initialCount);
    (0,react_.useEffect)(()=>{
        setCount(initialCount);
    }, [
        initialCount
    ]);
    const handleIncrement = ()=>{
        if (onChange) {
            onChange(data.id, count + 1, data.size);
            setCount((value)=>value + 1);
        } else {
            setCount((value)=>value + 1);
        }
    };
    const handleDecrement = ()=>{
        if (onChange) {
            onChange(data.id, count - 1, data.size);
            setCount((value)=>value - 1);
        } else {
            setCount((value)=>value - 1);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex gap-4 text-sm items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: handleDecrement,
                className: "cursor-pointer h-2 flex items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: minus/* default */.Z,
                    width: 10,
                    height: 2
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "font-sans",
                children: count
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: handleIncrement,
                className: "cursor-pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: add/* default */.Z,
                    width: 10,
                    height: 10
                })
            })
        ]
    });
};
/* harmony default export */ const Counter_Counter = (Counter);

// EXTERNAL MODULE: ./app/utils/utils.js
var utils = __webpack_require__(2913);
;// CONCATENATED MODULE: ./app/icons/emptyCart.png
/* harmony default export */ const emptyCart = ({"src":"/_next/static/media/emptyCart.03e529c6.png","height":900,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAAAAADbboAnAAAAOElEQVR42h3JuwkAIRRFwdd/c9vAKpj6AUFBA71HMZ0xJDbIxMjla5jUfQgbE939+dWMqV5BAIsD4H0uS4fUMAsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./app/components/Cart/Cart.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







const { isArrayEmpty } = utils["default"];
/**
 * @description Cart sidebar
 * @returns
 */ function Cart() {
    const router = (0,navigation.useRouter)();
    const isCartVisible = (0,store/* default */.Z)((state)=>state.isCartVisible);
    const hideCart = (0,store/* default */.Z)((state)=>state.hideCart);
    const cartItems = (0,store/* default */.Z)((state)=>state.cart);
    const updateCart = (0,store/* default */.Z)((state)=>state.updateCart);
    const handleCheckout = ()=>{
        router.push("/checkout");
        hideCart();
    };
    const subTotal = cartItems.reduce((acc, curr)=>acc + curr.price * curr.quantity, 0).toFixed(2);
    return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper/* default */.Z, {
        showLayover: true,
        isOpen: isCartVisible,
        onClose: hideCart,
        title: "CART",
        children: isArrayEmpty(cartItems) ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex items-center w-[100%] h-[calc(100vh-77px)]",
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: emptyCart,
                width: 350,
                height: 350,
                alt: "Empty Cart"
            })
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "p-2 px-4 overflow-y-scroll h-[calc(100vh-238px)]",
                    children: cartItems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex gap-2 py-4 hover:bg-slate-50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: `http://localhost:8080/images/${item.imagesId[0]}`,
                                        width: 100,
                                        height: 100,
                                        alt: "Product Image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col gap-2 ml-4 grow mr-4 justify-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-sm",
                                            children: item.heading
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text-xs pt-2 pb-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-medium",
                                                    children: "Color:"
                                                }),
                                                ` ${item.color}`
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text-xs pb-2 pt-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-medium",
                                                    children: "Size:"
                                                }),
                                                ` ${item.size}`
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Counter_Counter, {
                                                    initialCount: Number(item.quantity),
                                                    data: item,
                                                    onChange: updateCart
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-xs font-semibold",
                                                    children: `Rs. ${item.price}`
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, index))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "absolute bottom-0 right-0 w-[100%] bg-white p-4 border-t",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "py-4 px-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between mx-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xs",
                                        children: "SUBTOTAL"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xs",
                                        children: `Rs. ${subTotal}`
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "py-4 mx-2 my-1 text-sm bg-slate-800 hover:bg-slate-700 cursor-pointer text-white rounded-md text-center",
                            onClick: handleCheckout,
                            children: "PROCEED TO CHECKOUT"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center pt-1 text-xs text-slate-500",
                            children: "Shipping & taxes calculated at checkout."
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Cart_Cart = (Cart);


/***/ }),

/***/ 5345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/icons/navbar.png
/* harmony default export */ const navbar = ({"src":"/_next/static/media/navbar.d9d6d51d.png","height":120,"width":120,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAJUlEQVR42mNgqEeDhAALA0MQGAYyBDBEMCgwMGAKYGpBB+jWAgA2mAwXhU0mhAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/icons/shop.png
/* harmony default export */ const shop = ({"src":"/_next/static/media/shop.ca6b1714.png","height":120,"width":120,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATUlEQVR42mXIwQnAIBQE0YGAraQWMSDkZiwlBHJII7EPe3P5Ch7cOb3FFvhU6Ni5qByqkiV+Ip5TeaLEzZzpBRybcpiW42HOVEjkUaI0KMEPQKbky/8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/icons/profile.png
/* harmony default export */ const profile = ({"src":"/_next/static/media/profile.3c17b092.png","height":120,"width":120,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAATklEQVR42h3HoQ2AMBAAwEvYoWvADBh2YAgCjmIBU1OH7ap8mlPHgNUXVvokBRQJSCqoEgxYXGGhD5MnTAC71xgeB8w2AJuZU5PdIWvyD13oDzBkTMzkAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./app/components/Sidebar/Wrapper.js + 1 modules
var Wrapper = __webpack_require__(8158);
// EXTERNAL MODULE: ./app/components/Accordian/Accordian.js + 1 modules
var Accordian = __webpack_require__(5144);
;// CONCATENATED MODULE: ./app/components/Sidebar/config.js
const SIDEBAR_CATEGORIES = [
    {
        name: "T-shirts",
        link: "/tshirts"
    },
    {
        name: "Shirts",
        link: "/shirts"
    },
    {
        name: "Jeans",
        link: "/jeans"
    },
    {
        name: "Hoodies",
        link: "/hoodies"
    },
    {
        name: "View all",
        link: "/all"
    }
];
const constants = {
    SIDEBAR_CATEGORIES
};
/* harmony default export */ const config = (constants);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./app/store/store.js + 2 modules
var store = __webpack_require__(9794);
;// CONCATENATED MODULE: ./app/components/Sidebar/Shop.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




const { SIDEBAR_CATEGORIES: Shop_SIDEBAR_CATEGORIES } = config;
function Shop({ onClose }) {
    const router = (0,navigation.useRouter)();
    const clearAllFilters = (0,store/* default */.Z)((state)=>state.clearAllFilters);
    const handleClick = (link)=>{
        clearAllFilters();
        router.push(link);
        onClose();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Accordian/* default */.Z, {
        title: "SHOP",
        size: "large",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "px-2",
            children: Shop_SIDEBAR_CATEGORIES.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-xs pl-1 py-1.5 cursor-pointer",
                    onClick: ()=>handleClick(item.link),
                    children: item.name
                }, index))
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/Sidebar/Sidebar.js




function Sidebar({ isOpen, close }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper/* default */.Z, {
        onClose: close,
        isOpen: isOpen,
        direction: "left",
        showLayover: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "px-4 divide-y overflow-y-auto h-[calc(100vh-77px)]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    onClick: close,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "p-4 pb-6 pt-6 hover:backdrop-brightness-90 flex text-sm cursor-pointer",
                        children: "HOME"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer",
                    children: "NEW ARRIVALS"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Shop, {
                    onClose: close
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer",
                    children: "TRACK ORDER"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "p-4 pb-6 pt-6 hover:backdrop-brightness-95 flex text-sm cursor-pointer",
                    children: "RETURN REQUEST"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./app/icons/logo.png
var logo = __webpack_require__(5453);
;// CONCATENATED MODULE: ./app/components/Header/Header.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









function Header() {
    const [showSidebar, setShowSidebar] = (0,react_.useState)(false);
    const showCart = (0,store/* default */.Z)((state)=>state.showCart);
    const cartItems = (0,store/* default */.Z)((state)=>state.cart);
    const isCartEmpty = cartItems.length === 0;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row w-[100vw] px-4 md:px-8 lg:px-20 py-4 justify-between sticky top-0 bg-white items-center z-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cursor-pointer",
                        onClick: ()=>setShowSidebar(true),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: navbar,
                            alt: "Navigation button",
                            width: 20,
                            height: 20
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo["default"],
                                alt: "App Logo",
                                className: "h-[40px] w-[55px] sm:h-[60px] sm:w-[82px]"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mr-5 cursor-pointer relative",
                            onClick: showCart,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: shop,
                                    alt: "Cart button",
                                    width: 20,
                                    height: 20
                                }),
                                !isCartEmpty && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-[18px] h-[18px] absolute bg-red-400 rounded-full -bottom-2.5 -right-2.5 text-xs text-white flex items-center justify-center font-sans",
                                    children: cartItems.length
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                isOpen: showSidebar,
                close: ()=>setShowSidebar(false)
            })
        ]
    });
}


/***/ }),

/***/ 8158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Sidebar_Wrapper)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./app/icons/Close.png
/* harmony default export */ const Close = ({"src":"/_next/static/media/Close.99d24883.png","height":21,"width":20,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAUklEQVR42jWHwQ2AIBTFGmEG7yayAwuwgks4C8EzXrm7oo3ENnn/F04CsCgEi4PKT7WkcCNuQSKQuTTPit95dH6yMth0+EmisyNut2g4RIVEewEi1QxZcO7MtgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/components/Sidebar/Wrapper.js



function Wrapper({ children, direction = "right", isOpen, onClose, showLayover = true, title = null }) {
    const classNames = {
        left: `fixed top-0 left-0 w-full sm:w-1/2 lg:w-1/4 bg-white shadow text-black h-[100vh] z-40 ease-in-out duration-300 ${isOpen ? "translate-x-0 " : "-translate-x-full"} flex flex-col overflow-y-scroll`,
        right: `fixed inset-y-0 right-0 z-50 w-full sm:w-1/2 lg:w-1/4 bg-white shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isOpen && showLayover && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed top-0 left-0 w-full h-full bg-slate-500 opacity-50 z-40",
                onClick: onClose
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classNames[direction],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `flex justify-between items-center py-6 mb-1 px-2 ${title && "border-b"} mx-4`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `text-xl ${!title && "invisible"}`,
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "cursor-pointer",
                                onClick: onClose,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: Close,
                                    alt: "Close Sidebar button",
                                    width: 12,
                                    height: 12
                                })
                            })
                        ]
                    }),
                    children
                ]
            })
        ]
    });
}
/* harmony default export */ const Sidebar_Wrapper = (Wrapper);


/***/ }),

/***/ 9794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ store_store)
});

// EXTERNAL MODULE: ./node_modules/zustand/esm/index.mjs + 1 modules
var esm = __webpack_require__(3998);
// EXTERNAL MODULE: ./app/utils/utils.js
var utils = __webpack_require__(2913);
;// CONCATENATED MODULE: ./app/store/slices/cartSlice.js

const { ensureArray } = utils["default"];
const removeItem = (state, id, size)=>({
        cart: state.cart.reduce((acc, current)=>{
            if (current.id === id && current.size === size) return acc;
            acc.push(current);
            return acc;
        }, [])
    });
const updateItem = (state, id, quantity, size)=>state.cart.map((item)=>{
        if (item.id === id && item.size === size) {
            return {
                ...item,
                quantity
            };
        }
        return item;
    });
const checkDuplicates = (prevData, newData)=>{
    let isNewDataAdded = false;
    const result = ensureArray(prevData).reduce((acc, current)=>{
        if (current.id === newData.id && current.size === newData.size) {
            isNewDataAdded = true;
            acc.push({
                ...current,
                quantity: current.quantity + newData.quantity
            });
        } else {
            acc.push(current);
        }
        return acc;
    }, []);
    if (!isNewDataAdded) {
        return [
            ...result,
            newData
        ];
    }
    return result;
};
/**
 * @description Slice for cart functionality
 * @param {function} set - state setter
 */ const cartSlice = (set)=>({
        cart: [],
        isCartVisible: false,
        addToCart: (data)=>set((state)=>({
                    cart: checkDuplicates(state.cart, data),
                    isCartVisible: true
                })),
        removeFromCart: (id, size)=>set((state)=>removeItem(state, id, size)),
        updateCart: (id, quantity, size)=>{
            if (quantity === 0) return set((state)=>removeItem(state, id, size));
            return set((state)=>({
                    cart: updateItem(state, id, quantity, size)
                }));
        },
        clearCart: ()=>set({
                cart: []
            }),
        showCart: ()=>set({
                isCartVisible: true
            }),
        hideCart: ()=>set({
                isCartVisible: false
            }),
        addAndCheckout: (data)=>set((state)=>({
                    cart: checkDuplicates(state.cart, data)
                }))
    });
/* harmony default export */ const slices_cartSlice = (cartSlice);

;// CONCATENATED MODULE: ./app/store/slices/filterSlice.js
const defaultFilters = {};
const filterSlice = (set)=>({
        filters: defaultFilters,
        size: 100,
        page: 0,
        sort: "createdOn,asc",
        setSort: (value)=>set({
                sort: value
            }),
        setFilters: (value)=>set({
                filters: value
            }),
        clearFilters: ()=>set({
                filters: defaultFilters
            }),
        setCategory: (category)=>set((state)=>({
                    filters: {
                        ...state,
                        category
                    }
                })),
        clearAllFilters: ()=>set({
                filters: {},
                sort: "createdOn,asc"
            })
    });
/* harmony default export */ const slices_filterSlice = (filterSlice);

;// CONCATENATED MODULE: ./app/store/store.js



const store = (...params)=>({
        ...slices_cartSlice(...params),
        ...slices_filterSlice(...params)
    });
const useStore = (0,esm/* create */.Ue)(store);
/* harmony default export */ const store_store = (useStore);


/***/ }),

/***/ 2913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isObject = (obj)=>{
    return Object.prototype.toString.call(obj) === "[object Object]";
};
const isArray = (arr)=>{
    return Array.isArray(arr);
};
const isString = (str)=>{
    return typeof str === "string" || str instanceof String;
};
/**
 * @description Basic util functions
 */ const utils = {
    isArray,
    ensureArray: (arr)=>isArray(arr) ? arr : [],
    isArrayEmpty: (arr)=>!isArray(arr) || !arr.length,
    isObject,
    ensureObject: (obj)=>isObject(obj) ? obj : {},
    hasObjProperty: (obj, key)=>isObject(obj) && Object.prototype.hasOwnProperty.call(obj, key),
    isString,
    ensureString: (str, fallBack = "")=>isString(str) ? str : utils.ensureString(fallBack),
    isStringEmpty: (str)=>isString(str) && str.length === 0,
    capitalizeFirst: (str)=>isString(str) && str.charAt(0).toUpperCase() + str.slice(1)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);


/***/ }),

/***/ 2251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.js","import":"Montserrat","arguments":[{"variable":"--font-montserrat","subsets":["latin"]}],"variableName":"montserrat"}
var layout_js_import_Montserrat_arguments_variable_font_montserrat_subsets_latin_variableName_montserrat_ = __webpack_require__(9366);
var layout_js_import_Montserrat_arguments_variable_font_montserrat_subsets_latin_variableName_montserrat_default = /*#__PURE__*/__webpack_require__.n(layout_js_import_Montserrat_arguments_variable_font_montserrat_subsets_latin_variableName_montserrat_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(7814);
;// CONCATENATED MODULE: ./app/components/Header/Header.js

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/riyasavant/Developer/redBubble/ui/app/components/Header/Header.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(3501);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/icons/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.9737a9cd.png","height":120,"width":164,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAAAAADbboAnAAAAQUlEQVR42mP4+3/1vJOT/vxn+P///N7/Pa//M7z7cPf6j+NvvzC8fnX39vmHr9+CpK7dWfn/P8O//9Pn/e89+h8AY60pip7HKaIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./app/components/Footer/Footer.js



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 border-t",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 gap-8 lg:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: logo,
                                        alt: "Logo",
                                        height: 60
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "mt-8 flex gap-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "/",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: "text-gray-700 transition hover:opacity-75",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Facebook"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        className: "h-6 w-6",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            fillRule: "evenodd",
                                                            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                                                            clipRule: "evenodd"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "/",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: "text-gray-700 transition hover:opacity-75",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Instagram"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        className: "h-6 w-6",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            fillRule: "evenodd",
                                                            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                                            clipRule: "evenodd"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "/",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: "text-gray-700 transition hover:opacity-75",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Twitter"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        className: "h-6 w-6",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "mt-6 space-y-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-700 transition hover:opacity-75",
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-700 transition hover:opacity-75",
                                                    children: "Contact Us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-700 transition hover:opacity-75",
                                                    children: "Terms & Conditions"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "mt-6 space-y-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-700 transition hover:opacity-75",
                                                    children: "Contact"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-700 transition hover:opacity-75",
                                                    children: "FAQs"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "mt-6 space-y-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-700 transition hover:opacity-75",
                                                    children: "Returns Policy"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-700 transition hover:opacity-75",
                                                    children: "Refund Policy"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "text-gray-700 transition hover:opacity-75",
                                                    children: "Track Your Order"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-xs text-gray-500",
                    children: "\xa9 2023. RedBubble. All rights reserved."
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/components/Cart/Cart.js

const Cart_proxy = (0,module_proxy.createProxy)(String.raw`/Users/riyasavant/Developer/redBubble/ui/app/components/Cart/Cart.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Cart_esModule, $$typeof: Cart_$$typeof } = Cart_proxy;
const Cart_default_ = Cart_proxy.default;


/* harmony default export */ const Cart = (Cart_default_);
;// CONCATENATED MODULE: ./app/layout.js






const metadata = {
    title: "RedBubble",
    description: "Clothing brand"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: `${(layout_js_import_Montserrat_arguments_variable_font_montserrat_subsets_latin_variableName_montserrat_default()).variable} font-montserrat`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Cart, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 5917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/add.6e79f428.png","height":56,"width":56,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAANUlEQVR42mMAAmYg9gdCCAtIsAHJECBkALKAQhDgBoQQAFQaAuR0AqEbkOWPIYChBcNQDGsBiUgJnSILjHAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.9737a9cd.png","height":120,"width":164,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAAAAADbboAnAAAAQUlEQVR42mP4+3/1vJOT/vxn+P///N7/Pa//M7z7cPf6j+NvvzC8fnX39vmHr9+CpK7dWfn/P8O//9Pn/e89+h8AY60pip7HKaIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 9197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/minus.79834f72.png","height":4,"width":60,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAFElEQVR4nGNkYGD4AcTsQIwN/AQAHgIB+l2beiUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;