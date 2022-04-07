class SearchResultPage {
    async ClickOnTargetProduct(productName){
        let products = await $$(".s-card-container")
        await products.map(async product => {
            let currProductName = await product.$("h2").$("a")
            if(await currProductName.getText() === productName)
                await currProductName.click()                
        })
    }
}

module.exports = new SearchResultPage()