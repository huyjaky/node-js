class filter {
    filter(products) {
        const product_temp = products.map((product) => product.toObject());
        var groupProducts = [];
        var temp = [];
        for (let i = 0; i < product_temp.length; i++) {
            temp.push(product_temp[i]);
            if (temp.length === 4) {
                groupProducts.push(temp);
                temp = [];
            }
        }
        if (temp.length > 0) {
            groupProducts.push(temp);
        }
        return groupProducts;
    }
}

module.exports = new filter();
