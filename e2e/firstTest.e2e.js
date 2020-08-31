describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await element(by.text('Next')).tap();
    await element(by.text('Next')).tap();
    await element(by.text('Done')).tap();
    await element(by.text('Login Screen')).tap();
    await expect(element(by.id('hello'))).toBeVisible();
  });
});
