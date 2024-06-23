class ImageLoadStrategy {
    loadImage(source) {
        throw new Error('This method should be overridden');
    }
}

class FileSystemLoadStrategy extends ImageLoadStrategy {
    loadImage(source) {
        const fs = require('fs');
        if (fs.existsSync(source)) {
            console.log('Image loaded from file system');
            return fs.readFileSync(source, 'base64');
        } else {
            throw new Error(File ${source} not found);
        }
    }
}

class NetworkLoadStrategy extends ImageLoadStrategy {
    async loadImage(source) {
        const fetch = require('node-fetch');
        const response = await fetch(source);
        if (!response.ok) {
            throw new Error(Network error: ${response.statusText});
        }
        const buffer = await response.buffer();
        console.log('Image loaded from network');
        return buffer.toString('base64');
    }
}

module.exports = { FileSystemLoadStrategy, NetworkLoadStrategy };