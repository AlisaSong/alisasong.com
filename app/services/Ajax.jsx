export default class Ajax {
    delete(url, callback) {
        this.xhr('delete', url, callback);
    }

    get(url, callback) {
        this.xhr('get', url, callback);
    }

    post(url, callback) {
        this.xhr('post', url, callback);
    }

    put(url, callback) {
        this.xhr('put', url, callback);
    }

    xhr(method, url, callback) {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseText);
            }
        }

        xhr.send();
    }
}
