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

export class AppOpenAd
{
    ad_id: string;

    constructor(_ad_id: string)
    {
        this.ad_id = _ad_id;
    }
}

export interface YaMobAdsPlugin 
{
    /**
     * Initizlizing Yandex Ads
     */
    YandexAdsInit(): Promise<void>;
    /**
     * Settings user content 
     * @param options - SetUserContent - use user content, using: `YaMobAds.SetUserContent(new SetUserContent(true))`
     * @example YaMobAds.SetUserContent(new SetUserContent(true))
     */
    SetUserContent(options: SetUserContent): Promise<void>;
    /**
     * 
     * @param options - AgeRestrictedUser - set age for user, using: `YaMobAds.SetAgeRestrictedUser(new AgeRestrictedUser(true))`
     * @example YaMobAds.SetAgeRestrictedUser(new AgeRestrictedUser(true))
     * @example YaMobAds.SetAgeRestrictedUser(new AgeRestrictedUser(false))
     */
    SetAgeRestrictedUser(options: AgeRestrictedUser): Promise<void>;

    /**
     * Loading Interstial Yandex Ad
     * @param options - id interstial ad block, using: `YaMobAds.LoadInterstialAd(new InterstialAd('ad-block-id'))`
     * @example 
     *     YaMobAds.LoadInterstialAd(new InterstialAd('ad-block-id'))
     */
    LoadInterstialAd(options: InterstialAd): Promise<void>;
    /**
     * Show Interstial Yandex Ad
     */
    ShowInterstialAd(): Promise<void>;
    /**
     * Destroying Interstial Yandex Ad
     */
    DestroyInterstialAd(): Promise<void>;
    /**
     * Loading Rewarded Yandex Ad
     * @param options - Rewarded Ad block id, using: `YaMobAds.LoadRewardedAd(new RewardedAd('ad-block-id'))`
     * @example
     *      YaMobAds.LoadRewardedAd(new RewardedAd('ad-block-id'))
     */
    LoadRewardedAd(options: RewardedAd): Promise<void>;
    /**
     * Showing Rewarded Yandex Ad 
     */
    ShowRewardedAd(): Promise<void>;
    /**
     * Destroing Rewarded Yandex Ad 
     */
    DestroyRewardedAd(): Promise<void>;
    /**
     * 
     * @param options - Sticky Yandex Banner ad block id, using: `YaMobAds.LoadStickyBannerAd(new StickyBannerAd('ad-block-id'))`
     * @example
     *       YaMobAds.LoadStickyBannerAd(new StickyBannerAd('ad-block-id'))
     */
    LoadStickyBannerAd(options: StickyBannerAd): Promise<void>;
    /**
     * Destroying Sticky Banner yandex ads
     */
    DestroyStickyBanner(): Promise<void>;
    /**
     * Loading Rewarded Yandex Ad
     * @param options - AppOpen Ad block id, using: `YaMobAds.LoadAppOpenAd(new AppOpenAd('ad-block-id'))`
     * @example
     *      YaMobAds.LoadAppOpenAd(new AppOpenAd('ad-block-id'))
     */
    LoadAppOpenAd(options: AppOpenAd): Promise<void>;
    /**
     * Showin AppOpenAd yandex ads
     */
    ShowAppOpenAd(): Promise<void>;
    /**
     * Destroing AppOpenAd yandex ads
     */
    DestroyAppOpenAd(): Promise<void>

    /**
     *  sets auto showing AppOpenAd yandex ads
     * @param options true / false
     */
    SetAutoShowAppOpenAd(options: boolean): Promise<void>

}

/**
 * @typedef {Object} YaModAdsEvents
 * Object contains YAndex Ads Events
 */
export const YaModAdsEvents =
{
    /**
     * @typedef {Object} InterstialEventsNames
     * InterstialEventsNames contains Interstial Yandex Ads Events, 
     * @example
     *      document.addEventListener(YaModAdsEvents.InterstialEventsNames.onAdClicked, YOUR_FUNCTION)
     */
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

    /**
     * @typedef {Object} RewardedEventsNames
     * * RewardedEventsNames contains Rewarded Yandex Ads Events, 
     * @example
     *      document.addEventListener(YaModAdsEvents.RewardedEventsNames.onAdClicked, YOUR_FUNCTION)
     */
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

    /**
     * @typedef {Object} StickyEventsNames
     * StickyEventsNames contains Sticky banner Yandex Ads Events, 
     * @example
     *      document.addEventListener(YaModAdsEvents.StickyEventsNames.onAdClicked, YOUR_FUNCTION)
     */
    StickyEventsNames:
    {
        onAdClicked: 'onAdClickedSticky',
        onAdFailedToLoad: 'onAdFailedToLoadSticky',
        onAdLoaded: 'onAdLoadedSticky',
        onImpression: 'onImpressionSticky',
        onLeftApplication: 'onLeftApplicationSticky',
        onReturnedToApplication: 'onReturnedToApplicationSticky'
    },
    
     /**
     * @typedef {Object} AppOpenEventsNames
     * AppOpenEventsNames contains App Open Yandex Ads Events, 
     * @example
     *      document.addEventListener(YaModAdsEvents.AppOpenEventsNames.onAdClicked, YOUR_FUNCTION)
     */
    AppOpenEventsNames:
    {
        onAdLoaded: 'onAdLoadedAppOpen',
        onAdShown: 'onAdShownAppOpen',
        onAdFailedToShow: 'onAdFailedToShowAppOpen',
        onAdDismissed: 'onAdDismissedAppOpen',
        onAdClicked: 'onAdClickedAppOpen',
        onAdImpression: 'onAdImpressionAppOpen',
        onAdFailedToLoad: 'onAdFailedToLoadAppOpen'
    }
}

/**
 * @typedef {Object} YaMobAdsDemoblocks
 * YaMobAdsDemoblocks - object with demo ids yandex ads mobile demo ads
 * @property {string} YaMobAdsDemoblocks.YandexBanner - Demp banner ads
 * @property {string} YaMobAdsDemoblocks.YandexInterstial - Demp interstial ads
 * @property {string} YaMobAdsDemoblocks.YandexRewarded - Demp rewarded ads
 * @property {string} YaMobAdsDemoblocks.YandexNativeApp - Demp native app ads
 * @property {string} YaMobAdsDemoblocks.YandexNativeVideo - Demp native video ads
 * @property {string} YaMobAdsDemoblocks.YandexFeed - Demp feed ads
 */
export const YaMobAdsDemoblocks = 
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
}
