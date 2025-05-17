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
export const YaModAdsEvents = {
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
//# sourceMappingURL=definitions.js.map