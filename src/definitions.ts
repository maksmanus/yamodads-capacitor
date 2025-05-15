export class SetUserContent
{
    setUserContent : boolean
    constructor(_setusercontent : boolean)
    {
      this.setUserContent = _setusercontent;
    }
}

export class AgeRestrictedUser
{
    SetAge : boolean;

    constructor(_SetAge : boolean)
    {
      this.SetAge = _SetAge;
    }
}

export class InterstialAd
{
   ad_id: string;

   constructor(_ad_id: string)
   {
    this.ad_id = _ad_id;
   }
}

export class RewardedAd
{
    ad_id: string;

    constructor(_ad_id: string)
    {
        this.ad_id = _ad_id;
    }
}

export class StickyBannerAd
{
    ad_id: string;

    constructor(_ad_id: string)
    {
      this.ad_id = _ad_id;
    }
}


export interface YaMobAdsPlugin 
{
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

export const YaModAdsEvents =
{
    DemoBlocks:
    {
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

    InterstialEventsNames: 
    {
        onAdFailedToLoad: 'onAdFailedToLoadInterstial',
        onAdLoaded: 'onAdLoadedInterstial',
        onAdClicked: 'onAdClickedInterstial',
        onAdDismissed: 'onAdDismissedInterstial',
        onAdFailedToShow: 'onAdFailedToShowInterstial',
        onAdImpression: 'onAdImpressionInterstial',
        onAdShown: 'onAdShownInterstial'
    },

    RewardedEventsNames: 
    {
        onAdFailedToLoad: 'onAdFailedToLoadRewarded',
        onAdLoaded: 'onAdLoadedRewarded',
        onAdClicked: 'onAdClickedRewarded',
        onAdDismissed: 'onAdDismissedRewarded',
        onAdFailedToShow: 'onAdFailedToShowRewarded',
        onAdImpression: 'onAdImpressionRewarded',
        onAdShown: 'onAdShownRewarded',
        onRewarded: 'onRewardedRewarded'
    },

    StickyEventsNames:
    {
        onAdClicked: 'onAdClickedSticky',
        onAdFailedToLoad: 'onAdFailedToLoadSticky',
        onAdLoaded: 'onAdLoadedSticky',
        onImpression: 'onImpressionSticky',
        onLeftApplication: 'onLeftApplicationSticky',
        onReturnedToApplication: 'onReturnedToApplicationSticky'
    }
}
