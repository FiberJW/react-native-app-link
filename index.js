import { Linking, Platform } from 'react-native';

export const maybeOpenURL = async (
  url,
  { appName, appStoreId, appStoreLocale, playStoreId }
) => {
  Linking.openURL(url).catch(err => {
    if (err.code === 'EUNSPECIFIED') {
      if (Platform.OS === 'ios') {
        // check if appStoreLocale is set
        const locale = typeof appStoreLocale === 'undefined'
          ? 'us'
          : appStoreLocale;

        Linking.openURL(`https://itunes.apple.com/${locale}/app/${appName}/id${appStoreId}`);
      } else {
        Linking.openURL(
          `https://play.google.com/store/apps/details?id=${playStoreId}`
        );
      }
    } else {
      throw new Error(`Could not open ${appName}. ${err.toString()}`);
    }
  });
};

export const openInStore = async ({ appName, appStoreId, appStoreLocale = 'us', playStoreId }) => {
  if (Platform.OS === 'ios') {
    Linking.openURL(`https://itunes.apple.com/${appStoreLocale}/app/${appName}/id${appStoreId}`);
  } else {
    Linking.openURL(
      `https://play.google.com/store/apps/details?id=${playStoreId}`
    );
  }
};

export default {
  maybeOpenURL,
  openInStore,
};
