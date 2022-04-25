describe('Appium TV test', () => {
  beforeEach(() => {
    
  });

  afterEach(() => {
    // Restart the app after each test
    // driver.reset();
  });

  async function pressKey(key) {
    console.log(key)
    let keyCode = ''
    switch (key) {
      case 'back': keyCode = '\uE004'; break;
      case 'select': keyCode = '\uE007'; break;
      case 'home': keyCode = '\uE011'; break;
      case 'left': keyCode = '\uE012'; break;
      case 'up': keyCode = '\uE013'; break;
      case 'right': keyCode = '\uE014'; break;
      case 'down': keyCode = '\uE015'; break;
      
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

  async function focus(element, options) {
    const MAX_ITERATIONS=20
    const {direction} = options
    await expect(await element.getAttribute('focusable')).toBe('true')
    for (let i=0; i<MAX_ITERATIONS; i++) {
      if ('true' === (await element.getAttribute('focused'))) return;
      await pressKey(direction)
    } 
    await expect(true).toBe(false) // max iteration reached
  }

  it('should be able set up app', async () => {
    const SLEEP_TIME=1000
    // Agree to terms
    await driver.pause(SLEEP_TIME);
    const iAgree = await driver.$('//*[@text="I Agree"]/../..')
    await focus(iAgree, {direction: 'down'})
    await pressKey('select')

    // Don't use GPS
    await driver.pause(SLEEP_TIME);
    const noThanks = await driver.$('//*[@text="No Thanks"]/../..')
    await focus(noThanks, {direction: 'down'})
    await pressKey('select')

    // Navigate back from speech input
    await driver.$('//*[@text="Next"]/../..') 
    await pressKey('right')
    await pressKey('right')
    await pressKey('right')

    // Search for "Berlin"
    await driver.pause(SLEEP_TIME);
    await pressKey('Berlin')
    await pressKey('select')

    // Select an item
    await driver.pause(SLEEP_TIME);
    await pressKey('down')
    await pressKey('select')

    // Press "metric" button
    await driver.pause(SLEEP_TIME);
    const metricButton = await driver.$('//*[@text="Metric"]/../..')
    await focus(metricButton, {direction: 'down'})
    await driver.pause(SLEEP_TIME);
    await pressKey('select')

    // Check if main screen is visible
    await driver.pause(SLEEP_TIME);
    await driver.$('[text="Current Conditions"]')

    // For demo purpose
    await driver.pause(5000);
  });
});