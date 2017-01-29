import {
  Linking,
  Platform
} from 'react-native'

export const maybeOpenURL = async (url, { appName, appStoreUrl, playStoreUrl }) => {
  Linking.openURL(url).catch(err => {
    if (err.code === 'EUNSPECIFIED') {
      if (Platform.OS === 'ios') {
        Linking.openURL(appStoreUrl)
      } else {
        Linking.openURL(playStoreUrl)
      }
    } else {
      throw new Error(`Could not open ${appName}. ${err.toString()}`)
    }
  })
}

export default {
  maybeOpenURL
}
