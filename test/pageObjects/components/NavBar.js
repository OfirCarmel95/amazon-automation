class Navbar {
    get searchBox() {
        return $('#twotabsearchtextbox')
    }

    get searchButton(){
        return $('#nav-search-submit-button')
    }

    get productsCount(){
        return $("#nav-cart-count")
    }

    get cartButton(){
        return $("#nav-cart")
    }
}

module.exports = new Navbar()