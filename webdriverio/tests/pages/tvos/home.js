import Page from '../page'

class HomePage extends Page {

  constructor() {
    super()
    this.title = 'HomePage'
  }

  async goToTopMenu() {
    await Promise.all([
      this.pressKey('up'),
      this.pressKey('up'),
      this.pressKey('up'),
      this.pressKey('up'),
      this.pressKey('up'),
      this.pressKey('up'),
    ])
    // TODO: add validation
  }

  async goToSection(sectionName) {
    // Go to top menu and work our way down from there
    await this.goToTopMenu()

    // Go down until we find the `sectionName` is focused
    for (let i = 0; i < 10; i++) {
      // Wait for animation to finish
      await driver.pause(2000) 

      // The following line takes ~10sec, because of xpath
      const targetEls = await driver.findElements('xpath', `//*[@name="${sectionName}"]/../XCUIElementTypeCollectionView//*[@focused="true"]`)

      if (targetEls.length > 0) return

      await this.pressKey('down')      
    }

    throw new Error(`goToSection(${sectionName}) failed`)
  }

  async goToTrendingNews() {
    return await this.goToSection('Trending News')
  }

  async goToHourlyForecast() {
    return await this.goToSection('HOURLY FORECAST')
  }

  async getText(el) {
    const staticTexts = await el.$$('.//XCUIElementTypeStaticText')
    const names = await Promise.all(staticTexts.map(t => t.getAttribute("name")))
    return names.join(' ')
  }

  async goToFirstForecast() {
    for (let i=0; i<25; i++) {
      const lastEl = await driver.getActiveElement()
      await this.pressKey('left')
      const nextEl = await driver.getActiveElement()
      if (nextEl.ELEMENT == lastEl.ELEMENT) {
        return await driver.$(nextEl)
      }
    }
    throw new Error('selectFirstForecast failed')
  }

  async goToNextForecast() {
    const lastEl = await driver.getActiveElement()
    await this.pressKey('right')
    const nextEl = await driver.getActiveElement()
    
    // Return the new forecast element
    if (nextEl.ELEMENT !== lastEl.ELEMENT) {
      return await driver.$(nextEl)
    }
    
    // Return null, if we have reached the end
    return null
  }
}

export default new HomePage()

