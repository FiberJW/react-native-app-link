import { Linking, Platform } from 'react-native';

export const maybeOpenURL = async (
  url,
  { appName, appStoreId, appStoreLocale, playStoreId, appGalleryId = null }
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
        if(appGalleryId != null) {
          Linking.openURL(
            `hiapplink://com.huawei.appmarket?appId=C${appGalleryId}`
          ).catch(err => {
              console.log(err)
              if(err.code == 'EUNSPECIFIED') {
                Linking.openURL(
                  `https://play.google.com/store/apps/details?id=${playStoreId}`
                );
              }
          })
        }
        else {
          Linking.openURL(
            `https://play.google.com/store/apps/details?id=${playStoreId}`
          );
        }
      }
    } else {
      throw new Error(`Could not open ${appName}. ${err.toString()}`);
    }
  });
};

export const openInStore = async ({ appName, appStoreId, appStoreLocale = 'us', playStoreId, appGalleryId = null }) => {
  if (Platform.OS === 'ios') {
    Linking.openURL(`https://itunes.apple.com/${appStoreLocale}/app/${appName}/id${appStoreId}`);
  } else {
    if(appGalleryId != null) {
      Linking.openURL(
        `hiapplink://com.huawei.appmarket?appId=C${appGalleryId}`
      ).catch(err => {
          console.log(err)
          if(err.code == 'EUNSPECIFIED') {
            Linking.openURL(
              `https://play.google.com/store/apps/details?id=${playStoreId}`
            );
          }
      })
    }
    else {
      Linking.openURL(
        `https://play.google.com/store/apps/details?id=${playStoreId}`
      );
    }
  }
};

export default {
  maybeOpenURL,
  openInStore,
};
