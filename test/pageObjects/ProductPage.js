class ProductPage {
    get addToCartButton(){
        return $("#add-to-cart-button")
    }

    get quantityDropdown(){
        return $('#quantity')
    }

    async clickOnDropdownQuantity(quantity){
        const dropdownLink = await $(".a-dropdown-link").$(`=${quantity}`)
        await dropdownLink.click()
    }
}

module.exports = new ProductPage()