import { WebPlugin } from '@capacitor/core';

import type { YaMobAdsPlugin } from './definitions';

export class YaMobAdsWeb extends WebPlugin implements YaMobAdsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
