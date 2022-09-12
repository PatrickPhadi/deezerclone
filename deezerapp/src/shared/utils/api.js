export const endpoint = 'http://localhost:4040/api';

export const api = async (url, options) => {
    return await new Promise((resolve, reject) => {
        fetch(`${endpoint}${url}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            ...options,
        }).then(response => response.json()).then(data => resolve(data)).catch(error => reject(error));
    });
};