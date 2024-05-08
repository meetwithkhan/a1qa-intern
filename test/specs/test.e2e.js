describe('Unit2 AccuWeather Test', () => {
    it('Search for New York', async () => {
       // Go to https://www.accuweather.com/
       await browser.url('https://www.accuweather.com/');
       
       // Input "New York" in the search field.
     await  $("[class='search-input']").setValue('New York');

      //checking Search results list is displayed or not.
      await expect($("[class='search-results']")).toBeExisting();

     //Click on the first search result.
      await $("[class='search-bar-result search-result source-radar']").click();

      //checking page header exist or not.
      await expect($("[class='header-loc']")).toBeExisting();

      //checking page header contains city name from the search or not.
      await expect($("[class='header-loc']")).toHaveText(
          expect.stringContaining('New York')
      );
            
    })
})

