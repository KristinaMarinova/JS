import * as data from '../repository/data.js';
import * as notifications from '../helpers/notifications.js';

export async function registerGet() {
    this.partials = {
        header: (await this.load('../../templates/common/header.hbs')),
        footer: (await this.load('../../templates/common/footer.hbs'))
    };

    this.partial('../../templates/user/register.hbs', this.app.userData);
}

export async function registerPost() {
    if (this.params.username.length === 0 || !(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/gim).test(this.params.username)) {
        notifications.showError('username is required and should be valid!');
        return;
    }

    if (this.params.password.length < 3) {
        notifications.showError('Password should be at least 3 symbols!');
        return;
    }

    if (this.params.password !== this.params.rePassword) {
        notifications.showError('Passwords don\'t match!');
        return;
    }

    const user = {
        username: this.params.username,
        password: this.params.password
    };

    try {
        notifications.showLoader();
        const registeredUser = await data.register(user);
        if (registeredUser.code) {
            throw registeredUser;
        }
        notifications.hideLoader();
        notifications.showInfo('User registration successful.');
        this.redirect('#/login');
    } catch (error) {
        notifications.hideLoader();
        notifications.showError(error.message);
    }
}

export async function loginGet() {
    this.partials = {
        header: (await this.load('../../templates/common/header.hbs')),
        footer: (await this.load('../../templates/common/footer.hbs'))
    };

    this.partial('../../templates/user/login.hbs', this.app.userData);
}

export async function loginPost() {
    if (this.params.username.length === 0 ||
        !(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/gim).test(this.params.username) ||
        this.params.password.length < 3) {
        notifications.showError('Invalid credentials. Please retry your request with correct credentials.');
        return;
    }

   const user = {
        login: this.params.username,
        password: this.params.password
    };

    try {
        notifications.showLoader();
        const loggedUser = await data.login(user);

        if (loggedUser.code) {
            throw loggedUser;
        }

        this.app.userData.username = loggedUser.username;
        this.app.userData.userId = loggedUser.objectId;

        localStorage.setItem('userToken', loggedUser['user-token']);
        localStorage.setItem('username', loggedUser.username);
        localStorage.setItem('userId', loggedUser.objectId);

        notifications.hideLoader();
        notifications.showInfo('Login successful.');
        this.redirect('#/home');
    } catch (error) {
        notifications.hideLoader();
        notifications.showError(error.message);
    }
}

export async function logout() {
    const token = localStorage.getItem('userToken');
    if (!token) {
        notifications.showError('User is not logged in');
        this.redirect('#/home');
        return;
    }

    try {
        notifications.showLoader();
        const logoutUser = await data.logout(token);

        if (logoutUser.code) {
            throw loggedUser;
        }

        this.app.userData.username = '';
        this.app.userData.userId = '';

        localStorage.removeItem('userToken');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');

        notifications.hideLoader();
        notifications.showInfo('Logout successful.');
        this.redirect('#/home');
    } catch (error) {
        notifications.hideLoader();
        notifications.showError(error.message);
        this.redirect('#/home');
    }
}

export async function profile() {
    const token = localStorage.getItem('userToken');
    if (!token) {
        notifications.showError('User is not logged in');
        this.redirect('#/home');
        return;
    }

    this.partials = {
        header: (await this.load('../../templates/common/header.hbs')),
        footer: (await this.load('../../templates/common/footer.hbs'))
    };

    let treks = [];

    try {
        notifications.showLoader();
        treks = (await data.getMyTreks(token, this.app.userData.userId));
        if (treks.code) {
            throw treks;
        }
        notifications.hideLoader();
    } catch (error) {
        notifications.hideLoader();
        notifications.showError(error.message);
    }

    const renderData = {
        treks: treks.map(t => t.name),
        count: treks.length
    };

    Object.assign(renderData, this.app.userData);

    this.partial('../../templates/user/profile.hbs', renderData);
}