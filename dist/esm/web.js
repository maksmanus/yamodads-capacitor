import { WebPlugin } from '@capacitor/core';
export class YaMobAdsWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map