import Page from '../page'

class VideoPage extends Page {

  constructor() {
    super()
    this.title = 'VideoPage'
  }

  async goToSection(sectionName) {
    // Go to top menu and work our way down from there
    await this.goToTopMenu()

    // Go down until we find the "hourly forecast" is focused
    for (let i = 0; i < 10; i++) {
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
