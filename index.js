import {
  Linking,
  Platform
} from 'react-native'

export const maybeOpenURL = async (url, { appName, appStoreId, playStoreId }) => {
  Linking.openURL(url).catch(err => {
    if (err.code === 'EUNSPECIFIED') {
      if (Platform.OS === 'ios') {
        Linking.openURL(`https://itunes.apple.com/us/app/${appStoreId}`)
      } else {
        Linking.openURL(`https://play.google.com/store/apps/details?id=${playStoreId}`)
      }
    } else {
      throw new Error(`Could not open ${appName}. ${err.toString()}`)
    }
  })
}

export const openInStore = async (appStoreId, playStoreId) => {
  if (Platform.OS === 'ios') {
    Linking.openURL(`https://itunes.apple.com/us/app/${appStoreId}`)
  } else {
    Linking.openURL(`https://play.google.com/store/apps/details?id=${playStoreId}`)
  }
}

export default {
  maybeOpenURL,
  openInStore
}
