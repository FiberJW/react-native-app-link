# React Native App Link
Easily [deep link](https://en.wikipedia.org/wiki/Mobile_deep_linking) to other apps in React Native. If the app isn't installed on the user's phone, open the App Store or Play Store link instead.

![Example GIF](https://media.giphy.com/media/BZGQdKBEeHqs8/giphy.gif)

## Installation:

`npm i -S react-native-app-link`

## Usage:

```javascript
import AppLink from 'react-native-app-link';

AppLink.maybeOpenURL(url, { appName, appStoreId, appStoreLocale, playStoreId }).then(() => {
  // do stuff
})
.catch((err) => {
  // handle error
});

AppLink.openInStore({ appName, appStoreId, appStoreLocale, playStoreId }).then(() => {
  // do stuff
})
.catch((err) => {
  // handle error
});
```

## API:

### `maybeOpenURL(url, config) -> Promise` Opens link if app is present. If not, it opens an app store to prompt the user to download it. 

`url`: (String) a url in the specified app's [deep linking](https://en.wikipedia.org/wiki/Mobile_deep_linking) format that points to the content you want to open.

`config`: (Object) a set of fallback urls if the app requested does not exist locally.

`config.appName`: (String) the app's name you're linking into.

`config.appStoreId`: (String) the app's ID on the App Store (iOS). Example: `{ appStoreId: '529379082' }`

`config.appStoreLocale`: (String) the App Store's locale (iOS). Defaults to the USA App Store. Example: `{ appStoreId: 'us' }`

`config.playStoreId`: (String) the app's package identifier on the Play Store (Android). Example: `{ playStoreId: 'me.lyft.android' }`

---

### `openInStore(config) -> Promise` Opens an app store to the listing requested. 

`config`: (Object) a config for generate store urls.

`config.appName`: (String) the app's name you're linking into.

`config.appStoreId`: (String) the app's ID on the App Store (iOS). Example: `{ appStoreId: '529379082' }`

`config.appStoreLocale`: (String) the App Store's locale (iOS). Defaults to the USA App Store. Example: `{ appStoreId: 'us' }`

`config.playStoreId`: (String) the app's package identifier on the Play Store (Android). Example: `{ playStoreId: 'me.lyft.android' }`

> If there are any issues file an issue above and don't hesitate to spin up a PR and contribute!
