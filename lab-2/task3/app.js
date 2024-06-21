const Authenticator = require('./authenticator');

function main() {
    try {
        // Attempt to create multiple instances
        const authInstance1 = Authenticator.getInstance();
        authInstance1.authenticate('User1');
        console.log('Authenticated Users:', authInstance1.getAuthenticatedUsers());

        const authInstance2 = Authenticator.getInstance();
        authInstance2.authenticate('User2');
        console.log('Authenticated Users:', authInstance2.getAuthenticatedUsers());

        // Ensure that both instances are the same
        console.log('Are both instances the same?', authInstance1 === authInstance2);

        // Attempt to directly create a new instance (should fail)
        const authInstance3 = new Authenticator();
    } catch (error) {
        console.error(error.message);
    }
}

main();
