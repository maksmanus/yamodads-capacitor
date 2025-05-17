import { registerPlugin } from '@capacitor/core';
const YaMobAds = registerPlugin('YaMobAds', {
    web: () => import('./web').then((m) => new m.YaMobAdsWeb()),
});
export * from './definitions';
export { YaMobAds };
//# sourceMappingURL=index.js.map