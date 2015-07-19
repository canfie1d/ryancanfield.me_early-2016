'use strict';

let constants   = require('../constants');
let oauthClient = require('../client/oauth');
let userClient  = require('../client/user');

let loginCreatedUser = (password, userData) => {
    let flux = this;

    // User created, now log in
    oauthClient.login(userData.email, password)
        .then(tokenData => {
            flux.dispatch(
                constants.LOGIN_SUCCESSFUL,
                {
                    tokenData : tokenData,
                    userData  : userData
                }
            );
        })
        .fail(() => {
            flux.dispatch(constants.LOGIN_FAILED);
        });
};

let fetchLoggedInUser = tokenData => {
    let flux = this;

    // Authenticated, but still need user data
    userClient.setToken(tokenData);
    userClient.getCurrentUser()
        .then(userData => {
            flux.dispatch(
                constants.LOGIN_SUCCESSFUL,
                {
                    tokenData : tokenData,
                    userData  : userData
                }
            );
        })
        .fail(() => {
            flux.dispatch(constants.LOGIN_FAILED);
        });
};

module.exports = {
    login(username, password)
    {
        let flux = this;

        flux.dispatch(constants.LOGGING_IN);

        oauthClient.login(username, password)
            .then(fetchLoggedInUser.bind(flux))
            .fail(() => {
                flux.dispatch(constants.LOGIN_FAILED);
            });
    },

    logout()
    {
        // Assume the logout worked, since it doesn't make a difference to the user
        oauthClient.logout();

        this.dispatch(constants.LOGOUT);
    },

    registerUser(email, password)
    {
        let flux = this;

        this.dispatch(constants.REGISTERING);

        userClient.createUser(
            {
                email    : email,
                password : password
            })
            .then(loginCreatedUser.bind(flux, password))
            .fail(() => {
                flux.dispatch(constants.REGISTRATION_FAILED);
            });
    }
};
