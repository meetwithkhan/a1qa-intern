describe('Unit2 AccuWeather Test', () => {
    it('Search for New York', async () => {
      await browser.url('https://www.lambdatest.com/selenium-playground/key-press');
      await browser.refresh()
      await  $('#my_field').click();

      await browser.keys('Enter');

      await expect($('#result')).toBeExisting();

      await expect($('#result')).toHaveText(expect.stringContaining('You entered: ENTER'))            
    })
})

