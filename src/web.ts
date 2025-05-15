import { WebPlugin } from '@capacitor/core';

import type { AgeRestrictedUser, InterstialAd, RewardedAd, SetUserContent, StickyBannerAd, YaMobAdsPlugin } from './definitions';

export class YaMobAdsWeb extends WebPlugin implements YaMobAdsPlugin {
  async LoadInterstialAd(options: InterstialAd): Promise<void> 
  {
    
  }
  async ShowInterstialAd(): Promise<void> 
  {
    
  }
  async DestroyInterstialAd(): Promise<void> 
  {
    
  }
  async LoadRewardedAd(options: RewardedAd): Promise<void>
  {
    
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
    
  }
  async DestroyStickyBanner(): Promise<void> 
  {
    
  }
  async SetAgeRestrictedUser(options: AgeRestrictedUser): Promise<void> 
  {
    
  }
  async SetUserContent(options: SetUserContent): Promise<void> 
  {
    
  }
  async YandexAdsInit(): Promise<void> 
  {
    
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
