import { WebPlugin } from '@capacitor/core';
export class YaMobAdsWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map