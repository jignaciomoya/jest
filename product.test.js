const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

describe('addProduct', () => {
    beforeEach(() => {
        products = [];
        id = 0;
    });
    it('should return false if either name or price are undefined', () => {
        expect(addProduct('chair')).toBe(false);
        expect(addProduct(25)).toBe(false);
    })
    it('should return false if name is already a product', () => {
        addProduct('chair', 10);
        expect(addProduct('chair', 10)).toBe(false);
    })
})

beforeEach(() => {
    resetProducts();
});

describe('getProduct', () => {
    it('should show a product', () => {
        expect(getProduct(1)).toEqual([{ id: 1 }]);
    });
    it('the product already exists', () => {
        expect(getProduct(1)).toEqual([{ id: 1 }]);
    });
});

describe('updateProduct', () => {
    it('should show a product', () => {
        expect(updateProduct(1)).toEqual([{ id: 1, nombre: 'puerta', precio: 100 }]);
    });
   
    it('the product does not exist', () => {
        expect(updateProduct(1)).toEqual(undefined);
    });
});

describe('removeProduct', () => {

    it('should remove a product', () => {
        expect(removeProduct(1)).toEqual([{ id: 1, nombre: 'puerta', precio: 100 }]);
    });
   
    it('the product does not exist', () => {
        expect(removeProduct(1)).toEqual(undefined);
    });
});
afterEach(() => {
    resetProducts();
});