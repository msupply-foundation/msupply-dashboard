"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NotificationsPage"],{

/***/ "./node_modules/date-fns/formatDistance.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/date-fns/locale/en-US.js");
/* harmony import */ var _lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/date-fns/_lib/defaultOptions.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js");
/* harmony import */ var _lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/date-fns/_lib/normalizeDates.js");
/* harmony import */ var _compareAsc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/date-fns/compareAsc.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/date-fns/constants.js");
/* harmony import */ var _differenceInMonths_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/date-fns/differenceInMonths.js");
/* harmony import */ var _differenceInSeconds_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/date-fns/differenceInSeconds.js");









/**
 * The {@link formatDistance} function options.
 */

/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */
function formatDistance(laterDate, earlierDate, options) {
  const defaultOptions = (0,_lib_defaultOptions_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.enUS;
  const minutesInAlmostTwoDays = 2520;

  const comparison = (0,_compareAsc_js__WEBPACK_IMPORTED_MODULE_4__.compareAsc)(laterDate, earlierDate);

  if (isNaN(comparison)) throw new RangeError("Invalid time value");

  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison: comparison,
  });

  const [laterDate_, earlierDate_] = (0,_lib_normalizeDates_js__WEBPACK_IMPORTED_MODULE_3__.normalizeDates)(
    options?.in,
    ...(comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]),
  );

  const seconds = (0,_differenceInSeconds_js__WEBPACK_IMPORTED_MODULE_7__.differenceInSeconds)(earlierDate_, laterDate_);
  const offsetInSeconds =
    ((0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(earlierDate_) -
      (0,_lib_getTimezoneOffsetInMilliseconds_js__WEBPACK_IMPORTED_MODULE_2__.getTimezoneOffsetInMilliseconds)(laterDate_)) /
    1000;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }

    // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);

    // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);

    // 1.5 hrs up to 24 hrs
  } else if (minutes < _constants_js__WEBPACK_IMPORTED_MODULE_5__.minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);

    // 1 day up to 1.75 days
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);

    // 1.75 days up to 30 days
  } else if (minutes < _constants_js__WEBPACK_IMPORTED_MODULE_5__.minutesInMonth) {
    const days = Math.round(minutes / _constants_js__WEBPACK_IMPORTED_MODULE_5__.minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);

    // 1 month up to 2 months
  } else if (minutes < _constants_js__WEBPACK_IMPORTED_MODULE_5__.minutesInMonth * 2) {
    months = Math.round(minutes / _constants_js__WEBPACK_IMPORTED_MODULE_5__.minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }

  months = (0,_differenceInMonths_js__WEBPACK_IMPORTED_MODULE_6__.differenceInMonths)(earlierDate_, laterDate_);

  // 2 months up to 12 months
  if (months < 12) {
    const nearestMonth = Math.round(minutes / _constants_js__WEBPACK_IMPORTED_MODULE_5__.minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);

    // 1 year up to max Date
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);

      // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);

      // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);


/***/ }),

/***/ "./node_modules/date-fns/formatDistanceToNow.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formatDistanceToNow: () => (/* binding */ formatDistanceToNow)
/* harmony export */ });
/* harmony import */ var _constructNow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/date-fns/constructNow.js");
/* harmony import */ var _formatDistance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/date-fns/formatDistance.js");




/**
 * The {@link formatDistanceToNow} function options.
 */

/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param date - The given date
 * @param options - The object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function formatDistanceToNow(date, options) {
  return (0,_formatDistance_js__WEBPACK_IMPORTED_MODULE_1__.formatDistance)(date, (0,_constructNow_js__WEBPACK_IMPORTED_MODULE_0__.constructNow)(date), options);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistanceToNow);


/***/ }),

/***/ "./public/app/core/components/AppNotifications/StoredNotificationItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoredNotificationItem: () => (/* binding */ StoredNotificationItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/date-fns/formatDistanceToNow.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const StoredNotificationItem = ({
  children,
  className,
  isSelected,
  onClick,
  severity = "error",
  title,
  traceId,
  timestamp
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const styles = getStyles(theme);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card, { noMargin: true, className, onClick, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Heading, { children: title }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Description, { children }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Figure, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { onChange: onClick, tabIndex: -1, value: isSelected }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Tags, { className: styles.trace, children: [
      traceId && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: `Trace ID: ${traceId}` }),
      timestamp && (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.formatDistanceToNow)(timestamp, { addSuffix: true })
    ] })
  ] });
};
const getStyles = (theme) => {
  return {
    trace: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignItems: "flex-end",
      alignSelf: "flex-end",
      color: theme.colors.text.secondary,
      display: "flex",
      flexDirection: "column",
      fontSize: theme.typography.pxToRem(10),
      justifySelf: "flex-end"
    })
  };
};


