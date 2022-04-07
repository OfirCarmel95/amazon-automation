const itParam = require("mocha-param")
const navBar = require("../pageObjects/components/NavBar")
const searchResultPage = require("../pageObjects/SearchResultPage")
const productPage = require("../pageObjects/ProductPage")
const fs = require('fs')
const testData = JSON.parse(fs.readFileSync('test/testData/AddProductTest.json'))

describe('Amazon Shopping Tests', () => {
    itParam('Add Product Test', testData, async ({ searchValue, productName, quantity }) => {
        await browser.url('')
        await navBar.searchBox.setValue(searchValue)
        await navBar.searchButton.click()
        await searchResultPage.ClickOnTargetProduct(productName)
        await productPage.quantityDropdown.selectByVisibleText(quantity)
        await productPage.addToCartButton.click()
        await expect(await navBar.productsCount).toHaveText(quantity.toString())
    }) 
})