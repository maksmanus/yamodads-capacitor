# yamodads-capacitor

Yandex mobile ads from Capacitor

## Install

```bash
npm install yamodads-capacitor
npx cap sync
```

## API

<docgen-index>

* [`YandexAdsInit()`](#yandexadsinit)
* [`SetUserContent(...)`](#setusercontent)
* [`SetAgeRestrictedUser(...)`](#setagerestricteduser)
* [`LoadInterstialAd(...)`](#loadinterstialad)
* [`ShowInterstialAd()`](#showinterstialad)
* [`DestroyInterstialAd()`](#destroyinterstialad)
* [`LoadRewardedAd(...)`](#loadrewardedad)
* [`ShowRewardedAd()`](#showrewardedad)
* [`DestroyRewardedAd()`](#destroyrewardedad)
* [`LoadStickyBannerAd(...)`](#loadstickybannerad)
* [`DestroyStickyBanner()`](#destroystickybanner)
* [`LoadAppOpenAd(...)`](#loadappopenad)
* [`ShowAppOpenAd()`](#showappopenad)
* [`DestroyAppOpenAd()`](#destroyappopenad)
* [`SetAutoShowAppOpenAd(...)`](#setautoshowappopenad)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### YandexAdsInit()

```typescript
YandexAdsInit() => Promise<void>
```

Initizlizing Yandex Ads

--------------------


### SetUserContent(...)

```typescript
SetUserContent(options: SetUserContent) => Promise<void>
```

Settings user content

| Param         | Type                        | Description                                                                                     |
| ------------- | --------------------------- | ----------------------------------------------------------------------------------------------- |
| **`options`** | <code>SetUserContent</code> | - SetUserContent - use user content, using: `YaMobAds.SetUserContent(new SetUserContent(true))` |

--------------------


### SetAgeRestrictedUser(...)

```typescript
SetAgeRestrictedUser(options: AgeRestrictedUser) => Promise<void>
```

| Param         | Type                           | Description                                                                                                 |
| ------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>AgeRestrictedUser</code> | - AgeRestrictedUser - set age for user, using: `YaMobAds.SetAgeRestrictedUser(new AgeRestrictedUser(true))` |

--------------------


### LoadInterstialAd(...)

```typescript
LoadInterstialAd(options: InterstialAd) => Promise<void>
```

Loading Interstial Yandex Ad

| Param         | Type                      | Description                                                                                   |
| ------------- | ------------------------- | --------------------------------------------------------------------------------------------- |
| **`options`** | <code>InterstialAd</code> | - id interstial ad block, using: `YaMobAds.LoadInterstialAd(new InterstialAd('ad-block-id'))` |

--------------------


### ShowInterstialAd()

```typescript
ShowInterstialAd() => Promise<void>
```

Show Interstial Yandex Ad

--------------------


### DestroyInterstialAd()

```typescript
DestroyInterstialAd() => Promise<void>
```

Destroying Interstial Yandex Ad

--------------------


### LoadRewardedAd(...)

```typescript
LoadRewardedAd(options: RewardedAd) => Promise<void>
```

Loading Rewarded Yandex Ad

| Param         | Type                    | Description                                                                             |
| ------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| **`options`** | <code>RewardedAd</code> | - Rewarded Ad block id, using: `YaMobAds.LoadRewardedAd(new RewardedAd('ad-block-id'))` |

--------------------


### ShowRewardedAd()

```typescript
ShowRewardedAd() => Promise<void>
```

Showing Rewarded Yandex Ad

--------------------


### DestroyRewardedAd()

```typescript
DestroyRewardedAd() => Promise<void>
```

Destroing Rewarded Yandex Ad

--------------------


### LoadStickyBannerAd(...)

```typescript
LoadStickyBannerAd(options: StickyBannerAd) => Promise<void>
```

| Param         | Type                        | Description                                                                                                 |
| ------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>StickyBannerAd</code> | - Sticky Yandex Banner ad block id, using: `YaMobAds.LoadStickyBannerAd(new StickyBannerAd('ad-block-id'))` |

--------------------


### DestroyStickyBanner()

```typescript
DestroyStickyBanner() => Promise<void>
```

Destroying Sticky Banner yandex ads

--------------------


### LoadAppOpenAd(...)

```typescript
LoadAppOpenAd(options: AppOpenAd) => Promise<void>
```

Loading Rewarded Yandex Ad

| Param         | Type                   | Description                                                                          |
| ------------- | ---------------------- | ------------------------------------------------------------------------------------ |
| **`options`** | <code>AppOpenAd</code> | - AppOpen Ad block id, using: `YaMobAds.LoadAppOpenAd(new AppOpenAd('ad-block-id'))` |

--------------------


### ShowAppOpenAd()

```typescript
ShowAppOpenAd() => Promise<void>
```

Showin AppOpenAd yandex ads

--------------------


### DestroyAppOpenAd()

```typescript
DestroyAppOpenAd() => Promise<void>
```

Destroing AppOpenAd yandex ads

--------------------


### SetAutoShowAppOpenAd(...)

```typescript
SetAutoShowAppOpenAd(options: boolean) => Promise<void>
```

sets auto showing AppOpenAd yandex ads

| Param         | Type                 | Description  |
| ------------- | -------------------- | ------------ |
| **`options`** | <code>boolean</code> | true / false |

--------------------

</docgen-api>
