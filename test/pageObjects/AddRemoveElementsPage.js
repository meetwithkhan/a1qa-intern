import BasePage from'../../framework/page/BasePage.js'
import  {Button, Label } from '../../framework/elements/index.js'


class AddRemoveElementsPage extends BasePage{
    constructor(){
        super(new Label('//*[text()="Add/Remove Elements"]', 'Unique element for Add Remove Page' ), 'Add Remove Element Page');

        this.addElementButton = new Button('//*[@onclick="addElement()"]', 'Add Element Button');
        this.deleteButton = new Button('//*[@class="added-manually"]', 'Delete Element Button'); 
    }

    async clickAddElementButton(){
        await this.addElementButton.click()
    }

    async isDeleteElementButtonDisplayed(){
        return await this.deleteButton.state().isDisplayed();
    }

    async clickDeleteElementButton(){
        await this.deleteButton.click();
    }

    async isNotDeleteElementButtonDisplayed(){
        return await this.deleteButton.state().waitForDisplayed({reverse : true});
    }

}

export default new AddRemoveElementsPage();