/*
<?xml version="1.0" encoding="UTF-8"?><AppiumAUT><XCUIElementTypeApplication type="XCUIElementTypeApplication" name="AccuWeather" label="AccuWeather" enabled="true" visible="true" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="0">
  <XCUIElementTypeWindow type="XCUIElementTypeWindow" enabled="true" visible="true" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="0">
    <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="true" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="0">
      <XCUIElementTypeTabBar type="XCUIElementTypeTabBar" name="Menu" label="Menu" enabled="true" visible="true" accessible="false" focused="false" x="0" y="0" width="1920" height="140" index="0">
        <XCUIElementTypeScrollView type="XCUIElementTypeScrollView" enabled="true" visible="true" accessible="false" focused="false" x="0" y="0" width="1920" height="140" index="0">
          <XCUIElementTypeButton type="XCUIElementTypeButton" value="1" name="Home" label="Home" enabled="true" visible="true" accessible="true" focused="true" x="683" y="1" width="101" height="139" index="0"/>
          <XCUIElementTypeButton type="XCUIElementTypeButton" name="View Map" label="View Map" enabled="true" visible="true" accessible="true" focused="false" x="858" y="1" width="165" height="139" index="1"/>
          <XCUIElementTypeButton type="XCUIElementTypeButton" name="Settings" label="Settings" enabled="true" visible="true" accessible="true" focused="false" x="1097" y="1" width="140" height="139" index="2"/>
        </XCUIElementTypeScrollView>
      </XCUIElementTypeTabBar>
      <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="true" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="1">
        <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="true" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="0">
          <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="true" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="0">
            <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="0">
              <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="0">
                <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="0"/>
              </XCUIElementTypeOther>
            </XCUIElementTypeOther>
            <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="true" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="1">
              <XCUIElementTypeScrollView type="XCUIElementTypeScrollView" enabled="true" visible="true" accessible="false" focused="false" x="0" y="0" width="1920" height="1080" index="0">
                <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="true" accessible="false" focused="false" x="0" y="60" width="1920" height="700" index="0">
                  <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="true" accessible="false" focused="false" x="798" y="250" width="325" height="325" index="0">
                    <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="true" accessible="false" focused="false" x="841" y="293" width="239" height="239" index="0">
                      <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="true" accessible="false" focused="false" x="841" y="293" width="239" height="239" index="0">
                        <XCUIElementTypeImage type="XCUIElementTypeImage" enabled="true" visible="false" accessible="false" focused="false" x="900" y="352" width="121" height="121" index="0"/>
                      </XCUIElementTypeOther>
                      <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="856" y="308" width="209" height="209" index="1">
                        <XCUIElementTypeStaticText type="XCUIElementTypeStaticText" value="RealFeel®: 0°" name="RealFeel®: 0°" label="RealFeel®: 0°" enabled="true" visible="false" accessible="true" focused="false" x="891" y="349" width="139" height="20" index="0"/>
                        <XCUIElementTypeStaticText type="XCUIElementTypeStaticText" value="0°" name="0°" label="0°" enabled="true" visible="false" accessible="true" focused="false" x="930" y="363" width="60" height="84" index="1"/>
                      </XCUIElementTypeOther>
                    </XCUIElementTypeOther>
                  </XCUIElementTypeOther>
                </XCUIElementTypeOther>
                <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="true" accessible="false" focused="false" x="0" y="760" width="1920" height="380" index="1">
                  <XCUIElementTypeCollectionView type="XCUIElementTypeCollectionView" enabled="true" visible="true" accessible="false" focused="false" x="0" y="760" width="1920" height="380" index="0"/>
                  <XCUIElementTypeStaticText type="XCUIElementTypeStaticText" value="Label" name="Label" label="Label" enabled="true" visible="true" accessible="true" focused="false" x="60" y="780" width="73" height="36" index="1"/>
                </XCUIElementTypeOther>
                <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="0" y="760" width="1920" height="1880" index="2">
                  <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="0" y="760" width="1920" height="1880" index="0"/>
                  <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="0" y="760" width="1920" height="1880" index="1"/>
                </XCUIElementTypeOther>
                <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="0" y="1140" width="1920" height="400" index="3">
                  <XCUIElementTypeStaticText type="XCUIElementTypeStaticText" value="HOURLY FORECAST" name="HOURLY FORECAST" label="HOURLY FORECAST" enabled="true" visible="false" accessible="true" focused="false" x="60" y="1168" width="276" height="36" index="0"/>
                  <XCUIElementTypeCollectionView type="XCUIElementTypeCollectionView" enabled="true" visible="false" accessible="false" focused="false" x="20" y="1219" width="1880" height="293" index="1"/>
                </XCUIElementTypeOther>
                <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="0" y="1540" width="1920" height="400" index="4">
                  <XCUIElementTypeStaticText type="XCUIElementTypeStaticText" value="DAILY FORECAST" name="DAILY FORECAST" label="DAILY FORECAST" enabled="true" visible="false" accessible="true" focused="false" x="60" y="1568" width="240" height="36" index="0"/>
                  <XCUIElementTypeCollectionView type="XCUIElementTypeCollectionView" enabled="true" visible="false" accessible="false" focused="false" x="20" y="1619" width="1880" height="293" index="1"/>
                </XCUIElementTypeOther>
              </XCUIElementTypeScrollView>
            </XCUIElementTypeOther>
            <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="0" y="60" width="1920" height="150" index="2">
              <XCUIElementTypeOther type="XCUIElementTypeOther" enabled="true" visible="false" accessible="false" focused="false" x="0" y="60" width="1920" height="150" index="0">
                <XCUIElementTypeImage type="XCUIElementTypeImage" name="AccuWe[0-0] atherLogoWhite" enabled="true" visible="false" accessible="false" focused="false" x="61" y="60" width="250" height="69" index="0"/>
                <XCUIElementTypeStaticText type="XCUIElementTypeStaticText" value="15:51" name="15:51" label="15:51" enabled="true" visible="false" accessible="true" focused="false" x="1666" y="60" width="107" height="55" index="1"/>
                <XCUIElementTypeStaticText type="XCUIElementTypeStaticText" value="WEDNESDAY 19/01" name="WEDNESDAY 19/01" label="WEDNESDAY 19/01" enabled="true" visible="false" accessible="true" focused="false" x="1497" y="110" width="272" height="36" index="2"/>
              </XCUIElementTypeOther>
            </XCUIElementTypeOther>
          </XCUIElementTypeOther>
        </XCUIElementTypeOther>
      </XCUIElementTypeOther>
    </XCUIElementTypeOther>
  </XCUIElementTypeWindow>
</XCUIElementTypeApplication></AppiumAUT>

*/
