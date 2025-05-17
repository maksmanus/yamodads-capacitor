package com.zeroprod.yamobadscapacitor;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.util.HostMask.Util;
import com.yandex.mobile.ads.banner.BannerAdEventListener;
import com.yandex.mobile.ads.banner.BannerAdView;
import com.yandex.mobile.ads.common.AdError;
import com.yandex.mobile.ads.common.AdRequest;
import com.yandex.mobile.ads.common.AdRequestConfiguration;
import com.yandex.mobile.ads.common.AdRequestError;
import com.yandex.mobile.ads.common.ImpressionData;
import com.yandex.mobile.ads.common.MobileAds;
import com.yandex.mobile.ads.interstitial.InterstitialAd;
import com.yandex.mobile.ads.interstitial.InterstitialAdEventListener;
import com.yandex.mobile.ads.interstitial.InterstitialAdLoadListener;
import com.yandex.mobile.ads.interstitial.InterstitialAdLoader;
import com.yandex.mobile.ads.rewarded.Reward;
import com.yandex.mobile.ads.rewarded.RewardedAd;
import com.yandex.mobile.ads.rewarded.RewardedAdEventListener;
import com.yandex.mobile.ads.rewarded.RewardedAdLoadListener;
import com.yandex.mobile.ads.rewarded.RewardedAdLoader;

import android.app.Activity;
import android.app.ActionBar.LayoutParams;
import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import android.app.ActionBar;

@CapacitorPlugin(name = "YaMobAds")
public class YaMobAdsPlugin extends Plugin 
{
    private YaMobAds implementation = new YaMobAds();

    private InterstitialAd interstitialAd = null;
    private InterstitialAdLoader interstitialAdLoader = null;

    private RewardedAdLoader rewardedAdLoader = null;
    private RewardedAd rewardedAd = null;

    private BannerAdView bannerAd = null;
    private AdRequest bannerAdLoader = null;

    private Activity activity = null;
    public static YaMobAdsPlugin Instance = null;

    public Activity GetActivity()
    {
        return (Activity) this.bridge.getActivity();
    }

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void YandexAdsInit(PluginCall call)
    {
        activity.runOnUiThread(new Runnable()
        {
            @Override
            public void run() 
            {
                MobileAds.initialize(activity, () -> {});
                call.resolve();
            }
        });
    }

    @PluginMethod
    public void SetUserContent(PluginCall call)
    {
        boolean bool = call.getBoolean("setUserContent");
        activity.runOnUiThread(new Runnable() 
        {
            @Override
            public void run() 
            {
                MobileAds.setUserConsent(bool);
                call.resolve();
            }
        });
    }

    @PluginMethod
    public void SetAgeRestrictedUser(PluginCall call)
    {
        boolean bool = call.getBoolean("SetAge");
        activity.runOnUiThread(new Runnable() 
        {
            @Override
            public void run() 
            {
                MobileAds.setAgeRestrictedUser(bool);
                call.resolve();
            }
        });
    }

    @PluginMethod
    public void LoadInterstialAd(PluginCall call)
    {
        activity.runOnUiThread(new Runnable() 
        {
            @Override
            public void run() 
            {
                String ad_id = call.getString("ad_id");
                interstitialAdLoader = new InterstitialAdLoader(activity);
                interstitialAdLoader.setAdLoadListener(new InterstitialAdLoadListener() 
                {

                    @Override
                    public void onAdFailedToLoad(AdRequestError arg0) 
                    {
                        Utils.RunJsEvent(InterstialEvents.onAdFailedToLoad);
                    }

                    @Override
                    public void onAdLoaded(InterstitialAd arg0) 
                    {
                        interstitialAd = arg0;
                        interstitialAd.setAdEventListener(new InterstitialAdEventListener() 
                        {

                            @Override
                            public void onAdClicked() 
                            {
                                Utils.RunJsEvent(InterstialEvents.onAdClicked);
                            }

                            @Override
                            public void onAdDismissed() 
                            {
                               Utils.RunJsEvent(InterstialEvents.onAdDismissed);
                            }

                            @Override
                            public void onAdFailedToShow(AdError arg0) 
                            {
                                Utils.RunJsEvent(InterstialEvents.onAdFailedToLoad);
                            }

                            @Override
                            public void onAdImpression(ImpressionData arg0) 
                            {
                                Utils.RunJsEvent(InterstialEvents.onAdImpression);
                            }

                            @Override
                            public void onAdShown() 
                            {
                                Utils.RunJsEvent(InterstialEvents.onAdShown);
                            }
                            
                        });
                        Utils.RunJsEvent(InterstialEvents.onAdLoaded);
                    }
                });
                AdRequestConfiguration configuration = new AdRequestConfiguration.Builder(ad_id).build();
                interstitialAdLoader.loadAd(configuration);
                call.resolve();
            }
        });
    }

    @PluginMethod
    public void ShowInterstialAd(PluginCall call)
    {
        activity.runOnUiThread(new Runnable() 
        {
            @Override
            public void run() 
            {
                if(interstitialAd != null)
                {
                    interstitialAd.show(bridge.getActivity());
                    call.resolve();
                }
            }
        });
    }

