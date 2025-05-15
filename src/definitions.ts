export interface YaMobAdsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
