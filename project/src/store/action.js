const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_FOCUSED_AD_ID: 'CHANGE_FOCUSED_AD_ID',
  CHANGE_SORTING_TYPE: 'CHANGE_SORTING_TYPE',
  LOAD_ADS: 'LOAD_ADS',
  ADS_ARE_LOADED: 'ADS_ARE_LOADED',
  ADS_NOT_LOADED: 'ADS_NOT_LOADED',
};

const ActionCreator = {
  changeCity: (newCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: newCity,
  }),
  changeFocusedAdId: (newId) => ({
    type: ActionType.CHANGE_FOCUSED_AD_ID,
    payload: newId,
  }),
  changeSortingType: (newType) => ({
    type: ActionType.CHANGE_SORTING_TYPE,
    payload: newType,
  }),
  loadAds: (ads) => ({
    type: ActionType.LOAD_ADS,
    payload: ads,
  }),
  adsAreLoaded: () => ({
    type: ActionType.ADS_ARE_LOADED,
  }),
  adsNotLoaded: () => ({
    type: ActionType.ADS_NOT_LOADED,
  }),
};

export {ActionType, ActionCreator};
