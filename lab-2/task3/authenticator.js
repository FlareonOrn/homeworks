class Authenticator {
    constructor() {
        if (Authenticator.instance) {
            throw new Error('Use Authenticator.getInstance() to get an instance of this class.');
        }
        Authenticator.instance = this;
        this.authenticatedUsers = [];
    }

    static getInstance() {
        if (!Authenticator.instance) {
            Authenticator.instance = new Authenticator();
        }
        return Authenticator.instance;
    }

    authenticate(user) {
        this.authenticatedUsers.push(user);
    }

    getAuthenticatedUsers() {
        return this.authenticatedUsers;
    }
}

module.exports = Authenticator;
