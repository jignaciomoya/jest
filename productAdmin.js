let products = [{}];
let id = 0;

function resetProducts() {
    let products = [
        {
            nombre: '',
            precio: '',
            id:''
        }
    ];
    id = 0;
}

function addProduct(name, price) {
    //if (name && price) {
        id++;
        products.push({name, price, id});
    //} else console.log('Introduzca producto y precio');
}

function removeProduct(id){
    products.splice(id-1, 1);
}

function getProducts(){
    return products;
}

function getProduct(id){
    return products[id-1];
}

function updateProduct(id, name, price){
    products[id-1].name = name;
    products[id-1].price = price;
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
};