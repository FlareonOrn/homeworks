const { ProneFactory, KiaomiFactory, BalaxyFactory } = require('./deviceFactories');

const proneFactory = new ProneFactory();
const kiaomiFactory = new KiaomiFactory();
const balaxyFactory = new BalaxyFactory();

const proneLaptop = proneFactory.createDevice('Laptop', 'ProBook', { cpu: 'i7', ram: '16GB', storage: '1TB' });
const kiaomiSmartphone = kiaomiFactory.createDevice('Smartphone', 'Redmi', { cpu: 'Snapdragon 888', ram: '8GB', storage: '128GB' });
const balaxyEBook = balaxyFactory.createDevice('EBook', 'GalaxyReader', { screen: '7 inch', battery: '4000mAh' });

console.log('Prone Laptop:', {
    brand: proneLaptop.getBrand(),
    model: proneLaptop.getModel(),
    specifications: proneLaptop.getSpecifications(),
});

console.log('Kiaomi Smartphone:', {
    brand: kiaomiSmartphone.getBrand(),
    model: kiaomiSmartphone.getModel(),
    specifications: kiaomiSmartphone.getSpecifications(),
});

console.log('Balaxy EBook:', {
    brand: balaxyEBook.getBrand(),
    model: balaxyEBook.getModel(),
    specifications: balaxyEBook.getSpecifications(),
});
