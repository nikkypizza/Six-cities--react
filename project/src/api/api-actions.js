import { ActionCreator } from '../store/action';
import adaptAdsFormat from '../adapters/ads';
import { APIRoute, AuthorizationStatus } from '../const';

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.ADS)
    .then(({data}) => {
      dispatch(ActionCreator.loadAds(adaptAdsFormat(data)));
      dispatch(ActionCreator.adsAreLoaded(true));
    }).catch((error) => {
      dispatch(ActionCreator.adsAreLoaded(false));
      throw error;
    })
);

const setAuthStatus = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.login(data));
      dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.AUTH));
    }).catch((e) => {
      dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.NO_AUTH));
    })
);

const login = (userInput) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, userInput)
    .then(({data}) => {
      localStorage.token = data.token;
      dispatch(ActionCreator.login(data));
      dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.AUTH));
    }).catch((e) => {
      dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.NO_AUTH));
    })
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => {
      localStorage.removeItem('token');
      dispatch(ActionCreator.logout());
      dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.NO_AUTH));
    })
);

const fetchFullAdInfo = (adId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.ADS}/${adId}`)
    .then((res) => {
      dispatch(ActionCreator.loadFullAdInfo(res.data));
      dispatch(ActionCreator.fullAdInfoLoaded(true));
    }).catch((e) => {
      dispatch(ActionCreator.fullAdInfoLoaded(false));
    })
);

const fetchAdComments = (adId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${adId}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadAdComments(data));
    }).catch((e) => {
      throw e;
    })
);


const fetchAdsNearby = (adId) => (dispatch, _getState, api) => {
  api.get(`${APIRoute.ADS}/${adId}${APIRoute.ADS_NEARBY}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadAdsNearby(data));
    }).catch((e) => {
      throw e;
    });
};

export {
  fetchOffers,
  setAuthStatus,
  login,
  logout,
  fetchAdsNearby,
  fetchFullAdInfo,
  fetchAdComments
};
