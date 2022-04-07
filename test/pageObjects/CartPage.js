class CartPage {
    get totalAmount(){
        return $("#sc-subtotal-amount-activecart")
    }

    get prices(){
        return $$(".sc-product-price")
    }

    get quantities(){
        return $$(".a-dropdown-prompt")
    }

    get products(){
        return $$(".sc-list-item")
    }
}

module.exports = new CartPage()