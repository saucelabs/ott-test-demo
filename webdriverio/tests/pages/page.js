export default class Page {
  constructor() {
    this.title = 'Page'
  }

  async open() {
    throw new Error('Not implemented')
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
  }

  async activeElement() {
    const el = await driver.getActiveElement()
    if (el) return await driver.$(el)
    else return null
  }

  async pressKey(key) {
    let keyCode = ''
    switch (key) {
      case 'back': await driver.execute('mobile: pressButton', { name: 'Back' }); return;
      case 'select': await driver.execute('mobile: pressButton', { name: 'Select' }); return;
      case 'home': await driver.execute('mobile: pressButton', { name: 'Home' }); return;
      case 'left': await driver.execute('mobile: pressButton', { name: 'Left' }); return;
      case 'up': await driver.execute('mobile: pressButton', { name: 'Up' }); return;
      case 'right': await driver.execute('mobile: pressButton', { name: 'Right' }); return;
      case 'down': await driver.execute('mobile: pressButton', { name: 'Down' }); return;
  
      default: keyCode = key; break;
    }
    const actions = keyCode.split('')
      .map(char => [
        { type: 'keyDown', value: char },
        { type: 'keyUp', value: char },
      ])
      .reduce((prev, cur) => [...(prev || []), ...cur])
    console.log(actions)
    await driver.performActions([
      {
        type: 'key',
        id: 'keyboard',
        actions,
      },
    ])
  }
  
}
