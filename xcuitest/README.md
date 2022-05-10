#  XCUITest Example

This example shows how to
- run an XCUITest for tvOS on SauceLabs Cloud and in CI
- assert video playback metrics


## Getting started

- Open `tvOSSampleApp.xcodeproj`
- Select a real device 
- Change code signing settings
- Run tests


## Assert Video Playback Metrics

The test `test1VideoPlayback` starts the dummy ESPN app.
When started, this app will play a WWDC video.
It also contains a hidden text field where video stats from the [accesss log](https://developer.apple.com/documentation/avfoundation/avplayeritem/1388499-accesslog) are stored.
The tests starts the app and waits for 15s, so the video can start playing.
Next, it reads the statistics from the hidden text field and asserts that
1. the video did not stall
2. the video played at least 10s, i.e. it did not take longer than 5s to start playing.


## Run on SauceLabs RDC via CLI

Edit `.sauce/config.yml` and revisit the following values:
- `sauce.region`
- `suites.devices.name`

```sh
make

SAUCE_ACCESS_KEY=<your-access-key> SAUCE_USERNAME=<your-username> saucectl run -c .sauce/config.yml
```

Note:
The ipa files are build without code signing to make building in a CI environment easy.
SauceLabs will automatically resign the ipa files for you in the cloud.

