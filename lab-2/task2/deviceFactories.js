const { DeviceFactory } = require('./interfaces');
const { Laptop, Netbook, EBook, Smartphone } = require('./devices');

class ProneFactory extends DeviceFactory {
    createDevice(type, model, specifications) {
        console.log('Creating Prone device...');
        return this._createDevice(type, model, specifications);
    }

    _createDevice(type, model, specifications) {
        switch (type) {
            case 'Laptop':
                return new Laptop('Prone', model, specifications);
            case 'Netbook':
                return new Netbook('Prone', model, specifications);
            case 'EBook':
                return new EBook('Prone', model, specifications);
            case 'Smartphone':
                return new Smartphone('Prone', model, specifications);
            default:
                throw new Error('Invalid device type');
        }
    }
}

class KiaomiFactory extends DeviceFactory {
    createDevice(type, model, specifications) {
        console.log('Creating Kiaomi device...');
        return this._createDevice(type, model, specifications);
    }

    _createDevice(type, model, specifications) {
        switch (type) {
            case 'Laptop':
                return new Laptop('Kiaomi', model, specifications);
            case 'Netbook':
                return new Netbook('Kiaomi', model, specifications);
            case 'EBook':
                return new EBook('Kiaomi', model, specifications);
            case 'Smartphone':
                return new Smartphone('Kiaomi', model, specifications);
            default:
                throw new Error('Invalid device type');
        }
    }
}

class BalaxyFactory extends DeviceFactory {
    createDevice(type, model, specifications) {
        console.log('Creating Balaxy device...');
        return this._createDevice(type, model, specifications);
    }

    _createDevice(type, model, specifications) {
        switch (type) {
            case 'Laptop':
                return new Laptop('Balaxy', model, specifications);
            case 'Netbook':
                return new Netbook('Balaxy', model, specifications);
            case 'EBook':
                return new EBook('Balaxy', model, specifications);
            case 'Smartphone':
                return new Smartphone('Balaxy', model, specifications);
            default:
                throw new Error('Invalid device type');
        }
    }
}

module.exports = { ProneFactory, KiaomiFactory, BalaxyFactory };
