const DISABLED_CLASSNAME = 'disabled';
const TABS_CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const DEFAULT_CITY = TABS_CITIES[0];
const MAX_PHOTOS_IN_AD = 6;
const MAX_ADS_NEARBY = 3;
const MAX_REVIEWS_IN_AD = 10;
const NOTIFICATION_HIDE_TIMEOUT = 3000;

const CommentFormLength = {
  MIN: 50,
  MAX: 300,
};

const SORTING_OPTIONS = [{
  title: 'Popular',
  adSortingType: null,
},
{
  title: 'Price: low to high',
  adSortingType: 'priceAscending',
},
{
  title: 'Price: high to low',
  adSortingType: 'priceDescending',
},
{
  title: 'Top rated first',
  adSortingType: 'ratingDescending',
},
];

const DEFAULT_SORTING_TYPE = SORTING_OPTIONS[0].adSortingType;

const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id?',
  SERVER_ERROR: '/serverDown',
  NOT_FOUND: '/404',
};

const APIRoute = {
  ADS: '/hotels',
  ADS_NEARBY: '/nearby',
  COMMENTS: '/comments',
  FAVOURITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

const MapPinSetting = {
  DEFAULT: {
    iconUrl: 'img/pin.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  },
  ACTIVE: {
    iconUrl: 'img/pin-active.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  },
};

const MapCitySetting = {
  PARIS: {
    lat: 48.85,
    lng: 2.35,
    zoom: 12,
  },
  COLOGNE: {
    lat: 50.93,
    lng: 6.95,
    zoom: 12,
  },
  AMSTERDAM: {
    lat: 52.38333,
    lng: 4.9,
    zoom: 12,
  },
  BRUSSELS: {
    lat: 50.85,
    lng: 4.35,
    zoom: 12,
  },
  HAMBURG: {
    lat: 53.54,
    lng: 9.99,
    zoom: 12,
  },
  DUSSELDORF: {
    lat: 51.23,
    lng: 6.77,
    zoom: 12,
  },
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const CommentSendStatus = {
  DEFAULT: null,
  OK: 'ok',
  PENDING: 'pending',
};

const HttpCode = {
  UNAUTHORIZED: 401,
  SERVER_ERRORS: [500, 501, 502, 503, 504, 505],
};

export {
  NOTIFICATION_HIDE_TIMEOUT,
  DEFAULT_SORTING_TYPE,
  DISABLED_CLASSNAME,
  MAX_PHOTOS_IN_AD,
  MAX_REVIEWS_IN_AD,
  MAX_ADS_NEARBY,
  SORTING_OPTIONS,
  TABS_CITIES,
  DEFAULT_CITY,
  HttpCode,
  CommentFormLength,
  AuthorizationStatus,
  CommentSendStatus,
  MapPinSetting,
  MapCitySetting,
  AppRoute,
  APIRoute
};
