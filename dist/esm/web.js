import { WebPlugin } from '@capacitor/core';
export class YaMobAdsWeb extends WebPlugin {
    async LoadInterstialAd(options) {
    }
    async ShowInterstialAd() {
    }
    async DestroyInterstialAd() {
    }
    async LoadRewardedAd(options) {
    }
    async ShowRewardedAd() {
        throw new Error('Method not implemented.');
    }
    async DestroyRewardedAd() {
    }
    async LoadStickyBannerAd(options) {
    }
    async DestroyStickyBanner() {
    }
    async SetAgeRestrictedUser(options) {
    }
    async SetUserContent(options) {
    }
    async YandexAdsInit() {
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map