import { registerPlugin } from '@capacitor/core';

import type { YaMobAdsPlugin } from './definitions';

const YaMobAds = registerPlugin<YaMobAdsPlugin>('YaMobAds', {
  web: () => import('./web').then((m) => new m.YaMobAdsWeb()),
});

export * from './definitions';
export { YaMobAds };
