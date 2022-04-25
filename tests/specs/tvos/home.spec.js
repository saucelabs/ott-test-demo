import HomePage from '../../pages/tvos/home'
import {fuzzyMatchHour} from '../../pages/tvos/helper'

describe('Home view', () => {
  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5 * 60000; // 5 minutes

    await driver.execute('mobile: terminateApp', { "bundleId": "com.yourcompany.TestWithCustomTabs" })
    await driver.execute('mobile: launchApp', { "bundleId": "com.yourcompany.TestWithCustomTabs" })
  });

  afterEach(async () => {
    await driver.execute('mobile: terminateApp', { "bundleId": "com.yourcompany.TestWithCustomTabs" })
  });

  it('24h forecast starts with current hour', async () => {
    await HomePage.goToHourlyForecast()
    console.log(await driver.getPageSource())

    const forecastForCurrentHour = await HomePage.goToFirstForecast()
    const name = await HomePage.getText(forecastForCurrentHour)

    expect(
      fuzzyMatchHour(
        new Date().getHours(),
        name
      )
    ).toBeTrue()
  })

  it('can navigate through 24h forecast', async () => {
    await HomePage.goToHourlyForecast()

    expect(await HomePage.goToFirstForecast()).toBeTruthy()
    
    // Expect at least 24 forecasts items
    for (let i = 0; i < 23; i += 1) {
      expect(await HomePage.goToNextForecast()).toBeTruthy()
    }

    // expect that there is no 25th forecast items
    expect(await HomePage.goToNextForecast()).toBe(null)
  })

});
