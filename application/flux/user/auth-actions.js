'use strict';

let constants   = require('../constants');
let oauthClient = require('./oauth-client');
let userClient  = require('./user-client');

let loginCreatedUser = (password, userData) => {
    // User created, now log in
    oauthClient.login(userData.email, password).then(
        tokenData => this.dispatch(constants.LOGIN_SUCCESSFUL, {tokenData, userData}),
        ()        => this.dispatch(constants.LOGIN_FAILED)
    );
};

let fetchLoggedInUser = tokenData => {
    // Authenticated, but still need user data
    userClient.setToken(tokenData);
    userClient.getCurrentUser().then(
        userData => this.dispatch(constants.LOGIN_SUCCESSFUL, {tokenData, userData}),
        ()       => this.dispatch(constants.LOGIN_FAILED)
    );
};

module.exports = {
    login(username, password)
    {
        this.dispatch(constants.LOGGING_IN);

        oauthClient.login(username, password).then(
            fetchLoggedInUser.bind(this),
            () => this.dispatch(constants.LOGIN_FAILED)
        );
    },

    logout()
    {
        // Assume the logout worked, since it doesn't make a difference to the user
        oauthClient.logout();

        this.dispatch(constants.LOGOUT);
    },

    registerUser(email, password)
    {
        this.dispatch(constants.REGISTERING);

        userClient.createUser({email, password}).then(
            loginCreatedUser.bind(this, password),
            () => this.dispatch(constants.REGISTRATION_FAILED)
        );
    }
};
