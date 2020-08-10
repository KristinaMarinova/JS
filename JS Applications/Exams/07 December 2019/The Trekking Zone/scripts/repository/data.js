const url = `https://api.backendless.com/4A8B7B53-AAA0-CF40-FF43-E0D3D5F2A200/67F1407C-D3E8-4D87-A602-E5D9187838CD/`;

const endpoints = {
    register: 'users/register',
    login: 'users/login',
    logout: 'users/logout',
    user: 'data/Users',
    trek: 'data/Trek'
};

export async function register(user) {
    return (await fetch(url + endpoints.register, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })).json();
}

export async function login(user) {
    return (await fetch(url + endpoints.login, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })).json();
}

export async function logout(token) {
    return await fetch(url + endpoints.logout, {
        method: 'get',
        headers: {
            'user-token': token
        }
    });
}

export async function createTrek(token, trek) {
    return await (await fetch(url + endpoints.trek, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(trek)
    })).json();
}

export async function editTrek(token, trekId, trek) {
    const trekURL = url + endpoints.trek + `/${trekId}`;

    return await (await fetch(trekURL, {
        method: 'put',
        headers: {
            'Content-type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(trek)
    })).json();
}

export async function deleteTrek(token, trekId) {
    const trekURL = url + endpoints.trek + `/${trekId}`;

    return (await fetch(trekURL, {
        method: 'delete',
        headers: {
            'user-token': token
        }
    })).json();
}

export async function likeTrek(token, trekId) {
    const trekURL = url + endpoints.trek + `/${trekId}`;

    const trek = await (await fetch(trekURL, {
        method: 'get',
        headers: {
            'user-token': token
        }
    })).json();

    if (trek.ownerId === localStorage.userId) {
        throw new Error('You can not like your trek!');
    }

    return await (await fetch(trekURL, {
        method: 'put',
        headers: {
            'Content-type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify({
            likes: Number(trek.likes) + 1
        })
    })).json();
}

export async function getAllTreks(token) {

    return (await fetch(url + endpoints.trek, {
        headers: {
            'user-token': token
        }
    })).json();
}

export async function getMyTreks(token, userId) {
    const whereURL = url + endpoints.trek + `?where=ownerId%3D%27${userId}%27`;

    return (await fetch(whereURL, {
        headers: {
            'user-token': token
        }
    })).json();
}

export async function getTrekById(token, trekId) {
    const urlTrek = url + endpoints.trek + `/${trekId}`;

    return await (await fetch(urlTrek, {
        method: 'get',
        headers: {
            'user-token': token
        }
    })).json();
}