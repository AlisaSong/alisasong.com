export const ajax = (method, url, body, callback) => {
    const xhr = new XMLHttpRequest();

    let payload = undefined;

    xhr.open(method, url);

    if (method === 'post' || method === 'put') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        payload = '';
        const properties = Object.keys(body);
        for (let i = 0; i < properties.length; i++) {
            if (body[properties[i]]) {
                payload += properties[i] + '=' + encodeURIComponent(body[properties[i]]) + '&';
            }
        }
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback();
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            callback(xhr.statusText);
        }
    }

    xhr.send(payload);
}
