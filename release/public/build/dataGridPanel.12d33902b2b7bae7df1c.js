(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["dataGridPanel"],{

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/boolean-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   booleanCellRenderer: () => (/* binding */ booleanCellRenderer)
/* harmony export */ });
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* harmony import */ var _data_editor_data_editor_fns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor-fns.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _internal_data_grid_render_draw_checkbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/draw-checkbox.js");




const defaultCellMaxSize = 20;
const booleanCellRenderer = {
    getAccessibilityString: c => c.data?.toString() ?? "false",
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.GridCellKind.Boolean,
    needsHover: true,
    useLabel: false,
    needsHoverPosition: true,
    measure: () => 50,
    draw: a => drawBoolean(a, a.cell.data, (0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanCellIsEditable)(a.cell), a.cell.maxSize ?? defaultCellMaxSize),
    onDelete: c => ({
        ...c,
        data: false,
    }),
    onClick: e => {
        const { cell, posX: pointerX, posY: pointerY, bounds, theme } = e;
        const { width, height, x: cellX, y: cellY } = bounds;
        const maxWidth = cell.maxSize ?? defaultCellMaxSize;
        const cellCenterY = Math.floor(bounds.y + height / 2);
        const checkBoxWidth = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.getSquareWidth)(maxWidth, height, theme.cellVerticalPadding);
        const posX = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.getSquareXPosFromAlign)(cell.contentAlign ?? "center", cellX, width, theme.cellHorizontalPadding, checkBoxWidth);
        const bb = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.getSquareBB)(posX, cellCenterY, checkBoxWidth);
        const checkBoxClicked = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.pointIsWithinBB)(cellX + pointerX, cellY + pointerY, bb);
        if ((0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanCellIsEditable)(cell) && checkBoxClicked) {
            return {
                ...cell,
                data: (0,_data_editor_data_editor_fns_js__WEBPACK_IMPORTED_MODULE_1__.toggleBoolean)(cell.data),
            };
        }
        return undefined;
    },
    onPaste: (toPaste, cell) => {
        let newVal = _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.BooleanEmpty;
        if (toPaste.toLowerCase() === "true") {
            newVal = true;
        }
        else if (toPaste.toLowerCase() === "false") {
            newVal = false;
        }
        else if (toPaste.toLowerCase() === "indeterminate") {
            newVal = _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.BooleanIndeterminate;
        }
        return newVal === cell.data
            ? undefined
            : {
                ...cell,
                data: newVal,
            };
    },
};
function drawBoolean(args, data, canEdit, maxSize) {
    if (!canEdit && data === _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.BooleanEmpty) {
        return;
    }
    const { ctx, hoverAmount, theme, rect, highlighted, hoverX, hoverY, cell: { contentAlign }, } = args;
    const { x, y, width: w, height: h } = rect;
    const hoverEffect = 0.35;
    let alpha = canEdit ? 1 - hoverEffect + hoverEffect * hoverAmount : 0.4;
    if (data === _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.BooleanEmpty) {
        alpha *= hoverAmount;
    }
    if (alpha === 0) {
        return;
    }
    ctx.globalAlpha = alpha;
    (0,_internal_data_grid_render_draw_checkbox_js__WEBPACK_IMPORTED_MODULE_3__.drawCheckbox)(ctx, theme, data, x, y, w, h, highlighted, hoverX, hoverY, maxSize, contentAlign);
    ctx.globalAlpha = 1;
}
//# sourceMappingURL=boolean-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/bubble-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bubbleCellRenderer: () => (/* binding */ bubbleCellRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_data_grid_overlay_editor_private_bubbles_overlay_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/bubbles-overlay-editor.js");
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* eslint-disable react/display-name */





const bubbleCellRenderer = {
    getAccessibilityString: c => (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_4__.makeAccessibilityStringForArray)(c.data),
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Bubble,
    needsHover: false,
    useLabel: false,
    needsHoverPosition: false,
    measure: (ctx, cell, t) => cell.data.reduce((acc, data) => ctx.measureText(data).width + acc + 20, 0) + 2 * t.cellHorizontalPadding - 4,
    draw: a => drawBubbles(a, a.cell.data),
    provideEditor: () => p => {
        const { value } = p;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_data_grid_overlay_editor_private_bubbles_overlay_editor_js__WEBPACK_IMPORTED_MODULE_1__["default"], { bubbles: value.data });
    },
    onPaste: () => undefined,
};
const itemMargin = 4;
function drawBubbles(args, data) {
    const { rect, theme, ctx, highlighted } = args;
    const { x, y, width: w, height: h } = rect;
    const bubbleHeight = 20;
    const bubblePad = 8;
    const bubbleMargin = itemMargin;
    let renderX = x + theme.cellHorizontalPadding;
    const renderBoxes = [];
    for (const s of data) {
        if (renderX > x + w)
            break;
        const textWidth = (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.measureTextCached)(s, ctx, theme.baseFontFull).width;
        renderBoxes.push({
            x: renderX,
            width: textWidth,
        });
        renderX += textWidth + bubblePad * 2 + bubbleMargin;
    }
    ctx.beginPath();
    for (const rectInfo of renderBoxes) {
        (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.roundedRect)(ctx, rectInfo.x, y + (h - bubbleHeight) / 2, rectInfo.width + bubblePad * 2, bubbleHeight, theme.roundingRadius ?? bubbleHeight / 2);
    }
    ctx.fillStyle = highlighted ? theme.bgBubbleSelected : theme.bgBubble;
    ctx.fill();
    for (const [i, rectInfo] of renderBoxes.entries()) {
        ctx.beginPath();
        ctx.fillStyle = theme.textBubble;
        ctx.fillText(data[i], rectInfo.x + bubblePad, y + h / 2 + (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.getMiddleCenterBias)(ctx, theme));
    }
}
//# sourceMappingURL=bubble-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/drilldown-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drilldownCellRenderer: () => (/* binding */ drilldownCellRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_data_grid_overlay_editor_private_drilldown_overlay_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/drilldown-overlay-editor.js");
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* eslint-disable react/display-name */





const drilldownCellRenderer = {
    getAccessibilityString: c => (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_4__.makeAccessibilityStringForArray)(c.data.map(d => d.text)),
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Drilldown,
    needsHover: false,
    useLabel: false,
    needsHoverPosition: false,
    measure: (ctx, cell, t) => cell.data.reduce((acc, data) => ctx.measureText(data.text).width + acc + 20 + (data.img !== undefined ? 18 : 0), 0) +
        2 * t.cellHorizontalPadding -
        4,
    draw: a => drawDrilldownCell(a, a.cell.data),
    provideEditor: () => p => {
        const { value } = p;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_data_grid_overlay_editor_private_drilldown_overlay_editor_js__WEBPACK_IMPORTED_MODULE_1__["default"], { drilldowns: value.data });
    },
    onPaste: () => undefined,
};
const itemMargin = 4;
const drilldownCache = {};
function getAndCacheDrilldownBorder(bgCell, border, height, rounding) {
    const dpr = Math.ceil(window.devicePixelRatio);
    const shadowBlur = 5;
    const targetHeight = height - shadowBlur * 2;
    const middleWidth = 4;
    const innerHeight = height * dpr;
    const sideWidth = rounding + shadowBlur;
    const targetWidth = rounding * 3;
    const innerWidth = (targetWidth + shadowBlur * 2) * dpr;
    const key = `${bgCell},${border},${dpr},${height}`;
    if (drilldownCache[key] !== undefined) {
        return {
            el: drilldownCache[key],
            height: innerHeight,
            width: innerWidth,
            middleWidth: middleWidth * dpr,
            sideWidth: sideWidth * dpr,
            padding: shadowBlur * dpr,
            dpr,
        };
    }
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d"); // alpha needed
    if (ctx === null)
        return null;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx.scale(dpr, dpr);
    drilldownCache[key] = canvas;
    ctx.beginPath();
    (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.roundedRect)(ctx, shadowBlur, shadowBlur, targetWidth, targetHeight, rounding);
    ctx.shadowColor = "rgba(24, 25, 34, 0.4)";
    ctx.shadowBlur = 1;
    ctx.fillStyle = bgCell;
    ctx.fill();
    ctx.shadowColor = "rgba(24, 25, 34, 0.3)";
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 5;
    ctx.fillStyle = bgCell;
    ctx.fill();
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.shadowBlur = 0;
    ctx.beginPath();
    (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.roundedRect)(ctx, shadowBlur + 0.5, shadowBlur + 0.5, targetWidth, targetHeight, rounding);
    ctx.strokeStyle = border;
    ctx.lineWidth = 1;
    ctx.stroke();
    return {
        el: canvas,
        height: innerHeight,
        width: innerWidth,
        sideWidth: sideWidth * dpr,
        middleWidth: rounding * dpr,
        padding: shadowBlur * dpr,
        dpr,
    };
}
function drawDrilldownCell(args, data) {
    const { rect, theme, ctx, imageLoader, col, row } = args;
    const { x, width: w } = rect;
    const font = theme.baseFontFull;
    const emHeight = (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.getEmHeight)(ctx, font);
    const h = Math.min(rect.height, Math.max(16, Math.ceil(emHeight * theme.lineHeight) * 2));
    const y = Math.floor(rect.y + (rect.height - h) / 2);
    const bubbleHeight = h - 10;
    const bubblePad = 8;
    const bubbleMargin = itemMargin;
    let renderX = x + theme.cellHorizontalPadding;
    const rounding = theme.roundingRadius ?? 6;
    const tileMap = getAndCacheDrilldownBorder(theme.bgCell, theme.drilldownBorder, h, rounding);
    const renderBoxes = [];
    for (const el of data) {
        if (renderX > x + w)
            break;
        const textMetrics = (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.measureTextCached)(el.text, ctx, font);
        const textWidth = textMetrics.width;
        let imgWidth = 0;
        if (el.img !== undefined) {
            const img = imageLoader.loadOrGetImage(el.img, col, row);
            if (img !== undefined) {
                imgWidth = bubbleHeight - 8 + 4;
            }
        }
        const renderWidth = textWidth + imgWidth + bubblePad * 2;
        renderBoxes.push({
            x: renderX,
            width: renderWidth,
        });
        renderX += renderWidth + bubbleMargin;
    }
    if (tileMap !== null) {
        const { el, height, middleWidth, sideWidth, width, dpr, padding } = tileMap;
        const outerSideWidth = sideWidth / dpr;
        const outerPadding = padding / dpr;
        for (const rectInfo of renderBoxes) {
            const rx = Math.floor(rectInfo.x);
            const rw = Math.floor(rectInfo.width);
            const outerMiddleWidth = rw - (outerSideWidth - outerPadding) * 2;
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(el, 0, 0, sideWidth, height, rx - outerPadding, y, outerSideWidth, h);
            if (outerMiddleWidth > 0)
                ctx.drawImage(el, sideWidth, 0, middleWidth, height, rx + (outerSideWidth - outerPadding), y, outerMiddleWidth, h);
            ctx.drawImage(el, width - sideWidth, 0, sideWidth, height, rx + rw - (outerSideWidth - outerPadding), y, outerSideWidth, h);
            ctx.imageSmoothingEnabled = true;
        }
    }
    ctx.beginPath();
    for (const [i, rectInfo] of renderBoxes.entries()) {
        const d = data[i];
        let drawX = rectInfo.x + bubblePad;
        if (d.img !== undefined) {
            const img = imageLoader.loadOrGetImage(d.img, col, row);
            if (img !== undefined) {
                const imgSize = bubbleHeight - 8;
                let srcX = 0;
                let srcY = 0;
                let srcWidth = img.width;
                let srcHeight = img.height;
                if (srcWidth > srcHeight) {
                    // landscape
                    srcX += (srcWidth - srcHeight) / 2;
                    srcWidth = srcHeight;
                }
                else if (srcHeight > srcWidth) {
                    //portrait
                    srcY += (srcHeight - srcWidth) / 2;
                    srcHeight = srcWidth;
                }
                ctx.beginPath();
                (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.roundedRect)(ctx, drawX, y + h / 2 - imgSize / 2, imgSize, imgSize, theme.roundingRadius ?? 3);
                ctx.save();
                ctx.clip();
                ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, drawX, y + h / 2 - imgSize / 2, imgSize, imgSize);
                ctx.restore();
                drawX += imgSize + 4;
            }
        }
        ctx.beginPath();
        ctx.fillStyle = theme.textBubble;
        ctx.fillText(d.text, drawX, y + h / 2 + (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.getMiddleCenterBias)(ctx, theme));
    }
}
//# sourceMappingURL=drilldown-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/image-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawImage: () => (/* binding */ drawImage),
/* harmony export */   imageCellRenderer: () => (/* binding */ imageCellRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_data_grid_overlay_editor_private_image_overlay_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/image-overlay-editor.js");
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* eslint-disable react/display-name */




const imageCellRenderer = {
    getAccessibilityString: c => c.data.join(", "),
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Image,
    needsHover: false,
    useLabel: false,
    needsHoverPosition: false,
    draw: a => drawImage(a, a.cell.displayData ?? a.cell.data, a.cell.rounding ?? a.theme.roundingRadius ?? 4, a.cell.contentAlign),
    measure: (_ctx, cell) => cell.data.length * 50,
    onDelete: c => ({
        ...c,
        data: [],
    }),
    provideEditor: () => p => {
        const { value, onFinishedEditing, imageEditorOverride } = p;
        const ImageEditor = imageEditorOverride ?? _internal_data_grid_overlay_editor_private_image_overlay_editor_js__WEBPACK_IMPORTED_MODULE_1__.ImageOverlayEditor;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImageEditor, { urls: value.data, canWrite: value.readonly !== false, onCancel: onFinishedEditing, onChange: newImage => {
                onFinishedEditing({
                    ...value,
                    data: [newImage],
                });
            } }));
    },
    onPaste: (toPaste, cell) => {
        toPaste = toPaste.trim();
        const fragments = toPaste.split(",");
        const uris = fragments
            .map(f => {
            try {
                new URL(f);
                return f;
            }
            catch {
                return undefined;
            }
        })
            .filter(x => x !== undefined);
        if (uris.length === cell.data.length && uris.every((u, i) => u === cell.data[i]))
            return undefined;
        return {
            ...cell,
            data: uris,
        };
    },
};
const itemMargin = 4;
function drawImage(args, data, rounding, contentAlign) {
    const { rect, col, row, theme, ctx, imageLoader } = args;
    const { x, y, height: h, width: w } = rect;
    const imgHeight = h - theme.cellVerticalPadding * 2;
    const images = [];
    let totalWidth = 0;
    // eslint-disable-next-line unicorn/no-for-loop
    for (let index = 0; index < data.length; index++) {
        const i = data[index];
        if (i.length === 0)
            continue;
        const img = imageLoader.loadOrGetImage(i, col, row);
        if (img !== undefined) {
            images[index] = img;
            const imgWidth = img.width * (imgHeight / img.height);
            totalWidth += imgWidth + itemMargin;
        }
    }
    if (totalWidth === 0)
        return;
    totalWidth -= itemMargin;
    let drawX = x + theme.cellHorizontalPadding;
    if (contentAlign === "right")
        drawX = Math.floor(x + w - theme.cellHorizontalPadding - totalWidth);
    else if (contentAlign === "center")
        drawX = Math.floor(x + w / 2 - totalWidth / 2);
    for (const img of images) {
        if (img === undefined)
            continue; //array is sparse
        const imgWidth = img.width * (imgHeight / img.height);
        if (rounding > 0) {
            ctx.beginPath();
            (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.roundedRect)(ctx, drawX, y + theme.cellVerticalPadding, imgWidth, imgHeight, rounding);
            ctx.save();
            ctx.clip();
        }
        ctx.drawImage(img, drawX, y + theme.cellVerticalPadding, imgWidth, imgHeight);
        if (rounding > 0) {
            ctx.restore();
        }
        drawX += imgWidth + itemMargin;
    }
}
//# sourceMappingURL=image-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllCellRenderers: () => (/* binding */ AllCellRenderers)
/* harmony export */ });
/* harmony import */ var _boolean_cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/boolean-cell.js");
/* harmony import */ var _bubble_cell_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/bubble-cell.js");
/* harmony import */ var _drilldown_cell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/drilldown-cell.js");
/* harmony import */ var _image_cell_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/image-cell.js");
/* harmony import */ var _loading_cell_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/loading-cell.js");
/* harmony import */ var _markdown_cell_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/markdown-cell.js");
/* harmony import */ var _marker_cell_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/marker-cell.js");
/* harmony import */ var _new_row_cell_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/new-row-cell.js");
/* harmony import */ var _number_cell_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/number-cell.js");
/* harmony import */ var _protected_cell_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/protected-cell.js");
/* harmony import */ var _row_id_cell_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/row-id-cell.js");
/* harmony import */ var _text_cell_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/text-cell.js");
/* harmony import */ var _uri_cell_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/uri-cell.js");














const AllCellRenderers = [
    _marker_cell_js__WEBPACK_IMPORTED_MODULE_6__.markerCellRenderer,
    _new_row_cell_js__WEBPACK_IMPORTED_MODULE_7__.newRowCellRenderer,
    _boolean_cell_js__WEBPACK_IMPORTED_MODULE_0__.booleanCellRenderer,
    _bubble_cell_js__WEBPACK_IMPORTED_MODULE_1__.bubbleCellRenderer,
    _drilldown_cell_js__WEBPACK_IMPORTED_MODULE_2__.drilldownCellRenderer,
    _image_cell_js__WEBPACK_IMPORTED_MODULE_3__.imageCellRenderer,
    _loading_cell_js__WEBPACK_IMPORTED_MODULE_4__.loadingCellRenderer,
    _markdown_cell_js__WEBPACK_IMPORTED_MODULE_5__.markdownCellRenderer,
    _number_cell_js__WEBPACK_IMPORTED_MODULE_8__.numberCellRenderer,
    _protected_cell_js__WEBPACK_IMPORTED_MODULE_9__.protectedCellRenderer,
    _row_id_cell_js__WEBPACK_IMPORTED_MODULE_10__.rowIDCellRenderer,
    _text_cell_js__WEBPACK_IMPORTED_MODULE_11__.textCellRenderer,
    _uri_cell_js__WEBPACK_IMPORTED_MODULE_12__.uriCellRenderer,
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/loading-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadingCellRenderer: () => (/* binding */ loadingCellRenderer)
/* harmony export */ });
/* harmony import */ var _internal_data_grid_color_parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/color-parser.js");
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");



// returns a "random" number between -1 and 1
function getRandomNumber(x, y) {
    let seed = x * 49632 + y * 325176;
    // Inline Xorshift algorithm
    seed ^= seed << 13;
    seed ^= seed >> 17;
    seed ^= seed << 5;
    // eslint-disable-next-line unicorn/number-literal-case
    return (seed / 4294967295) * 2;
}
const loadingCellRenderer = {
    getAccessibilityString: () => "",
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.GridCellKind.Loading,
    needsHover: false,
    useLabel: false,
    needsHoverPosition: false,
    measure: () => 120,
    draw: a => {
        const { cell, col, row, ctx, rect, theme } = a;
        if (cell.skeletonWidth === undefined || cell.skeletonWidth === 0) {
            return;
        }
        let width = cell.skeletonWidth;
        if (cell.skeletonWidthVariability !== undefined && cell.skeletonWidthVariability > 0) {
            width += Math.round(getRandomNumber(col, row) * cell.skeletonWidthVariability);
        }
        const hpad = theme.cellHorizontalPadding;
        const rectHeight = cell.skeletonHeight ?? Math.min(18, rect.height - 2 * theme.cellVerticalPadding);
        (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.roundedRect)(ctx, rect.x + hpad, rect.y + (rect.height - rectHeight) / 2, width, rectHeight, theme.roundingRadius ?? 3);
        ctx.fillStyle = (0,_internal_data_grid_color_parser_js__WEBPACK_IMPORTED_MODULE_0__.withAlpha)(theme.textDark, 0.1);
        ctx.fill();
    },
    onPaste: () => undefined,
};
//# sourceMappingURL=loading-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/markdown-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   markdownCellRenderer: () => (/* binding */ markdownCellRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_data_grid_overlay_editor_private_markdown_overlay_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/markdown-overlay-editor.js");
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* eslint-disable react/display-name */




const markdownCellRenderer = {
    getAccessibilityString: c => c.data?.toString() ?? "",
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Markdown,
    needsHover: false,
    needsHoverPosition: false,
    drawPrep: _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.prepTextCell,
    measure: (ctx, cell, t) => {
        const firstLine = cell.data.split("\n")[0];
        return ctx.measureText(firstLine).width + 2 * t.cellHorizontalPadding;
    },
    draw: a => (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.drawTextCell)(a, a.cell.data, a.cell.contentAlign),
    onDelete: c => ({
        ...c,
        data: "",
    }),
    provideEditor: () => p => {
        const { onChange, value, target, onFinishedEditing, markdownDivCreateNode, forceEditMode, validatedSelection } = p;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_data_grid_overlay_editor_private_markdown_overlay_editor_js__WEBPACK_IMPORTED_MODULE_1__.MarkdownOverlayEditor, { onFinish: onFinishedEditing, targetRect: target, value: value, validatedSelection: validatedSelection, onChange: e => onChange({
                ...value,
                data: e.target.value,
            }), forceEditMode: forceEditMode, createNode: markdownDivCreateNode }));
    },
    onPaste: (toPaste, cell) => (toPaste === cell.data ? undefined : { ...cell, data: toPaste }),
};
//# sourceMappingURL=markdown-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/marker-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   markerCellRenderer: () => (/* binding */ markerCellRenderer)
/* harmony export */ });
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _internal_data_grid_render_draw_checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/draw-checkbox.js");



const markerCellRenderer = {
    getAccessibilityString: c => c.row.toString(),
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.InnerGridCellKind.Marker,
    needsHover: true,
    needsHoverPosition: false,
    drawPrep: prepMarkerRowCell,
    measure: () => 44,
    draw: a => drawMarkerRowCell(a, a.cell.row, a.cell.checked, a.cell.markerKind, a.cell.drawHandle, a.cell.checkboxStyle),
    onClick: e => {
        const { bounds, cell, posX: x, posY: y } = e;
        const { width, height } = bounds;
        const centerX = cell.drawHandle ? 7 + (width - 7) / 2 : width / 2;
        const centerY = height / 2;
        if (Math.abs(x - centerX) <= 10 && Math.abs(y - centerY) <= 10) {
            return {
                ...cell,
                checked: !cell.checked,
            };
        }
        return undefined;
    },
    onPaste: () => undefined,
};
function prepMarkerRowCell(args, lastPrep) {
    const { ctx, theme } = args;
    const newFont = theme.markerFontFull;
    const result = lastPrep ?? {};
    if (result?.font !== newFont) {
        ctx.font = newFont;
        result.font = newFont;
    }
    result.deprep = deprepMarkerRowCell;
    ctx.textAlign = "center";
    return result;
}
function deprepMarkerRowCell(args) {
    const { ctx } = args;
    ctx.textAlign = "start";
}
function drawMarkerRowCell(args, index, checked, markerKind, drawHandle, style) {
    const { ctx, rect, hoverAmount, theme } = args;
    const { x, y, width, height } = rect;
    const checkedboxAlpha = checked ? 1 : markerKind === "checkbox-visible" ? 0.6 + 0.4 * hoverAmount : hoverAmount;
    if (markerKind !== "number" && checkedboxAlpha > 0) {
        ctx.globalAlpha = checkedboxAlpha;
        const offsetAmount = 7 * (checked ? hoverAmount : 1);
        (0,_internal_data_grid_render_draw_checkbox_js__WEBPACK_IMPORTED_MODULE_2__.drawCheckbox)(ctx, theme, checked, drawHandle ? x + offsetAmount : x, y, drawHandle ? width - offsetAmount : width, height, true, undefined, undefined, 18, "center", style);
        if (drawHandle) {
            ctx.globalAlpha = hoverAmount;
            ctx.beginPath();
            for (const xOffset of [3, 6]) {
                for (const yOffset of [-5, -1, 3]) {
                    ctx.rect(x + xOffset, y + height / 2 + yOffset, 2, 2);
                }
            }
            ctx.fillStyle = theme.textLight;
            ctx.fill();
            ctx.beginPath();
        }
        ctx.globalAlpha = 1;
    }
    if (markerKind === "number" || (markerKind === "both" && !checked)) {
        const text = index.toString();
        const fontStyle = theme.markerFontFull;
        const start = x + width / 2;
        if (markerKind === "both" && hoverAmount !== 0) {
            ctx.globalAlpha = 1 - hoverAmount;
        }
        ctx.fillStyle = theme.textLight;
        ctx.font = fontStyle;
        ctx.fillText(text, start, y + height / 2 + (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.getMiddleCenterBias)(ctx, fontStyle));
        if (hoverAmount !== 0) {
            ctx.globalAlpha = 1;
        }
    }
}
//# sourceMappingURL=marker-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/new-row-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newRowCellRenderer: () => (/* binding */ newRowCellRenderer)
/* harmony export */ });
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");


const newRowCellRenderer = {
    getAccessibilityString: () => "",
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.InnerGridCellKind.NewRow,
    needsHover: true,
    needsHoverPosition: false,
    measure: () => 200,
    draw: a => drawNewRowCell(a, a.cell.hint, a.cell.icon),
    onPaste: () => undefined,
};
function drawNewRowCell(args, data, icon) {
    const { ctx, rect, hoverAmount, theme, spriteManager } = args;
    const { x, y, width: w, height: h } = rect;
    ctx.beginPath();
    ctx.globalAlpha = hoverAmount;
    ctx.rect(x + 1, y + 1, w, h - 2);
    ctx.fillStyle = theme.bgHeaderHovered;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.beginPath();
    const alwaysShowIcon = data !== "";
    let textX = 0;
    if (icon !== undefined) {
        const padding = 8;
        const size = h - padding;
        const px = x + padding / 2;
        const py = y + padding / 2;
        spriteManager.drawSprite(icon, "normal", ctx, px, py, size, theme, alwaysShowIcon ? 1 : hoverAmount);
        textX = size;
    }
    else {
        textX = 24;
        const finalLineSize = 12;
        const lineSize = alwaysShowIcon ? finalLineSize : hoverAmount * finalLineSize;
        const xTranslate = alwaysShowIcon ? 0 : (1 - hoverAmount) * finalLineSize * 0.5;
        const padPlus = theme.cellHorizontalPadding + 4;
        if (lineSize > 0) {
            ctx.moveTo(x + padPlus + xTranslate, y + h / 2);
            ctx.lineTo(x + padPlus + xTranslate + lineSize, y + h / 2);
            ctx.moveTo(x + padPlus + xTranslate + lineSize * 0.5, y + h / 2 - lineSize * 0.5);
            ctx.lineTo(x + padPlus + xTranslate + lineSize * 0.5, y + h / 2 + lineSize * 0.5);
            ctx.lineWidth = 2;
            ctx.strokeStyle = theme.bgIconHeader;
            ctx.lineCap = "round";
            ctx.stroke();
        }
    }
    ctx.fillStyle = theme.textMedium;
    ctx.fillText(data, textX + x + theme.cellHorizontalPadding + 0.5, y + h / 2 + (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.getMiddleCenterBias)(ctx, theme));
    ctx.beginPath();
}
//# sourceMappingURL=new-row-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/number-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numberCellRenderer: () => (/* binding */ numberCellRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* eslint-disable react/display-name */



const NumberOverlayEditor = react__WEBPACK_IMPORTED_MODULE_0__.lazy(async () => await __webpack_require__.e(/* import() */ "node_modules_glideapps_glide-data-grid_dist_esm_internal_data-grid-overlay-editor_private_num-9341de").then(__webpack_require__.bind(__webpack_require__, "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/number-overlay-editor.js")));
const numberCellRenderer = {
    getAccessibilityString: c => c.data?.toString() ?? "",
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.GridCellKind.Number,
    needsHover: false,
    needsHoverPosition: false,
    useLabel: true,
    drawPrep: _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.prepTextCell,
    draw: a => (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.drawTextCell)(a, a.cell.displayData, a.cell.contentAlign),
    measure: (ctx, cell, theme) => ctx.measureText(cell.displayData).width + theme.cellHorizontalPadding * 2,
    onDelete: c => ({
        ...c,
        data: undefined,
    }),
    provideEditor: () => p => {
        const { isHighlighted, onChange, value, validatedSelection } = p;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: null },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(NumberOverlayEditor, { highlight: isHighlighted, disabled: value.readonly === true, value: value.data, fixedDecimals: value.fixedDecimals, allowNegative: value.allowNegative, thousandSeparator: value.thousandSeparator, decimalSeparator: value.decimalSeparator, validatedSelection: validatedSelection, onChange: x => onChange({
                    ...value,
                    data: Number.isNaN(x.floatValue ?? 0) ? 0 : x.floatValue,
                }) })));
    },
    onPaste: (toPaste, cell, details) => {
        const newNumber = typeof details.rawValue === "number"
            ? details.rawValue
            : Number.parseFloat(typeof details.rawValue === "string" ? details.rawValue : toPaste);
        if (Number.isNaN(newNumber) || cell.data === newNumber)
            return undefined;
        return { ...cell, data: newNumber, displayData: details.formattedString ?? cell.displayData };
    },
};
//# sourceMappingURL=number-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/protected-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   protectedCellRenderer: () => (/* binding */ protectedCellRenderer)
/* harmony export */ });
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");


const protectedCellRenderer = {
    getAccessibilityString: () => "",
    measure: () => 108,
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Protected,
    needsHover: false,
    needsHoverPosition: false,
    draw: drawProtectedCell,
    onPaste: () => undefined,
};
function drawProtectedCell(args) {
    const { ctx, theme, rect } = args;
    const { x, y, height: h } = rect;
    ctx.beginPath();
    const radius = 2.5;
    let xStart = x + theme.cellHorizontalPadding + radius;
    const center = y + h / 2;
    const p = Math.cos((0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(30)) * radius;
    const q = Math.sin((0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(30)) * radius;
    for (let i = 0; i < 12; i++) {
        ctx.moveTo(xStart, center - radius);
        ctx.lineTo(xStart, center + radius);
        ctx.moveTo(xStart + p, center - q);
        ctx.lineTo(xStart - p, center + q);
        ctx.moveTo(xStart - p, center - q);
        ctx.lineTo(xStart + p, center + q);
        xStart += 8;
    }
    ctx.lineWidth = 1.1;
    ctx.lineCap = "square";
    ctx.strokeStyle = theme.textLight;
    ctx.stroke();
}
//# sourceMappingURL=protected-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/row-id-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rowIDCellRenderer: () => (/* binding */ rowIDCellRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_growing_entry_growing_entry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/growing-entry/growing-entry.js");
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");




const rowIDCellRenderer = {
    getAccessibilityString: c => c.data?.toString() ?? "",
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.RowID,
    needsHover: false,
    needsHoverPosition: false,
    drawPrep: (a, b) => (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.prepTextCell)(a, b, a.theme.textLight),
    draw: a => (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.drawTextCell)(a, a.cell.data, a.cell.contentAlign),
    measure: (ctx, cell, theme) => ctx.measureText(cell.data).width + theme.cellHorizontalPadding * 2,
    // eslint-disable-next-line react/display-name
    provideEditor: () => p => {
        const { isHighlighted, onChange, value, validatedSelection } = p;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_growing_entry_growing_entry_js__WEBPACK_IMPORTED_MODULE_1__.GrowingEntry, { highlight: isHighlighted, autoFocus: value.readonly !== true, disabled: value.readonly !== false, value: value.data, validatedSelection: validatedSelection, onChange: e => onChange({
                ...value,
                data: e.target.value,
            }) }));
    },
    onPaste: () => undefined,
};
//# sourceMappingURL=row-id-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/text-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textCellRenderer: () => (/* binding */ textCellRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_growing_entry_growing_entry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/growing-entry/growing-entry.js");
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _internal_data_grid_color_parser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/color-parser.js");
/* eslint-disable react/display-name */





const textCellRenderer = {
    getAccessibilityString: c => c.data?.toString() ?? "",
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Text,
    needsHover: textCell => textCell.hoverEffect === true,
    needsHoverPosition: false,
    drawPrep: _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.prepTextCell,
    useLabel: true,
    draw: a => {
        const { cell, hoverAmount, hyperWrapping, ctx, rect, theme, overrideCursor } = a;
        const { displayData, contentAlign, hoverEffect, allowWrapping } = cell;
        if (hoverEffect === true && hoverAmount > 0) {
            ctx.textBaseline = "alphabetic";
            const padX = theme.cellHorizontalPadding;
            const padY = theme.cellVerticalPadding;
            const m = (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.measureTextCached)(displayData, ctx, theme.baseFontFull, "alphabetic");
            const maxH = rect.height - padY;
            const h = Math.min(maxH, m.actualBoundingBoxAscent * 2.5);
            ctx.beginPath();
            (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.roundedRect)(ctx, rect.x + padX / 2, rect.y + (rect.height - h) / 2 + 1, m.width + padX * 3, h - 1, theme.roundingRadius ?? 4);
            ctx.globalAlpha = hoverAmount;
            ctx.fillStyle = (0,_internal_data_grid_color_parser_js__WEBPACK_IMPORTED_MODULE_4__.withAlpha)(theme.textDark, 0.1);
            ctx.fill();
            // restore
            ctx.globalAlpha = 1;
            ctx.fillStyle = theme.textDark;
            ctx.textBaseline = "middle";
            overrideCursor?.("text");
        }
        (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.drawTextCell)(a, displayData, contentAlign, allowWrapping, hyperWrapping);
    },
    measure: (ctx, cell, t) => {
        const lines = cell.displayData.split("\n", cell.allowWrapping === true ? undefined : 1);
        let maxLineWidth = 0;
        for (const line of lines) {
            maxLineWidth = Math.max(maxLineWidth, ctx.measureText(line).width);
        }
        return maxLineWidth + 2 * t.cellHorizontalPadding;
    },
    onDelete: c => ({
        ...c,
        data: "",
    }),
    provideEditor: cell => ({
        disablePadding: cell.allowWrapping === true,
        editor: p => {
            const { isHighlighted, onChange, value, validatedSelection } = p;
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_growing_entry_growing_entry_js__WEBPACK_IMPORTED_MODULE_1__.GrowingEntry, { style: cell.allowWrapping === true ? { padding: "3px 8.5px" } : undefined, highlight: isHighlighted, autoFocus: value.readonly !== true, disabled: value.readonly === true, altNewline: true, value: value.data, validatedSelection: validatedSelection, onChange: e => onChange({
                    ...value,
                    data: e.target.value,
                }) }));
        },
    }),
    onPaste: (toPaste, cell, details) => toPaste === cell.data
        ? undefined
        : { ...cell, data: toPaste, displayData: details.formattedString ?? cell.displayData },
};
//# sourceMappingURL=text-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/cells/uri-cell.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uriCellRenderer: () => (/* binding */ uriCellRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_data_grid_overlay_editor_private_uri_overlay_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/uri-overlay-editor.js");
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _common_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/math.js");
/* eslint-disable react/display-name */





function getTextRect(metrics, rect, theme, contentAlign) {
    let x = theme.cellHorizontalPadding;
    const y = rect.height / 2 - metrics.actualBoundingBoxAscent / 2;
    const width = metrics.width;
    const height = metrics.actualBoundingBoxAscent;
    if (contentAlign === "right") {
        x = rect.width - width - theme.cellHorizontalPadding;
    }
    else if (contentAlign === "center") {
        x = rect.width / 2 - width / 2;
    }
    return { x, y, width, height };
}
const uriCellRenderer = {
    getAccessibilityString: c => c.data?.toString() ?? "",
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__.GridCellKind.Uri,
    needsHover: uriCell => uriCell.hoverEffect === true,
    needsHoverPosition: true,
    useLabel: true,
    drawPrep: _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.prepTextCell,
    draw: a => {
        const { cell, theme, overrideCursor, hoverX, hoverY, rect, ctx } = a;
        const txt = cell.displayData ?? cell.data;
        const isLinky = cell.hoverEffect === true;
        if (overrideCursor !== undefined && isLinky && hoverX !== undefined && hoverY !== undefined) {
            const m = (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.measureTextCached)(txt, ctx, theme.baseFontFull);
            const textRect = getTextRect(m, rect, theme, cell.contentAlign);
            const { x, y, width: w, height: h } = textRect;
            // check if hoverX and hoverY inside the box
            if (hoverX >= x - 4 && hoverX <= x - 4 + w + 8 && hoverY >= y - 4 && hoverY <= y - 4 + h + 8) {
                const middleCenterBias = (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.getMiddleCenterBias)(ctx, theme.baseFontFull);
                overrideCursor("pointer");
                const underlineOffset = 5;
                const drawY = y - middleCenterBias;
                ctx.beginPath();
                ctx.moveTo(rect.x + x, Math.floor(rect.y + drawY + h + underlineOffset) + 0.5);
                ctx.lineTo(rect.x + x + w, Math.floor(rect.y + drawY + h + underlineOffset) + 0.5);
                ctx.strokeStyle = theme.linkColor;
                ctx.stroke();
                ctx.save();
                ctx.fillStyle = a.cellFillColor;
                (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.drawTextCell)({ ...a, rect: { ...rect, x: rect.x - 1 } }, txt, cell.contentAlign);
                (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.drawTextCell)({ ...a, rect: { ...rect, x: rect.x - 2 } }, txt, cell.contentAlign);
                (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.drawTextCell)({ ...a, rect: { ...rect, x: rect.x + 1 } }, txt, cell.contentAlign);
                (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.drawTextCell)({ ...a, rect: { ...rect, x: rect.x + 2 } }, txt, cell.contentAlign);
                ctx.restore();
            }
        }
        ctx.fillStyle = isLinky ? theme.linkColor : theme.textDark;
        (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.drawTextCell)(a, txt, cell.contentAlign);
    },
    onClick: a => {
        const { cell, bounds, posX, posY, theme } = a;
        const txt = cell.displayData ?? cell.data;
        if (cell.hoverEffect !== true || cell.onClickUri === undefined)
            return;
        const m = (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.getMeasuredTextCache)(txt, theme.baseFontFull);
        if (m === undefined)
            return;
        const textRect = getTextRect(m, bounds, theme, cell.contentAlign);
        const didClick = (0,_common_math_js__WEBPACK_IMPORTED_MODULE_4__.pointInRect)({
            x: textRect.x - 4,
            y: textRect.y - 4,
            width: textRect.width + 8,
            height: textRect.height + 8,
        }, posX, posY);
        if (didClick) {
            cell.onClickUri(a);
        }
        return undefined;
    },
    measure: (ctx, cell, theme) => ctx.measureText(cell.displayData ?? cell.data).width + theme.cellHorizontalPadding * 2,
    onDelete: c => ({
        ...c,
        data: "",
    }),
    provideEditor: cell => p => {
        const { onChange, value, forceEditMode, validatedSelection } = p;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_data_grid_overlay_editor_private_uri_overlay_editor_js__WEBPACK_IMPORTED_MODULE_1__["default"], { forceEditMode: value.readonly !== true &&
                (forceEditMode || (cell.hoverEffect === true && cell.onClickUri !== undefined)), uri: value.data, preview: value.displayData ?? value.data, validatedSelection: validatedSelection, readonly: value.readonly === true, onChange: e => onChange({
                ...value,
                data: e.target.value,
            }) }));
    },
    onPaste: (toPaste, cell, details) => toPaste === cell.data
        ? undefined
        : { ...cell, data: toPaste, displayData: details.formattedString ?? cell.displayData },
};
//# sourceMappingURL=uri-cell.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/common/browser-detect.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browserIsFirefox: () => (/* binding */ browserIsFirefox),
/* harmony export */   browserIsOSX: () => (/* binding */ browserIsOSX),
/* harmony export */   browserIsSafari: () => (/* binding */ browserIsSafari)
/* harmony export */ });
class Lazy {
    fn;
    val;
    constructor(fn) {
        this.fn = fn;
    }
    get value() {
        return this.val ?? (this.val = this.fn());
    }
}
function lazy(fn) {
    return new Lazy(fn);
}
// next.js apps don't have window available at import time, so this will fail if its not lazy.
const browserIsFirefox = lazy(() => window.navigator.userAgent.includes("Firefox"));
const browserIsSafari = lazy(() => window.navigator.userAgent.includes("Mac OS") &&
    window.navigator.userAgent.includes("Safari") &&
    !window.navigator.userAgent.includes("Chrome"));
const browserIsOSX = lazy(() => window.navigator.platform.toLowerCase().startsWith("mac"));
//# sourceMappingURL=browser-detect.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/common/image-window-loader.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_data_grid_cell_set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/cell-set.js");
/* harmony import */ var lodash_throttle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/throttle.js");
/* harmony import */ var _render_state_provider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/render-state-provider.js");



const imgPool = [];
class ImageWindowLoaderImpl extends _render_state_provider_js__WEBPACK_IMPORTED_MODULE_2__.WindowingTrackerBase {
    imageLoaded = () => undefined;
    loadedLocations = [];
    cache = {};
    setCallback(imageLoaded) {
        this.imageLoaded = imageLoaded;
    }
    // eslint-disable-next-line unicorn/consistent-function-scoping
    sendLoaded = lodash_throttle_js__WEBPACK_IMPORTED_MODULE_1__(() => {
        this.imageLoaded(new _internal_data_grid_cell_set_js__WEBPACK_IMPORTED_MODULE_0__.CellSet(this.loadedLocations));
        this.loadedLocations = [];
    }, 20);
    clearOutOfWindow = () => {
        const keys = Object.keys(this.cache);
        for (const key of keys) {
            const obj = this.cache[key];
            let keep = false;
            for (let j = 0; j < obj.cells.length; j++) {
                const packed = obj.cells[j];
                if (this.isInWindow(packed)) {
                    keep = true;
                    break;
                }
            }
            if (keep) {
                obj.cells = obj.cells.filter(this.isInWindow);
            }
            else {
                obj.cancel();
                delete this.cache[key];
            }
        }
    };
    loadImage(url, col, row, key) {
        let loaded = false;
        const img = imgPool.pop() ?? new Image();
        let canceled = false;
        const result = {
            img: undefined,
            cells: [(0,_render_state_provider_js__WEBPACK_IMPORTED_MODULE_2__.packColRowToNumber)(col, row)],
            url,
            cancel: () => {
                if (canceled)
                    return;
                canceled = true;
                if (imgPool.length < 12) {
                    imgPool.unshift(img); // never retain more than 12
                }
                else if (!loaded) {
                    img.src = "";
                }
            },
        };
        const loadPromise = new Promise(r => img.addEventListener("load", () => r(null)));
        // use request animation time to avoid paying src set costs during draw calls
        requestAnimationFrame(async () => {
            try {
                img.src = url;
                await loadPromise;
                await img.decode();
                const toWrite = this.cache[key];
                if (toWrite !== undefined && !canceled) {
                    toWrite.img = img;
                    for (const packed of toWrite.cells) {
                        this.loadedLocations.push((0,_render_state_provider_js__WEBPACK_IMPORTED_MODULE_2__.unpackNumberToColRow)(packed));
                    }
                    loaded = true;
                    this.sendLoaded();
                }
            }
            catch {
                result.cancel();
            }
        });
        this.cache[key] = result;
    }
    loadOrGetImage(url, col, row) {
        const key = url;
        const current = this.cache[key];
        if (current !== undefined) {
            const packed = (0,_render_state_provider_js__WEBPACK_IMPORTED_MODULE_2__.packColRowToNumber)(col, row);
            if (!current.cells.includes(packed)) {
                current.cells.push(packed);
            }
            return current.img;
        }
        else {
            this.loadImage(url, col, row, key);
        }
        return undefined;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageWindowLoaderImpl);
//# sourceMappingURL=image-window-loader.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/common/is-hotkey.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHotkey: () => (/* binding */ isHotkey)
/* harmony export */ });
/* harmony import */ var _browser_detect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/browser-detect.js");

// brain dead syntax, find your deps, and make buggy replacements with 5 times the effort
// all lower case
// ctrl+shift+alt+d or ctrl+x or shift+c or shift+Backspace or alt+_53
// you get it, last one is always event.key, nothing fancy
// special: primary === ctrl on windows, meta on mac
// no to lower, its a waste, we're the only consumer, don't use caps
// and before you ask, yes space is " ", e.g. "ctrl+alt+ ", whatacountry.gif
// load bearing whitespace, it's basically python
// if the char starts with a _ it is the event.keycode instead
function checkKey(key, args) {
    if (key === undefined)
        return false;
    if (key.length > 1 && key.startsWith("_")) {
        const keycode = Number.parseInt(key.slice(1));
        return keycode === args.keyCode;
    }
    if (key.length === 1 && key >= "a" && key <= "z") {
        return key.toUpperCase().codePointAt(0) === args.keyCode;
    }
    return key === args.key;
}
function isHotkey(hotkey, args, details) {
    const result = isHotkeyInner(hotkey, args);
    if (result)
        details.didMatch = true;
    return result;
}
function isHotkeyInner(hotkey, args) {
    if (hotkey.length === 0)
        return false;
    if (hotkey.includes("|")) {
        const parts = hotkey.split("|");
        for (const part of parts) {
            if (isHotkeyInner(part, args))
                return true;
        }
        return false;
    }
    let wantCtrl = false;
    let wantShift = false;
    let wantAlt = false;
    let wantMeta = false;
    const split = hotkey.split("+");
    const key = split.pop();
    if (!checkKey(key, args))
        return false;
    if (split[0] === "any")
        return true;
    for (const accel of split) {
        switch (accel) {
            case "ctrl":
                wantCtrl = true;
                break;
            case "shift":
                wantShift = true;
                break;
            case "alt":
                wantAlt = true;
                break;
            case "meta":
                wantMeta = true;
                break;
            case "primary":
                if (_browser_detect_js__WEBPACK_IMPORTED_MODULE_0__.browserIsOSX.value) {
                    wantMeta = true;
                }
                else {
                    wantCtrl = true;
                }
                break;
        }
    }
    return (args.altKey === wantAlt && args.ctrlKey === wantCtrl && args.shiftKey === wantShift && args.metaKey === wantMeta);
}
//# sourceMappingURL=is-hotkey.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/common/math.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineRects: () => (/* binding */ combineRects),
/* harmony export */   getClosestRect: () => (/* binding */ getClosestRect),
/* harmony export */   hugRectToTarget: () => (/* binding */ hugRectToTarget),
/* harmony export */   intersectRect: () => (/* binding */ intersectRect),
/* harmony export */   pointInRect: () => (/* binding */ pointInRect),
/* harmony export */   rectContains: () => (/* binding */ rectContains),
/* harmony export */   splitRectIntoRegions: () => (/* binding */ splitRectIntoRegions)
/* harmony export */ });
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* eslint-disable unicorn/prefer-ternary */

function getClosestRect(rect, px, py, allowedDirections) {
    if (allowedDirections === "any")
        return combineRects(rect, { x: px, y: py, width: 1, height: 1 });
    if (allowedDirections === "vertical")
        px = rect.x;
    if (allowedDirections === "horizontal")
        py = rect.y;
    // Check if the point is inside the rectangle
    if ((0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.itemIsInRect)([px, py], rect)) {
        return undefined;
    }
    // Calculate distances to the closest edges
    const distanceToLeft = px - rect.x;
    const distanceToRight = rect.x + rect.width - px;
    const distanceToTop = py - rect.y + 1;
    const distanceToBottom = rect.y + rect.height - py;
    // Find the minimum distance
    const minDistance = Math.min(allowedDirections === "vertical" ? Number.MAX_SAFE_INTEGER : distanceToLeft, allowedDirections === "vertical" ? Number.MAX_SAFE_INTEGER : distanceToRight, allowedDirections === "horizontal" ? Number.MAX_SAFE_INTEGER : distanceToTop, allowedDirections === "horizontal" ? Number.MAX_SAFE_INTEGER : distanceToBottom);
    // eslint-disable-next-line unicorn/prefer-switch
    if (minDistance === distanceToBottom) {
        return { x: rect.x, y: rect.y + rect.height, width: rect.width, height: py - rect.y - rect.height + 1 };
    }
    else if (minDistance === distanceToTop) {
        return { x: rect.x, y: py, width: rect.width, height: rect.y - py };
    }
    else if (minDistance === distanceToRight) {
        return { x: rect.x + rect.width, y: rect.y, width: px - rect.x - rect.width + 1, height: rect.height };
    }
    else {
        return { x: px, y: rect.y, width: rect.x - px, height: rect.height };
    }
}
function intersectRect(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 <= x2 + w2 && x2 <= x1 + w1 && y1 <= y2 + h2 && y2 <= y1 + h1;
}
function pointInRect(rect, x, y) {
    return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height;
}
function combineRects(a, b) {
    const x = Math.min(a.x, b.x);
    const y = Math.min(a.y, b.y);
    const width = Math.max(a.x + a.width, b.x + b.width) - x;
    const height = Math.max(a.y + a.height, b.y + b.height) - y;
    return { x, y, width, height };
}
function rectContains(a, b) {
    return a.x <= b.x && a.y <= b.y && a.x + a.width >= b.x + b.width && a.y + a.height >= b.y + b.height;
}
/**
 * This function is absolutely critical for the performance of the fill handle and highlight regions. If you don't
 * hug rectanges when they are dashed and they are huge you will get giant GPU stalls. The reason for the mod is
 * if you don't respect the dash stroke size you will get weird artificts as the rectangle changes sizes (the dashes
 * won't line up from one frame to the next)
 */
function hugRectToTarget(rect, width, height, mod) {
    // Combine checks for early return
    if (rect.x > width ||
        rect.y > height ||
        (rect.x < 0 && rect.y < 0 && rect.x + rect.width > width && rect.y + rect.height > height)) {
        return undefined;
    }
    // Direct return if the rectangle is completely within bounds
    if (rect.x >= 0 && rect.y >= 0 && rect.x + rect.width <= width && rect.y + rect.height <= height) {
        return rect;
    }
    // Pre-compute constants for boundaries, we are giving ourselves slop here because we don't want to have weird
    // issues when scaling is applied. 4px is more than enough slop.
    const leftMax = -4;
    const topMax = -4;
    const rightMax = width + 4;
    const bottomMax = height + 4;
    // Pre-compute boundary overflows
    const leftOverflow = leftMax - rect.x;
    const rightOverflow = rect.x + rect.width - rightMax;
    const topOverflow = topMax - rect.y;
    const bottomOverflow = rect.y + rect.height - bottomMax;
    // Adjust if necessary, using simplified calculations
    const left = leftOverflow > 0 ? rect.x + Math.floor(leftOverflow / mod) * mod : rect.x;
    const right = rightOverflow > 0 ? rect.x + rect.width - Math.floor(rightOverflow / mod) * mod : rect.x + rect.width;
    const top = topOverflow > 0 ? rect.y + Math.floor(topOverflow / mod) * mod : rect.y;
    const bottom = bottomOverflow > 0 ? rect.y + rect.height - Math.floor(bottomOverflow / mod) * mod : rect.y + rect.height;
    return { x: left, y: top, width: right - left, height: bottom - top };
}
function splitRectIntoRegions(rect, splitIndicies, width, height, splitLocations) {
    const [lSplit, tSplit, rSplit, bSplit] = splitIndicies;
    const [lClip, tClip, rClip, bClip] = splitLocations;
    const { x: inX, y: inY, width: inW, height: inH } = rect;
    const result = [];
    if (inW <= 0 || inH <= 0)
        return result;
    const inRight = inX + inW;
    const inBottom = inY + inH;
    // The goal is to split the inbound rect into up to 9 regions based on the provided split indicies which are
    // more or less cut lines. The cut lines are whole numbers as is the rect. We are dividing cells on a table.
    // In theory there can be up to 9 regions returned, so we need to be careful to make sure we get them all and
    // not return any empty regions.
    // compute some handy values
    const isOverLeft = inX < lSplit;
    const isOverTop = inY < tSplit;
    const isOverRight = inX + inW > rSplit;
    const isOverBottom = inY + inH > bSplit;
    const isOverCenterVert = (inX >= lSplit && inX < rSplit) ||
        (inRight > lSplit && inRight <= rSplit) ||
        (inX < lSplit && inRight > rSplit);
    const isOverCenterHoriz = (inY >= tSplit && inY < bSplit) ||
        (inBottom > tSplit && inBottom <= bSplit) ||
        (inY < tSplit && inBottom > bSplit);
    const isOverCenter = isOverCenterVert && isOverCenterHoriz;
    // center
    if (isOverCenter) {
        const x = Math.max(inX, lSplit);
        const y = Math.max(inY, tSplit);
        const right = Math.min(inRight, rSplit);
        const bottom = Math.min(inBottom, bSplit);
        result.push({
            rect: { x, y, width: right - x, height: bottom - y },
            clip: {
                x: lClip,
                y: tClip,
                width: rClip - lClip + 1,
                height: bClip - tClip + 1,
            },
        });
    }
    // top left
    if (isOverLeft && isOverTop) {
        const x = inX;
        const y = inY;
        const right = Math.min(inRight, lSplit);
        const bottom = Math.min(inBottom, tSplit);
        result.push({
            rect: {
                x,
                y,
                width: right - x,
                height: bottom - y,
            },
            clip: {
                x: 0,
                y: 0,
                width: lClip + 1,
                height: tClip + 1,
            },
        });
    }
    // top center
    if (isOverTop && isOverCenterVert) {
        const x = Math.max(inX, lSplit);
        const y = inY;
        const right = Math.min(inRight, rSplit);
        const bottom = Math.min(inBottom, tSplit);
        result.push({
            rect: {
                x,
                y,
                width: right - x,
                height: bottom - y,
            },
            clip: {
                x: lClip,
                y: 0,
                width: rClip - lClip + 1,
                height: tClip + 1,
            },
        });
    }
    // top right
    if (isOverTop && isOverRight) {
        const x = Math.max(inX, rSplit);
        const y = inY;
        const right = inRight;
        const bottom = Math.min(inBottom, tSplit);
        result.push({
            rect: {
                x,
                y,
                width: right - x,
                height: bottom - y,
            },
            clip: {
                x: rClip,
                y: 0,
                width: width - rClip + 1,
                height: tClip + 1,
            },
        });
    }
    // center left
    if (isOverLeft && isOverCenterHoriz) {
        const x = inX;
        const y = Math.max(inY, tSplit);
        const right = Math.min(inRight, lSplit);
        const bottom = Math.min(inBottom, bSplit);
        result.push({
            rect: {
                x,
                y,
                width: right - x,
                height: bottom - y,
            },
            clip: {
                x: 0,
                y: tClip,
                width: lClip + 1,
                height: bClip - tClip + 1,
            },
        });
    }
    // center right
    if (isOverRight && isOverCenterHoriz) {
        const x = Math.max(inX, rSplit);
        const y = Math.max(inY, tSplit);
        const right = inRight;
        const bottom = Math.min(inBottom, bSplit);
        result.push({
            rect: {
                x,
                y,
                width: right - x,
                height: bottom - y,
            },
            clip: {
                x: rClip,
                y: tClip,
                width: width - rClip + 1,
                height: bClip - tClip + 1,
            },
        });
    }
    // bottom left
    if (isOverLeft && isOverBottom) {
        const x = inX;
        const y = Math.max(inY, bSplit);
        const right = Math.min(inRight, lSplit);
        const bottom = inBottom;
        result.push({
            rect: {
                x,
                y,
                width: right - x,
                height: bottom - y,
            },
            clip: {
                x: 0,
                y: bClip,
                width: lClip + 1,
                height: height - bClip + 1,
            },
        });
    }
    // bottom center
    if (isOverBottom && isOverCenterVert) {
        const x = Math.max(inX, lSplit);
        const y = Math.max(inY, bSplit);
        const right = Math.min(inRight, rSplit);
        const bottom = inBottom;
        result.push({
            rect: {
                x,
                y,
                width: right - x,
                height: bottom - y,
            },
            clip: {
                x: lClip,
                y: bClip,
                width: rClip - lClip + 1,
                height: height - bClip + 1,
            },
        });
    }
    // bottom right
    if (isOverRight && isOverBottom) {
        const x = Math.max(inX, rSplit);
        const y = Math.max(inY, bSplit);
        const right = inRight;
        const bottom = inBottom;
        result.push({
            rect: {
                x,
                y,
                width: right - x,
                height: bottom - y,
            },
            clip: {
                x: rClip,
                y: bClip,
                width: width - rClip + 1,
                height: height - bClip + 1,
            },
        });
    }
    return result;
}
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/common/render-state-provider.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderStateProvider: () => (/* binding */ RenderStateProvider),
/* harmony export */   WindowingTrackerBase: () => (/* binding */ WindowingTrackerBase),
/* harmony export */   packColRowToNumber: () => (/* binding */ packColRowToNumber),
/* harmony export */   unpackCol: () => (/* binding */ unpackCol),
/* harmony export */   unpackNumberToColRow: () => (/* binding */ unpackNumberToColRow),
/* harmony export */   unpackRow: () => (/* binding */ unpackRow)
/* harmony export */ });
/* harmony import */ var _support_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");

// max safe int 2^53 - 1 (minus 1 omitted from here on)
// max safe columns is 2^21 or 2,097,151
// max safe rows is 2^32 or 4,294,967,295
// If 3 rows render as an inch, then the max safe height is 1,431,655,765 inches or 22,426,868 miles
// the distance to the moon is 238,900 miles, so this would give you a data grid that goes to the moon and back 94 times
// seems fine
const rowShift = 1 << 21;
function packColRowToNumber(col, row) {
    return (row + 2) * rowShift + col;
}
function unpackCol(packed) {
    return packed % rowShift;
}
function unpackRow(packed) {
    return Math.floor(packed / rowShift) - 2;
}
function unpackNumberToColRow(packed) {
    const col = unpackCol(packed);
    const row = unpackRow(packed);
    return [col, row];
}
class WindowingTrackerBase {
    visibleWindow = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    };
    freezeCols = 0;
    freezeRows = [];
    isInWindow = (packed) => {
        const col = unpackCol(packed);
        const row = unpackRow(packed);
        const w = this.visibleWindow;
        const colInWindow = (col >= w.x && col <= w.x + w.width) || col < this.freezeCols;
        const rowInWindow = (row >= w.y && row <= w.y + w.height) || this.freezeRows.includes(row);
        return colInWindow && rowInWindow;
    };
    setWindow(newWindow, freezeCols, freezeRows) {
        if (this.visibleWindow.x === newWindow.x &&
            this.visibleWindow.y === newWindow.y &&
            this.visibleWindow.width === newWindow.width &&
            this.visibleWindow.height === newWindow.height &&
            this.freezeCols === freezeCols &&
            (0,_support_js__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(this.freezeRows, freezeRows))
            return;
        this.visibleWindow = newWindow;
        this.freezeCols = freezeCols;
        this.freezeRows = freezeRows;
        this.clearOutOfWindow();
    }
}
class RenderStateProvider extends WindowingTrackerBase {
    cache = new Map();
    setValue = (location, state) => {
        this.cache.set(packColRowToNumber(location[0], location[1]), state);
    };
    getValue = (location) => {
        return this.cache.get(packColRowToNumber(location[0], location[1]));
    };
    clearOutOfWindow = () => {
        for (const [key] of this.cache.entries()) {
            if (!this.isInWindow(key)) {
                this.cache.delete(key);
            }
        }
    };
}
//# sourceMappingURL=render-state-provider.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/common/resize-detector.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useResizeDetector: () => (/* binding */ useResizeDetector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* eslint-disable @typescript-eslint/strict-boolean-expressions */

function useResizeDetector(initialSize) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: initialSize?.[0],
        height: initialSize?.[1],
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
        const resizeCallback = entries => {
            for (const entry of entries) {
                const { width, height } = (entry && entry.contentRect) || {};
                setSize(cv => (cv.width === width && cv.height === height ? cv : { width, height }));
            }
        };
        const resizeObserver = new window.ResizeObserver(resizeCallback);
        if (ref.current) {
            resizeObserver.observe(ref.current, undefined);
        }
        return () => {
            resizeObserver.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current]);
    return { ref, ...size };
}
//# sourceMappingURL=resize-detector.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/common/styles.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext),
/* harmony export */   getDataEditorTheme: () => (/* binding */ getDataEditorTheme),
/* harmony export */   makeCSSStyle: () => (/* binding */ makeCSSStyle),
/* harmony export */   mergeAndRealizeTheme: () => (/* binding */ mergeAndRealizeTheme),
/* harmony export */   useTheme: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_data_grid_color_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/color-parser.js");


// theme variable precidence
/** @category Theme */
function makeCSSStyle(theme) {
    return {
        "--gdg-accent-color": theme.accentColor,
        "--gdg-accent-fg": theme.accentFg,
        "--gdg-accent-light": theme.accentLight,
        "--gdg-text-dark": theme.textDark,
        "--gdg-text-medium": theme.textMedium,
        "--gdg-text-light": theme.textLight,
        "--gdg-text-bubble": theme.textBubble,
        "--gdg-bg-icon-header": theme.bgIconHeader,
        "--gdg-fg-icon-header": theme.fgIconHeader,
        "--gdg-text-header": theme.textHeader,
        "--gdg-text-group-header": theme.textGroupHeader ?? theme.textHeader,
        "--gdg-text-header-selected": theme.textHeaderSelected,
        "--gdg-bg-cell": theme.bgCell,
        "--gdg-bg-cell-medium": theme.bgCellMedium,
        "--gdg-bg-header": theme.bgHeader,
        "--gdg-bg-header-has-focus": theme.bgHeaderHasFocus,
        "--gdg-bg-header-hovered": theme.bgHeaderHovered,
        "--gdg-bg-bubble": theme.bgBubble,
        "--gdg-bg-bubble-selected": theme.bgBubbleSelected,
        "--gdg-bg-search-result": theme.bgSearchResult,
        "--gdg-border-color": theme.borderColor,
        "--gdg-horizontal-border-color": theme.horizontalBorderColor ?? theme.borderColor,
        "--gdg-drilldown-border": theme.drilldownBorder,
        "--gdg-link-color": theme.linkColor,
        "--gdg-cell-horizontal-padding": `${theme.cellHorizontalPadding}px`,
        "--gdg-cell-vertical-padding": `${theme.cellVerticalPadding}px`,
        "--gdg-header-font-style": theme.headerFontStyle,
        "--gdg-base-font-style": theme.baseFontStyle,
        "--gdg-marker-font-style": theme.markerFontStyle,
        "--gdg-font-family": theme.fontFamily,
        "--gdg-editor-font-size": theme.editorFontSize,
        ...(theme.resizeIndicatorColor === undefined
            ? {}
            : { "--gdg-resize-indicator-color": theme.resizeIndicatorColor }),
        ...(theme.headerBottomBorderColor === undefined
            ? {}
            : { "--gdg-header-bottom-border-color": theme.headerBottomBorderColor }),
        ...(theme.roundingRadius === undefined ? {} : { "--gdg-rounding-radius": `${theme.roundingRadius}px` }),
    };
}
const dataEditorBaseTheme = {
    accentColor: "#4F5DFF",
    accentFg: "#FFFFFF",
    accentLight: "rgba(62, 116, 253, 0.1)",
    textDark: "#313139",
    textMedium: "#737383",
    textLight: "#B2B2C0",
    textBubble: "#313139",
    bgIconHeader: "#737383",
    fgIconHeader: "#FFFFFF",
    textHeader: "#313139",
    textGroupHeader: "#313139BB",
    textHeaderSelected: "#FFFFFF",
    bgCell: "#FFFFFF",
    bgCellMedium: "#FAFAFB",
    bgHeader: "#F7F7F8",
    bgHeaderHasFocus: "#E9E9EB",
    bgHeaderHovered: "#EFEFF1",
    bgBubble: "#EDEDF3",
    bgBubbleSelected: "#FFFFFF",
    bgSearchResult: "#fff9e3",
    borderColor: "rgba(115, 116, 131, 0.16)",
    drilldownBorder: "rgba(0, 0, 0, 0)",
    linkColor: "#353fb5",
    cellHorizontalPadding: 8,
    cellVerticalPadding: 3,
    headerIconSize: 18,
    headerFontStyle: "600 13px",
    baseFontStyle: "13px",
    markerFontStyle: "9px",
    fontFamily: "Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",
    editorFontSize: "13px",
    lineHeight: 1.4, //unitless scaler depends on your font
};
/** @category Theme */
function getDataEditorTheme() {
    return dataEditorBaseTheme;
}
/** @category Theme */
const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(dataEditorBaseTheme);
/** @category Hooks */
function useTheme() {
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeContext);
}
function mergeAndRealizeTheme(theme, ...overlays) {
    const merged = { ...theme };
    for (const overlay of overlays) {
        if (overlay !== undefined) {
            for (const key in overlay) {
                // eslint-disable-next-line no-prototype-builtins
                if (overlay.hasOwnProperty(key)) {
                    if (key === "bgCell") {
                        merged[key] = (0,_internal_data_grid_color_parser_js__WEBPACK_IMPORTED_MODULE_1__.blend)(overlay[key], merged[key]);
                    }
                    else {
                        merged[key] = overlay[key];
                    }
                }
            }
        }
    }
    if (merged.headerFontFull === undefined ||
        theme.fontFamily !== merged.fontFamily ||
        theme.headerFontStyle !== merged.headerFontStyle) {
        merged.headerFontFull = `${merged.headerFontStyle} ${merged.fontFamily}`;
    }
    if (merged.baseFontFull === undefined ||
        theme.fontFamily !== merged.fontFamily ||
        theme.baseFontStyle !== merged.baseFontStyle) {
        merged.baseFontFull = `${merged.baseFontStyle} ${merged.fontFamily}`;
    }
    if (merged.markerFontFull === undefined ||
        theme.fontFamily !== merged.fontFamily ||
        theme.markerFontStyle !== merged.markerFontStyle) {
        merged.markerFontFull = `${merged.markerFontStyle} ${merged.fontFamily}`;
    }
    return merged;
}
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   assertNever: () => (/* binding */ assertNever),
/* harmony export */   deepEqual: () => (/* binding */ deepEqual),
/* harmony export */   maybe: () => (/* binding */ maybe),
/* harmony export */   proveType: () => (/* binding */ proveType)
/* harmony export */ });
function proveType(_val) {
    // do nothing, just prove the compiler thinks the types match
}
function panic(message = "This should not happen") {
    throw new Error(message);
}
function assert(fact, message = "Assertion failed") {
    if (fact)
        return;
    return panic(message);
}
function assertNever(_never, msg) {
    return panic(msg ?? "Hell froze over");
}
function maybe(fn, defaultValue) {
    try {
        return fn();
    }
    catch {
        return defaultValue;
    }
}
// The following code is licensed under the MIT license to Luke Edwards
// Original license and code can be found here: https://github.com/lukeed/dequal/blob/master/license
// I have merely "ported" it to be TS (any any any) and directly included it for convenience.
const has = Object.prototype.hasOwnProperty;
// eslint-disable-next-line sonarjs/cognitive-complexity
function deepEqual(foo, bar) {
    let ctor, len;
    if (foo === bar)
        return true;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date)
            return foo.getTime() === bar.getTime();
        if (ctor === RegExp)
            return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while (len-- && deepEqual(foo[len], bar[len]))
                    ;
            }
            return len === -1;
        }
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!ctor || typeof foo === "object") {
            len = 0;
            // eslint-disable-next-line guard-for-in
            for (ctor in foo) {
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
                    return false;
                if (!(ctor in bar) || !deepEqual(foo[ctor], bar[ctor]))
                    return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
//# sourceMappingURL=support.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkmark: () => (/* binding */ Checkmark),
/* harmony export */   EditPencil: () => (/* binding */ EditPencil),
/* harmony export */   degreesToRadians: () => (/* binding */ degreesToRadians),
/* harmony export */   direction: () => (/* binding */ direction),
/* harmony export */   getScrollBarWidth: () => (/* binding */ getScrollBarWidth),
/* harmony export */   getSquareBB: () => (/* binding */ getSquareBB),
/* harmony export */   getSquareWidth: () => (/* binding */ getSquareWidth),
/* harmony export */   getSquareXPosFromAlign: () => (/* binding */ getSquareXPosFromAlign),
/* harmony export */   makeAccessibilityStringForArray: () => (/* binding */ makeAccessibilityStringForArray),
/* harmony export */   pointIsWithinBB: () => (/* binding */ pointIsWithinBB),
/* harmony export */   useDebouncedMemo: () => (/* binding */ useDebouncedMemo),
/* harmony export */   useDeepMemo: () => (/* binding */ useDeepMemo),
/* harmony export */   useEventListener: () => (/* binding */ useEventListener),
/* harmony export */   useStateWithReactiveInput: () => (/* binding */ useStateWithReactiveInput),
/* harmony export */   whenDefined: () => (/* binding */ whenDefined)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var lodash_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/debounce.js");
/* harmony import */ var _support_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");



function useEventListener(eventName, handler, element, passive, capture = false) {
    // Create a ref that stores handler
    const savedHandler = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    savedHandler.current = handler;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        // Make sure element supports addEventListener
        if (element === null || element.addEventListener === undefined)
            return;
        const el = element;
        // Create event listener that calls handler function stored in ref
        const eventListener = (event) => {
            savedHandler.current?.call(el, event);
        };
        el.addEventListener(eventName, eventListener, { passive, capture });
        // Remove event listener on cleanup
        return () => {
            el.removeEventListener(eventName, eventListener, { capture });
        };
    }, [eventName, element, passive, capture] // Re-run if eventName or element changes
    );
}
function whenDefined(obj, result) {
    return obj === undefined ? undefined : result;
}
const PI = Math.PI;
function degreesToRadians(degrees) {
    return (degrees * PI) / 180;
}
const getSquareBB = (posX, posY, squareSideLength) => ({
    x1: posX - squareSideLength / 2,
    y1: posY - squareSideLength / 2,
    x2: posX + squareSideLength / 2,
    y2: posY + squareSideLength / 2,
});
const getSquareXPosFromAlign = (alignment, containerX, containerWidth, horizontalPadding, squareWidth) => {
    switch (alignment) {
        case "left":
            return Math.floor(containerX) + horizontalPadding + squareWidth / 2;
        case "center":
            return Math.floor(containerX + containerWidth / 2);
        case "right":
            return Math.floor(containerX + containerWidth) - horizontalPadding - squareWidth / 2;
    }
};
const getSquareWidth = (maxSize, containerHeight, verticalPadding) => Math.min(maxSize, containerHeight - verticalPadding * 2);
const pointIsWithinBB = (x, y, bb) => bb.x1 <= x && x <= bb.x2 && bb.y1 <= y && y <= bb.y2;
const EditPencil = (props) => {
    const fg = props.fgColor ?? "currentColor";
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12.7073 7.05029C7.87391 11.8837 10.4544 9.30322 6.03024 13.7273C5.77392 13.9836 5.58981 14.3071 5.50189 14.6587L4.52521 18.5655C4.38789 19.1148 4.88543 19.6123 5.43472 19.475L9.34146 18.4983C9.69313 18.4104 10.0143 18.2286 10.2706 17.9722L16.9499 11.2929", stroke: fg, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M20.4854 4.92901L19.0712 3.5148C18.2901 2.73375 17.0238 2.73375 16.2428 3.5148L14.475 5.28257C15.5326 7.71912 16.4736 8.6278 18.7176 9.52521L20.4854 7.75744C21.2665 6.97639 21.2665 5.71006 20.4854 4.92901Z", stroke: fg, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" })));
};
const Checkmark = (props) => {
    const fg = props.fgColor ?? "currentColor";
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M19 6L10.3802 17L5.34071 11.8758", vectorEffect: "non-scaling-stroke", stroke: fg, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
};
function useDebouncedMemo(factory, deps, time) {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(factory);
    const mountedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        mountedRef.current = false;
    }, []);
    const debouncedSetState = react__WEBPACK_IMPORTED_MODULE_0__.useRef(lodash_debounce_js__WEBPACK_IMPORTED_MODULE_1__(x => {
        if (mountedRef.current) {
            setState(x);
        }
    }, time));
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        if (mountedRef.current) {
            debouncedSetState.current(() => factory());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    return state;
}
// Shamelessly inline direction to avoid conflicts with 1.0 and 2.0.
const rtlRange = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
const ltrRange = "A-Za-z\u00C0-\u00D6\u00D8-\u00F6" +
    "\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C" +
    "\uFE00-\uFE6F\uFEFD-\uFFFF";
/* eslint-disable no-misleading-character-class */
const rtl = new RegExp("^[^" + ltrRange + "]*[" + rtlRange + "]");
/* eslint-enable no-misleading-character-class */
function direction(value) {
    return rtl.test(value) ? "rtl" : "not-rtl";
}
let scrollbarWidthCache = undefined;
function getScrollBarWidth() {
    if (typeof document === "undefined")
        return 0;
    if (scrollbarWidthCache !== undefined)
        return scrollbarWidthCache;
    const inner = document.createElement("p");
    inner.style.width = "100%";
    inner.style.height = "200px";
    const outer = document.createElement("div");
    outer.id = "testScrollbar";
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.append(inner);
    document.body.append(outer);
    const w1 = inner.offsetWidth;
    outer.style.overflow = "scroll";
    let w2 = inner.offsetWidth;
    if (w1 === w2) {
        w2 = outer.clientWidth;
    }
    outer.remove();
    scrollbarWidthCache = w1 - w2;
    return scrollbarWidthCache;
}
// Dear future reader,
// This dumb hook is to make sure if the inputState changes, that effectively behaves like an instant "setState" call.
// This is useful in a wide variety of situations. I'm too dumb to know if this is a good idea or a really dumb one.
// I can't tell. It's like poes law but for code.
//
// I'm sorry.
const empty = Symbol();
function useStateWithReactiveInput(inputState) {
    // When [0] is not empty we will return it, [1] is always the last value we saw
    const inputStateRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef([empty, inputState]);
    if (inputStateRef.current[1] !== inputState) {
        // it changed, we must use thee!
        inputStateRef.current[0] = inputState;
    }
    inputStateRef.current[1] = inputState;
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(inputState);
    // crimes against humanity here
    const [, forceRender] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const setStateOuter = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(nv => {
        // this takes care of the case where the inputState was set, then setState gets called again but back to what
        // the state was before the inputState changed. Since the useState effect wont trigger a render in this case
        // we need to be very naughty and force it to see the change. Technically this may not be needed some chunk of
        // the time (in fact most of it) but checking for it is likely to be more expensive than just over-doing it
        const s = inputStateRef.current[0];
        if (s !== empty) {
            nv = typeof nv === "function" ? nv(s) : nv;
            if (nv === s)
                return; // they are setting it to what the inputState is anyway so we can just do nothing
        }
        if (s !== empty)
            forceRender({});
        setState(pv => {
            if (typeof nv === "function") {
                return nv(s === empty ? pv : s);
            }
            return nv;
        });
        inputStateRef.current[0] = empty;
    }, []);
    const onEmpty = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        inputStateRef.current[0] = empty;
        forceRender({});
    }, []);
    return [inputStateRef.current[0] === empty ? state : inputStateRef.current[0], setStateOuter, onEmpty];
}
function makeAccessibilityStringForArray(arr) {
    // this is basically just .join(", ") but checks to make sure it is not going to allocate
    // a string that is so large it might crash the browser
    if (arr.length === 0) {
        return "";
    }
    let index = 0;
    let count = 0;
    for (const str of arr) {
        count += str.length;
        if (count > 10000)
            break;
        index++;
    }
    return arr.slice(0, index).join(", ");
}
function useDeepMemo(value) {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);
    if (!(0,_support_js__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(value, ref.current)) {
        ref.current = value;
    }
    return ref.current;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor-all.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataEditorAll: () => (/* binding */ DataEditorAll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _data_editor_data_editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor.js");
/* harmony import */ var _cells_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/cells/index.js");
/* harmony import */ var _internal_data_grid_sprites_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/sprites.js");
/* harmony import */ var _common_image_window_loader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/image-window-loader.js");





const DataEditorAllImpl = (p, ref) => {
    const allSprites = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        return { ..._internal_data_grid_sprites_js__WEBPACK_IMPORTED_MODULE_3__.sprites, ...p.headerIcons };
    }, [p.headerIcons]);
    const imageWindowLoader = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        return p.imageWindowLoader ?? new _common_image_window_loader_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }, [p.imageWindowLoader]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_data_editor_data_editor_js__WEBPACK_IMPORTED_MODULE_1__.DataEditor, { ...p, renderers: _cells_index_js__WEBPACK_IMPORTED_MODULE_2__.AllCellRenderers, headerIcons: allSprites, ref: ref, imageWindowLoader: imageWindowLoader }));
};
const DataEditorAll = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DataEditorAllImpl);
//# sourceMappingURL=data-editor-all.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/copy-paste.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeHTML: () => (/* binding */ decodeHTML),
/* harmony export */   getCopyBufferContents: () => (/* binding */ getCopyBufferContents)
/* harmony export */ });
/* harmony import */ var _common_support_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* eslint-disable sonarjs/no-duplicate-string */


function convertCellToBuffer(cell) {
    if (cell.copyData !== undefined) {
        return {
            formatted: cell.copyData,
            rawValue: cell.copyData,
            format: "string",
        };
    }
    switch (cell.kind) {
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Boolean:
            return {
                formatted: cell.data === true
                    ? "TRUE"
                    : cell.data === false
                        ? "FALSE"
                        : cell.data === _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.BooleanIndeterminate
                            ? "INDETERMINATE"
                            : "",
                rawValue: cell.data,
                format: "boolean",
            };
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Custom:
            return {
                formatted: cell.copyData,
                rawValue: cell.copyData,
                format: "string",
            };
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Image:
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Bubble:
            return {
                formatted: cell.data,
                rawValue: cell.data,
                format: "string-array",
            };
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Drilldown:
            return {
                formatted: cell.data.map(x => x.text),
                rawValue: cell.data.map(x => x.text),
                format: "string-array",
            };
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Text:
            return {
                formatted: cell.displayData ?? cell.data,
                rawValue: cell.data,
                format: "string",
            };
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Uri:
            return {
                formatted: cell.displayData ?? cell.data,
                rawValue: cell.data,
                format: "url",
            };
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Markdown:
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.RowID:
            return {
                formatted: cell.data,
                rawValue: cell.data,
                format: "string",
            };
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Number:
            return {
                formatted: cell.displayData,
                rawValue: cell.data,
                format: "number",
            };
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Loading:
            return {
                formatted: "#LOADING",
                rawValue: "",
                format: "string",
            };
        case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Protected:
            return {
                formatted: "************",
                rawValue: "",
                format: "string",
            };
        default:
            (0,_common_support_js__WEBPACK_IMPORTED_MODULE_0__.assertNever)(cell);
    }
}
function createBufferFromGridCells(cells, columnIndexes) {
    const copyBuffer = cells.map((row, index) => {
        const mappedIndex = columnIndexes[index];
        return row.map(cell => {
            if (cell.span !== undefined && cell.span[0] !== mappedIndex)
                return {
                    formatted: "",
                    rawValue: "",
                    format: "string",
                };
            return convertCellToBuffer(cell);
        });
    });
    return copyBuffer;
}
function escapeIfNeeded(str, withComma) {
    if ((withComma ? /[\t\n",]/ : /[\t\n"]/).test(str)) {
        str = `"${str.replace(/"/g, '""')}"`;
    }
    return str;
}
function createTextBuffer(copyBuffer) {
    const lines = [];
    for (const row of copyBuffer) {
        const line = [];
        for (const cell of row) {
            if (cell.format === "url") {
                line.push(cell.rawValue?.toString() ?? "");
            }
            else if (cell.format === "string-array") {
                line.push(cell.formatted.map(x => escapeIfNeeded(x, true)).join(","));
            }
            else {
                line.push(escapeIfNeeded(cell.formatted, false));
            }
        }
        lines.push(line.join("\t"));
    }
    return lines.join("\n");
}
function formatHtmlTextContent(text) {
    // The following formatting for the `html` variable ensures that when pasting,
    // spaces are preserved in both Google Sheets and Excel. This is done by:
    // 1. Replacing tabs with four spaces for consistency. Also google sheets disallows any tabs.
    // 2. Wrapping each space with a span element to prevent them from being collapsed or ignored during the
    //    paste operation
    return text.replace(/\t/g, "    ").replace(/ {2,}/g, match => "<span> </span>".repeat(match.length));
}
function formatHtmlAttributeContent(attrText) {
    // Escape all quotes, lt, gt, and other special characters
    return ('"' + attrText.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '"');
}
function restoreHtmlEntities(str) {
    // Unescape all quotes, lt, gt, and other special characters
    return str
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
}
function createHtmlBuffer(copyBuffer) {
    const lines = [];
    lines.push(`<style type="text/css"><!--br {mso-data-placement:same-cell;}--></style>`, "<table><tbody>");
    for (const row of copyBuffer) {
        lines.push("<tr>");
        for (const cell of row) {
            const formatStr = `gdg-format="${cell.format}"`;
            if (cell.format === "url") {
                lines.push(`<td ${formatStr}><a href="${cell.rawValue}">${formatHtmlTextContent(cell.formatted)}</a></td>`);
            }
            else {
                if (cell.format === "string-array") {
                    lines.push(`<td ${formatStr}><ol>${cell.formatted
                        .map((x, ind) => `<li gdg-raw-value=${formatHtmlAttributeContent(cell.rawValue[ind])}>` +
                        formatHtmlTextContent(x) +
                        "</li>")
                        .join("")}</ol></td>`);
                }
                else {
                    lines.push(`<td gdg-raw-value=${formatHtmlAttributeContent(cell.rawValue?.toString() ?? "")} ${formatStr}>${formatHtmlTextContent(cell.formatted)}</td>`);
                }
            }
        }
        lines.push("</tr>");
    }
    lines.push("</tbody></table>");
    return lines.join("");
}
// This function encodes grid cells to a table object.
// Each td in the table contains one of 3 things
// - A string directly and the td has a `gdg-raw-value` attribute with the raw value
// - An anchor tag with a href and the text is the formatted value
// - An ordered list with each item containing a `gdg-raw-value` attribute with the raw value
function getCopyBufferContents(cells, columnIndexes) {
    const copyBuffer = createBufferFromGridCells(cells, columnIndexes);
    const textPlain = createTextBuffer(copyBuffer);
    const textHtml = createHtmlBuffer(copyBuffer);
    return {
        textPlain,
        textHtml,
    };
}
function decodeHTML(html) {
    const fragment = document.createElement("html");
    // we dont want to retain the pasted non-breaking spaces
    fragment.innerHTML = html.replace(/&nbsp;/g, " ");
    const tableEl = fragment.querySelector("table");
    if (tableEl === null)
        return undefined;
    const walkEl = [tableEl];
    const result = [];
    let current;
    while (walkEl.length > 0) {
        const el = walkEl.pop();
        if (el === undefined)
            break;
        if (el instanceof HTMLTableElement || el.nodeName === "TBODY") {
            walkEl.push(...[...el.children].reverse());
        }
        else if (el instanceof HTMLTableRowElement) {
            if (current !== undefined) {
                result.push(current);
            }
            current = [];
            walkEl.push(...[...el.children].reverse());
        }
        else if (el instanceof HTMLTableCellElement) {
            // be careful not to use innerText here as its behavior is not well defined for non DOM attached nodes
            const clone = el.cloneNode(true);
            // Apple numbers seems to always wrap the cell in a p tag and a font tag. It also puts both <br> and \n
            // linebreak markers in the code. This is both unneeded and causes issues with the paste code.
            const firstTagIsPara = clone.children.length === 1 && clone.children[0].nodeName === "P";
            const para = firstTagIsPara ? clone.children[0] : null;
            const isAppleNumbers = para?.children.length === 1 && para.children[0].nodeName === "FONT";
            const brs = clone.querySelectorAll("br");
            for (const br of brs) {
                br.replaceWith("\n");
            }
            const attributeValue = clone.getAttribute("gdg-raw-value");
            const formatValue = (clone.getAttribute("gdg-format") ?? "string"); // fix me at some point
            if (clone.querySelector("a") !== null) {
                current?.push({
                    // raw value is the href
                    rawValue: clone.querySelector("a")?.getAttribute("href") ?? "",
                    formatted: clone.textContent ?? "",
                    format: formatValue,
                });
            }
            else if (clone.querySelector("ol") !== null) {
                const rawValues = clone.querySelectorAll("li");
                current?.push({
                    rawValue: [...rawValues].map(x => x.getAttribute("gdg-raw-value") ?? ""),
                    formatted: [...rawValues].map(x => x.textContent ?? ""),
                    format: "string-array",
                });
            }
            else if (attributeValue !== null) {
                current?.push({
                    rawValue: restoreHtmlEntities(attributeValue),
                    formatted: clone.textContent ?? "",
                    format: formatValue,
                });
            }
            else {
                let textContent = clone.textContent ?? "";
                if (isAppleNumbers) {
                    // replace any newline not preceded by a newline
                    textContent = textContent.replace(/\n(?!\n)/g, "");
                }
                current?.push({
                    rawValue: textContent ?? "",
                    formatted: textContent ?? "",
                    format: formatValue,
                });
            }
        }
    }
    if (current !== undefined) {
        result.push(current);
    }
    return result;
}
//# sourceMappingURL=copy-paste.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor-fns.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard),
/* harmony export */   expandSelection: () => (/* binding */ expandSelection),
/* harmony export */   toggleBoolean: () => (/* binding */ toggleBoolean),
/* harmony export */   unquote: () => (/* binding */ unquote)
/* harmony export */ });
/* harmony import */ var _copy_paste_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/copy-paste.js");


function expandSelection(newVal, getCellsForSelection, rowMarkerOffset, spanRangeBehavior, abortController) {
    const origVal = newVal;
    if (spanRangeBehavior === "allowPartial" || newVal.current === undefined || getCellsForSelection === undefined)
        return newVal;
    let isFilled = false;
    do {
        if (newVal?.current === undefined)
            break;
        const r = newVal.current?.range;
        const cells = [];
        if (r.width > 2) {
            const leftCells = getCellsForSelection({
                x: r.x,
                y: r.y,
                width: 1,
                height: r.height,
            }, abortController.signal);
            if (typeof leftCells === "function") {
                return origVal;
            }
            cells.push(...leftCells);
            const rightCells = getCellsForSelection({
                x: r.x + r.width - 1,
                y: r.y,
                width: 1,
                height: r.height,
            }, abortController.signal);
            if (typeof rightCells === "function") {
                return origVal;
            }
            cells.push(...rightCells);
        }
        else {
            const rCells = getCellsForSelection({
                x: r.x,
                y: r.y,
                width: r.width,
                height: r.height,
            }, abortController.signal);
            if (typeof rCells === "function") {
                return origVal;
            }
            cells.push(...rCells);
        }
        let left = r.x - rowMarkerOffset;
        let right = r.x + r.width - 1 - rowMarkerOffset;
        for (const row of cells) {
            for (const cell of row) {
                if (cell.span === undefined)
                    continue;
                left = Math.min(cell.span[0], left);
                right = Math.max(cell.span[1], right);
            }
        }
        if (left === r.x - rowMarkerOffset && right === r.x + r.width - 1 - rowMarkerOffset) {
            isFilled = true;
        }
        else {
            newVal = {
                current: {
                    cell: newVal.current.cell ?? [0, 0],
                    range: {
                        x: left + rowMarkerOffset,
                        y: r.y,
                        width: right - left + 1,
                        height: r.height,
                    },
                    rangeStack: newVal.current.rangeStack,
                },
                columns: newVal.columns,
                rows: newVal.rows,
            };
        }
    } while (!isFilled);
    return newVal;
}
function descape(s) {
    if (s.startsWith('"') && s.endsWith('"')) {
        s = s.slice(1, -1).replace(/""/g, '"');
    }
    return s;
}
function unquote(str) {
    let State;
    (function (State) {
        State[State["None"] = 0] = "None";
        State[State["inString"] = 1] = "inString";
        State[State["inStringPostQuote"] = 2] = "inStringPostQuote";
    })(State || (State = {}));
    const result = [];
    let current = [];
    let start = 0;
    let state = State.None;
    str = str.replace(/\r\n/g, "\n");
    let index = 0;
    for (const char of str) {
        switch (state) {
            case State.None:
                if (char === "\t" || char === "\n") {
                    current.push(str.slice(start, index));
                    start = index + 1;
                    if (char === "\n") {
                        result.push(current);
                        current = [];
                    }
                }
                else if (char === `"`) {
                    state = State.inString;
                }
                break;
            case State.inString:
                if (char === `"`) {
                    state = State.inStringPostQuote;
                }
                break;
            case State.inStringPostQuote:
                if (char === '"') {
                    state = State.inString;
                }
                else if (char === "\t" || char === "\n") {
                    current.push(descape(str.slice(start, index)));
                    start = index + 1;
                    if (char === "\n") {
                        result.push(current);
                        current = [];
                    }
                    state = State.None;
                }
                else {
                    state = State.None;
                }
                break;
        }
        index++;
    }
    if (start < str.length) {
        current.push(descape(str.slice(start, str.length)));
    }
    result.push(current);
    return result.map(r => r.map(c => ({ rawValue: c, formatted: c, format: "string" })));
}
function copyToClipboard(cells, columnIndexes, e) {
    const copyBuffer = (0,_copy_paste_js__WEBPACK_IMPORTED_MODULE_0__.getCopyBufferContents)(cells, columnIndexes);
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const copyWithWriteText = (s) => {
        void window.navigator.clipboard?.writeText(s);
    };
    const copyWithWrite = (s, html) => {
        if (window.navigator.clipboard?.write === undefined)
            return false;
        void window.navigator.clipboard.write([
            new ClipboardItem({
                // eslint-disable-next-line sonarjs/no-duplicate-string
                "text/plain": new Blob([s], { type: "text/plain" }),
                "text/html": new Blob([html], {
                    type: "text/html",
                }),
            }),
        ]);
        return true;
    };
    const copyWithClipboardData = (s, html) => {
        try {
            if (e === undefined || e.clipboardData === null)
                throw new Error("No clipboard data");
            // This might fail if we had to await the thunk
            e?.clipboardData?.setData("text/plain", s);
            e?.clipboardData?.setData("text/html", html);
        }
        catch {
            if (!copyWithWrite(s, html)) {
                copyWithWriteText(s);
            }
        }
    };
    if (window.navigator.clipboard?.write !== undefined || e?.clipboardData !== undefined) {
        void copyWithClipboardData(copyBuffer.textPlain, copyBuffer.textHtml);
    }
    else {
        void copyWithWriteText(copyBuffer.textPlain);
    }
    e?.preventDefault();
}
/**
 * Checkbox behavior:
 *
 * true + click -> unchecked
 * false + click -> checked
 * indeterminate + click -> checked
 * empty + click -> checked
 */
function toggleBoolean(data) {
    return data !== true;
}
//# sourceMappingURL=data-editor-fns.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor-keybindings.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   keybindingDefaults: () => (/* binding */ keybindingDefaults),
/* harmony export */   realizeKeybinds: () => (/* binding */ realizeKeybinds),
/* harmony export */   useKeybindingsWithDefaults: () => (/* binding */ useKeybindingsWithDefaults)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/browser-detect.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");



const keybindingDefaults = {
    downFill: false,
    rightFill: false,
    clear: true,
    closeOverlay: true,
    acceptOverlayDown: true,
    acceptOverlayUp: true,
    acceptOverlayLeft: true,
    acceptOverlayRight: true,
    copy: true,
    paste: true,
    cut: true,
    search: false,
    delete: true,
    activateCell: true,
    scrollToSelectedCell: true,
    goToFirstCell: true,
    goToFirstColumn: true,
    goToFirstRow: true,
    goToLastCell: true,
    goToLastColumn: true,
    goToLastRow: true,
    goToNextPage: true,
    goToPreviousPage: true,
    selectToFirstCell: true,
    selectToFirstColumn: true,
    selectToFirstRow: true,
    selectToLastCell: true,
    selectToLastColumn: true,
    selectToLastRow: true,
    selectAll: true,
    selectRow: true,
    selectColumn: true,
    goUpCell: true,
    goRightCell: true,
    goDownCell: true,
    goLeftCell: true,
    goUpCellRetainSelection: true,
    goRightCellRetainSelection: true,
    goDownCellRetainSelection: true,
    goLeftCellRetainSelection: true,
    selectGrowUp: true,
    selectGrowRight: true,
    selectGrowDown: true,
    selectGrowLeft: true,
};
function realizeKeybind(keybind, defaultVal) {
    if (keybind === true)
        return defaultVal;
    if (keybind === false)
        return "";
    return keybind;
}
function realizeKeybinds(keybinds) {
    const isOSX = _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_1__.browserIsOSX.value;
    return {
        activateCell: realizeKeybind(keybinds.activateCell, " |Enter|shift+Enter"),
        clear: realizeKeybind(keybinds.clear, "any+Escape"),
        closeOverlay: realizeKeybind(keybinds.closeOverlay, "any+Escape"),
        acceptOverlayDown: realizeKeybind(keybinds.acceptOverlayDown, "Enter"),
        acceptOverlayUp: realizeKeybind(keybinds.acceptOverlayUp, "shift+Enter"),
        acceptOverlayLeft: realizeKeybind(keybinds.acceptOverlayLeft, "shift+Tab"),
        acceptOverlayRight: realizeKeybind(keybinds.acceptOverlayRight, "Tab"),
        copy: keybinds.copy,
        cut: keybinds.cut,
        delete: realizeKeybind(keybinds.delete, isOSX ? "Backspace|Delete" : "Delete"),
        downFill: realizeKeybind(keybinds.downFill, "primary+_68"),
        scrollToSelectedCell: realizeKeybind(keybinds.scrollToSelectedCell, "primary+Enter"),
        goDownCell: realizeKeybind(keybinds.goDownCell, "ArrowDown"),
        goDownCellRetainSelection: realizeKeybind(keybinds.goDownCellRetainSelection, "alt+ArrowDown"),
        goLeftCell: realizeKeybind(keybinds.goLeftCell, "ArrowLeft|shift+Tab"),
        goLeftCellRetainSelection: realizeKeybind(keybinds.goLeftCellRetainSelection, "alt+ArrowLeft"),
        goRightCell: realizeKeybind(keybinds.goRightCell, "ArrowRight|Tab"),
        goRightCellRetainSelection: realizeKeybind(keybinds.goRightCellRetainSelection, "alt+ArrowRight"),
        goUpCell: realizeKeybind(keybinds.goUpCell, "ArrowUp"),
        goUpCellRetainSelection: realizeKeybind(keybinds.goUpCellRetainSelection, "alt+ArrowUp"),
        goToFirstCell: realizeKeybind(keybinds.goToFirstCell, "primary+Home"),
        goToFirstColumn: realizeKeybind(keybinds.goToFirstColumn, "Home|primary+ArrowLeft"),
        goToFirstRow: realizeKeybind(keybinds.goToFirstRow, "primary+ArrowUp"),
        goToLastCell: realizeKeybind(keybinds.goToLastCell, "primary+End"),
        goToLastColumn: realizeKeybind(keybinds.goToLastColumn, "End|primary+ArrowRight"),
        goToLastRow: realizeKeybind(keybinds.goToLastRow, "primary+ArrowDown"),
        goToNextPage: realizeKeybind(keybinds.goToNextPage, "PageDown"),
        goToPreviousPage: realizeKeybind(keybinds.goToPreviousPage, "PageUp"),
        paste: keybinds.paste,
        rightFill: realizeKeybind(keybinds.rightFill, "primary+_82"),
        search: realizeKeybind(keybinds.search, "primary+f"),
        selectAll: realizeKeybind(keybinds.selectAll, "primary+a"),
        selectColumn: realizeKeybind(keybinds.selectColumn, "ctrl+ "),
        selectGrowDown: realizeKeybind(keybinds.selectGrowDown, "shift+ArrowDown"),
        selectGrowLeft: realizeKeybind(keybinds.selectGrowLeft, "shift+ArrowLeft"),
        selectGrowRight: realizeKeybind(keybinds.selectGrowRight, "shift+ArrowRight"),
        selectGrowUp: realizeKeybind(keybinds.selectGrowUp, "shift+ArrowUp"),
        selectRow: realizeKeybind(keybinds.selectRow, "shift+ "),
        selectToFirstCell: realizeKeybind(keybinds.selectToFirstCell, "primary+shift+Home"),
        selectToFirstColumn: realizeKeybind(keybinds.selectToFirstColumn, "primary+shift+ArrowLeft"),
        selectToFirstRow: realizeKeybind(keybinds.selectToFirstRow, "primary+shift+ArrowUp"),
        selectToLastCell: realizeKeybind(keybinds.selectToLastCell, "primary+shift+End"),
        selectToLastColumn: realizeKeybind(keybinds.selectToLastColumn, "primary+shift+ArrowRight"),
        selectToLastRow: realizeKeybind(keybinds.selectToLastRow, "primary+shift+ArrowDown"),
    };
}
function useKeybindingsWithDefaults(keybindingsIn) {
    const keys = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_2__.useDeepMemo)(keybindingsIn);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (keys === undefined)
            return realizeKeybinds(keybindingDefaults);
        const withBackCompatApplied = {
            ...keys,
            goToNextPage: keys?.goToNextPage ?? keys?.pageDown ?? keybindingDefaults.goToNextPage,
            goToPreviousPage: keys?.goToPreviousPage ?? keys?.pageUp ?? keybindingDefaults.goToPreviousPage,
            goToFirstCell: keys?.goToFirstCell ?? keys?.first ?? keybindingDefaults.goToFirstCell,
            goToLastCell: keys?.goToLastCell ?? keys?.last ?? keybindingDefaults.goToLastCell,
            selectToFirstCell: keys?.selectToFirstCell ?? keys?.first ?? keybindingDefaults.selectToFirstCell,
            selectToLastCell: keys?.selectToLastCell ?? keys?.last ?? keybindingDefaults.selectToLastCell,
        };
        return realizeKeybinds({
            ...keybindingDefaults,
            ...withBackCompatApplied,
        });
    }, [keys]);
}
//# sourceMappingURL=data-editor-keybindings.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataEditor: () => (/* binding */ DataEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _common_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");
/* harmony import */ var lodash_clamp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/clamp.js");
/* harmony import */ var lodash_uniq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/uniq.js");
/* harmony import */ var lodash_flatten_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/lodash/range.js");
/* harmony import */ var lodash_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/lodash/debounce.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _internal_data_grid_search_data_grid_search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-search/data-grid-search.js");
/* harmony import */ var _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/browser-detect.js");
/* harmony import */ var _common_styles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/styles.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* harmony import */ var _internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _group_rename_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/group-rename.js");
/* harmony import */ var _use_column_sizer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-column-sizer.js");
/* harmony import */ var _common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/is-hotkey.js");
/* harmony import */ var _internal_data_grid_use_selection_behavior_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/use-selection-behavior.js");
/* harmony import */ var _use_cells_for_selection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-cells-for-selection.js");
/* harmony import */ var _data_editor_fns_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor-fns.js");
/* harmony import */ var _internal_data_editor_container_data_grid_container_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-editor-container/data-grid-container.js");
/* harmony import */ var _use_autoscroll_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-autoscroll.js");
/* harmony import */ var _copy_paste_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/copy-paste.js");
/* harmony import */ var _use_rem_adjuster_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-rem-adjuster.js");
/* harmony import */ var _internal_data_grid_color_parser_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/color-parser.js");
/* harmony import */ var _common_math_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/math.js");
/* harmony import */ var _internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/event-args.js");
/* harmony import */ var _data_editor_keybindings_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor-keybindings.js");
/* eslint-disable sonarjs/no-duplicate-string */



























const DataGridOverlayEditor = react__WEBPACK_IMPORTED_MODULE_0__.lazy(async () => await __webpack_require__.e(/* import() */ "node_modules_glideapps_glide-data-grid_dist_esm_internal_data-grid-overlay-editor_data-grid-o-f5d758").then(__webpack_require__.bind(__webpack_require__, "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/data-grid-overlay-editor.js")));
// There must be a better way
let idCounter = 0;
function getSpanStops(cells) {
    return lodash_uniq_js__WEBPACK_IMPORTED_MODULE_3__(lodash_flatten_js__WEBPACK_IMPORTED_MODULE_4__(lodash_flatten_js__WEBPACK_IMPORTED_MODULE_4__(cells)
        .filter(c => c.span !== undefined)
        .map(c => lodash_range_js__WEBPACK_IMPORTED_MODULE_5__((c.span?.[0] ?? 0) + 1, (c.span?.[1] ?? 0) + 1))));
}
function shiftSelection(input, offset) {
    if (input === undefined || offset === 0 || (input.columns.length === 0 && input.current === undefined))
        return input;
    return {
        current: input.current === undefined
            ? undefined
            : {
                cell: [input.current.cell[0] + offset, input.current.cell[1]],
                range: {
                    ...input.current.range,
                    x: input.current.range.x + offset,
                },
                rangeStack: input.current.rangeStack.map(r => ({
                    ...r,
                    x: r.x + offset,
                })),
            },
        rows: input.rows,
        columns: input.columns.offset(offset),
    };
}
const loadingCell = {
    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Loading,
    allowOverlay: false,
};
const emptyGridSelection = {
    columns: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.empty(),
    rows: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.empty(),
    current: undefined,
};
const DataEditorImpl = (p, forwardedRef) => {
    const [gridSelectionInner, setGridSelectionInner] = react__WEBPACK_IMPORTED_MODULE_0__.useState(emptyGridSelection);
    const [overlay, setOverlay] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const searchInputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const canvasRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [mouseState, setMouseState] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const scrollRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const lastSent = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const safeWindow = typeof window === "undefined" ? null : window;
    const { imageEditorOverride, getRowThemeOverride, markdownDivCreateNode, width, height, columns: columnsIn, rows, getCellContent, onCellClicked, onCellActivated, onFillPattern, onFinishedEditing, coercePasteValue, drawHeader: drawHeaderIn, drawCell: drawCellIn, editorBloom, onHeaderClicked, onColumnProposeMove, spanRangeBehavior = "default", onGroupHeaderClicked, onCellContextMenu, className, onHeaderContextMenu, getCellsForSelection: getCellsForSelectionIn, onGroupHeaderContextMenu, onGroupHeaderRenamed, onCellEdited, onCellsEdited, onSearchResultsChanged: onSearchResultsChangedIn, searchResults, onSearchValueChange, searchValue, onKeyDown: onKeyDownIn, onKeyUp: onKeyUpIn, keybindings: keybindingsIn, editOnType = true, onRowAppended, onColumnMoved, validateCell: validateCellIn, highlightRegions: highlightRegionsIn, rangeSelect = "rect", columnSelect = "multi", rowSelect = "multi", rangeSelectionBlending = "exclusive", columnSelectionBlending = "exclusive", rowSelectionBlending = "exclusive", onDelete: onDeleteIn, onDragStart, onMouseMove, onPaste, copyHeaders = false, freezeColumns = 0, cellActivationBehavior = "second-click", rowSelectionMode = "auto", onHeaderMenuClick, getGroupDetails, onSearchClose: onSearchCloseIn, onItemHovered, onSelectionCleared, showSearch: showSearchIn, onVisibleRegionChanged, gridSelection: gridSelectionOuter, onGridSelectionChange, minColumnWidth: minColumnWidthIn = 50, maxColumnWidth: maxColumnWidthIn = 500, maxColumnAutoWidth: maxColumnAutoWidthIn, provideEditor, trailingRowOptions, freezeTrailingRows = 0, allowedFillDirections = "orthogonal", scrollOffsetX, scrollOffsetY, verticalBorder, onDragOverCell, onDrop, onColumnResize: onColumnResizeIn, onColumnResizeEnd: onColumnResizeEndIn, onColumnResizeStart: onColumnResizeStartIn, customRenderers: additionalRenderers, fillHandle, drawFocusRing = true, experimental, fixedShadowX, fixedShadowY, headerIcons, imageWindowLoader, initialSize, isDraggable, onDragLeave, onRowMoved, overscrollX: overscrollXIn, overscrollY: overscrollYIn, preventDiagonalScrolling, rightElement, rightElementProps, trapFocus = false, smoothScrollX, smoothScrollY, scaleToRem = false, rowHeight: rowHeightIn = 34, headerHeight: headerHeightIn = 36, groupHeaderHeight: groupHeaderHeightIn = headerHeightIn, theme: themeIn, isOutsideClick, renderers, } = p;
    const rowMarkersObj = typeof p.rowMarkers === "string" ? undefined : p.rowMarkers;
    const rowMarkers = rowMarkersObj?.kind ?? p.rowMarkers ?? "none";
    const rowMarkerWidthRaw = rowMarkersObj?.width ?? p.rowMarkerWidth;
    const rowMarkerStartIndex = rowMarkersObj?.startIndex ?? p.rowMarkerStartIndex ?? 1;
    const rowMarkerTheme = rowMarkersObj?.theme ?? p.rowMarkerTheme;
    const rowMarkerCheckboxStyle = rowMarkersObj?.checkboxStyle ?? "square";
    const minColumnWidth = Math.max(minColumnWidthIn, 20);
    const maxColumnWidth = Math.max(maxColumnWidthIn, minColumnWidth);
    const maxColumnAutoWidth = Math.max(maxColumnAutoWidthIn ?? maxColumnWidth, minColumnWidth);
    const docStyle = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (typeof window === "undefined")
            return { fontSize: "16px" };
        return window.getComputedStyle(document.documentElement);
    }, []);
    const remSize = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => Number.parseFloat(docStyle.fontSize), [docStyle]);
    const { rowHeight, headerHeight, groupHeaderHeight, theme, overscrollX, overscrollY } = (0,_use_rem_adjuster_js__WEBPACK_IMPORTED_MODULE_22__.useRemAdjuster)({
        groupHeaderHeight: groupHeaderHeightIn,
        headerHeight: headerHeightIn,
        overscrollX: overscrollXIn,
        overscrollY: overscrollYIn,
        remSize,
        rowHeight: rowHeightIn,
        scaleToRem,
        theme: themeIn,
    });
    const keybindings = (0,_data_editor_keybindings_js__WEBPACK_IMPORTED_MODULE_26__.useKeybindingsWithDefaults)(keybindingsIn);
    const rowMarkerWidth = rowMarkerWidthRaw ?? (rows > 10000 ? 48 : rows > 1000 ? 44 : rows > 100 ? 36 : 32);
    const hasRowMarkers = rowMarkers !== "none";
    const rowMarkerOffset = hasRowMarkers ? 1 : 0;
    const showTrailingBlankRow = onRowAppended !== undefined;
    const lastRowSticky = trailingRowOptions?.sticky === true;
    const [showSearchInner, setShowSearchInner] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const showSearch = showSearchIn ?? showSearchInner;
    const onSearchClose = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (onSearchCloseIn !== undefined) {
            onSearchCloseIn();
        }
        else {
            setShowSearchInner(false);
        }
    }, [onSearchCloseIn]);
    const gridSelectionOuterMangled = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        return gridSelectionOuter === undefined ? undefined : shiftSelection(gridSelectionOuter, rowMarkerOffset);
    }, [gridSelectionOuter, rowMarkerOffset]);
    const gridSelection = gridSelectionOuterMangled ?? gridSelectionInner;
    const abortControllerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    if (abortControllerRef.current === undefined)
        abortControllerRef.current = new AbortController();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => abortControllerRef?.current.abort(), []);
    const [getCellsForSelection, getCellsForSeletionDirect] = (0,_use_cells_for_selection_js__WEBPACK_IMPORTED_MODULE_17__.useCellsForSelection)(getCellsForSelectionIn, getCellContent, rowMarkerOffset, abortControllerRef.current, rows);
    const validateCell = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((cell, newValue, prevValue) => {
        if (validateCellIn === undefined)
            return true;
        const item = [cell[0] - rowMarkerOffset, cell[1]];
        return validateCellIn?.(item, newValue, prevValue);
    }, [rowMarkerOffset, validateCellIn]);
    const expectedExternalGridSelection = react__WEBPACK_IMPORTED_MODULE_0__.useRef(gridSelectionOuter);
    const setGridSelection = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newVal, expand) => {
        if (expand) {
            newVal = (0,_data_editor_fns_js__WEBPACK_IMPORTED_MODULE_18__.expandSelection)(newVal, getCellsForSelection, rowMarkerOffset, spanRangeBehavior, abortControllerRef.current);
        }
        if (onGridSelectionChange !== undefined) {
            expectedExternalGridSelection.current = shiftSelection(newVal, -rowMarkerOffset);
            onGridSelectionChange(expectedExternalGridSelection.current);
        }
        else {
            setGridSelectionInner(newVal);
        }
    }, [onGridSelectionChange, getCellsForSelection, rowMarkerOffset, spanRangeBehavior]);
    const onColumnResize = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.whenDefined)(onColumnResizeIn, react__WEBPACK_IMPORTED_MODULE_0__.useCallback((_, w, ind, wg) => {
        onColumnResizeIn?.(columnsIn[ind - rowMarkerOffset], w, ind - rowMarkerOffset, wg);
    }, [onColumnResizeIn, rowMarkerOffset, columnsIn]));
    const onColumnResizeEnd = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.whenDefined)(onColumnResizeEndIn, react__WEBPACK_IMPORTED_MODULE_0__.useCallback((_, w, ind, wg) => {
        onColumnResizeEndIn?.(columnsIn[ind - rowMarkerOffset], w, ind - rowMarkerOffset, wg);
    }, [onColumnResizeEndIn, rowMarkerOffset, columnsIn]));
    const onColumnResizeStart = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.whenDefined)(onColumnResizeStartIn, react__WEBPACK_IMPORTED_MODULE_0__.useCallback((_, w, ind, wg) => {
        onColumnResizeStartIn?.(columnsIn[ind - rowMarkerOffset], w, ind - rowMarkerOffset, wg);
    }, [onColumnResizeStartIn, rowMarkerOffset, columnsIn]));
    const drawHeader = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.whenDefined)(drawHeaderIn, react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args, draw) => {
        return drawHeaderIn?.({ ...args, columnIndex: args.columnIndex - rowMarkerOffset }, draw) ?? false;
    }, [drawHeaderIn, rowMarkerOffset]));
    const drawCell = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.whenDefined)(drawCellIn, react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args, draw) => {
        return drawCellIn?.({ ...args, col: args.col - rowMarkerOffset }, draw) ?? false;
    }, [drawCellIn, rowMarkerOffset]));
    const onDelete = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(sel => {
        if (onDeleteIn !== undefined) {
            const result = onDeleteIn(shiftSelection(sel, -rowMarkerOffset));
            if (typeof result === "boolean") {
                return result;
            }
            return shiftSelection(result, rowMarkerOffset);
        }
        return true;
    }, [onDeleteIn, rowMarkerOffset]);
    const [setCurrent, setSelectedRows, setSelectedColumns] = (0,_internal_data_grid_use_selection_behavior_js__WEBPACK_IMPORTED_MODULE_16__.useSelectionBehavior)(gridSelection, setGridSelection, rangeSelectionBlending, columnSelectionBlending, rowSelectionBlending, rangeSelect);
    const mergedTheme = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        return (0,_common_styles_js__WEBPACK_IMPORTED_MODULE_10__.mergeAndRealizeTheme)((0,_common_styles_js__WEBPACK_IMPORTED_MODULE_10__.getDataEditorTheme)(), theme);
    }, [theme]);
    const [clientSize, setClientSize] = react__WEBPACK_IMPORTED_MODULE_0__.useState([0, 0, 0]);
    const rendererMap = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (renderers === undefined)
            return {};
        const result = {};
        for (const r of renderers) {
            result[r.kind] = r;
        }
        return result;
    }, [renderers]);
    const getCellRenderer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((cell) => {
        if (cell.kind !== _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Custom) {
            return rendererMap[cell.kind];
        }
        return additionalRenderers?.find(x => x.isMatch(cell));
    }, [additionalRenderers, rendererMap]);
    // eslint-disable-next-line prefer-const
    let { sizedColumns: columns, nonGrowWidth } = (0,_use_column_sizer_js__WEBPACK_IMPORTED_MODULE_14__.useColumnSizer)(columnsIn, rows, getCellsForSeletionDirect, clientSize[0] - (rowMarkerOffset === 0 ? 0 : rowMarkerWidth) - clientSize[2], minColumnWidth, maxColumnAutoWidth, mergedTheme, getCellRenderer, abortControllerRef.current);
    if (rowMarkers !== "none")
        nonGrowWidth += rowMarkerWidth;
    const enableGroups = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        return columns.some(c => c.group !== undefined);
    }, [columns]);
    const totalHeaderHeight = enableGroups ? headerHeight + groupHeaderHeight : headerHeight;
    const numSelectedRows = gridSelection.rows.length;
    const rowMarkerChecked = rowMarkers === "none" ? undefined : numSelectedRows === 0 ? false : numSelectedRows === rows ? true : undefined;
    const mangledCols = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (rowMarkers === "none")
            return columns;
        return [
            {
                title: "",
                width: rowMarkerWidth,
                icon: undefined,
                hasMenu: false,
                style: "normal",
                themeOverride: rowMarkerTheme,
                rowMarker: rowMarkerCheckboxStyle,
                rowMarkerChecked,
            },
            ...columns,
        ];
    }, [rowMarkers, columns, rowMarkerWidth, rowMarkerTheme, rowMarkerCheckboxStyle, rowMarkerChecked]);
    const [visibleRegionY, visibleRegionTy] = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        return [
            scrollOffsetY !== undefined && typeof rowHeight === "number" ? Math.floor(scrollOffsetY / rowHeight) : 0,
            scrollOffsetY !== undefined && typeof rowHeight === "number" ? -(scrollOffsetY % rowHeight) : 0,
        ];
    }, [scrollOffsetY, rowHeight]);
    const visibleRegionRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        height: 1,
        width: 1,
        x: 0,
        y: 0,
    });
    const visibleRegionInput = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        x: visibleRegionRef.current.x,
        y: visibleRegionY,
        width: visibleRegionRef.current.width ?? 1,
        height: visibleRegionRef.current.height ?? 1,
        // tx: 'TODO',
        ty: visibleRegionTy,
    }), [visibleRegionTy, visibleRegionY]);
    const hasJustScrolled = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const [visibleRegion, setVisibleRegion, empty] = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.useStateWithReactiveInput)(visibleRegionInput);
    visibleRegionRef.current = visibleRegion;
    const vScrollReady = (visibleRegion.height ?? 1) > 1;
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        if (scrollOffsetY !== undefined && scrollRef.current !== null && vScrollReady) {
            if (scrollRef.current.scrollTop === scrollOffsetY)
                return;
            scrollRef.current.scrollTop = scrollOffsetY;
            if (scrollRef.current.scrollTop !== scrollOffsetY) {
                empty();
            }
            hasJustScrolled.current = true;
        }
    }, [scrollOffsetY, vScrollReady, empty]);
    const hScrollReady = (visibleRegion.width ?? 1) > 1;
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        if (scrollOffsetX !== undefined && scrollRef.current !== null && hScrollReady) {
            if (scrollRef.current.scrollLeft === scrollOffsetX)
                return;
            scrollRef.current.scrollLeft = scrollOffsetX;
            if (scrollRef.current.scrollLeft !== scrollOffsetX) {
                empty();
            }
            hasJustScrolled.current = true;
        }
    }, [scrollOffsetX, hScrollReady, empty]);
    const cellXOffset = visibleRegion.x + rowMarkerOffset;
    const cellYOffset = visibleRegion.y;
    const gridRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const focus = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((immediate) => {
        if (immediate === true) {
            gridRef.current?.focus();
        }
        else {
            window.requestAnimationFrame(() => {
                gridRef.current?.focus();
            });
        }
    }, []);
    const mangledRows = showTrailingBlankRow ? rows + 1 : rows;
    const mangledOnCellsEdited = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((items) => {
        const mangledItems = rowMarkerOffset === 0
            ? items
            : items.map(x => ({
                ...x,
                location: [x.location[0] - rowMarkerOffset, x.location[1]],
            }));
        const r = onCellsEdited?.(mangledItems);
        if (r !== true) {
            for (const i of mangledItems)
                onCellEdited?.(i.location, i.value);
        }
        return r;
    }, [onCellEdited, onCellsEdited, rowMarkerOffset]);
    const [fillHighlightRegion, setFillHighlightRegion] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    // this will generally be undefined triggering the memo less often
    const highlightRange = gridSelection.current !== undefined &&
        gridSelection.current.range.width * gridSelection.current.range.height > 1
        ? gridSelection.current.range
        : undefined;
    const highlightFocus = drawFocusRing ? gridSelection.current?.cell : undefined;
    const highlightFocusCol = highlightFocus?.[0];
    const highlightFocusRow = highlightFocus?.[1];
    const highlightRegions = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if ((highlightRegionsIn === undefined || highlightRegionsIn.length === 0) &&
            (highlightRange ?? highlightFocusCol ?? highlightFocusRow ?? fillHighlightRegion) === undefined)
            return undefined;
        const regions = [];
        if (highlightRegionsIn !== undefined) {
            for (const r of highlightRegionsIn) {
                const maxWidth = mangledCols.length - r.range.x - rowMarkerOffset;
                if (maxWidth > 0) {
                    regions.push({
                        color: r.color,
                        range: {
                            ...r.range,
                            x: r.range.x + rowMarkerOffset,
                            width: Math.min(maxWidth, r.range.width),
                        },
                        style: r.style,
                    });
                }
            }
        }
        if (fillHighlightRegion !== undefined) {
            regions.push({
                color: (0,_internal_data_grid_color_parser_js__WEBPACK_IMPORTED_MODULE_23__.withAlpha)(mergedTheme.accentColor, 0),
                range: fillHighlightRegion,
                style: "dashed",
            });
        }
        if (highlightRange !== undefined) {
            regions.push({
                color: (0,_internal_data_grid_color_parser_js__WEBPACK_IMPORTED_MODULE_23__.withAlpha)(mergedTheme.accentColor, 0.5),
                range: highlightRange,
                style: "solid-outline",
            });
        }
        if (highlightFocusCol !== undefined && highlightFocusRow !== undefined) {
            regions.push({
                color: mergedTheme.accentColor,
                range: {
                    x: highlightFocusCol,
                    y: highlightFocusRow,
                    width: 1,
                    height: 1,
                },
                style: "solid-outline",
            });
        }
        return regions.length > 0 ? regions : undefined;
    }, [
        fillHighlightRegion,
        highlightRange,
        highlightFocusCol,
        highlightFocusRow,
        highlightRegionsIn,
        mangledCols.length,
        mergedTheme.accentColor,
        rowMarkerOffset,
    ]);
    const mangledColsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(mangledCols);
    mangledColsRef.current = mangledCols;
    const getMangledCellContent = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(([col, row], forceStrict = false) => {
        const isTrailing = showTrailingBlankRow && row === mangledRows - 1;
        const isRowMarkerCol = col === 0 && hasRowMarkers;
        if (isRowMarkerCol) {
            if (isTrailing) {
                return loadingCell;
            }
            return {
                kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.InnerGridCellKind.Marker,
                allowOverlay: false,
                checkboxStyle: rowMarkerCheckboxStyle,
                checked: gridSelection?.rows.hasIndex(row) === true,
                markerKind: rowMarkers === "clickable-number" ? "number" : rowMarkers,
                row: rowMarkerStartIndex + row,
                drawHandle: onRowMoved !== undefined,
                cursor: rowMarkers === "clickable-number" ? "pointer" : undefined,
            };
        }
        else if (isTrailing) {
            //If the grid is empty, we will return text
            const isFirst = col === rowMarkerOffset;
            const maybeFirstColumnHint = isFirst ? trailingRowOptions?.hint ?? "" : "";
            const c = mangledColsRef.current[col];
            if (c?.trailingRowOptions?.disabled === true) {
                return loadingCell;
            }
            else {
                const hint = c?.trailingRowOptions?.hint ?? maybeFirstColumnHint;
                const icon = c?.trailingRowOptions?.addIcon ?? trailingRowOptions?.addIcon;
                return {
                    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.InnerGridCellKind.NewRow,
                    hint,
                    allowOverlay: false,
                    icon,
                };
            }
        }
        else {
            const outerCol = col - rowMarkerOffset;
            if (forceStrict || experimental?.strict === true) {
                const vr = visibleRegionRef.current;
                const isOutsideMainArea = vr.x > outerCol ||
                    outerCol > vr.x + vr.width ||
                    vr.y > row ||
                    row > vr.y + vr.height ||
                    row >= rowsRef.current;
                const isSelected = outerCol === vr.extras?.selected?.[0] && row === vr.extras?.selected[1];
                let isInFreezeArea = false;
                if (vr.extras?.freezeRegions !== undefined) {
                    for (const fr of vr.extras.freezeRegions) {
                        if ((0,_common_math_js__WEBPACK_IMPORTED_MODULE_24__.pointInRect)(fr, outerCol, row)) {
                            isInFreezeArea = true;
                            break;
                        }
                    }
                }
                if (isOutsideMainArea && !isSelected && !isInFreezeArea) {
                    return loadingCell;
                }
            }
            let result = getCellContent([outerCol, row]);
            if (rowMarkerOffset !== 0 && result.span !== undefined) {
                result = {
                    ...result,
                    span: [result.span[0] + rowMarkerOffset, result.span[1] + rowMarkerOffset],
                };
            }
            return result;
        }
    }, [
        showTrailingBlankRow,
        mangledRows,
        hasRowMarkers,
        rowMarkerCheckboxStyle,
        gridSelection?.rows,
        rowMarkers,
        rowMarkerStartIndex,
        onRowMoved,
        rowMarkerOffset,
        trailingRowOptions?.hint,
        trailingRowOptions?.addIcon,
        experimental?.strict,
        getCellContent,
    ]);
    const mangledGetGroupDetails = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(group => {
        let result = getGroupDetails?.(group) ?? { name: group };
        if (onGroupHeaderRenamed !== undefined && group !== "") {
            result = {
                // FIXME: Mutate
                icon: result.icon,
                name: result.name,
                overrideTheme: result.overrideTheme,
                actions: [
                    ...(result.actions ?? []),
                    {
                        title: "Rename",
                        icon: "renameIcon",
                        onClick: e => setRenameGroup({
                            group: result.name,
                            bounds: e.bounds,
                        }),
                    },
                ],
            };
        }
        return result;
    }, [getGroupDetails, onGroupHeaderRenamed]);
    const setOverlaySimple = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((val) => {
        const [col, row] = val.cell;
        const column = mangledCols[col];
        const groupTheme = column?.group !== undefined ? mangledGetGroupDetails(column.group)?.overrideTheme : undefined;
        const colTheme = column?.themeOverride;
        const rowTheme = getRowThemeOverride?.(row);
        setOverlay({
            ...val,
            theme: (0,_common_styles_js__WEBPACK_IMPORTED_MODULE_10__.mergeAndRealizeTheme)(mergedTheme, groupTheme, colTheme, rowTheme, val.content.themeOverride),
        });
    }, [getRowThemeOverride, mangledCols, mangledGetGroupDetails, mergedTheme]);
    const reselect = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((bounds, fromKeyboard, initialValue) => {
        if (gridSelection.current === undefined)
            return;
        const [col, row] = gridSelection.current.cell;
        const c = getMangledCellContent([col, row]);
        if (c.kind !== _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Boolean && c.allowOverlay) {
            let content = c;
            if (initialValue !== undefined) {
                switch (content.kind) {
                    case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Number: {
                        const d = (0,_common_support_js__WEBPACK_IMPORTED_MODULE_1__.maybe)(() => (initialValue === "-" ? -0 : Number.parseFloat(initialValue)), 0);
                        content = {
                            ...content,
                            data: Number.isNaN(d) ? 0 : d,
                        };
                        break;
                    }
                    case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Text:
                    case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Markdown:
                    case _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Uri:
                        content = {
                            ...content,
                            data: initialValue,
                        };
                        break;
                }
            }
            setOverlaySimple({
                target: bounds,
                content,
                initialValue,
                cell: [col, row],
                highlight: initialValue === undefined,
                forceEditMode: initialValue !== undefined,
            });
        }
        else if (c.kind === _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Boolean && fromKeyboard && c.readonly !== true) {
            mangledOnCellsEdited([
                {
                    location: gridSelection.current.cell,
                    value: {
                        ...c,
                        data: (0,_data_editor_fns_js__WEBPACK_IMPORTED_MODULE_18__.toggleBoolean)(c.data),
                    },
                },
            ]);
            gridRef.current?.damage([{ cell: gridSelection.current.cell }]);
        }
    }, [getMangledCellContent, gridSelection, mangledOnCellsEdited, setOverlaySimple]);
    const focusOnRowFromTrailingBlankRow = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((col, row) => {
        const bounds = gridRef.current?.getBounds(col, row);
        if (bounds === undefined || scrollRef.current === null) {
            return;
        }
        const content = getMangledCellContent([col, row]);
        if (!content.allowOverlay) {
            return;
        }
        setOverlaySimple({
            target: bounds,
            content,
            initialValue: undefined,
            highlight: true,
            cell: [col, row],
            forceEditMode: true,
        });
    }, [getMangledCellContent, setOverlaySimple]);
    const scrollTo = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((col, row, dir = "both", paddingX = 0, paddingY = 0, options = undefined) => {
        if (scrollRef.current !== null) {
            const grid = gridRef.current;
            const canvas = canvasRef.current;
            const trueCol = typeof col !== "number" ? (col.unit === "cell" ? col.amount : undefined) : col;
            const trueRow = typeof row !== "number" ? (row.unit === "cell" ? row.amount : undefined) : row;
            const desiredX = typeof col !== "number" && col.unit === "px" ? col.amount : undefined;
            const desiredY = typeof row !== "number" && row.unit === "px" ? row.amount : undefined;
            if (grid !== null && canvas !== null) {
                let targetRect = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                };
                let scrollX = 0;
                let scrollY = 0;
                if (trueCol !== undefined || trueRow !== undefined) {
                    targetRect = grid.getBounds((trueCol ?? 0) + rowMarkerOffset, trueRow ?? 0) ?? targetRect;
                    if (targetRect.width === 0 || targetRect.height === 0)
                        return;
                }
                const scrollBounds = canvas.getBoundingClientRect();
                const scale = scrollBounds.width / canvas.offsetWidth;
                if (desiredX !== undefined) {
                    targetRect = {
                        ...targetRect,
                        x: desiredX - scrollBounds.left - scrollRef.current.scrollLeft,
                        width: 1,
                    };
                }
                if (desiredY !== undefined) {
                    targetRect = {
                        ...targetRect,
                        y: desiredY + scrollBounds.top - scrollRef.current.scrollTop,
                        height: 1,
                    };
                }
                if (targetRect !== undefined) {
                    const bounds = {
                        x: targetRect.x - paddingX,
                        y: targetRect.y - paddingY,
                        width: targetRect.width + 2 * paddingX,
                        height: targetRect.height + 2 * paddingY,
                    };
                    let frozenWidth = 0;
                    for (let i = 0; i < freezeColumns; i++) {
                        frozenWidth += columns[i].width;
                    }
                    let trailingRowHeight = 0;
                    const freezeTrailingRowsEffective = freezeTrailingRows + (lastRowSticky ? 1 : 0);
                    if (freezeTrailingRowsEffective > 0) {
                        trailingRowHeight = (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_12__.getFreezeTrailingHeight)(mangledRows, freezeTrailingRowsEffective, rowHeight);
                    }
                    // scrollBounds is already scaled
                    let sLeft = frozenWidth * scale + scrollBounds.left + rowMarkerOffset * rowMarkerWidth * scale;
                    let sRight = scrollBounds.right;
                    let sTop = scrollBounds.top + totalHeaderHeight * scale;
                    let sBottom = scrollBounds.bottom - trailingRowHeight * scale;
                    const minx = targetRect.width + paddingX * 2;
                    switch (options?.hAlign) {
                        case "start":
                            sRight = sLeft + minx;
                            break;
                        case "end":
                            sLeft = sRight - minx;
                            break;
                        case "center":
                            sLeft = Math.floor((sLeft + sRight) / 2) - minx / 2;
                            sRight = sLeft + minx;
                            break;
                    }
                    const miny = targetRect.height + paddingY * 2;
                    switch (options?.vAlign) {
                        case "start":
                            sBottom = sTop + miny;
                            break;
                        case "end":
                            sTop = sBottom - miny;
                            break;
                        case "center":
                            sTop = Math.floor((sTop + sBottom) / 2) - miny / 2;
                            sBottom = sTop + miny;
                            break;
                    }
                    if (sLeft > bounds.x) {
                        scrollX = bounds.x - sLeft;
                    }
                    else if (sRight < bounds.x + bounds.width) {
                        scrollX = bounds.x + bounds.width - sRight;
                    }
                    if (sTop > bounds.y) {
                        scrollY = bounds.y - sTop;
                    }
                    else if (sBottom < bounds.y + bounds.height) {
                        scrollY = bounds.y + bounds.height - sBottom;
                    }
                    if (dir === "vertical" || (typeof col === "number" && col < freezeColumns)) {
                        scrollX = 0;
                    }
                    else if (dir === "horizontal" ||
                        (typeof row === "number" && row >= mangledRows - freezeTrailingRowsEffective)) {
                        scrollY = 0;
                    }
                    if (scrollX !== 0 || scrollY !== 0) {
                        // Remove scaling as scrollTo method is unaffected by transform scale.
                        if (scale !== 1) {
                            scrollX /= scale;
                            scrollY /= scale;
                        }
                        scrollRef.current.scrollTo(scrollX + scrollRef.current.scrollLeft, scrollY + scrollRef.current.scrollTop);
                    }
                }
            }
        }
    }, [
        rowMarkerOffset,
        freezeTrailingRows,
        rowMarkerWidth,
        totalHeaderHeight,
        freezeColumns,
        columns,
        mangledRows,
        lastRowSticky,
        rowHeight,
    ]);
    const focusCallback = react__WEBPACK_IMPORTED_MODULE_0__.useRef(focusOnRowFromTrailingBlankRow);
    const getCellContentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(getCellContent);
    const rowsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(rows);
    focusCallback.current = focusOnRowFromTrailingBlankRow;
    getCellContentRef.current = getCellContent;
    rowsRef.current = rows;
    const appendRow = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (col, openOverlay = true) => {
        const c = mangledCols[col];
        if (c?.trailingRowOptions?.disabled === true) {
            return;
        }
        const appendResult = onRowAppended?.();
        let r = undefined;
        let bottom = true;
        if (appendResult !== undefined) {
            r = await appendResult;
            if (r === "top")
                bottom = false;
            if (typeof r === "number")
                bottom = false;
        }
        let backoff = 0;
        const doFocus = () => {
            if (rowsRef.current <= rows) {
                if (backoff < 500) {
                    window.setTimeout(doFocus, backoff);
                }
                backoff = 50 + backoff * 2;
                return;
            }
            const row = typeof r === "number" ? r : bottom ? rows : 0;
            scrollToRef.current(col - rowMarkerOffset, row);
            setCurrent({
                cell: [col, row],
                range: {
                    x: col,
                    y: row,
                    width: 1,
                    height: 1,
                },
            }, false, false, "edit");
            const cell = getCellContentRef.current([col - rowMarkerOffset, row]);
            if (cell.allowOverlay && (0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isReadWriteCell)(cell) && cell.readonly !== true && openOverlay) {
                // wait for scroll to have a chance to process
                window.setTimeout(() => {
                    focusCallback.current(col, row);
                }, 0);
            }
        };
        // Queue up to allow the consumer to react to the event and let us check if they did
        doFocus();
    }, [mangledCols, onRowAppended, rowMarkerOffset, rows, setCurrent]);
    const getCustomNewRowTargetColumn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((col) => {
        const customTargetColumn = columns[col]?.trailingRowOptions?.targetColumn ?? trailingRowOptions?.targetColumn;
        if (typeof customTargetColumn === "number") {
            const customTargetOffset = hasRowMarkers ? 1 : 0;
            return customTargetColumn + customTargetOffset;
        }
        if (typeof customTargetColumn === "object") {
            const maybeIndex = columnsIn.indexOf(customTargetColumn);
            if (maybeIndex >= 0) {
                const customTargetOffset = hasRowMarkers ? 1 : 0;
                return maybeIndex + customTargetOffset;
            }
        }
        return undefined;
    }, [columns, columnsIn, hasRowMarkers, trailingRowOptions?.targetColumn]);
    const lastSelectedRowRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const lastSelectedColRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const themeForCell = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((cell, pos) => {
        const [col, row] = pos;
        return (0,_common_styles_js__WEBPACK_IMPORTED_MODULE_10__.mergeAndRealizeTheme)(mergedTheme, mangledCols[col]?.themeOverride, getRowThemeOverride?.(row), cell.themeOverride);
    }, [getRowThemeOverride, mangledCols, mergedTheme]);
    const handleSelect = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args) => {
        const isMultiKey = _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_9__.browserIsOSX.value ? args.metaKey : args.ctrlKey;
        const isMultiRow = isMultiKey && rowSelect === "multi";
        const isMultiCol = isMultiKey && columnSelect === "multi";
        const [col, row] = args.location;
        const selectedColumns = gridSelection.columns;
        const selectedRows = gridSelection.rows;
        const [cellCol, cellRow] = gridSelection.current?.cell ?? [];
        // eslint-disable-next-line unicorn/prefer-switch
        if (args.kind === "cell") {
            lastSelectedColRef.current = undefined;
            lastMouseSelectLocation.current = [col, row];
            if (col === 0 && hasRowMarkers) {
                if ((showTrailingBlankRow === true && row === rows) ||
                    rowMarkers === "number" ||
                    rowSelect === "none")
                    return;
                const markerCell = getMangledCellContent(args.location);
                if (markerCell.kind !== _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.InnerGridCellKind.Marker) {
                    return;
                }
                if (onRowMoved !== undefined) {
                    const renderer = getCellRenderer(markerCell);
                    (0,_common_support_js__WEBPACK_IMPORTED_MODULE_1__.assert)(renderer?.kind === _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.InnerGridCellKind.Marker);
                    const postClick = renderer?.onClick?.({
                        ...args,
                        cell: markerCell,
                        posX: args.localEventX,
                        posY: args.localEventY,
                        bounds: args.bounds,
                        theme: themeForCell(markerCell, args.location),
                        preventDefault: () => undefined,
                    });
                    if (postClick === undefined || postClick.checked === markerCell.checked)
                        return;
                }
                setOverlay(undefined);
                focus();
                const isSelected = selectedRows.hasIndex(row);
                const lastHighlighted = lastSelectedRowRef.current;
                if (rowSelect === "multi" &&
                    (args.shiftKey || args.isLongTouch === true) &&
                    lastHighlighted !== undefined &&
                    selectedRows.hasIndex(lastHighlighted)) {
                    const newSlice = [Math.min(lastHighlighted, row), Math.max(lastHighlighted, row) + 1];
                    if (isMultiRow || rowSelectionMode === "multi") {
                        setSelectedRows(undefined, newSlice, true);
                    }
                    else {
                        setSelectedRows(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection(newSlice), undefined, isMultiRow);
                    }
                }
                else if (isMultiRow || args.isTouch || rowSelectionMode === "multi") {
                    if (isSelected) {
                        setSelectedRows(selectedRows.remove(row), undefined, true);
                    }
                    else {
                        setSelectedRows(undefined, row, true);
                        lastSelectedRowRef.current = row;
                    }
                }
                else if (isSelected && selectedRows.length === 1) {
                    setSelectedRows(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.empty(), undefined, isMultiKey);
                }
                else {
                    setSelectedRows(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection(row), undefined, isMultiKey);
                    lastSelectedRowRef.current = row;
                }
            }
            else if (col >= rowMarkerOffset && showTrailingBlankRow && row === rows) {
                const customTargetColumn = getCustomNewRowTargetColumn(col);
                void appendRow(customTargetColumn ?? col);
            }
            else {
                if (cellCol !== col || cellRow !== row) {
                    const cell = getMangledCellContent(args.location);
                    const renderer = getCellRenderer(cell);
                    if (renderer?.onSelect !== undefined) {
                        let prevented = false;
                        renderer.onSelect({
                            ...args,
                            cell,
                            posX: args.localEventX,
                            posY: args.localEventY,
                            bounds: args.bounds,
                            preventDefault: () => (prevented = true),
                            theme: themeForCell(cell, args.location),
                        });
                        if (prevented) {
                            return;
                        }
                    }
                    const isLastStickyRow = lastRowSticky && row === rows;
                    const startedFromLastSticky = lastRowSticky && gridSelection !== undefined && gridSelection.current?.cell[1] === rows;
                    if ((args.shiftKey || args.isLongTouch === true) &&
                        cellCol !== undefined &&
                        cellRow !== undefined &&
                        gridSelection.current !== undefined &&
                        !startedFromLastSticky) {
                        if (isLastStickyRow) {
                            // If we're making a selection and shift click in to the last sticky row,
                            // just drop the event. Don't kill the selection.
                            return;
                        }
                        const left = Math.min(col, cellCol);
                        const right = Math.max(col, cellCol);
                        const top = Math.min(row, cellRow);
                        const bottom = Math.max(row, cellRow);
                        setCurrent({
                            ...gridSelection.current,
                            range: {
                                x: left,
                                y: top,
                                width: right - left + 1,
                                height: bottom - top + 1,
                            },
                        }, true, isMultiKey, "click");
                        lastSelectedRowRef.current = undefined;
                        focus();
                    }
                    else {
                        setCurrent({
                            cell: [col, row],
                            range: { x: col, y: row, width: 1, height: 1 },
                        }, true, isMultiKey, "click");
                        lastSelectedRowRef.current = undefined;
                        setOverlay(undefined);
                        focus();
                    }
                }
            }
        }
        else if (args.kind === "header") {
            lastMouseSelectLocation.current = [col, row];
            setOverlay(undefined);
            if (hasRowMarkers && col === 0) {
                lastSelectedRowRef.current = undefined;
                lastSelectedColRef.current = undefined;
                if (rowSelect === "multi") {
                    if (selectedRows.length !== rows) {
                        setSelectedRows(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection([0, rows]), undefined, isMultiKey);
                    }
                    else {
                        setSelectedRows(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.empty(), undefined, isMultiKey);
                    }
                    focus();
                }
            }
            else {
                const lastCol = lastSelectedColRef.current;
                if (columnSelect === "multi" &&
                    (args.shiftKey || args.isLongTouch === true) &&
                    lastCol !== undefined &&
                    selectedColumns.hasIndex(lastCol)) {
                    const newSlice = [Math.min(lastCol, col), Math.max(lastCol, col) + 1];
                    if (isMultiCol) {
                        setSelectedColumns(undefined, newSlice, isMultiKey);
                    }
                    else {
                        setSelectedColumns(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection(newSlice), undefined, isMultiKey);
                    }
                }
                else if (isMultiCol) {
                    if (selectedColumns.hasIndex(col)) {
                        setSelectedColumns(selectedColumns.remove(col), undefined, isMultiKey);
                    }
                    else {
                        setSelectedColumns(undefined, col, isMultiKey);
                    }
                    lastSelectedColRef.current = col;
                }
                else if (columnSelect !== "none") {
                    setSelectedColumns(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection(col), undefined, isMultiKey);
                    lastSelectedColRef.current = col;
                }
                lastSelectedRowRef.current = undefined;
                focus();
            }
        }
        else if (args.kind === _internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__.groupHeaderKind) {
            lastMouseSelectLocation.current = [col, row];
        }
        else if (args.kind === _internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__.outOfBoundsKind && !args.isMaybeScrollbar) {
            setGridSelection(emptyGridSelection, false);
            setOverlay(undefined);
            focus();
            onSelectionCleared?.();
            lastSelectedRowRef.current = undefined;
            lastSelectedColRef.current = undefined;
        }
    }, [
        appendRow,
        columnSelect,
        focus,
        getCellRenderer,
        getCustomNewRowTargetColumn,
        getMangledCellContent,
        gridSelection,
        hasRowMarkers,
        lastRowSticky,
        onSelectionCleared,
        onRowMoved,
        rowMarkerOffset,
        rowMarkers,
        rowSelect,
        rowSelectionMode,
        rows,
        setCurrent,
        setGridSelection,
        setSelectedColumns,
        setSelectedRows,
        showTrailingBlankRow,
        themeForCell,
    ]);
    const isActivelyDraggingHeader = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const lastMouseSelectLocation = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const touchDownArgs = react__WEBPACK_IMPORTED_MODULE_0__.useRef(visibleRegion);
    const mouseDownData = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const onMouseDown = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args) => {
        isPrevented.current = false;
        touchDownArgs.current = visibleRegionRef.current;
        if (args.button !== 0 && args.button !== 1) {
            mouseDownData.current = undefined;
            return;
        }
        const time = performance.now();
        mouseDownData.current = {
            button: args.button,
            time,
            location: args.location,
        };
        if (args?.kind === "header") {
            isActivelyDraggingHeader.current = true;
        }
        const fh = args.kind === "cell" && args.isFillHandle;
        if (!fh && args.kind !== "cell" && args.isEdge)
            return;
        setMouseState({
            previousSelection: gridSelection,
            fillHandle: fh,
        });
        lastMouseSelectLocation.current = undefined;
        if (!args.isTouch && args.button === 0 && !fh) {
            handleSelect(args);
        }
        else if (!args.isTouch && args.button === 1) {
            lastMouseSelectLocation.current = args.location;
        }
    }, [gridSelection, handleSelect]);
    const [renameGroup, setRenameGroup] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const handleGroupHeaderSelection = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args) => {
        if (args.kind !== _internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__.groupHeaderKind || columnSelect !== "multi") {
            return;
        }
        const isMultiKey = _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_9__.browserIsOSX.value ? args.metaKey : args.ctrlKey;
        const [col] = args.location;
        const selectedColumns = gridSelection.columns;
        if (col < rowMarkerOffset)
            return;
        const needle = mangledCols[col];
        let start = col;
        let end = col;
        for (let i = col - 1; i >= rowMarkerOffset; i--) {
            if (!(0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_12__.isGroupEqual)(needle.group, mangledCols[i].group))
                break;
            start--;
        }
        for (let i = col + 1; i < mangledCols.length; i++) {
            if (!(0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_12__.isGroupEqual)(needle.group, mangledCols[i].group))
                break;
            end++;
        }
        focus();
        if (isMultiKey) {
            if (selectedColumns.hasAll([start, end + 1])) {
                let newVal = selectedColumns;
                for (let index = start; index <= end; index++) {
                    newVal = newVal.remove(index);
                }
                setSelectedColumns(newVal, undefined, isMultiKey);
            }
            else {
                setSelectedColumns(undefined, [start, end + 1], isMultiKey);
            }
        }
        else {
            setSelectedColumns(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection([start, end + 1]), undefined, isMultiKey);
        }
    }, [columnSelect, focus, gridSelection.columns, mangledCols, rowMarkerOffset, setSelectedColumns]);
    const isPrevented = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const normalSizeColumn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (col) => {
        if (getCellsForSelection !== undefined && onColumnResize !== undefined) {
            const start = visibleRegionRef.current.y;
            const end = visibleRegionRef.current.height;
            let cells = getCellsForSelection({
                x: col,
                y: start,
                width: 1,
                height: Math.min(end, rows - start),
            }, abortControllerRef.current.signal);
            if (typeof cells !== "object") {
                cells = await cells();
            }
            const inputCol = columns[col - rowMarkerOffset];
            const offscreen = document.createElement("canvas");
            const ctx = offscreen.getContext("2d", { alpha: false });
            if (ctx !== null) {
                ctx.font = mergedTheme.baseFontFull;
                const newCol = (0,_use_column_sizer_js__WEBPACK_IMPORTED_MODULE_14__.measureColumn)(ctx, mergedTheme, inputCol, 0, cells, minColumnWidth, maxColumnWidth, false, getCellRenderer);
                onColumnResize?.(inputCol, newCol.width, col, newCol.width);
            }
        }
    }, [
        columns,
        getCellsForSelection,
        maxColumnWidth,
        mergedTheme,
        minColumnWidth,
        onColumnResize,
        rowMarkerOffset,
        rows,
        getCellRenderer,
    ]);
    const [scrollDir, setScrollDir] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const fillPattern = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (previousSelection, currentSelection) => {
        const patternRange = previousSelection.current?.range;
        if (patternRange === undefined ||
            getCellsForSelection === undefined ||
            currentSelection.current === undefined) {
            return;
        }
        const currentRange = currentSelection.current.range;
        if (onFillPattern !== undefined) {
            let canceled = false;
            onFillPattern({
                fillDestination: { ...currentRange, x: currentRange.x - rowMarkerOffset },
                patternSource: { ...patternRange, x: patternRange.x - rowMarkerOffset },
                preventDefault: () => (canceled = true),
            });
            if (canceled)
                return;
        }
        let cells = getCellsForSelection(patternRange, abortControllerRef.current.signal);
        if (typeof cells !== "object")
            cells = await cells();
        const pattern = cells;
        // loop through all cells in currentSelection.current.range
        const editItemList = [];
        for (let x = 0; x < currentRange.width; x++) {
            for (let y = 0; y < currentRange.height; y++) {
                const cell = [currentRange.x + x, currentRange.y + y];
                if ((0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_12__.itemIsInRect)(cell, patternRange))
                    continue;
                const patternCell = pattern[y % patternRange.height][x % patternRange.width];
                if ((0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isInnerOnlyCell)(patternCell) || !(0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isReadWriteCell)(patternCell))
                    continue;
                editItemList.push({
                    location: cell,
                    value: { ...patternCell },
                });
            }
        }
        mangledOnCellsEdited(editItemList);
        gridRef.current?.damage(editItemList.map(c => ({
            cell: c.location,
        })));
    }, [getCellsForSelection, mangledOnCellsEdited, onFillPattern, rowMarkerOffset]);
    const fillRight = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (gridSelection.current === undefined || gridSelection.current.range.width <= 1)
            return;
        const firstColSelection = {
            ...gridSelection,
            current: {
                ...gridSelection.current,
                range: {
                    ...gridSelection.current.range,
                    width: 1,
                },
            },
        };
        void fillPattern(firstColSelection, gridSelection);
    }, [fillPattern, gridSelection]);
    const fillDown = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (gridSelection.current === undefined || gridSelection.current.range.height <= 1)
            return;
        const firstRowSelection = {
            ...gridSelection,
            current: {
                ...gridSelection.current,
                range: {
                    ...gridSelection.current.range,
                    height: 1,
                },
            },
        };
        void fillPattern(firstRowSelection, gridSelection);
    }, [fillPattern, gridSelection]);
    const onMouseUp = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args, isOutside) => {
        const mouse = mouseState;
        setMouseState(undefined);
        setFillHighlightRegion(undefined);
        setScrollDir(undefined);
        isActivelyDraggingHeader.current = false;
        if (isOutside)
            return;
        if (mouse?.fillHandle === true &&
            gridSelection.current !== undefined &&
            mouse.previousSelection?.current !== undefined) {
            if (fillHighlightRegion === undefined)
                return;
            const newRange = {
                ...gridSelection,
                current: {
                    ...gridSelection.current,
                    range: (0,_common_math_js__WEBPACK_IMPORTED_MODULE_24__.combineRects)(mouse.previousSelection.current.range, fillHighlightRegion),
                },
            };
            void fillPattern(mouse.previousSelection, newRange);
            setGridSelection(newRange, true);
            return;
        }
        const [col, row] = args.location;
        const [lastMouseDownCol, lastMouseDownRow] = lastMouseSelectLocation.current ?? [];
        const preventDefault = () => {
            isPrevented.current = true;
        };
        const handleMaybeClick = (a) => {
            const isValidClick = a.isTouch || (lastMouseDownCol === col && lastMouseDownRow === row);
            if (isValidClick) {
                onCellClicked?.([col - rowMarkerOffset, row], {
                    ...a,
                    preventDefault,
                });
            }
            if (a.button === 1)
                return !isPrevented.current;
            if (!isPrevented.current) {
                const c = getMangledCellContent(args.location);
                const r = getCellRenderer(c);
                if (r !== undefined && r.onClick !== undefined && isValidClick) {
                    const newVal = r.onClick({
                        ...a,
                        cell: c,
                        posX: a.localEventX,
                        posY: a.localEventY,
                        bounds: a.bounds,
                        theme: themeForCell(c, args.location),
                        preventDefault,
                    });
                    if (newVal !== undefined && !(0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isInnerOnlyCell)(newVal) && (0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isEditableGridCell)(newVal)) {
                        mangledOnCellsEdited([{ location: a.location, value: newVal }]);
                        gridRef.current?.damage([
                            {
                                cell: a.location,
                            },
                        ]);
                    }
                }
                if (isPrevented.current || gridSelection.current === undefined)
                    return false;
                let shouldActivate = false;
                switch (c.activationBehaviorOverride ?? cellActivationBehavior) {
                    case "double-click":
                    case "second-click": {
                        if (mouse?.previousSelection?.current?.cell === undefined)
                            break;
                        const [selectedCol, selectedRow] = gridSelection.current.cell;
                        const [prevCol, prevRow] = mouse.previousSelection.current.cell;
                        const isClickOnSelected = col === selectedCol && col === prevCol && row === selectedRow && row === prevRow;
                        shouldActivate =
                            isClickOnSelected &&
                                (a.isDoubleClick === true || cellActivationBehavior === "second-click");
                        break;
                    }
                    case "single-click": {
                        shouldActivate = true;
                        break;
                    }
                }
                if (shouldActivate) {
                    onCellActivated?.([col - rowMarkerOffset, row]);
                    reselect(a.bounds, false);
                    return true;
                }
            }
            return false;
        };
        const clickLocation = args.location[0] - rowMarkerOffset;
        if (args.isTouch) {
            const vr = visibleRegionRef.current;
            const touchVr = touchDownArgs.current;
            if (vr.x !== touchVr.x || vr.y !== touchVr.y) {
                // we scrolled, abort
                return;
            }
            // take care of context menus first if long pressed item is already selected
            if (args.isLongTouch === true) {
                if (args.kind === "cell" && (0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_12__.itemsAreEqual)(gridSelection.current?.cell, args.location)) {
                    onCellContextMenu?.([clickLocation, args.location[1]], {
                        ...args,
                        preventDefault,
                    });
                    return;
                }
                else if (args.kind === "header" && gridSelection.columns.hasIndex(col)) {
                    onHeaderContextMenu?.(clickLocation, { ...args, preventDefault });
                    return;
                }
                else if (args.kind === _internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__.groupHeaderKind) {
                    if (clickLocation < 0) {
                        return;
                    }
                    onGroupHeaderContextMenu?.(clickLocation, { ...args, preventDefault });
                    return;
                }
            }
            if (args.kind === "cell") {
                // click that cell
                if (!handleMaybeClick(args)) {
                    handleSelect(args);
                }
            }
            else if (args.kind === _internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__.groupHeaderKind) {
                onGroupHeaderClicked?.(clickLocation, { ...args, preventDefault });
            }
            else {
                if (args.kind === _internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__.headerKind) {
                    onHeaderClicked?.(clickLocation, {
                        ...args,
                        preventDefault,
                    });
                }
                handleSelect(args);
            }
            return;
        }
        if (args.kind === "header") {
            if (clickLocation < 0) {
                return;
            }
            if (args.isEdge) {
                if (args.isDoubleClick === true) {
                    void normalSizeColumn(col);
                }
            }
            else if (args.button === 0 && col === lastMouseDownCol && row === lastMouseDownRow) {
                onHeaderClicked?.(clickLocation, { ...args, preventDefault });
            }
        }
        if (args.kind === _internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__.groupHeaderKind) {
            if (clickLocation < 0) {
                return;
            }
            if (args.button === 0 && col === lastMouseDownCol && row === lastMouseDownRow) {
                onGroupHeaderClicked?.(clickLocation, { ...args, preventDefault });
                if (!isPrevented.current) {
                    handleGroupHeaderSelection(args);
                }
            }
        }
        if (args.kind === "cell" && (args.button === 0 || args.button === 1)) {
            handleMaybeClick(args);
        }
        lastMouseSelectLocation.current = undefined;
    }, [
        mouseState,
        gridSelection,
        rowMarkerOffset,
        fillHighlightRegion,
        fillPattern,
        setGridSelection,
        onCellClicked,
        getMangledCellContent,
        getCellRenderer,
        cellActivationBehavior,
        themeForCell,
        mangledOnCellsEdited,
        onCellActivated,
        reselect,
        onCellContextMenu,
        onHeaderContextMenu,
        onGroupHeaderContextMenu,
        handleSelect,
        onGroupHeaderClicked,
        onHeaderClicked,
        normalSizeColumn,
        handleGroupHeaderSelection,
    ]);
    const onMouseMoveImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args) => {
        const a = {
            ...args,
            location: [args.location[0] - rowMarkerOffset, args.location[1]],
        };
        onMouseMove?.(a);
        if (mouseState !== undefined && args.buttons === 0) {
            setMouseState(undefined);
            setFillHighlightRegion(undefined);
            setScrollDir(undefined);
            isActivelyDraggingHeader.current = false;
        }
        setScrollDir(cv => {
            if (isActivelyDraggingHeader.current)
                return [args.scrollEdge[0], 0];
            if (args.scrollEdge[0] === cv?.[0] && args.scrollEdge[1] === cv[1])
                return cv;
            return mouseState === undefined || (mouseDownData.current?.location[0] ?? 0) < rowMarkerOffset
                ? undefined
                : args.scrollEdge;
        });
    }, [mouseState, onMouseMove, rowMarkerOffset]);
    const onHeaderMenuClickInner = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((col, screenPosition) => {
        onHeaderMenuClick?.(col - rowMarkerOffset, screenPosition);
    }, [onHeaderMenuClick, rowMarkerOffset]);
    const currentCell = gridSelection?.current?.cell;
    const onVisibleRegionChangedImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((region, clientWidth, clientHeight, rightElWidth, tx, ty) => {
        hasJustScrolled.current = false;
        let selected = currentCell;
        if (selected !== undefined) {
            selected = [selected[0] - rowMarkerOffset, selected[1]];
        }
        const freezeRegion = freezeColumns === 0
            ? undefined
            : {
                x: 0,
                y: region.y,
                width: freezeColumns,
                height: region.height,
            };
        const freezeRegions = [];
        if (freezeRegion !== undefined)
            freezeRegions.push(freezeRegion);
        if (freezeTrailingRows > 0) {
            freezeRegions.push({
                x: region.x - rowMarkerOffset,
                y: rows - freezeTrailingRows,
                width: region.width,
                height: freezeTrailingRows,
            });
            if (freezeColumns > 0) {
                freezeRegions.push({
                    x: 0,
                    y: rows - freezeTrailingRows,
                    width: freezeColumns,
                    height: freezeTrailingRows,
                });
            }
        }
        const newRegion = {
            x: region.x - rowMarkerOffset,
            y: region.y,
            width: region.width,
            height: showTrailingBlankRow && region.y + region.height >= rows ? region.height - 1 : region.height,
            tx,
            ty,
            extras: {
                selected,
                freezeRegion,
                freezeRegions,
            },
        };
        visibleRegionRef.current = newRegion;
        setVisibleRegion(newRegion);
        setClientSize([clientWidth, clientHeight, rightElWidth]);
        onVisibleRegionChanged?.(newRegion, newRegion.tx, newRegion.ty, newRegion.extras);
    }, [
        currentCell,
        rowMarkerOffset,
        showTrailingBlankRow,
        rows,
        freezeColumns,
        freezeTrailingRows,
        setVisibleRegion,
        onVisibleRegionChanged,
    ]);
    const onColumnMovedImpl = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.whenDefined)(onColumnMoved, react__WEBPACK_IMPORTED_MODULE_0__.useCallback((startIndex, endIndex) => {
        onColumnMoved?.(startIndex - rowMarkerOffset, endIndex - rowMarkerOffset);
        if (columnSelect !== "none") {
            setSelectedColumns(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection(endIndex), undefined, true);
        }
    }, [columnSelect, onColumnMoved, rowMarkerOffset, setSelectedColumns]));
    const isActivelyDragging = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const onDragStartImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args) => {
        if (args.location[0] === 0 && rowMarkerOffset > 0) {
            args.preventDefault();
            return;
        }
        onDragStart?.({
            ...args,
            location: [args.location[0] - rowMarkerOffset, args.location[1]],
        });
        if (!args.defaultPrevented()) {
            isActivelyDragging.current = true;
        }
        setMouseState(undefined);
    }, [onDragStart, rowMarkerOffset]);
    const onDragEnd = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        isActivelyDragging.current = false;
    }, []);
    const hoveredRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const onItemHoveredImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args) => {
        // make sure we still have a button down
        if ((0,_internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__.mouseEventArgsAreEqual)(args, hoveredRef.current))
            return;
        hoveredRef.current = args;
        if (mouseDownData?.current?.button !== undefined && mouseDownData.current.button >= 1)
            return;
        if (args.buttons !== 0 &&
            mouseState !== undefined &&
            mouseDownData.current?.location[0] === 0 &&
            args.location[0] === 0 &&
            rowMarkerOffset === 1 &&
            rowSelect === "multi" &&
            mouseState.previousSelection &&
            !mouseState.previousSelection.rows.hasIndex(mouseDownData.current.location[1]) &&
            gridSelection.rows.hasIndex(mouseDownData.current.location[1])) {
            const start = Math.min(mouseDownData.current.location[1], args.location[1]);
            const end = Math.max(mouseDownData.current.location[1], args.location[1]) + 1;
            setSelectedRows(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection([start, end]), undefined, false);
        }
        if (args.buttons !== 0 &&
            mouseState !== undefined &&
            gridSelection.current !== undefined &&
            !isActivelyDragging.current &&
            !isActivelyDraggingHeader.current &&
            (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
            const [selectedCol, selectedRow] = gridSelection.current.cell;
            // eslint-disable-next-line prefer-const
            let [col, row] = args.location;
            if (row < 0) {
                row = visibleRegionRef.current.y;
            }
            if (mouseState.fillHandle === true && mouseState.previousSelection?.current !== undefined) {
                const prevRange = mouseState.previousSelection.current.range;
                row = Math.min(row, showTrailingBlankRow ? rows - 1 : rows);
                const rect = (0,_common_math_js__WEBPACK_IMPORTED_MODULE_24__.getClosestRect)(prevRange, col, row, allowedFillDirections);
                setFillHighlightRegion(rect);
            }
            else {
                const startedFromLastStickyRow = showTrailingBlankRow && selectedRow === rows;
                if (startedFromLastStickyRow)
                    return;
                const landedOnLastStickyRow = showTrailingBlankRow && row === rows;
                if (landedOnLastStickyRow) {
                    if (args.kind === _internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__.outOfBoundsKind)
                        row--;
                    else
                        return;
                }
                col = Math.max(col, rowMarkerOffset);
                const deltaX = col - selectedCol;
                const deltaY = row - selectedRow;
                const newRange = {
                    x: deltaX >= 0 ? selectedCol : col,
                    y: deltaY >= 0 ? selectedRow : row,
                    width: Math.abs(deltaX) + 1,
                    height: Math.abs(deltaY) + 1,
                };
                setCurrent({
                    ...gridSelection.current,
                    range: newRange,
                }, true, false, "drag");
            }
        }
        onItemHovered?.({ ...args, location: [args.location[0] - rowMarkerOffset, args.location[1]] });
    }, [
        allowedFillDirections,
        mouseState,
        rowMarkerOffset,
        rowSelect,
        gridSelection,
        rangeSelect,
        onItemHovered,
        setSelectedRows,
        showTrailingBlankRow,
        rows,
        setCurrent,
    ]);
    const adjustSelectionOnScroll = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        const args = hoveredRef.current;
        if (args === undefined)
            return;
        const [xDir, yDir] = args.scrollEdge;
        let [col, row] = args.location;
        const visible = visibleRegionRef.current;
        if (xDir === -1) {
            col = visible.extras?.freezeRegion?.x ?? visible.x;
        }
        else if (xDir === 1) {
            col = visible.x + visible.width;
        }
        if (yDir === -1) {
            row = Math.max(0, visible.y);
        }
        else if (yDir === 1) {
            row = Math.min(rows - 1, visible.y + visible.height);
        }
        col = lodash_clamp_js__WEBPACK_IMPORTED_MODULE_2__(col, 0, mangledCols.length - 1);
        row = lodash_clamp_js__WEBPACK_IMPORTED_MODULE_2__(row, 0, rows - 1);
        onItemHoveredImpl({
            ...args,
            location: [col, row],
        });
    }, [mangledCols.length, onItemHoveredImpl, rows]);
    (0,_use_autoscroll_js__WEBPACK_IMPORTED_MODULE_20__.useAutoscroll)(scrollDir, scrollRef, adjustSelectionOnScroll);
    // 1 === move one
    // 2 === move to end
    const adjustSelection = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((direction) => {
        if (gridSelection.current === undefined)
            return;
        const [x, y] = direction;
        const [col, row] = gridSelection.current.cell;
        const old = gridSelection.current.range;
        let left = old.x;
        let right = old.x + old.width;
        let top = old.y;
        let bottom = old.y + old.height;
        // take care of vertical first in case new spans come in
        if (y !== 0) {
            switch (y) {
                case 2: {
                    // go to end
                    bottom = rows;
                    top = row;
                    scrollTo(0, bottom, "vertical");
                    break;
                }
                case -2: {
                    // go to start
                    top = 0;
                    bottom = row + 1;
                    scrollTo(0, top, "vertical");
                    break;
                }
                case 1: {
                    // motion down
                    if (top < row) {
                        top++;
                        scrollTo(0, top, "vertical");
                    }
                    else {
                        bottom = Math.min(rows, bottom + 1);
                        scrollTo(0, bottom, "vertical");
                    }
                    break;
                }
                case -1: {
                    // motion up
                    if (bottom > row + 1) {
                        bottom--;
                        scrollTo(0, bottom, "vertical");
                    }
                    else {
                        top = Math.max(0, top - 1);
                        scrollTo(0, top, "vertical");
                    }
                    break;
                }
                default: {
                    (0,_common_support_js__WEBPACK_IMPORTED_MODULE_1__.assertNever)(y);
                }
            }
        }
        if (x !== 0) {
            if (x === 2) {
                right = mangledCols.length;
                left = col;
                scrollTo(right - 1 - rowMarkerOffset, 0, "horizontal");
            }
            else if (x === -2) {
                left = rowMarkerOffset;
                right = col + 1;
                scrollTo(left - rowMarkerOffset, 0, "horizontal");
            }
            else {
                let disallowed = [];
                if (getCellsForSelection !== undefined) {
                    const cells = getCellsForSelection({
                        x: left,
                        y: top,
                        width: right - left - rowMarkerOffset,
                        height: bottom - top,
                    }, abortControllerRef.current.signal);
                    if (typeof cells === "object") {
                        disallowed = getSpanStops(cells);
                    }
                }
                if (x === 1) {
                    // motion right
                    let done = false;
                    if (left < col) {
                        if (disallowed.length > 0) {
                            const target = lodash_range_js__WEBPACK_IMPORTED_MODULE_5__(left + 1, col + 1).find(n => !disallowed.includes(n - rowMarkerOffset));
                            if (target !== undefined) {
                                left = target;
                                done = true;
                            }
                        }
                        else {
                            left++;
                            done = true;
                        }
                        if (done)
                            scrollTo(left, 0, "horizontal");
                    }
                    if (!done) {
                        right = Math.min(mangledCols.length, right + 1);
                        scrollTo(right - 1 - rowMarkerOffset, 0, "horizontal");
                    }
                }
                else if (x === -1) {
                    // motion left
                    let done = false;
                    if (right > col + 1) {
                        if (disallowed.length > 0) {
                            const target = lodash_range_js__WEBPACK_IMPORTED_MODULE_5__(right - 1, col, -1).find(n => !disallowed.includes(n - rowMarkerOffset));
                            if (target !== undefined) {
                                right = target;
                                done = true;
                            }
                        }
                        else {
                            right--;
                            done = true;
                        }
                        if (done)
                            scrollTo(right - rowMarkerOffset, 0, "horizontal");
                    }
                    if (!done) {
                        left = Math.max(rowMarkerOffset, left - 1);
                        scrollTo(left - rowMarkerOffset, 0, "horizontal");
                    }
                }
                else {
                    (0,_common_support_js__WEBPACK_IMPORTED_MODULE_1__.assertNever)(x);
                }
            }
        }
        setCurrent({
            cell: gridSelection.current.cell,
            range: {
                x: left,
                y: top,
                width: right - left,
                height: bottom - top,
            },
        }, true, false, "keyboard-select");
    }, [getCellsForSelection, gridSelection, mangledCols.length, rowMarkerOffset, rows, scrollTo, setCurrent]);
    const updateSelectedCell = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((col, row, fromEditingTrailingRow, freeMove) => {
        const rowMax = mangledRows - (fromEditingTrailingRow ? 0 : 1);
        col = lodash_clamp_js__WEBPACK_IMPORTED_MODULE_2__(col, rowMarkerOffset, columns.length - 1 + rowMarkerOffset);
        row = lodash_clamp_js__WEBPACK_IMPORTED_MODULE_2__(row, 0, rowMax);
        if (col === currentCell?.[0] && row === currentCell?.[1])
            return false;
        if (freeMove && gridSelection.current !== undefined) {
            const newStack = [...gridSelection.current.rangeStack];
            if (gridSelection.current.range.width > 1 || gridSelection.current.range.height > 1) {
                newStack.push(gridSelection.current.range);
            }
            setGridSelection({
                ...gridSelection,
                current: {
                    cell: [col, row],
                    range: { x: col, y: row, width: 1, height: 1 },
                    rangeStack: newStack,
                },
            }, true);
        }
        else {
            setCurrent({
                cell: [col, row],
                range: { x: col, y: row, width: 1, height: 1 },
            }, true, false, "keyboard-nav");
        }
        if (lastSent.current !== undefined && lastSent.current[0] === col && lastSent.current[1] === row) {
            lastSent.current = undefined;
        }
        scrollTo(col - rowMarkerOffset, row);
        return true;
    }, [
        mangledRows,
        rowMarkerOffset,
        columns.length,
        currentCell,
        gridSelection,
        scrollTo,
        setGridSelection,
        setCurrent,
    ]);
    const onFinishEditing = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newValue, movement) => {
        if (overlay?.cell !== undefined && newValue !== undefined && (0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isEditableGridCell)(newValue)) {
            mangledOnCellsEdited([{ location: overlay.cell, value: newValue }]);
            window.requestAnimationFrame(() => {
                gridRef.current?.damage([
                    {
                        cell: overlay.cell,
                    },
                ]);
            });
        }
        focus(true);
        setOverlay(undefined);
        const [movX, movY] = movement;
        if (gridSelection.current !== undefined && (movX !== 0 || movY !== 0)) {
            const isEditingTrailingRow = gridSelection.current.cell[1] === mangledRows - 1 && newValue !== undefined;
            updateSelectedCell(lodash_clamp_js__WEBPACK_IMPORTED_MODULE_2__(gridSelection.current.cell[0] + movX, 0, mangledCols.length - 1), lodash_clamp_js__WEBPACK_IMPORTED_MODULE_2__(gridSelection.current.cell[1] + movY, 0, mangledRows - 1), isEditingTrailingRow, false);
        }
        onFinishedEditing?.(newValue, movement);
    }, [
        overlay?.cell,
        focus,
        gridSelection,
        onFinishedEditing,
        mangledOnCellsEdited,
        mangledRows,
        updateSelectedCell,
        mangledCols.length,
    ]);
    const overlayID = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        return `gdg-overlay-${idCounter++}`;
    }, []);
    const deleteRange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((r) => {
        focus();
        const editList = [];
        for (let x = r.x; x < r.x + r.width; x++) {
            for (let y = r.y; y < r.y + r.height; y++) {
                const cellValue = getCellContent([x - rowMarkerOffset, y]);
                if (!cellValue.allowOverlay && cellValue.kind !== _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Boolean)
                    continue;
                let newVal = undefined;
                if (cellValue.kind === _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Custom) {
                    const toDelete = getCellRenderer(cellValue);
                    const editor = toDelete?.provideEditor?.(cellValue);
                    if (toDelete?.onDelete !== undefined) {
                        newVal = toDelete.onDelete(cellValue);
                    }
                    else if ((0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isObjectEditorCallbackResult)(editor)) {
                        newVal = editor?.deletedValue?.(cellValue);
                    }
                }
                else if (((0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isEditableGridCell)(cellValue) && cellValue.allowOverlay) ||
                    cellValue.kind === _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Boolean) {
                    const toDelete = getCellRenderer(cellValue);
                    newVal = toDelete?.onDelete?.(cellValue);
                }
                if (newVal !== undefined && !(0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isInnerOnlyCell)(newVal) && (0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isEditableGridCell)(newVal)) {
                    editList.push({ location: [x, y], value: newVal });
                }
            }
        }
        mangledOnCellsEdited(editList);
        gridRef.current?.damage(editList.map(x => ({ cell: x.location })));
    }, [focus, getCellContent, getCellRenderer, mangledOnCellsEdited, rowMarkerOffset]);
    const overlayOpen = overlay !== undefined;
    const handleFixedKeybindings = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        const cancel = () => {
            event.stopPropagation();
            event.preventDefault();
        };
        const details = {
            didMatch: false,
        };
        const { bounds } = event;
        const selectedColumns = gridSelection.columns;
        const selectedRows = gridSelection.rows;
        const keys = keybindings;
        if (!overlayOpen && (0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.clear, event, details)) {
            setGridSelection(emptyGridSelection, false);
            onSelectionCleared?.();
        }
        else if (!overlayOpen && (0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectAll, event, details)) {
            setGridSelection({
                columns: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.empty(),
                rows: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.empty(),
                current: {
                    cell: gridSelection.current?.cell ?? [rowMarkerOffset, 0],
                    range: {
                        x: rowMarkerOffset,
                        y: 0,
                        width: columnsIn.length,
                        height: rows,
                    },
                    rangeStack: [],
                },
            }, false);
        }
        else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.search, event, details)) {
            searchInputRef?.current?.focus({ preventScroll: true });
            setShowSearchInner(true);
        }
        else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.delete, event, details)) {
            const callbackResult = onDelete?.(gridSelection) ?? true;
            if (callbackResult !== false) {
                const toDelete = callbackResult === true ? gridSelection : callbackResult;
                // delete order:
                // 1) primary range
                // 2) secondary ranges
                // 3) columns
                // 4) rows
                if (toDelete.current !== undefined) {
                    deleteRange(toDelete.current.range);
                    for (const r of toDelete.current.rangeStack) {
                        deleteRange(r);
                    }
                }
                for (const r of toDelete.rows) {
                    deleteRange({
                        x: rowMarkerOffset,
                        y: r,
                        width: columnsIn.length,
                        height: 1,
                    });
                }
                for (const col of toDelete.columns) {
                    deleteRange({
                        x: col,
                        y: 0,
                        width: 1,
                        height: rows,
                    });
                }
            }
        }
        if (details.didMatch) {
            cancel();
            return true;
        }
        if (gridSelection.current === undefined)
            return false;
        let [col, row] = gridSelection.current.cell;
        let freeMove = false;
        let cancelOnlyOnMove = false;
        if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.scrollToSelectedCell, event, details)) {
            scrollToRef.current(col - rowMarkerOffset, row);
        }
        else if (columnSelect !== "none" && (0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectColumn, event, details)) {
            if (selectedColumns.hasIndex(col)) {
                setSelectedColumns(selectedColumns.remove(col), undefined, true);
            }
            else {
                if (columnSelect === "single") {
                    setSelectedColumns(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection(col), undefined, true);
                }
                else {
                    setSelectedColumns(undefined, col, true);
                }
            }
        }
        else if (rowSelect !== "none" && (0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectRow, event, details)) {
            if (selectedRows.hasIndex(row)) {
                setSelectedRows(selectedRows.remove(row), undefined, true);
            }
            else {
                if (rowSelect === "single") {
                    setSelectedRows(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection(row), undefined, true);
                }
                else {
                    setSelectedRows(undefined, row, true);
                }
            }
        }
        else if (!overlayOpen && bounds !== undefined && (0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.activateCell, event, details)) {
            if (row === rows && showTrailingBlankRow) {
                window.setTimeout(() => {
                    const customTargetColumn = getCustomNewRowTargetColumn(col);
                    void appendRow(customTargetColumn ?? col);
                }, 0);
            }
            else {
                onCellActivated?.([col - rowMarkerOffset, row]);
                reselect(bounds, true);
            }
        }
        else if (gridSelection.current.range.height > 1 && (0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.downFill, event, details)) {
            fillDown();
        }
        else if (gridSelection.current.range.width > 1 && (0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.rightFill, event, details)) {
            fillRight();
        }
        else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goToNextPage, event, details)) {
            row += Math.max(1, visibleRegionRef.current.height - 4); // partial cell accounting
        }
        else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goToPreviousPage, event, details)) {
            row -= Math.max(1, visibleRegionRef.current.height - 4); // partial cell accounting
        }
        else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goToFirstCell, event, details)) {
            setOverlay(undefined);
            row = 0;
            col = 0;
        }
        else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goToLastCell, event, details)) {
            setOverlay(undefined);
            row = Number.MAX_SAFE_INTEGER;
            col = Number.MAX_SAFE_INTEGER;
        }
        else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectToFirstCell, event, details)) {
            setOverlay(undefined);
            adjustSelection([-2, -2]);
        }
        else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectToLastCell, event, details)) {
            setOverlay(undefined);
            adjustSelection([2, 2]);
        }
        else if (!overlayOpen) {
            if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goDownCell, event, details)) {
                row += 1;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goUpCell, event, details)) {
                row -= 1;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goRightCell, event, details)) {
                col += 1;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goLeftCell, event, details)) {
                col -= 1;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goDownCellRetainSelection, event, details)) {
                row += 1;
                freeMove = true;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goUpCellRetainSelection, event, details)) {
                row -= 1;
                freeMove = true;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goRightCellRetainSelection, event, details)) {
                col += 1;
                freeMove = true;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goLeftCellRetainSelection, event, details)) {
                col -= 1;
                freeMove = true;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goToLastRow, event, details)) {
                row = rows - 1;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goToFirstRow, event, details)) {
                row = Number.MIN_SAFE_INTEGER;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goToLastColumn, event, details)) {
                col = Number.MAX_SAFE_INTEGER;
            }
            else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.goToFirstColumn, event, details)) {
                col = Number.MIN_SAFE_INTEGER;
            }
            else if (rangeSelect === "rect" || rangeSelect === "multi-rect") {
                if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectGrowDown, event, details)) {
                    adjustSelection([0, 1]);
                }
                else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectGrowUp, event, details)) {
                    adjustSelection([0, -1]);
                }
                else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectGrowRight, event, details)) {
                    adjustSelection([1, 0]);
                }
                else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectGrowLeft, event, details)) {
                    adjustSelection([-1, 0]);
                }
                else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectToLastRow, event, details)) {
                    adjustSelection([0, 2]);
                }
                else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectToFirstRow, event, details)) {
                    adjustSelection([0, -2]);
                }
                else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectToLastColumn, event, details)) {
                    adjustSelection([2, 0]);
                }
                else if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.selectToFirstColumn, event, details)) {
                    adjustSelection([-2, 0]);
                }
            }
            cancelOnlyOnMove = details.didMatch;
        }
        else {
            if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.closeOverlay, event, details)) {
                setOverlay(undefined);
            }
            if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.acceptOverlayDown, event, details)) {
                setOverlay(undefined);
                row++;
            }
            if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.acceptOverlayUp, event, details)) {
                setOverlay(undefined);
                row--;
            }
            if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.acceptOverlayLeft, event, details)) {
                setOverlay(undefined);
                col--;
            }
            if ((0,_common_is_hotkey_js__WEBPACK_IMPORTED_MODULE_15__.isHotkey)(keys.acceptOverlayRight, event, details)) {
                setOverlay(undefined);
                col++;
            }
        }
        // #endregion
        const moved = updateSelectedCell(col, row, false, freeMove);
        const didMatch = details.didMatch;
        if (didMatch && (moved || !cancelOnlyOnMove || trapFocus)) {
            cancel();
        }
        return didMatch;
    }, [
        overlayOpen,
        gridSelection,
        keybindings,
        columnSelect,
        rowSelect,
        rangeSelect,
        rowMarkerOffset,
        rows,
        updateSelectedCell,
        setGridSelection,
        onSelectionCleared,
        columnsIn.length,
        onDelete,
        trapFocus,
        deleteRange,
        setSelectedColumns,
        setSelectedRows,
        showTrailingBlankRow,
        getCustomNewRowTargetColumn,
        appendRow,
        onCellActivated,
        reselect,
        fillDown,
        fillRight,
        adjustSelection,
    ]);
    const onKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        let cancelled = false;
        if (onKeyDownIn !== undefined) {
            onKeyDownIn({
                ...event,
                cancel: () => {
                    cancelled = true;
                },
            });
        }
        if (cancelled)
            return;
        if (handleFixedKeybindings(event))
            return;
        if (gridSelection.current === undefined)
            return;
        const [col, row] = gridSelection.current.cell;
        const vr = visibleRegionRef.current;
        if (editOnType &&
            !event.metaKey &&
            !event.ctrlKey &&
            gridSelection.current !== undefined &&
            event.key.length === 1 &&
            /[ -~]/g.test(event.key) &&
            event.bounds !== undefined &&
            (0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isReadWriteCell)(getCellContent([col - rowMarkerOffset, Math.max(0, Math.min(row, rows - 1))]))) {
            if ((!showTrailingBlankRow || row !== rows) &&
                (vr.y > row || row > vr.y + vr.height || vr.x > col || col > vr.x + vr.width)) {
                return;
            }
            reselect(event.bounds, true, event.key);
            event.stopPropagation();
            event.preventDefault();
        }
    }, [
        editOnType,
        onKeyDownIn,
        handleFixedKeybindings,
        gridSelection,
        getCellContent,
        rowMarkerOffset,
        rows,
        showTrailingBlankRow,
        reselect,
    ]);
    const onContextMenu = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args, preventDefault) => {
        const adjustedCol = args.location[0] - rowMarkerOffset;
        if (args.kind === "header") {
            onHeaderContextMenu?.(adjustedCol, { ...args, preventDefault });
        }
        if (args.kind === _internal_data_grid_event_args_js__WEBPACK_IMPORTED_MODULE_25__.groupHeaderKind) {
            if (adjustedCol < 0) {
                return;
            }
            onGroupHeaderContextMenu?.(adjustedCol, { ...args, preventDefault });
        }
        if (args.kind === "cell") {
            const [col, row] = args.location;
            onCellContextMenu?.([adjustedCol, row], {
                ...args,
                preventDefault,
            });
            if (!(0,_internal_data_grid_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_12__.gridSelectionHasItem)(gridSelection, args.location)) {
                updateSelectedCell(col, row, false, false);
            }
        }
    }, [
        gridSelection,
        onCellContextMenu,
        onGroupHeaderContextMenu,
        onHeaderContextMenu,
        rowMarkerOffset,
        updateSelectedCell,
    ]);
    const onPasteInternal = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (e) => {
        if (!keybindings.paste)
            return;
        function pasteToCell(inner, target, rawValue, formatted) {
            const stringifiedRawValue = typeof rawValue === "object" ? rawValue?.join("\n") ?? "" : rawValue?.toString() ?? "";
            if (!(0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isInnerOnlyCell)(inner) && (0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isReadWriteCell)(inner) && inner.readonly !== true) {
                const coerced = coercePasteValue?.(stringifiedRawValue, inner);
                if (coerced !== undefined && (0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.isEditableGridCell)(coerced)) {
                    if ( true && coerced.kind !== inner.kind) {
                        // eslint-disable-next-line no-console
                        console.warn("Coercion should not change cell kind.");
                    }
                    return {
                        location: target,
                        value: coerced,
                    };
                }
                const r = getCellRenderer(inner);
                if (r === undefined)
                    return undefined;
                if (r.kind === _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Custom) {
                    (0,_common_support_js__WEBPACK_IMPORTED_MODULE_1__.assert)(inner.kind === _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Custom);
                    const newVal = r.onPaste?.(stringifiedRawValue, inner.data);
                    if (newVal === undefined)
                        return undefined;
                    return {
                        location: target,
                        value: {
                            ...inner,
                            data: newVal,
                        },
                    };
                }
                else {
                    const newVal = r.onPaste?.(stringifiedRawValue, inner, {
                        formatted,
                        formattedString: typeof formatted === "string" ? formatted : formatted?.join("\n"),
                        rawValue,
                    });
                    if (newVal === undefined)
                        return undefined;
                    (0,_common_support_js__WEBPACK_IMPORTED_MODULE_1__.assert)(newVal.kind === inner.kind);
                    return {
                        location: target,
                        value: newVal,
                    };
                }
            }
            return undefined;
        }
        const selectedColumns = gridSelection.columns;
        const selectedRows = gridSelection.rows;
        const focused = scrollRef.current?.contains(document.activeElement) === true ||
            canvasRef.current?.contains(document.activeElement) === true;
        let target;
        if (gridSelection.current !== undefined) {
            target = [gridSelection.current.range.x, gridSelection.current.range.y];
        }
        else if (selectedColumns.length === 1) {
            target = [selectedColumns.first() ?? 0, 0];
        }
        else if (selectedRows.length === 1) {
            target = [rowMarkerOffset, selectedRows.first() ?? 0];
        }
        if (focused && target !== undefined) {
            let data;
            let text;
            const textPlain = "text/plain";
            const textHtml = "text/html";
            if (navigator.clipboard.read !== undefined) {
                const clipboardContent = await navigator.clipboard.read();
                for (const item of clipboardContent) {
                    if (item.types.includes(textHtml)) {
                        const htmlBlob = await item.getType(textHtml);
                        const html = await htmlBlob.text();
                        const decoded = (0,_copy_paste_js__WEBPACK_IMPORTED_MODULE_21__.decodeHTML)(html);
                        if (decoded !== undefined) {
                            data = decoded;
                            break;
                        }
                    }
                    if (item.types.includes(textPlain)) {
                        // eslint-disable-next-line unicorn/no-await-expression-member
                        text = await (await item.getType(textPlain)).text();
                    }
                }
            }
            else if (navigator.clipboard.readText !== undefined) {
                text = await navigator.clipboard.readText();
            }
            else if (e !== undefined && e?.clipboardData !== null) {
                if (e.clipboardData.types.includes(textHtml)) {
                    const html = e.clipboardData.getData(textHtml);
                    data = (0,_copy_paste_js__WEBPACK_IMPORTED_MODULE_21__.decodeHTML)(html);
                }
                if (data === undefined && e.clipboardData.types.includes(textPlain)) {
                    text = e.clipboardData.getData(textPlain);
                }
            }
            else {
                return; // I didn't want to read that paste value anyway
            }
            const [targetCol, targetRow] = target;
            const editList = [];
            do {
                if (onPaste === undefined) {
                    const cellData = getMangledCellContent(target);
                    const rawValue = text ?? data?.map(r => r.map(cb => cb.rawValue).join("\t")).join("\t") ?? "";
                    const newVal = pasteToCell(cellData, target, rawValue, undefined);
                    if (newVal !== undefined) {
                        editList.push(newVal);
                    }
                    break;
                }
                if (data === undefined) {
                    if (text === undefined)
                        return;
                    data = (0,_data_editor_fns_js__WEBPACK_IMPORTED_MODULE_18__.unquote)(text);
                }
                if (onPaste === false ||
                    (typeof onPaste === "function" &&
                        onPaste?.([target[0] - rowMarkerOffset, target[1]], data.map(r => r.map(cb => cb.rawValue?.toString() ?? ""))) !== true)) {
                    return;
                }
                for (const [row, dataRow] of data.entries()) {
                    if (row + targetRow >= rows)
                        break;
                    for (const [col, dataItem] of dataRow.entries()) {
                        const index = [col + targetCol, row + targetRow];
                        const [writeCol, writeRow] = index;
                        if (writeCol >= mangledCols.length)
                            continue;
                        if (writeRow >= mangledRows)
                            continue;
                        const cellData = getMangledCellContent(index);
                        const newVal = pasteToCell(cellData, index, dataItem.rawValue, dataItem.formatted);
                        if (newVal !== undefined) {
                            editList.push(newVal);
                        }
                    }
                }
                // eslint-disable-next-line no-constant-condition
            } while (false);
            mangledOnCellsEdited(editList);
            gridRef.current?.damage(editList.map(c => ({
                cell: c.location,
            })));
        }
    }, [
        coercePasteValue,
        getCellRenderer,
        getMangledCellContent,
        gridSelection,
        keybindings.paste,
        mangledCols.length,
        mangledOnCellsEdited,
        mangledRows,
        onPaste,
        rowMarkerOffset,
        rows,
    ]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.useEventListener)("paste", onPasteInternal, safeWindow, false, true);
    // While this function is async, we deeply prefer not to await if we don't have to. This will lead to unpacking
    // promises in rather awkward ways when possible to avoid awaiting. We have to use fallback copy mechanisms when
    // an await has happened.
    const onCopy = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (e, ignoreFocus) => {
        if (!keybindings.copy)
            return;
        const focused = ignoreFocus === true ||
            scrollRef.current?.contains(document.activeElement) === true ||
            canvasRef.current?.contains(document.activeElement) === true;
        const selectedColumns = gridSelection.columns;
        const selectedRows = gridSelection.rows;
        const copyToClipboardWithHeaders = (cells, columnIndexes) => {
            if (!copyHeaders) {
                (0,_data_editor_fns_js__WEBPACK_IMPORTED_MODULE_18__.copyToClipboard)(cells, columnIndexes, e);
            }
            else {
                const headers = columnIndexes.map(index => ({
                    kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.GridCellKind.Text,
                    data: columnsIn[index].title,
                    displayData: columnsIn[index].title,
                    allowOverlay: false,
                }));
                (0,_data_editor_fns_js__WEBPACK_IMPORTED_MODULE_18__.copyToClipboard)([headers, ...cells], columnIndexes, e);
            }
        };
        if (focused && getCellsForSelection !== undefined) {
            if (gridSelection.current !== undefined) {
                let thunk = getCellsForSelection(gridSelection.current.range, abortControllerRef.current.signal);
                if (typeof thunk !== "object") {
                    thunk = await thunk();
                }
                copyToClipboardWithHeaders(thunk, lodash_range_js__WEBPACK_IMPORTED_MODULE_5__(gridSelection.current.range.x - rowMarkerOffset, gridSelection.current.range.x + gridSelection.current.range.width - rowMarkerOffset));
            }
            else if (selectedRows !== undefined && selectedRows.length > 0) {
                const toCopy = [...selectedRows];
                const cells = toCopy.map(rowIndex => {
                    const thunk = getCellsForSelection({
                        x: rowMarkerOffset,
                        y: rowIndex,
                        width: columnsIn.length,
                        height: 1,
                    }, abortControllerRef.current.signal);
                    if (typeof thunk === "object") {
                        return thunk[0];
                    }
                    return thunk().then(v => v[0]);
                });
                if (cells.some(x => x instanceof Promise)) {
                    const settled = await Promise.all(cells);
                    copyToClipboardWithHeaders(settled, lodash_range_js__WEBPACK_IMPORTED_MODULE_5__(columnsIn.length));
                }
                else {
                    copyToClipboardWithHeaders(cells, lodash_range_js__WEBPACK_IMPORTED_MODULE_5__(columnsIn.length));
                }
            }
            else if (selectedColumns.length > 0) {
                const results = [];
                const cols = [];
                for (const col of selectedColumns) {
                    let thunk = getCellsForSelection({
                        x: col,
                        y: 0,
                        width: 1,
                        height: rows,
                    }, abortControllerRef.current.signal);
                    if (typeof thunk !== "object") {
                        thunk = await thunk();
                    }
                    results.push(thunk);
                    cols.push(col - rowMarkerOffset);
                }
                if (results.length === 1) {
                    copyToClipboardWithHeaders(results[0], cols);
                }
                else {
                    // FIXME: this is dumb
                    const toCopy = results.reduce((pv, cv) => pv.map((row, index) => [...row, ...cv[index]]));
                    copyToClipboardWithHeaders(toCopy, cols);
                }
            }
        }
    }, [columnsIn, getCellsForSelection, gridSelection, keybindings.copy, rowMarkerOffset, rows, copyHeaders]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.useEventListener)("copy", onCopy, safeWindow, false, false);
    const onCut = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(async (e) => {
        if (!keybindings.cut)
            return;
        const focused = scrollRef.current?.contains(document.activeElement) === true ||
            canvasRef.current?.contains(document.activeElement) === true;
        if (!focused)
            return;
        await onCopy(e);
        if (gridSelection.current !== undefined) {
            let effectiveSelection = {
                current: {
                    cell: gridSelection.current.cell,
                    range: gridSelection.current.range,
                    rangeStack: [],
                },
                rows: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.empty(),
                columns: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.empty(),
            };
            const onDeleteResult = onDelete?.(effectiveSelection);
            if (onDeleteResult === false)
                return;
            effectiveSelection = onDeleteResult === true ? effectiveSelection : onDeleteResult;
            if (effectiveSelection.current === undefined)
                return;
            deleteRange(effectiveSelection.current.range);
        }
    }, [deleteRange, gridSelection, keybindings.cut, onCopy, onDelete]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.useEventListener)("cut", onCut, safeWindow, false, false);
    const onSearchResultsChanged = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((results, navIndex) => {
        if (onSearchResultsChangedIn !== undefined) {
            if (rowMarkerOffset !== 0) {
                results = results.map(item => [item[0] - rowMarkerOffset, item[1]]);
            }
            onSearchResultsChangedIn(results, navIndex);
            return;
        }
        if (results.length === 0 || navIndex === -1)
            return;
        const [col, row] = results[navIndex];
        if (lastSent.current !== undefined && lastSent.current[0] === col && lastSent.current[1] === row) {
            return;
        }
        lastSent.current = [col, row];
        updateSelectedCell(col, row, false, false);
    }, [onSearchResultsChangedIn, rowMarkerOffset, updateSelectedCell]);
    // this effects purpose in life is to scroll the newly selected cell into view when and ONLY when that cell
    // is from an external gridSelection change. Also note we want the unmangled out selection because scrollTo
    // expects unmangled indexes
    const [outCol, outRow] = gridSelectionOuter?.current?.cell ?? [];
    const scrollToRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(scrollTo);
    scrollToRef.current = scrollTo;
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        if (!hasJustScrolled.current &&
            outCol !== undefined &&
            outRow !== undefined &&
            (outCol !== expectedExternalGridSelection.current?.current?.cell[0] ||
                outRow !== expectedExternalGridSelection.current?.current?.cell[1])) {
            scrollToRef.current(outCol, outRow);
        }
        hasJustScrolled.current = false; //only allow skipping a single scroll
    }, [outCol, outRow]);
    const selectionOutOfBounds = gridSelection.current !== undefined &&
        (gridSelection.current.cell[0] >= mangledCols.length || gridSelection.current.cell[1] >= mangledRows);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        if (selectionOutOfBounds) {
            setGridSelection(emptyGridSelection, false);
        }
    }, [selectionOutOfBounds, setGridSelection]);
    const disabledRows = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (showTrailingBlankRow === true && trailingRowOptions?.tint === true) {
            return _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection(mangledRows - 1);
        }
        return _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.empty();
    }, [mangledRows, showTrailingBlankRow, trailingRowOptions?.tint]);
    const mangledVerticalBorder = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((col) => {
        return typeof verticalBorder === "boolean"
            ? verticalBorder
            : verticalBorder?.(col - rowMarkerOffset) ?? true;
    }, [rowMarkerOffset, verticalBorder]);
    const renameGroupNode = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (renameGroup === undefined || canvasRef.current === null)
            return null;
        const { bounds, group } = renameGroup;
        const canvasBounds = canvasRef.current.getBoundingClientRect();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_group_rename_js__WEBPACK_IMPORTED_MODULE_13__.GroupRename, { bounds: bounds, group: group, canvasBounds: canvasBounds, onClose: () => setRenameGroup(undefined), onFinish: newVal => {
                setRenameGroup(undefined);
                onGroupHeaderRenamed?.(group, newVal);
            } }));
    }, [onGroupHeaderRenamed, renameGroup]);
    const mangledFreezeColumns = Math.min(mangledCols.length, freezeColumns + (hasRowMarkers ? 1 : 0));
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(forwardedRef, () => ({
        appendRow: (col, openOverlay) => appendRow(col + rowMarkerOffset, openOverlay),
        updateCells: damageList => {
            if (rowMarkerOffset !== 0) {
                damageList = damageList.map(x => ({ cell: [x.cell[0] + rowMarkerOffset, x.cell[1]] }));
            }
            return gridRef.current?.damage(damageList);
        },
        getBounds: (col, row) => {
            if (canvasRef?.current === null || scrollRef?.current === null) {
                return undefined;
            }
            if (col === undefined && row === undefined) {
                // Return the bounds of the entire scroll area:
                const rect = canvasRef.current.getBoundingClientRect();
                const scale = rect.width / scrollRef.current.clientWidth;
                return {
                    x: rect.x - scrollRef.current.scrollLeft * scale,
                    y: rect.y - scrollRef.current.scrollTop * scale,
                    width: scrollRef.current.scrollWidth * scale,
                    height: scrollRef.current.scrollHeight * scale,
                };
            }
            return gridRef.current?.getBounds((col ?? 0) + rowMarkerOffset, row);
        },
        focus: () => gridRef.current?.focus(),
        emit: async (e) => {
            switch (e) {
                case "delete":
                    onKeyDown({
                        bounds: undefined,
                        cancel: () => undefined,
                        stopPropagation: () => undefined,
                        preventDefault: () => undefined,
                        ctrlKey: false,
                        key: "Delete",
                        keyCode: 46,
                        metaKey: false,
                        shiftKey: false,
                        altKey: false,
                        rawEvent: undefined,
                        location: undefined,
                    });
                    break;
                case "fill-right":
                    onKeyDown({
                        bounds: undefined,
                        cancel: () => undefined,
                        stopPropagation: () => undefined,
                        preventDefault: () => undefined,
                        ctrlKey: true,
                        key: "r",
                        keyCode: 82,
                        metaKey: false,
                        shiftKey: false,
                        altKey: false,
                        rawEvent: undefined,
                        location: undefined,
                    });
                    break;
                case "fill-down":
                    onKeyDown({
                        bounds: undefined,
                        cancel: () => undefined,
                        stopPropagation: () => undefined,
                        preventDefault: () => undefined,
                        ctrlKey: true,
                        key: "d",
                        keyCode: 68,
                        metaKey: false,
                        shiftKey: false,
                        altKey: false,
                        rawEvent: undefined,
                        location: undefined,
                    });
                    break;
                case "copy":
                    await onCopy(undefined, true);
                    break;
                case "paste":
                    await onPasteInternal();
                    break;
            }
        },
        scrollTo,
        remeasureColumns: cols => {
            for (const col of cols) {
                void normalSizeColumn(col + rowMarkerOffset);
            }
        },
    }), [appendRow, normalSizeColumn, onCopy, onKeyDown, onPasteInternal, rowMarkerOffset, scrollTo]);
    const [selCol, selRow] = currentCell ?? [];
    const onCellFocused = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((cell) => {
        const [col, row] = cell;
        if (row === -1) {
            if (columnSelect !== "none") {
                setSelectedColumns(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_7__.CompactSelection.fromSingleSelection(col), undefined, false);
                focus();
            }
            return;
        }
        if (selCol === col && selRow === row)
            return;
        setCurrent({
            cell,
            range: { x: col, y: row, width: 1, height: 1 },
        }, true, false, "keyboard-nav");
        scrollTo(col, row);
    }, [columnSelect, focus, scrollTo, selCol, selRow, setCurrent, setSelectedColumns]);
    const [isFocused, setIsFocused] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const setIsFocusedDebounced = react__WEBPACK_IMPORTED_MODULE_0__.useRef(lodash_debounce_js__WEBPACK_IMPORTED_MODULE_6__((val) => {
        setIsFocused(val);
    }, 5));
    const onCanvasFocused = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        setIsFocusedDebounced.current(true);
        // check for mouse state, don't do anything if the user is clicked to focus.
        if (gridSelection.current === undefined &&
            gridSelection.columns.length === 0 &&
            gridSelection.rows.length === 0 &&
            mouseState === undefined) {
            setCurrent({
                cell: [rowMarkerOffset, cellYOffset],
                range: {
                    x: rowMarkerOffset,
                    y: cellYOffset,
                    width: 1,
                    height: 1,
                },
            }, true, false, "keyboard-select");
        }
    }, [cellYOffset, gridSelection, mouseState, rowMarkerOffset, setCurrent]);
    const onFocusOut = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        setIsFocusedDebounced.current(false);
    }, []);
    const [idealWidth, idealHeight] = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        let h;
        const scrollbarWidth = experimental?.scrollbarWidthOverride ?? (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_11__.getScrollBarWidth)();
        const rowsCountWithTrailingRow = rows + (showTrailingBlankRow ? 1 : 0);
        if (typeof rowHeight === "number") {
            h = totalHeaderHeight + rowsCountWithTrailingRow * rowHeight;
        }
        else {
            let avg = 0;
            const toAverage = Math.min(rowsCountWithTrailingRow, 10);
            for (let i = 0; i < toAverage; i++) {
                avg += rowHeight(i);
            }
            avg = Math.floor(avg / toAverage);
            h = totalHeaderHeight + rowsCountWithTrailingRow * avg;
        }
        h += scrollbarWidth;
        const w = mangledCols.reduce((acc, x) => x.width + acc, 0) + scrollbarWidth;
        // We need to set a reasonable cap here as some browsers will just ignore huge values
        // rather than treat them as huge values.
        return [`${Math.min(100000, w)}px`, `${Math.min(100000, h)}px`];
    }, [mangledCols, experimental?.scrollbarWidthOverride, rowHeight, rows, showTrailingBlankRow, totalHeaderHeight]);
    const cssStyle = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        return (0,_common_styles_js__WEBPACK_IMPORTED_MODULE_10__.makeCSSStyle)(mergedTheme);
    }, [mergedTheme]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_styles_js__WEBPACK_IMPORTED_MODULE_10__.ThemeContext.Provider, { value: mergedTheme },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_data_editor_container_data_grid_container_js__WEBPACK_IMPORTED_MODULE_19__.DataEditorContainer, { style: cssStyle, className: className, inWidth: width ?? idealWidth, inHeight: height ?? idealHeight },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_data_grid_search_data_grid_search_js__WEBPACK_IMPORTED_MODULE_8__["default"], { fillHandle: fillHandle, drawFocusRing: drawFocusRing, experimental: experimental, fixedShadowX: fixedShadowX, fixedShadowY: fixedShadowY, getRowThemeOverride: getRowThemeOverride, headerIcons: headerIcons, imageWindowLoader: imageWindowLoader, initialSize: initialSize, isDraggable: isDraggable, onDragLeave: onDragLeave, onRowMoved: onRowMoved, overscrollX: overscrollX, overscrollY: overscrollY, preventDiagonalScrolling: preventDiagonalScrolling, rightElement: rightElement, rightElementProps: rightElementProps, smoothScrollX: smoothScrollX, smoothScrollY: smoothScrollY, className: className, enableGroups: enableGroups, onCanvasFocused: onCanvasFocused, onCanvasBlur: onFocusOut, canvasRef: canvasRef, onContextMenu: onContextMenu, theme: mergedTheme, cellXOffset: cellXOffset, cellYOffset: cellYOffset, accessibilityHeight: visibleRegion.height, onDragEnd: onDragEnd, columns: mangledCols, nonGrowWidth: nonGrowWidth, drawHeader: drawHeader, onColumnProposeMove: onColumnProposeMove, drawCell: drawCell, disabledRows: disabledRows, freezeColumns: mangledFreezeColumns, lockColumns: rowMarkerOffset, firstColAccessible: rowMarkerOffset === 0, getCellContent: getMangledCellContent, minColumnWidth: minColumnWidth, maxColumnWidth: maxColumnWidth, searchInputRef: searchInputRef, showSearch: showSearch, onSearchClose: onSearchClose, highlightRegions: highlightRegions, getCellsForSelection: getCellsForSelection, getGroupDetails: mangledGetGroupDetails, headerHeight: headerHeight, isFocused: isFocused, groupHeaderHeight: enableGroups ? groupHeaderHeight : 0, freezeTrailingRows: freezeTrailingRows + (showTrailingBlankRow && trailingRowOptions?.sticky === true ? 1 : 0), hasAppendRow: showTrailingBlankRow, onColumnResize: onColumnResize, onColumnResizeEnd: onColumnResizeEnd, onColumnResizeStart: onColumnResizeStart, onCellFocused: onCellFocused, onColumnMoved: onColumnMovedImpl, onDragStart: onDragStartImpl, onHeaderMenuClick: onHeaderMenuClickInner, onItemHovered: onItemHoveredImpl, isFilling: mouseState?.fillHandle === true, onMouseMove: onMouseMoveImpl, onKeyDown: onKeyDown, onKeyUp: onKeyUpIn, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onDragOverCell: onDragOverCell, onDrop: onDrop, onSearchResultsChanged: onSearchResultsChanged, onVisibleRegionChanged: onVisibleRegionChangedImpl, clientSize: clientSize, rowHeight: rowHeight, searchResults: searchResults, searchValue: searchValue, onSearchValueChange: onSearchValueChange, rows: mangledRows, scrollRef: scrollRef, selection: gridSelection, translateX: visibleRegion.tx, translateY: visibleRegion.ty, verticalBorder: mangledVerticalBorder, gridRef: gridRef, getCellRenderer: getCellRenderer }),
            renameGroupNode,
            overlay !== undefined && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: null },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataGridOverlayEditor, { ...overlay, validateCell: validateCell, bloom: editorBloom, id: overlayID, getCellRenderer: getCellRenderer, className: experimental?.isSubGrid === true ? "click-outside-ignore" : undefined, provideEditor: provideEditor, imageEditorOverride: imageEditorOverride, onFinishEditing: onFinishEditing, markdownDivCreateNode: markdownDivCreateNode, isOutsideClick: isOutsideClick }))))));
};
/**
 * The primary component of Glide Data Grid.
 * @category DataEditor
 * @param {DataEditorProps} props
 */
const DataEditor = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DataEditorImpl);
//# sourceMappingURL=data-editor.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/group-rename.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupRename: () => (/* binding */ GroupRename)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var _internal_click_outside_container_click_outside_container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/click-outside-container/click-outside-container.js");



const _exp = /*#__PURE__*/() => p => Math.max(16, p.targetHeight - 10);
const RenameInput = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('input')({
  name: "RenameInput",
  class: "gdg-r17m35ur",
  propsAsIs: false,
  vars: {
    "r17m35ur-0": [_exp(), "px"]
  }
});
const GroupRename = p => {
  const {
    bounds,
    group,
    onClose,
    canvasBounds,
    onFinish
  } = p;
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(group);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_click_outside_container_click_outside_container_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      position: "absolute",
      left: bounds.x - canvasBounds.left + 1,
      top: bounds.y - canvasBounds.top,
      width: bounds.width - 2,
      height: bounds.height
    },
    className: "gdg-c1tqibwd",
    onClickOutside: onClose
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenameInput, {
    targetHeight: bounds.height,
    "data-testid": "group-rename-input",
    value: value,
    onBlur: onClose,
    onFocus: e => e.target.setSelectionRange(0, value.length),
    onChange: e => setValue(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") {
        onFinish(value);
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    autoFocus: true
  }));
};



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-autoscroll.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAutoscroll: () => (/* binding */ useAutoscroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");

const maxPxPerMs = 2;
const msToFullSpeed = 1300;
function useAutoscroll(scrollDirection, scrollRef, onScroll) {
    const speedScalar = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const [xDir, yDir] = scrollDirection ?? [0, 0];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (xDir === 0 && yDir === 0) {
            speedScalar.current = 0;
            return;
        }
        let cancelled = false;
        let lastTime = 0;
        const scrollFn = (curTime) => {
            if (cancelled)
                return;
            if (lastTime === 0) {
                lastTime = curTime;
            }
            else {
                const step = curTime - lastTime;
                speedScalar.current = Math.min(1, speedScalar.current + step / msToFullSpeed);
                const motion = speedScalar.current ** 1.618 * step * maxPxPerMs;
                scrollRef.current?.scrollBy(xDir * motion, yDir * motion);
                lastTime = curTime;
                onScroll?.();
            }
            window.requestAnimationFrame(scrollFn);
        };
        window.requestAnimationFrame(scrollFn);
        return () => {
            cancelled = true;
        };
    }, [scrollRef, xDir, yDir, onScroll]);
}
//# sourceMappingURL=use-autoscroll.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-cells-for-selection.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCellsForSelection: () => (/* binding */ useCellsForSelection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");


function useCellsForSelection(getCellsForSelectionIn, getCellContent, rowMarkerOffset, abortController, rows) {
    const getCellsForSelectionDirectWhenValid = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(rect => {
        if (getCellsForSelectionIn === true) {
            const result = [];
            for (let y = rect.y; y < rect.y + rect.height; y++) {
                const row = [];
                for (let x = rect.x; x < rect.x + rect.width; x++) {
                    if (x < 0 || y >= rows) {
                        row.push({
                            kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Loading,
                            allowOverlay: false,
                        });
                    }
                    else {
                        row.push(getCellContent([x, y]));
                    }
                }
                result.push(row);
            }
            return result;
        }
        return getCellsForSelectionIn?.(rect, abortController.signal) ?? [];
    }, [abortController.signal, getCellContent, getCellsForSelectionIn, rows]);
    const getCellsForSelectionDirect = getCellsForSelectionIn !== undefined ? getCellsForSelectionDirectWhenValid : undefined;
    const getCellsForSelectionMangled = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(rect => {
        if (getCellsForSelectionDirect === undefined)
            return [];
        const newRect = {
            ...rect,
            x: rect.x - rowMarkerOffset,
        };
        if (newRect.x < 0) {
            newRect.x = 0;
            newRect.width--;
            const r = getCellsForSelectionDirect(newRect, abortController.signal);
            if (typeof r === "function") {
                return async () => 
                // eslint-disable-next-line unicorn/no-await-expression-member
                (await r()).map(row => [
                    { kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Loading, allowOverlay: false },
                    ...row,
                ]);
            }
            return r.map(row => [{ kind: _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Loading, allowOverlay: false }, ...row]);
        }
        return getCellsForSelectionDirect(newRect, abortController.signal);
    }, [abortController.signal, getCellsForSelectionDirect, rowMarkerOffset]);
    const getCellsForSelection = getCellsForSelectionIn !== undefined ? getCellsForSelectionMangled : undefined;
    return [getCellsForSelection, getCellsForSelectionDirect];
}
//# sourceMappingURL=use-cells-for-selection.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-column-sizer.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   measureColumn: () => (/* binding */ measureColumn),
/* harmony export */   useColumnSizer: () => (/* binding */ useColumnSizer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");


const defaultSize = 150;
function measureCell(ctx, cell, theme, getCellRenderer) {
    const r = getCellRenderer(cell);
    return r?.measure?.(ctx, cell, theme) ?? defaultSize;
}
function measureColumn(ctx, theme, c, colIndex, selectedData, minColumnWidth, maxColumnWidth, removeOutliers, getCellRenderer) {
    let max = 0;
    const sizes = selectedData === undefined
        ? []
        : selectedData.map(row => {
            const r = measureCell(ctx, row[colIndex], theme, getCellRenderer);
            max = Math.max(max, r);
            return r;
        });
    if (sizes.length > 5 && removeOutliers) {
        max = 0;
        // Filter out outliers
        let sum = 0;
        for (const size of sizes) {
            sum += size;
        }
        const average = sum / sizes.length;
        // Set sizes that are considered outliers to zero
        for (let i = 0; i < sizes.length; i++) {
            if (sizes[i] >= average * 2) {
                sizes[i] = 0;
            }
            else {
                max = Math.max(max, sizes[i]);
            }
        }
    }
    max = Math.max(max, ctx.measureText(c.title).width + 16 + (c.icon === undefined ? 0 : 28));
    const final = Math.max(Math.ceil(minColumnWidth), Math.min(Math.floor(maxColumnWidth), Math.ceil(max)));
    return {
        ...c,
        width: final,
    };
}
/** @category Hooks */
function useColumnSizer(columns, rows, getCellsForSelection, clientWidth, minColumnWidth, maxColumnWidth, theme, getCellRenderer, abortController) {
    const rowsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(rows);
    const getCellsForSelectionRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(getCellsForSelection);
    const themeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(theme);
    rowsRef.current = rows;
    getCellsForSelectionRef.current = getCellsForSelection;
    themeRef.current = theme;
    const [canvas, ctx] = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (typeof window === "undefined")
            return [null, null];
        const offscreen = document.createElement("canvas");
        offscreen.style["display"] = "none";
        offscreen.style["opacity"] = "0";
        offscreen.style["position"] = "fixed";
        return [offscreen, offscreen.getContext("2d", { alpha: false })];
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        if (canvas)
            document.documentElement.append(canvas);
        return () => {
            canvas?.remove();
        };
    }, [canvas]);
    const memoMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const lastColumns = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const [selectedData, setSelectionData] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        const getCells = getCellsForSelectionRef.current;
        if (getCells === undefined || columns.every(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.isSizedGridColumn))
            return;
        let computeRows = Math.max(1, 10 - Math.floor(columns.length / 10000));
        let tailRows = 0;
        if (computeRows < rowsRef.current && computeRows > 1) {
            computeRows--;
            tailRows = 1;
        }
        const computeArea = {
            x: 0,
            y: 0,
            width: columns.length,
            height: Math.min(rowsRef.current, computeRows),
        };
        const tailComputeArea = {
            x: 0,
            y: rowsRef.current - 1,
            width: columns.length,
            height: 1,
        };
        const fn = async () => {
            const getResult = getCells(computeArea, abortController.signal);
            const tailGetResult = tailRows > 0 ? getCells(tailComputeArea, abortController.signal) : undefined;
            let toSet;
            // eslint-disable-next-line unicorn/prefer-ternary
            if (typeof getResult === "object") {
                toSet = getResult;
            }
            else {
                toSet = await (0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.resolveCellsThunk)(getResult);
            }
            if (tailGetResult !== undefined) {
                // eslint-disable-next-line unicorn/prefer-ternary
                if (typeof tailGetResult === "object") {
                    toSet = [...toSet, ...tailGetResult];
                }
                else {
                    toSet = [...toSet, ...(await (0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.resolveCellsThunk)(tailGetResult))];
                }
            }
            lastColumns.current = columns;
            setSelectionData(toSet);
        };
        void fn();
    }, [abortController.signal, columns]);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const getRaw = () => {
            if (columns.every(_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.isSizedGridColumn)) {
                return columns;
            }
            if (ctx === null) {
                return columns.map(c => {
                    if ((0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.isSizedGridColumn)(c))
                        return c;
                    return {
                        ...c,
                        width: defaultSize,
                    };
                });
            }
            ctx.font = themeRef.current.baseFontFull;
            return columns.map((c, colIndex) => {
                if ((0,_internal_data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.isSizedGridColumn)(c))
                    return c;
                if (memoMap.current[c.id] !== undefined) {
                    return {
                        ...c,
                        width: memoMap.current[c.id],
                    };
                }
                if (selectedData === undefined || lastColumns.current !== columns || c.id === undefined) {
                    return {
                        ...c,
                        width: defaultSize,
                    };
                }
                const r = measureColumn(ctx, theme, c, colIndex, selectedData, minColumnWidth, maxColumnWidth, true, getCellRenderer);
                memoMap.current[c.id] = r.width;
                return r;
            });
        };
        let result = getRaw();
        let totalWidth = 0;
        let totalGrow = 0;
        const distribute = [];
        for (const [i, c] of result.entries()) {
            totalWidth += c.width;
            if (c.grow !== undefined && c.grow > 0) {
                totalGrow += c.grow;
                distribute.push(i);
            }
        }
        if (totalWidth < clientWidth && distribute.length > 0) {
            const writeable = [...result];
            const extra = clientWidth - totalWidth;
            let remaining = extra;
            for (let di = 0; di < distribute.length; di++) {
                const i = distribute[di];
                const weighted = (result[i].grow ?? 0) / totalGrow;
                const toAdd = di === distribute.length - 1 ? remaining : Math.min(remaining, Math.floor(extra * weighted));
                writeable[i] = {
                    ...result[i],
                    growOffset: toAdd,
                    width: result[i].width + toAdd,
                };
                remaining -= toAdd;
            }
            result = writeable;
        }
        return {
            sizedColumns: result,
            nonGrowWidth: totalWidth,
        };
    }, [clientWidth, columns, ctx, selectedData, theme, minColumnWidth, maxColumnWidth, getCellRenderer]);
}
//# sourceMappingURL=use-column-sizer.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-rem-adjuster.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRemAdjuster: () => (/* binding */ useRemAdjuster)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _common_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/styles.js");


function useRemAdjuster({ rowHeight: rowHeightIn, headerHeight: headerHeightIn, groupHeaderHeight: groupHeaderHeightIn, theme: themeIn, overscrollX: overscrollXIn, overscrollY: overscrollYIn, scaleToRem, remSize, }) {
    const [rowHeight, headerHeight, groupHeaderHeight, theme, overscrollX, overscrollY] = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (!scaleToRem || remSize === 16)
            return [rowHeightIn, headerHeightIn, groupHeaderHeightIn, themeIn, overscrollXIn, overscrollYIn];
        const scaler = remSize / 16;
        const rh = rowHeightIn;
        const bt = (0,_common_styles_js__WEBPACK_IMPORTED_MODULE_1__.getDataEditorTheme)();
        return [
            typeof rh === "number" ? rh * scaler : (n) => Math.ceil(rh(n) * scaler),
            Math.ceil(headerHeightIn * scaler),
            Math.ceil(groupHeaderHeightIn * scaler),
            {
                ...themeIn,
                headerIconSize: (themeIn?.headerIconSize ?? bt.headerIconSize) * scaler,
                cellHorizontalPadding: (themeIn?.cellHorizontalPadding ?? bt.cellHorizontalPadding) * scaler,
                cellVerticalPadding: (themeIn?.cellVerticalPadding ?? bt.cellVerticalPadding) * scaler,
            },
            Math.ceil((overscrollXIn ?? 0) * scaler),
            Math.ceil((overscrollYIn ?? 0) * scaler),
        ];
    }, [groupHeaderHeightIn, headerHeightIn, overscrollXIn, overscrollYIn, remSize, rowHeightIn, scaleToRem, themeIn]);
    return { rowHeight, headerHeight, groupHeaderHeight, theme, overscrollX, overscrollY };
}
//# sourceMappingURL=use-rem-adjuster.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/click-outside-container/click-outside-container.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClickOutsideContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");

class ClickOutsideContainer extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    wrapperRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    componentDidMount() {
        document.addEventListener("touchend", this.clickOutside, true);
        document.addEventListener("mousedown", this.clickOutside, true);
        document.addEventListener("contextmenu", this.clickOutside, true);
    }
    componentWillUnmount() {
        document.removeEventListener("touchend", this.clickOutside, true);
        document.removeEventListener("mousedown", this.clickOutside, true);
        document.removeEventListener("contextmenu", this.clickOutside, true);
    }
    clickOutside = (event) => {
        if (this.props.isOutsideClick && !this.props.isOutsideClick(event)) {
            return;
        }
        if (this.wrapperRef.current !== null && !this.wrapperRef.current.contains(event.target)) {
            let node = event.target;
            while (node !== null) {
                if (node.classList.contains("click-outside-ignore")) {
                    return;
                }
                node = node.parentElement;
            }
            this.props.onClickOutside();
        }
    };
    render() {
        const { onClickOutside, isOutsideClick, ...rest } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ...rest, ref: this.wrapperRef }, this.props.children));
    }
}
//# sourceMappingURL=click-outside-container.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-editor-container/data-grid-container.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataEditorContainer: () => (/* binding */ DataEditorContainer)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");


function toCss(x) {
  if (typeof x === "string") return x;
  return `${x}px`;
}
const _exp = /*#__PURE__*/() => p => p.innerWidth;
const _exp2 = /*#__PURE__*/() => p => p.innerHeight;
const Wrapper = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "Wrapper",
  class: "gdg-wmyidgi",
  propsAsIs: false,
  vars: {
    "wmyidgi-0": [_exp()],
    "wmyidgi-1": [_exp2()]
  }
});
const DataEditorContainer = p => {
  const {
    inWidth,
    inHeight,
    children,
    ...rest
  } = p;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Wrapper, {
    innerHeight: toCss(inHeight),
    innerWidth: toCss(inWidth),
    ...rest
  }, children);
};



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-dnd/data-grid-dnd.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_clamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/clamp.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid.js");
/* eslint-disable unicorn/consistent-destructuring */



// Dear Past Jason,
// Wtf does this function do? If you remember in the future come back and add a comment
// -- Future-Past Jason
function offsetColumnSize(column, width, min, max) {
    return lodash_clamp_js__WEBPACK_IMPORTED_MODULE_0__(Math.round(width - (column.growOffset ?? 0)), Math.ceil(min), Math.floor(max));
}
const DataGridDnd = p => {
    const [resizeColStartX, setResizeColStartX] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    const [resizeCol, setResizeCol] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    const [dragCol, setDragCol] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    const [dropCol, setDropCol] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    const [dragColActive, setDragColActive] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [dragStartX, setDragStartX] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    const [dragRow, setDragRow] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    const [dropRow, setDropRow] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    const [dragRowActive, setDragRowActive] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [dragStartY, setDragStartY] = react__WEBPACK_IMPORTED_MODULE_1__.useState();
    const { onHeaderMenuClick, getCellContent, onColumnMoved, onColumnResize, onColumnResizeStart, onColumnResizeEnd, gridRef, maxColumnWidth, minColumnWidth, onRowMoved, lockColumns, onColumnProposeMove, onMouseDown, onMouseUp, onItemHovered, onDragStart, canvasRef, } = p;
    const canResize = (onColumnResize ?? onColumnResizeEnd ?? onColumnResizeStart) !== undefined;
    const { columns, selection } = p;
    const selectedColumns = selection.columns;
    const onItemHoveredImpl = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((args) => {
        const [col, row] = args.location;
        if (dragCol !== undefined && dropCol !== col && col >= lockColumns) {
            setDragColActive(true);
            setDropCol(col);
        }
        else if (dragRow !== undefined && row !== undefined) {
            setDragRowActive(true);
            setDropRow(Math.max(0, row));
            // Don't emit onItemHovered if resizing or reordering a column or row.
        }
        else if (resizeCol === undefined && !dragColActive && !dragRowActive) {
            onItemHovered?.(args);
        }
    }, [dragCol, dragRow, dropCol, onItemHovered, lockColumns, resizeCol, dragColActive, dragRowActive]);
    const canDragCol = onColumnMoved !== undefined;
    const onMouseDownImpl = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((args) => {
        if (args.button === 0) {
            const [col, row] = args.location;
            if (args.kind === "out-of-bounds" && args.isEdge && canResize) {
                const bounds = gridRef?.current?.getBounds(columns.length - 1, -1);
                if (bounds !== undefined) {
                    setResizeColStartX(bounds.x);
                    setResizeCol(columns.length - 1);
                }
            }
            else if (args.kind === "header" && col >= lockColumns) {
                const canvas = canvasRef?.current;
                if (args.isEdge && canResize && canvas) {
                    setResizeColStartX(args.bounds.x);
                    setResizeCol(col);
                    const rect = canvas.getBoundingClientRect();
                    const scale = rect.width / canvas.offsetWidth;
                    const width = args.bounds.width / scale;
                    onColumnResizeStart?.(columns[col], width, col, width + (columns[col].growOffset ?? 0));
                }
                else if (args.kind === "header" && canDragCol) {
                    setDragStartX(args.bounds.x);
                    setDragCol(col);
                }
            }
            else if (args.kind === "cell" &&
                lockColumns > 0 &&
                col === 0 &&
                row !== undefined &&
                onRowMoved !== undefined) {
                setDragStartY(args.bounds.y);
                setDragRow(row);
            }
        }
        onMouseDown?.(args);
    }, [onMouseDown, canResize, lockColumns, onRowMoved, gridRef, columns, canDragCol, onColumnResizeStart, canvasRef]);
    const onHeaderMenuClickMangled = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((col, screenPosition) => {
        if (dragColActive || dragRowActive)
            return;
        onHeaderMenuClick?.(col, screenPosition);
    }, [dragColActive, dragRowActive, onHeaderMenuClick]);
    const lastResizeWidthRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(-1);
    const clearAll = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
        lastResizeWidthRef.current = -1;
        setDragRow(undefined);
        setDropRow(undefined);
        setDragStartY(undefined);
        setDragRowActive(false);
        setDragCol(undefined);
        setDropCol(undefined);
        setDragStartX(undefined);
        setDragColActive(false);
        setResizeCol(undefined);
        setResizeColStartX(undefined);
    }, []);
    const onMouseUpImpl = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((args, isOutside) => {
        if (args.button === 0) {
            if (resizeCol !== undefined) {
                // if the column is in selection, the selection may contain extra cols, so lets just re-send the last
                // resize event to all those columns.
                if (selectedColumns?.hasIndex(resizeCol) === true) {
                    for (const c of selectedColumns) {
                        if (c === resizeCol)
                            continue;
                        const col = columns[c];
                        const newSize = offsetColumnSize(col, lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
                        onColumnResize?.(col, newSize, c, newSize + (col.growOffset ?? 0));
                    }
                }
                const ns = offsetColumnSize(columns[resizeCol], lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
                onColumnResizeEnd?.(columns[resizeCol], ns, resizeCol, ns + (columns[resizeCol].growOffset ?? 0));
                if (selectedColumns.hasIndex(resizeCol)) {
                    for (const c of selectedColumns) {
                        if (c === resizeCol)
                            continue;
                        const col = columns[c];
                        const s = offsetColumnSize(col, lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
                        onColumnResizeEnd?.(col, s, c, s + (col.growOffset ?? 0));
                    }
                }
            }
            clearAll();
            if (dragCol !== undefined && dropCol !== undefined) {
                onColumnMoved?.(dragCol, dropCol);
            }
            if (dragRow !== undefined && dropRow !== undefined) {
                onRowMoved?.(dragRow, dropRow);
            }
        }
        onMouseUp?.(args, isOutside);
    }, [
        onMouseUp,
        resizeCol,
        dragCol,
        dropCol,
        dragRow,
        dropRow,
        selectedColumns,
        onColumnResizeEnd,
        columns,
        minColumnWidth,
        maxColumnWidth,
        onColumnResize,
        onColumnMoved,
        onRowMoved,
        clearAll,
    ]);
    const dragOffset = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
        if (dragCol === undefined || dropCol === undefined)
            return undefined;
        if (dragCol === dropCol)
            return undefined;
        if (onColumnProposeMove?.(dragCol, dropCol) === false)
            return undefined;
        return {
            src: dragCol,
            dest: dropCol,
        };
    }, [dragCol, dropCol, onColumnProposeMove]);
    const onMouseMove = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((event) => {
        const canvas = canvasRef?.current;
        if (dragCol !== undefined && dragStartX !== undefined) {
            const diff = Math.abs(event.clientX - dragStartX);
            if (diff > 20) {
                setDragColActive(true);
            }
        }
        else if (dragRow !== undefined && dragStartY !== undefined) {
            const diff = Math.abs(event.clientY - dragStartY);
            if (diff > 20) {
                setDragRowActive(true);
            }
        }
        else if (resizeCol !== undefined && resizeColStartX !== undefined && canvas) {
            const rect = canvas.getBoundingClientRect();
            const scale = rect.width / canvas.offsetWidth;
            const newWidth = (event.clientX - resizeColStartX) / scale;
            const column = columns[resizeCol];
            const ns = offsetColumnSize(column, newWidth, minColumnWidth, maxColumnWidth);
            onColumnResize?.(column, ns, resizeCol, ns + (column.growOffset ?? 0));
            lastResizeWidthRef.current = newWidth;
            if (selectedColumns?.first() === resizeCol) {
                for (const c of selectedColumns) {
                    if (c === resizeCol)
                        continue;
                    const col = columns[c];
                    const s = offsetColumnSize(col, lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
                    onColumnResize?.(col, s, c, s + (col.growOffset ?? 0));
                }
            }
        }
    }, [
        dragCol,
        dragStartX,
        dragRow,
        dragStartY,
        resizeCol,
        resizeColStartX,
        columns,
        minColumnWidth,
        maxColumnWidth,
        onColumnResize,
        selectedColumns,
        canvasRef,
    ]);
    const getMangledCellContent = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((cell, forceStrict) => {
        if (dragRow === undefined || dropRow === undefined)
            return getCellContent(cell, forceStrict);
        // eslint-disable-next-line prefer-const
        let [col, row] = cell;
        if (row === dropRow) {
            row = dragRow;
        }
        else {
            if (row > dropRow)
                row -= 1;
            if (row >= dragRow)
                row += 1;
        }
        return getCellContent([col, row], forceStrict);
    }, [dragRow, dropRow, getCellContent]);
    const onDragStartImpl = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(args => {
        onDragStart?.(args);
        if (!args.defaultPrevented()) {
            clearAll();
        }
    }, [clearAll, onDragStart]);
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__["default"], { accessibilityHeight: p.accessibilityHeight, canvasRef: p.canvasRef, cellXOffset: p.cellXOffset, cellYOffset: p.cellYOffset, columns: p.columns, disabledRows: p.disabledRows, drawFocusRing: p.drawFocusRing, drawHeader: p.drawHeader, drawCell: p.drawCell, enableGroups: p.enableGroups, eventTargetRef: p.eventTargetRef, experimental: p.experimental, fillHandle: p.fillHandle, firstColAccessible: p.firstColAccessible, fixedShadowX: p.fixedShadowX, fixedShadowY: p.fixedShadowY, freezeColumns: p.freezeColumns, getCellRenderer: p.getCellRenderer, getGroupDetails: p.getGroupDetails, getRowThemeOverride: p.getRowThemeOverride, groupHeaderHeight: p.groupHeaderHeight, headerHeight: p.headerHeight, headerIcons: p.headerIcons, height: p.height, highlightRegions: p.highlightRegions, imageWindowLoader: p.imageWindowLoader, resizeColumn: resizeCol, isDraggable: p.isDraggable, isFilling: p.isFilling, isFocused: p.isFocused, onCanvasBlur: p.onCanvasBlur, onCanvasFocused: p.onCanvasFocused, onCellFocused: p.onCellFocused, onContextMenu: p.onContextMenu, onDragEnd: p.onDragEnd, onDragLeave: p.onDragLeave, onDragOverCell: p.onDragOverCell, onDrop: p.onDrop, onKeyDown: p.onKeyDown, onKeyUp: p.onKeyUp, onMouseMove: p.onMouseMove, prelightCells: p.prelightCells, rowHeight: p.rowHeight, rows: p.rows, selection: p.selection, smoothScrollX: p.smoothScrollX, smoothScrollY: p.smoothScrollY, theme: p.theme, freezeTrailingRows: p.freezeTrailingRows, hasAppendRow: p.hasAppendRow, translateX: p.translateX, translateY: p.translateY, verticalBorder: p.verticalBorder, width: p.width, getCellContent: getMangledCellContent, isResizing: resizeCol !== undefined, onHeaderMenuClick: onHeaderMenuClickMangled, isDragging: dragColActive, onItemHovered: onItemHoveredImpl, onDragStart: onDragStartImpl, onMouseDown: onMouseDownImpl, allowResize: canResize, onMouseUp: onMouseUpImpl, dragAndDropState: dragOffset, onMouseMoveRaw: onMouseMove, ref: gridRef }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataGridDnd);
//# sourceMappingURL=data-grid-dnd.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/bubbles-overlay-editor-style.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BubblesOverlayEditorStyle: () => (/* binding */ BubblesOverlayEditorStyle)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");

const BubblesOverlayEditorStyle = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "BubblesOverlayEditorStyle",
  class: "gdg-b1ygi5by",
  propsAsIs: false
});



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/bubbles-overlay-editor.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _bubbles_overlay_editor_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/bubbles-overlay-editor-style.js");


const BubblesOverlayEditor = p => {
    const { bubbles } = p;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_bubbles_overlay_editor_style_js__WEBPACK_IMPORTED_MODULE_1__.BubblesOverlayEditorStyle, null,
        bubbles.map((b, i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: i, className: "boe-bubble" }, b))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { className: "gdg-input", autoFocus: true })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BubblesOverlayEditor);
//# sourceMappingURL=bubbles-overlay-editor.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/drilldown-overlay-editor.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");


const DrilldownOverlayEditorStyle = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_1__.styled)('div')({
  name: "DrilldownOverlayEditorStyle",
  class: "gdg-d4zsq0x",
  propsAsIs: false
});
const DrilldownOverlayEditor = p => {
  const {
    drilldowns
  } = p;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrilldownOverlayEditorStyle, null, drilldowns.map((d, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: i,
    className: "doe-bubble"
  }, d.img !== undefined && react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: d.img
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, d.text))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrilldownOverlayEditor);



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/image-overlay-editor-style.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageOverlayEditorStyle: () => (/* binding */ ImageOverlayEditorStyle)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");

const ImageOverlayEditorStyle = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "ImageOverlayEditorStyle",
  class: "gdg-i2iowwq",
  propsAsIs: false
});



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/image-overlay-editor.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageOverlayEditor: () => (/* binding */ ImageOverlayEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _image_overlay_editor_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/image-overlay-editor-style.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");




/** @category Renderers */
const ImageOverlayEditor = p => {
    const { urls, canWrite, onEditClick, renderImage } = p;
    const filtered = urls.filter(u => u !== "");
    if (filtered.length === 0) {
        return null;
    }
    const allowMove = filtered.length > 1;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_image_overlay_editor_style_js__WEBPACK_IMPORTED_MODULE_1__.ImageOverlayEditorStyle, { "data-testid": "GDG-default-image-overlay-editor" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, { showArrows: allowMove, showThumbs: false, swipeable: allowMove, emulateTouch: allowMove, infiniteLoop: allowMove }, filtered.map(url => {
            const innerContent = renderImage?.(url) ?? react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { draggable: false, src: url });
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "gdg-centering-container", key: url }, innerContent));
        })),
        canWrite && onEditClick && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "gdg-edit-icon", onClick: onEditClick },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_utils_js__WEBPACK_IMPORTED_MODULE_3__.EditPencil, null)))));
};
//# sourceMappingURL=image-overlay-editor.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/markdown-overlay-editor-style.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownOverlayEditorStyle: () => (/* binding */ MarkdownOverlayEditorStyle)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");

const _exp = /*#__PURE__*/() => p => p.targetWidth;
const MarkdownOverlayEditorStyle = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "MarkdownOverlayEditorStyle",
  class: "gdg-m1pnx84e",
  propsAsIs: false,
  vars: {
    "m1pnx84e-0": [_exp(), "px"]
  }
});



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/markdown-overlay-editor.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownOverlayEditor: () => (/* binding */ MarkdownOverlayEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _markdown_div_markdown_div_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/markdown-div/markdown-div.js");
/* harmony import */ var _growing_entry_growing_entry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/growing-entry/growing-entry.js");
/* harmony import */ var _markdown_overlay_editor_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/markdown-overlay-editor-style.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");





const MarkdownOverlayEditor = p => {
    const { value, onChange, forceEditMode, createNode, targetRect, onFinish, validatedSelection } = p;
    const markdown = value.data;
    const readonly = value.readonly === true;
    const [editMode, setEditMode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(markdown === "" || forceEditMode);
    const onEditClick = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        setEditMode(e => !e);
    }, []);
    const addLeftPad = markdown ? "gdg-ml-6" : "";
    if (editMode) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_markdown_overlay_editor_style_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownOverlayEditorStyle, { targetWidth: targetRect.width - 20 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_growing_entry_growing_entry_js__WEBPACK_IMPORTED_MODULE_2__.GrowingEntry, { autoFocus: true, highlight: false, validatedSelection: validatedSelection, value: markdown, onKeyDown: e => {
                    if (e.key === "Enter")
                        e.stopPropagation();
                }, onChange: onChange }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `gdg-edit-icon gdg-checkmark-hover ${addLeftPad}`, onClick: () => onFinish(value) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_utils_js__WEBPACK_IMPORTED_MODULE_4__.Checkmark, null))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_markdown_overlay_editor_style_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownOverlayEditorStyle, { targetWidth: targetRect.width },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_markdown_div_markdown_div_js__WEBPACK_IMPORTED_MODULE_1__["default"], { contents: markdown, createNode: createNode }),
        !readonly && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spacer" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `gdg-edit-icon gdg-edit-hover ${addLeftPad}`, onClick: onEditClick },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_utils_js__WEBPACK_IMPORTED_MODULE_4__.EditPencil, null)))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { className: "gdg-md-edit-textarea gdg-input", autoFocus: true })));
};
//# sourceMappingURL=markdown-overlay-editor.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/uri-overlay-editor-style.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UriOverlayEditorStyle: () => (/* binding */ UriOverlayEditorStyle)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");

const UriOverlayEditorStyle = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "UriOverlayEditorStyle",
  class: "gdg-u1rrojo",
  propsAsIs: false
});



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/uri-overlay-editor.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _growing_entry_growing_entry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/growing-entry/growing-entry.js");
/* harmony import */ var _uri_overlay_editor_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/uri-overlay-editor-style.js");




const UriOverlayEditor = p => {
    const { uri, onChange, forceEditMode, readonly, validatedSelection, preview } = p;
    const [editMode, setEditMode] = react__WEBPACK_IMPORTED_MODULE_1__.useState(!readonly && (uri === "" || forceEditMode));
    const onEditClick = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
        setEditMode(true);
    }, []);
    if (editMode) {
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_growing_entry_growing_entry_js__WEBPACK_IMPORTED_MODULE_2__.GrowingEntry, { validatedSelection: validatedSelection, highlight: true, autoFocus: true, value: uri, onChange: onChange }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_uri_overlay_editor_style_js__WEBPACK_IMPORTED_MODULE_3__.UriOverlayEditorStyle, null,
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { className: "gdg-link-area", href: uri, target: "_blank", rel: "noopener noreferrer" }, preview),
        !readonly && (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "gdg-edit-icon", onClick: onEditClick },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.EditPencil, null))),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea", { className: "gdg-input", autoFocus: true })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UriOverlayEditor);
//# sourceMappingURL=uri-overlay-editor.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-search/data-grid-search-style.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchWrapper: () => (/* binding */ SearchWrapper)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");

const SearchWrapper = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "SearchWrapper",
  class: "gdg-seveqep",
  propsAsIs: false
});



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-search/data-grid-search.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _scrolling_data_grid_scrolling_data_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/scrolling-data-grid.js");
/* harmony import */ var _data_grid_search_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-search/data-grid-search-style.js");
/* harmony import */ var _common_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");
/* eslint-disable unicorn/consistent-destructuring */





// icons
const upArrow = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: "button-icon", viewBox: "0 0 512 512" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 244l144-144 144 144M256 120v292" })));
const downArrow = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: "button-icon", viewBox: "0 0 512 512" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 268l144 144 144-144M256 392V100" })));
const closeX = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: "button-icon", viewBox: "0 0 512 512" },
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M368 368L144 144M368 144L144 368" })));
const targetSearchTimeMS = 10;
const DataGridSearch = p => {
    const { canvasRef, cellYOffset, rows, columns, searchInputRef, searchValue, searchResults: searchResultsIn, onSearchValueChange, getCellsForSelection, onSearchResultsChanged, showSearch = false, onSearchClose, } = p;
    const [searchID] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => "search-box-" + Math.round(Math.random() * 1000));
    const [searchStringInner, setSearchStringInner] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
    const searchString = searchValue ?? searchStringInner;
    // always emit both, this allows the user to spy on the search value without controlling it.
    const setSearchString = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newVal) => {
        setSearchStringInner(newVal);
        onSearchValueChange?.(newVal);
    }, [onSearchValueChange]);
    const [searchStatus, setSearchStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const searchStatusRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(searchStatus);
    searchStatusRef.current = searchStatus;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (searchResultsIn === undefined)
            return;
        if (searchResultsIn.length > 0) {
            setSearchStatus(cv => ({
                rowsSearched: rows,
                results: searchResultsIn.length,
                selectedIndex: cv?.selectedIndex ?? -1,
            }));
        }
        else {
            setSearchStatus(undefined);
        }
    }, [rows, searchResultsIn]);
    const abortControllerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    if (abortControllerRef.current === undefined)
        abortControllerRef.current = new AbortController();
    const searchHandle = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const [searchResultsInner, setSearchResultsInner] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
    const searchResults = searchResultsIn ?? searchResultsInner;
    const cancelSearch = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (searchHandle.current !== undefined) {
            window.cancelAnimationFrame(searchHandle.current);
            searchHandle.current = undefined;
            abortControllerRef.current.abort();
        }
    }, []);
    const cellYOffsetRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(cellYOffset);
    cellYOffsetRef.current = cellYOffset;
    const beginSearch = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((str) => {
        const regex = new RegExp(str.replace(/([$()*+.?[\\\]^{|}-])/g, "\\$1"), "i");
        let startY = cellYOffsetRef.current;
        // Lets assume we can do 10 rows at a time
        // This is usually very safe and limits the damage for bad
        // performing sheets.
        let searchStride = Math.min(10, rows);
        let rowsSearched = 0;
        setSearchStatus(undefined);
        setSearchResultsInner([]);
        const runningResult = [];
        const tick = async () => {
            if (getCellsForSelection === undefined)
                return;
            const tStart = performance.now();
            const rowsLeft = rows - rowsSearched;
            let data = getCellsForSelection({
                x: 0,
                y: startY,
                width: columns.length,
                height: Math.min(searchStride, rowsLeft, rows - startY),
            }, abortControllerRef.current.signal);
            if (typeof data === "function") {
                data = await data();
            }
            let added = false;
            for (const [row, d] of data.entries()) {
                for (const [col, cell] of d.entries()) {
                    let testString;
                    switch (cell.kind) {
                        case _data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Text:
                        case _data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Number:
                            testString = cell.displayData;
                            break;
                        case _data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Uri:
                        case _data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Markdown:
                            testString = cell.data;
                            break;
                        case _data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Boolean:
                            testString = typeof cell.data === "boolean" ? cell.data.toString() : undefined;
                            break;
                        case _data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Image:
                        case _data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Bubble:
                            // I know its lazy, but unless someone is actually
                            // searching for the whale emoji, this is pretty side effect
                            // free. And ya know... it's nice and easy to do...
                            testString = cell.data.join("🐳");
                            break;
                        case _data_grid_data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Custom:
                            testString = cell.copyData;
                            break;
                    }
                    if (testString !== undefined && regex.test(testString)) {
                        runningResult.push([col, row + startY]);
                        added = true;
                    }
                }
            }
            const tEnd = performance.now();
            if (added) {
                setSearchResultsInner([...runningResult]);
            }
            rowsSearched += data.length;
            (0,_common_support_js__WEBPACK_IMPORTED_MODULE_4__.assert)(rowsSearched <= rows);
            const selectedIndex = searchStatusRef.current?.selectedIndex ?? -1;
            setSearchStatus({
                results: runningResult.length,
                rowsSearched,
                selectedIndex,
            });
            onSearchResultsChanged?.(runningResult, selectedIndex);
            if (startY + searchStride >= rows) {
                startY = 0;
            }
            else {
                startY += searchStride;
            }
            const tElapsed = tEnd - tStart;
            const rounded = Math.max(tElapsed, 1);
            const scalar = targetSearchTimeMS / rounded;
            searchStride = Math.ceil(searchStride * scalar);
            if (rowsSearched < rows && runningResult.length < 1000) {
                searchHandle.current = window.requestAnimationFrame(tick);
            }
        };
        cancelSearch();
        searchHandle.current = window.requestAnimationFrame(tick);
    }, [cancelSearch, columns.length, getCellsForSelection, onSearchResultsChanged, rows]);
    const onClose = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        onSearchClose?.();
        setSearchStatus(undefined);
        setSearchResultsInner([]);
        onSearchResultsChanged?.([], -1);
        cancelSearch();
        canvasRef?.current?.focus();
    }, [cancelSearch, canvasRef, onSearchClose, onSearchResultsChanged]);
    const onSearchChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        setSearchString(event.target.value);
        if (searchResultsIn !== undefined)
            return;
        if (event.target.value === "") {
            setSearchStatus(undefined);
            setSearchResultsInner([]);
            cancelSearch();
        }
        else {
            beginSearch(event.target.value);
        }
    }, [beginSearch, cancelSearch, setSearchString, searchResultsIn]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (showSearch && searchInputRef.current !== null) {
            setSearchString("");
            searchInputRef.current.focus({ preventScroll: true });
        }
    }, [showSearch, searchInputRef, setSearchString]);
    const onNext = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((ev) => {
        ev?.stopPropagation?.();
        if (searchStatus === undefined)
            return;
        const newIndex = (searchStatus.selectedIndex + 1) % searchStatus.results;
        setSearchStatus({
            ...searchStatus,
            selectedIndex: newIndex,
        });
        onSearchResultsChanged?.(searchResults, newIndex);
    }, [searchStatus, onSearchResultsChanged, searchResults]);
    const onPrev = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((ev) => {
        ev?.stopPropagation?.();
        if (searchStatus === undefined)
            return;
        let newIndex = (searchStatus.selectedIndex - 1) % searchStatus.results;
        if (newIndex < 0)
            newIndex += searchStatus.results;
        setSearchStatus({
            ...searchStatus,
            selectedIndex: newIndex,
        });
        onSearchResultsChanged?.(searchResults, newIndex);
    }, [onSearchResultsChanged, searchResults, searchStatus]);
    const onSearchKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        if (((event.ctrlKey || event.metaKey) && event.nativeEvent.code === "KeyF") || event.key === "Escape") {
            onClose();
            event.stopPropagation();
            event.preventDefault();
        }
        else if (event.key === "Enter") {
            if (event.shiftKey) {
                onPrev();
            }
            else {
                onNext();
            }
        }
    }, [onClose, onNext, onPrev]);
    // cancel search if the component is unmounted
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        return () => {
            cancelSearch();
        };
    }, [cancelSearch]);
    const [isAnimatingOut, setIsAnimatingOut] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (showSearch) {
            setIsAnimatingOut(true);
        }
        else {
            const timeoutId = setTimeout(() => setIsAnimatingOut(false), 150);
            return () => clearTimeout(timeoutId);
        }
    }, [showSearch]);
    const searchbox = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (!showSearch && !isAnimatingOut) {
            return null;
        }
        let resultString;
        if (searchStatus !== undefined) {
            resultString =
                searchStatus.results >= 1000
                    ? `over 1000`
                    : `${searchStatus.results} result${searchStatus.results !== 1 ? "s" : ""}`;
            if (searchStatus.selectedIndex >= 0) {
                resultString = `${searchStatus.selectedIndex + 1} of ${resultString}`;
            }
        }
        const cancelEvent = (ev) => {
            ev.stopPropagation();
        };
        const rowsSearchedProgress = Math.floor(((searchStatus?.rowsSearched ?? 0) / rows) * 100);
        const progressStyle = {
            width: `${rowsSearchedProgress}%`,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_data_grid_search_style_js__WEBPACK_IMPORTED_MODULE_3__.SearchWrapper, { className: showSearch ? "" : "out", onMouseDown: cancelEvent, onMouseMove: cancelEvent, onMouseUp: cancelEvent, onClick: cancelEvent },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "gdg-search-bar-inner" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: searchID, "aria-hidden": !showSearch, "data-testid": "search-input", ref: searchInputRef, onChange: onSearchChange, value: searchString, tabIndex: showSearch ? undefined : -1, onKeyDownCapture: onSearchKeyDown }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { "aria-label": "Previous Result", "aria-hidden": !showSearch, tabIndex: showSearch ? undefined : -1, onClick: onPrev, disabled: (searchStatus?.results ?? 0) === 0 }, upArrow),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { "aria-label": "Next Result", "aria-hidden": !showSearch, tabIndex: showSearch ? undefined : -1, onClick: onNext, disabled: (searchStatus?.results ?? 0) === 0 }, downArrow),
                onSearchClose !== undefined && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { "aria-label": "Close Search", "aria-hidden": !showSearch, "data-testid": "search-close-button", tabIndex: showSearch ? undefined : -1, onClick: onClose }, closeX))),
            searchStatus !== undefined ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "gdg-search-status" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-testid": "search-result-area" }, resultString)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "gdg-search-progress", style: progressStyle }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "gdg-search-status" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { htmlFor: searchID }, "Type to search")))));
    }, [
        showSearch,
        isAnimatingOut,
        searchStatus,
        rows,
        searchID,
        searchInputRef,
        onSearchChange,
        searchString,
        onSearchKeyDown,
        onPrev,
        onNext,
        onSearchClose,
        onClose,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_scrolling_data_grid_scrolling_data_grid_js__WEBPACK_IMPORTED_MODULE_2__["default"], { prelightCells: searchResults, accessibilityHeight: p.accessibilityHeight, canvasRef: p.canvasRef, cellXOffset: p.cellXOffset, cellYOffset: p.cellYOffset, className: p.className, clientSize: p.clientSize, columns: p.columns, disabledRows: p.disabledRows, enableGroups: p.enableGroups, fillHandle: p.fillHandle, firstColAccessible: p.firstColAccessible, nonGrowWidth: p.nonGrowWidth, fixedShadowX: p.fixedShadowX, fixedShadowY: p.fixedShadowY, freezeColumns: p.freezeColumns, getCellContent: p.getCellContent, getCellRenderer: p.getCellRenderer, getGroupDetails: p.getGroupDetails, getRowThemeOverride: p.getRowThemeOverride, groupHeaderHeight: p.groupHeaderHeight, headerHeight: p.headerHeight, highlightRegions: p.highlightRegions, imageWindowLoader: p.imageWindowLoader, initialSize: p.initialSize, isFilling: p.isFilling, isFocused: p.isFocused, lockColumns: p.lockColumns, maxColumnWidth: p.maxColumnWidth, minColumnWidth: p.minColumnWidth, onHeaderMenuClick: p.onHeaderMenuClick, onMouseMove: p.onMouseMove, onVisibleRegionChanged: p.onVisibleRegionChanged, overscrollX: p.overscrollX, overscrollY: p.overscrollY, preventDiagonalScrolling: p.preventDiagonalScrolling, rightElement: p.rightElement, rightElementProps: p.rightElementProps, rowHeight: p.rowHeight, rows: p.rows, scrollRef: p.scrollRef, selection: p.selection, theme: p.theme, freezeTrailingRows: p.freezeTrailingRows, hasAppendRow: p.hasAppendRow, translateX: p.translateX, translateY: p.translateY, verticalBorder: p.verticalBorder, onColumnProposeMove: p.onColumnProposeMove, drawFocusRing: p.drawFocusRing, drawCell: p.drawCell, drawHeader: p.drawHeader, experimental: p.experimental, gridRef: p.gridRef, headerIcons: p.headerIcons, isDraggable: p.isDraggable, onCanvasBlur: p.onCanvasBlur, onCanvasFocused: p.onCanvasFocused, onCellFocused: p.onCellFocused, onColumnMoved: p.onColumnMoved, onColumnResize: p.onColumnResize, onColumnResizeEnd: p.onColumnResizeEnd, onColumnResizeStart: p.onColumnResizeStart, onContextMenu: p.onContextMenu, onDragEnd: p.onDragEnd, onDragLeave: p.onDragLeave, onDragOverCell: p.onDragOverCell, onDragStart: p.onDragStart, onDrop: p.onDrop, onItemHovered: p.onItemHovered, onKeyDown: p.onKeyDown, onKeyUp: p.onKeyUp, onMouseDown: p.onMouseDown, onMouseUp: p.onMouseUp, onRowMoved: p.onRowMoved, smoothScrollX: p.smoothScrollX, smoothScrollY: p.smoothScrollY }),
        searchbox));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataGridSearch);
//# sourceMappingURL=data-grid-search.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/animation-manager.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationManager: () => (/* binding */ AnimationManager)
/* harmony export */ });
/* harmony import */ var lodash_clamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/clamp.js");
/* harmony import */ var _render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");


const hoverTime = 80;
function easeOutCubic(x) {
    const x1 = x - 1;
    return x1 * x1 * x1 + 1;
}
class AnimationManager {
    callback;
    constructor(callback) {
        this.callback = callback;
    }
    currentHoveredItem = undefined;
    leavingItems = [];
    lastAnimationTime;
    addToLeavingItems = (item) => {
        const isAlreadyLeaving = this.leavingItems.some(i => (0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.itemsAreEqual)(i.item, item.item));
        if (isAlreadyLeaving) {
            return;
        }
        this.leavingItems.push(item);
    };
    /**
     * @returns the hover amount of the item, if it was leaving (0 if not).
     */
    removeFromLeavingItems = (item) => {
        const leavingItem = this.leavingItems.find(e => (0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.itemsAreEqual)(e.item, item));
        this.leavingItems = this.leavingItems.filter(i => i !== leavingItem);
        return leavingItem?.hoverAmount ?? 0;
    };
    cleanUpLeavingElements = () => {
        this.leavingItems = this.leavingItems.filter(i => i.hoverAmount > 0);
    };
    shouldStep = () => {
        const hasLeavingItems = this.leavingItems.length > 0;
        const currentHoveredIsAnimating = this.currentHoveredItem !== undefined && this.currentHoveredItem.hoverAmount < 1;
        return hasLeavingItems || currentHoveredIsAnimating;
    };
    getAnimatingItems = () => {
        // this is horrible. We shoudl be mutating the array in place. The reason we don't right now is because the
        // hoveramount is used as both the tweened value and the raw value. We should separate these two things.
        // Then we can stop doing the allocation insanity dance.
        if (this.currentHoveredItem !== undefined) {
            return [...this.leavingItems, this.currentHoveredItem];
        }
        return this.leavingItems.map(x => ({ ...x, hoverAmount: easeOutCubic(x.hoverAmount) }));
    };
    step = (timestamp) => {
        if (this.lastAnimationTime === undefined) {
            this.lastAnimationTime = timestamp;
        }
        else {
            const step = timestamp - this.lastAnimationTime;
            const delta = step / hoverTime;
            for (const item of this.leavingItems) {
                item.hoverAmount = lodash_clamp_js__WEBPACK_IMPORTED_MODULE_0__(item.hoverAmount - delta, 0, 1);
            }
            if (this.currentHoveredItem !== undefined) {
                this.currentHoveredItem.hoverAmount = lodash_clamp_js__WEBPACK_IMPORTED_MODULE_0__(this.currentHoveredItem.hoverAmount + delta, 0, 1);
            }
            const animating = this.getAnimatingItems();
            this.callback(animating);
            this.cleanUpLeavingElements();
        }
        if (this.shouldStep()) {
            this.lastAnimationTime = timestamp;
            window.requestAnimationFrame(this.step);
        }
        else {
            this.lastAnimationTime = undefined;
        }
    };
    setHovered = (item) => {
        if ((0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.itemsAreEqual)(this.currentHoveredItem?.item, item)) {
            return;
        }
        if (this.currentHoveredItem !== undefined) {
            this.addToLeavingItems(this.currentHoveredItem);
        }
        if (item !== undefined) {
            const hoverAmount = this.removeFromLeavingItems(item);
            this.currentHoveredItem = {
                item,
                hoverAmount,
            };
        }
        else {
            this.currentHoveredItem = undefined;
        }
        if (this.lastAnimationTime === undefined) {
            window.requestAnimationFrame(this.step);
        }
    };
}
//# sourceMappingURL=animation-manager.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/cell-set.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellSet: () => (/* binding */ CellSet)
/* harmony export */ });
/* harmony import */ var _common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/render-state-provider.js");

class CellSet {
    cells;
    constructor(items = []) {
        this.cells = new Set(items.map(x => (0,_common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_0__.packColRowToNumber)(x[0], x[1])));
    }
    add(cell) {
        this.cells.add((0,_common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_0__.packColRowToNumber)(cell[0], cell[1]));
    }
    has(cell) {
        if (cell === undefined)
            return false;
        return this.cells.has((0,_common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_0__.packColRowToNumber)(cell[0], cell[1]));
    }
    remove(cell) {
        this.cells.delete((0,_common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_0__.packColRowToNumber)(cell[0], cell[1]));
    }
    clear() {
        this.cells.clear();
    }
    get size() {
        return this.cells.size;
    }
    hasHeader() {
        for (const cellNumber of this.cells) {
            const row = (0,_common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_0__.unpackRow)(cellNumber);
            if (row < 0)
                return true;
        }
        return false;
    }
    hasItemInRectangle(rect) {
        for (let row = rect.y; row < rect.y + rect.height; row++) {
            for (let col = rect.x; col < rect.x + rect.width; col++) {
                if (this.cells.has((0,_common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_0__.packColRowToNumber)(col, row))) {
                    return true;
                }
            }
        }
        return false;
    }
    hasItemInRegion(rect) {
        for (const r of rect) {
            if (this.hasItemInRectangle(r)) {
                return true;
            }
        }
        return false;
    }
    *values() {
        for (const cellNumber of this.cells) {
            yield (0,_common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_0__.unpackNumberToColRow)(cellNumber);
        }
    }
}
//# sourceMappingURL=cell-set.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/color-parser.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blend: () => (/* binding */ blend),
/* harmony export */   blendCache: () => (/* binding */ blendCache),
/* harmony export */   getLuminance: () => (/* binding */ getLuminance),
/* harmony export */   interpolateColors: () => (/* binding */ interpolateColors),
/* harmony export */   parseToRgba: () => (/* binding */ parseToRgba),
/* harmony export */   withAlpha: () => (/* binding */ withAlpha)
/* harmony export */ });
// Shamelessly stolen from https://github.com/ricokahler/color2k
// We don't need all the color functions but we deeply appreciate their work.
const cache = {};
let div = null;
function createDiv() {
    const d = document.createElement("div");
    d.style.opacity = "0";
    d.style.pointerEvents = "none";
    d.style.position = "fixed";
    // div must be mounted for `getComputedStyle` to work
    document.body.append(d);
    return d;
}
/** @category Drawing */
function parseToRgba(color) {
    // normalize the color
    const normalizedColor = color.toLowerCase().trim();
    if (cache[normalizedColor] !== undefined)
        return cache[normalizedColor];
    div = div || createDiv();
    div.style.color = "#000";
    div.style.color = normalizedColor;
    const control = getComputedStyle(div).color;
    div.style.color = "#fff";
    div.style.color = normalizedColor;
    const computedColor = getComputedStyle(div).color;
    if (computedColor !== control)
        return [0, 0, 0, 1];
    let result = computedColor
        // eslint-disable-next-line unicorn/better-regex
        .replace(/[^\d.,]/g, "")
        .split(",")
        .map(Number.parseFloat);
    if (result.length < 4) {
        result.push(1);
    }
    result = result.map(x => {
        const isNaN = Number.isNaN(x);
        if ( true && isNaN) {
            // eslint-disable-next-line no-console
            console.warn("Could not parse color", color);
        }
        return isNaN ? 0 : x;
    });
    cache[normalizedColor] = result;
    return result;
}
/** @category Drawing */
function withAlpha(color, alpha) {
    const [r, g, b] = parseToRgba(color);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
const blendResultCache = new Map();
function blendCache(color, background) {
    const cacheKey = `${color}-${background}`;
    const maybe = blendResultCache.get(cacheKey);
    if (maybe !== undefined)
        return maybe;
    const result = blend(color, background);
    blendResultCache.set(cacheKey, result);
    return result;
}
/** @category Drawing */
function blend(color, background) {
    if (background === undefined)
        return color;
    const [r, g, b, a] = parseToRgba(color);
    if (a === 1)
        return color;
    const [br, bg, bb, ba] = parseToRgba(background);
    const ao = a + ba * (1 - a);
    // (xaA + xaB·(1−aA))/aR
    const ro = (a * r + ba * br * (1 - a)) / ao;
    const go = (a * g + ba * bg * (1 - a)) / ao;
    const bo = (a * b + ba * bb * (1 - a)) / ao;
    return `rgba(${ro}, ${go}, ${bo}, ${ao})`;
}
/** @category Drawing */
function interpolateColors(leftColor, rightColor, val) {
    // toot toot im a GPU
    if (val <= 0)
        return leftColor;
    if (val >= 1)
        return rightColor;
    // Parse to rgba returns straight alpha colors, for interpolation we want pre-multiplied alpha
    // FIXME: This can be faster if instead of makign an array we just use variables. No memory allocation.
    const left = [...parseToRgba(leftColor)];
    left[0] = left[0] * left[3];
    left[1] = left[1] * left[3];
    left[2] = left[2] * left[3];
    const right = [...parseToRgba(rightColor)];
    right[0] = right[0] * right[3];
    right[1] = right[1] * right[3];
    right[2] = right[2] * right[3];
    const hScaler = val;
    const nScaler = 1 - val;
    const a = left[3] * nScaler + right[3] * hScaler;
    // now we need to divide the alpha back out to get linear alpha back for the final result
    const r = Math.floor((left[0] * nScaler + right[0] * hScaler) / a);
    const g = Math.floor((left[1] * nScaler + right[1] * hScaler) / a);
    const b = Math.floor((left[2] * nScaler + right[2] * hScaler) / a);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @category Drawing
 */
function getLuminance(color) {
    if (color === "transparent")
        return 0;
    // eslint-disable-next-line unicorn/consistent-function-scoping
    function f(x) {
        const channel = x / 255;
        return channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
    }
    const [r, g, b] = parseToRgba(color);
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
//# sourceMappingURL=color-parser.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-sprites.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpriteManager: () => (/* binding */ SpriteManager)
/* harmony export */ });

function getColors(variant, theme) {
    if (variant === "normal") {
        return [theme.bgIconHeader, theme.fgIconHeader];
    }
    else if (variant === "selected") {
        return ["white", theme.accentColor];
    }
    else {
        return [theme.accentColor, theme.bgHeader];
    }
}
/** @category Columns */
class SpriteManager {
    onSettled;
    spriteMap = new Map();
    headerIcons;
    inFlight = 0;
    constructor(headerIcons, onSettled) {
        this.onSettled = onSettled;
        this.headerIcons = headerIcons ?? {};
    }
    drawSprite(sprite, variant, ctx, x, y, size, theme, alpha = 1) {
        const [bgColor, fgColor] = getColors(variant, theme);
        const rSize = size * Math.ceil(window.devicePixelRatio);
        const key = `${bgColor}_${fgColor}_${rSize}_${sprite}`;
        let spriteCanvas = this.spriteMap.get(key);
        if (spriteCanvas === undefined) {
            const spriteCb = this.headerIcons[sprite];
            if (spriteCb === undefined)
                return;
            spriteCanvas = document.createElement("canvas");
            const spriteCtx = spriteCanvas.getContext("2d");
            if (spriteCtx === null)
                return;
            const imgSource = new Image();
            imgSource.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(spriteCb({ fgColor, bgColor }))}`;
            this.spriteMap.set(key, spriteCanvas);
            const promise = imgSource.decode();
            if (promise === undefined)
                return;
            this.inFlight++;
            promise
                .then(() => {
                spriteCtx.drawImage(imgSource, 0, 0, rSize, rSize);
            })
                .finally(() => {
                this.inFlight--;
                if (this.inFlight === 0) {
                    this.onSettled();
                }
            });
        }
        else {
            if (alpha < 1) {
                ctx.globalAlpha = alpha;
            }
            ctx.drawImage(spriteCanvas, 0, 0, rSize, rSize, x, y, size, size);
            if (alpha < 1) {
                ctx.globalAlpha = 1;
            }
        }
    }
}
//# sourceMappingURL=data-grid-sprites.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanEmpty: () => (/* binding */ BooleanEmpty),
/* harmony export */   BooleanIndeterminate: () => (/* binding */ BooleanIndeterminate),
/* harmony export */   CompactSelection: () => (/* binding */ CompactSelection),
/* harmony export */   GridCellKind: () => (/* binding */ GridCellKind),
/* harmony export */   GridColumnIcon: () => (/* binding */ GridColumnIcon),
/* harmony export */   GridColumnMenuIcon: () => (/* binding */ GridColumnMenuIcon),
/* harmony export */   InnerGridCellKind: () => (/* binding */ InnerGridCellKind),
/* harmony export */   booleanCellIsEditable: () => (/* binding */ booleanCellIsEditable),
/* harmony export */   isEditableGridCell: () => (/* binding */ isEditableGridCell),
/* harmony export */   isInnerOnlyCell: () => (/* binding */ isInnerOnlyCell),
/* harmony export */   isObjectEditorCallbackResult: () => (/* binding */ isObjectEditorCallbackResult),
/* harmony export */   isReadWriteCell: () => (/* binding */ isReadWriteCell),
/* harmony export */   isRectangleEqual: () => (/* binding */ isRectangleEqual),
/* harmony export */   isSizedGridColumn: () => (/* binding */ isSizedGridColumn),
/* harmony export */   isTextEditableGridCell: () => (/* binding */ isTextEditableGridCell),
/* harmony export */   resolveCellsThunk: () => (/* binding */ resolveCellsThunk)
/* harmony export */ });
/* harmony import */ var _common_support_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");
/* harmony import */ var lodash_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/has.js");


/** @category Types */
const BooleanEmpty = null;
/** @category Types */
const BooleanIndeterminate = undefined;
/** @category Cells */
var GridCellKind;
(function (GridCellKind) {
    GridCellKind["Uri"] = "uri";
    GridCellKind["Text"] = "text";
    GridCellKind["Image"] = "image";
    GridCellKind["RowID"] = "row-id";
    GridCellKind["Number"] = "number";
    GridCellKind["Bubble"] = "bubble";
    GridCellKind["Boolean"] = "boolean";
    GridCellKind["Loading"] = "loading";
    GridCellKind["Markdown"] = "markdown";
    GridCellKind["Drilldown"] = "drilldown";
    GridCellKind["Protected"] = "protected";
    GridCellKind["Custom"] = "custom";
})(GridCellKind || (GridCellKind = {}));
/** @category Columns */
var GridColumnIcon;
(function (GridColumnIcon) {
    GridColumnIcon["HeaderRowID"] = "headerRowID";
    GridColumnIcon["HeaderCode"] = "headerCode";
    GridColumnIcon["HeaderNumber"] = "headerNumber";
    GridColumnIcon["HeaderString"] = "headerString";
    GridColumnIcon["HeaderBoolean"] = "headerBoolean";
    GridColumnIcon["HeaderAudioUri"] = "headerAudioUri";
    GridColumnIcon["HeaderVideoUri"] = "headerVideoUri";
    GridColumnIcon["HeaderEmoji"] = "headerEmoji";
    GridColumnIcon["HeaderImage"] = "headerImage";
    GridColumnIcon["HeaderUri"] = "headerUri";
    GridColumnIcon["HeaderPhone"] = "headerPhone";
    GridColumnIcon["HeaderMarkdown"] = "headerMarkdown";
    GridColumnIcon["HeaderDate"] = "headerDate";
    GridColumnIcon["HeaderTime"] = "headerTime";
    GridColumnIcon["HeaderEmail"] = "headerEmail";
    GridColumnIcon["HeaderReference"] = "headerReference";
    GridColumnIcon["HeaderIfThenElse"] = "headerIfThenElse";
    GridColumnIcon["HeaderSingleValue"] = "headerSingleValue";
    GridColumnIcon["HeaderLookup"] = "headerLookup";
    GridColumnIcon["HeaderTextTemplate"] = "headerTextTemplate";
    GridColumnIcon["HeaderMath"] = "headerMath";
    GridColumnIcon["HeaderRollup"] = "headerRollup";
    GridColumnIcon["HeaderJoinStrings"] = "headerJoinStrings";
    GridColumnIcon["HeaderSplitString"] = "headerSplitString";
    GridColumnIcon["HeaderGeoDistance"] = "headerGeoDistance";
    GridColumnIcon["HeaderArray"] = "headerArray";
    GridColumnIcon["RowOwnerOverlay"] = "rowOwnerOverlay";
    GridColumnIcon["ProtectedColumnOverlay"] = "protectedColumnOverlay";
})(GridColumnIcon || (GridColumnIcon = {}));
/** @category Columns */
var GridColumnMenuIcon;
(function (GridColumnMenuIcon) {
    GridColumnMenuIcon["Triangle"] = "triangle";
    GridColumnMenuIcon["Dots"] = "dots";
})(GridColumnMenuIcon || (GridColumnMenuIcon = {}));
/** @category Columns */
function isSizedGridColumn(c) {
    return "width" in c && typeof c.width === "number";
}
/** @category Types */
async function resolveCellsThunk(thunk) {
    if (typeof thunk === "object")
        return thunk;
    return await thunk();
}
// All EditableGridCells are inherently ValidatedGridCells, and this is more specific and thus more useful.
/** @category Cells */
function isEditableGridCell(cell) {
    if (cell.kind === GridCellKind.Loading ||
        cell.kind === GridCellKind.Bubble ||
        cell.kind === GridCellKind.RowID ||
        cell.kind === GridCellKind.Protected ||
        cell.kind === GridCellKind.Drilldown) {
        return false;
    }
    (0,_common_support_js__WEBPACK_IMPORTED_MODULE_0__.proveType)(cell);
    return true;
}
/** @category Cells */
function isTextEditableGridCell(cell) {
    if (cell.kind === GridCellKind.Loading ||
        cell.kind === GridCellKind.Bubble ||
        cell.kind === GridCellKind.RowID ||
        cell.kind === GridCellKind.Protected ||
        cell.kind === GridCellKind.Drilldown ||
        cell.kind === GridCellKind.Boolean ||
        cell.kind === GridCellKind.Image ||
        cell.kind === GridCellKind.Custom) {
        return false;
    }
    (0,_common_support_js__WEBPACK_IMPORTED_MODULE_0__.proveType)(cell);
    return true;
}
/** @category Cells */
function isInnerOnlyCell(cell) {
    return cell.kind === InnerGridCellKind.Marker || cell.kind === InnerGridCellKind.NewRow;
}
/** @category Cells */
function isReadWriteCell(cell) {
    if (!isEditableGridCell(cell) || cell.kind === GridCellKind.Image)
        return false;
    if (cell.kind === GridCellKind.Text ||
        cell.kind === GridCellKind.Number ||
        cell.kind === GridCellKind.Markdown ||
        cell.kind === GridCellKind.Uri ||
        cell.kind === GridCellKind.Custom ||
        cell.kind === GridCellKind.Boolean) {
        return cell.readonly !== true;
    }
    (0,_common_support_js__WEBPACK_IMPORTED_MODULE_0__.assertNever)(cell, "A cell was passed with an invalid kind");
}
function isRectangleEqual(a, b) {
    if (a === b)
        return true;
    if (a === undefined || b === undefined)
        return false;
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
/** @category Renderers */
function isObjectEditorCallbackResult(obj) {
    return lodash_has_js__WEBPACK_IMPORTED_MODULE_1__(obj, "editor");
}
// Can be written more concisely, not easier to read if more concise.
/** @category Cells */
function booleanCellIsEditable(cell) {
    return !(cell.readonly ?? false);
}
/** @category Cells */
var InnerGridCellKind;
(function (InnerGridCellKind) {
    InnerGridCellKind["NewRow"] = "new-row";
    InnerGridCellKind["Marker"] = "marker";
})(InnerGridCellKind || (InnerGridCellKind = {}));
function mergeRanges(input) {
    if (input.length === 0) {
        return [];
    }
    const ranges = [...input];
    const stack = [];
    ranges.sort(function (a, b) {
        return a[0] - b[0];
    });
    stack.push([...ranges[0]]);
    for (const range of ranges.slice(1)) {
        const top = stack[stack.length - 1];
        if (top[1] < range[0]) {
            stack.push([...range]);
        }
        else if (top[1] < range[1]) {
            top[1] = range[1];
        }
    }
    return stack;
}
let emptyCompactSelection;
/** @category Selection */
class CompactSelection {
    items;
    constructor(items) {
        this.items = items;
    }
    static empty = () => {
        return emptyCompactSelection ?? (emptyCompactSelection = new CompactSelection([]));
    };
    static fromSingleSelection = (selection) => {
        return CompactSelection.empty().add(selection);
    };
    offset(amount) {
        if (amount === 0)
            return this;
        const newItems = this.items.map(x => [x[0] + amount, x[1] + amount]);
        return new CompactSelection(newItems);
    }
    add(selection) {
        const slice = typeof selection === "number" ? [selection, selection + 1] : selection;
        const newItems = mergeRanges([...this.items, slice]);
        return new CompactSelection(newItems);
    }
    remove(selection) {
        const items = [...this.items];
        const selMin = typeof selection === "number" ? selection : selection[0];
        const selMax = typeof selection === "number" ? selection + 1 : selection[1];
        for (const [i, slice] of items.entries()) {
            const [start, end] = slice;
            // Remove part of slice that intersects removed selection.
            if (start <= selMax && selMin <= end) {
                const toAdd = [];
                if (start < selMin) {
                    toAdd.push([start, selMin]);
                }
                if (selMax < end) {
                    toAdd.push([selMax, end]);
                }
                items.splice(i, 1, ...toAdd);
            }
        }
        return new CompactSelection(items);
    }
    first() {
        if (this.items.length === 0)
            return undefined;
        return this.items[0][0];
    }
    last() {
        if (this.items.length === 0)
            return undefined;
        return this.items.slice(-1)[0][1] - 1;
    }
    hasIndex(index) {
        for (let i = 0; i < this.items.length; i++) {
            const [start, end] = this.items[i];
            if (index >= start && index < end)
                return true;
        }
        return false;
    }
    hasAll(index) {
        for (let x = index[0]; x < index[1]; x++) {
            if (!this.hasIndex(x))
                return false;
        }
        return true;
    }
    some(predicate) {
        for (const i of this) {
            if (predicate(i))
                return true;
        }
        return false;
    }
    equals(other) {
        if (other === this)
            return true;
        if (other.items.length !== this.items.length)
            return false;
        for (let i = 0; i < this.items.length; i++) {
            const left = other.items[i];
            const right = this.items[i];
            if (left[0] !== right[0] || left[1] !== right[1])
                return false;
        }
        return true;
    }
    // Really old JS wont have access to the iterator and babel will stop people using it
    // when trying to support browsers so old we don't support them anyway. What goes on
    // between an engineer and their bundler in the privacy of their CI server is none of
    // my business anyway.
    toArray() {
        const result = [];
        for (const [start, end] of this.items) {
            for (let x = start; x < end; x++) {
                result.push(x);
            }
        }
        return result;
    }
    get length() {
        let len = 0;
        for (const [start, end] of this.items) {
            len += end - start;
        }
        return len;
    }
    *[Symbol.iterator]() {
        for (const [start, end] of this.items) {
            for (let x = start; x < end; x++) {
                yield x;
            }
        }
    }
}
//# sourceMappingURL=data-grid-types.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _cell_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/cell-set.js");
/* harmony import */ var _data_grid_sprites_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-sprites.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* harmony import */ var lodash_clamp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/lodash/clamp.js");
/* harmony import */ var lodash_range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/lodash/range.js");
/* harmony import */ var _render_data_grid_render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.js");
/* harmony import */ var _animation_manager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/animation-manager.js");
/* harmony import */ var _common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/render-state-provider.js");
/* harmony import */ var _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/browser-detect.js");
/* harmony import */ var _use_animation_queue_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/use-animation-queue.js");
/* harmony import */ var _common_support_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");
/* harmony import */ var _event_args_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/event-args.js");
/* harmony import */ var _common_math_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/math.js");
/* harmony import */ var _render_data_grid_render_cells_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.cells.js");
/* harmony import */ var _render_data_grid_render_header_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.header.js");



















const fillHandleClickSize = 6;
const getRowData = (cell, getCellRenderer) => {
    if (cell.kind === _data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.GridCellKind.Custom)
        return cell.copyData;
    const r = getCellRenderer?.(cell);
    return r?.getAccessibilityString(cell) ?? "";
};
const DataGrid = (p, forwardedRef) => {
    const { width, height, accessibilityHeight, columns, cellXOffset: cellXOffsetReal, cellYOffset, headerHeight, fillHandle = false, groupHeaderHeight, rowHeight, rows, getCellContent, getRowThemeOverride, onHeaderMenuClick, enableGroups, isFilling, onCanvasFocused, onCanvasBlur, isFocused, selection, freezeColumns, onContextMenu, freezeTrailingRows, fixedShadowX = true, fixedShadowY = true, drawFocusRing, onMouseDown, onMouseUp, onMouseMoveRaw, onMouseMove, onItemHovered, dragAndDropState, firstColAccessible, onKeyDown, onKeyUp, highlightRegions, canvasRef, onDragStart, onDragEnd, eventTargetRef, isResizing, resizeColumn: resizeCol, isDragging, isDraggable = false, allowResize, disabledRows, hasAppendRow, getGroupDetails, theme, prelightCells, headerIcons, verticalBorder, drawCell: drawCellCallback, drawHeader: drawHeaderCallback, onCellFocused, onDragOverCell, onDrop, onDragLeave, imageWindowLoader, smoothScrollX = false, smoothScrollY = false, experimental, getCellRenderer, } = p;
    const translateX = p.translateX ?? 0;
    const translateY = p.translateY ?? 0;
    const cellXOffset = Math.max(freezeColumns, Math.min(columns.length - 1, cellXOffsetReal));
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const imageLoader = imageWindowLoader;
    const damageRegion = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const [scrolling, setScrolling] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const hoverValues = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const lastBlitData = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const [hoveredItemInfo, setHoveredItemInfo] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const [hoveredOnEdge, setHoveredOnEdge] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const overlayRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [drawCursorOverride, setDrawCursorOverride] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const [lastWasTouch, setLastWasTouch] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const lastWasTouchRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(lastWasTouch);
    lastWasTouchRef.current = lastWasTouch;
    const spriteManager = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => new _data_grid_sprites_js__WEBPACK_IMPORTED_MODULE_4__.SpriteManager(headerIcons, () => {
        lastArgsRef.current = undefined;
        lastDrawRef.current();
    }), [headerIcons]);
    const totalHeaderHeight = enableGroups ? groupHeaderHeight + headerHeight : headerHeight;
    const scrollingStopRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(-1);
    const enableFirefoxRescaling = (experimental?.enableFirefoxRescaling ?? false) && _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_11__.browserIsFirefox.value;
    const enableSafariRescaling = (experimental?.enableSafariRescaling ?? false) && _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_11__.browserIsSafari.value;
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        if (window.devicePixelRatio === 1 || (!enableFirefoxRescaling && !enableSafariRescaling))
            return;
        // We don't want to go into scroll mode for a single repaint
        if (scrollingStopRef.current !== -1) {
            setScrolling(true);
        }
        window.clearTimeout(scrollingStopRef.current);
        scrollingStopRef.current = window.setTimeout(() => {
            setScrolling(false);
            scrollingStopRef.current = -1;
        }, 200);
    }, [cellYOffset, cellXOffset, translateX, translateY, enableFirefoxRescaling, enableSafariRescaling]);
    const mappedColumns = (0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.useMappedColumns)(columns, freezeColumns);
    const stickyX = fixedShadowX ? (0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getStickyWidth)(mappedColumns, dragAndDropState) : 0;
    // row: -1 === columnHeader, -2 === groupHeader
    const getBoundsForItem = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((canvas, col, row) => {
        const rect = canvas.getBoundingClientRect();
        if (col >= mappedColumns.length || row >= rows) {
            return undefined;
        }
        const scale = rect.width / width;
        const result = (0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.computeBounds)(col, row, width, height, groupHeaderHeight, totalHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, freezeTrailingRows, mappedColumns, rowHeight);
        if (scale !== 1) {
            result.x *= scale;
            result.y *= scale;
            result.width *= scale;
            result.height *= scale;
        }
        result.x += rect.x;
        result.y += rect.y;
        return result;
    }, [
        width,
        height,
        groupHeaderHeight,
        totalHeaderHeight,
        cellXOffset,
        cellYOffset,
        translateX,
        translateY,
        rows,
        freezeColumns,
        freezeTrailingRows,
        mappedColumns,
        rowHeight,
    ]);
    const getMouseArgsForPosition = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((canvas, posX, posY, ev) => {
        const rect = canvas.getBoundingClientRect();
        const scale = rect.width / width;
        const x = (posX - rect.left) / scale;
        const y = (posY - rect.top) / scale;
        const edgeDetectionBuffer = 5;
        const effectiveCols = (0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getEffectiveColumns)(mappedColumns, cellXOffset, width, undefined, translateX);
        let button = 0;
        let buttons = 0;
        if (ev instanceof MouseEvent) {
            button = ev.button;
            buttons = ev.buttons;
        }
        // -1 === off right edge
        const col = (0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getColumnIndexForX)(x, effectiveCols, translateX);
        // -1: header or above
        // undefined: offbottom
        const row = (0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getRowIndexForY)(y, height, enableGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, freezeTrailingRows);
        const shiftKey = ev?.shiftKey === true;
        const ctrlKey = ev?.ctrlKey === true;
        const metaKey = ev?.metaKey === true;
        const isTouch = (ev !== undefined && !(ev instanceof MouseEvent)) || ev?.pointerType === "touch";
        const scrollEdge = [
            x < 0 ? -1 : width < x ? 1 : 0,
            y < totalHeaderHeight ? -1 : height < y ? 1 : 0,
        ];
        let result;
        if (col === -1 || y < 0 || x < 0 || row === undefined || x > width || y > height) {
            const horizontal = x > width ? 1 : x < 0 ? -1 : 0;
            const vertical = y > height ? 1 : y < 0 ? -1 : 0;
            let innerHorizontal = horizontal * 2;
            let innerVertical = vertical * 2;
            if (horizontal === 0)
                innerHorizontal = col === -1 ? _event_args_js__WEBPACK_IMPORTED_MODULE_14__.OutOfBoundsRegionAxis.EndPadding : _event_args_js__WEBPACK_IMPORTED_MODULE_14__.OutOfBoundsRegionAxis.Center;
            if (vertical === 0)
                innerVertical = row === undefined ? _event_args_js__WEBPACK_IMPORTED_MODULE_14__.OutOfBoundsRegionAxis.EndPadding : _event_args_js__WEBPACK_IMPORTED_MODULE_14__.OutOfBoundsRegionAxis.Center;
            let isEdge = false;
            if (col === -1 && row === -1) {
                const b = getBoundsForItem(canvas, mappedColumns.length - 1, -1);
                (0,_common_support_js__WEBPACK_IMPORTED_MODULE_13__.assert)(b !== undefined);
                isEdge = posX < b.x + b.width + edgeDetectionBuffer;
            }
            // This is used to ensure that clicking on the scrollbar doesn't unset the selection.
            // Unfortunately this doesn't work for overlay scrollbars because they are just a broken interaction
            // by design.
            const isMaybeScrollbar = (x > width && x < width + (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.getScrollBarWidth)()) || (y > height && y < height + (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.getScrollBarWidth)());
            result = {
                kind: _event_args_js__WEBPACK_IMPORTED_MODULE_14__.outOfBoundsKind,
                location: [col !== -1 ? col : x < 0 ? 0 : mappedColumns.length - 1, row ?? rows - 1],
                region: [innerHorizontal, innerVertical],
                shiftKey,
                ctrlKey,
                metaKey,
                isEdge,
                isTouch,
                button,
                buttons,
                scrollEdge,
                isMaybeScrollbar,
            };
        }
        else if (row <= -1) {
            let bounds = getBoundsForItem(canvas, col, row);
            (0,_common_support_js__WEBPACK_IMPORTED_MODULE_13__.assert)(bounds !== undefined);
            let isEdge = bounds !== undefined && bounds.x + bounds.width - posX <= edgeDetectionBuffer;
            const previousCol = col - 1;
            if (posX - bounds.x <= edgeDetectionBuffer && previousCol >= 0) {
                isEdge = true;
                bounds = getBoundsForItem(canvas, previousCol, row);
                (0,_common_support_js__WEBPACK_IMPORTED_MODULE_13__.assert)(bounds !== undefined);
                result = {
                    kind: enableGroups && row === -2 ? _event_args_js__WEBPACK_IMPORTED_MODULE_14__.groupHeaderKind : _event_args_js__WEBPACK_IMPORTED_MODULE_14__.headerKind,
                    location: [previousCol, row],
                    bounds: bounds,
                    group: mappedColumns[previousCol].group ?? "",
                    isEdge,
                    shiftKey,
                    ctrlKey,
                    metaKey,
                    isTouch,
                    localEventX: posX - bounds.x,
                    localEventY: posY - bounds.y,
                    button,
                    buttons,
                    scrollEdge,
                };
            }
            else {
                result = {
                    kind: enableGroups && row === -2 ? _event_args_js__WEBPACK_IMPORTED_MODULE_14__.groupHeaderKind : _event_args_js__WEBPACK_IMPORTED_MODULE_14__.headerKind,
                    group: mappedColumns[col].group ?? "",
                    location: [col, row],
                    bounds: bounds,
                    isEdge,
                    shiftKey,
                    ctrlKey,
                    metaKey,
                    isTouch,
                    localEventX: posX - bounds.x,
                    localEventY: posY - bounds.y,
                    button,
                    buttons,
                    scrollEdge,
                };
            }
        }
        else {
            const bounds = getBoundsForItem(canvas, col, row);
            (0,_common_support_js__WEBPACK_IMPORTED_MODULE_13__.assert)(bounds !== undefined);
            const isEdge = bounds !== undefined && bounds.x + bounds.width - posX < edgeDetectionBuffer;
            let isFillHandle = false;
            if (fillHandle && selection.current !== undefined) {
                const fillHandleLocation = (0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.rectBottomRight)(selection.current.range);
                const fillHandleCellBounds = getBoundsForItem(canvas, fillHandleLocation[0], fillHandleLocation[1]);
                if (fillHandleCellBounds !== undefined) {
                    const handleLogicalCenterX = fillHandleCellBounds.x + fillHandleCellBounds.width - 2;
                    const handleLogicalCenterY = fillHandleCellBounds.y + fillHandleCellBounds.height - 2;
                    //check if posX and posY are within fillHandleClickSize from handleLogicalCenter
                    isFillHandle =
                        Math.abs(handleLogicalCenterX - posX) < fillHandleClickSize &&
                            Math.abs(handleLogicalCenterY - posY) < fillHandleClickSize;
                }
            }
            result = {
                kind: "cell",
                location: [col, row],
                bounds: bounds,
                isEdge,
                shiftKey,
                ctrlKey,
                isFillHandle,
                metaKey,
                isTouch,
                localEventX: posX - bounds.x,
                localEventY: posY - bounds.y,
                button,
                buttons,
                scrollEdge,
            };
        }
        return result;
    }, [
        width,
        mappedColumns,
        cellXOffset,
        translateX,
        height,
        enableGroups,
        headerHeight,
        groupHeaderHeight,
        rows,
        rowHeight,
        cellYOffset,
        translateY,
        freezeTrailingRows,
        getBoundsForItem,
        fillHandle,
        selection,
        totalHeaderHeight,
    ]);
    const [hoveredItem] = hoveredItemInfo ?? [];
    const enqueueRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(() => {
        // do nothing
    });
    const hoverInfoRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(hoveredItemInfo);
    hoverInfoRef.current = hoveredItemInfo;
    const [bufferACtx, bufferBCtx] = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const a = document.createElement("canvas");
        const b = document.createElement("canvas");
        a.style["display"] = "none";
        a.style["opacity"] = "0";
        a.style["position"] = "fixed";
        b.style["display"] = "none";
        b.style["opacity"] = "0";
        b.style["position"] = "fixed";
        return [a.getContext("2d", { alpha: false }), b.getContext("2d", { alpha: false })];
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        if (bufferACtx === null || bufferBCtx === null)
            return;
        document.documentElement.append(bufferACtx.canvas);
        document.documentElement.append(bufferBCtx.canvas);
        return () => {
            bufferACtx.canvas.remove();
            bufferBCtx.canvas.remove();
        };
    }, [bufferACtx, bufferBCtx]);
    const renderStateProvider = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => new _common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_10__.RenderStateProvider(), []);
    const maxDPR = enableFirefoxRescaling && scrolling ? 1 : enableSafariRescaling && scrolling ? 2 : 5;
    const minimumCellWidth = experimental?.disableMinimumCellWidth === true ? 1 : 10;
    const lastArgsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const canvasCtx = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const overlayCtx = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const draw = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        const canvas = ref.current;
        const overlay = overlayRef.current;
        if (canvas === null || overlay === null)
            return;
        if (canvasCtx.current === null) {
            canvasCtx.current = canvas.getContext("2d", { alpha: false });
            canvas.width = 0;
            canvas.height = 0;
        }
        if (overlayCtx.current === null) {
            overlayCtx.current = overlay.getContext("2d", { alpha: false });
            overlay.width = 0;
            overlay.height = 0;
        }
        if (canvasCtx.current === null || overlayCtx.current === null || bufferACtx === null || bufferBCtx === null) {
            return;
        }
        let didOverride = false;
        const overrideCursor = (cursor) => {
            didOverride = true;
            setDrawCursorOverride(cursor);
        };
        const last = lastArgsRef.current;
        const current = {
            headerCanvasCtx: overlayCtx.current,
            canvasCtx: canvasCtx.current,
            bufferACtx,
            bufferBCtx,
            width,
            height,
            cellXOffset,
            cellYOffset,
            translateX: Math.round(translateX),
            translateY: Math.round(translateY),
            mappedColumns,
            enableGroups,
            freezeColumns,
            dragAndDropState,
            theme,
            headerHeight,
            groupHeaderHeight,
            disabledRows: disabledRows ?? _data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.CompactSelection.empty(),
            rowHeight,
            verticalBorder,
            isResizing,
            resizeCol,
            isFocused,
            selection,
            fillHandle,
            drawCellCallback,
            hasAppendRow,
            overrideCursor,
            maxScaleFactor: maxDPR,
            freezeTrailingRows,
            rows,
            drawFocus: drawFocusRing,
            getCellContent,
            getGroupDetails: getGroupDetails ?? (name => ({ name })),
            getRowThemeOverride,
            drawHeaderCallback,
            prelightCells,
            highlightRegions,
            imageLoader,
            lastBlitData,
            damage: damageRegion.current,
            hoverValues: hoverValues.current,
            hoverInfo: hoverInfoRef.current,
            spriteManager,
            scrolling,
            hyperWrapping: experimental?.hyperWrapping ?? false,
            touchMode: lastWasTouch,
            enqueue: enqueueRef.current,
            renderStateProvider,
            renderStrategy: experimental?.renderStrategy ?? (_common_browser_detect_js__WEBPACK_IMPORTED_MODULE_11__.browserIsSafari.value ? "double-buffer" : "single-buffer"),
            getCellRenderer,
            minimumCellWidth,
        };
        // This confusing bit of code due to some poor design. Long story short, the damage property is only used
        // with what is effectively the "last args" for the last normal draw anyway. We don't want the drawing code
        // to look at this and go "shit dawg, nothing changed" so we force it to draw frash, but the damage restricts
        // the draw anyway.
        //
        // Dear future Jason, I'm sorry. It was expedient, it worked, and had almost zero perf overhead. THe universe
        // basically made me do it. What choice did I have?
        if (current.damage === undefined) {
            lastArgsRef.current = current;
            (0,_render_data_grid_render_js__WEBPACK_IMPORTED_MODULE_8__.drawGrid)(current, last);
        }
        else {
            (0,_render_data_grid_render_js__WEBPACK_IMPORTED_MODULE_8__.drawGrid)(current, undefined);
        }
        // don't reset on damage events
        if (!didOverride && (current.damage === undefined || current.damage.has(hoverInfoRef?.current?.[0]))) {
            setDrawCursorOverride(undefined);
        }
    }, [
        bufferACtx,
        bufferBCtx,
        width,
        height,
        cellXOffset,
        cellYOffset,
        translateX,
        translateY,
        mappedColumns,
        enableGroups,
        freezeColumns,
        dragAndDropState,
        theme,
        headerHeight,
        groupHeaderHeight,
        disabledRows,
        rowHeight,
        verticalBorder,
        isResizing,
        hasAppendRow,
        resizeCol,
        isFocused,
        selection,
        fillHandle,
        freezeTrailingRows,
        rows,
        drawFocusRing,
        maxDPR,
        getCellContent,
        getGroupDetails,
        getRowThemeOverride,
        drawCellCallback,
        drawHeaderCallback,
        prelightCells,
        highlightRegions,
        imageLoader,
        spriteManager,
        scrolling,
        experimental?.hyperWrapping,
        experimental?.renderStrategy,
        lastWasTouch,
        renderStateProvider,
        getCellRenderer,
        minimumCellWidth,
    ]);
    const lastDrawRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(draw);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        draw();
        lastDrawRef.current = draw;
    }, [draw]);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        const fn = async () => {
            if (document?.fonts?.ready === undefined)
                return;
            await document.fonts.ready;
            lastArgsRef.current = undefined;
            lastDrawRef.current();
        };
        void fn();
    }, []);
    const damageInternal = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((locations) => {
        damageRegion.current = locations;
        lastDrawRef.current();
        damageRegion.current = undefined;
    }, []);
    const enqueue = (0,_use_animation_queue_js__WEBPACK_IMPORTED_MODULE_12__.useAnimationQueue)(damageInternal);
    enqueueRef.current = enqueue;
    const damage = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((cells) => {
        damageInternal(new _cell_set_js__WEBPACK_IMPORTED_MODULE_3__.CellSet(cells.map(x => x.cell)));
    }, [damageInternal]);
    imageLoader.setCallback(damageInternal);
    const [overFill, setOverFill] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [hCol, hRow] = hoveredItem ?? [];
    const headerHovered = hCol !== undefined && hRow === -1;
    const groupHeaderHovered = hCol !== undefined && hRow === -2;
    let clickableInnerCellHovered = false;
    let editableBoolHovered = false;
    let cursorOverride = drawCursorOverride;
    if (cursorOverride === undefined && hCol !== undefined && hRow !== undefined && hRow > -1 && hRow < rows) {
        const cell = getCellContent([hCol, hRow], true);
        clickableInnerCellHovered =
            cell.kind === _data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.InnerGridCellKind.NewRow ||
                (cell.kind === _data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.InnerGridCellKind.Marker && cell.markerKind !== "number");
        editableBoolHovered = cell.kind === _data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.GridCellKind.Boolean && (0,_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanCellIsEditable)(cell);
        cursorOverride = cell.cursor;
    }
    const canDrag = hoveredOnEdge ?? false;
    const cursor = isDragging
        ? "grabbing"
        : canDrag || isResizing
            ? "col-resize"
            : overFill || isFilling
                ? "crosshair"
                : cursorOverride !== undefined
                    ? cursorOverride
                    : headerHovered || clickableInnerCellHovered || editableBoolHovered || groupHeaderHovered
                        ? "pointer"
                        : "default";
    const style = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        // width,
        // height,
        contain: "strict",
        display: "block",
        cursor,
    }), [cursor]);
    const lastSetCursor = react__WEBPACK_IMPORTED_MODULE_0__.useRef("default");
    const target = eventTargetRef?.current;
    if (target !== null && target !== undefined && lastSetCursor.current !== style.cursor) {
        // because we have an event target we need to set its cursor instead.
        target.style.cursor = lastSetCursor.current = style.cursor;
    }
    const groupHeaderActionForEvent = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((group, bounds, localEventX, localEventY) => {
        if (getGroupDetails === undefined)
            return undefined;
        const groupDesc = getGroupDetails(group);
        if (groupDesc.actions !== undefined) {
            const boxes = (0,_render_data_grid_render_header_js__WEBPACK_IMPORTED_MODULE_17__.getActionBoundsForGroup)(bounds, groupDesc.actions);
            for (const [i, box] of boxes.entries()) {
                if ((0,_common_math_js__WEBPACK_IMPORTED_MODULE_15__.pointInRect)(box, localEventX + bounds.x, localEventY + box.y)) {
                    return groupDesc.actions[i];
                }
            }
        }
        return undefined;
    }, [getGroupDetails]);
    const isOverHeaderMenu = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((canvas, col, clientX, clientY) => {
        const header = columns[col];
        if (!isDragging && !isResizing && header.hasMenu === true && !(hoveredOnEdge ?? false)) {
            const headerBounds = getBoundsForItem(canvas, col, -1);
            (0,_common_support_js__WEBPACK_IMPORTED_MODULE_13__.assert)(headerBounds !== undefined);
            const menuBounds = (0,_render_data_grid_render_header_js__WEBPACK_IMPORTED_MODULE_17__.getHeaderMenuBounds)(headerBounds.x, headerBounds.y, headerBounds.width, headerBounds.height, (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.direction)(header.title) === "rtl");
            if (clientX > menuBounds.x &&
                clientX < menuBounds.x + menuBounds.width &&
                clientY > menuBounds.y &&
                clientY < menuBounds.y + menuBounds.height) {
                return headerBounds;
            }
        }
        return undefined;
    }, [columns, getBoundsForItem, hoveredOnEdge, isDragging, isResizing]);
    const downTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const downPosition = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const mouseDown = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const onMouseDownImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((ev) => {
        const canvas = ref.current;
        const eventTarget = eventTargetRef?.current;
        if (canvas === null || (ev.target !== canvas && ev.target !== eventTarget))
            return;
        mouseDown.current = true;
        let clientX;
        let clientY;
        if (ev instanceof MouseEvent) {
            clientX = ev.clientX;
            clientY = ev.clientY;
        }
        else {
            clientX = ev.touches[0].clientX;
            clientY = ev.touches[0].clientY;
        }
        if (ev.target === eventTarget && eventTarget !== null) {
            const bounds = eventTarget.getBoundingClientRect();
            if (clientX > bounds.right || clientY > bounds.bottom)
                return;
        }
        const args = getMouseArgsForPosition(canvas, clientX, clientY, ev);
        downPosition.current = args.location;
        if (args.isTouch) {
            downTime.current = Date.now();
        }
        if (lastWasTouchRef.current !== args.isTouch) {
            setLastWasTouch(args.isTouch);
        }
        if (args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.headerKind &&
            isOverHeaderMenu(canvas, args.location[0], clientX, clientY) !== undefined) {
            return;
        }
        else if (args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.groupHeaderKind) {
            const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);
            if (action !== undefined) {
                return;
            }
        }
        onMouseDown?.(args);
        if (!args.isTouch &&
            isDraggable !== true &&
            isDraggable !== args.kind &&
            args.button < 3 &&
            args.button !== 1) {
            // preventing default in touch events stops scroll
            ev.preventDefault();
        }
    }, [eventTargetRef, isDraggable, getMouseArgsForPosition, groupHeaderActionForEvent, isOverHeaderMenu, onMouseDown]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("touchstart", onMouseDownImpl, window, false);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("mousedown", onMouseDownImpl, window, false);
    const lastUpTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const onMouseUpImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((ev) => {
        const lastUpTimeValue = lastUpTime.current;
        lastUpTime.current = Date.now();
        const canvas = ref.current;
        mouseDown.current = false;
        if (onMouseUp === undefined || canvas === null)
            return;
        const eventTarget = eventTargetRef?.current;
        const isOutside = ev.target !== canvas && ev.target !== eventTarget;
        let clientX;
        let clientY;
        let canCancel = true;
        if (ev instanceof MouseEvent) {
            clientX = ev.clientX;
            clientY = ev.clientY;
            canCancel = ev.button < 3;
            if (ev.pointerType === "touch") {
                return;
            }
        }
        else {
            clientX = ev.changedTouches[0].clientX;
            clientY = ev.changedTouches[0].clientY;
        }
        let args = getMouseArgsForPosition(canvas, clientX, clientY, ev);
        if (args.isTouch && downTime.current !== 0 && Date.now() - downTime.current > 500) {
            args = {
                ...args,
                isLongTouch: true,
            };
        }
        if (lastUpTimeValue !== 0 && Date.now() - lastUpTimeValue < (args.isTouch ? 1000 : 500)) {
            args = {
                ...args,
                isDoubleClick: true,
            };
        }
        if (lastWasTouchRef.current !== args.isTouch) {
            setLastWasTouch(args.isTouch);
        }
        if (!isOutside && ev.cancelable && canCancel) {
            ev.preventDefault();
        }
        const [col] = args.location;
        const headerBounds = isOverHeaderMenu(canvas, col, clientX, clientY);
        if (args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.headerKind && headerBounds !== undefined) {
            if (args.button !== 0 || downPosition.current?.[0] !== col || downPosition.current?.[1] !== -1) {
                // force outside so that click will not process
                onMouseUp(args, true);
            }
            return;
        }
        else if (args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.groupHeaderKind) {
            const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);
            if (action !== undefined) {
                if (args.button === 0) {
                    action.onClick(args);
                }
                return;
            }
        }
        onMouseUp(args, isOutside);
    }, [onMouseUp, eventTargetRef, getMouseArgsForPosition, isOverHeaderMenu, groupHeaderActionForEvent]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("mouseup", onMouseUpImpl, window, false);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("touchend", onMouseUpImpl, window, false);
    const onClickImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((ev) => {
        const canvas = ref.current;
        if (canvas === null)
            return;
        const eventTarget = eventTargetRef?.current;
        const isOutside = ev.target !== canvas && ev.target !== eventTarget;
        let clientX;
        let clientY;
        let canCancel = true;
        if (ev instanceof MouseEvent) {
            clientX = ev.clientX;
            clientY = ev.clientY;
            canCancel = ev.button < 3;
        }
        else {
            clientX = ev.changedTouches[0].clientX;
            clientY = ev.changedTouches[0].clientY;
        }
        const args = getMouseArgsForPosition(canvas, clientX, clientY, ev);
        if (lastWasTouchRef.current !== args.isTouch) {
            setLastWasTouch(args.isTouch);
        }
        if (!isOutside && ev.cancelable && canCancel) {
            ev.preventDefault();
        }
        const [col] = args.location;
        const headerBounds = isOverHeaderMenu(canvas, col, clientX, clientY);
        if (args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.headerKind && headerBounds !== undefined) {
            if (args.button === 0 && downPosition.current?.[0] === col && downPosition.current?.[1] === -1) {
                onHeaderMenuClick?.(col, headerBounds);
            }
        }
        else if (args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.groupHeaderKind) {
            const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);
            if (action !== undefined && args.button === 0) {
                action.onClick(args);
            }
        }
    }, [eventTargetRef, getMouseArgsForPosition, isOverHeaderMenu, onHeaderMenuClick, groupHeaderActionForEvent]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("click", onClickImpl, window, false);
    const onContextMenuImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((ev) => {
        const canvas = ref.current;
        const eventTarget = eventTargetRef?.current;
        if (canvas === null || (ev.target !== canvas && ev.target !== eventTarget) || onContextMenu === undefined)
            return;
        const args = getMouseArgsForPosition(canvas, ev.clientX, ev.clientY, ev);
        onContextMenu(args, () => {
            if (ev.cancelable)
                ev.preventDefault();
        });
    }, [eventTargetRef, getMouseArgsForPosition, onContextMenu]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("contextmenu", onContextMenuImpl, eventTargetRef?.current ?? null, false);
    const onAnimationFrame = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(values => {
        damageRegion.current = new _cell_set_js__WEBPACK_IMPORTED_MODULE_3__.CellSet(values.map(x => x.item));
        hoverValues.current = values;
        lastDrawRef.current();
        damageRegion.current = undefined;
    }, []);
    const animManagerValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => new _animation_manager_js__WEBPACK_IMPORTED_MODULE_9__.AnimationManager(onAnimationFrame), [onAnimationFrame]);
    const animationManager = react__WEBPACK_IMPORTED_MODULE_0__.useRef(animManagerValue);
    animationManager.current = animManagerValue;
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        const am = animationManager.current;
        if (hoveredItem === undefined || hoveredItem[1] < 0) {
            am.setHovered(hoveredItem);
            return;
        }
        const cell = getCellContent(hoveredItem, true);
        const r = getCellRenderer(cell);
        const cellNeedsHover = (r === undefined && cell.kind === _data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.GridCellKind.Custom) ||
            (r?.needsHover !== undefined && (typeof r.needsHover === "boolean" ? r.needsHover : r.needsHover(cell)));
        am.setHovered(cellNeedsHover ? hoveredItem : undefined);
    }, [getCellContent, getCellRenderer, hoveredItem]);
    const hoveredRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const onMouseMoveImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((ev) => {
        const canvas = ref.current;
        if (canvas === null)
            return;
        const eventTarget = eventTargetRef?.current;
        const isIndirect = ev.target !== canvas && ev.target !== eventTarget;
        const args = getMouseArgsForPosition(canvas, ev.clientX, ev.clientY, ev);
        if (args.kind !== "out-of-bounds" && isIndirect && !mouseDown.current && !args.isTouch) {
            // we are obscured by something else, so we want to not register events if we are not doing anything
            // important already
            return;
        }
        // the point here is not to trigger re-renders every time the mouse moves over a cell
        // that doesn't care about the mouse positon.
        const maybeSetHoveredInfo = (newVal, needPosition) => {
            setHoveredItemInfo(cv => {
                if (cv === newVal)
                    return cv;
                if (cv?.[0][0] === newVal?.[0][0] &&
                    cv?.[0][1] === newVal?.[0][1] &&
                    ((cv?.[1][0] === newVal?.[1][0] && cv?.[1][1] === newVal?.[1][1]) || !needPosition)) {
                    return cv;
                }
                return newVal;
            });
        };
        if (!(0,_event_args_js__WEBPACK_IMPORTED_MODULE_14__.mouseEventArgsAreEqual)(args, hoveredRef.current)) {
            setDrawCursorOverride(undefined);
            onItemHovered?.(args);
            maybeSetHoveredInfo(args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.outOfBoundsKind ? undefined : [args.location, [args.localEventX, args.localEventY]], true);
            hoveredRef.current = args;
        }
        else if (args.kind === "cell" || args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.headerKind || args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.groupHeaderKind) {
            let needsDamageCell = false;
            let needsHoverPosition = true;
            if (args.kind === "cell") {
                const toCheck = getCellContent(args.location);
                const rendererNeeds = getCellRenderer(toCheck)?.needsHoverPosition;
                // custom cells we will assume need the position if they don't explicitly say they don't, everything
                // else we will assume doesn't need it.
                needsHoverPosition = rendererNeeds ?? toCheck.kind === _data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.GridCellKind.Custom;
                needsDamageCell = needsHoverPosition;
            }
            else if (args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.groupHeaderKind) {
                needsDamageCell = true;
            }
            const newInfo = [args.location, [args.localEventX, args.localEventY]];
            maybeSetHoveredInfo(newInfo, needsHoverPosition);
            hoverInfoRef.current = newInfo;
            if (needsDamageCell) {
                damageInternal(new _cell_set_js__WEBPACK_IMPORTED_MODULE_3__.CellSet([args.location]));
            }
        }
        const notRowMarkerCol = args.location[0] >= (firstColAccessible ? 0 : 1);
        setHoveredOnEdge(args.kind === _event_args_js__WEBPACK_IMPORTED_MODULE_14__.headerKind && args.isEdge && notRowMarkerCol && allowResize === true);
        setOverFill(args.kind === "cell" && args.isFillHandle);
        onMouseMoveRaw?.(ev);
        onMouseMove(args);
    }, [
        eventTargetRef,
        getMouseArgsForPosition,
        firstColAccessible,
        allowResize,
        onMouseMoveRaw,
        onMouseMove,
        onItemHovered,
        getCellContent,
        getCellRenderer,
        damageInternal,
    ]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("mousemove", onMouseMoveImpl, window, true);
    const onKeyDownImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        const canvas = ref.current;
        if (canvas === null)
            return;
        let bounds;
        let location = undefined;
        if (selection.current !== undefined) {
            bounds = getBoundsForItem(canvas, selection.current.cell[0], selection.current.cell[1]);
            location = selection.current.cell;
        }
        onKeyDown?.({
            bounds,
            stopPropagation: () => event.stopPropagation(),
            preventDefault: () => event.preventDefault(),
            cancel: () => undefined,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey,
            key: event.key,
            keyCode: event.keyCode,
            rawEvent: event,
            location,
        });
    }, [onKeyDown, selection, getBoundsForItem]);
    const onKeyUpImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        const canvas = ref.current;
        if (canvas === null)
            return;
        let bounds;
        let location = undefined;
        if (selection.current !== undefined) {
            bounds = getBoundsForItem(canvas, selection.current.cell[0], selection.current.cell[1]);
            location = selection.current.cell;
        }
        onKeyUp?.({
            bounds,
            stopPropagation: () => event.stopPropagation(),
            preventDefault: () => event.preventDefault(),
            cancel: () => undefined,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey,
            key: event.key,
            keyCode: event.keyCode,
            rawEvent: event,
            location,
        });
    }, [onKeyUp, selection, getBoundsForItem]);
    const refImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((instance) => {
        ref.current = instance;
        if (canvasRef !== undefined) {
            canvasRef.current = instance;
        }
    }, [canvasRef]);
    const onDragStartImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        const canvas = ref.current;
        if (canvas === null || isDraggable === false || isResizing) {
            event.preventDefault();
            return;
        }
        let dragMime;
        let dragData;
        const args = getMouseArgsForPosition(canvas, event.clientX, event.clientY);
        if (isDraggable !== true && args.kind !== isDraggable) {
            event.preventDefault();
            return;
        }
        const setData = (mime, payload) => {
            dragMime = mime;
            dragData = payload;
        };
        let dragImage;
        let dragImageX;
        let dragImageY;
        const setDragImage = (image, x, y) => {
            dragImage = image;
            dragImageX = x;
            dragImageY = y;
        };
        let prevented = false;
        onDragStart?.({
            ...args,
            setData,
            setDragImage,
            preventDefault: () => (prevented = true),
            defaultPrevented: () => prevented,
        });
        if (!prevented && dragMime !== undefined && dragData !== undefined && event.dataTransfer !== null) {
            event.dataTransfer.setData(dragMime, dragData);
            event.dataTransfer.effectAllowed = "copyLink";
            if (dragImage !== undefined && dragImageX !== undefined && dragImageY !== undefined) {
                event.dataTransfer.setDragImage(dragImage, dragImageX, dragImageY);
            }
            else {
                const [col, row] = args.location;
                if (row !== undefined) {
                    const offscreen = document.createElement("canvas");
                    const boundsForDragTarget = getBoundsForItem(canvas, col, row);
                    (0,_common_support_js__WEBPACK_IMPORTED_MODULE_13__.assert)(boundsForDragTarget !== undefined);
                    const dpr = Math.ceil(window.devicePixelRatio ?? 1);
                    offscreen.width = boundsForDragTarget.width * dpr;
                    offscreen.height = boundsForDragTarget.height * dpr;
                    const ctx = offscreen.getContext("2d");
                    if (ctx !== null) {
                        ctx.scale(dpr, dpr);
                        ctx.textBaseline = "middle";
                        if (row === -1) {
                            ctx.font = theme.headerFontFull;
                            ctx.fillStyle = theme.bgHeader;
                            ctx.fillRect(0, 0, offscreen.width, offscreen.height);
                            (0,_render_data_grid_render_header_js__WEBPACK_IMPORTED_MODULE_17__.drawHeader)(ctx, 0, 0, boundsForDragTarget.width, boundsForDragTarget.height, mappedColumns[col], false, theme, false, false, 0, spriteManager, drawHeaderCallback, false);
                        }
                        else {
                            ctx.font = theme.baseFontFull;
                            ctx.fillStyle = theme.bgCell;
                            ctx.fillRect(0, 0, offscreen.width, offscreen.height);
                            (0,_render_data_grid_render_cells_js__WEBPACK_IMPORTED_MODULE_16__.drawCell)(ctx, getCellContent([col, row]), 0, row, false, false, 0, 0, boundsForDragTarget.width, boundsForDragTarget.height, false, theme, theme.bgCell, imageLoader, spriteManager, 1, undefined, false, 0, undefined, undefined, undefined, renderStateProvider, getCellRenderer, () => undefined);
                        }
                    }
                    offscreen.style.left = "-100%";
                    offscreen.style.position = "absolute";
                    offscreen.style.width = `${boundsForDragTarget.width}px`;
                    offscreen.style.height = `${boundsForDragTarget.height}px`;
                    document.body.append(offscreen);
                    event.dataTransfer.setDragImage(offscreen, boundsForDragTarget.width / 2, boundsForDragTarget.height / 2);
                    window.setTimeout(() => {
                        offscreen.remove();
                    }, 0);
                }
            }
        }
        else {
            event.preventDefault();
        }
    }, [
        isDraggable,
        isResizing,
        getMouseArgsForPosition,
        onDragStart,
        getBoundsForItem,
        theme,
        mappedColumns,
        spriteManager,
        drawHeaderCallback,
        getCellContent,
        imageLoader,
        renderStateProvider,
        getCellRenderer,
    ]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("dragstart", onDragStartImpl, eventTargetRef?.current ?? null, false, false);
    const activeDropTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const onDragOverImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        const canvas = ref.current;
        if (onDrop !== undefined) {
            // Need to preventDefault to allow drop
            event.preventDefault();
        }
        if (canvas === null || onDragOverCell === undefined) {
            return;
        }
        const args = getMouseArgsForPosition(canvas, event.clientX, event.clientY);
        const [rawCol, row] = args.location;
        const col = rawCol - (firstColAccessible ? 0 : 1);
        const [activeCol, activeRow] = activeDropTarget.current ?? [];
        if (activeCol !== col || activeRow !== row) {
            activeDropTarget.current = [col, row];
            onDragOverCell([col, row], event.dataTransfer);
        }
    }, [firstColAccessible, getMouseArgsForPosition, onDragOverCell, onDrop]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("dragover", onDragOverImpl, eventTargetRef?.current ?? null, false, false);
    const onDragEndImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        activeDropTarget.current = undefined;
        onDragEnd?.();
    }, [onDragEnd]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("dragend", onDragEndImpl, eventTargetRef?.current ?? null, false, false);
    const onDropImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        const canvas = ref.current;
        if (canvas === null || onDrop === undefined) {
            return;
        }
        // Default can mess up sometimes.
        event.preventDefault();
        const args = getMouseArgsForPosition(canvas, event.clientX, event.clientY);
        const [rawCol, row] = args.location;
        const col = rawCol - (firstColAccessible ? 0 : 1);
        onDrop([col, row], event.dataTransfer);
    }, [firstColAccessible, getMouseArgsForPosition, onDrop]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("drop", onDropImpl, eventTargetRef?.current ?? null, false, false);
    const onDragLeaveImpl = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        onDragLeave?.();
    }, [onDragLeave]);
    (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useEventListener)("dragleave", onDragLeaveImpl, eventTargetRef?.current ?? null, false, false);
    const selectionRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(selection);
    selectionRef.current = selection;
    const focusRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const focusElement = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((el) => {
        // We don't want to steal the focus if we don't currently own the focus.
        if (ref.current === null || !ref.current.contains(document.activeElement))
            return;
        if (el === null && selectionRef.current.current !== undefined) {
            canvasRef?.current?.focus({
                preventScroll: true,
            });
        }
        else if (el !== null) {
            el.focus({
                preventScroll: true,
            });
        }
        focusRef.current = el;
    }, [canvasRef]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(forwardedRef, () => ({
        focus: () => {
            const el = focusRef.current;
            // The element in the ref may have been removed however our callback method ref
            // won't see the removal so bad things happen. Checking to see if the element is
            // no longer attached is enough to resolve the problem. In the future this
            // should be replaced with something much more robust.
            if (el === null || !document.contains(el)) {
                canvasRef?.current?.focus({
                    preventScroll: true,
                });
            }
            else {
                el.focus({
                    preventScroll: true,
                });
            }
        },
        getBounds: (col, row) => {
            if (canvasRef === undefined || canvasRef.current === null) {
                return undefined;
            }
            return getBoundsForItem(canvasRef.current, col ?? 0, row ?? -1);
        },
        damage,
    }), [canvasRef, damage, getBoundsForItem]);
    const lastFocusedSubdomNode = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const accessibilityTree = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_5__.useDebouncedMemo)(() => {
        if (width < 50 || experimental?.disableAccessibilityTree === true)
            return null;
        let effectiveCols = (0,_render_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getEffectiveColumns)(mappedColumns, cellXOffset, width, dragAndDropState, translateX);
        const colOffset = firstColAccessible ? 0 : -1;
        if (!firstColAccessible && effectiveCols[0]?.sourceIndex === 0) {
            effectiveCols = effectiveCols.slice(1);
        }
        const [fCol, fRow] = selection.current?.cell ?? [];
        const range = selection.current?.range;
        const visibleCols = effectiveCols.map(c => c.sourceIndex);
        const visibleRows = lodash_range_js__WEBPACK_IMPORTED_MODULE_7__(cellYOffset, Math.min(rows, cellYOffset + accessibilityHeight));
        // Maintain focus within grid if we own it but focused cell is outside visible viewport
        // and not rendered.
        if (fCol !== undefined &&
            fRow !== undefined &&
            !(visibleCols.includes(fCol) && visibleRows.includes(fRow))) {
            focusElement(null);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { key: "access-tree", role: "grid", "aria-rowcount": rows + 1, "aria-multiselectable": "true", "aria-colcount": mappedColumns.length + colOffset },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", { role: "rowgroup" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { role: "row", "aria-rowindex": 1 }, effectiveCols.map(c => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { role: "columnheader", "aria-selected": selection.columns.hasIndex(c.sourceIndex), "aria-colindex": c.sourceIndex + 1 + colOffset, tabIndex: -1, onFocus: e => {
                        if (e.target === focusRef.current)
                            return;
                        return onCellFocused?.([c.sourceIndex, -1]);
                    }, key: c.sourceIndex }, c.title))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", { role: "rowgroup" }, visibleRows.map(row => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { role: "row", "aria-selected": selection.rows.hasIndex(row), key: row, "aria-rowindex": row + 2 }, effectiveCols.map(c => {
                const col = c.sourceIndex;
                const key = (0,_common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_10__.packColRowToNumber)(col, row);
                const focused = fCol === col && fRow === row;
                const selected = range !== undefined &&
                    col >= range.x &&
                    col < range.x + range.width &&
                    row >= range.y &&
                    row < range.y + range.height;
                const id = `glide-cell-${col}-${row}`;
                const location = [col, row];
                const cellContent = getCellContent(location, true);
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { key: key, role: "gridcell", "aria-colindex": col + 1 + colOffset, "aria-selected": selected, "aria-readonly": (0,_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.isInnerOnlyCell)(cellContent) || !(0,_data_grid_types_js__WEBPACK_IMPORTED_MODULE_2__.isReadWriteCell)(cellContent), id: id, "data-testid": id, onClick: () => {
                        const canvas = canvasRef?.current;
                        if (canvas === null || canvas === undefined)
                            return;
                        return onKeyDown?.({
                            bounds: getBoundsForItem(canvas, col, row),
                            cancel: () => undefined,
                            preventDefault: () => undefined,
                            stopPropagation: () => undefined,
                            ctrlKey: false,
                            key: "Enter",
                            keyCode: 13,
                            metaKey: false,
                            shiftKey: false,
                            altKey: false,
                            rawEvent: undefined,
                            location,
                        });
                    }, onFocusCapture: e => {
                        if (e.target === focusRef.current ||
                            (lastFocusedSubdomNode.current?.[0] === col &&
                                lastFocusedSubdomNode.current?.[1] === row))
                            return;
                        lastFocusedSubdomNode.current = location;
                        return onCellFocused?.(location);
                    }, ref: focused ? focusElement : undefined, tabIndex: -1 }, getRowData(cellContent, getCellRenderer)));
            })))))));
    }, [
        width,
        mappedColumns,
        cellXOffset,
        dragAndDropState,
        translateX,
        rows,
        cellYOffset,
        accessibilityHeight,
        selection,
        focusElement,
        getCellContent,
        canvasRef,
        onKeyDown,
        getBoundsForItem,
        onCellFocused,
    ], 200);
    const opacityX = freezeColumns === 0 || !fixedShadowX ? 0 : cellXOffset > freezeColumns ? 1 : lodash_clamp_js__WEBPACK_IMPORTED_MODULE_6__(-translateX / 100, 0, 1);
    const absoluteOffsetY = -cellYOffset * 32 + translateY;
    const opacityY = !fixedShadowY ? 0 : lodash_clamp_js__WEBPACK_IMPORTED_MODULE_6__(-absoluteOffsetY / 100, 0, 1);
    const stickyShadow = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        if (!opacityX && !opacityY) {
            return null;
        }
        const styleX = {
            position: "absolute",
            top: 0,
            left: stickyX,
            width: width - stickyX,
            height: height,
            opacity: opacityX,
            pointerEvents: "none",
            transition: !smoothScrollX ? "opacity 0.2s" : undefined,
            boxShadow: "inset 13px 0 10px -13px rgba(0, 0, 0, 0.2)",
        };
        const styleY = {
            position: "absolute",
            top: totalHeaderHeight,
            left: 0,
            width: width,
            height: height,
            opacity: opacityY,
            pointerEvents: "none",
            transition: !smoothScrollY ? "opacity 0.2s" : undefined,
            boxShadow: "inset 0 13px 10px -13px rgba(0, 0, 0, 0.2)",
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            opacityX > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "shadow-x", style: styleX }),
            opacityY > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "shadow-y", style: styleY })));
    }, [opacityX, opacityY, stickyX, width, smoothScrollX, totalHeaderHeight, height, smoothScrollY]);
    const overlayStyle = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        position: "absolute",
        top: 0,
        left: 0,
    }), []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", { "data-testid": "data-grid-canvas", tabIndex: 0, onKeyDown: onKeyDownImpl, onKeyUp: onKeyUpImpl, onFocus: onCanvasFocused, onBlur: onCanvasBlur, ref: refImpl, style: style }, accessibilityTree),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", { ref: overlayRef, style: overlayStyle }),
        stickyShadow));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.memo(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DataGrid)));
//# sourceMappingURL=data-grid.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/event-args.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutOfBoundsRegionAxis: () => (/* binding */ OutOfBoundsRegionAxis),
/* harmony export */   groupHeaderKind: () => (/* binding */ groupHeaderKind),
/* harmony export */   headerKind: () => (/* binding */ headerKind),
/* harmony export */   mouseEventArgsAreEqual: () => (/* binding */ mouseEventArgsAreEqual),
/* harmony export */   outOfBoundsKind: () => (/* binding */ outOfBoundsKind)
/* harmony export */ });
/** @category Types */
const headerKind = "header";
/** @category Types */
const groupHeaderKind = "group-header";
/** @category Types */
const outOfBoundsKind = "out-of-bounds";
/** @category Types */
var OutOfBoundsRegionAxis;
(function (OutOfBoundsRegionAxis) {
    OutOfBoundsRegionAxis[OutOfBoundsRegionAxis["Start"] = -2] = "Start";
    OutOfBoundsRegionAxis[OutOfBoundsRegionAxis["StartPadding"] = -1] = "StartPadding";
    OutOfBoundsRegionAxis[OutOfBoundsRegionAxis["Center"] = 0] = "Center";
    OutOfBoundsRegionAxis[OutOfBoundsRegionAxis["EndPadding"] = 1] = "EndPadding";
    OutOfBoundsRegionAxis[OutOfBoundsRegionAxis["End"] = 2] = "End";
})(OutOfBoundsRegionAxis || (OutOfBoundsRegionAxis = {}));
function mouseEventArgsAreEqual(args, other) {
    if (args === other)
        return true;
    if (args?.kind === "out-of-bounds") {
        return (args?.kind === other?.kind &&
            args?.location[0] === other?.location[0] &&
            args?.location[1] === other?.location[1] &&
            args?.region[0] === other?.region[0] &&
            args?.region[1] === other?.region[1]);
    }
    return (args?.kind === other?.kind &&
        args?.location[0] === other?.location[0] &&
        args?.location[1] === other?.location[1]);
}
//# sourceMappingURL=event-args.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cellIsInRange: () => (/* binding */ cellIsInRange),
/* harmony export */   cellIsSelected: () => (/* binding */ cellIsSelected),
/* harmony export */   computeBounds: () => (/* binding */ computeBounds),
/* harmony export */   drawLastUpdateUnderlay: () => (/* binding */ drawLastUpdateUnderlay),
/* harmony export */   drawMenuDots: () => (/* binding */ drawMenuDots),
/* harmony export */   drawTextCell: () => (/* binding */ drawTextCell),
/* harmony export */   drawTextCellExternal: () => (/* binding */ drawTextCellExternal),
/* harmony export */   getColumnIndexForX: () => (/* binding */ getColumnIndexForX),
/* harmony export */   getEffectiveColumns: () => (/* binding */ getEffectiveColumns),
/* harmony export */   getEmHeight: () => (/* binding */ getEmHeight),
/* harmony export */   getFreezeTrailingHeight: () => (/* binding */ getFreezeTrailingHeight),
/* harmony export */   getMeasuredTextCache: () => (/* binding */ getMeasuredTextCache),
/* harmony export */   getMiddleCenterBias: () => (/* binding */ getMiddleCenterBias),
/* harmony export */   getRowIndexForY: () => (/* binding */ getRowIndexForY),
/* harmony export */   getStickyWidth: () => (/* binding */ getStickyWidth),
/* harmony export */   gridSelectionHasItem: () => (/* binding */ gridSelectionHasItem),
/* harmony export */   isGroupEqual: () => (/* binding */ isGroupEqual),
/* harmony export */   itemIsInRect: () => (/* binding */ itemIsInRect),
/* harmony export */   itemsAreEqual: () => (/* binding */ itemsAreEqual),
/* harmony export */   measureTextCached: () => (/* binding */ measureTextCached),
/* harmony export */   prepTextCell: () => (/* binding */ prepTextCell),
/* harmony export */   rectBottomRight: () => (/* binding */ rectBottomRight),
/* harmony export */   remapForDnDState: () => (/* binding */ remapForDnDState),
/* harmony export */   roundedPoly: () => (/* binding */ roundedPoly),
/* harmony export */   roundedRect: () => (/* binding */ roundedRect),
/* harmony export */   useMappedColumns: () => (/* binding */ useMappedColumns)
/* harmony export */ });
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var canvas_hypertxt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/canvas-hypertxt/dist/js/index.js");




function useMappedColumns(columns, freezeColumns) {
    return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => columns.map((c, i) => ({
        group: c.group,
        grow: c.grow,
        hasMenu: c.hasMenu,
        icon: c.icon,
        id: c.id,
        menuIcon: c.menuIcon,
        overlayIcon: c.overlayIcon,
        sourceIndex: i,
        sticky: i < freezeColumns,
        style: c.style,
        themeOverride: c.themeOverride,
        title: c.title,
        trailingRowOptions: c.trailingRowOptions,
        width: c.width,
        growOffset: c.growOffset,
        rowMarker: c.rowMarker,
        rowMarkerChecked: c.rowMarkerChecked,
    })), [columns, freezeColumns]);
}
function gridSelectionHasItem(sel, item) {
    const [col, row] = item;
    if (sel.columns.hasIndex(col) || sel.rows.hasIndex(row))
        return true;
    if (sel.current !== undefined) {
        if (itemsAreEqual(sel.current.cell, item))
            return true;
        const toCheck = [sel.current.range, ...sel.current.rangeStack]; // FIXME: pointless alloc
        for (const r of toCheck) {
            // dont we have a function for this?
            if (col >= r.x && col < r.x + r.width && row >= r.y && row < r.y + r.height)
                return true;
        }
    }
    return false;
}
function isGroupEqual(left, right) {
    return (left ?? "") === (right ?? "");
}
function cellIsSelected(location, cell, selection) {
    if (selection.current === undefined)
        return false;
    if (location[1] !== selection.current.cell[1])
        return false;
    if (cell.span === undefined) {
        return selection.current.cell[0] === location[0];
    }
    return selection.current.cell[0] >= cell.span[0] && selection.current.cell[0] <= cell.span[1];
}
function itemIsInRect(location, rect) {
    const [x, y] = location;
    return x >= rect.x && x < rect.x + rect.width && y >= rect.y && y < rect.y + rect.height;
}
function itemsAreEqual(a, b) {
    return a?.[0] === b?.[0] && a?.[1] === b?.[1];
}
function rectBottomRight(rect) {
    return [rect.x + rect.width - 1, rect.y + rect.height - 1];
}
function cellIsInRect(location, cell, rect) {
    const startX = rect.x;
    const endX = rect.x + rect.width - 1;
    const startY = rect.y;
    const endY = rect.y + rect.height - 1;
    const [cellCol, cellRow] = location;
    if (cellRow < startY || cellRow > endY)
        return false;
    if (cell.span === undefined) {
        return cellCol >= startX && cellCol <= endX;
    }
    const [spanStart, spanEnd] = cell.span;
    return ((spanStart >= startX && spanStart <= endX) ||
        (spanEnd >= startX && spanStart <= endX) ||
        (spanStart < startX && spanEnd > endX));
}
function cellIsInRange(location, cell, selection, includeSingleSelection) {
    let result = 0;
    if (selection.current === undefined)
        return result;
    const range = selection.current.range;
    if ((includeSingleSelection || range.height * range.width > 1) && cellIsInRect(location, cell, range)) {
        result++;
    }
    for (const r of selection.current.rangeStack) {
        if (cellIsInRect(location, cell, r)) {
            result++;
        }
    }
    return result;
}
function remapForDnDState(columns, dndState) {
    let mappedCols = columns;
    if (dndState !== undefined) {
        let writable = [...columns];
        const temp = mappedCols[dndState.src];
        if (dndState.src > dndState.dest) {
            writable.splice(dndState.src, 1);
            writable.splice(dndState.dest, 0, temp);
        }
        else {
            writable.splice(dndState.dest + 1, 0, temp);
            writable.splice(dndState.src, 1);
        }
        writable = writable.map((c, i) => ({
            ...c,
            sticky: columns[i].sticky,
        }));
        mappedCols = writable;
    }
    return mappedCols;
}
function getStickyWidth(columns, dndState) {
    let result = 0;
    const remapped = remapForDnDState(columns, dndState);
    for (let i = 0; i < remapped.length; i++) {
        const c = remapped[i];
        if (c.sticky)
            result += c.width;
        else
            break;
    }
    return result;
}
function getFreezeTrailingHeight(rows, freezeTrailingRows, getRowHeight) {
    if (typeof getRowHeight === "number") {
        return freezeTrailingRows * getRowHeight;
    }
    else {
        let result = 0;
        for (let i = rows - freezeTrailingRows; i < rows; i++) {
            result += getRowHeight(i);
        }
        return result;
    }
}
function getEffectiveColumns(columns, cellXOffset, width, dndState, tx) {
    const mappedCols = remapForDnDState(columns, dndState);
    const sticky = [];
    for (const c of mappedCols) {
        if (c.sticky) {
            sticky.push(c);
        }
        else {
            break;
        }
    }
    if (sticky.length > 0) {
        for (const c of sticky) {
            width -= c.width;
        }
    }
    let endIndex = cellXOffset;
    let curX = tx ?? 0;
    while (curX <= width && endIndex < mappedCols.length) {
        curX += mappedCols[endIndex].width;
        endIndex++;
    }
    for (let i = cellXOffset; i < endIndex; i++) {
        const c = mappedCols[i];
        if (!c.sticky) {
            sticky.push(c);
        }
    }
    return sticky;
}
function getColumnIndexForX(targetX, effectiveColumns, translateX) {
    let x = 0;
    for (const c of effectiveColumns) {
        const cx = c.sticky ? x : x + (translateX ?? 0);
        if (targetX <= cx + c.width) {
            return c.sourceIndex;
        }
        x += c.width;
    }
    return -1;
}
function getRowIndexForY(targetY, height, hasGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, freezeTrailingRows) {
    const totalHeaderHeight = headerHeight + groupHeaderHeight;
    if (hasGroups && targetY <= groupHeaderHeight)
        return -2;
    if (targetY <= totalHeaderHeight)
        return -1;
    let y = height;
    for (let fr = 0; fr < freezeTrailingRows; fr++) {
        const row = rows - 1 - fr;
        const rh = typeof rowHeight === "number" ? rowHeight : rowHeight(row);
        y -= rh;
        if (targetY >= y) {
            return row;
        }
    }
    const effectiveRows = rows - freezeTrailingRows;
    const ty = targetY - (translateY ?? 0);
    if (typeof rowHeight === "number") {
        const target = Math.floor((ty - totalHeaderHeight) / rowHeight) + cellYOffset;
        if (target >= effectiveRows)
            return undefined;
        return target;
    }
    else {
        let curY = totalHeaderHeight;
        for (let i = cellYOffset; i < effectiveRows; i++) {
            const rh = rowHeight(i);
            if (ty <= curY + rh)
                return i;
            curY += rh;
        }
        return undefined;
    }
}
let metricsSize = 0;
let metricsCache = {};
const isSSR = typeof window === "undefined";
async function clearCacheOnLoad() {
    if (isSSR || document?.fonts?.ready === undefined)
        return;
    await document.fonts.ready;
    metricsSize = 0;
    metricsCache = {};
    (0,canvas_hypertxt__WEBPACK_IMPORTED_MODULE_2__.clearCache)();
}
void clearCacheOnLoad();
function makeCacheKey(s, ctx, baseline, font) {
    return `${s}_${font ?? ctx?.font}_${baseline}`;
}
/** @category Drawing */
function measureTextCached(s, ctx, font, baseline = "middle") {
    const key = makeCacheKey(s, ctx, baseline, font);
    let metrics = metricsCache[key];
    if (metrics === undefined) {
        metrics = ctx.measureText(s);
        metricsCache[key] = metrics;
        metricsSize++;
    }
    if (metricsSize > 10000) {
        metricsCache = {};
        metricsSize = 0;
    }
    return metrics;
}
function getMeasuredTextCache(s, font) {
    const key = makeCacheKey(s, undefined, "middle", font);
    return metricsCache[key];
}
/** @category Drawing */
function getMiddleCenterBias(ctx, font) {
    if (typeof font !== "string") {
        font = font.baseFontFull;
    }
    return getMiddleCenterBiasInner(ctx, font);
}
function loadMetric(ctx, baseline) {
    const sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    ctx.save();
    ctx.textBaseline = baseline;
    const result = ctx.measureText(sample);
    ctx.restore();
    return result;
}
const biasCache = [];
function getMiddleCenterBiasInner(ctx, font) {
    for (const x of biasCache) {
        if (x.key === font)
            return x.val;
    }
    const alphabeticMetrics = loadMetric(ctx, "alphabetic");
    const middleMetrics = loadMetric(ctx, "middle");
    const bias = -(middleMetrics.actualBoundingBoxDescent - alphabeticMetrics.actualBoundingBoxDescent) +
        alphabeticMetrics.actualBoundingBoxAscent / 2;
    biasCache.push({
        key: font,
        val: bias,
    });
    return bias;
}
function drawLastUpdateUnderlay(args, lastUpdate, frameTime, lastPrep, isLastCol, isLastRow) {
    const { ctx, rect, theme } = args;
    let progress = Number.MAX_SAFE_INTEGER;
    const animTime = 500;
    if (lastUpdate !== undefined) {
        progress = frameTime - lastUpdate;
        if (progress < animTime) {
            const fade = 1 - progress / animTime;
            ctx.globalAlpha = fade;
            ctx.fillStyle = theme.bgSearchResult;
            ctx.fillRect(rect.x + 1, rect.y + 1, rect.width - (isLastCol ? 2 : 1), rect.height - (isLastRow ? 2 : 1));
            ctx.globalAlpha = 1;
            if (lastPrep !== undefined) {
                lastPrep.fillStyle = theme.bgSearchResult;
            }
        }
    }
    return progress < animTime;
}
function prepTextCell(args, lastPrep, overrideColor) {
    const { ctx, theme } = args;
    const result = lastPrep ?? {};
    const newFill = overrideColor ?? theme.textDark;
    if (newFill !== result.fillStyle) {
        ctx.fillStyle = newFill;
        result.fillStyle = newFill;
    }
    return result;
}
/** @category Drawing */
function drawTextCellExternal(args, data, contentAlign) {
    const { rect, ctx, theme } = args;
    ctx.fillStyle = theme.textDark;
    drawTextCell({
        ctx: ctx,
        rect,
        theme: theme,
    }, data, contentAlign);
}
function drawSingleTextLine(ctx, data, x, y, w, h, bias, theme, contentAlign) {
    if (contentAlign === "right") {
        ctx.fillText(data, x + w - (theme.cellHorizontalPadding + 0.5), y + h / 2 + bias);
    }
    else if (contentAlign === "center") {
        ctx.fillText(data, x + w / 2, y + h / 2 + bias);
    }
    else {
        ctx.fillText(data, x + theme.cellHorizontalPadding + 0.5, y + h / 2 + bias);
    }
}
function getEmHeight(ctx, fontStyle) {
    const textMetrics = measureTextCached("ABCi09jgqpy", ctx, fontStyle); // do not question the magic string
    return textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
}
function truncateString(data, w) {
    if (data.includes("\n")) {
        // new lines are rare and split is relatively expensive compared to the search
        // it pays off to not do the split contantly. More accurately... it pays off not to run the regex.
        // what even is the point of this? So what if there is a /r at the end of a line? It wont be drawn anyway.
        data = data.split(/\r?\n/, 1)[0];
    }
    const max = w / 4; // no need to round, slice will just truncate this
    if (data.length > max) {
        data = data.slice(0, max);
    }
    return data;
}
function drawMultiLineText(ctx, data, x, y, w, h, bias, theme, contentAlign, hyperWrapping) {
    const fontStyle = theme.baseFontFull;
    const split = (0,canvas_hypertxt__WEBPACK_IMPORTED_MODULE_2__.split)(ctx, data, fontStyle, w - theme.cellHorizontalPadding * 2, hyperWrapping ?? false);
    const emHeight = getEmHeight(ctx, fontStyle);
    const lineHeight = theme.lineHeight * emHeight;
    const actualHeight = emHeight + lineHeight * (split.length - 1);
    const mustClip = actualHeight + theme.cellVerticalPadding > h;
    if (mustClip) {
        // well now we have to clip because we might render outside the cell vertically
        ctx.save();
        ctx.rect(x, y, w, h);
        ctx.clip();
    }
    const optimalY = y + h / 2 - actualHeight / 2;
    let drawY = Math.max(y + theme.cellVerticalPadding, optimalY);
    for (const line of split) {
        drawSingleTextLine(ctx, line, x, drawY, w, emHeight, bias, theme, contentAlign);
        drawY += lineHeight;
        if (drawY > y + h)
            break;
    }
    if (mustClip) {
        ctx.restore();
    }
}
/** @category Drawing */
function drawTextCell(args, data, contentAlign, allowWrapping, hyperWrapping) {
    const { ctx, rect, theme } = args;
    const { x, y, width: w, height: h } = rect;
    allowWrapping = allowWrapping ?? false;
    if (!allowWrapping) {
        data = truncateString(data, w);
    }
    const bias = getMiddleCenterBias(ctx, theme);
    const isRtl = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_0__.direction)(data) === "rtl";
    if (contentAlign === undefined && isRtl) {
        contentAlign = "right";
    }
    if (isRtl) {
        ctx.direction = "rtl";
    }
    if (data.length > 0) {
        let changed = false;
        if (contentAlign === "right") {
            // Use right alignment as default for RTL text
            ctx.textAlign = "right";
            changed = true;
        }
        else if (contentAlign !== undefined && contentAlign !== "left") {
            // Since default is start (=left), only apply if alignment is center or right
            ctx.textAlign = contentAlign;
            changed = true;
        }
        if (!allowWrapping) {
            drawSingleTextLine(ctx, data, x, y, w, h, bias, theme, contentAlign);
        }
        else {
            drawMultiLineText(ctx, data, x, y, w, h, bias, theme, contentAlign, hyperWrapping);
        }
        if (changed) {
            // Reset alignment to default
            ctx.textAlign = "start";
        }
        if (isRtl) {
            ctx.direction = "inherit";
        }
    }
}
function roundedRect(ctx, x, y, width, height, radius) {
    if (typeof radius === "number") {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    }
    // restrict radius to a reasonable max
    radius = {
        tl: Math.max(0, Math.min(radius.tl, height / 2, width / 2)),
        tr: Math.max(0, Math.min(radius.tr, height / 2, width / 2)),
        bl: Math.max(0, Math.min(radius.bl, height / 2, width / 2)),
        br: Math.max(0, Math.min(radius.br, height / 2, width / 2)),
    };
    ctx.moveTo(x + radius.tl, y);
    ctx.arcTo(x + width, y, x + width, y + radius.tr, radius.tr);
    ctx.arcTo(x + width, y + height, x + width - radius.br, y + height, radius.br);
    ctx.arcTo(x, y + height, x, y + height - radius.bl, radius.bl);
    ctx.arcTo(x, y, x + radius.tl, y, radius.tl);
}
function drawMenuDots(ctx, dotsX, dotsY) {
    const radius = 1.25;
    ctx.arc(dotsX, dotsY - radius * 3.5, radius, 0, 2 * Math.PI, false);
    ctx.arc(dotsX, dotsY, radius, 0, 2 * Math.PI, false);
    ctx.arc(dotsX, dotsY + radius * 3.5, radius, 0, 2 * Math.PI, false);
}
function roundedPoly(ctx, points, radiusAll) {
    // convert 2 points into vector form, polar form, and normalised
    const asVec = function (p, pp) {
        const vx = pp.x - p.x;
        const vy = pp.y - p.y;
        const vlen = Math.sqrt(vx * vx + vy * vy);
        const vnx = vx / vlen;
        const vny = vy / vlen;
        return {
            x: vx,
            y: pp.y - p.y,
            len: vlen,
            nx: vnx,
            ny: vny,
            ang: Math.atan2(vny, vnx),
        };
    };
    let radius;
    // const v1: Vector = {} as any;
    // const v2: Vector = {} as any;
    const len = points.length;
    let p1 = points[len - 1];
    // for each point
    for (let i = 0; i < len; i++) {
        let p2 = points[i % len];
        const p3 = points[(i + 1) % len];
        //-----------------------------------------
        // Part 1
        const v1 = asVec(p2, p1);
        const v2 = asVec(p2, p3);
        const sinA = v1.nx * v2.ny - v1.ny * v2.nx;
        const sinA90 = v1.nx * v2.nx - v1.ny * -v2.ny;
        let angle = Math.asin(sinA < -1 ? -1 : sinA > 1 ? 1 : sinA);
        //-----------------------------------------
        let radDirection = 1;
        let drawDirection = false;
        if (sinA90 < 0) {
            if (angle < 0) {
                angle = Math.PI + angle;
            }
            else {
                angle = Math.PI - angle;
                radDirection = -1;
                drawDirection = true;
            }
        }
        else {
            if (angle > 0) {
                radDirection = -1;
                drawDirection = true;
            }
        }
        radius = p2.radius !== undefined ? p2.radius : radiusAll;
        //-----------------------------------------
        // Part 2
        const halfAngle = angle / 2;
        //-----------------------------------------
        //-----------------------------------------
        // Part 3
        let lenOut = Math.abs((Math.cos(halfAngle) * radius) / Math.sin(halfAngle));
        //-----------------------------------------
        //-----------------------------------------
        // Special part A
        let cRadius;
        if (lenOut > Math.min(v1.len / 2, v2.len / 2)) {
            lenOut = Math.min(v1.len / 2, v2.len / 2);
            cRadius = Math.abs((lenOut * Math.sin(halfAngle)) / Math.cos(halfAngle));
        }
        else {
            cRadius = radius;
        }
        //-----------------------------------------
        // Part 4
        let x = p2.x + v2.nx * lenOut;
        let y = p2.y + v2.ny * lenOut;
        //-----------------------------------------
        // Part 5
        x += -v2.ny * cRadius * radDirection;
        y += v2.nx * cRadius * radDirection;
        //-----------------------------------------
        // Part 6
        ctx.arc(x, y, cRadius, v1.ang + (Math.PI / 2) * radDirection, v2.ang - (Math.PI / 2) * radDirection, drawDirection);
        //-----------------------------------------
        p1 = p2;
        p2 = p3;
    }
    ctx.closePath();
}
function computeBounds(col, row, width, height, groupHeaderHeight, totalHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, freezeTrailingRows, mappedColumns, rowHeight) {
    const result = {
        x: 0,
        y: totalHeaderHeight + translateY,
        width: 0,
        height: 0,
    };
    if (col >= mappedColumns.length || row >= rows || row < -2 || col < 0) {
        return result;
    }
    const headerHeight = totalHeaderHeight - groupHeaderHeight;
    if (col >= freezeColumns) {
        const dir = cellXOffset > col ? -1 : 1;
        const freezeWidth = getStickyWidth(mappedColumns);
        result.x += freezeWidth + translateX;
        for (let i = cellXOffset; i !== col; i += dir) {
            result.x += mappedColumns[dir === 1 ? i : i - 1].width * dir;
        }
    }
    else {
        for (let i = 0; i < col; i++) {
            result.x += mappedColumns[i].width;
        }
    }
    result.width = mappedColumns[col].width + 1;
    if (row === -1) {
        result.y = groupHeaderHeight;
        result.height = headerHeight;
    }
    else if (row === -2) {
        result.y = 0;
        result.height = groupHeaderHeight;
        let start = col;
        const group = mappedColumns[col].group;
        const sticky = mappedColumns[col].sticky;
        while (start > 0 &&
            isGroupEqual(mappedColumns[start - 1].group, group) &&
            mappedColumns[start - 1].sticky === sticky) {
            const c = mappedColumns[start - 1];
            result.x -= c.width;
            result.width += c.width;
            start--;
        }
        let end = col;
        while (end + 1 < mappedColumns.length &&
            isGroupEqual(mappedColumns[end + 1].group, group) &&
            mappedColumns[end + 1].sticky === sticky) {
            const c = mappedColumns[end + 1];
            result.width += c.width;
            end++;
        }
        if (!sticky) {
            const freezeWidth = getStickyWidth(mappedColumns);
            const clip = result.x - freezeWidth;
            if (clip < 0) {
                result.x -= clip;
                result.width += clip;
            }
            if (result.x + result.width > width) {
                result.width = width - result.x;
            }
        }
    }
    else if (row >= rows - freezeTrailingRows) {
        let dy = rows - row;
        result.y = height;
        while (dy > 0) {
            const r = row + dy - 1;
            result.height = typeof rowHeight === "number" ? rowHeight : rowHeight(r);
            result.y -= result.height;
            dy--;
        }
        result.height += 1;
    }
    else {
        const dir = cellYOffset > row ? -1 : 1;
        if (typeof rowHeight === "number") {
            const delta = row - cellYOffset;
            result.y += delta * rowHeight;
        }
        else {
            for (let r = cellYOffset; r !== row; r += dir) {
                result.y += rowHeight(r) * dir;
            }
        }
        result.height = (typeof rowHeight === "number" ? rowHeight : rowHeight(row)) + 1;
    }
    return result;
}
//# sourceMappingURL=data-grid-lib.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.blit.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blitLastFrame: () => (/* binding */ blitLastFrame),
/* harmony export */   blitResizedCol: () => (/* binding */ blitResizedCol),
/* harmony export */   computeCanBlit: () => (/* binding */ computeCanBlit)
/* harmony export */ });
/* harmony import */ var _common_support_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");
/* harmony import */ var _data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.walk.js");
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable unicorn/no-for-loop */




function blitLastFrame(ctx, blitSource, blitSourceScroll, targetScroll, last, cellXOffset, cellYOffset, translateX, translateY, freezeTrailingRows, width, height, rows, totalHeaderHeight, dpr, mappedColumns, effectiveCols, getRowHeight, doubleBuffer) {
    const drawRegions = [];
    ctx.imageSmoothingEnabled = false;
    const minY = Math.min(last.cellYOffset, cellYOffset);
    const maxY = Math.max(last.cellYOffset, cellYOffset);
    let deltaY = 0;
    if (typeof getRowHeight === "number") {
        deltaY += (maxY - minY) * getRowHeight;
    }
    else {
        for (let i = minY; i < maxY; i++) {
            deltaY += getRowHeight(i);
        }
    }
    if (cellYOffset > last.cellYOffset) {
        deltaY = -deltaY;
    }
    deltaY += translateY - last.translateY;
    const minX = Math.min(last.cellXOffset, cellXOffset);
    const maxX = Math.max(last.cellXOffset, cellXOffset);
    let deltaX = 0;
    for (let i = minX; i < maxX; i++) {
        deltaX += mappedColumns[i].width;
    }
    if (cellXOffset > last.cellXOffset) {
        deltaX = -deltaX;
    }
    deltaX += translateX - last.translateX;
    const stickyWidth = (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getStickyWidth)(effectiveCols);
    if (deltaX !== 0 && deltaY !== 0) {
        return {
            regions: [],
        };
    }
    const freezeTrailingRowsHeight = freezeTrailingRows > 0 ? (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getFreezeTrailingHeight)(rows, freezeTrailingRows, getRowHeight) : 0;
    const blitWidth = width - stickyWidth - Math.abs(deltaX);
    const blitHeight = height - totalHeaderHeight - freezeTrailingRowsHeight - Math.abs(deltaY) - 1;
    if (blitWidth > 150 && blitHeight > 150) {
        const args = {
            sx: 0,
            sy: 0,
            sw: width * dpr,
            sh: height * dpr,
            dx: 0,
            dy: 0,
            dw: width * dpr,
            dh: height * dpr,
        };
        // blit Y
        if (deltaY > 0) {
            // scrolling up
            args.sy = (totalHeaderHeight + 1) * dpr;
            args.sh = blitHeight * dpr;
            args.dy = (deltaY + totalHeaderHeight + 1) * dpr;
            args.dh = blitHeight * dpr;
            drawRegions.push({
                x: 0,
                y: totalHeaderHeight,
                width: width,
                height: deltaY + 1,
            });
        }
        else if (deltaY < 0) {
            // scrolling down
            args.sy = (-deltaY + totalHeaderHeight + 1) * dpr;
            args.sh = blitHeight * dpr;
            args.dy = (totalHeaderHeight + 1) * dpr;
            args.dh = blitHeight * dpr;
            drawRegions.push({
                x: 0,
                y: height + deltaY - freezeTrailingRowsHeight,
                width: width,
                height: -deltaY + freezeTrailingRowsHeight,
            });
        }
        // blit X
        if (deltaX > 0) {
            // pixels moving right
            args.sx = stickyWidth * dpr;
            args.sw = blitWidth * dpr;
            args.dx = (deltaX + stickyWidth) * dpr;
            args.dw = blitWidth * dpr;
            drawRegions.push({
                x: stickyWidth - 1,
                y: 0,
                width: deltaX + 2,
                height: height,
            });
        }
        else if (deltaX < 0) {
            // pixels moving left
            args.sx = (stickyWidth - deltaX) * dpr;
            args.sw = blitWidth * dpr;
            args.dx = stickyWidth * dpr;
            args.dw = blitWidth * dpr;
            drawRegions.push({
                x: width + deltaX,
                y: 0,
                width: -deltaX,
                height: height,
            });
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        if (doubleBuffer) {
            if (stickyWidth > 0 &&
                deltaX !== 0 &&
                deltaY === 0 &&
                (targetScroll === undefined || blitSourceScroll?.[1] !== false)) {
                // When double buffering the freeze columns can be offset by a couple pixels vertically between the two
                // buffers. We don't want to redraw them so we need to make sure to copy them between the buffers.
                const w = stickyWidth * dpr;
                const h = height * dpr;
                ctx.drawImage(blitSource, 0, 0, w, h, 0, 0, w, h);
            }
            if (freezeTrailingRowsHeight > 0 &&
                deltaX === 0 &&
                deltaY !== 0 &&
                (targetScroll === undefined || blitSourceScroll?.[0] !== false)) {
                const y = (height - freezeTrailingRowsHeight) * dpr;
                const w = width * dpr;
                const h = freezeTrailingRowsHeight * dpr;
                ctx.drawImage(blitSource, 0, y, w, h, 0, y, w, h);
            }
        }
        ctx.drawImage(blitSource, args.sx, args.sy, args.sw, args.sh, args.dx, args.dy, args.dw, args.dh);
        ctx.scale(dpr, dpr);
    }
    ctx.imageSmoothingEnabled = true;
    return {
        regions: drawRegions,
    };
}
function blitResizedCol(last, cellXOffset, cellYOffset, translateX, translateY, width, height, totalHeaderHeight, effectiveCols, resizedIndex) {
    const drawRegions = [];
    // ctx.imageSmoothingEnabled = false;
    if (cellXOffset !== last.cellXOffset ||
        cellYOffset !== last.cellYOffset ||
        translateX !== last.translateX ||
        translateY !== last.translateY) {
        return drawRegions;
    }
    (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_2__.walkColumns)(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, _drawY, clipX) => {
        if (c.sourceIndex === resizedIndex) {
            const x = Math.max(drawX, clipX) + 1;
            drawRegions.push({
                x,
                y: 0,
                width: width - x,
                height,
            });
            return true;
        }
    });
    return drawRegions;
}
function computeCanBlit(current, last) {
    if (last === undefined)
        return false;
    if (current.width !== last.width ||
        current.height !== last.height ||
        current.theme !== last.theme ||
        current.headerHeight !== last.headerHeight ||
        current.rowHeight !== last.rowHeight ||
        current.rows !== last.rows ||
        current.freezeColumns !== last.freezeColumns ||
        current.getRowThemeOverride !== last.getRowThemeOverride ||
        current.isFocused !== last.isFocused ||
        current.isResizing !== last.isResizing ||
        current.verticalBorder !== last.verticalBorder ||
        current.getCellContent !== last.getCellContent ||
        current.highlightRegions !== last.highlightRegions ||
        current.selection !== last.selection ||
        current.dragAndDropState !== last.dragAndDropState ||
        current.prelightCells !== last.prelightCells ||
        current.touchMode !== last.touchMode ||
        current.maxScaleFactor !== last.maxScaleFactor) {
        return false;
    }
    if (current.mappedColumns !== last.mappedColumns) {
        if (current.mappedColumns.length > 100 || current.mappedColumns.length !== last.mappedColumns.length) {
            // The array is big, let's just redraw the damned thing rather than check these all. Or the number of cols
            // changed in which case I dont want to figure out what happened.
            return false;
        }
        // We want to know if only one column has resized. If this is the case we can do a special left/right sliding
        // blit. Or just not redraw shit on the left.
        let resized;
        for (let i = 0; i < current.mappedColumns.length; i++) {
            const curCol = current.mappedColumns[i];
            const lastCol = last.mappedColumns[i];
            if ((0,_common_support_js__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(curCol, lastCol))
                continue;
            // two columns changed, abort
            if (resized !== undefined)
                return false;
            if (curCol.width === lastCol.width)
                return false;
            const { width, ...curRest } = curCol;
            const { width: lastWidth, ...lastRest } = lastCol;
            // more than width changed, abort
            if (!(0,_common_support_js__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(curRest, lastRest))
                return false;
            resized = i;
        }
        if (resized === undefined) {
            // we never found a changed column, cool, we can blit
            return true;
        }
        return resized;
    }
    return true;
}
//# sourceMappingURL=data-grid-render.blit.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.cells.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawCell: () => (/* binding */ drawCell),
/* harmony export */   drawCells: () => (/* binding */ drawCells)
/* harmony export */ });
/* harmony import */ var _data_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _common_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/styles.js");
/* harmony import */ var _color_parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/color-parser.js");
/* harmony import */ var _common_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/math.js");
/* harmony import */ var _data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.walk.js");
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable unicorn/no-for-loop */







const loadingCell = {
    kind: _data_grid_types_js__WEBPACK_IMPORTED_MODULE_0__.GridCellKind.Loading,
    allowOverlay: false,
};
// preppable items:
// - font
// - fillStyle
// Column draw loop prep cycle
// - Prep item
// - Prep sets props
// - Prep returns list of cared about props
// - Draw item
// - Loop may set some items, if present in args list, set undefined
// - Prep next item, giving previous result
// - If next item type is different, de-prep
// - Result per column
function drawCells(ctx, effectiveColumns, allColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, disabledRows, isFocused, drawFocus, freezeTrailingRows, hasAppendRow, drawRegions, damage, selection, prelightCells, highlightRegions, imageLoader, spriteManager, hoverValues, hoverInfo, drawCellCallback, hyperWrapping, outerTheme, enqueue, renderStateProvider, getCellRenderer, overrideCursor, minimumCellWidth) {
    let toDraw = damage?.size ?? Number.MAX_SAFE_INTEGER;
    const frameTime = performance.now();
    let font = outerTheme.baseFontFull;
    ctx.font = font;
    const deprepArg = { ctx };
    const cellIndex = [0, 0];
    const freezeTrailingRowsHeight = freezeTrailingRows > 0 ? (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getFreezeTrailingHeight)(rows, freezeTrailingRows, getRowHeight) : 0;
    let result;
    let handledSpans = undefined;
    const skipPoint = (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_5__.getSkipPoint)(drawRegions);
    (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_5__.walkColumns)(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, colDrawStartY, clipX, startRow) => {
        const diff = Math.max(0, clipX - drawX);
        const colDrawX = drawX + diff;
        const colDrawY = totalHeaderHeight + 1;
        const colWidth = c.width - diff;
        const colHeight = height - totalHeaderHeight - 1;
        if (drawRegions.length > 0) {
            let found = false;
            for (let i = 0; i < drawRegions.length; i++) {
                const dr = drawRegions[i];
                if ((0,_common_math_js__WEBPACK_IMPORTED_MODULE_4__.intersectRect)(colDrawX, colDrawY, colWidth, colHeight, dr.x, dr.y, dr.width, dr.height)) {
                    found = true;
                    break;
                }
            }
            if (!found)
                return;
        }
        const reclip = () => {
            ctx.save();
            ctx.beginPath();
            ctx.rect(colDrawX, colDrawY, colWidth, colHeight);
            ctx.clip();
        };
        const colSelected = selection.columns.hasIndex(c.sourceIndex);
        const groupTheme = getGroupDetails(c.group ?? "").overrideTheme;
        const colTheme = c.themeOverride === undefined && groupTheme === undefined
            ? outerTheme
            : (0,_common_styles_js__WEBPACK_IMPORTED_MODULE_2__.mergeAndRealizeTheme)(outerTheme, groupTheme, c.themeOverride);
        const colFont = colTheme.baseFontFull;
        if (colFont !== font) {
            font = colFont;
            ctx.font = colFont;
        }
        reclip();
        let prepResult = undefined;
        (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_5__.walkRowsInCol)(startRow, colDrawStartY, height, rows, getRowHeight, freezeTrailingRows, hasAppendRow, skipPoint, (drawY, row, rh, isSticky, isTrailingRow) => {
            if (row < 0)
                return;
            cellIndex[0] = c.sourceIndex;
            cellIndex[1] = row;
            // if (damage !== undefined && !damage.some(d => d[0] === c.sourceIndex && d[1] === row)) {
            //     return;
            // }
            // if (
            //     drawRegions.length > 0 &&
            //     !drawRegions.some(dr => intersectRect(drawX, drawY, c.width, rh, dr.x, dr.y, dr.width, dr.height))
            // ) {
            //     return;
            // }
            // These are dumb versions of the above. I cannot for the life of believe that this matters but this is
            // the tightest part of the draw loop and the allocations above actually has a very measurable impact
            // on performance. For the love of all that is unholy please keep checking this again in the future.
            // As soon as this doesn't have any impact of note go back to the saner looking code. The smoke test
            // here is to scroll to the bottom of a test case first, then scroll back up while profiling and see
            // how many major GC collections you get. These allocate a lot of objects.
            if (damage !== undefined && !damage.has(cellIndex)) {
                return;
            }
            if (drawRegions.length > 0) {
                let found = false;
                for (let i = 0; i < drawRegions.length; i++) {
                    const dr = drawRegions[i];
                    if ((0,_common_math_js__WEBPACK_IMPORTED_MODULE_4__.intersectRect)(drawX, drawY, c.width, rh, dr.x, dr.y, dr.width, dr.height)) {
                        found = true;
                        break;
                    }
                }
                if (!found)
                    return;
            }
            const rowSelected = selection.rows.hasIndex(row);
            const rowDisabled = disabledRows.hasIndex(row);
            const cell = row < rows ? getCellContent(cellIndex) : loadingCell;
            let cellX = drawX;
            let cellWidth = c.width;
            let drawingSpan = false;
            let skipContents = false;
            if (cell.span !== undefined) {
                const [startCol, endCol] = cell.span;
                const spanKey = `${row},${startCol},${endCol},${c.sticky}`; //alloc
                if (handledSpans === undefined)
                    handledSpans = new Set();
                if (!handledSpans.has(spanKey)) {
                    const areas = (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_5__.getSpanBounds)(cell.span, drawX, drawY, c.width, rh, c, allColumns);
                    const area = c.sticky ? areas[0] : areas[1];
                    if (!c.sticky && areas[0] !== undefined) {
                        skipContents = true;
                    }
                    if (area !== undefined) {
                        cellX = area.x;
                        cellWidth = area.width;
                        handledSpans.add(spanKey);
                        ctx.restore();
                        prepResult = undefined;
                        ctx.save();
                        ctx.beginPath();
                        const d = Math.max(0, clipX - area.x);
                        ctx.rect(area.x + d, drawY, area.width - d, rh);
                        if (result === undefined) {
                            result = [];
                        }
                        result.push({
                            x: area.x + d,
                            y: drawY,
                            width: area.width - d,
                            height: rh,
                        });
                        ctx.clip();
                        drawingSpan = true;
                    }
                }
                else {
                    toDraw--;
                    return;
                }
            }
            const rowTheme = getRowThemeOverride?.(row);
            const trailingTheme = isTrailingRow && c.trailingRowOptions?.themeOverride !== undefined
                ? c.trailingRowOptions?.themeOverride
                : undefined;
            const theme = cell.themeOverride === undefined && rowTheme === undefined && trailingTheme === undefined
                ? colTheme
                : (0,_common_styles_js__WEBPACK_IMPORTED_MODULE_2__.mergeAndRealizeTheme)(colTheme, rowTheme, trailingTheme, cell.themeOverride); //alloc
            ctx.beginPath();
            const isSelected = (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.cellIsSelected)(cellIndex, cell, selection);
            let accentCount = (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.cellIsInRange)(cellIndex, cell, selection, drawFocus);
            const spanIsHighlighted = cell.span !== undefined &&
                selection.columns.some(index => cell.span !== undefined && index >= cell.span[0] && index <= cell.span[1] //alloc
                );
            if (isSelected && !isFocused && drawFocus) {
                accentCount = 0;
            }
            else if (isSelected && drawFocus) {
                accentCount = Math.max(accentCount, 1);
            }
            if (spanIsHighlighted) {
                accentCount++;
            }
            if (!isSelected) {
                if (rowSelected)
                    accentCount++;
                if (colSelected && !isTrailingRow)
                    accentCount++;
            }
            const bgCell = cell.kind === _data_grid_types_js__WEBPACK_IMPORTED_MODULE_0__.GridCellKind.Protected ? theme.bgCellMedium : theme.bgCell;
            let fill;
            if (isSticky || bgCell !== outerTheme.bgCell) {
                fill = (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_3__.blend)(bgCell, fill);
            }
            if (accentCount > 0 || rowDisabled) {
                if (rowDisabled) {
                    fill = (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_3__.blend)(theme.bgHeader, fill);
                }
                for (let i = 0; i < accentCount; i++) {
                    fill = (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_3__.blend)(theme.accentLight, fill);
                }
            }
            else if (prelightCells !== undefined) {
                for (const pre of prelightCells) {
                    if (pre[0] === c.sourceIndex && pre[1] === row) {
                        fill = (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_3__.blend)(theme.bgSearchResult, fill);
                        break;
                    }
                }
            }
            if (highlightRegions !== undefined) {
                for (let i = 0; i < highlightRegions.length; i++) {
                    const region = highlightRegions[i];
                    const r = region.range;
                    if (region.style !== "solid-outline" &&
                        r.x <= c.sourceIndex &&
                        c.sourceIndex < r.x + r.width &&
                        r.y <= row &&
                        row < r.y + r.height) {
                        fill = (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_3__.blend)(region.color, fill);
                    }
                }
            }
            let didDamageClip = false;
            if (damage !== undefined) {
                // we want to clip each cell individually rather than form a super clip region. The reason for
                // this is passing too many clip regions to the GPU at once can cause a performance hit. This
                // allows us to damage a large number of cells at once without issue.
                const top = drawY + 1;
                const bottom = isSticky
                    ? top + rh - 1
                    : Math.min(top + rh - 1, height - freezeTrailingRowsHeight);
                const h = bottom - top;
                // however, not clipping at all is even better. We want to clip if we are the left most col
                // or overlapping the bottom clip area.
                if (h !== rh - 1 || cellX + 1 <= clipX) {
                    didDamageClip = true;
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(cellX + 1, top, cellWidth - 1, h);
                    ctx.clip();
                }
                // we also need to make sure to wipe the contents. Since the fill can do that lets repurpose
                // that call to avoid an extra draw call.
                fill = fill === undefined ? theme.bgCell : (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_3__.blend)(fill, theme.bgCell);
            }
            const isLastColumn = c.sourceIndex === allColumns.length - 1;
            const isLastRow = row === rows - 1;
            if (fill !== undefined) {
                ctx.fillStyle = fill;
                if (prepResult !== undefined) {
                    prepResult.fillStyle = fill;
                }
                if (damage !== undefined) {
                    // this accounts for the fill handle outline being drawn inset on these cells. We do this
                    // because technically the bottom right corner of the outline are on other cells.
                    ctx.fillRect(cellX + 1, drawY + 1, cellWidth - (isLastColumn ? 2 : 1), rh - (isLastRow ? 2 : 1));
                }
                else {
                    ctx.fillRect(cellX, drawY, cellWidth, rh);
                }
            }
            if (cell.style === "faded") {
                ctx.globalAlpha = 0.6;
            }
            let hoverValue;
            for (let i = 0; i < hoverValues.length; i++) {
                const hv = hoverValues[i];
                if (hv.item[0] === c.sourceIndex && hv.item[1] === row) {
                    hoverValue = hv;
                    break;
                }
            }
            if (cellWidth > minimumCellWidth && !skipContents) {
                const cellFont = theme.baseFontFull;
                if (cellFont !== font) {
                    ctx.font = cellFont;
                    font = cellFont;
                }
                prepResult = drawCell(ctx, cell, c.sourceIndex, row, isLastColumn, isLastRow, cellX, drawY, cellWidth, rh, accentCount > 0, theme, fill ?? theme.bgCell, imageLoader, spriteManager, hoverValue?.hoverAmount ?? 0, hoverInfo, hyperWrapping, frameTime, drawCellCallback, prepResult, enqueue, renderStateProvider, getCellRenderer, overrideCursor);
            }
            if (didDamageClip) {
                ctx.restore();
            }
            if (cell.style === "faded") {
                ctx.globalAlpha = 1;
            }
            toDraw--;
            if (drawingSpan) {
                ctx.restore();
                prepResult?.deprep?.(deprepArg);
                prepResult = undefined;
                reclip();
                font = colFont;
                ctx.font = colFont;
            }
            return toDraw <= 0;
        });
        ctx.restore();
        return toDraw <= 0;
    });
    return result;
}
const allocatedItem = [0, 0];
const reusableRect = { x: 0, y: 0, width: 0, height: 0 };
const drawState = [undefined, () => undefined];
let animationFrameRequested = false;
function animRequest() {
    animationFrameRequested = true;
}
function drawCell(ctx, cell, col, row, isLastCol, isLastRow, x, y, w, h, highlighted, theme, finalCellFillColor, imageLoader, spriteManager, hoverAmount, hoverInfo, hyperWrapping, frameTime, drawCellCallback, lastPrep, enqueue, renderStateProvider, getCellRenderer, overrideCursor) {
    let hoverX;
    let hoverY;
    if (hoverInfo !== undefined && hoverInfo[0][0] === col && hoverInfo[0][1] === row) {
        hoverX = hoverInfo[1][0];
        hoverY = hoverInfo[1][1];
    }
    let result = undefined;
    allocatedItem[0] = col;
    allocatedItem[1] = row;
    reusableRect.x = x;
    reusableRect.y = y;
    reusableRect.width = w;
    reusableRect.height = h;
    drawState[0] = renderStateProvider.getValue(allocatedItem);
    drawState[1] = (val) => renderStateProvider.setValue(allocatedItem, val); //alloc
    animationFrameRequested = false;
    const args = {
        //alloc
        ctx,
        theme,
        col,
        row,
        cell,
        rect: reusableRect,
        highlighted,
        cellFillColor: finalCellFillColor,
        hoverAmount,
        frameTime,
        hoverX,
        drawState,
        hoverY,
        imageLoader,
        spriteManager,
        hyperWrapping,
        overrideCursor: hoverX !== undefined ? overrideCursor : undefined,
        requestAnimationFrame: animRequest,
    };
    const needsAnim = (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.drawLastUpdateUnderlay)(args, cell.lastUpdated, frameTime, lastPrep, isLastCol, isLastRow);
    const r = getCellRenderer(cell);
    if (r !== undefined) {
        if (lastPrep?.renderer !== r) {
            lastPrep?.deprep?.(args);
            lastPrep = undefined;
        }
        const partialPrepResult = r.drawPrep?.(args, lastPrep);
        if (drawCellCallback !== undefined && !(0,_data_grid_types_js__WEBPACK_IMPORTED_MODULE_0__.isInnerOnlyCell)(args.cell)) {
            drawCellCallback(args, () => r.draw(args, cell));
        }
        else {
            r.draw(args, cell);
        }
        result =
            partialPrepResult === undefined
                ? undefined
                : {
                    deprep: partialPrepResult?.deprep,
                    fillStyle: partialPrepResult?.fillStyle,
                    font: partialPrepResult?.font,
                    renderer: r,
                };
    }
    if (needsAnim || animationFrameRequested)
        enqueue?.(allocatedItem);
    return result;
}
//# sourceMappingURL=data-grid-render.cells.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.header.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawGridHeaders: () => (/* binding */ drawGridHeaders),
/* harmony export */   drawGroups: () => (/* binding */ drawGroups),
/* harmony export */   drawHeader: () => (/* binding */ drawHeader),
/* harmony export */   getActionBoundsForGroup: () => (/* binding */ getActionBoundsForGroup),
/* harmony export */   getHeaderMenuBounds: () => (/* binding */ getHeaderMenuBounds)
/* harmony export */ });
/* harmony import */ var _common_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/math.js");
/* harmony import */ var _common_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/styles.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* harmony import */ var _color_parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/color-parser.js");
/* harmony import */ var _data_grid_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _data_grid_lib_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.walk.js");
/* harmony import */ var _draw_checkbox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/draw-checkbox.js");








function drawGridHeaders(ctx, effectiveCols, enableGroups, hovered, width, translateX, headerHeight, groupHeaderHeight, dragAndDropState, isResizing, selection, outerTheme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage, drawHeaderCallback, touchMode) {
    const totalHeaderHeight = headerHeight + groupHeaderHeight;
    if (totalHeaderHeight <= 0)
        return;
    ctx.fillStyle = outerTheme.bgHeader;
    ctx.fillRect(0, 0, width, totalHeaderHeight);
    const [hCol, hRow] = hovered?.[0] ?? [];
    const font = outerTheme.headerFontFull;
    // Assinging the context font too much can be expensive, it can be worth it to minimze this
    ctx.font = font;
    (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_6__.walkColumns)(effectiveCols, 0, translateX, 0, totalHeaderHeight, (c, x, _y, clipX) => {
        if (damage !== undefined && !damage.has([c.sourceIndex, -1]))
            return;
        const diff = Math.max(0, clipX - x);
        ctx.save();
        ctx.beginPath();
        ctx.rect(x + diff, groupHeaderHeight, c.width - diff, headerHeight);
        ctx.clip();
        const groupTheme = getGroupDetails(c.group ?? "").overrideTheme;
        const theme = c.themeOverride === undefined && groupTheme === undefined
            ? outerTheme
            : (0,_common_styles_js__WEBPACK_IMPORTED_MODULE_1__.mergeAndRealizeTheme)(outerTheme, groupTheme, c.themeOverride);
        if (theme.bgHeader !== outerTheme.bgHeader) {
            ctx.fillStyle = theme.bgHeader;
            ctx.fill();
        }
        if (theme !== outerTheme) {
            ctx.font = theme.baseFontFull;
        }
        const selected = selection.columns.hasIndex(c.sourceIndex);
        const noHover = dragAndDropState !== undefined || isResizing;
        const hoveredBoolean = !noHover && hRow === -1 && hCol === c.sourceIndex;
        const hover = noHover
            ? 0
            : hoverValues.find(s => s.item[0] === c.sourceIndex && s.item[1] === -1)?.hoverAmount ?? 0;
        const hasSelectedCell = selection?.current !== undefined && selection.current.cell[0] === c.sourceIndex;
        const bgFillStyle = selected ? theme.accentColor : hasSelectedCell ? theme.bgHeaderHasFocus : theme.bgHeader;
        const y = enableGroups ? groupHeaderHeight : 0;
        const xOffset = c.sourceIndex === 0 ? 0 : 1;
        if (selected) {
            ctx.fillStyle = bgFillStyle;
            ctx.fillRect(x + xOffset, y, c.width - xOffset, headerHeight);
        }
        else if (hasSelectedCell || hover > 0) {
            ctx.beginPath();
            ctx.rect(x + xOffset, y, c.width - xOffset, headerHeight);
            if (hasSelectedCell) {
                ctx.fillStyle = theme.bgHeaderHasFocus;
                ctx.fill();
            }
            if (hover > 0) {
                ctx.globalAlpha = hover;
                ctx.fillStyle = theme.bgHeaderHovered;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }
        drawHeader(ctx, x, y, c.width, headerHeight, c, selected, theme, hoveredBoolean, hasSelectedCell, hover, spriteManager, drawHeaderCallback, touchMode);
        ctx.restore();
    });
    if (enableGroups) {
        drawGroups(ctx, effectiveCols, width, translateX, groupHeaderHeight, hovered, outerTheme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage);
    }
}
function drawGroups(ctx, effectiveCols, width, translateX, groupHeaderHeight, hovered, theme, spriteManager, _hoverValues, verticalBorder, getGroupDetails, damage) {
    const xPad = 8;
    const [hCol, hRow] = hovered?.[0] ?? [];
    let finalX = 0;
    (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_6__.walkGroups)(effectiveCols, width, translateX, groupHeaderHeight, (span, groupName, x, y, w, h) => {
        if (damage !== undefined &&
            !damage.hasItemInRectangle({
                x: span[0],
                y: -2,
                width: span[1] - span[0] + 1,
                height: 1,
            }))
            return;
        ctx.save();
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.clip();
        const group = getGroupDetails(groupName);
        const groupTheme = group?.overrideTheme === undefined ? theme : (0,_common_styles_js__WEBPACK_IMPORTED_MODULE_1__.mergeAndRealizeTheme)(theme, group.overrideTheme);
        const isHovered = hRow === -2 && hCol !== undefined && hCol >= span[0] && hCol <= span[1];
        const fillColor = isHovered ? groupTheme.bgHeaderHovered : groupTheme.bgHeader;
        if (fillColor !== theme.bgHeader) {
            ctx.fillStyle = fillColor;
            ctx.fill();
        }
        ctx.fillStyle = groupTheme.textGroupHeader ?? groupTheme.textHeader;
        if (group !== undefined) {
            let drawX = x;
            if (group.icon !== undefined) {
                spriteManager.drawSprite(group.icon, "normal", ctx, drawX + xPad, (groupHeaderHeight - 20) / 2, 20, groupTheme);
                drawX += 26;
            }
            ctx.fillText(group.name, drawX + xPad, groupHeaderHeight / 2 + (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_5__.getMiddleCenterBias)(ctx, theme.headerFontFull));
            if (group.actions !== undefined && isHovered) {
                const actionBoxes = getActionBoundsForGroup({ x, y, width: w, height: h }, group.actions);
                ctx.beginPath();
                const fadeStartX = actionBoxes[0].x - 10;
                const fadeWidth = x + w - fadeStartX;
                ctx.rect(fadeStartX, 0, fadeWidth, groupHeaderHeight);
                const grad = ctx.createLinearGradient(fadeStartX, 0, fadeStartX + fadeWidth, 0);
                const trans = (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_3__.withAlpha)(fillColor, 0);
                grad.addColorStop(0, trans);
                grad.addColorStop(10 / fadeWidth, fillColor);
                grad.addColorStop(1, fillColor);
                ctx.fillStyle = grad;
                ctx.fill();
                ctx.globalAlpha = 0.6;
                // eslint-disable-next-line prefer-const
                const [mouseX, mouseY] = hovered?.[1] ?? [-1, -1];
                for (let i = 0; i < group.actions.length; i++) {
                    const action = group.actions[i];
                    const box = actionBoxes[i];
                    const actionHovered = (0,_common_math_js__WEBPACK_IMPORTED_MODULE_0__.pointInRect)(box, mouseX + x, mouseY);
                    if (actionHovered) {
                        ctx.globalAlpha = 1;
                    }
                    spriteManager.drawSprite(action.icon, "normal", ctx, box.x + box.width / 2 - 10, box.y + box.height / 2 - 10, 20, groupTheme);
                    if (actionHovered) {
                        ctx.globalAlpha = 0.6;
                    }
                }
                ctx.globalAlpha = 1;
            }
        }
        if (x !== 0 && verticalBorder(span[0])) {
            ctx.beginPath();
            ctx.moveTo(x + 0.5, 0);
            ctx.lineTo(x + 0.5, groupHeaderHeight);
            ctx.strokeStyle = theme.borderColor;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        ctx.restore();
        finalX = x + w;
    });
    ctx.beginPath();
    ctx.moveTo(finalX + 0.5, 0);
    ctx.lineTo(finalX + 0.5, groupHeaderHeight);
    ctx.moveTo(0, groupHeaderHeight + 0.5);
    ctx.lineTo(width, groupHeaderHeight + 0.5);
    ctx.strokeStyle = theme.borderColor;
    ctx.lineWidth = 1;
    ctx.stroke();
}
const menuButtonSize = 30;
function getHeaderMenuBounds(x, y, width, height, isRtl) {
    if (isRtl)
        return { x, y, width: menuButtonSize, height: Math.min(menuButtonSize, height) };
    return {
        x: x + width - menuButtonSize,
        y: Math.max(y, y + height / 2 - menuButtonSize / 2),
        width: menuButtonSize,
        height: Math.min(menuButtonSize, height),
    };
}
function getActionBoundsForGroup(box, actions) {
    const result = [];
    let x = box.x + box.width - 26 * actions.length;
    const y = box.y + box.height / 2 - 13;
    const height = 26;
    const width = 26;
    for (let i = 0; i < actions.length; i++) {
        result.push({
            x,
            y,
            width,
            height,
        });
        x += 26;
    }
    return result;
}
function drawHeaderInner(ctx, x, y, width, height, c, selected, theme, isHovered, hoverAmount, spriteManager, touchMode, isRtl, menuBounds) {
    if (c.rowMarker !== undefined) {
        const checked = c.rowMarkerChecked;
        if (checked !== true) {
            ctx.globalAlpha = hoverAmount;
        }
        (0,_draw_checkbox_js__WEBPACK_IMPORTED_MODULE_7__.drawCheckbox)(ctx, theme, checked, x, y, width, height, false, undefined, undefined, 18, "center", c.rowMarker);
        if (checked !== true) {
            ctx.globalAlpha = 1;
        }
        return;
    }
    const xPad = theme.cellHorizontalPadding;
    const fillStyle = selected ? theme.textHeaderSelected : theme.textHeader;
    const shouldDrawMenu = c.hasMenu === true && (isHovered || (touchMode && selected));
    const dirScalar = isRtl ? -1 : 1;
    let drawX = isRtl ? x + width - xPad : x + xPad;
    if (c.icon !== undefined) {
        let variant = selected ? "selected" : "normal";
        if (c.style === "highlight") {
            variant = selected ? "selected" : "special";
        }
        const headerSize = theme.headerIconSize;
        spriteManager.drawSprite(c.icon, variant, ctx, isRtl ? drawX - headerSize : drawX, y + (height - headerSize) / 2, headerSize, theme);
        if (c.overlayIcon !== undefined) {
            spriteManager.drawSprite(c.overlayIcon, selected ? "selected" : "special", ctx, isRtl ? drawX - headerSize + 9 : drawX + 9, y + ((height - 18) / 2 + 6), 18, theme);
        }
        drawX += Math.ceil(headerSize * 1.3) * dirScalar;
    }
    if (shouldDrawMenu && c.hasMenu === true && width > 35) {
        const fadeWidth = 35;
        const fadeStart = isRtl ? fadeWidth : width - fadeWidth;
        const fadeEnd = isRtl ? fadeWidth * 0.7 : width - fadeWidth * 0.7;
        const fadeStartPercent = fadeStart / width;
        const fadeEndPercent = fadeEnd / width;
        const grad = ctx.createLinearGradient(x, 0, x + width, 0);
        const trans = (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_3__.withAlpha)(fillStyle, 0);
        grad.addColorStop(isRtl ? 1 : 0, fillStyle);
        grad.addColorStop(fadeStartPercent, fillStyle);
        grad.addColorStop(fadeEndPercent, trans);
        grad.addColorStop(isRtl ? 0 : 1, trans);
        ctx.fillStyle = grad;
    }
    else {
        ctx.fillStyle = fillStyle;
    }
    if (isRtl) {
        ctx.textAlign = "right";
    }
    ctx.fillText(c.title, drawX, y + height / 2 + (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_5__.getMiddleCenterBias)(ctx, theme.headerFontFull));
    if (isRtl) {
        ctx.textAlign = "left";
    }
    if (shouldDrawMenu && c.hasMenu === true) {
        if (c.menuIcon === undefined || c.menuIcon === _data_grid_types_js__WEBPACK_IMPORTED_MODULE_4__.GridColumnMenuIcon.Triangle) {
            // Draw the default triangle menu icon:
            ctx.beginPath();
            const triangleX = menuBounds.x + menuBounds.width / 2 - 5.5;
            const triangleY = menuBounds.y + menuBounds.height / 2 - 3;
            (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_5__.roundedPoly)(ctx, [
                {
                    x: triangleX,
                    y: triangleY,
                },
                {
                    x: triangleX + 11,
                    y: triangleY,
                },
                {
                    x: triangleX + 5.5,
                    y: triangleY + 6,
                },
            ], 1);
            ctx.fillStyle = fillStyle;
            ctx.fill();
        }
        else if (c.menuIcon === _data_grid_types_js__WEBPACK_IMPORTED_MODULE_4__.GridColumnMenuIcon.Dots) {
            // Draw the three dots menu icon:
            ctx.beginPath();
            const dotsX = menuBounds.x + menuBounds.width / 2;
            const dotsY = menuBounds.y + menuBounds.height / 2;
            (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_5__.drawMenuDots)(ctx, dotsX, dotsY);
            ctx.fillStyle = fillStyle;
            ctx.fill();
        }
        else {
            // Assume that the user has specified a valid sprite image as header icon:
            const iconX = menuBounds.x + (menuBounds.width - theme.headerIconSize) / 2;
            const iconY = menuBounds.y + (menuBounds.height - theme.headerIconSize) / 2;
            spriteManager.drawSprite(c.menuIcon, "normal", ctx, iconX, iconY, theme.headerIconSize, theme);
        }
    }
}
function drawHeader(ctx, x, y, width, height, c, selected, theme, isHovered, hasSelectedCell, hoverAmount, spriteManager, drawHeaderCallback, touchMode) {
    const isRtl = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_2__.direction)(c.title) === "rtl";
    const menuBounds = getHeaderMenuBounds(x, y, width, height, isRtl);
    if (drawHeaderCallback !== undefined) {
        drawHeaderCallback({
            ctx,
            theme,
            rect: { x, y, width, height },
            column: c,
            columnIndex: c.sourceIndex,
            isSelected: selected,
            hoverAmount,
            isHovered,
            hasSelectedCell,
            spriteManager,
            menuBounds,
        }, () => drawHeaderInner(ctx, x, y, width, height, c, selected, theme, isHovered, hoverAmount, spriteManager, touchMode, isRtl, menuBounds));
    }
    else {
        drawHeaderInner(ctx, x, y, width, height, c, selected, theme, isHovered, hoverAmount, spriteManager, touchMode, isRtl, menuBounds);
    }
}
//# sourceMappingURL=data-grid-render.header.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawGrid: () => (/* binding */ drawGrid)
/* harmony export */ });
/* harmony import */ var _data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _color_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/color-parser.js");
/* harmony import */ var _common_support_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");
/* harmony import */ var _data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.walk.js");
/* harmony import */ var _data_grid_render_cells_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.cells.js");
/* harmony import */ var _data_grid_render_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.header.js");
/* harmony import */ var _data_grid_render_lines_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.lines.js");
/* harmony import */ var _data_grid_render_blit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.blit.js");
/* harmony import */ var _data_grid_render_rings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid.render.rings.js");
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable unicorn/no-for-loop */











// Future optimization opportunities
// - Create a cache of a buffer used to render the full view of a partially displayed column so that when
//   scrolling horizontally you can simply blit the pre-drawn column instead of continually paying the draw
//   cost as it slides into view.
// - The same as above but for partially displayed rows
// - Blit headers on horizontal scroll
// - Use webworker to load images, helpful with lots of large images
// - Retain mode for drawing cells. Instead of drawing cells as we come across them, first build a data
//   structure which contains all operations to perform, then sort them all by "prep" requirement, then do
//   all like operations at once.
function clipHeaderDamage(ctx, effectiveColumns, width, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, damage) {
    if (damage === undefined || damage.size === 0)
        return;
    ctx.beginPath();
    (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_3__.walkGroups)(effectiveColumns, width, translateX, groupHeaderHeight, (span, _group, x, y, w, h) => {
        const hasItemInSpan = damage.hasItemInRectangle({
            x: span[0],
            y: -2,
            width: span[1] - span[0] + 1,
            height: 1,
        });
        if (hasItemInSpan) {
            ctx.rect(x, y, w, h);
        }
    });
    (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_3__.walkColumns)(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, _colDrawY, clipX) => {
        const diff = Math.max(0, clipX - drawX);
        const finalX = drawX + diff + 1;
        const finalWidth = c.width - diff - 1;
        if (damage.has([c.sourceIndex, -1])) {
            ctx.rect(finalX, groupHeaderHeight, finalWidth, totalHeaderHeight - groupHeaderHeight);
        }
    });
    ctx.clip();
}
function getLastRow(effectiveColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, freezeTrailingRows, hasAppendRow) {
    let result = 0;
    (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_3__.walkColumns)(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (_c, __drawX, colDrawY, _clipX, startRow) => {
        (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_3__.walkRowsInCol)(startRow, colDrawY, height, rows, getRowHeight, freezeTrailingRows, hasAppendRow, undefined, (_drawY, row, _rh, isSticky) => {
            if (!isSticky) {
                result = Math.max(row, result);
            }
        });
        return true;
    });
    return result;
}
function drawGrid(arg, lastArg) {
    const { canvasCtx, headerCanvasCtx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, enableGroups, freezeColumns, dragAndDropState, theme, drawFocus, headerHeight, groupHeaderHeight, disabledRows, rowHeight, verticalBorder, overrideCursor, isResizing, selection, fillHandle, freezeTrailingRows, rows, getCellContent, getGroupDetails, getRowThemeOverride, isFocused, drawHeaderCallback, prelightCells, drawCellCallback, highlightRegions, resizeCol, imageLoader, lastBlitData, hoverValues, hyperWrapping, hoverInfo, spriteManager, maxScaleFactor, hasAppendRow, touchMode, enqueue, renderStateProvider, getCellRenderer, renderStrategy, bufferACtx, bufferBCtx, damage, minimumCellWidth, } = arg;
    if (width === 0 || height === 0)
        return;
    const doubleBuffer = renderStrategy === "double-buffer";
    const dpr = Math.min(maxScaleFactor, Math.ceil(window.devicePixelRatio ?? 1));
    // if we are double buffering we need to make sure we can blit. If we can't we need to redraw the whole thing
    const canBlit = renderStrategy !== "direct" && (0,_data_grid_render_blit_js__WEBPACK_IMPORTED_MODULE_7__.computeCanBlit)(arg, lastArg);
    const canvas = canvasCtx.canvas;
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    }
    const overlayCanvas = headerCanvasCtx.canvas;
    const totalHeaderHeight = enableGroups ? groupHeaderHeight + headerHeight : headerHeight;
    const overlayHeight = totalHeaderHeight + 1; // border
    if (overlayCanvas.width !== width * dpr || overlayCanvas.height !== overlayHeight * dpr) {
        overlayCanvas.width = width * dpr;
        overlayCanvas.height = overlayHeight * dpr;
        overlayCanvas.style.width = width + "px";
        overlayCanvas.style.height = overlayHeight + "px";
    }
    const bufferA = bufferACtx.canvas;
    const bufferB = bufferBCtx.canvas;
    if (doubleBuffer && (bufferA.width !== width * dpr || bufferA.height !== height * dpr)) {
        bufferA.width = width * dpr;
        bufferA.height = height * dpr;
        if (lastBlitData.current !== undefined)
            lastBlitData.current.aBufferScroll = undefined;
    }
    if (doubleBuffer && (bufferB.width !== width * dpr || bufferB.height !== height * dpr)) {
        bufferB.width = width * dpr;
        bufferB.height = height * dpr;
        if (lastBlitData.current !== undefined)
            lastBlitData.current.bBufferScroll = undefined;
    }
    const last = lastBlitData.current;
    if (canBlit === true &&
        cellXOffset === last?.cellXOffset &&
        cellYOffset === last?.cellYOffset &&
        translateX === last?.translateX &&
        translateY === last?.translateY)
        return;
    let mainCtx = null;
    if (doubleBuffer) {
        mainCtx = canvasCtx;
    }
    const overlayCtx = headerCanvasCtx;
    let targetCtx;
    if (!doubleBuffer) {
        targetCtx = canvasCtx;
    }
    else if (damage !== undefined) {
        targetCtx = last?.lastBuffer === "b" ? bufferBCtx : bufferACtx;
    }
    else {
        targetCtx = last?.lastBuffer === "b" ? bufferACtx : bufferBCtx;
    }
    const targetBuffer = targetCtx.canvas;
    const blitSource = doubleBuffer ? (targetBuffer === bufferA ? bufferB : bufferA) : canvas;
    const getRowHeight = typeof rowHeight === "number" ? () => rowHeight : rowHeight;
    overlayCtx.save();
    targetCtx.save();
    overlayCtx.beginPath();
    targetCtx.beginPath();
    overlayCtx.textBaseline = "middle";
    targetCtx.textBaseline = "middle";
    if (dpr !== 1) {
        overlayCtx.scale(dpr, dpr);
        targetCtx.scale(dpr, dpr);
    }
    const effectiveCols = (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.getEffectiveColumns)(mappedColumns, cellXOffset, width, dragAndDropState, translateX);
    let drawRegions = [];
    const mustDrawFocusOnHeader = drawFocus && selection.current?.cell[1] === cellYOffset && translateY === 0;
    let mustDrawHighlightRingsOnHeader = false;
    if (highlightRegions !== undefined) {
        for (const r of highlightRegions) {
            if (r.style !== "no-outline" && r.range.y === cellYOffset && translateY === 0) {
                mustDrawHighlightRingsOnHeader = true;
                break;
            }
        }
    }
    const drawHeaderTexture = () => {
        (0,_data_grid_render_header_js__WEBPACK_IMPORTED_MODULE_5__.drawGridHeaders)(overlayCtx, effectiveCols, enableGroups, hoverInfo, width, translateX, headerHeight, groupHeaderHeight, dragAndDropState, isResizing, selection, theme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage, drawHeaderCallback, touchMode);
        (0,_data_grid_render_lines_js__WEBPACK_IMPORTED_MODULE_6__.drawGridLines)(overlayCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, undefined, undefined, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, freezeTrailingRows, rows, theme, true);
        overlayCtx.beginPath();
        overlayCtx.moveTo(0, overlayHeight - 0.5);
        overlayCtx.lineTo(width, overlayHeight - 0.5);
        overlayCtx.strokeStyle = (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_1__.blend)(theme.headerBottomBorderColor ?? theme.horizontalBorderColor ?? theme.borderColor, theme.bgHeader);
        overlayCtx.stroke();
        if (mustDrawHighlightRingsOnHeader) {
            (0,_data_grid_render_rings_js__WEBPACK_IMPORTED_MODULE_8__.drawHighlightRings)(overlayCtx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, freezeColumns, headerHeight, groupHeaderHeight, rowHeight, freezeTrailingRows, rows, highlightRegions, theme);
        }
        if (mustDrawFocusOnHeader) {
            (0,_data_grid_render_rings_js__WEBPACK_IMPORTED_MODULE_8__.drawFillHandle)(overlayCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selection, getRowHeight, getCellContent, freezeTrailingRows, hasAppendRow, fillHandle, rows);
        }
    };
    // handle damage updates by directly drawing to the target to avoid large blits
    if (damage !== undefined) {
        const viewRegionWidth = effectiveCols[effectiveCols.length - 1].sourceIndex + 1;
        const damageInView = damage.hasItemInRegion([
            {
                x: cellXOffset,
                y: -2,
                width: viewRegionWidth,
                height: 2,
            },
            {
                x: cellXOffset,
                y: cellYOffset,
                width: viewRegionWidth,
                height: 300,
            },
            {
                x: 0,
                y: cellYOffset,
                width: freezeColumns,
                height: 300,
            },
            {
                x: 0,
                y: -2,
                width: freezeColumns,
                height: 2,
            },
            {
                x: cellXOffset,
                y: rows - freezeTrailingRows,
                width: viewRegionWidth,
                height: freezeTrailingRows,
                when: freezeTrailingRows > 0,
            },
        ]);
        const doDamage = (ctx) => {
            (0,_data_grid_render_cells_js__WEBPACK_IMPORTED_MODULE_4__.drawCells)(ctx, effectiveCols, mappedColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, disabledRows, isFocused, drawFocus, freezeTrailingRows, hasAppendRow, drawRegions, damage, selection, prelightCells, highlightRegions, imageLoader, spriteManager, hoverValues, hoverInfo, drawCellCallback, hyperWrapping, theme, enqueue, renderStateProvider, getCellRenderer, overrideCursor, minimumCellWidth);
            const selectionCurrent = selection.current;
            if (fillHandle &&
                drawFocus &&
                selectionCurrent !== undefined &&
                damage.has((0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.rectBottomRight)(selectionCurrent.range))) {
                (0,_data_grid_render_rings_js__WEBPACK_IMPORTED_MODULE_8__.drawFillHandle)(ctx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selection, getRowHeight, getCellContent, freezeTrailingRows, hasAppendRow, fillHandle, rows);
            }
        };
        if (damageInView) {
            doDamage(targetCtx);
            if (mainCtx !== null) {
                mainCtx.save();
                mainCtx.scale(dpr, dpr);
                mainCtx.textBaseline = "middle";
                doDamage(mainCtx);
                mainCtx.restore();
            }
            const doHeaders = damage.hasHeader();
            if (doHeaders) {
                clipHeaderDamage(overlayCtx, effectiveCols, width, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, damage);
                drawHeaderTexture();
            }
        }
        targetCtx.restore();
        overlayCtx.restore();
        return;
    }
    if (canBlit !== true ||
        cellXOffset !== last?.cellXOffset ||
        translateX !== last?.translateX ||
        mustDrawFocusOnHeader !== last?.mustDrawFocusOnHeader ||
        mustDrawHighlightRingsOnHeader !== last?.mustDrawHighlightRingsOnHeader) {
        drawHeaderTexture();
    }
    if (canBlit === true) {
        (0,_common_support_js__WEBPACK_IMPORTED_MODULE_2__.assert)(blitSource !== undefined && last !== undefined);
        const { regions } = (0,_data_grid_render_blit_js__WEBPACK_IMPORTED_MODULE_7__.blitLastFrame)(targetCtx, blitSource, blitSource === bufferA ? last.aBufferScroll : last.bBufferScroll, blitSource === bufferA ? last.bBufferScroll : last.aBufferScroll, last, cellXOffset, cellYOffset, translateX, translateY, freezeTrailingRows, width, height, rows, totalHeaderHeight, dpr, mappedColumns, effectiveCols, rowHeight, doubleBuffer);
        drawRegions = regions;
    }
    else if (canBlit !== false) {
        (0,_common_support_js__WEBPACK_IMPORTED_MODULE_2__.assert)(last !== undefined);
        const resizedCol = canBlit;
        drawRegions = (0,_data_grid_render_blit_js__WEBPACK_IMPORTED_MODULE_7__.blitResizedCol)(last, cellXOffset, cellYOffset, translateX, translateY, width, height, totalHeaderHeight, effectiveCols, resizedCol);
    }
    (0,_data_grid_render_lines_js__WEBPACK_IMPORTED_MODULE_6__.overdrawStickyBoundaries)(targetCtx, effectiveCols, width, height, freezeTrailingRows, rows, verticalBorder, getRowHeight, theme);
    const highlightRedraw = (0,_data_grid_render_rings_js__WEBPACK_IMPORTED_MODULE_8__.drawHighlightRings)(targetCtx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, freezeColumns, headerHeight, groupHeaderHeight, rowHeight, freezeTrailingRows, rows, highlightRegions, theme);
    // the overdraw may have nuked out our focus ring right edge.
    const focusRedraw = drawFocus
        ? (0,_data_grid_render_rings_js__WEBPACK_IMPORTED_MODULE_8__.drawFillHandle)(targetCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selection, getRowHeight, getCellContent, freezeTrailingRows, hasAppendRow, fillHandle, rows)
        : undefined;
    targetCtx.fillStyle = theme.bgCell;
    if (drawRegions.length > 0) {
        targetCtx.beginPath();
        for (const r of drawRegions) {
            targetCtx.rect(r.x, r.y, r.width, r.height);
        }
        targetCtx.clip();
        targetCtx.fill();
        targetCtx.beginPath();
    }
    else {
        targetCtx.fillRect(0, 0, width, height);
    }
    const spans = (0,_data_grid_render_cells_js__WEBPACK_IMPORTED_MODULE_4__.drawCells)(targetCtx, effectiveCols, mappedColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, disabledRows, isFocused, drawFocus, freezeTrailingRows, hasAppendRow, drawRegions, damage, selection, prelightCells, highlightRegions, imageLoader, spriteManager, hoverValues, hoverInfo, drawCellCallback, hyperWrapping, theme, enqueue, renderStateProvider, getCellRenderer, overrideCursor, minimumCellWidth);
    (0,_data_grid_render_lines_js__WEBPACK_IMPORTED_MODULE_6__.drawBlanks)(targetCtx, effectiveCols, mappedColumns, width, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getRowThemeOverride, selection.rows, disabledRows, freezeTrailingRows, hasAppendRow, drawRegions, damage, theme);
    (0,_data_grid_render_lines_js__WEBPACK_IMPORTED_MODULE_6__.drawExtraRowThemes)(targetCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, freezeTrailingRows, rows, theme);
    (0,_data_grid_render_lines_js__WEBPACK_IMPORTED_MODULE_6__.drawGridLines)(targetCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, spans, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, freezeTrailingRows, rows, theme);
    highlightRedraw?.();
    focusRedraw?.();
    if (isResizing) {
        (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_3__.walkColumns)(effectiveCols, 0, translateX, 0, totalHeaderHeight, (c, x) => {
            if (c.sourceIndex === resizeCol) {
                (0,_data_grid_render_rings_js__WEBPACK_IMPORTED_MODULE_8__.drawColumnResizeOutline)(overlayCtx, x + c.width, 0, totalHeaderHeight + 1, (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_1__.blend)(theme.resizeIndicatorColor ?? theme.accentLight, theme.bgHeader));
                (0,_data_grid_render_rings_js__WEBPACK_IMPORTED_MODULE_8__.drawColumnResizeOutline)(targetCtx, x + c.width, totalHeaderHeight, height, (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_1__.blend)(theme.resizeIndicatorColor ?? theme.accentLight, theme.bgCell));
                return true;
            }
            return false;
        });
    }
    if (mainCtx !== null) {
        mainCtx.fillStyle = theme.bgCell;
        mainCtx.fillRect(0, 0, width, height);
        mainCtx.drawImage(targetCtx.canvas, 0, 0);
    }
    const lastRowDrawn = getLastRow(effectiveCols, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, freezeTrailingRows, hasAppendRow);
    imageLoader?.setWindow({
        x: cellXOffset,
        y: cellYOffset,
        width: effectiveCols.length,
        height: lastRowDrawn - cellYOffset,
    }, freezeColumns, Array.from({ length: freezeTrailingRows }, (_, i) => rows - 1 - i));
    const scrollX = last !== undefined && (cellXOffset !== last.cellXOffset || translateX !== last.translateX);
    const scrollY = last !== undefined && (cellYOffset !== last.cellYOffset || translateY !== last.translateY);
    lastBlitData.current = {
        cellXOffset,
        cellYOffset,
        translateX,
        translateY,
        mustDrawFocusOnHeader,
        mustDrawHighlightRingsOnHeader,
        lastBuffer: doubleBuffer ? (targetBuffer === bufferA ? "a" : "b") : undefined,
        aBufferScroll: targetBuffer === bufferA ? [scrollX, scrollY] : last?.aBufferScroll,
        bBufferScroll: targetBuffer === bufferB ? [scrollX, scrollY] : last?.bBufferScroll,
    };
    targetCtx.restore();
    overlayCtx.restore();
}
//# sourceMappingURL=data-grid-render.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.lines.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawBlanks: () => (/* binding */ drawBlanks),
/* harmony export */   drawExtraRowThemes: () => (/* binding */ drawExtraRowThemes),
/* harmony export */   drawGridLines: () => (/* binding */ drawGridLines),
/* harmony export */   overdrawStickyBoundaries: () => (/* binding */ overdrawStickyBoundaries)
/* harmony export */ });
/* harmony import */ var lodash_groupBy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/groupBy.js");
/* harmony import */ var _data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _common_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/styles.js");
/* harmony import */ var _color_parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/color-parser.js");
/* harmony import */ var _common_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/math.js");
/* harmony import */ var _data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.walk.js");
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable unicorn/no-for-loop */









function drawBlanks(ctx, effectiveColumns, allColumns, width, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getRowTheme, selectedRows, disabledRows, freezeTrailingRows, hasAppendRow, drawRegions, damage, theme) {
    if (damage !== undefined ||
        effectiveColumns[effectiveColumns.length - 1] !== allColumns[effectiveColumns.length - 1])
        return;
    const skipPoint = (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_5__.getSkipPoint)(drawRegions);
    (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_5__.walkColumns)(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, colDrawY, clipX, startRow) => {
        if (c !== effectiveColumns[effectiveColumns.length - 1])
            return;
        drawX += c.width;
        const x = Math.max(drawX, clipX);
        if (x > width)
            return;
        ctx.save();
        ctx.beginPath();
        ctx.rect(x, totalHeaderHeight + 1, 10000, height - totalHeaderHeight - 1);
        ctx.clip();
        (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_5__.walkRowsInCol)(startRow, colDrawY, height, rows, getRowHeight, freezeTrailingRows, hasAppendRow, skipPoint, (drawY, row, rh, isSticky) => {
            if (!isSticky &&
                drawRegions.length > 0 &&
                !drawRegions.some(dr => (0,_common_math_js__WEBPACK_IMPORTED_MODULE_4__.intersectRect)(drawX, drawY, 10000, rh, dr.x, dr.y, dr.width, dr.height))) {
                return;
            }
            const rowSelected = selectedRows.hasIndex(row);
            const rowDisabled = disabledRows.hasIndex(row);
            ctx.beginPath();
            const rowTheme = getRowTheme?.(row);
            const blankTheme = rowTheme === undefined ? theme : (0,_common_styles_js__WEBPACK_IMPORTED_MODULE_2__.mergeAndRealizeTheme)(theme, rowTheme);
            if (blankTheme.bgCell !== theme.bgCell) {
                ctx.fillStyle = blankTheme.bgCell;
                ctx.fillRect(drawX, drawY, 10000, rh);
            }
            if (rowDisabled) {
                ctx.fillStyle = blankTheme.bgHeader;
                ctx.fillRect(drawX, drawY, 10000, rh);
            }
            if (rowSelected) {
                ctx.fillStyle = blankTheme.accentLight;
                ctx.fillRect(drawX, drawY, 10000, rh);
            }
        });
        ctx.restore();
    });
}
function overdrawStickyBoundaries(ctx, effectiveCols, width, height, freezeTrailingRows, rows, verticalBorder, getRowHeight, theme) {
    let drawFreezeBorder = false;
    for (const c of effectiveCols) {
        if (c.sticky)
            continue;
        drawFreezeBorder = verticalBorder(c.sourceIndex);
        break;
    }
    const hColor = theme.horizontalBorderColor ?? theme.borderColor;
    const vColor = theme.borderColor;
    const drawX = drawFreezeBorder ? (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getStickyWidth)(effectiveCols) : 0;
    let vStroke;
    if (drawX !== 0) {
        vStroke = (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_3__.blendCache)(vColor, theme.bgCell);
        ctx.beginPath();
        ctx.moveTo(drawX + 0.5, 0);
        ctx.lineTo(drawX + 0.5, height);
        ctx.strokeStyle = vStroke;
        ctx.stroke();
    }
    if (freezeTrailingRows > 0) {
        const hStroke = vColor === hColor && vStroke !== undefined ? vStroke : (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_3__.blendCache)(hColor, theme.bgCell);
        const h = (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getFreezeTrailingHeight)(rows, freezeTrailingRows, getRowHeight);
        ctx.beginPath();
        ctx.moveTo(0, height - h + 0.5);
        ctx.lineTo(width, height - h + 0.5);
        ctx.strokeStyle = hStroke;
        ctx.stroke();
    }
}
const getMinMaxXY = (drawRegions, width, height) => {
    let minX = 0;
    let maxX = width;
    let minY = 0;
    let maxY = height;
    if (drawRegions !== undefined && drawRegions.length > 0) {
        minX = Number.MAX_SAFE_INTEGER;
        minY = Number.MAX_SAFE_INTEGER;
        maxX = Number.MIN_SAFE_INTEGER;
        maxY = Number.MIN_SAFE_INTEGER;
        for (const r of drawRegions) {
            minX = Math.min(minX, r.x - 1);
            maxX = Math.max(maxX, r.x + r.width + 1);
            minY = Math.min(minY, r.y - 1);
            maxY = Math.max(maxY, r.y + r.height + 1);
        }
    }
    return { minX, maxX, minY, maxY };
};
function drawExtraRowThemes(ctx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, freezeTrailingRows, rows, theme) {
    const bgCell = theme.bgCell;
    const { minX, maxX, minY, maxY } = getMinMaxXY(drawRegions, width, height);
    const toDraw = [];
    const freezeY = height - (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_1__.getFreezeTrailingHeight)(rows, freezeTrailingRows, getRowHeight);
    // row overflow
    let y = totalHeaderHeight;
    let row = cellYOffset;
    let extraRowsStartY = 0;
    while (y + translateY < freezeY) {
        const ty = y + translateY;
        const rh = getRowHeight(row);
        if (ty >= minY && ty <= maxY - 1) {
            const rowTheme = getRowThemeOverride?.(row);
            const rowThemeBgCell = rowTheme?.bgCell;
            const needDraw = rowThemeBgCell !== undefined && rowThemeBgCell !== bgCell && row >= rows - freezeTrailingRows;
            if (needDraw) {
                toDraw.push({
                    x: minX,
                    y: ty,
                    w: maxX - minX,
                    h: rh,
                    color: rowThemeBgCell,
                });
            }
        }
        y += rh;
        if (row < rows - freezeTrailingRows)
            extraRowsStartY = y;
        row++;
    }
    // column overflow
    let x = 0;
    const h = Math.min(freezeY, maxY) - extraRowsStartY;
    if (h > 0) {
        for (let index = 0; index < effectiveCols.length; index++) {
            const c = effectiveCols[index];
            if (c.width === 0)
                continue;
            const tx = c.sticky ? x : x + translateX;
            const colThemeBgCell = c.themeOverride?.bgCell;
            if (colThemeBgCell !== undefined &&
                colThemeBgCell !== bgCell &&
                tx >= minX &&
                tx <= maxX &&
                verticalBorder(index + 1)) {
                toDraw.push({
                    x: tx,
                    y: extraRowsStartY,
                    w: c.width,
                    h,
                    color: colThemeBgCell,
                });
            }
            x += c.width;
        }
    }
    if (toDraw.length === 0)
        return;
    let color;
    ctx.beginPath();
    // render in reverse order because we computed and added the columns last, but they should actually be lower
    // priority than the rows.
    for (let i = toDraw.length - 1; i >= 0; i--) {
        const r = toDraw[i];
        if (color === undefined) {
            color = r.color;
        }
        else if (r.color !== color) {
            ctx.fillStyle = color;
            ctx.fill();
            ctx.beginPath();
            color = r.color;
        }
        ctx.rect(r.x, r.y, r.w, r.h);
    }
    if (color !== undefined) {
        ctx.fillStyle = color;
        ctx.fill();
    }
    ctx.beginPath();
}
// lines are effectively drawn on the top left edge of a cell.
function drawGridLines(ctx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, spans, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, freezeTrailingRows, rows, theme, verticalOnly = false) {
    if (spans !== undefined) {
        ctx.beginPath();
        ctx.save();
        ctx.rect(0, 0, width, height);
        for (const span of spans) {
            ctx.rect(span.x + 1, span.y + 1, span.width - 1, span.height - 1);
        }
        ctx.clip("evenodd");
    }
    const hColor = theme.horizontalBorderColor ?? theme.borderColor;
    const vColor = theme.borderColor;
    const { minX, maxX, minY, maxY } = getMinMaxXY(drawRegions, width, height);
    const toDraw = [];
    ctx.beginPath();
    // vertical lines
    let x = 0.5;
    for (let index = 0; index < effectiveCols.length; index++) {
        const c = effectiveCols[index];
        if (c.width === 0)
            continue;
        x += c.width;
        const tx = c.sticky ? x : x + translateX;
        if (tx >= minX && tx <= maxX && verticalBorder(index + 1)) {
            toDraw.push({
                x1: tx,
                y1: Math.max(groupHeaderHeight, minY),
                x2: tx,
                y2: Math.min(height, maxY),
                color: vColor,
            });
        }
    }
    let freezeY = height + 0.5;
    for (let i = rows - freezeTrailingRows; i < rows; i++) {
        const rh = getRowHeight(i);
        freezeY -= rh;
        toDraw.push({ x1: minX, y1: freezeY, x2: maxX, y2: freezeY, color: hColor });
    }
    if (verticalOnly !== true) {
        // horizontal lines
        let y = totalHeaderHeight + 0.5;
        let row = cellYOffset;
        const target = freezeY;
        while (y + translateY < target) {
            const ty = y + translateY;
            if (ty >= minY && ty <= maxY - 1) {
                const rowTheme = getRowThemeOverride?.(row);
                toDraw.push({
                    x1: minX,
                    y1: ty,
                    x2: maxX,
                    y2: ty,
                    color: rowTheme?.horizontalBorderColor ?? rowTheme?.borderColor ?? hColor,
                });
            }
            y += getRowHeight(row);
            row++;
        }
    }
    const groups = lodash_groupBy_js__WEBPACK_IMPORTED_MODULE_0__(toDraw, line => line.color);
    for (const g of Object.keys(groups)) {
        ctx.strokeStyle = g;
        for (const line of groups[g]) {
            ctx.moveTo(line.x1, line.y1);
            ctx.lineTo(line.x2, line.y2);
        }
        ctx.stroke();
        ctx.beginPath();
    }
    if (spans !== undefined) {
        ctx.restore();
    }
}
//# sourceMappingURL=data-grid-render.lines.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.walk.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSkipPoint: () => (/* binding */ getSkipPoint),
/* harmony export */   getSpanBounds: () => (/* binding */ getSpanBounds),
/* harmony export */   walkColumns: () => (/* binding */ walkColumns),
/* harmony export */   walkGroups: () => (/* binding */ walkGroups),
/* harmony export */   walkRowsInCol: () => (/* binding */ walkRowsInCol)
/* harmony export */ });
/* harmony import */ var _data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");


function getSkipPoint(drawRegions) {
    if (drawRegions.length === 0)
        return undefined;
    let drawRegionsLowestY;
    for (const dr of drawRegions) {
        drawRegionsLowestY = Math.min(drawRegionsLowestY ?? dr.y, dr.y);
    }
}
function walkRowsInCol(startRow, drawY, height, rows, getRowHeight, freezeTrailingRows, hasAppendRow, skipToY, cb) {
    skipToY = skipToY ?? drawY;
    let y = drawY;
    let row = startRow;
    const rowEnd = rows - freezeTrailingRows;
    let didBreak = false;
    while (y < height && row < rowEnd) {
        const rh = getRowHeight(row);
        if (y + rh > skipToY && cb(y, row, rh, false, hasAppendRow && row === rows - 1) === true) {
            didBreak = true;
            break;
        }
        y += rh;
        row++;
    }
    if (didBreak)
        return;
    y = height;
    for (let fr = 0; fr < freezeTrailingRows; fr++) {
        row = rows - 1 - fr;
        const rh = getRowHeight(row);
        y -= rh;
        cb(y, row, rh, true, hasAppendRow && row === rows - 1);
    }
}
function walkColumns(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, cb) {
    let x = 0;
    let clipX = 0; // this tracks the total width of sticky cols
    const drawY = totalHeaderHeight + translateY;
    for (const c of effectiveCols) {
        const drawX = c.sticky ? clipX : x + translateX;
        if (cb(c, drawX, drawY, c.sticky ? 0 : clipX, cellYOffset) === true) {
            break;
        }
        x += c.width;
        clipX += c.sticky ? c.width : 0;
    }
}
function walkGroups(effectiveCols, width, translateX, groupHeaderHeight, cb) {
    let x = 0;
    let clipX = 0;
    for (let index = 0; index < effectiveCols.length; index++) {
        const startCol = effectiveCols[index];
        let end = index + 1;
        let boxWidth = startCol.width;
        if (startCol.sticky) {
            clipX += boxWidth;
        }
        while (end < effectiveCols.length &&
            (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.isGroupEqual)(effectiveCols[end].group, startCol.group) &&
            effectiveCols[end].sticky === effectiveCols[index].sticky) {
            const endCol = effectiveCols[end];
            boxWidth += endCol.width;
            end++;
            index++;
            if (endCol.sticky) {
                clipX += endCol.width;
            }
        }
        const t = startCol.sticky ? 0 : translateX;
        const localX = x + t;
        const delta = startCol.sticky ? 0 : Math.max(0, clipX - localX);
        const w = Math.min(boxWidth - delta, width - (localX + delta));
        cb([startCol.sourceIndex, effectiveCols[end - 1].sourceIndex], startCol.group ?? "", localX + delta, 0, w, groupHeaderHeight);
        x += boxWidth;
    }
}
function getSpanBounds(span, cellX, cellY, cellW, cellH, column, allColumns) {
    const [startCol, endCol] = span;
    let frozenRect;
    let contentRect;
    const firstNonSticky = allColumns.find(x => !x.sticky)?.sourceIndex ?? 0;
    if (endCol > firstNonSticky) {
        const renderFromCol = Math.max(startCol, firstNonSticky);
        let tempX = cellX;
        let tempW = cellW;
        for (let x = column.sourceIndex - 1; x >= renderFromCol; x--) {
            tempX -= allColumns[x].width;
            tempW += allColumns[x].width;
        }
        for (let x = column.sourceIndex + 1; x <= endCol; x++) {
            tempW += allColumns[x].width;
        }
        contentRect = {
            x: tempX,
            y: cellY,
            width: tempW,
            height: cellH,
        };
    }
    if (firstNonSticky > startCol) {
        const renderToCol = Math.min(endCol, firstNonSticky - 1);
        let tempX = cellX;
        let tempW = cellW;
        for (let x = column.sourceIndex - 1; x >= startCol; x--) {
            tempX -= allColumns[x].width;
            tempW += allColumns[x].width;
        }
        for (let x = column.sourceIndex + 1; x <= renderToCol; x++) {
            tempW += allColumns[x].width;
        }
        frozenRect = {
            x: tempX,
            y: cellY,
            width: tempW,
            height: cellH,
        };
    }
    return [frozenRect, contentRect];
}
//# sourceMappingURL=data-grid-render.walk.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid.render.rings.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawColumnResizeOutline: () => (/* binding */ drawColumnResizeOutline),
/* harmony export */   drawFillHandle: () => (/* binding */ drawFillHandle),
/* harmony export */   drawHighlightRings: () => (/* binding */ drawHighlightRings)
/* harmony export */ });
/* harmony import */ var _data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _color_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/color-parser.js");
/* harmony import */ var _common_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/math.js");
/* harmony import */ var _data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.walk.js");
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable unicorn/no-for-loop */







function drawHighlightRings(ctx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, freezeColumns, headerHeight, groupHeaderHeight, rowHeight, freezeTrailingRows, rows, allHighlightRegions, theme) {
    const highlightRegions = allHighlightRegions?.filter(x => x.style !== "no-outline");
    if (highlightRegions === undefined || highlightRegions.length === 0)
        return undefined;
    const freezeLeft = (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.getStickyWidth)(mappedColumns);
    const freezeBottom = (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.getFreezeTrailingHeight)(rows, freezeTrailingRows, rowHeight);
    const splitIndicies = [freezeColumns, 0, mappedColumns.length, rows - freezeTrailingRows];
    const splitLocations = [freezeLeft, 0, width, height - freezeBottom];
    const drawRects = highlightRegions.map(h => {
        const r = h.range;
        const style = h.style ?? "dashed";
        return (0,_common_math_js__WEBPACK_IMPORTED_MODULE_2__.splitRectIntoRegions)(r, splitIndicies, width, height, splitLocations).map(arg => {
            const rect = arg.rect;
            const topLeftBounds = (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.computeBounds)(rect.x, rect.y, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, freezeTrailingRows, mappedColumns, rowHeight);
            const bottomRightBounds = rect.width === 1 && rect.height === 1
                ? topLeftBounds
                : (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.computeBounds)(rect.x + rect.width - 1, rect.y + rect.height - 1, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, freezeTrailingRows, mappedColumns, rowHeight);
            if (rect.x + rect.width >= mappedColumns.length) {
                bottomRightBounds.width -= 1;
            }
            if (rect.y + rect.height >= rows) {
                bottomRightBounds.height -= 1;
            }
            return {
                color: h.color,
                style,
                clip: arg.clip,
                rect: (0,_common_math_js__WEBPACK_IMPORTED_MODULE_2__.hugRectToTarget)({
                    x: topLeftBounds.x,
                    y: topLeftBounds.y,
                    width: bottomRightBounds.x + bottomRightBounds.width - topLeftBounds.x,
                    height: bottomRightBounds.y + bottomRightBounds.height - topLeftBounds.y,
                }, width, height, 8),
            };
        });
    });
    const drawCb = () => {
        ctx.lineWidth = 1;
        let dashed = false;
        for (const dr of drawRects) {
            for (const s of dr) {
                if (s?.rect !== undefined &&
                    (0,_common_math_js__WEBPACK_IMPORTED_MODULE_2__.intersectRect)(0, 0, width, height, s.rect.x, s.rect.y, s.rect.width, s.rect.height)) {
                    const wasDashed = dashed;
                    const needsClip = !(0,_common_math_js__WEBPACK_IMPORTED_MODULE_2__.rectContains)(s.clip, s.rect);
                    if (needsClip) {
                        ctx.save();
                        ctx.rect(s.clip.x, s.clip.y, s.clip.width, s.clip.height);
                        ctx.clip();
                    }
                    if (s.style === "dashed" && !dashed) {
                        ctx.setLineDash([5, 3]);
                        dashed = true;
                    }
                    else if ((s.style === "solid" || s.style === "solid-outline") && dashed) {
                        ctx.setLineDash([]);
                        dashed = false;
                    }
                    ctx.strokeStyle =
                        s.style === "solid-outline"
                            ? (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_1__.blend)((0,_color_parser_js__WEBPACK_IMPORTED_MODULE_1__.blend)(s.color, theme.borderColor), theme.bgCell)
                            : (0,_color_parser_js__WEBPACK_IMPORTED_MODULE_1__.withAlpha)(s.color, 1);
                    ctx.strokeRect(s.rect.x + 0.5, s.rect.y + 0.5, s.rect.width - 1, s.rect.height - 1);
                    if (needsClip) {
                        ctx.restore();
                        dashed = wasDashed;
                    }
                }
            }
        }
        if (dashed) {
            ctx.setLineDash([]);
        }
    };
    drawCb();
    return drawCb;
}
function drawColumnResizeOutline(ctx, yOffset, xOffset, height, style) {
    ctx.beginPath();
    ctx.moveTo(yOffset, xOffset);
    ctx.lineTo(yOffset, height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = style;
    ctx.stroke();
    ctx.globalAlpha = 1;
}
function drawFillHandle(ctx, width, height, cellYOffset, translateX, translateY, effectiveCols, allColumns, theme, totalHeaderHeight, selectedCell, getRowHeight, getCellContent, freezeTrailingRows, hasAppendRow, fillHandle, rows) {
    if (selectedCell.current === undefined)
        return undefined;
    const range = selectedCell.current.range;
    const currentItem = selectedCell.current.cell;
    const fillHandleTarget = [range.x + range.width - 1, range.y + range.height - 1];
    // if the currentItem row greater than rows and the fill handle row is greater than rows, we dont need to draw
    if (currentItem[1] >= rows && fillHandleTarget[1] >= rows)
        return undefined;
    const mustDraw = effectiveCols.some(c => c.sourceIndex === currentItem[0] || c.sourceIndex === fillHandleTarget[0]);
    if (!mustDraw)
        return undefined;
    const [targetCol, targetRow] = selectedCell.current.cell;
    const cell = getCellContent(selectedCell.current.cell);
    const targetColSpan = cell.span ?? [targetCol, targetCol];
    const isStickyRow = targetRow >= rows - freezeTrailingRows;
    const stickRowHeight = freezeTrailingRows > 0 && !isStickyRow
        ? (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_0__.getFreezeTrailingHeight)(rows, freezeTrailingRows, getRowHeight) - 1
        : 0;
    const fillHandleRow = fillHandleTarget[1];
    let drawHandleCb = undefined;
    (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_3__.walkColumns)(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, (col, drawX, colDrawY, clipX, startRow) => {
        clipX;
        if (col.sticky && targetCol > col.sourceIndex)
            return;
        const isBeforeTarget = col.sourceIndex < targetColSpan[0];
        const isAfterTarget = col.sourceIndex > targetColSpan[1];
        const isFillHandleCol = col.sourceIndex === fillHandleTarget[0];
        if (!isFillHandleCol && (isBeforeTarget || isAfterTarget)) {
            // we dont need to do any drawing on this column but may yet need to draw
            return;
        }
        (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_3__.walkRowsInCol)(startRow, colDrawY, height, rows, getRowHeight, freezeTrailingRows, hasAppendRow, undefined, (drawY, row, rh) => {
            if (row !== targetRow && row !== fillHandleRow)
                return;
            let cellX = drawX;
            let cellWidth = col.width;
            if (cell.span !== undefined) {
                const areas = (0,_data_grid_render_walk_js__WEBPACK_IMPORTED_MODULE_3__.getSpanBounds)(cell.span, drawX, drawY, col.width, rh, col, allColumns);
                const area = col.sticky ? areas[0] : areas[1];
                if (area !== undefined) {
                    cellX = area.x;
                    cellWidth = area.width;
                }
            }
            const doHandle = row === fillHandleRow && isFillHandleCol && fillHandle;
            if (doHandle) {
                drawHandleCb = () => {
                    if (clipX > cellX && !col.sticky) {
                        ctx.beginPath();
                        ctx.rect(clipX, 0, width - clipX, height);
                        ctx.clip();
                    }
                    ctx.beginPath();
                    ctx.rect(cellX + cellWidth - 4, drawY + rh - 4, 4, 4);
                    ctx.fillStyle = col.themeOverride?.accentColor ?? theme.accentColor;
                    ctx.fill();
                };
            }
            return drawHandleCb !== undefined;
        });
        return drawHandleCb !== undefined;
    });
    if (drawHandleCb === undefined)
        return undefined;
    const result = () => {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, totalHeaderHeight, width, height - totalHeaderHeight - stickRowHeight);
        ctx.clip();
        drawHandleCb?.();
        ctx.restore();
    };
    result();
    return result;
}
//# sourceMappingURL=data-grid.render.rings.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/draw-checkbox.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawCheckbox: () => (/* binding */ drawCheckbox)
/* harmony export */ });
/* harmony import */ var _common_support_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* harmony import */ var _data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js");
/* harmony import */ var _data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");




function drawCheckbox(ctx, theme, checked, x, y, width, height, highlighted, hoverX = -20, hoverY = -20, maxSize = 32, alignment = "center", style = "square") {
    const centerY = Math.floor(y + height / 2);
    const rectBordRadius = style === "circle" ? 10000 : theme.roundingRadius ?? 4;
    let checkBoxWidth = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSquareWidth)(maxSize, height, theme.cellVerticalPadding);
    let checkBoxHalfWidth = checkBoxWidth / 2;
    const posX = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSquareXPosFromAlign)(alignment, x, width, theme.cellHorizontalPadding, checkBoxWidth);
    const bb = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSquareBB)(posX, centerY, checkBoxWidth);
    const hovered = (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_1__.pointIsWithinBB)(x + hoverX, y + hoverY, bb);
    switch (checked) {
        case true: {
            ctx.beginPath();
            (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.roundedRect)(ctx, posX - checkBoxWidth / 2, centerY - checkBoxWidth / 2, checkBoxWidth, checkBoxWidth, rectBordRadius);
            if (style === "circle") {
                checkBoxHalfWidth *= 0.8;
                checkBoxWidth *= 0.8;
            }
            ctx.fillStyle = highlighted ? theme.accentColor : theme.textMedium;
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(posX - checkBoxHalfWidth + checkBoxWidth / 4.23, centerY - checkBoxHalfWidth + checkBoxWidth / 1.97);
            ctx.lineTo(posX - checkBoxHalfWidth + checkBoxWidth / 2.42, centerY - checkBoxHalfWidth + checkBoxWidth / 1.44);
            ctx.lineTo(posX - checkBoxHalfWidth + checkBoxWidth / 1.29, centerY - checkBoxHalfWidth + checkBoxWidth / 3.25);
            ctx.strokeStyle = theme.bgCell;
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.lineWidth = 1.9;
            ctx.stroke();
            break;
        }
        case _data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__.BooleanEmpty:
        case false: {
            ctx.beginPath();
            (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.roundedRect)(ctx, posX - checkBoxWidth / 2 + 0.5, centerY - checkBoxWidth / 2 + 0.5, checkBoxWidth - 1, checkBoxWidth - 1, rectBordRadius);
            ctx.lineWidth = 1;
            ctx.strokeStyle = hovered ? theme.textDark : theme.textMedium;
            ctx.stroke();
            break;
        }
        case _data_grid_types_js__WEBPACK_IMPORTED_MODULE_3__.BooleanIndeterminate: {
            ctx.beginPath();
            (0,_data_grid_lib_js__WEBPACK_IMPORTED_MODULE_2__.roundedRect)(ctx, posX - checkBoxWidth / 2, centerY - checkBoxWidth / 2, checkBoxWidth, checkBoxWidth, rectBordRadius);
            ctx.fillStyle = hovered ? theme.textMedium : theme.textLight;
            ctx.fill();
            if (style === "circle") {
                checkBoxHalfWidth *= 0.8;
                checkBoxWidth *= 0.8;
            }
            ctx.beginPath();
            ctx.moveTo(posX - checkBoxWidth / 3, centerY);
            ctx.lineTo(posX + checkBoxWidth / 3, centerY);
            ctx.strokeStyle = theme.bgCell;
            ctx.lineCap = "round";
            ctx.lineWidth = 1.9;
            ctx.stroke();
            break;
        }
        default:
            (0,_common_support_js__WEBPACK_IMPORTED_MODULE_0__.assertNever)(checked);
    }
}
//# sourceMappingURL=draw-checkbox.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/sprites.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sprites: () => (/* binding */ sprites)
/* harmony export */ });
const iconHead = `<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">`;
const headerRowID = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}<rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/><path d="M15.75 4h-1.5a.25.25 0 0 0-.177.074L9.308 8.838a3.75 3.75 0 1 0 1.854 1.854l1.155-1.157.967.322a.5.5 0 0 0 .65-.55l-.18-1.208.363-.363.727.331a.5.5 0 0 0 .69-.59l-.254-.904.647-.647A.25.25 0 0 0 16 5.75v-1.5a.25.25 0 0 0-.25-.25zM7.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="${fg}"/></svg>`;
};
const headerCode = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}<rect x="2" y="2" width="16" height="16" rx="4" fill="${bg}"/><path d="m12.223 13.314 3.052-2.826a.65.65 0 0 0 0-.984l-3.052-2.822c-.27-.25-.634-.242-.865.022-.232.263-.206.636.056.882l2.601 2.41-2.601 2.41c-.262.245-.288.619-.056.882.231.263.595.277.865.026Zm-4.444.005c.266.25.634.241.866-.027.231-.263.206-.636-.06-.882L5.983 10l2.602-2.405c.266-.25.291-.62.06-.887-.232-.263-.596-.272-.866-.022L4.723 9.51a.653.653 0 0 0 0 .983l3.056 2.827Z" fill="${fg}"/></svg>`;
};
const headerNumber = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M6.52 12.78H5.51V8.74l-1.33.47v-.87l2.29-.83h.05v5.27zm5.2 0H8.15v-.69l1.7-1.83a6.38 6.38 0 0 0 .34-.4c.09-.11.16-.22.22-.32s.1-.19.12-.27a.9.9 0 0 0 0-.56.63.63 0 0 0-.15-.23.58.58 0 0 0-.22-.15.75.75 0 0 0-.29-.05c-.27 0-.48.08-.62.23a.95.95 0 0 0-.2.65H8.03c0-.24.04-.46.13-.67a1.67 1.67 0 0 1 .97-.91c.23-.1.49-.14.77-.14.26 0 .5.04.7.11.21.08.38.18.52.32.14.13.25.3.32.48a1.74 1.74 0 0 1 .03 1.13 2.05 2.05 0 0 1-.24.47 4.16 4.16 0 0 1-.35.47l-.47.5-1 1.05h2.32v.8zm1.8-3.08h.55c.28 0 .48-.06.61-.2a.76.76 0 0 0 .2-.55.8.8 0 0 0-.05-.28.56.56 0 0 0-.13-.22.6.6 0 0 0-.23-.15.93.93 0 0 0-.32-.05.92.92 0 0 0-.29.05.72.72 0 0 0-.23.12.57.57 0 0 0-.21.46H12.4a1.3 1.3 0 0 1 .5-1.04c.15-.13.33-.23.54-.3a2.48 2.48 0 0 1 1.4 0c.2.06.4.15.55.28.15.13.27.28.36.47.08.19.13.4.13.65a1.15 1.15 0 0 1-.2.65 1.36 1.36 0 0 1-.58.49c.15.05.28.12.38.2a1.14 1.14 0 0 1 .43.62c.03.13.05.26.05.4 0 .25-.05.47-.14.66a1.42 1.42 0 0 1-.4.49c-.16.13-.35.23-.58.3a2.51 2.51 0 0 1-.73.1c-.22 0-.44-.03-.65-.09a1.8 1.8 0 0 1-.57-.28 1.43 1.43 0 0 1-.4-.47 1.41 1.41 0 0 1-.15-.66h1a.66.66 0 0 0 .22.5.87.87 0 0 0 .58.2c.25 0 .45-.07.6-.2a.71.71 0 0 0 .21-.56.97.97 0 0 0-.06-.36.61.61 0 0 0-.18-.25.74.74 0 0 0-.28-.15 1.33 1.33 0 0 0-.37-.04h-.55V9.7z" fill="${fg}"/>
  </svg>`;
};
const headerString = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path d="M8.182 12.4h3.636l.655 1.6H14l-3.454-8H9.455L6 14h1.527l.655-1.6zM10 7.44l1.36 3.651H8.64L10 7.441z" fill="${fg}"/>
</svg>`;
};
const headerBoolean = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
    <path
        d="M16.2222 2H3.77778C2.8 2 2 2.8 2 3.77778V16.2222C2 17.2 2.8 18 3.77778 18H16.2222C17.2 18 17.9911 17.2 17.9911 16.2222L18 3.77778C18 2.8 17.2 2 16.2222 2Z"
        fill="${bg}"
    />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.66667 6.66669C5.73368 6.66669 4.16667 8.15907 4.16667 10C4.16667 11.841 5.73368 13.3334 7.66667 13.3334H12.3333C14.2663 13.3334 15.8333 11.841 15.8333 10C15.8333 8.15907 14.2663 6.66669 12.3333 6.66669H7.66667ZM12.5 12.5C13.8807 12.5 15 11.3807 15 10C15 8.61931 13.8807 7.50002 12.5 7.50002C11.1193 7.50002 10 8.61931 10 10C10 11.3807 11.1193 12.5 12.5 12.5Z"
        fill="${fg}"
    />
</svg>`;
};
const headerUri = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
<path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.29 4.947a3.368 3.368 0 014.723.04 3.375 3.375 0 01.041 4.729l-.009.009-1.596 1.597a3.367 3.367 0 01-5.081-.364.71.71 0 011.136-.85 1.95 1.95 0 002.942.21l1.591-1.593a1.954 1.954 0 00-.027-2.733 1.95 1.95 0 00-2.732-.027l-.91.907a.709.709 0 11-1.001-1.007l.915-.911.007-.007z" fill="${fg}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.55 8.678a3.368 3.368 0 015.082.364.71.71 0 01-1.136.85 1.95 1.95 0 00-2.942-.21l-1.591 1.593a1.954 1.954 0 00.027 2.733 1.95 1.95 0 002.73.028l.906-.906a.709.709 0 111.003 1.004l-.91.91-.008.01a3.368 3.368 0 01-4.724-.042 3.375 3.375 0 01-.041-4.728l.009-.009L6.55 8.678z" fill="${fg}"/>
</svg>
  `;
};
const renameIcon = (props) => {
    const bg = props.bgColor;
    return `${iconHead}
    <path stroke="${bg}" stroke-width="2" d="M12 3v14"/>
    <path stroke="${bg}" stroke-width="2" stroke-linecap="round" d="M10 4h4m-4 12h4"/>
    <path d="M11 14h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4v2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v2ZM9.5 8H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5v2H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.5v2Z" fill="${bg}"/>
  </svg>
`;
};
const headerAudioUri = headerUri;
const headerVideoUri = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.138a.5.5 0 00.748.434l5.492-3.138a.5.5 0 000-.868L7.748 6.427A.5.5 0 007 6.862v6.276z" fill="${fg}"/>
</svg>`;
};
const headerEmoji = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}
    <path d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 9.17A4.17 4.17 0 0 1 5.83 10 4.17 4.17 0 0 1 10 5.83 4.17 4.17 0 0 1 14.17 10 4.17 4.17 0 0 1 10 14.17z" fill="${fg}"/>
    <path d="M8.33 8.21a.83.83 0 1 0-.03 1.67.83.83 0 0 0 .03-1.67zm3.34 0a.83.83 0 1 0-.04 1.67.83.83 0 0 0 .04-1.67z" fill="${fg}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.53 13.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${fg}"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 11a5 5 0 1 1 .01-10.01A5 5 0 0 1 10 15z" fill="${fg}"/>
    <path d="M8 7.86a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2zm4 0a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2z" fill="${fg}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.53 11.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${fg}"/>
  </svg>`;
};
const headerImage = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M12.499 10.801a.5.5 0 01.835 0l2.698 4.098a.5.5 0 01-.418.775H10.22a.5.5 0 01-.417-.775l2.697-4.098z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07 8.934a.5.5 0 01.824 0l4.08 5.958a.5.5 0 01-.412.782h-8.16a.5.5 0 01-.413-.782l4.08-5.958zM13.75 8.333a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z" fill="${fg}"/>
</svg>`;
};
const headerPhone = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}
    <path fill="${fg}" d="M3 3h14v14H3z"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2zm-7.24 9.78h1.23c.15 0 .27.06.36.18l.98 1.28a.43.43 0 0 1-.05.58l-1.2 1.21a.45.45 0 0 1-.6.04A6.72 6.72 0 0 1 7.33 10c0-.61.1-1.2.25-1.78a6.68 6.68 0 0 1 2.12-3.3.44.44 0 0 1 .6.04l1.2 1.2c.16.17.18.42.05.59l-.98 1.29a.43.43 0 0 1-.36.17H8.98A5.38 5.38 0 0 0 8.67 10c0 .62.11 1.23.3 1.79z" fill="${bg}"/>
  </svg>`;
};
const headerMarkdown = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="m13.49 13.15-2.32-3.27h1.4V7h1.86v2.88h1.4l-2.34 3.27zM11 13H9v-3l-1.5 1.92L6 10v3H4V7h2l1.5 2L9 7h2v6z" fill="${fg}"/>
  </svg>`;
};
const headerDate = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path d="M14.8 4.182h-.6V3H13v1.182H7V3H5.8v1.182h-.6c-.66 0-1.2.532-1.2 1.182v9.454C4 15.468 4.54 16 5.2 16h9.6c.66 0 1.2-.532 1.2-1.182V5.364c0-.65-.54-1.182-1.2-1.182zm0 10.636H5.2V7.136h9.6v7.682z" fill="${fg}"/>
</svg>`;
};
const headerTime = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M10 4a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10.8A4.8 4.8 0 0 1 5.2 10a4.8 4.8 0 1 1 4.8 4.8z" fill="${fg}"/>
    <path d="M10 7H9v3.93L12.5 13l.5-.8-3-1.76V7z" fill="${fg}"/>
  </svg>`;
};
const headerEmail = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.643a1.357 1.357 0 100 2.714 1.357 1.357 0 000-2.714zM7.357 10a2.643 2.643 0 115.286 0 2.643 2.643 0 01-5.286 0z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.589 4.898A5.643 5.643 0 0115.643 10v.5a2.143 2.143 0 01-4.286 0V8a.643.643 0 011.286 0v2.5a.857.857 0 001.714 0V10a4.357 4.357 0 10-1.708 3.46.643.643 0 01.782 1.02 5.643 5.643 0 11-5.842-9.582z" fill="${fg}"/>
</svg>`;
};
const headerReference = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}
    <rect x="2" y="8" width="10" height="8" rx="2" fill="${bg}"/>
    <rect x="8" y="4" width="10" height="8" rx="2" fill="${bg}"/>
    <path d="M10.68 7.73V6l2.97 3.02-2.97 3.02v-1.77c-2.13 0-3.62.7-4.68 2.2.43-2.15 1.7-4.31 4.68-4.74z" fill="${fg}"/>
  </svg>`;
};
const headerIfThenElse = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <path fill="${fg}" d="M4 3h12v14H4z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2A1.6 1.6 0 002 3.6v12.8A1.6 1.6 0 003.6 18h12.8a1.6 1.6 0 001.6-1.6V3.6A1.6 1.6 0 0016.4 2H3.6zm11.3 10.8a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7h-1.4a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.6-.693.117.117 0 00.1-.115V10.35a.117.117 0 00-.117-.116h-2.8a.117.117 0 00-.117.116v2.333c0 .064.053.117.117.117h.117a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7H9.3a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.117a.117.117 0 00.117-.117V10.35a.117.117 0 00-.117-.117h-2.8a.117.117 0 00-.117.117v2.342c0 .058.042.106.1.115a.7.7 0 01.6.693v1.4a.7.7 0 01-.7.7H5.1a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.35a.116.116 0 00.116-.117v-2.45c0-.515.418-.933.934-.933h2.917a.117.117 0 00.117-.117V6.85a.117.117 0 00-.117-.116h-2.45a.7.7 0 01-.7-.7V5.1a.7.7 0 01.7-.7h6.067a.7.7 0 01.7.7v.934a.7.7 0 01-.7.7h-2.45a.117.117 0 00-.118.116v2.333c0 .064.053.117.117.117H13.5c.516 0 .934.418.934.934v2.45c0 .063.052.116.116.116h.35z" fill="${bg}"/>
</svg>`;
};
const headerSingleValue = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
    <path d="M9.98 13.33c.45 0 .74-.3.73-.75l-.01-.1-.16-1.67 1.45 1.05a.81.81 0 0 0 .5.18c.37 0 .72-.32.72-.76 0-.3-.17-.54-.49-.68l-1.63-.77 1.63-.77c.32-.14.49-.37.49-.67 0-.45-.34-.76-.71-.76a.81.81 0 0 0-.5.18l-1.47 1.03.16-1.74.01-.08c.01-.46-.27-.76-.72-.76-.46 0-.76.32-.75.76l.01.08.16 1.74-1.47-1.03a.77.77 0 0 0-.5-.18.74.74 0 0 0-.72.76c0 .3.17.53.49.67l1.63.77-1.62.77c-.32.14-.5.37-.5.68 0 .44.35.75.72.75a.78.78 0 0 0 .5-.17L9.4 10.8l-.16 1.68v.09c-.02.44.28.75.74.75z" fill="${fg}"/>
  </svg>`;
};
const headerLookup = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
    <path d="M8 5.83H5.83a.83.83 0 0 0 0 1.67h1.69A4.55 4.55 0 0 1 8 5.83zm-.33 3.34H5.83a.83.83 0 0 0 0 1.66h2.72a4.57 4.57 0 0 1-.88-1.66zM5.83 12.5a.83.83 0 0 0 0 1.67h7.5a.83.83 0 1 0 0-1.67h-7.5zm8.8-2.9a3.02 3.02 0 0 0 .46-1.6c0-1.66-1.32-3-2.94-3C10.52 5 9.2 6.34 9.2 8s1.31 3 2.93 3c.58 0 1.11-.17 1.56-.47l2.04 2.08.93-.94-2.04-2.08zm-2.48.07c-.9 0-1.63-.75-1.63-1.67s.73-1.67 1.63-1.67c.9 0 1.63.75 1.63 1.67s-.73 1.67-1.63 1.67z" fill="${fg}"/>
  </svg>`;
};
const headerTextTemplate = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path d="M7.676 4.726V3l2.976 3.021-2.976 3.022v-1.77c-2.125 0-3.613.69-4.676 2.201.425-2.158 1.7-4.316 4.676-4.748zM10.182 14.4h3.636l.655 1.6H16l-3.454-8h-1.091L8 16h1.527l.655-1.6zM12 9.44l1.36 3.65h-2.72L12 9.44z" fill="${fg}"/>
</svg>`;
};
const headerMath = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.167 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666H4.167z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.083 4.167a.833.833 0 10-1.666 0v4.166a.833.833 0 101.666 0V4.167zM11.667 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666h-4.166zM5.367 11.688a.833.833 0 00-1.179 1.179l2.947 2.946a.833.833 0 001.178-1.178l-2.946-2.947z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.313 12.867a.833.833 0 10-1.178-1.179l-2.947 2.947a.833.833 0 101.179 1.178l2.946-2.946z" fill="${fg}"/>
  <path d="M10.833 12.5c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833zM10.833 15c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833z" fill="${fg}"/>
</svg>`;
};
const headerRollup = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M10 8.84a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32zm3.02 3.61a3.92 3.92 0 0 0 .78-3.28.49.49 0 1 0-.95.2c.19.87-.02 1.78-.58 2.47a2.92 2.92 0 1 1-4.13-4.08 2.94 2.94 0 0 1 2.43-.62.49.49 0 1 0 .17-.96 3.89 3.89 0 1 0 2.28 6.27zM10 4.17a5.84 5.84 0 0 0-5.44 7.93.49.49 0 1 0 .9-.35 4.86 4.86 0 1 1 2.5 2.67.49.49 0 1 0-.4.88c.76.35 1.6.54 2.44.53a5.83 5.83 0 0 0 0-11.66zm3.02 3.5a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0zm-6.97 5.35a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z" fill="${fg}"/>
  </svg>`;
};
const headerJoinStrings = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path d="M12.4 13.565c1.865-.545 3.645-2.083 3.645-4.396 0-1.514-.787-2.604-2.071-2.604C12.69 6.565 12 7.63 12 8.939c1.114.072 1.865.726 1.865 1.683 0 .933-.8 1.647-1.84 2.023l.375.92zM4 5h6v2H4zM4 9h5v2H4zM4 13h4v2H4z" fill="${fg}"/>
</svg>`;
};
const headerSplitString = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    ${iconHead}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
    <path d="M12.4 13.56c1.86-.54 3.65-2.08 3.65-4.4 0-1.5-.8-2.6-2.08-2.6S12 7.64 12 8.95c1.11.07 1.86.73 1.86 1.68 0 .94-.8 1.65-1.83 2.03l.37.91zM4 5h6v2H4zm0 4h5v2H4zm0 4h4v2H4z" fill="${fg}"/>
  </svg>`;
};
const headerGeoDistance = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path d="M10 7a1 1 0 100-2v2zm0 6a1 1 0 100 2v-2zm0-8H7v2h3V5zm-3 6h5V9H7v2zm5 2h-2v2h2v-2zm1-1a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zM4 8a3 3 0 003 3V9a1 1 0 01-1-1H4zm3-3a3 3 0 00-3 3h2a1 1 0 011-1V5z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.856 12.014a.5.5 0 00-.712.702L5.409 14l-1.265 1.284a.5.5 0 00.712.702l1.255-1.274 1.255 1.274a.5.5 0 00.712-.702L6.813 14l1.265-1.284a.5.5 0 00-.712-.702L6.11 13.288l-1.255-1.274zM12.856 4.014a.5.5 0 00-.712.702L13.409 6l-1.265 1.284a.5.5 0 10.712.702l1.255-1.274 1.255 1.274a.5.5 0 10.712-.702L14.813 6l1.265-1.284a.5.5 0 00-.712-.702L14.11 5.288l-1.255-1.274z" fill="${fg}"/>
</svg>`;
};
const headerArray = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 7.25a.75.75 0 000-1.5h-6.5a.75.75 0 100 1.5h6.5zM15 10a.75.75 0 01-.75.75h-6.5a.75.75 0 010-1.5h6.5A.75.75 0 0115 10zm-.75 4.25a.75.75 0 000-1.5h-6.5a.75.75 0 000 1.5h6.5zm-8.987-7a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 4.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="${fg}"/>
</svg>`;
};
const rowOwnerOverlay = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15v1h14v-2.5c0-.87-.44-1.55-.98-2.04a6.19 6.19 0 0 0-1.9-1.14 12.1 12.1 0 0 0-2.48-.67A4 4 0 1 0 5 6a4 4 0 0 0 2.36 3.65c-.82.13-1.7.36-2.48.67-.69.28-1.37.65-1.9 1.13A2.8 2.8 0 0 0 2 13.5V15z" fill="${bg}" stroke="${fg}" stroke-width="2"/>
  </svg>`;
};
const protectedColumnOverlay = (props) => {
    const fg = props.fgColor;
    const bg = props.bgColor;
    return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.43 6.04v-.18a3.86 3.86 0 0 0-7.72 0v.18A2.15 2.15 0 0 0 3 8.14v5.72C3 15.04 3.96 16 5.14 16H12c1.18 0 2.14-.96 2.14-2.14V8.14c0-1.03-.73-1.9-1.71-2.1zM7.86 6v-.14a.71.71 0 1 1 1.43 0V6H7.86z" fill="${bg}" stroke="${fg}" stroke-width="2"/>
  </svg>
`;
};
const sprites = {
    headerRowID,
    headerNumber,
    headerCode,
    headerString,
    headerBoolean,
    headerAudioUri,
    headerVideoUri,
    headerEmoji,
    headerImage,
    headerUri,
    headerPhone,
    headerMarkdown,
    headerDate,
    headerTime,
    headerEmail,
    headerReference,
    headerIfThenElse,
    headerSingleValue,
    headerLookup,
    headerTextTemplate,
    headerMath,
    headerRollup,
    headerJoinStrings,
    headerSplitString,
    headerGeoDistance,
    headerArray,
    rowOwnerOverlay,
    protectedColumnOverlay,
    renameIcon,
};
//# sourceMappingURL=sprites.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/use-animation-queue.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAnimationQueue: () => (/* binding */ useAnimationQueue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _cell_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/cell-set.js");
/* harmony import */ var _common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/render-state-provider.js");




function useAnimationQueue(draw) {
    const queue = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const seq = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const drawRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(draw);
    drawRef.current = draw;
    const loop = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        const requeue = () => window.requestAnimationFrame(fn);
        const fn = () => {
            const toDraw = queue.current.map(_common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_2__.unpackNumberToColRow);
            queue.current = [];
            drawRef.current(new _cell_set_js__WEBPACK_IMPORTED_MODULE_1__.CellSet(toDraw));
            if (queue.current.length > 0) {
                seq.current++;
            }
            else {
                seq.current = 0;
            }
        };
        window.requestAnimationFrame(seq.current > 600 ? requeue : fn);
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((item) => {
        if (queue.current.length === 0)
            loop();
        const packed = (0,_common_render_state_provider_js__WEBPACK_IMPORTED_MODULE_2__.packColRowToNumber)(item[0], item[1]);
        if (queue.current.includes(packed))
            return;
        queue.current.push(packed);
    }, [loop]);
}
//# sourceMappingURL=use-animation-queue.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/use-selection-behavior.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSelectionBehavior: () => (/* binding */ useSelectionBehavior)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");


function useSelectionBehavior(gridSelection, setGridSelection, rangeBehavior, columnBehavior, rowBehavior, rangeSelect) {
    // if append is true, the current range will be added to the rangeStack
    const setCurrent = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((value, expand, append, trigger) => {
        if ((rangeSelect === "cell" || rangeSelect === "multi-cell") && value !== undefined) {
            value = {
                ...value,
                range: {
                    x: value.cell[0],
                    y: value.cell[1],
                    width: 1,
                    height: 1,
                },
            };
        }
        const rangeMixable = rangeBehavior === "mixed" && (append || trigger === "drag");
        const allowColumnCoSelect = columnBehavior === "mixed" && rangeMixable;
        const allowRowCoSelect = rowBehavior === "mixed" && rangeMixable;
        let newVal = {
            current: value === undefined
                ? undefined
                : {
                    ...value,
                    rangeStack: trigger === "drag" ? gridSelection.current?.rangeStack ?? [] : [],
                },
            columns: allowColumnCoSelect ? gridSelection.columns : _data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.CompactSelection.empty(),
            rows: allowRowCoSelect ? gridSelection.rows : _data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.CompactSelection.empty(),
        };
        const addLastRange = append && (rangeSelect === "multi-rect" || rangeSelect === "multi-cell");
        if (addLastRange && newVal.current !== undefined && gridSelection.current !== undefined) {
            newVal = {
                ...newVal,
                current: {
                    ...newVal.current,
                    rangeStack: [...gridSelection.current.rangeStack, gridSelection.current.range],
                },
            };
        }
        setGridSelection(newVal, expand);
    }, [columnBehavior, gridSelection, rangeBehavior, rangeSelect, rowBehavior, setGridSelection]);
    const setSelectedRows = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newRows, append, allowMixed) => {
        newRows = newRows ?? gridSelection.rows;
        if (append !== undefined) {
            newRows = newRows.add(append);
        }
        let newVal;
        if (rowBehavior === "exclusive" && newRows.length > 0) {
            newVal = {
                current: undefined,
                columns: _data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.CompactSelection.empty(),
                rows: newRows,
            };
        }
        else {
            const rangeMixed = allowMixed && rangeBehavior === "mixed";
            const columnMixed = allowMixed && columnBehavior === "mixed";
            const current = !rangeMixed ? undefined : gridSelection.current;
            newVal = {
                current,
                columns: columnMixed ? gridSelection.columns : _data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.CompactSelection.empty(),
                rows: newRows,
            };
        }
        setGridSelection(newVal, false);
    }, [columnBehavior, gridSelection, rangeBehavior, rowBehavior, setGridSelection]);
    const setSelectedColumns = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newCols, append, allowMixed) => {
        newCols = newCols ?? gridSelection.columns;
        if (append !== undefined) {
            newCols = newCols.add(append);
        }
        let newVal;
        if (columnBehavior === "exclusive" && newCols.length > 0) {
            newVal = {
                current: undefined,
                rows: _data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.CompactSelection.empty(),
                columns: newCols,
            };
        }
        else {
            const rangeMixed = allowMixed && rangeBehavior === "mixed";
            const rowMixed = allowMixed && rowBehavior === "mixed";
            const current = !rangeMixed ? undefined : gridSelection.current;
            newVal = {
                current,
                rows: rowMixed ? gridSelection.rows : _data_grid_types_js__WEBPACK_IMPORTED_MODULE_1__.CompactSelection.empty(),
                columns: newCols,
            };
        }
        setGridSelection(newVal, false);
    }, [columnBehavior, gridSelection, rangeBehavior, rowBehavior, setGridSelection]);
    return [setCurrent, setSelectedRows, setSelectedColumns];
}
//# sourceMappingURL=use-selection-behavior.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/growing-entry/growing-entry-style.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrowingEntryStyle: () => (/* binding */ GrowingEntryStyle),
/* harmony export */   InputBox: () => (/* binding */ InputBox),
/* harmony export */   ShadowBox: () => (/* binding */ ShadowBox)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");

const InputBox = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('textarea')({
  name: "InputBox",
  class: "gdg-izpuzkl",
  propsAsIs: false
});
const ShadowBox = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "ShadowBox",
  class: "gdg-s69h75o",
  propsAsIs: false
});
const GrowingEntryStyle = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "GrowingEntryStyle",
  class: "gdg-g1y0xocz",
  propsAsIs: false
});



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/growing-entry/growing-entry.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrowingEntry: () => (/* binding */ GrowingEntry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _growing_entry_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/growing-entry/growing-entry-style.js");
/* harmony import */ var _common_support_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/support.js");



let globalInputID = 0;
/** @category Renderers */
const GrowingEntry = (props) => {
    const { placeholder, value, onKeyDown, highlight, altNewline, validatedSelection, ...rest } = props;
    const { onChange, className } = rest;
    const inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const useText = value ?? "";
    (0,_common_support_js__WEBPACK_IMPORTED_MODULE_2__.assert)(onChange !== undefined, "GrowingEntry must be a controlled input area");
    // 10 million id's aught to be enough for anybody
    const [inputID] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => "input-box-" + (globalInputID = (globalInputID + 1) % 10000000));
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        const ta = inputRef.current;
        if (ta === null)
            return;
        if (ta.disabled)
            return;
        const length = useText.toString().length;
        ta.focus();
        ta.setSelectionRange(highlight ? 0 : length, length);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
        if (validatedSelection !== undefined) {
            const range = typeof validatedSelection === "number" ? [validatedSelection, null] : validatedSelection;
            inputRef.current?.setSelectionRange(range[0], range[1]);
        }
    }, [validatedSelection]);
    const onKeyDownInner = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(e => {
        if (e.key === "Enter" && e.shiftKey && altNewline === true) {
            return;
        }
        onKeyDown?.(e);
    }, [altNewline, onKeyDown]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_growing_entry_style_js__WEBPACK_IMPORTED_MODULE_1__.GrowingEntryStyle, { className: "gdg-growing-entry" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_growing_entry_style_js__WEBPACK_IMPORTED_MODULE_1__.ShadowBox, { className: className }, useText + "\n"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_growing_entry_style_js__WEBPACK_IMPORTED_MODULE_1__.InputBox, { ...rest, className: (className ?? "") + " gdg-input", id: inputID, ref: inputRef, onKeyDown: onKeyDownInner, value: useText, placeholder: placeholder, dir: "auto" })));
};
//# sourceMappingURL=growing-entry.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/markdown-div/markdown-div.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkdownDiv)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/marked/lib/marked.esm.js");
/* harmony import */ var _private_markdown_container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/markdown-div/private/markdown-container.js");



/** @category Renderers */
class MarkdownDiv extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    targetElement = null;
    renderMarkdownIntoDiv() {
        const { targetElement, props } = this;
        if (targetElement === null)
            return;
        const { contents, createNode } = props;
        const innerHTML = (0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(contents);
        const childRange = document.createRange();
        childRange.selectNodeContents(targetElement);
        childRange.deleteContents();
        let newChild = createNode?.(innerHTML);
        if (newChild === undefined) {
            const childDoc = document.createElement("template");
            childDoc.innerHTML = innerHTML;
            newChild = childDoc.content;
        }
        targetElement.append(newChild);
        const tags = targetElement.getElementsByTagName("a");
        for (const tag of tags) {
            tag.target = "_blank";
            tag.rel = "noreferrer noopener";
        }
    }
    containerRefHook = (element) => {
        this.targetElement = element;
        this.renderMarkdownIntoDiv();
    };
    render() {
        // Doing this in the ref hook works great when we first render, but never again.
        // This only works great after the first render, but not in the first render.
        // Putting the two together makes the full solution.
        this.renderMarkdownIntoDiv();
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_private_markdown_container_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownContainer, { ref: this.containerRefHook });
    }
}
//# sourceMappingURL=markdown-div.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/markdown-div/private/markdown-container.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownContainer: () => (/* binding */ MarkdownContainer)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");

const MarkdownContainer = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "MarkdownContainer",
  class: "gdg-mnuv029",
  propsAsIs: false
});



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/infinite-scroller.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfiniteScroller: () => (/* binding */ InfiniteScroller)
/* harmony export */ });
/* harmony import */ var _linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@linaria/react/dist/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _common_resize_detector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/resize-detector.js");
/* harmony import */ var _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/browser-detect.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js");
/* harmony import */ var _use_kinetic_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/use-kinetic-scroll.js");






const _exp = /*#__PURE__*/() => p => p.isSafari ? "scroll" : "auto";
const ScrollRegionStyle = /*#__PURE__*/(0,_linaria_react__WEBPACK_IMPORTED_MODULE_0__.styled)('div')({
  name: "ScrollRegionStyle",
  class: "gdg-s1dgczr6",
  propsAsIs: false,
  vars: {
    "s1dgczr6-0": [_exp()]
  }
});
function useTouchUpDelayed(delay) {
  const [hasTouches, setHasTouches] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const safeWindow = typeof window === "undefined" ? null : window;
  const cbTimer = react__WEBPACK_IMPORTED_MODULE_1__.useRef(0);
  (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_4__.useEventListener)("touchstart", react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    window.clearTimeout(cbTimer.current);
    setHasTouches(true);
  }, []), safeWindow, true, false);
  (0,_common_utils_js__WEBPACK_IMPORTED_MODULE_4__.useEventListener)("touchend", react__WEBPACK_IMPORTED_MODULE_1__.useCallback(e => {
    if (e.touches.length === 0) {
      cbTimer.current = window.setTimeout(() => setHasTouches(false), delay);
    }
  }, [delay]), safeWindow, true, false);
  return hasTouches;
}
const InfiniteScroller = p => {
  const {
    children,
    clientHeight,
    scrollHeight,
    scrollWidth,
    update,
    draggable,
    className,
    preventDiagonalScrolling = false,
    paddingBottom = 0,
    paddingRight = 0,
    rightElement,
    rightElementProps,
    kineticScrollPerfHack = false,
    scrollRef,
    initialSize
  } = p;
  const padders = [];
  const rightElementSticky = rightElementProps?.sticky ?? false;
  const rightElementFill = rightElementProps?.fill ?? false;
  const offsetY = react__WEBPACK_IMPORTED_MODULE_1__.useRef(0);
  const lastScrollY = react__WEBPACK_IMPORTED_MODULE_1__.useRef(0);
  const scroller = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const dpr = typeof window === "undefined" ? 1 : window.devicePixelRatio;
  const lastScrollPosition = react__WEBPACK_IMPORTED_MODULE_1__.useRef({
    scrollLeft: 0,
    scrollTop: 0,
    lockDirection: undefined
  });
  const rightWrapRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const hasTouches = useTouchUpDelayed(200);
  const [isIdle, setIsIdle] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);
  const idleTimer = react__WEBPACK_IMPORTED_MODULE_1__.useRef(0);
  react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => {
    if (!isIdle || hasTouches || lastScrollPosition.current.lockDirection === undefined) return;
    const el = scroller.current;
    if (el === null) return;
    const [lx, ly] = lastScrollPosition.current.lockDirection;
    if (lx !== undefined) {
      el.scrollLeft = lx;
    } else if (ly !== undefined) {
      el.scrollTop = ly;
    }
    lastScrollPosition.current.lockDirection = undefined;
  }, [hasTouches, isIdle]);
  const onScroll = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((scrollLeft, scrollTop) => {
    const el = scroller.current;
    if (el === null) return;
    scrollTop = scrollTop ?? el.scrollTop;
    scrollLeft = scrollLeft ?? el.scrollLeft;
    const lastScrollTop = lastScrollPosition.current.scrollTop;
    const lastScrollLeft = lastScrollPosition.current.scrollLeft;
    const dx = scrollLeft - lastScrollLeft;
    const dy = scrollTop - lastScrollTop;
    if (hasTouches && dx !== 0 && dy !== 0 && (Math.abs(dx) > 3 || Math.abs(dy) > 3) && preventDiagonalScrolling && lastScrollPosition.current.lockDirection === undefined) {
      lastScrollPosition.current.lockDirection = Math.abs(dx) < Math.abs(dy) ? [lastScrollLeft, undefined] : [undefined, lastScrollTop];
    }
    const lock = lastScrollPosition.current.lockDirection;
    scrollLeft = lock?.[0] ?? scrollLeft;
    scrollTop = lock?.[1] ?? scrollTop;
    lastScrollPosition.current.scrollLeft = scrollLeft;
    lastScrollPosition.current.scrollTop = scrollTop;
    const cWidth = el.clientWidth;
    const cHeight = el.clientHeight;
    const newY = scrollTop;
    const delta = lastScrollY.current - newY;
    const scrollableHeight = el.scrollHeight - cHeight;
    lastScrollY.current = newY;
    if (scrollableHeight > 0 && (Math.abs(delta) > 2000 || newY === 0 || newY === scrollableHeight) && scrollHeight > el.scrollHeight + 5) {
      const prog = newY / scrollableHeight;
      const recomputed = (scrollHeight - cHeight) * prog;
      offsetY.current = recomputed - newY;
    }
    if (lock !== undefined) {
      window.clearTimeout(idleTimer.current);
      setIsIdle(false);
      idleTimer.current = window.setTimeout(() => setIsIdle(true), 200);
    }
    update({
      x: scrollLeft,
      y: newY + offsetY.current,
      width: cWidth - paddingRight,
      height: cHeight - paddingBottom,
      paddingRight: rightWrapRef.current?.clientWidth ?? 0
    });
  }, [paddingBottom, paddingRight, scrollHeight, update, preventDiagonalScrolling, hasTouches]);
  (0,_use_kinetic_scroll_js__WEBPACK_IMPORTED_MODULE_5__["default"])(kineticScrollPerfHack && _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_3__.browserIsSafari.value, onScroll, scroller);
  const onScrollRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(onScroll);
  onScrollRef.current = onScroll;
  const lastProps = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const didFirstScroll = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  // if this is not a layout effect there will be a flicker when changing the number of freezeColumns
  // we need to document what this is needed at all.
  react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => {
    if (didFirstScroll.current) onScroll();else didFirstScroll.current = true;
  }, [onScroll, paddingBottom, paddingRight]);
  const setRefs = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(instance => {
    scroller.current = instance;
    if (scrollRef !== undefined) {
      scrollRef.current = instance;
    }
  }, [scrollRef]);
  let key = 0;
  let h = 0;
  padders.push(react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    key: key++,
    style: {
      width: scrollWidth,
      height: 0
    }
  }));
  while (h < scrollHeight) {
    const toAdd = Math.min(5000000, scrollHeight - h);
    padders.push(react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      key: key++,
      style: {
        width: 0,
        height: toAdd
      }
    }));
    h += toAdd;
  }
  const {
    ref,
    width,
    height
  } = (0,_common_resize_detector_js__WEBPACK_IMPORTED_MODULE_2__.useResizeDetector)(initialSize);
  if (typeof window !== "undefined" && (lastProps.current?.height !== height || lastProps.current?.width !== width)) {
    window.setTimeout(() => onScrollRef.current(), 0);
    lastProps.current = {
      width,
      height
    };
  }
  if ((width ?? 0) === 0 || (height ?? 0) === 0) return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    ref: ref
  });
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    ref: ref
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(ScrollRegionStyle, {
    isSafari: _common_browser_detect_js__WEBPACK_IMPORTED_MODULE_3__.browserIsSafari.value
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dvn-underlay"
  }, children), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    ref: setRefs,
    style: lastProps.current,
    draggable: draggable,
    onDragStart: e => {
      if (!draggable) {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    className: "dvn-scroller " + (className ?? ""),
    onScroll: () => onScroll()
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dvn-scroll-inner" + (rightElement === undefined ? " dvn-hidden" : "")
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dvn-stack"
  }, padders), rightElement !== undefined && react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, !rightElementFill && react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dvn-spacer"
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    ref: rightWrapRef,
    style: {
      height,
      maxHeight: clientHeight - Math.ceil(dpr % 1),
      position: "sticky",
      top: 0,
      paddingLeft: 1,
      marginBottom: -40,
      marginRight: paddingRight,
      flexGrow: rightElementFill ? 1 : undefined,
      right: rightElementSticky ? paddingRight ?? 0 : undefined,
      pointerEvents: "auto"
    }
  }, rightElement))))));
};



/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/scrolling-data-grid.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _data_grid_dnd_data_grid_dnd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-dnd/data-grid-dnd.js");
/* harmony import */ var _infinite_scroller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/infinite-scroller.js");



const GridScroller = p => {
    const { columns, rows, rowHeight, headerHeight, groupHeaderHeight, enableGroups, freezeColumns, experimental, nonGrowWidth, clientSize, className, onVisibleRegionChanged, scrollRef, preventDiagonalScrolling, rightElement, rightElementProps, overscrollX, overscrollY, initialSize, smoothScrollX = false, smoothScrollY = false, isDraggable, } = p;
    const { paddingRight, paddingBottom } = experimental ?? {};
    const [clientWidth, clientHeight] = clientSize;
    const last = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const lastX = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const lastY = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const lastSize = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const width = nonGrowWidth + Math.max(0, overscrollX ?? 0);
    let height = enableGroups ? headerHeight + groupHeaderHeight : headerHeight;
    if (typeof rowHeight === "number") {
        height += rows * rowHeight;
    }
    else {
        for (let r = 0; r < rows; r++) {
            height += rowHeight(r);
        }
    }
    if (overscrollY !== undefined) {
        height += overscrollY;
    }
    const lastArgs = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const processArgs = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (lastArgs.current === undefined)
            return;
        const args = { ...lastArgs.current };
        let x = 0;
        let tx = args.x < 0 ? -args.x : 0;
        let cellRight = 0;
        let cellX = 0;
        args.x = args.x < 0 ? 0 : args.x;
        let stickyColWidth = 0;
        for (let i = 0; i < freezeColumns; i++) {
            stickyColWidth += columns[i].width;
        }
        for (const c of columns) {
            const cx = x - stickyColWidth;
            if (args.x >= cx + c.width) {
                x += c.width;
                cellX++;
                cellRight++;
            }
            else if (args.x > cx) {
                x += c.width;
                if (smoothScrollX) {
                    tx += cx - args.x;
                }
                else {
                    cellX++;
                }
                cellRight++;
            }
            else if (args.x + args.width > cx) {
                x += c.width;
                cellRight++;
            }
            else {
                break;
            }
        }
        let ty = 0;
        let cellY = 0;
        let cellBottom = 0;
        if (typeof rowHeight === "number") {
            if (smoothScrollY) {
                cellY = Math.floor(args.y / rowHeight);
                ty = cellY * rowHeight - args.y;
            }
            else {
                cellY = Math.ceil(args.y / rowHeight);
            }
            cellBottom = Math.ceil(args.height / rowHeight) + cellY;
            if (ty < 0)
                cellBottom++;
        }
        else {
            let y = 0;
            for (let row = 0; row < rows; row++) {
                const rh = rowHeight(row);
                const cy = y + (smoothScrollY ? 0 : rh / 2);
                if (args.y >= y + rh) {
                    y += rh;
                    cellY++;
                    cellBottom++;
                }
                else if (args.y > cy) {
                    y += rh;
                    if (smoothScrollY) {
                        ty += cy - args.y;
                    }
                    else {
                        cellY++;
                    }
                    cellBottom++;
                }
                else if (args.y + args.height > rh / 2 + y) {
                    y += rh;
                    cellBottom++;
                }
                else {
                    break;
                }
            }
        }
        const rect = {
            x: cellX,
            y: cellY,
            width: cellRight - cellX,
            height: cellBottom - cellY,
        };
        const oldRect = last.current;
        if (oldRect === undefined ||
            oldRect.y !== rect.y ||
            oldRect.x !== rect.x ||
            oldRect.height !== rect.height ||
            oldRect.width !== rect.width ||
            lastX.current !== tx ||
            lastY.current !== ty ||
            args.width !== lastSize.current?.[0] ||
            args.height !== lastSize.current?.[1]) {
            onVisibleRegionChanged?.({
                x: cellX,
                y: cellY,
                width: cellRight - cellX,
                height: cellBottom - cellY,
            }, args.width, args.height, args.paddingRight ?? 0, tx, ty);
            last.current = rect;
            lastX.current = tx;
            lastY.current = ty;
            lastSize.current = [args.width, args.height];
        }
    }, [columns, rowHeight, rows, onVisibleRegionChanged, freezeColumns, smoothScrollX, smoothScrollY]);
    const onScrollUpdate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((args) => {
        lastArgs.current = args;
        processArgs();
    }, [processArgs]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        processArgs();
    }, [processArgs]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_infinite_scroller_js__WEBPACK_IMPORTED_MODULE_2__.InfiniteScroller, { scrollRef: scrollRef, className: className, kineticScrollPerfHack: experimental?.kineticScrollPerfHack, preventDiagonalScrolling: preventDiagonalScrolling, draggable: isDraggable === true || typeof isDraggable === "string", scrollWidth: width + (paddingRight ?? 0), scrollHeight: height + (paddingBottom ?? 0), clientHeight: clientHeight, rightElement: rightElement, paddingBottom: paddingBottom, paddingRight: paddingRight, rightElementProps: rightElementProps, update: onScrollUpdate, initialSize: initialSize },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_data_grid_dnd_data_grid_dnd_js__WEBPACK_IMPORTED_MODULE_1__["default"], { eventTargetRef: scrollRef, width: clientWidth, height: clientHeight, accessibilityHeight: p.accessibilityHeight, canvasRef: p.canvasRef, cellXOffset: p.cellXOffset, cellYOffset: p.cellYOffset, columns: p.columns, disabledRows: p.disabledRows, enableGroups: p.enableGroups, fillHandle: p.fillHandle, firstColAccessible: p.firstColAccessible, fixedShadowX: p.fixedShadowX, fixedShadowY: p.fixedShadowY, freezeColumns: p.freezeColumns, getCellContent: p.getCellContent, getCellRenderer: p.getCellRenderer, getGroupDetails: p.getGroupDetails, getRowThemeOverride: p.getRowThemeOverride, groupHeaderHeight: p.groupHeaderHeight, headerHeight: p.headerHeight, highlightRegions: p.highlightRegions, imageWindowLoader: p.imageWindowLoader, isFilling: p.isFilling, isFocused: p.isFocused, lockColumns: p.lockColumns, maxColumnWidth: p.maxColumnWidth, minColumnWidth: p.minColumnWidth, onHeaderMenuClick: p.onHeaderMenuClick, onMouseMove: p.onMouseMove, prelightCells: p.prelightCells, rowHeight: p.rowHeight, rows: p.rows, selection: p.selection, theme: p.theme, freezeTrailingRows: p.freezeTrailingRows, hasAppendRow: p.hasAppendRow, translateX: p.translateX, translateY: p.translateY, onColumnProposeMove: p.onColumnProposeMove, verticalBorder: p.verticalBorder, drawFocusRing: p.drawFocusRing, drawHeader: p.drawHeader, drawCell: p.drawCell, experimental: p.experimental, gridRef: p.gridRef, headerIcons: p.headerIcons, isDraggable: p.isDraggable, onCanvasBlur: p.onCanvasBlur, onCanvasFocused: p.onCanvasFocused, onCellFocused: p.onCellFocused, onColumnMoved: p.onColumnMoved, onColumnResize: p.onColumnResize, onColumnResizeEnd: p.onColumnResizeEnd, onColumnResizeStart: p.onColumnResizeStart, onContextMenu: p.onContextMenu, onDragEnd: p.onDragEnd, onDragLeave: p.onDragLeave, onDragOverCell: p.onDragOverCell, onDragStart: p.onDragStart, onDrop: p.onDrop, onItemHovered: p.onItemHovered, onKeyDown: p.onKeyDown, onKeyUp: p.onKeyUp, onMouseDown: p.onMouseDown, onMouseUp: p.onMouseUp, onRowMoved: p.onRowMoved, smoothScrollX: p.smoothScrollX, smoothScrollY: p.smoothScrollY })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridScroller);
//# sourceMappingURL=scrolling-data-grid.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/use-kinetic-scroll.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");

const useKineticScroll = (isEnabled, callback, targetScroller) => {
    const rafId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const isTouching = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const lastScrollPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const sameCount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);
    callbackRef.current = callback;
    const scrollEl = targetScroller.current;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const handleScroll = () => {
            if (isTouching.current === false && scrollEl !== null) {
                const currentScrollPosition = [scrollEl.scrollLeft, scrollEl.scrollTop];
                if (lastScrollPosition.current?.[0] === currentScrollPosition[0] &&
                    lastScrollPosition.current?.[1] === currentScrollPosition[1]) {
                    if (sameCount.current > 10) {
                        // Scroll position hasn't changed, stop the animation frame
                        lastScrollPosition.current = null;
                        isTouching.current = null;
                        return;
                    }
                    else {
                        sameCount.current++;
                    }
                }
                else {
                    sameCount.current = 0;
                    callbackRef.current(currentScrollPosition[0], currentScrollPosition[1]);
                    lastScrollPosition.current = currentScrollPosition;
                }
                rafId.current = window.setTimeout(handleScroll, 1000 / 120);
            }
        };
        const startTouch = () => {
            isTouching.current = true;
            lastScrollPosition.current = null; // Reset last scroll position on touch start
            if (rafId.current !== null) {
                window.clearTimeout(rafId.current);
                rafId.current = null;
            }
        };
        const endTouch = (event) => {
            if (event.touches.length === 0) {
                // All touches have ended
                isTouching.current = false;
                sameCount.current = 0;
                rafId.current = window.setTimeout(handleScroll, 1000 / 120);
            }
        };
        if (isEnabled && scrollEl !== null) {
            const element = scrollEl;
            element.addEventListener("touchstart", startTouch);
            element.addEventListener("touchend", endTouch);
            return () => {
                element.removeEventListener("touchstart", startTouch);
                element.removeEventListener("touchend", endTouch);
                if (rafId.current !== null) {
                    window.clearTimeout(rafId.current);
                }
            };
        }
    }, [isEnabled, scrollEl]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useKineticScroll);
//# sourceMappingURL=use-kinetic-scroll.js.map

/***/ }),

/***/ "./node_modules/@glideapps/glide-data-grid/dist/index.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@linaria/core/dist/index.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css_default),
/* harmony export */   cx: () => (/* binding */ cx_default)
/* harmony export */ });
// src/css.ts
var idx = 0;
var css = () => {
  if (false) // removed by dead control flow
{}
  throw new Error(
    'Using the "css" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly.'
  );
};
var css_default = css;

// src/cx.ts
var cx = function cx2() {
  const presentClassNames = Array.prototype.slice.call(arguments).filter(Boolean);
  const atomicClasses = {};
  const nonAtomicClasses = [];
  presentClassNames.forEach((arg) => {
    const individualClassNames = arg ? arg.split(" ") : [];
    individualClassNames.forEach((className) => {
      if (className.startsWith("atm_")) {
        const [, keyHash] = className.split("_");
        atomicClasses[keyHash] = className;
      } else {
        nonAtomicClasses.push(className);
      }
    });
  });
  const result = [];
  for (const keyHash in atomicClasses) {
    if (Object.prototype.hasOwnProperty.call(atomicClasses, keyHash)) {
      result.push(atomicClasses[keyHash]);
    }
  }
  result.push(...nonAtomicClasses);
  return result.join(" ");
};
var cx_default = cx;

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@linaria/react/dist/index.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styled: () => (/* binding */ styled_default)
/* harmony export */ });
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _linaria_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@linaria/core/dist/index.mjs");
// src/styled.ts



var isCapital = (ch) => ch.toUpperCase() === ch;
var filterKey = (keys) => (key) => keys.indexOf(key) === -1;
var omit = (obj, keys) => {
  const res = {};
  Object.keys(obj).filter(filterKey(keys)).forEach((key) => {
    res[key] = obj[key];
  });
  return res;
};
function filterProps(asIs, props, omitKeys) {
  const filteredProps = omit(props, omitKeys);
  if (!asIs) {
    const interopValidAttr = typeof _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"] === "function" ? { default: _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"] } : _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"];
    Object.keys(filteredProps).forEach((key) => {
      if (!interopValidAttr.default(key)) {
        delete filteredProps[key];
      }
    });
  }
  return filteredProps;
}
var warnIfInvalid = (value, componentName) => {
  if (true) {
    if (typeof value === "string" || typeof value === "number" && isFinite(value)) {
      return;
    }
    const stringified = typeof value === "object" ? JSON.stringify(value) : String(value);
    console.warn(
      `An interpolation evaluated to '${stringified}' in the component '${componentName}', which is probably a mistake. You should explicitly cast or transform the value to a string.`
    );
  }
};
var idx = 0;
function styled(tag) {
  var _a;
  let mockedClass = "";
  if (false) // removed by dead control flow
{}
  return (options) => {
    if (true) {
      if (Array.isArray(options)) {
        throw new Error(
          'Using the "styled" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly. See https://github.com/callstack/linaria#setup'
        );
      }
    }
    const render = (props, ref) => {
      const { as: component = tag, class: className = mockedClass } = props;
      const shouldKeepProps = options.propsAsIs === void 0 ? !(typeof component === "string" && component.indexOf("-") === -1 && !isCapital(component[0])) : options.propsAsIs;
      const filteredProps = filterProps(shouldKeepProps, props, [
        "as",
        "class"
      ]);
      filteredProps.ref = ref;
      filteredProps.className = options.atomic ? (0,_linaria_core__WEBPACK_IMPORTED_MODULE_2__.cx)(options.class, filteredProps.className || className) : (0,_linaria_core__WEBPACK_IMPORTED_MODULE_2__.cx)(filteredProps.className || className, options.class);
      const { vars } = options;
      if (vars) {
        const style = {};
        for (const name in vars) {
          const variable = vars[name];
          const result = variable[0];
          const unit = variable[1] || "";
          const value = typeof result === "function" ? result(props) : result;
          warnIfInvalid(value, options.name);
          style[`--${name}`] = `${value}${unit}`;
        }
        const ownStyle = filteredProps.style || {};
        const keys = Object.keys(ownStyle);
        if (keys.length > 0) {
          keys.forEach((key) => {
            style[key] = ownStyle[key];
          });
        }
        filteredProps.style = style;
      }
      if (tag.__linaria && tag !== component) {
        filteredProps.as = component;
        return react__WEBPACK_IMPORTED_MODULE_1__.createElement(tag, filteredProps);
      }
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(component, filteredProps);
    };
    const Result = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef ? react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(render) : (props) => {
      const rest = omit(props, ["innerRef"]);
      return render(rest, props.innerRef);
    };
    Result.displayName = options.name;
    Result.__linaria = {
      className: options.class || mockedClass,
      extends: tag
    };
    return Result;
  };
}
var styled_default =  true ? new Proxy(styled, {
  get(o, prop) {
    return o(prop);
  }
}) : 0;

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/canvas-hypertxt/dist/js/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCache: () => (/* binding */ v),
/* harmony export */   split: () => (/* binding */ _)
/* harmony export */ });
var d=new Map,b=new Map,z=new Map;function v(){d.clear(),z.clear(),b.clear()}function w(l,s,e,c,t){var n,r,o;let f=0,a={};for(let i of l)f+=(n=e.get(i))!=null?n:t,a[i]=((r=a[i])!=null?r:0)+1;let g=s-f;for(let i of Object.keys(a)){let m=a[i],u=(o=e.get(i))!=null?o:t,h=u*m/f,M=g*h*c/m,C=u+M;e.set(i,C)}}function R(l,s){var n;let e=new Map,c=0;for(let r of"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.-+=?"){let o=l.measureText(r).width;e.set(r,o),c+=o}let t=c/e.size,f=3,a=(s/t+f)/(f+1),g=e.keys();for(let r of g)e.set(r,((n=e.get(r))!=null?n:t)*a);return e}function p(l,s,e,c){var g,n;let t=b.get(e);if(c&&t!==void 0&&t.count>2e4){let r=z.get(e);if(r===void 0&&(r=R(l,t.size),z.set(e,r)),t.count>5e5){let i=0;for(let m of s)i+=(g=r.get(m))!=null?g:t.size;return i*1.01}let o=l.measureText(s);return w(s,o.width,r,Math.max(.05,1-t.count/2e5),t.size),b.set(e,{count:t.count+s.length,size:t.size}),o.width}let f=l.measureText(s),a=f.width/s.length;if(((n=t==null?void 0:t.count)!=null?n:0)>2e4)return f.width;if(t===void 0)b.set(e,{count:s.length,size:a});else{let r=a-t.size,o=s.length/(t.count+s.length),i=t.size+r*o;b.set(e,{count:t.count+s.length,size:i})}return f.width}function T(l,s,e,c,t,f,a,g){if(s.length<=1)return s.length;if(t<e)return-1;let n=Math.floor(e/t*f),r=p(l,s.slice(0,Math.max(0,n)),c,a),o=g==null?void 0:g(s);if(r!==e)if(r<e){for(;r<e;)n++,r=p(l,s.slice(0,Math.max(0,n)),c,a);n--}else for(;r>e;){let i=o!==void 0?0:s.lastIndexOf(" ",n-1);i>0?n=i:n--,r=p(l,s.slice(0,Math.max(0,n)),c,a)}if(s[n]!==" "){let i=0;if(o===void 0)i=s.lastIndexOf(" ",n);else for(let m of o){if(m>n)break;i=m}i>0&&(n=i)}return n}function _(l,s,e,c,t,f){let a=`${s}_${e}_${c}px`,g=d.get(a);if(g!==void 0)return g;if(c<=0)return[];let n=[],r=s.split(`
`),o=b.get(e),i=o===void 0?s.length:c/o.size*1.5,m=t&&o!==void 0&&o.count>2e4;for(let u of r){let h=p(l,u.slice(0,Math.max(0,i)),e,m),M=Math.min(u.length,i);if(h<=c)n.push(u);else{for(;h>c;){let C=T(l,u,c,e,h,M,m,f),k=u.slice(0,Math.max(0,C));u=u.slice(k.length),n.push(k),h=p(l,u.slice(0,Math.max(0,i)),e,m),M=Math.min(u.length,i)}h>0&&n.push(u)}}return n=n.map((u,h)=>h===0?u.trimEnd():u.trim()),d.set(a,n),d.size>500&&d.delete(d.keys().next().value),n}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/lodash/_arrayAggregator.js":
/***/ ((module) => {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__("./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_baseAggregator.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__("./node_modules/lodash/_baseEach.js");

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__("./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__("./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseHas.js":
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__("./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__("./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__("./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_createAggregator.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayAggregator = __webpack_require__("./node_modules/lodash/_arrayAggregator.js"),
    baseAggregator = __webpack_require__("./node_modules/lodash/_baseAggregator.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__("./node_modules/lodash/_Set.js"),
    noop = __webpack_require__("./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__("./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/clamp.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClamp = __webpack_require__("./node_modules/lodash/_baseClamp.js"),
    toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;


/***/ }),

/***/ "./node_modules/lodash/groupBy.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"),
    createAggregator = __webpack_require__("./node_modules/lodash/_createAggregator.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),

/***/ "./node_modules/lodash/has.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHas = __webpack_require__("./node_modules/lodash/_baseHas.js"),
    hasPath = __webpack_require__("./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/uniq.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__("./node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react-easy-swipe/lib/react-swipe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{ var mod; }
})(this, function (exports, _reactSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _reactSwipe2.default;
});

/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/react-swipe.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/react/index.js"), __webpack_require__("./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{ var mod; }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var supportsCaptureOption = false;
  function setHasSupportToCaptureOption(hasSupport) {
    supportsCaptureOption = hasSupport;
  }

  try {
    addEventListener('test', null, Object.defineProperty({}, 'capture', { get: function get() {
        setHasSupportToCaptureOption(true);
      } }));
  } catch (e) {} // eslint-disable-line no-empty

  function getSafeEventHandlerOpts() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

    return supportsCaptureOption ? options : options.capture;
  }

  /**
   * [getPosition returns a position element that works for mouse or touch events]
   * @param  {[Event]} event [the received event]
   * @return {[Object]}      [x and y coords]
   */
  function getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  var ReactSwipe = function (_Component) {
    _inherits(ReactSwipe, _Component);

    function ReactSwipe() {
      var _ref;

      _classCallCheck(this, ReactSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

      _this._onMouseDown = _this._onMouseDown.bind(_this);
      _this._onMouseMove = _this._onMouseMove.bind(_this);
      _this._onMouseUp = _this._onMouseUp.bind(_this);

      _this._setSwiperRef = _this._setSwiperRef.bind(_this);
      return _this;
    }

    _createClass(ReactSwipe, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.swiper) {
          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.swiper) {
          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: '_onMouseDown',
      value: function _onMouseDown(event) {
        if (!this.props.allowMouseEvents) {
          return;
        }

        this.mouseDown = true;

        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('mousemove', this._onMouseMove);

        this._handleSwipeStart(event);
      }
    }, {
      key: '_onMouseMove',
      value: function _onMouseMove(event) {
        if (!this.mouseDown) {
          return;
        }

        this._handleSwipeMove(event);
      }
    }, {
      key: '_onMouseUp',
      value: function _onMouseUp(event) {
        this.mouseDown = false;

        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);

        this._handleSwipeEnd(event);
      }
    }, {
      key: '_handleSwipeStart',
      value: function _handleSwipeStart(event) {
        var _getPosition = getPosition(event),
            x = _getPosition.x,
            y = _getPosition.y;

        this.moveStart = { x: x, y: y };
        this.props.onSwipeStart(event);
      }
    }, {
      key: '_handleSwipeMove',
      value: function _handleSwipeMove(event) {
        if (!this.moveStart) {
          return;
        }

        var _getPosition2 = getPosition(event),
            x = _getPosition2.x,
            y = _getPosition2.y;

        var deltaX = x - this.moveStart.x;
        var deltaY = y - this.moveStart.y;
        this.moving = true;

        // handling the responsability of cancelling the scroll to
        // the component handling the event
        var shouldPreventDefault = this.props.onSwipeMove({
          x: deltaX,
          y: deltaY
        }, event);

        if (shouldPreventDefault && event.cancelable) {
          event.preventDefault();
        }

        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
      }
    }, {
      key: '_handleSwipeEnd',
      value: function _handleSwipeEnd(event) {
        this.props.onSwipeEnd(event);

        var tolerance = this.props.tolerance;


        if (this.moving && this.movePosition) {
          if (this.movePosition.deltaX < -tolerance) {
            this.props.onSwipeLeft(1, event);
          } else if (this.movePosition.deltaX > tolerance) {
            this.props.onSwipeRight(1, event);
          }
          if (this.movePosition.deltaY < -tolerance) {
            this.props.onSwipeUp(1, event);
          } else if (this.movePosition.deltaY > tolerance) {
            this.props.onSwipeDown(1, event);
          }
        }

        this.moveStart = null;
        this.moving = false;
        this.movePosition = null;
      }
    }, {
      key: '_setSwiperRef',
      value: function _setSwiperRef(node) {
        this.swiper = node;
        this.props.innerRef(node);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            tagName = _props.tagName,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            allowMouseEvents = _props.allowMouseEvents,
            onSwipeUp = _props.onSwipeUp,
            onSwipeDown = _props.onSwipeDown,
            onSwipeLeft = _props.onSwipeLeft,
            onSwipeRight = _props.onSwipeRight,
            onSwipeStart = _props.onSwipeStart,
            onSwipeMove = _props.onSwipeMove,
            onSwipeEnd = _props.onSwipeEnd,
            innerRef = _props.innerRef,
            tolerance = _props.tolerance,
            props = _objectWithoutProperties(_props, ['tagName', 'className', 'style', 'children', 'allowMouseEvents', 'onSwipeUp', 'onSwipeDown', 'onSwipeLeft', 'onSwipeRight', 'onSwipeStart', 'onSwipeMove', 'onSwipeEnd', 'innerRef', 'tolerance']);

        return _react2.default.createElement(
          this.props.tagName,
          _extends({
            ref: this._setSwiperRef,
            onMouseDown: this._onMouseDown,
            onTouchStart: this._handleSwipeStart,
            onTouchEnd: this._handleSwipeEnd,
            className: className,
            style: style
          }, props),
          children
        );
      }
    }]);

    return ReactSwipe;
  }(_react.Component);

  ReactSwipe.displayName = 'ReactSwipe';
  ReactSwipe.propTypes = {
    tagName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    allowMouseEvents: _propTypes2.default.bool,
    onSwipeUp: _propTypes2.default.func,
    onSwipeDown: _propTypes2.default.func,
    onSwipeLeft: _propTypes2.default.func,
    onSwipeRight: _propTypes2.default.func,
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    innerRef: _propTypes2.default.func,
    tolerance: _propTypes2.default.number.isRequired
  };
  ReactSwipe.defaultProps = {
    tagName: 'div',
    allowMouseEvents: false,
    onSwipeUp: function onSwipeUp() {},
    onSwipeDown: function onSwipeDown() {},
    onSwipeLeft: function onSwipeLeft() {},
    onSwipeRight: function onSwipeRight() {},
    onSwipeStart: function onSwipeStart() {},
    onSwipeMove: function onSwipeMove() {},
    onSwipeEnd: function onSwipeEnd() {},
    innerRef: function innerRef() {},

    tolerance: 0
  };
  exports.default = ReactSwipe;
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _default = function _default(position, metric, axis) {
  var positionPercent = position === 0 ? position : position + metric;
  var positionCss = axis === 'horizontal' ? [positionPercent, 0, 0] : [0, positionPercent, 0];
  var transitionProp = 'translate3d';
  var translatedPosition = '(' + positionCss.join(',') + ')';
  return transitionProp + translatedPosition;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fadeAnimationHandler = exports.slideStopSwipingHandler = exports.slideSwipeAnimationHandler = exports.slideAnimationHandler = void 0;

var _react = __webpack_require__("./node_modules/react/index.js");

var _CSSTranslate = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"));

var _utils = __webpack_require__("./node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Main animation handler for the default 'sliding' style animation
 * @param props
 * @param state
 */
var slideAnimationHandler = function slideAnimationHandler(props, state) {
  var returnStyles = {};
  var selectedItem = state.selectedItem;
  var previousItem = selectedItem;
  var lastPosition = _react.Children.count(props.children) - 1;
  var needClonedSlide = props.infiniteLoop && (selectedItem < 0 || selectedItem > lastPosition); // Handle list position if it needs a clone

  if (needClonedSlide) {
    if (previousItem < 0) {
      if (props.centerMode && props.centerSlidePercentage && props.axis === 'horizontal') {
        returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * props.centerSlidePercentage - (100 - props.centerSlidePercentage) / 2, props.axis);
      } else {
        returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * 100, props.axis);
      }
    } else if (previousItem > lastPosition) {
      returnStyles.itemListStyle = (0, _utils.setPosition)(0, props.axis);
    }

    return returnStyles;
  }

  var currentPosition = (0, _utils.getPosition)(selectedItem, props); // if 3d is available, let's take advantage of the performance of transform

  var transformProp = (0, _CSSTranslate.default)(currentPosition, '%', props.axis);
  var transitionTime = props.transitionTime + 'ms';
  returnStyles.itemListStyle = {
    WebkitTransform: transformProp,
    msTransform: transformProp,
    OTransform: transformProp,
    transform: transformProp
  };

  if (!state.swiping) {
    returnStyles.itemListStyle = _objectSpread(_objectSpread({}, returnStyles.itemListStyle), {}, {
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime
    });
  }

  return returnStyles;
};
/**
 * Swiping animation handler for the default 'sliding' style animation
 * @param delta
 * @param props
 * @param state
 * @param setState
 */


exports.slideAnimationHandler = slideAnimationHandler;

var slideSwipeAnimationHandler = function slideSwipeAnimationHandler(delta, props, state, setState) {
  var returnStyles = {};
  var isHorizontal = props.axis === 'horizontal';

  var childrenLength = _react.Children.count(props.children);

  var initialBoundry = 0;
  var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
  var finalBoundry = props.infiniteLoop ? (0, _utils.getPosition)(childrenLength - 1, props) - 100 : (0, _utils.getPosition)(childrenLength - 1, props);
  var axisDelta = isHorizontal ? delta.x : delta.y;
  var handledDelta = axisDelta; // prevent user from swiping left out of boundaries

  if (currentPosition === initialBoundry && axisDelta > 0) {
    handledDelta = 0;
  } // prevent user from swiping right out of boundaries


  if (currentPosition === finalBoundry && axisDelta < 0) {
    handledDelta = 0;
  }

  var position = currentPosition + 100 / (state.itemSize / handledDelta);
  var hasMoved = Math.abs(axisDelta) > props.swipeScrollTolerance;

  if (props.infiniteLoop && hasMoved) {
    // When allowing infinite loop, if we slide left from position 0 we reveal the cloned last slide that appears before it
    // if we slide even further we need to jump to other side so it can continue - and vice versa for the last slide
    if (state.selectedItem === 0 && position > -100) {
      position -= childrenLength * 100;
    } else if (state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
      position += childrenLength * 100;
    }
  }

  if (!props.preventMovementUntilSwipeScrollTolerance || hasMoved || state.swipeMovementStarted) {
    if (!state.swipeMovementStarted) {
      setState({
        swipeMovementStarted: true
      });
    }

    returnStyles.itemListStyle = (0, _utils.setPosition)(position, props.axis);
  } //allows scroll if the swipe was within the tolerance


  if (hasMoved && !state.cancelClick) {
    setState({
      cancelClick: true
    });
  }

  return returnStyles;
};
/**
 * Default 'sliding' style animination handler for when a swipe action stops.
 * @param props
 * @param state
 */


exports.slideSwipeAnimationHandler = slideSwipeAnimationHandler;

var slideStopSwipingHandler = function slideStopSwipingHandler(props, state) {
  var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
  var itemListStyle = (0, _utils.setPosition)(currentPosition, props.axis);
  return {
    itemListStyle: itemListStyle
  };
};
/**
 * Main animation handler for the default 'fade' style animation
 * @param props
 * @param state
 */


exports.slideStopSwipingHandler = slideStopSwipingHandler;

var fadeAnimationHandler = function fadeAnimationHandler(props, state) {
  var transitionTime = props.transitionTime + 'ms';
  var transitionTimingFunction = 'ease-in-out';
  var slideStyle = {
    position: 'absolute',
    display: 'block',
    zIndex: -2,
    minHeight: '100%',
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction
  };

  if (!state.swiping) {
    slideStyle = _objectSpread(_objectSpread({}, slideStyle), {}, {
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime
    });
  }

  return {
    slideStyle: slideStyle,
    selectedStyle: _objectSpread(_objectSpread({}, slideStyle), {}, {
      opacity: 1,
      position: 'relative'
    }),
    prevStyle: _objectSpread({}, slideStyle)
  };
};

exports.fadeAnimationHandler = fadeAnimationHandler;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _reactEasySwipe = _interopRequireDefault(__webpack_require__("./node_modules/react-easy-swipe/lib/index.js"));

var _cssClasses = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/cssClasses.js"));

var _Thumbs = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js"));

var _document = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/shims/document.js"));

var _window = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/shims/window.js"));

var _utils = __webpack_require__("./node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js");

var _animations = __webpack_require__("./node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  // @ts-ignore
  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "carouselWrapperRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "listRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "itemsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "timer", void 0);

    _defineProperty(_assertThisInitialized(_this), "animationHandler", void 0);

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node) {
      _this.thumbsRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function (node) {
      _this.carouselWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setListRef", function (node) {
      _this.listRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsRef", function (node, index) {
      if (!_this.itemsRef) {
        _this.itemsRef = [];
      }

      _this.itemsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function () {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }

      _this.clearAutoPlay();

      if (!_this.props.autoPlay) {
        return;
      }

      _this.timer = setTimeout(function () {
        _this.increment();
      }, _this.props.interval);
    });

    _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function () {
      if (_this.timer) clearTimeout(_this.timer);
    });

    _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function () {
      _this.clearAutoPlay();

      _this.autoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "stopOnHover", function () {
      _this.setState({
        isMouseEntered: true
      }, _this.clearAutoPlay);
    });

    _defineProperty(_assertThisInitialized(_this), "startOnLeave", function () {
      _this.setState({
        isMouseEntered: false
      }, _this.autoPlay);
    });

    _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function () {
      if (!_this.carouselWrapperRef) {
        return false;
      }

      if ((0, _document.default)().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains((0, _document.default)().activeElement)) {
        return true;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function (e) {
      if (!_this.isFocusWithinTheCarousel()) {
        return;
      }

      var axis = _this.props.axis;
      var isHorizontal = axis === 'horizontal';
      var keyNames = {
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        ArrowLeft: 37
      };
      var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
      var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;

      if (nextKey === e.keyCode) {
        _this.increment();
      } else if (prevKey === e.keyCode) {
        _this.decrement();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.state.initialized || !_this.itemsRef || _this.itemsRef.length === 0) {
        return;
      }

      var isHorizontal = _this.props.axis === 'horizontal';
      var firstItem = _this.itemsRef[0];

      if (!firstItem) {
        return;
      }

      var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;

      _this.setState({
        itemSize: itemSize
      });

      if (_this.thumbsRef) {
        _this.thumbsRef.updateSizes();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setMountState", function () {
      _this.setState({
        hasMount: true
      });

      _this.updateSizes();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item) {
      if (_react.Children.count(_this.props.children) === 0) {
        return;
      }

      if (_this.state.cancelClick) {
        _this.setState({
          cancelClick: false
        });

        return;
      }

      _this.props.onClickItem(index, item);

      if (index !== _this.state.selectedItem) {
        _this.setState({
          selectedItem: index
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (index, item) {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }

      _this.props.onChange(index, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function (index, item) {
      _this.props.onClickThumb(index, item);

      _this.moveTo(index);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function (event) {
      _this.setState({
        swiping: true
      });

      _this.props.onSwipeStart(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function (event) {
      _this.setState({
        swiping: false,
        cancelClick: false,
        swipeMovementStarted: false
      });

      _this.props.onSwipeEnd(event);

      _this.clearAutoPlay();

      if (_this.state.autoPlay) {
        _this.autoPlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (delta, event) {
      _this.props.onSwipeMove(event);

      var animationHandlerResponse = _this.props.swipeAnimationHandler(delta, _this.props, _this.state, _this.setState.bind(_assertThisInitialized(_this)));

      _this.setState(_objectSpread({}, animationHandlerResponse)); // If we have not moved, we should have an empty object returned
      // Return false to allow scrolling when not swiping


      return !!Object.keys(animationHandlerResponse).length;
    });

    _defineProperty(_assertThisInitialized(_this), "decrement", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      _this.moveTo(_this.state.selectedItem - (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "increment", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      _this.moveTo(_this.state.selectedItem + (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position) {
      if (typeof position !== 'number') {
        return;
      }

      var lastPosition = _react.Children.count(_this.props.children) - 1;

      if (position < 0) {
        position = _this.props.infiniteLoop ? lastPosition : 0;
      }

      if (position > lastPosition) {
        position = _this.props.infiniteLoop ? 0 : lastPosition;
      }

      _this.selectItem({
        // if it's not a slider, we don't need to set position here
        selectedItem: position
      }); // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
      // and will result in the interval function not being cleared correctly.


      if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
        _this.resetAutoPlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickNext", function () {
      _this.increment(1);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickPrev", function () {
      _this.decrement(1);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function () {
      _this.increment(1);

      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function () {
      _this.decrement(1);

      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeItem", function (newIndex) {
      return function (e) {
        if (!(0, _utils.isKeyboardEvent)(e) || e.key === 'Enter') {
          _this.moveTo(newIndex);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (state) {
      // Merge in the new state while updating updating previous item
      _this.setState(_objectSpread({
        previousItem: _this.state.selectedItem
      }, state), function () {
        // Run animation handler and update styles based on it
        _this.setState(_this.animationHandler(_this.props, _this.state));
      });

      _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
    });

    _defineProperty(_assertThisInitialized(_this), "getInitialImage", function () {
      var selectedItem = _this.props.selectedItem;
      var item = _this.itemsRef && _this.itemsRef[selectedItem];
      var images = item && item.getElementsByTagName('img') || [];
      return images[0];
    });

    _defineProperty(_assertThisInitialized(_this), "getVariableItemHeight", function (position) {
      var item = _this.itemsRef && _this.itemsRef[position];

      if (_this.state.hasMount && item && item.children.length) {
        var slideImages = item.children[0].getElementsByTagName('img') || [];

        if (slideImages.length > 0) {
          var image = slideImages[0];

          if (!image.complete) {
            // if the image is still loading, the size won't be available so we trigger a new render after it's done
            var onImageLoad = function onImageLoad() {
              _this.forceUpdate();

              image.removeEventListener('load', onImageLoad);
            };

            image.addEventListener('load', onImageLoad);
          }
        } // try to get img first, if img not there find first display tag


        var displayItem = slideImages[0] || item.children[0];
        var height = displayItem.clientHeight;
        return height > 0 ? height : null;
      }

      return null;
    });

    var initState = {
      initialized: false,
      previousItem: props.selectedItem,
      selectedItem: props.selectedItem,
      hasMount: false,
      isMouseEntered: false,
      autoPlay: props.autoPlay,
      swiping: false,
      swipeMovementStarted: false,
      cancelClick: false,
      itemSize: 1,
      itemListStyle: {},
      slideStyle: {},
      selectedStyle: {},
      prevStyle: {}
    };
    _this.animationHandler = typeof props.animationHandler === 'function' && props.animationHandler || props.animationHandler === 'fade' && _animations.fadeAnimationHandler || _animations.slideAnimationHandler;
    _this.state = _objectSpread(_objectSpread({}, initState), _this.animationHandler(props, initState));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.children) {
        return;
      }

      this.setupCarousel();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.children && this.props.children && !this.state.initialized) {
        this.setupCarousel();
      }

      if (!prevProps.autoFocus && this.props.autoFocus) {
        this.forceFocus();
      }

      if (prevState.swiping && !this.state.swiping) {
        // We stopped swiping, ensure we are heading to the new/current slide and not stuck
        this.setState(_objectSpread({}, this.props.stopSwipingHandler(this.props, this.state)));
      }

      if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
        this.updateSizes();
        this.moveTo(this.props.selectedItem);
      }

      if (prevProps.autoPlay !== this.props.autoPlay) {
        if (this.props.autoPlay) {
          this.setupAutoPlay();
        } else {
          this.destroyAutoPlay();
        }

        this.setState({
          autoPlay: this.props.autoPlay
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyCarousel();
    }
  }, {
    key: "setupCarousel",
    value: function setupCarousel() {
      var _this2 = this;

      this.bindEvents();

      if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
        this.setupAutoPlay();
      }

      if (this.props.autoFocus) {
        this.forceFocus();
      }

      this.setState({
        initialized: true
      }, function () {
        var initialImage = _this2.getInitialImage();

        if (initialImage && !initialImage.complete) {
          // if it's a carousel of images, we set the mount state after the first image is loaded
          initialImage.addEventListener('load', _this2.setMountState);
        } else {
          _this2.setMountState();
        }
      });
    }
  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.state.initialized) {
        this.unbindEvents();
        this.destroyAutoPlay();
      }
    }
  }, {
    key: "setupAutoPlay",
    value: function setupAutoPlay() {
      this.autoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.addEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "destroyAutoPlay",
    value: function destroyAutoPlay() {
      this.clearAutoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.removeEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.removeEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      (0, _window.default)().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      (0, _window.default)().addEventListener('DOMContentLoaded', this.updateSizes);

      if (this.props.useKeyboardArrows) {
        (0, _document.default)().addEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      // removing listeners
      (0, _window.default)().removeEventListener('resize', this.updateSizes);
      (0, _window.default)().removeEventListener('DOMContentLoaded', this.updateSizes);
      var initialImage = this.getInitialImage();

      if (initialImage) {
        initialImage.removeEventListener('load', this.setMountState);
      }

      if (this.props.useKeyboardArrows) {
        (0, _document.default)().removeEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      var _this$carouselWrapper;

      (_this$carouselWrapper = this.carouselWrapperRef) === null || _this$carouselWrapper === void 0 ? void 0 : _this$carouselWrapper.focus();
    }
  }, {
    key: "renderItems",
    value: function renderItems(isClone) {
      var _this3 = this;

      if (!this.props.children) {
        return [];
      }

      return _react.Children.map(this.props.children, function (item, index) {
        var isSelected = index === _this3.state.selectedItem;
        var isPrevious = index === _this3.state.previousItem;
        var style = isSelected && _this3.state.selectedStyle || isPrevious && _this3.state.prevStyle || _this3.state.slideStyle || {};

        if (_this3.props.centerMode && _this3.props.axis === 'horizontal') {
          style = _objectSpread(_objectSpread({}, style), {}, {
            minWidth: _this3.props.centerSlidePercentage + '%'
          });
        }

        if (_this3.state.swiping && _this3.state.swipeMovementStarted) {
          style = _objectSpread(_objectSpread({}, style), {}, {
            pointerEvents: 'none'
          });
        }

        var slideProps = {
          ref: function ref(e) {
            return _this3.setItemsRef(e, index);
          },
          key: 'itemKey' + index + (isClone ? 'clone' : ''),
          className: _cssClasses.default.ITEM(true, index === _this3.state.selectedItem, index === _this3.state.previousItem),
          onClick: _this3.handleClickItem.bind(_this3, index, item),
          style: style
        };
        return /*#__PURE__*/_react.default.createElement("li", slideProps, _this3.props.renderItem(item, {
          isSelected: index === _this3.state.selectedItem,
          isPrevious: index === _this3.state.previousItem
        }));
      });
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this4 = this;

      var _this$props = this.props,
          showIndicators = _this$props.showIndicators,
          labels = _this$props.labels,
          renderIndicator = _this$props.renderIndicator,
          children = _this$props.children;

      if (!showIndicators) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("ul", {
        className: "control-dots"
      }, _react.Children.map(children, function (_, index) {
        return renderIndicator && renderIndicator(_this4.changeItem(index), index === _this4.state.selectedItem, index, labels.item);
      }));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      if (!this.props.showStatus) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("p", {
        className: "carousel-status"
      }, this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children)));
    }
  }, {
    key: "renderThumbs",
    value: function renderThumbs() {
      if (!this.props.showThumbs || !this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement(_Thumbs.default, {
        ref: this.setThumbsRef,
        onSelectItem: this.handleClickThumb,
        selectedItem: this.state.selectedItem,
        transitionTime: this.props.transitionTime,
        thumbWidth: this.props.thumbWidth,
        labels: this.props.labels,
        emulateTouch: this.props.emulateTouch
      }, this.props.renderThumbs(this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (!this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }

      var isSwipeable = this.props.swipeable && _react.Children.count(this.props.children) > 1;
      var isHorizontal = this.props.axis === 'horizontal';
      var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1; // show left arrow?

      var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false; // show right arrow

      var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false;
      var itemsClone = this.renderItems(true);
      var firstClone = itemsClone.shift();
      var lastClone = itemsClone.pop();
      var swiperProps = {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: this.state.itemListStyle,
        tolerance: this.props.swipeScrollTolerance
      };
      var containerStyles = {};

      if (isHorizontal) {
        swiperProps.onSwipeLeft = this.onSwipeForward;
        swiperProps.onSwipeRight = this.onSwipeBackwards;

        if (this.props.dynamicHeight) {
          var itemHeight = this.getVariableItemHeight(this.state.selectedItem); // swiperProps.style.height = itemHeight || 'auto';

          containerStyles.height = itemHeight || 'auto';
        }
      } else {
        swiperProps.onSwipeUp = this.props.verticalSwipe === 'natural' ? this.onSwipeBackwards : this.onSwipeForward;
        swiperProps.onSwipeDown = this.props.verticalSwipe === 'natural' ? this.onSwipeForward : this.onSwipeBackwards;
        swiperProps.style = _objectSpread(_objectSpread({}, swiperProps.style), {}, {
          height: this.state.itemSize
        });
        containerStyles.height = this.state.itemSize;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        "aria-label": this.props.ariaLabel,
        className: _cssClasses.default.ROOT(this.props.className),
        ref: this.setCarouselWrapperRef,
        tabIndex: this.props.useKeyboardArrows ? 0 : undefined
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(true),
        style: {
          width: this.props.width
        }
      }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(true, this.props.axis),
        style: containerStyles
      }, isSwipeable ? /*#__PURE__*/_react.default.createElement(_reactEasySwipe.default, _extends({
        tagName: "ul",
        innerRef: this.setListRef
      }, swiperProps, {
        allowMouseEvents: this.props.emulateTouch
      }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : /*#__PURE__*/_react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        ref: function ref(node) {
          return _this5.setListRef(node);
        },
        style: this.state.itemListStyle || {}
      }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
    }
  }]);

  return Carousel;
}(_react.default.Component);

exports["default"] = Carousel;

_defineProperty(Carousel, "displayName", 'Carousel');

_defineProperty(Carousel, "defaultProps", {
  ariaLabel: undefined,
  axis: 'horizontal',
  centerSlidePercentage: 80,
  interval: 3000,
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  onClickItem: _utils.noop,
  onClickThumb: _utils.noop,
  onChange: _utils.noop,
  onSwipeStart: function onSwipeStart() {},
  onSwipeEnd: function onSwipeEnd() {},
  onSwipeMove: function onSwipeMove() {
    return false;
  },
  preventMovementUntilSwipeScrollTolerance: false,
  renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_PREV(!hasPrev),
      onClick: onClickHandler
    });
  },
  renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_NEXT(!hasNext),
      onClick: onClickHandler
    });
  },
  renderIndicator: function renderIndicator(onClickHandler, isSelected, index, label) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: _cssClasses.default.DOT(isSelected),
      onClick: onClickHandler,
      onKeyDown: onClickHandler,
      value: index,
      key: index,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(label, " ").concat(index + 1)
    });
  },
  renderItem: function renderItem(item) {
    return item;
  },
  renderThumbs: function renderThumbs(children) {
    var images = _react.Children.map(children, function (item) {
      var img = item; // if the item is not an image, try to find the first image in the item's children.

      if (item.type !== 'img') {
        img = _react.Children.toArray(item.props.children).find(function (children) {
          return children.type === 'img';
        });
      }

      if (!img) {
        return undefined;
      }

      return img;
    });

    if (images.filter(function (image) {
      return image;
    }).length === 0) {
      console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
      return [];
    }

    return images;
  },
  statusFormatter: _utils.defaultStatusFormatter,
  selectedItem: 0,
  showArrows: true,
  showIndicators: true,
  showStatus: true,
  showThumbs: true,
  stopOnHover: true,
  swipeScrollTolerance: 5,
  swipeable: true,
  transitionTime: 350,
  verticalSwipe: 'standard',
  width: '100%',
  animationHandler: 'slide',
  swipeAnimationHandler: _animations.slideSwipeAnimationHandler,
  stopSwipingHandler: _animations.slideStopSwipingHandler
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js":
/***/ (() => {

"use strict";


/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setPosition = exports.getPosition = exports.isKeyboardEvent = exports.defaultStatusFormatter = exports.noop = void 0;

var _react = __webpack_require__("./node_modules/react/index.js");

var _CSSTranslate = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

exports.noop = noop;

var defaultStatusFormatter = function defaultStatusFormatter(current, total) {
  return "".concat(current, " of ").concat(total);
};

exports.defaultStatusFormatter = defaultStatusFormatter;

var isKeyboardEvent = function isKeyboardEvent(e) {
  return e ? e.hasOwnProperty('key') : false;
};
/**
 * Gets the list 'position' relative to a current index
 * @param index
 */


exports.isKeyboardEvent = isKeyboardEvent;

var getPosition = function getPosition(index, props) {
  if (props.infiniteLoop) {
    // index has to be added by 1 because of the first cloned slide
    ++index;
  }

  if (index === 0) {
    return 0;
  }

  var childrenLength = _react.Children.count(props.children);

  if (props.centerMode && props.axis === 'horizontal') {
    var currentPosition = -index * props.centerSlidePercentage;
    var lastPosition = childrenLength - 1;

    if (index && (index !== lastPosition || props.infiniteLoop)) {
      currentPosition += (100 - props.centerSlidePercentage) / 2;
    } else if (index === lastPosition) {
      currentPosition += 100 - props.centerSlidePercentage;
    }

    return currentPosition;
  }

  return -index * 100;
};
/**
 * Sets the 'position' transform for sliding animations
 * @param position
 * @param forceReflow
 */


exports.getPosition = getPosition;

var setPosition = function setPosition(position, axis) {
  var style = {};
  ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
    // @ts-ignore
    style[prop] = (0, _CSSTranslate.default)(position, '%', axis);
  });
  return style;
};

exports.setPosition = setPosition;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _cssClasses = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/cssClasses.js"));

var _dimensions = __webpack_require__("./node_modules/react-responsive-carousel/lib/js/dimensions.js");

var _CSSTranslate = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"));

var _reactEasySwipe = _interopRequireDefault(__webpack_require__("./node_modules/react-easy-swipe/lib/index.js"));

var _window = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/shims/window.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isKeyboardEvent = function isKeyboardEvent(e) {
  return e.hasOwnProperty('key');
};

var Thumbs = /*#__PURE__*/function (_Component) {
  _inherits(Thumbs, _Component);

  var _super = _createSuper(Thumbs);

  function Thumbs(_props) {
    var _this;

    _classCallCheck(this, Thumbs);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "itemsWrapperRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "itemsListRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "setItemsWrapperRef", function (node) {
      _this.itemsWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsListRef", function (node) {
      _this.itemsListRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node, index) {
      if (!_this.thumbsRef) {
        _this.thumbsRef = [];
      }

      _this.thumbsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.props.children || !_this.itemsWrapperRef || !_this.thumbsRef) {
        return;
      }

      var total = _react.Children.count(_this.props.children);

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : (0, _dimensions.outerWidth)(_this.thumbsRef[0]);
      var visibleItems = Math.floor(wrapperSize / itemSize);
      var showArrows = visibleItems < total;
      var lastPosition = showArrows ? total - visibleItems : 0;

      _this.setState(function (_state, props) {
        return {
          itemSize: itemSize,
          visibleItems: visibleItems,
          firstItem: showArrows ? _this.getFirstItem(props.selectedItem) : 0,
          lastPosition: lastPosition,
          showArrows: showArrows
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item, e) {
      if (!isKeyboardEvent(e) || e.key === 'Enter') {
        var handler = _this.props.onSelectItem;

        if (typeof handler === 'function') {
          handler(index, item);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function () {
      _this.setState({
        swiping: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function () {
      _this.setState({
        swiping: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (delta) {
      var deltaX = delta.x;

      if (!_this.state.itemSize || !_this.itemsWrapperRef || !_this.state.visibleItems) {
        return false;
      }

      var leftBoundary = 0;

      var childrenLength = _react.Children.count(_this.props.children);

      var currentPosition = -(_this.state.firstItem * 100) / _this.state.visibleItems;
      var lastLeftItem = Math.max(childrenLength - _this.state.visibleItems, 0);
      var lastLeftBoundary = -lastLeftItem * 100 / _this.state.visibleItems; // prevent user from swiping left out of boundaries

      if (currentPosition === leftBoundary && deltaX > 0) {
        deltaX = 0;
      } // prevent user from swiping right out of boundaries


      if (currentPosition === lastLeftBoundary && deltaX < 0) {
        deltaX = 0;
      }

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var position = currentPosition + 100 / (wrapperSize / deltaX); // if 3d isn't available we will use left to move

      if (_this.itemsListRef) {
        ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
          _this.itemsListRef.style[prop] = (0, _CSSTranslate.default)(position, '%', _this.props.axis);
        });
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "slideRight", function (positions) {
      _this.moveTo(_this.state.firstItem - (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "slideLeft", function (positions) {
      _this.moveTo(_this.state.firstItem + (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position) {
      // position can't be lower than 0
      position = position < 0 ? 0 : position; // position can't be higher than last postion

      position = position >= _this.state.lastPosition ? _this.state.lastPosition : position;

      _this.setState({
        firstItem: position
      });
    });

    _this.state = {
      selectedItem: _props.selectedItem,
      swiping: false,
      showArrows: false,
      firstItem: 0,
      visibleItems: 0,
      lastPosition: 0
    };
    return _this;
  }

  _createClass(Thumbs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupThumbs();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.selectedItem !== this.state.selectedItem) {
        this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        });
      }

      if (this.props.children === prevProps.children) {
        return;
      } // This will capture any size changes for arrow adjustments etc.
      // usually in the same render cycle so we don't see any flickers


      this.updateSizes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyThumbs();
    }
  }, {
    key: "setupThumbs",
    value: function setupThumbs() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      (0, _window.default)().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      (0, _window.default)().addEventListener('DOMContentLoaded', this.updateSizes); // when the component is rendered we need to calculate
      // the container size to adjust the responsive behaviour

      this.updateSizes();
    }
  }, {
    key: "destroyThumbs",
    value: function destroyThumbs() {
      // removing listeners
      (0, _window.default)().removeEventListener('resize', this.updateSizes);
      (0, _window.default)().removeEventListener('DOMContentLoaded', this.updateSizes);
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem(selectedItem) {
      var firstItem = selectedItem;

      if (selectedItem >= this.state.lastPosition) {
        firstItem = this.state.lastPosition;
      }

      if (selectedItem < this.state.firstItem + this.state.visibleItems) {
        firstItem = this.state.firstItem;
      }

      if (selectedItem < this.state.firstItem) {
        firstItem = selectedItem;
      }

      return firstItem;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      return this.props.children.map(function (img, index) {
        var itemClass = _cssClasses.default.ITEM(false, index === _this2.state.selectedItem);

        var thumbProps = {
          key: index,
          ref: function ref(e) {
            return _this2.setThumbsRef(e, index);
          },
          className: itemClass,
          onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          'aria-label': "".concat(_this2.props.labels.item, " ").concat(index + 1),
          style: {
            width: _this2.props.thumbWidth
          }
        };
        return /*#__PURE__*/_react.default.createElement("li", _extends({}, thumbProps, {
          role: "button",
          tabIndex: 0
        }), img);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.props.children) {
        return null;
      }

      var isSwipeable = _react.Children.count(this.props.children) > 1; // show left arrow?

      var hasPrev = this.state.showArrows && this.state.firstItem > 0; // show right arrow

      var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition; // obj to hold the transformations and styles

      var itemListStyles = {};
      var currentPosition = -this.state.firstItem * (this.state.itemSize || 0);
      var transformProp = (0, _CSSTranslate.default)(currentPosition, 'px', this.props.axis);
      var transitionTime = this.props.transitionTime + 'ms';
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        MsTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(false)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(false),
        ref: this.setItemsWrapperRef
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: _cssClasses.default.ARROW_PREV(!hasPrev),
        onClick: function onClick() {
          return _this3.slideRight();
        },
        "aria-label": this.props.labels.leftArrow
      }), isSwipeable ? /*#__PURE__*/_react.default.createElement(_reactEasySwipe.default, {
        tagName: "ul",
        className: _cssClasses.default.SLIDER(false, this.state.swiping),
        onSwipeLeft: this.slideLeft,
        onSwipeRight: this.slideRight,
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        innerRef: this.setItemsListRef,
        allowMouseEvents: this.props.emulateTouch
      }, this.renderItems()) : /*#__PURE__*/_react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(false, this.state.swiping),
        ref: function ref(node) {
          return _this3.setItemsListRef(node);
        },
        style: itemListStyles
      }, this.renderItems()), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: _cssClasses.default.ARROW_NEXT(!hasNext),
        onClick: function onClick() {
          return _this3.slideLeft();
        },
        "aria-label": this.props.labels.rightArrow
      })));
    }
  }]);

  return Thumbs;
}(_react.Component);

exports["default"] = Thumbs;

_defineProperty(Thumbs, "displayName", 'Thumbs');

_defineProperty(Thumbs, "defaultProps", {
  axis: 'horizontal',
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/cssClasses.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  ROOT: function ROOT(customClassName) {
    return (0, _classnames.default)(_defineProperty({
      'carousel-root': true
    }, customClassName || '', !!customClassName));
  },
  CAROUSEL: function CAROUSEL(isSlider) {
    return (0, _classnames.default)({
      carousel: true,
      'carousel-slider': isSlider
    });
  },
  WRAPPER: function WRAPPER(isSlider, axis) {
    return (0, _classnames.default)({
      'thumbs-wrapper': !isSlider,
      'slider-wrapper': isSlider,
      'axis-horizontal': axis === 'horizontal',
      'axis-vertical': axis !== 'horizontal'
    });
  },
  SLIDER: function SLIDER(isSlider, isSwiping) {
    return (0, _classnames.default)({
      thumbs: !isSlider,
      slider: isSlider,
      animated: !isSwiping
    });
  },
  ITEM: function ITEM(isSlider, selected, previous) {
    return (0, _classnames.default)({
      thumb: !isSlider,
      slide: isSlider,
      selected: selected,
      previous: previous
    });
  },
  ARROW_PREV: function ARROW_PREV(disabled) {
    return (0, _classnames.default)({
      'control-arrow control-prev': true,
      'control-disabled': disabled
    });
  },
  ARROW_NEXT: function ARROW_NEXT(disabled) {
    return (0, _classnames.default)({
      'control-arrow control-next': true,
      'control-disabled': disabled
    });
  },
  DOT: function DOT(selected) {
    return (0, _classnames.default)({
      dot: true,
      selected: selected
    });
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/dimensions.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.outerWidth = void 0;

var outerWidth = function outerWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
};

exports.outerWidth = outerWidth;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/index.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Carousel", ({
  enumerable: true,
  get: function get() {
    return _Carousel.default;
  }
}));
Object.defineProperty(exports, "CarouselProps", ({
  enumerable: true,
  get: function get() {
    return _types.CarouselProps;
  }
}));
Object.defineProperty(exports, "Thumbs", ({
  enumerable: true,
  get: function get() {
    return _Thumbs.default;
  }
}));

var _Carousel = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js"));

var _types = __webpack_require__("./node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js");

var _Thumbs = _interopRequireDefault(__webpack_require__("./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/shims/document.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _default = function _default() {
  return document;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/shims/window.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _default = function _default() {
  return window;
};

exports["default"] = _default;

/***/ }),

/***/ "./public/app/plugins/panel/datagrid/DataGridPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataGridPanel: () => (/* binding */ DataGridPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/data-editor-all.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/components/PanelDataErrorView.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/PanelContext.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _glideapps_glide_data_grid_dist_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/index.css");
/* harmony import */ var _components_AddColumn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/datagrid/components/AddColumn.tsx");
/* harmony import */ var _components_DatagridContextMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/datagrid/components/DatagridContextMenu.tsx");
/* harmony import */ var _components_RenameColumnCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/datagrid/components/RenameColumnCell.tsx");
/* harmony import */ var _featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/panel/datagrid/featureFlagUtils.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/panel/datagrid/state.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/panel/datagrid/utils.ts");














function DataGridPanel({ options, data, id, fieldConfig, width, height }) {
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_state__WEBPACK_IMPORTED_MODULE_13__.datagridReducer, _state__WEBPACK_IMPORTED_MODULE_13__.initialState);
  const { onUpdateData } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.usePanelContext)();
  const {
    columns,
    contextMenuData,
    renameColumnInputData,
    gridSelection,
    columnFreezeIndex,
    toggleSearch,
    isResizeInProgress
  } = state;
  const frame = data.series[options.selectedSeries ?? 0];
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useTheme2)();
  const gridTheme = (0,_utils__WEBPACK_IMPORTED_MODULE_14__.getGridTheme)(theme);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!frame) {
      return;
    }
    dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.updateColumns, payload: { frame } });
  }, [frame]);
  const getCellContent = ([col, row]) => {
    const field = frame.fields[col];
    if (!field || row > frame.length) {
      return _utils__WEBPACK_IMPORTED_MODULE_14__.EMPTY_CELL;
    }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_14__.getGridCellKind)(field, row, (0,_utils__WEBPACK_IMPORTED_MODULE_14__.hasGridSelection)(gridSelection));
  };
  const onCellEdited = (cell, newValue) => {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_14__.hasGridSelection)(gridSelection)) {
      return;
    }
    const [col, row] = cell;
    const frameCopy = {
      ...frame,
      fields: frame.fields.map((f) => {
        return {
          ...f,
          values: [...f.values]
        };
      })
    };
    const field = frameCopy.fields[col];
    if (!field) {
      return;
    }
    const values = field.values.toArray();
    values[row] = newValue.data;
    field.values = [...values];
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, { item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.EDIT_CELL });
    (0,_utils__WEBPACK_IMPORTED_MODULE_14__.updateSnapshot)(frameCopy, onUpdateData);
  };
  const onColumnInputBlur = (columnName) => {
    const len = frame.length ?? 0;
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, { item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.APPEND_COLUMN });
    (0,_utils__WEBPACK_IMPORTED_MODULE_14__.updateSnapshot)(
      {
        ...frame,
        fields: [
          ...frame.fields,
          {
            name: columnName,
            type: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldType.string,
            config: {},
            values: new Array(len).fill("")
          }
        ]
      },
      onUpdateData
    );
  };
  const addNewRow = () => {
    const fields = frame.fields.map((f) => {
      const values = f.values.slice();
      values.push(null);
      return { ...f, values };
    });
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, { item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.APPEND_ROW });
    (0,_utils__WEBPACK_IMPORTED_MODULE_14__.updateSnapshot)({ ...frame, fields, length: frame.length + 1 }, onUpdateData);
  };
  const onColumnResize = (column, width2, columnIndex, newSizeWithGrow) => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, { item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.COLUMN_RESIZE });
    dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.columnResizeStart, payload: { columnIndex, width: width2 } });
  };
  const onColumnResizeEnd = (column, newSize, colIndex, newSizeWithGrow) => {
    dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.columnResizeEnd });
  };
  const closeContextMenu = () => {
    dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.closeContextMenu });
  };
  const onDeletePressed = (selection) => {
    if (selection.current && selection.current.range) {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, { item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.DELETE_BTN_PRESSED, selection: "grid-cell" });
      (0,_utils__WEBPACK_IMPORTED_MODULE_14__.updateSnapshot)((0,_utils__WEBPACK_IMPORTED_MODULE_14__.clearCellsFromRangeSelection)(frame, selection.current.range), onUpdateData);
      return true;
    }
    const rows = selection.rows.toArray();
    const cols = selection.columns.toArray();
    if (rows.length) {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, { item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.DELETE_BTN_PRESSED, selection: "rows" });
      (0,_utils__WEBPACK_IMPORTED_MODULE_14__.updateSnapshot)((0,_utils__WEBPACK_IMPORTED_MODULE_14__.deleteRows)(frame, rows), onUpdateData);
      return true;
    }
    if (cols.length) {
      const copiedFrame = {
        ...frame,
        fields: frame.fields.map((field, index) => {
          if (cols.includes(index)) {
            return {
              ...field,
              values: new Array(frame.length).fill(null)
            };
          }
          return field;
        })
      };
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, { item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.DELETE_BTN_PRESSED, selection: "columns" });
      (0,_utils__WEBPACK_IMPORTED_MODULE_14__.updateSnapshot)(copiedFrame, onUpdateData);
      return true;
    }
    return false;
  };
  const onCellContextMenu = (cell, event) => {
    event.preventDefault();
    dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.openCellContextMenu, payload: { event, cell } });
  };
  const onHeaderContextMenu = (columnIndex, event) => {
    event.preventDefault();
    dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.openHeaderContextMenu, payload: { event, columnIndex } });
  };
  const onHeaderMenuClick = (col, screenPosition) => {
    dispatch({
      type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.openHeaderDropdownMenu,
      payload: { screenPosition, columnIndex: col, value: state.columns[col].title }
    });
  };
  const onColumnMove = async (from, to) => {
    const fields = frame.fields.map((f) => f);
    const field = fields[from];
    fields.splice(from, 1);
    fields.splice(to, 0, field);
    const hasUpdated = await (0,_utils__WEBPACK_IMPORTED_MODULE_14__.updateSnapshot)({ ...frame, fields }, onUpdateData);
    if (hasUpdated) {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, { item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.COLUMN_REORDER });
      dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.columnMove, payload: { from, to } });
    }
  };
  const onRowMove = (from, to) => {
    const fields = frame.fields.map((f) => ({ ...f, values: f.values.slice() }));
    for (const field of fields) {
      const value = field.values[from];
      field.values.splice(from, 1);
      field.values.splice(to, 0, value);
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, { item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.ROW_REORDER });
    (0,_utils__WEBPACK_IMPORTED_MODULE_14__.updateSnapshot)({ ...frame, fields }, onUpdateData);
  };
  const onColumnRename = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, {
      item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.HEADER_MENU_ACTION,
      menu_action: "rename_column"
    });
    dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.showColumnRenameInput });
  };
  const onRenameInputBlur = (columnName, columnIdx) => {
    const fields = frame.fields.map((f) => f);
    fields[columnIdx].name = columnName;
    dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.hideColumnRenameInput });
    (0,_utils__WEBPACK_IMPORTED_MODULE_14__.updateSnapshot)({ ...frame, fields }, onUpdateData);
  };
  const onSearchClose = () => {
    dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.closeSearch });
  };
  const onGridSelectionChange = (selection) => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_EVENT_NAME, { item: _utils__WEBPACK_IMPORTED_MODULE_14__.INTERACTION_ITEM.GRID_SELECTED });
    dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_13__.DatagridActionType.multipleCellsSelected, payload: { selection } });
  };
  const onContextMenuSave = (data2) => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_14__.updateSnapshot)(data2, onUpdateData);
  };
  if (!frame) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.PanelDataErrorView, { panelId: id, fieldConfig, data });
  }
  if (!(0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)()) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.PanelDataErrorView, { panelId: id, message: "Datagrid is not enabled", fieldConfig, data });
  }
  if (!document.getElementById("portal")) {
    const portal = document.createElement("div");
    portal.id = "portal";
    document.body.appendChild(portal);
  }
  const styles = (0,_utils__WEBPACK_IMPORTED_MODULE_14__.getStyles)(theme, isResizeInProgress);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__.DataEditorAll,
      {
        className: styles.dataEditor,
        getCellContent,
        columns,
        rows: frame.length,
        width,
        height,
        initialSize: [width, height],
        theme: gridTheme,
        smoothScrollX: true,
        smoothScrollY: true,
        overscrollY: 50,
        onCellEdited: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? onCellEdited : void 0,
        getCellsForSelection: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? true : void 0,
        showSearch: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? toggleSearch : false,
        onSearchClose,
        gridSelection,
        onGridSelectionChange: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? onGridSelectionChange : void 0,
        onRowAppended: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? addNewRow : void 0,
        onDelete: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? onDeletePressed : void 0,
        rowMarkers: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? _utils__WEBPACK_IMPORTED_MODULE_14__.ROW_MARKER_BOTH : _utils__WEBPACK_IMPORTED_MODULE_14__.ROW_MARKER_NUMBER,
        onColumnResize,
        onColumnResizeEnd,
        onCellContextMenu: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? onCellContextMenu : void 0,
        onHeaderContextMenu: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? onHeaderContextMenu : void 0,
        onHeaderMenuClick: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? onHeaderMenuClick : void 0,
        trailingRowOptions: _utils__WEBPACK_IMPORTED_MODULE_14__.TRAILING_ROW_OPTIONS,
        rightElement: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AddColumn__WEBPACK_IMPORTED_MODULE_9__.AddColumn, { onColumnInputBlur, divStyle: styles.addColumnDiv }) : null,
        rightElementProps: _utils__WEBPACK_IMPORTED_MODULE_14__.RIGHT_ELEMENT_PROPS,
        freezeColumns: columnFreezeIndex,
        onRowMoved: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? onRowMove : void 0,
        onColumnMoved: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_12__.isDatagridEnabled)() ? onColumnMove : void 0
      }
    ),
    contextMenuData.isContextMenuOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_DatagridContextMenu__WEBPACK_IMPORTED_MODULE_10__.DatagridContextMenu,
      {
        menuData: contextMenuData,
        data: frame,
        saveData: onContextMenuSave,
        closeContextMenu,
        dispatch,
        gridSelection,
        columnFreezeIndex,
        renameColumnClicked: onColumnRename
      }
    ),
    renameColumnInputData.isInputOpen ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_RenameColumnCell__WEBPACK_IMPORTED_MODULE_11__.RenameColumnCell,
      {
        onColumnInputBlur: onRenameInputBlur,
        renameColumnData: renameColumnInputData,
        classStyle: styles.renameColumnInput
      }
    ) : null
  ] });
}


/***/ }),

/***/ "./public/app/plugins/panel/datagrid/components/AddColumn.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddColumn: () => (/* binding */ AddColumn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _SimpleInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/datagrid/components/SimpleInput.tsx");





const AddColumn = ({ divStyle, onColumnInputBlur }) => {
  const [showInput, setShowInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const setupColumnInput = () => {
    setShowInput(true);
  };
  const onBlur = (e) => {
    const columnName = e.target.value;
    if (columnName) {
      onColumnInputBlur(columnName);
    }
    setShowInput(false);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: divStyle, children: showInput ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SimpleInput__WEBPACK_IMPORTED_MODULE_3__.SimpleInput, { placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("datagrid.add-column.placeholder-column-name", "Column name"), onBlur }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: setupColumnInput, children: "+" }) });
};


/***/ }),

/***/ "./public/app/plugins/panel/datagrid/components/DatagridContextMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatagridContextMenu: () => (/* binding */ DatagridContextMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/convertFieldType.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ContextMenu/ContextMenu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/MenuGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/MenuItem.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/MenuDivider.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/datagrid/state.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/datagrid/utils.ts");











const DatagridContextMenu = ({
  menuData,
  data,
  saveData,
  closeContextMenu,
  dispatch,
  gridSelection,
  columnFreezeIndex,
  renameColumnClicked
}) => {
  let selectedRows = [];
  let selectedColumns = [];
  const { row, column, x, y, isHeaderMenu } = menuData;
  if (gridSelection.rows) {
    selectedRows = gridSelection.rows.toArray();
  }
  if (gridSelection.columns) {
    selectedColumns = gridSelection.columns.toArray();
  }
  let rowDeletionLabel = "Delete row";
  if (selectedRows.length && selectedRows.length > 1) {
    rowDeletionLabel = `Delete ${selectedRows.length} rows`;
  }
  let columnDeletionLabel = "Delete column";
  if (selectedColumns.length && selectedColumns.length > 1) {
    columnDeletionLabel = `Delete ${selectedColumns.length} columns`;
  }
  const showDeleteRow = row !== void 0 && row >= 0 || selectedRows.length;
  const showDeleteColumn = column !== void 0 && column >= 0 && row !== void 0 || selectedColumns.length;
  const showClearRow = row !== void 0 && row >= 0 && !selectedRows.length;
  const showClearColumn = column !== void 0 && column >= 0 && row !== void 0 && !selectedColumns.length;
  const renderContextMenuItems = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    showDeleteRow ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
      {
        label: rowDeletionLabel,
        onClick: () => {
          if (selectedRows.length) {
            saveData((0,_utils__WEBPACK_IMPORTED_MODULE_11__.deleteRows)(data, selectedRows, true));
            dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_10__.DatagridActionType.gridSelectionCleared });
            return;
          }
          if (row !== void 0 && row >= 0) {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_EVENT_NAME, {
              item: _utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_ITEM.CONTEXT_MENU_ACTION,
              menu_action: "row_delete"
            });
            saveData((0,_utils__WEBPACK_IMPORTED_MODULE_11__.deleteRows)(data, [row], true));
          }
        }
      }
    ) : null,
    showDeleteColumn ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
      {
        label: columnDeletionLabel,
        onClick: () => {
          if (selectedColumns.length) {
            saveData({
              ...data,
              fields: data.fields.filter((_, index) => !selectedColumns.includes(index))
            });
            dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_10__.DatagridActionType.gridSelectionCleared });
            return;
          }
          if (column !== void 0 && column >= 0) {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_EVENT_NAME, {
              item: _utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_ITEM.CONTEXT_MENU_ACTION,
              menu_action: "column_delete"
            });
            saveData({
              ...data,
              fields: data.fields.filter((_, index) => index !== column)
            });
          }
        }
      }
    ) : null,
    showDeleteColumn || showDeleteRow ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__.MenuDivider, {}) : null,
    showClearRow ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("datagrid.datagrid-context-menu.render-context-menu-items.label-clear-row", "Clear row"),
        onClick: () => {
          (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_EVENT_NAME, {
            item: _utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_ITEM.CONTEXT_MENU_ACTION,
            menu_action: "row_clear"
          });
          saveData((0,_utils__WEBPACK_IMPORTED_MODULE_11__.deleteRows)(data, [row]));
        }
      }
    ) : null,
    showClearColumn ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("datagrid.datagrid-context-menu.render-context-menu-items.label-clear-column", "Clear column"),
        onClick: () => {
          const field = data.fields[column];
          field.values = field.values.map(() => null);
          (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_EVENT_NAME, {
            item: _utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_ITEM.CONTEXT_MENU_ACTION,
            menu_action: "column_clear"
          });
          saveData({
            ...data
          });
        }
      }
    ) : null,
    showClearRow || showClearColumn ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__.MenuDivider, {}) : null,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("datagrid.datagrid-context-menu.render-context-menu-items.label-remove-all-data", "Remove all data"),
        onClick: () => {
          (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_EVENT_NAME, {
            item: _utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_ITEM.CONTEXT_MENU_ACTION,
            menu_action: "remove_all"
          });
          saveData(_utils__WEBPACK_IMPORTED_MODULE_11__.EMPTY_DF);
        }
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("datagrid.datagrid-context-menu.render-context-menu-items.label-search", "Search..."),
        onClick: () => {
          (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_EVENT_NAME, {
            item: _utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_ITEM.CONTEXT_MENU_ACTION,
            menu_action: "open_search"
          });
          dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_10__.DatagridActionType.openSearch });
        }
      }
    )
  ] });
  const renderHeaderMenuItems = () => {
    if (column === null || column === void 0) {
      return null;
    }
    const fieldType = data.fields[column].type;
    const fieldTypeConversionData = [];
    const addToConversionData = (fieldType2) => {
      fieldTypeConversionData.push({
        label: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.capitalize)(fieldType2),
        options: {
          targetField: data.fields[column].name,
          destinationType: fieldType2
        }
      });
    };
    if (fieldType === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string) {
      addToConversionData(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number);
      addToConversionData(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean);
    } else if (fieldType === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number) {
      addToConversionData(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string);
      addToConversionData(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean);
    } else if (fieldType === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean) {
      addToConversionData(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number);
      addToConversionData(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string);
    } else {
      addToConversionData(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string);
      addToConversionData(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number);
      addToConversionData(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean);
    }
    let columnFreezeLabel = "Set column freeze position";
    const columnIndex = column + 1;
    if (columnFreezeIndex === columnIndex) {
      columnFreezeLabel = "Unset column freeze";
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      fieldTypeConversionData.length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.MenuGroup,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("datagrid.datagrid-context-menu.render-header-menu-items.label-set-field-type", "Set field type"),
          children: fieldTypeConversionData.map((conversionData, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
            {
              label: conversionData.label,
              onClick: () => {
                const field = (0,_grafana_data_internal__WEBPACK_IMPORTED_MODULE_3__.convertFieldType)(data.fields[column], conversionData.options);
                if (conversionData.options.destinationType === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string) {
                  (0,_utils__WEBPACK_IMPORTED_MODULE_11__.cleanStringFieldAfterConversion)(field);
                }
                const copy = {
                  name: data.name,
                  fields: [...data.fields],
                  length: data.length
                };
                copy.fields[column] = field;
                (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_EVENT_NAME, {
                  item: _utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_ITEM.HEADER_MENU_ACTION,
                  menu_action: "convert_field"
                });
                saveData(copy);
              }
            },
            index
          ))
        }
      ) : null,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__.MenuDivider, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
        {
          label: columnFreezeLabel,
          onClick: () => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_EVENT_NAME, {
              item: _utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_ITEM.HEADER_MENU_ACTION,
              menu_action: "column_freeze"
            });
            if (columnFreezeIndex === columnIndex) {
              dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_10__.DatagridActionType.columnFreezeReset });
            } else {
              dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_10__.DatagridActionType.columnFreezeChanged, payload: { columnIndex } });
            }
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("datagrid.datagrid-context-menu.render-header-menu-items.label-rename-column", "Rename column"),
          onClick: renameColumnClicked
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__.MenuDivider, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("datagrid.datagrid-context-menu.render-header-menu-items.label-delete-column", "Delete column"),
          onClick: () => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_EVENT_NAME, {
              item: _utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_ITEM.HEADER_MENU_ACTION,
              menu_action: "delete_column"
            });
            saveData({
              ...data,
              fields: data.fields.filter((_, index) => index !== column)
            });
            dispatch({ type: _state__WEBPACK_IMPORTED_MODULE_10__.DatagridActionType.gridSelectionCleared });
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.MenuItem,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("datagrid.datagrid-context-menu.render-header-menu-items.label-clear-column", "Clear column"),
          onClick: () => {
            const field = data.fields[column];
            field.values = field.values.map(() => null);
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(_utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_EVENT_NAME, {
              item: _utils__WEBPACK_IMPORTED_MODULE_11__.INTERACTION_ITEM.HEADER_MENU_ACTION,
              menu_action: "clear_column"
            });
            saveData({
              ...data
            });
          }
        }
      )
    ] });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ContextMenu,
    {
      renderMenuItems: isHeaderMenu ? renderHeaderMenuItems : renderContextMenuItems,
      x,
      y,
      onClose: closeContextMenu
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/panel/datagrid/components/RenameColumnCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenameColumnCell: () => (/* binding */ RenameColumnCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Portal/Portal.tsx");




const RenameColumnCell = ({ renameColumnData, onColumnInputBlur, classStyle }) => {
  const { x, y, width, height, inputValue, columnIdx } = renameColumnData;
  const [styles, setStyles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(inputValue);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    ref.current?.focus();
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const collisions = {
        right: window.innerWidth < x + rect.width,
        bottom: window.innerHeight < y + rect.height
      };
      setStyles({
        position: "fixed",
        left: collisions.right ? x - rect.width : x,
        top: collisions.bottom ? y - rect.height : y,
        width,
        height
      });
    }
  }, [height, width, x, y]);
  const onBlur = (e) => {
    const columnName = e.target.value;
    if (columnName) {
      onColumnInputBlur(columnName, columnIdx);
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const target = e.currentTarget;
      target.blur();
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Portal, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "input",
    {
      type: "text",
      className: classStyle,
      value,
      onBlur,
      ref,
      style: styles,
      onChange,
      onKeyDown
    }
  ) });
};


/***/ }),

/***/ "./public/app/plugins/panel/datagrid/components/SimpleInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleInput: () => (/* binding */ SimpleInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const SimpleInput = ({ onBlur, placeholder }) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!ref.current) {
      return;
    }
    ref.current.focus();
  });
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const target = e.currentTarget;
      target.blur();
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "input",
    {
      type: "text",
      placeholder,
      onBlur,
      ref,
      onKeyDown,
      "data-testid": "column-input"
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/panel/datagrid/featureFlagUtils.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDatagridEnabled: () => (/* binding */ isDatagridEnabled)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");


const isDatagridEnabled = () => {
  return _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.enableDatagridEditing;
};


/***/ }),

/***/ "./public/app/plugins/panel/datagrid/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _DataGridPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/datagrid/DataGridPanel.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/datagrid/panelcfg.gen.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_DataGridPanel__WEBPACK_IMPORTED_MODULE_1__.DataGridPanel).setPanelOptions((builder, context) => {
  const seriesOptions = context.data.map((frame, idx) => ({ value: idx, label: frame.refId }));
  if (context.options && !seriesOptions.map((s) => s.value).includes(context.options.selectedSeries ?? 0)) {
    context.options.selectedSeries = _panelcfg_gen__WEBPACK_IMPORTED_MODULE_2__.defaultOptions.selectedSeries;
  }
  return builder.addSelect({
    path: "selectedSeries",
    name: "Select series",
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_2__.defaultOptions.selectedSeries,
    settings: {
      options: seriesOptions
    }
  });
});


/***/ }),

/***/ "./public/app/plugins/panel/datagrid/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });

const defaultOptions = {
  selectedSeries: 0
};


/***/ }),

/***/ "./public/app/plugins/panel/datagrid/state.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatagridActionType: () => (/* binding */ DatagridActionType),
/* harmony export */   datagridReducer: () => (/* binding */ datagridReducer),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _featureFlagUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/datagrid/featureFlagUtils.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/datagrid/utils.ts");





var DatagridActionType = /* @__PURE__ */ ((DatagridActionType2) => {
  DatagridActionType2["columnResizeStart"] = "columnResizeStart";
  DatagridActionType2["columnResizeEnd"] = "columnResizeEnd";
  DatagridActionType2["columnMove"] = "columnMove";
  DatagridActionType2["updateColumns"] = "updateColumns";
  DatagridActionType2["showColumnRenameInput"] = "showColumnRenameInput";
  DatagridActionType2["hideColumnRenameInput"] = "hideColumnRenameInput";
  DatagridActionType2["openCellContextMenu"] = "openCellContextMenu";
  DatagridActionType2["openHeaderContextMenu"] = "openHeaderContextMenu";
  DatagridActionType2["openHeaderDropdownMenu"] = "openHeaderDropdownMenu";
  DatagridActionType2["closeContextMenu"] = "closeContextMenu";
  DatagridActionType2["multipleCellsSelected"] = "multipleCellsSelected";
  DatagridActionType2["gridSelectionCleared"] = "gridSelectionCleared";
  DatagridActionType2["columnFreezeReset"] = "columnFreezeReset";
  DatagridActionType2["columnFreezeChanged"] = "columnFreezeChanged";
  DatagridActionType2["openSearch"] = "openSearch";
  DatagridActionType2["closeSearch"] = "closeSearch";
  return DatagridActionType2;
})(DatagridActionType || {});
const initialState = {
  columns: [],
  contextMenuData: _utils__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_CONTEXT_MENU,
  renameColumnInputData: _utils__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_RENAME_INPUT_DATA,
  gridSelection: _utils__WEBPACK_IMPORTED_MODULE_4__.EMPTY_GRID_SELECTION,
  columnFreezeIndex: 0,
  toggleSearch: false,
  isResizeInProgress: false
};
const typeToIconMap = /* @__PURE__ */ new Map([
  [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number, _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_0__.GridColumnIcon.HeaderNumber],
  [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string, _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_0__.GridColumnIcon.HeaderTextTemplate],
  [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean, _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_0__.GridColumnIcon.HeaderBoolean],
  [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time, _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_0__.GridColumnIcon.HeaderDate],
  [_grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other, _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_0__.GridColumnIcon.HeaderReference]
]);
const datagridReducer = (state, action) => {
  let columns = [];
  switch (action.type) {
    case "columnResizeStart" /* columnResizeStart */:
      columns = [...state.columns];
      const columnResizeStartPayload = action.payload;
      columns[columnResizeStartPayload.columnIndex] = {
        ...state.columns[columnResizeStartPayload.columnIndex],
        width: columnResizeStartPayload.width
      };
      return {
        ...state,
        columns,
        isResizeInProgress: true
      };
    case "columnMove" /* columnMove */:
      columns = [...state.columns];
      const columnMovePayload = action.payload;
      const widthFrom = state.columns[columnMovePayload.from].width;
      let fromColumn = columns.splice(columnMovePayload.from, 1)[0];
      fromColumn = {
        ...fromColumn,
        width: widthFrom
      };
      columns.splice(columnMovePayload.to, 0, fromColumn);
      return {
        ...state,
        columns
      };
    case "columnResizeEnd" /* columnResizeEnd */:
      return {
        ...state,
        isResizeInProgress: false
      };
    case "updateColumns" /* updateColumns */:
      const updateColumnsPayload = action.payload;
      columns = [
        ...updateColumnsPayload.frame.fields.map((field, index) => {
          const width = state.columns.find((column) => column.title === field.name)?.width;
          const displayName = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getFieldDisplayName)(field, updateColumnsPayload.frame);
          return {
            title: displayName,
            width: width ?? (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getCellWidth)(field),
            icon: typeToIconMap.get(field.type),
            hasMenu: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_3__.isDatagridEnabled)(),
            trailingRowOptions: { targetColumn: --index }
          };
        })
      ];
      return {
        ...state,
        columns
      };
    case "showColumnRenameInput" /* showColumnRenameInput */:
      return {
        ...state,
        renameColumnInputData: {
          ...state.renameColumnInputData,
          isInputOpen: true
        }
      };
    case "hideColumnRenameInput" /* hideColumnRenameInput */:
      return {
        ...state,
        renameColumnInputData: {
          ...state.renameColumnInputData,
          isInputOpen: false
        }
      };
    case "openCellContextMenu" /* openCellContextMenu */:
      const openCellContextMenuPayload = action.payload;
      const cellEvent = openCellContextMenuPayload.event;
      const cell = openCellContextMenuPayload.cell;
      return {
        ...state,
        contextMenuData: {
          x: cellEvent.bounds.x + cellEvent.localEventX,
          y: cellEvent.bounds.y + cellEvent.localEventY,
          column: cell[0] === -1 ? void 0 : cell[0],
          //row numbers,
          row: cell[1],
          isContextMenuOpen: true,
          isHeaderMenu: false
        }
      };
    case "openHeaderContextMenu" /* openHeaderContextMenu */:
      const openHeaderContextMenuPayload = action.payload;
      const headerEvent = openHeaderContextMenuPayload.event;
      return {
        ...state,
        contextMenuData: {
          x: headerEvent.bounds.x + headerEvent.localEventX,
          y: headerEvent.bounds.y + headerEvent.localEventY,
          column: openHeaderContextMenuPayload.columnIndex,
          row: void 0,
          //header
          isContextMenuOpen: true,
          isHeaderMenu: false
        }
      };
    case "openHeaderDropdownMenu" /* openHeaderDropdownMenu */:
      const openHeaderDropdownMenuPayload = action.payload;
      const screenPosition = openHeaderDropdownMenuPayload.screenPosition;
      return {
        ...state,
        contextMenuData: {
          x: screenPosition.x + screenPosition.width,
          y: screenPosition.y + screenPosition.height,
          column: openHeaderDropdownMenuPayload.columnIndex,
          row: void 0,
          //header
          isContextMenuOpen: true,
          isHeaderMenu: true
        },
        renameColumnInputData: {
          x: screenPosition.x,
          y: screenPosition.y,
          width: screenPosition.width,
          height: screenPosition.height,
          columnIdx: openHeaderDropdownMenuPayload.columnIndex,
          isInputOpen: false,
          inputValue: openHeaderDropdownMenuPayload.value
        }
      };
    case "closeContextMenu" /* closeContextMenu */:
      return {
        ...state,
        contextMenuData: {
          isContextMenuOpen: false
        }
      };
    case "closeSearch" /* closeSearch */:
      return {
        ...state,
        toggleSearch: false
      };
    case "openSearch" /* openSearch */:
      return {
        ...state,
        toggleSearch: true
      };
    case "multipleCellsSelected" /* multipleCellsSelected */:
      const multipleCellsSelectedPayload = action.payload;
      return {
        ...state,
        gridSelection: multipleCellsSelectedPayload.selection
      };
    case "gridSelectionCleared" /* gridSelectionCleared */:
      return {
        ...state,
        gridSelection: _utils__WEBPACK_IMPORTED_MODULE_4__.EMPTY_GRID_SELECTION
      };
    case "columnFreezeReset" /* columnFreezeReset */:
      return {
        ...state,
        columnFreezeIndex: 0
      };
    case "columnFreezeChanged" /* columnFreezeChanged */:
      const columnFreezeChangedPayload = action.payload;
      return {
        ...state,
        columnFreezeIndex: columnFreezeChangedPayload.columnIndex
      };
    default:
      return state;
  }
};


/***/ }),

/***/ "./public/app/plugins/panel/datagrid/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CELL_PADDING: () => (/* binding */ CELL_PADDING),
/* harmony export */   DEFAULT_CONTEXT_MENU: () => (/* binding */ DEFAULT_CONTEXT_MENU),
/* harmony export */   DEFAULT_RENAME_INPUT_DATA: () => (/* binding */ DEFAULT_RENAME_INPUT_DATA),
/* harmony export */   EMPTY_CELL: () => (/* binding */ EMPTY_CELL),
/* harmony export */   EMPTY_DF: () => (/* binding */ EMPTY_DF),
/* harmony export */   EMPTY_GRID_SELECTION: () => (/* binding */ EMPTY_GRID_SELECTION),
/* harmony export */   ICON_AND_MENU_WIDTH: () => (/* binding */ ICON_AND_MENU_WIDTH),
/* harmony export */   INTERACTION_EVENT_NAME: () => (/* binding */ INTERACTION_EVENT_NAME),
/* harmony export */   INTERACTION_ITEM: () => (/* binding */ INTERACTION_ITEM),
/* harmony export */   MAX_COLUMN_WIDTH: () => (/* binding */ MAX_COLUMN_WIDTH),
/* harmony export */   RIGHT_ELEMENT_PROPS: () => (/* binding */ RIGHT_ELEMENT_PROPS),
/* harmony export */   ROW_MARKER_BOTH: () => (/* binding */ ROW_MARKER_BOTH),
/* harmony export */   ROW_MARKER_NUMBER: () => (/* binding */ ROW_MARKER_NUMBER),
/* harmony export */   TRAILING_ROW_OPTIONS: () => (/* binding */ TRAILING_ROW_OPTIONS),
/* harmony export */   cleanStringFieldAfterConversion: () => (/* binding */ cleanStringFieldAfterConversion),
/* harmony export */   clearCellsFromRangeSelection: () => (/* binding */ clearCellsFromRangeSelection),
/* harmony export */   deleteRows: () => (/* binding */ deleteRows),
/* harmony export */   getCellWidth: () => (/* binding */ getCellWidth),
/* harmony export */   getGridCellKind: () => (/* binding */ getGridCellKind),
/* harmony export */   getGridTheme: () => (/* binding */ getGridTheme),
/* harmony export */   getStyles: () => (/* binding */ getStyles),
/* harmony export */   getTextWidth: () => (/* binding */ getTextWidth),
/* harmony export */   hasGridSelection: () => (/* binding */ hasGridSelection),
/* harmony export */   updateSnapshot: () => (/* binding */ updateSnapshot)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-types.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _featureFlagUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/datagrid/featureFlagUtils.tsx");





const HEADER_FONT_FAMILY = "600 13px Inter";
const CELL_FONT_FAMILY = "400 13px Inter";
const TEXT_CANVAS = document.createElement("canvas");
const CELL_PADDING = 20;
const MAX_COLUMN_WIDTH = 300;
const ICON_AND_MENU_WIDTH = 65;
const ROW_MARKER_BOTH = "both";
const ROW_MARKER_NUMBER = "number";
const DEFAULT_CONTEXT_MENU = { isContextMenuOpen: false };
const DEFAULT_RENAME_INPUT_DATA = { isInputOpen: false };
const INTERACTION_EVENT_NAME = "datagrid_panel";
const INTERACTION_ITEM = {
  EDIT_CELL: "edit_cell",
  GRID_SELECTED: "grid_selected",
  APPEND_ROW: "append_row",
  APPEND_COLUMN: "append_column",
  DELETE_BTN_PRESSED: "delete_btn_pressed",
  COLUMN_RESIZE: "column_resize",
  COLUMN_REORDER: "column_reorder",
  ROW_REORDER: "row_reorder",
  CONTEXT_MENU_ACTION: "context_menu_action",
  HEADER_MENU_ACTION: "header_menu_action"
};
const EMPTY_DF = {
  name: "A",
  fields: [],
  length: 0
};
const EMPTY_CELL = {
  kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Text,
  data: "",
  allowOverlay: true,
  readonly: false,
  displayData: ""
};
const EMPTY_GRID_SELECTION = {
  columns: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__.CompactSelection.empty(),
  rows: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__.CompactSelection.empty()
};
const TRAILING_ROW_OPTIONS = {
  sticky: false,
  tint: true
};
const RIGHT_ELEMENT_PROPS = {
  fill: true,
  sticky: false
};
async function updateSnapshot(frame, updateData) {
  if (updateData && (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_3__.isDatagridEnabled)()) {
    for (let i = 0; i < frame.fields.length; i++) {
      delete frame.fields[i].config.displayName;
      delete frame.fields[i].config.displayNameFromDS;
    }
    return await updateData([frame]);
  }
  return false;
}
const getTextWidth = (text, isHeader = false) => {
  const context = TEXT_CANVAS.getContext("2d");
  context.font = isHeader ? HEADER_FONT_FAMILY : CELL_FONT_FAMILY;
  const metrics = context.measureText(text);
  return metrics.width;
};
const getCellWidth = (field) => {
  return Math.max(
    getTextWidth(field.name, true) + ICON_AND_MENU_WIDTH,
    //header text
    Math.min(
      MAX_COLUMN_WIDTH,
      field.values.toArray().reduce((acc, val) => {
        const textWidth = getTextWidth(val?.toString() ?? "");
        if (textWidth > acc) {
          return textWidth;
        }
        return acc;
      }, 0) + CELL_PADDING
      //cell text
    )
  );
};
const deleteRows = (gridData, rows, hardDelete = false) => {
  const copy = {
    ...gridData,
    fields: gridData.fields.map((field) => ({ ...field, values: field.values.slice() }))
  };
  for (const field of copy.fields) {
    const valuesArray = field.values.toArray();
    for (let i = rows.length - 1; i >= 0; i--) {
      if (hardDelete) {
        valuesArray.splice(rows[i], 1);
      } else {
        valuesArray.splice(rows[i], 1, null);
      }
    }
    field.values = [...valuesArray];
  }
  return {
    ...copy,
    length: copy.fields[0]?.values.length ?? 0
  };
};
const clearCellsFromRangeSelection = (gridData, range) => {
  const colFrom = range.x;
  const rowFrom = range.y;
  const colTo = range.x + range.width - 1;
  const copy = {
    ...gridData,
    fields: gridData.fields.map((field) => ({ ...field, values: field.values.slice() }))
  };
  for (let i = colFrom; i <= colTo; i++) {
    const field = copy.fields[i];
    const valuesArray = field.values.toArray();
    valuesArray.splice(rowFrom, range.height, ...new Array(range.height).fill(null));
    field.values = [...valuesArray];
  }
  return {
    ...copy,
    length: copy.fields[0]?.values.length ?? 0
  };
};
const cleanStringFieldAfterConversion = (field) => {
  const valuesArray = field.values.toArray();
  field.values = valuesArray.map((val) => val === "undefined" || val === "null" ? null : val);
  return;
};
function getGridTheme(theme) {
  return {
    accentColor: theme.colors.primary.main,
    accentFg: theme.colors.secondary.main,
    textDark: theme.colors.text.primary,
    textMedium: theme.colors.text.secondary,
    textLight: theme.colors.text.secondary,
    textBubble: theme.colors.text.primary,
    textHeader: theme.colors.text.primary,
    bgCell: theme.colors.background.primary,
    bgCellMedium: theme.colors.background.primary,
    bgHeader: theme.colors.background.primary,
    bgHeaderHasFocus: theme.colors.background.secondary,
    bgHeaderHovered: theme.colors.background.secondary,
    linkColor: theme.colors.text.link,
    fontFamily: theme.typography.fontFamily,
    headerFontStyle: `${theme.typography.fontWeightMedium} ${theme.typography.fontSize}px`,
    fgIconHeader: theme.colors.secondary.contrastText,
    bgIconHeader: theme.colors.secondary.main
  };
}
const getGridCellKind = (field, row, hasGridSelection2 = false) => {
  const value = field.values.get(row);
  switch (field.type) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.boolean:
      return {
        kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Boolean,
        data: value ? value : false,
        allowOverlay: false,
        readonly: false
      };
    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number:
      return {
        kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Number,
        data: value ? value : 0,
        allowOverlay: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_3__.isDatagridEnabled)() && !hasGridSelection2,
        readonly: false,
        displayData: value !== null && value !== void 0 ? value.toString() : ""
      };
    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string:
      return {
        kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Text,
        data: value ? value : "",
        allowOverlay: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_3__.isDatagridEnabled)() && !hasGridSelection2,
        readonly: false,
        displayData: value !== null && value !== void 0 ? value.toString() : ""
      };
    default:
      return {
        kind: _glideapps_glide_data_grid__WEBPACK_IMPORTED_MODULE_1__.GridCellKind.Text,
        data: value ? value : "",
        allowOverlay: (0,_featureFlagUtils__WEBPACK_IMPORTED_MODULE_3__.isDatagridEnabled)() && !hasGridSelection2,
        readonly: false,
        displayData: value !== null && value !== void 0 ? value.toString() : ""
      };
  }
};
const getStyles = (theme, isResizeInProgress) => {
  return {
    dataEditor: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      ".dvn-scroll-inner > div:nth-child(2)": {
        // can't avoid type assertion here due to '!important'
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        pointerEvents: "none !important"
      },
      scrollbarColor: `${theme.colors.background.secondary} ${theme.colors.background.primary}`,
      "::-webkit-scrollbar": {
        width: "10px",
        height: "10px"
      },
      "::-webkit-scrollbar-track": {
        background: theme.colors.background.primary
      },
      "::-webkit-scrollbar-thumb": {
        // eslint-disable-next-line @grafana/no-border-radius-literal
        borderRadius: "10px"
      },
      "::-webkit-scrollbar-corner": {
        display: "none"
      }
    }),
    addColumnDiv: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: "120px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.colors.background.primary,
      button: {
        pointerEvents: isResizeInProgress ? "none" : "auto",
        border: "none",
        outline: "none",
        height: "37px",
        fontSize: "20px",
        backgroundColor: theme.colors.background.primary,
        color: theme.colors.text.primary,
        borderRight: `1px solid ${theme.components.panel.borderColor}`,
        borderBottom: `1px solid ${theme.components.panel.borderColor}`,
        [theme.transitions.handleMotion("no-preference")]: {
          transition: "background-color 200ms"
        },
        cursor: "pointer",
        ":hover": {
          backgroundColor: theme.colors.background.secondary
        }
      },
      input: {
        height: "37px",
        border: `1px solid ${theme.colors.primary.main}`,
        ":focus": {
          outline: "none"
        }
      }
    }),
    renameColumnInput: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      height: "37px",
      border: `1px solid ${theme.colors.primary.main}`,
      ":focus": {
        outline: "none"
      }
    })
  };
};
const hasGridSelection = (gridSelection) => {
  if (gridSelection.rows.length || gridSelection.columns.length) {
    return true;
  }
  if (gridSelection.current === void 0) {
    return false;
  }
  return gridSelection.current.range && !(gridSelection.current.range.height === 1 && gridSelection.current.range.width === 1);
};


/***/ })

}]);
//# sourceMappingURL=dataGridPanel.12d33902b2b7bae7df1c.js.map