    @PluginMethod
    public void DestroyInterstialAd(PluginCall call)
    {
        activity.runOnUiThread(new Runnable() 
        {
            @Override
            public void run() 
            {
                if(interstitialAd != null)
                {
                    if(interstitialAdLoader != null)
                    {
                        interstitialAdLoader.setAdLoadListener(null);
                        interstitialAdLoader = null;
                    }

                    interstitialAd.setAdEventListener(null);
                    interstitialAd = null;
                    call.resolve();
                }
            }
        });
    }

    @PluginMethod
    public void LoadRewardedAd(PluginCall call)
    {
        String ad_id = call.getString("ad_id");
        activity.runOnUiThread(new Runnable() 
        {
            @Override
            public void run() 
            {
                rewardedAdLoader = new RewardedAdLoader(activity);
                rewardedAdLoader.setAdLoadListener(new RewardedAdLoadListener() 
                {
                    @Override
                    public void onAdFailedToLoad(AdRequestError arg0) 
                    {
                        Utils.RunJsEvent(RewardedEvents.onAdFailedToLoad);
                    }

                    @Override
                    public void onAdLoaded(RewardedAd arg0) 
                    {
                        rewardedAd = arg0;
                        rewardedAd.setAdEventListener(new RewardedAdEventListener() 
                        {
                            @Override
                            public void onAdClicked() 
                            {
                                Utils.RunJsEvent(RewardedEvents.onAdClicked);
                            }

                            @Override
                            public void onAdDismissed() 
                            {
                                Utils.RunJsEvent(RewardedEvents.onAdDismissed);
                            }

                            @Override
                            public void onAdFailedToShow(AdError arg0) 
                            {
                                Utils.RunJsEvent(RewardedEvents.onAdFailedToShow);
                            }

                            @Override
                            public void onAdImpression(ImpressionData arg0) 
                            {
                                Utils.RunJsEvent(RewardedEvents.onAdImpression);
                            }

                            @Override
                            public void onAdShown() 
                            {
                                Utils.RunJsEvent(RewardedEvents.onAdShown);
                            }

                            @Override
                            public void onRewarded(Reward arg0) 
                            {
                                Utils.RunJsEvent(RewardedEvents.onRewarded);
                            }
                        });
                    }
                    
                });
                AdRequestConfiguration configuration = new AdRequestConfiguration.Builder(ad_id).build();
                rewardedAdLoader.loadAd(configuration);
                call.resolve();
            }
        });
    }

    @PluginMethod
    public void ShowRewardedAd(PluginCall call)
    {
        activity.runOnUiThread(new Runnable() 
        {
            @Override
            public void run() 
            {
                rewardedAd.show(bridge.getActivity());
                call.resolve();
            }
        });
    }

    @PluginMethod
    public void DestroyRewardedAd(PluginCall call)
    {
        activity.runOnUiThread(new Runnable() 
        {
            @Override
            public void run() 
            {
                    if(rewardedAd != null)
                {
                    rewardedAd.setAdEventListener(null);
                    rewardedAd = null;
                }

                if(rewardedAdLoader != null)
                {
                    rewardedAdLoader.setAdLoadListener(null);
                    rewardedAdLoader = null;
                }
                call.resolve();
            }
        });
    }

    @PluginMethod
    public void LoadStickyBannerAd(PluginCall call)
    {
        String ad_id = call.getString("ad_ad");
        activity.runOnUiThread(new Runnable() 
        {
            @Override
            public void run() 
            {
                bannerAd = new BannerAdView(activity);
                bannerAd.setAdSize(Utils.getAdSize(activity));
                bannerAd.setAdUnitId(ad_id);
                activity.addContentView(bannerAd, new FrameLayout.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT, Gravity.BOTTOM));

                bannerAd.setBannerAdEventListener(new BannerAdEventListener() 
                {
                    @Override
                    public void onAdClicked() 
                    {
                        Utils.RunJsEvent(StickyAdEvents.onAdClicked);
                    }

                    @Override
                    public void onAdFailedToLoad(AdRequestError arg0) 
                    {
                        Utils.RunJsEvent(StickyAdEvents.onAdFailedToLoad);
                    }

                    @Override
                    public void onAdLoaded() 
                    {
                        Utils.RunJsEvent(StickyAdEvents.onAdLoaded);
                    }

                    @Override
                    public void onImpression(ImpressionData arg0) 
                    {
                        Utils.RunJsEvent(StickyAdEvents.onImpression);
                    }

                    @Override
                    public void onLeftApplication() 
                    {
                        Utils.RunJsEvent(StickyAdEvents.onLeftApplication);
                    }

                    @Override
                    public void onReturnedToApplication() 
                    {
                        Utils.RunJsEvent(StickyAdEvents.onReturnedToApplication);
                    }
                });
                bannerAdLoader = new AdRequest.Builder().build();
                bannerAd.loadAd(bannerAdLoader);
                call.resolve();
            }
        });
    }

    @PluginMethod
    public void DestroyStickyBanner(PluginCall call)
    {
        activity.runOnUiThread(new Runnable() 
        {
            @Override
            public void run()
            {
                if(bannerAd != null)
                {
                    ViewGroup parent = (ViewGroup) bannerAd.getParent();
                    parent.removeView(bannerAd);

                    bannerAd.destroy();
                    bannerAd.setBannerAdEventListener(null);
                    bannerAd = null;
                    call.resolve();
                }
            }
        });
    }

    @Override
    public void load() 
    {   
        super.load();
        activity = this.GetActivity();
        Instance = this;
    }
}
