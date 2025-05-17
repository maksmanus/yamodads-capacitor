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
    const YaModAdsEvents = {
        DemoBlocks: {
            YandexBanner: 'demo-banner-yandex',
            YandexInterstial: 'demo-interstitial-yandex',
            YandexRewarded: 'demo-rewarded-yandex',
            YandexNativeApp: 'demo-native-app-yandex',
            YandexNativeVideo: 'demo-native-video-yandex',
            YandexNativeContent: 'demo-native-content-yandex',
            YandexAppopenAd: 'demo-appopenad-yandex',
            YandexFeed: 'demo-feed-yandex',
            YandexNativeBulk: 'demo-native-bulk-yandex',
        },
        InterstialEventsNames: {
            onAdFailedToLoad: 'onAdFailedToLoadInterstial',
            onAdLoaded: 'onAdLoadedInterstial',
            onAdClicked: 'onAdClickedInterstial',
            onAdDismissed: 'onAdDismissedInterstial',
            onAdFailedToShow: 'onAdFailedToShowInterstial',
            onAdImpression: 'onAdImpressionInterstial',
            onAdShown: 'onAdShownInterstial'
        },
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
        StickyEventsNames: {
            onAdClicked: 'onAdClickedSticky',
            onAdFailedToLoad: 'onAdFailedToLoadSticky',
            onAdLoaded: 'onAdLoadedSticky',
            onImpression: 'onImpressionSticky',
            onLeftApplication: 'onLeftApplicationSticky',
            onReturnedToApplication: 'onReturnedToApplicationSticky'
        }
    };

    const YaMobAds = core.registerPlugin('YaMobAds', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.YaMobAdsWeb()),
    });

    class YaMobAdsWeb extends core.WebPlugin {
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
    exports.InterstialAd = InterstialAd;
    exports.RewardedAd = RewardedAd;
    exports.SetUserContent = SetUserContent;
    exports.StickyBannerAd = StickyBannerAd;
    exports.YaMobAds = YaMobAds;
    exports.YaModAdsEvents = YaModAdsEvents;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
