var capacitorYaMobAds = (function (exports, core) {
    'use strict';

    class SetUserContent {
        constructor(_setusercontent) {
            this.setUserContent = _setusercontent;
        }
    }
    class AgeRestrictedUser {
        constructor(_SetAge) {
            this.SetAge = _SetAge;
        }
    }
    class InterstialAd {
        constructor(_ad_id) {
            this.ad_id = _ad_id;
        }
    }
    class RewardedAd {
        constructor(_ad_id) {
            this.ad_id = _ad_id;
        }
    }
    class StickyBannerAd {
        constructor(_ad_id) {
            this.ad_id = _ad_id;
        }
    }
    class AppOpenAd {
        constructor(_ad_id) {
            this.ad_id = _ad_id;
        }
    }
    /**
     * @typedef {Object} YaModAdsEvents
     * Object contains YAndex Ads Events
     */
    const YaModAdsEvents = {
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
        },
        /**
        * @typedef {Object} AppOpenEventsNames
        * AppOpenEventsNames contains App Open Yandex Ads Events,
        * @example
        *      document.addEventListener(YaModAdsEvents.AppOpenEventsNames.onAdClicked, YOUR_FUNCTION)
        */
        AppOpenEventsNames: {
            onAdLoaded: 'onAdLoadedAppOpen',
            onAdShown: 'onAdShownAppOpen',
            onAdFailedToShow: 'onAdFailedToShowAppOpen',
            onAdDismissed: 'onAdDismissedAppOpen',
            onAdClicked: 'onAdClickedAppOpen',
            onAdImpression: 'onAdImpressionAppOpen',
            onAdFailedToLoad: 'onAdFailedToLoadAppOpen'
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
    const YaMobAdsDemoblocks = {
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

    const YaMobAds = core.registerPlugin('YaMobAds', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.YaMobAdsWeb()),
    });

    class YaMobAdsWeb extends core.WebPlugin {
        constructor() {
            super(...arguments);
            this.Demoblocks = {
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
        }
        async LoadInterstialAd(options) {
            console.log(options);
        }
        async ShowInterstialAd() {
        }
        async DestroyInterstialAd() {
        }
        async LoadRewardedAd(options) {
            console.log(options);
        }
        async ShowRewardedAd() {
            throw new Error('Method not implemented.');
        }
        async DestroyRewardedAd() {
        }
        async LoadStickyBannerAd(options) {
            console.log(options);
        }
        async DestroyStickyBanner() {
        }
        async SetAgeRestrictedUser(options) {
            console.log(options);
        }
        async SetUserContent(options) {
            console.log(options);
        }
        async YandexAdsInit() {
        }
        async DestroyAppOpenAd() {
        }
        async LoadAppOpenAd(options) {
            console.log(options);
        }
        async SetAutoShowAppOpenAd(options) {
            console.log(options);
        }
        async ShowAppOpenAd() {
        }
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        YaMobAdsWeb: YaMobAdsWeb
    });

    exports.AgeRestrictedUser = AgeRestrictedUser;
    exports.AppOpenAd = AppOpenAd;
    exports.InterstialAd = InterstialAd;
    exports.RewardedAd = RewardedAd;
    exports.SetUserContent = SetUserContent;
    exports.StickyBannerAd = StickyBannerAd;
    exports.YaMobAds = YaMobAds;
    exports.YaMobAdsDemoblocks = YaMobAdsDemoblocks;
    exports.YaModAdsEvents = YaModAdsEvents;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
