import Browser from "../../framework/browser/Browser.js";
import AddRemoveElementsPage from "../pageObjects/AddRemoveElementsPage.js";
import { assert } from "chai";

describe("Add/Remove Element Test",function(){
    it("Check state of Delete Button", async function(){
        await Browser.openUrl("https://the-internet.herokuapp.com/add_remove_elements/");

       await AddRemoveElementsPage.clickAddElementButton();

       assert.isTrue(await AddRemoveElementsPage.isDeleteElementButtonDisplayed(),'Delete Element Button does not displayed ');

       await AddRemoveElementsPage.clickDeleteElementButton();

       assert.isTrue( await AddRemoveElementsPage.isNotDeleteElementButtonDisplayed(), ' Delete Button still displayed');
       
    })
})