export class SetUserContent {
    constructor(_setusercontent) {
        this.setUserContent = _setusercontent;
    }
}
export class AgeRestrictedUser {
    constructor(_SetAge) {
        this.SetAge = _SetAge;
    }
}
export class InterstialAd {
    constructor(_ad_id) {
        this.ad_id = _ad_id;
    }
}
export class RewardedAd {
    constructor(_ad_id) {
        this.ad_id = _ad_id;
    }
}
export class StickyBannerAd {
    constructor(_ad_id) {
        this.ad_id = _ad_id;
    }
}
/**
 * @typedef {Object} YaModAdsEvents
 * Object contains YAndex Ads Events
 */
export const YaModAdsEvents = {
    /**
     * @typedef {Object} InterstialEventsNames
     * InterstialEventsNames contains Interstial Yandex Ads Events,
     * @example
     *      document.addEventListener(YaModAdsEvents.InterstialEventsNames.onAdClicked, YOUR_FUNCTION)
     */
    InterstialEventsNames: {
        onAdFailedToLoad: 'onAdFailedToLoadInterstial',
        onAdLoaded: 'onAdLoadedInterstial',
        onAdClicked: 'onAdClickedInterstial',
        onAdDismissed: 'onAdDismissedInterstial',
        onAdFailedToShow: 'onAdFailedToShowInterstial',
        onAdImpression: 'onAdImpressionInterstial',
        onAdShown: 'onAdShownInterstial'
    },
    /**
     * @typedef {Object} RewardedEventsNames
     * * RewardedEventsNames contains Rewarded Yandex Ads Events,
     * @example
     *      document.addEventListener(YaModAdsEvents.RewardedEventsNames.onAdClicked, YOUR_FUNCTION)
     */
    RewardedEventsNames: {
        onAdFailedToLoad: 'onAdFailedToLoadRewarded',
        onAdLoaded: 'onAdLoadedRewarded',
        onAdClicked: 'onAdClickedRewarded',
        onAdDismissed: 'onAdDismissedRewarded',
        onAdFailedToShow: 'onAdFailedToShowRewarded',
        onAdImpression: 'onAdImpressionRewarded',
        onAdShown: 'onAdShownRewarded',
        onRewarded: 'onRewardedRewarded'
    },
    /**
     * @typedef {Object} StickyEventsNames
     * StickyEventsNames contains Sticky banner Yandex Ads Events,
     * @example
     *      document.addEventListener(YaModAdsEvents.StickyEventsNames.onAdClicked, YOUR_FUNCTION)
     */
    StickyEventsNames: {
        onAdClicked: 'onAdClickedSticky',
        onAdFailedToLoad: 'onAdFailedToLoadSticky',
        onAdLoaded: 'onAdLoadedSticky',
        onImpression: 'onImpressionSticky',
        onLeftApplication: 'onLeftApplicationSticky',
        onReturnedToApplication: 'onReturnedToApplicationSticky'
    }
};
/**
 * @typedef {Object} YaMobAdsDemoblocks
 * YaMobAdsDemoblocks - object with demo ids yandex ads mobile demo ads
 * @property {string} YaMobAdsDemoblocks.YandexBanner - Demp banner ads
 * @property {string} YaMobAdsDemoblocks.YandexInterstial - Demp interstial ads
 * @property {string} YaMobAdsDemoblocks.YandexRewarded - Demp rewarded ads
 * @property {string} YaMobAdsDemoblocks.YandexNativeApp - Demp native app ads
 * @property {string} YaMobAdsDemoblocks.YandexNativeVideo - Demp native video ads
 * @property {string} YaMobAdsDemoblocks.YandexFeed - Demp feed ads
 */
export const YaMobAdsDemoblocks = {
    YandexBanner: 'demo-banner-yandex',
    YandexInterstial: 'demo-interstitial-yandex',
    YandexRewarded: 'demo-rewarded-yandex',
    YandexNativeApp: 'demo-native-app-yandex',
    YandexNativeVideo: 'demo-native-video-yandex',
    YandexNativeContent: 'demo-native-content-yandex',
    YandexAppopenAd: 'demo-appopenad-yandex',
    YandexFeed: 'demo-feed-yandex',
    YandexNativeBulk: 'demo-native-bulk-yandex',
};
//# sourceMappingURL=definitions.js.map