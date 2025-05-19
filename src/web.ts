import { WebPlugin } from '@capacitor/core';

import type { AgeRestrictedUser, InterstialAd, RewardedAd, SetUserContent, StickyBannerAd, YaMobAdsPlugin } from './definitions';

export class YaMobAdsWeb extends WebPlugin implements YaMobAdsPlugin {
  Demoblocks = {
        YandexBanner: 'demo-banner-yandex',
        YandexInterstial: 'demo-interstitial-yandex',
        YandexRewarded: 'demo-rewarded-yandex',
        YandexNativeApp: 'demo-native-app-yandex',
        YandexNativeVideo: 'demo-native-video-yandex',
        YandexNativeContent: 'demo-native-content-yandex',
        YandexAppopenAd: 'demo-appopenad-yandex',
        YandexFeed: 'demo-feed-yandex',
        YandexNativeBulk: 'demo-native-bulk-yandex',
  }
  async LoadInterstialAd(options: InterstialAd): Promise<void> 
  {
      console.log(options);
  }
  async ShowInterstialAd(): Promise<void> 
  {
    
  }
  async DestroyInterstialAd(): Promise<void> 
  {
    
  }
  async LoadRewardedAd(options: RewardedAd): Promise<void>
  {
    console.log(options);
  }
  async ShowRewardedAd(): Promise<void>
  {
    throw new Error('Method not implemented.');
  }
  async DestroyRewardedAd(): Promise<void> 
  {
    
  }
  async LoadStickyBannerAd(options: StickyBannerAd): Promise<void>
  {
    console.log(options);
  }
  async DestroyStickyBanner(): Promise<void> 
  {
    
  }
  async SetAgeRestrictedUser(options: AgeRestrictedUser): Promise<void> 
  {
    console.log(options);
  }
  async SetUserContent(options: SetUserContent): Promise<void> 
  {
    console.log(options);
  }
  async YandexAdsInit(): Promise<void> 
  {
    
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
