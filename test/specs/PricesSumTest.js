const itParam = require("mocha-param")
const navBar = require('../pageObjects/components/NavBar') 
const searchResultPage = require('../pageObjects/SearchResultPage')
const productPage = require('../pageObjects/ProductPage')
const cartPage = require("../pageObjects/CartPage")
const expectChai = require('chai').expect
const fs = require('fs')
const testData = JSON.parse(fs.readFileSync('test/testData/PricesSumTest.json'))

describe('Amazon Shopping Tests', () => {
    itParam('Prices Sum Test', testData, async ({ searchValue, productName, quantity }) => {
        await browser.url('')
        await navBar.searchBox.setValue(searchValue)
        await navBar.searchButton.click()
        await searchResultPage.ClickOnTargetProduct(productName)
        await productPage.quantityDropdown.selectByVisibleText(quantity)
        await productPage.addToCartButton.click()
        await expect(await navBar.productsCount).toHaveText(quantity.toString())
        await navBar.cartButton.click()
        let pricesSum = 0
        const productsCount = await cartPage.products.length
        for (let i = 0; i < productsCount; i++) {
            let productPrice = await cartPage.prices[i].getText()
            productPrice = await parseFloat(productPrice.replace("$", "").trim())
            let productQuantity = await cartPage.quantities[i].getText()
            productQuantity = await parseInt(productQuantity)      
            pricesSum += await productPrice * productQuantity 
        }
        let totalAmount = await cartPage.totalAmount.getText()
        totalAmount = await parseFloat(totalAmount.replace("$", "").trim())
        await expectChai(totalAmount).to.eql(pricesSum)
    }) 
})