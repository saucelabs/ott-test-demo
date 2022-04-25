# OTT Webdriver.io Tests

## Getting started

### iOS

Edit `configs/wdio.ios.sauce.real.conf.js` and update the values for:
- `deviceName`
- `app`

You can find the values on the Sauce Labs live testing website.


### Android

Edit `configs/wdio.android.sauce.real.conf.js` and update the values:
- `deviceName`
- `app`
- `appWaitActivity`

You can find the values on the Sauce Labs live testing website.


### Launch

```sh
npm ci
export SAUCE_USERNAME=<your sauce username>
export SAUCE_ACCESS_KEY=<your sauce access token>

npm run

# select a script from the output of `npm run`
npm run <script>
```
