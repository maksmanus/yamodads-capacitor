import { WebPlugin } from '@capacitor/core';
import type { AgeRestrictedUser, AppOpenAd, InterstialAd, RewardedAd, SetUserContent, StickyBannerAd, YaMobAdsPlugin } from './definitions';
export declare class YaMobAdsWeb extends WebPlugin implements YaMobAdsPlugin {
    Demoblocks: {
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
    LoadInterstialAd(options: InterstialAd): Promise<void>;
    ShowInterstialAd(): Promise<void>;
    DestroyInterstialAd(): Promise<void>;
    LoadRewardedAd(options: RewardedAd): Promise<void>;
    ShowRewardedAd(): Promise<void>;
    DestroyRewardedAd(): Promise<void>;
    LoadStickyBannerAd(options: StickyBannerAd): Promise<void>;
    DestroyStickyBanner(): Promise<void>;
    SetAgeRestrictedUser(options: AgeRestrictedUser): Promise<void>;
    SetUserContent(options: SetUserContent): Promise<void>;
    YandexAdsInit(): Promise<void>;
    DestroyAppOpenAd(): Promise<void>;
    LoadAppOpenAd(options: AppOpenAd): Promise<void>;
    SetAutoShowAppOpenAd(options: boolean): Promise<void>;
    ShowAppOpenAd(): Promise<void>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