/***/ }),

/***/ "./public/app/features/notifications/NotificationsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsPage: () => (/* binding */ NotificationsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _StoredNotifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/notifications/StoredNotifications.tsx");




const NotificationsPage = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__.Page, { navId: "profile/notifications", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__.Page.Contents, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StoredNotifications__WEBPACK_IMPORTED_MODULE_2__.StoredNotifications, {}) }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationsPage);


/***/ }),

/***/ "./public/app/features/notifications/StoredNotifications.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoredNotifications: () => (/* binding */ StoredNotifications)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_AppNotifications_StoredNotificationItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/AppNotifications/StoredNotificationItem.tsx");
/* harmony import */ var app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/reducers/appNotification.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/store.ts");










function StoredNotifications() {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
  const notifications = (0,app_types_store__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state) => (0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_11__.selectWarningsAndErrors)(state.appNotifications));
  const [selectedNotificationIds, setSelectedNotificationIds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const allNotificationsSelected = notifications.every(
    (notification) => selectedNotificationIds.includes(notification.id)
  );
  const lastReadTimestamp = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,app_types_store__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state) => (0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_11__.selectLastReadTimestamp)(state.appNotifications)));
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_11__.readAllNotifications)(Date.now()));
  });
  const clearSelectedNotifications = () => {
    if (allNotificationsSelected) {
      dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_11__.clearAllNotifications)());
    } else {
      selectedNotificationIds.forEach((id) => {
        dispatch((0,app_core_reducers_appNotification__WEBPACK_IMPORTED_MODULE_11__.clearNotification)(id));
      });
    }
    setSelectedNotificationIds([]);
  };
  const handleAllCheckboxToggle = (isChecked) => {
    setSelectedNotificationIds(isChecked ? notifications.map((n) => n.id) : []);
  };
  const handleCheckboxToggle = (id) => {
    setSelectedNotificationIds((prevState) => {
      if (!prevState.includes(id)) {
        return [...prevState, id];
      } else {
        return prevState.filter((notificationId) => notificationId !== id);
      }
    });
  };
  if (notifications.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.EmptyState, { variant: "completed", message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("notifications.empty-state.title", "You're all caught up!"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "notifications.empty-state.description", children: "Notifications you have received will appear here" }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert,
      {
        severity: "info",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "notifications.stored-notifications.title-alert",
          "This page displays past errors and warnings. Once dismissed, they cannot be retrieved."
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.topRow, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Checkbox,
        {
          value: allNotificationsSelected,
          onChange: (event) => handleAllCheckboxToggle(event.target.checked)
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { disabled: selectedNotificationIds.length === 0, onClick: clearSelectedNotifications, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "notifications.stored-notifications.dismiss-notifications", children: "Dismiss notifications" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { className: styles.list, children: notifications.map((notif) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { className: styles.listItem, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_core_components_AppNotifications_StoredNotificationItem__WEBPACK_IMPORTED_MODULE_10__.StoredNotificationItem,
      {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)({ [styles.newItem]: notif.timestamp > lastReadTimestamp.current }),
        isSelected: selectedNotificationIds.includes(notif.id),
        onClick: () => handleCheckboxToggle(notif.id),
        severity: notif.severity,
        title: notif.title,
        timestamp: notif.timestamp,
        traceId: notif.traceId,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: notif.text })
      }
    ) }, notif.id)) })
  ] });
}
function getStyles(theme) {
  return {
    topRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignItems: "center",
      display: "flex",
      gap: theme.spacing(2)
    }),
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column"
    }),
    listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignItems: "center",
      display: "flex",
      gap: theme.spacing(2),
      listStyle: "none",
      position: "relative"
    }),
    newItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      "&::before": {
        content: '""',
        height: "100%",
        position: "absolute",
        left: "-7px",
        top: 0,
        background: theme.colors.gradients.brandVertical,
        width: theme.spacing(0.5),
        borderRadius: theme.shape.radius.default
      }
    }),
    noNotifsWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing(1)
    }),
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(2)
    })
  };
}


/***/ })

}]);
//# sourceMappingURL=NotificationsPage.27f36095061cf6ae253d.js.map