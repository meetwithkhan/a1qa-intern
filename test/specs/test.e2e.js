describe('Unit2 AccuWeather Test', () => {
    it('Search for New York', async () => {
         // Go to https://www.accuweather.com/
         await browser.url('https://www.accuweather.com/')
       
         // Input "New York" in the search field.
        let searchInput = $('/html/body/div/div[1]/div[3]/div/div[1]/div[1]/form/input')
        searchInput.setValue('New York')

        //checking Search results list is displayed or not.
        await expect($('/html/body/div/div[1]/div[3]/div/div[1]/div[2]')).toBeExisting()

       //Click on the first search result.
        let firstSearchResult = $('/html/body/div/div[1]/div[3]/div/div[1]/div[2]/div[2]/div[1]')
        firstSearchResult.click()

        //checking page header exist or not.
        await expect($('/html/body/div/div[1]/div[2]/div/a[2]/h1')).toBeExisting()

        //checking page header contains city name from the search or not.
        await expect($('/html/body/div/div[1]/div[2]/div/a[2]/h1')).toHaveText(
            expect.stringContaining('New York'))
    })
})

