class Device {
    getBrand() {}
    getModel() {}
    getSpecifications() {}
}

class DeviceFactory {
    createDevice(type, brand) {}
}

module.exports = { Device, DeviceFactory };
