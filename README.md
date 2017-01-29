# React Native App Link
Easily link to other apps in React Native.

Installation:

`npm i -S react-native-app-link`

Usage:

```javascript
import AppLink from 'react-native-app-link';

AppLink.maybeOpenURL(url, { appName, appStoreUrl, playStoreUrl }).then(() => {
  // do stuff
})
.catch((err) => {
  // handle error
});
```

API:

`maybeOpenURL(url, config)`

`url`: (String) a url that points to the content you want to open.

`config`: (Object) a set of fallback urls if the app requested does not exist locally.

`config.appName`: (String) the app's name you're linking into.

`config.appStoreUrl`: (String) the link to the app's listing on the App Store (iOS).

`config.playStoreUrl`: (String) the link to the app's listing on the Play Store (Android).

---

If there are any issues file an issue above and don't hesitate to spin up a PR and contribute!
