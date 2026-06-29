function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem('user'));
    } catch {
        localStorage.removeItem('user');
        return null;
    }
}

function getRegisteredUsers() {
    try {
        return JSON.parse(localStorage.getItem('registeredUsers')) || [];
    } catch {
        localStorage.removeItem('registeredUsers');
        return [];
    }
}

function registerUser(username, password, currency = '$') {
    const cleanUsername = username.trim();
    const users = getRegisteredUsers();

    if (!cleanUsername || !password) {
        return { success: false, message: 'Please enter a username and password.' };
    }

    const userExists = users.some(user => user.username.toLowerCase() === cleanUsername.toLowerCase());
    if (userExists) {
        return { success: false, message: 'Username already exists. Please choose another.' };
    }

    users.push({ username: cleanUsername, password, currency });
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    return { success: true, message: 'Registration successful. You can now log in.' };
}

function loginUser(username, password) {
    const cleanUsername = username.trim();
    const users = getRegisteredUsers();
    const user = users.find(item => item.username === cleanUsername && item.password === password);

    if (!user) {
        return { success: false, message: 'Invalid username or password.' };
    }

    localStorage.setItem('user', JSON.stringify({
        username: user.username,
        currency: user.currency || '$'
    }));

    return { success: true, message: 'Login successful.' };
}

function logoutUser() {
    localStorage.removeItem('user');
}
