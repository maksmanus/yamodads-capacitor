package com.zeroprod.yamobadscapacitor;

import com.yandex.mobile.ads.banner.BannerAdSize;

import android.app.Activity;
import android.util.DisplayMetrics;
import android.view.View;

public class Utils 
{
    public static void RunJsEvent(String eventname)
    {
        String callEvent = String.format("javascript:document.dispatchEvent(new Event('%s'))", eventname);
        YaMobAds.Instance.GetActivity().runOnUiThread(new Runnable() 
        {
            @Override
            public void run() 
            {
                YaMobAds.Instance.getBridge().getWebView().loadUrl(callEvent);
            }
        });
    }    

    public static BannerAdSize getAdSize(Activity activity)
    {
        final DisplayMetrics metrics = activity.getResources().getDisplayMetrics();

        View RootView = activity.getWindow().getDecorView().findViewById(android.R.id.content);
        int adWidthPixels = RootView.getWidth();

        if(adWidthPixels == 0)
        {
            adWidthPixels = metrics.widthPixels;
        }

        final int adWidthDp = Math.round(adWidthPixels / metrics.density);
        return BannerAdSize.stickySize(activity, adWidthDp); 
    }
}
