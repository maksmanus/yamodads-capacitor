export declare class SetUserContent {
    setUserContent: boolean;
    constructor(_setusercontent: boolean);
}
export declare class AgeRestrictedUser {
    SetAge: boolean;
    constructor(_SetAge: boolean);
}
export declare class InterstialAd {
    ad_id: string;
    constructor(_ad_id: string);
}
export declare class RewardedAd {
    ad_id: string;
    constructor(_ad_id: string);
}
export declare class StickyBannerAd {
    ad_id: string;
    constructor(_ad_id: string);
}
export interface YaMobAdsPlugin {
    YandexAdsInit(): Promise<void>;
    SetUserContent(options: SetUserContent): Promise<void>;
    SetAgeRestrictedUser(options: AgeRestrictedUser): Promise<void>;
    LoadInterstialAd(options: InterstialAd): Promise<void>;
    ShowInterstialAd(): Promise<void>;
    DestroyInterstialAd(): Promise<void>;
    LoadRewardedAd(options: RewardedAd): Promise<void>;
    ShowRewardedAd(): Promise<void>;
    DestroyRewardedAd(): Promise<void>;
    LoadStickyBannerAd(options: StickyBannerAd): Promise<void>;
    DestroyStickyBanner(): Promise<void>;
}
export declare const YaModAdsEvents: {
    DemoBlocks: {
        YandexBanner: string;
        YandexInterstial: string;
        YandexRewarded: string;
        YandexNativeApp: string;
        YandexNativeVideo: string;
        YandexNativeContent: string;
        YandexAppopenAd: string;
        YandexFeed: string;
        YandexNativeBulk: string;
    };
    InterstialEventsNames: {
        onAdFailedToLoad: string;
        onAdLoaded: string;
        onAdClicked: string;
        onAdDismissed: string;
        onAdFailedToShow: string;
        onAdImpression: string;
        onAdShown: string;
    };
    RewardedEventsNames: {
        onAdFailedToLoad: string;
        onAdLoaded: string;
        onAdClicked: string;
        onAdDismissed: string;
        onAdFailedToShow: string;
        onAdImpression: string;
        onAdShown: string;
        onRewarded: string;
    };
    StickyEventsNames: {
        onAdClicked: string;
        onAdFailedToLoad: string;
        onAdLoaded: string;
        onImpression: string;
        onLeftApplication: string;
        onReturnedToApplication: string;
    };
};
