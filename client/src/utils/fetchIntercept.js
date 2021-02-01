import axios from 'axios';

const configuration = {
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    }
};

const instance = axios.create(configuration);

const requestHandler = request => request;

const errorHandler = error => {
    if (!error.status) {
        throw new Error('network error');
    }
    if (error) {
        return error;
    }
    return Promise.reject({ ...error });
};

const successHandler = response => {
    return response;
};

instance.interceptors.request.use(request => requestHandler(request));
instance.interceptors.response.use(response => successHandler(response), error => errorHandler(error));

const apiLogger = (method, url, options, body, response) => {
    // eslint-disable-next-line no-console
    console.log(
        `${method} URL : ${url}\nHEADERS: `,
        options && options.headers,
        `\nPARAMS: `,
        body,
        `\nRESPONSE: `,
        response.data
    );
};

const modifyOptions = options => ({
    ...options,
    validateStatus: () => true
});

const POST = (_URL, data = null, options = {}) => {
    const _options = modifyOptions(options);

    return instance.post(_URL, data, _options).then(response => {
        apiLogger('POST', _URL, options, data, response);
        return response;
    });
};

const GET = (_URL, options = {}) => {
    const _options = modifyOptions(options);

    return instance.get(_URL, _options).then(response => {
        apiLogger('GET', _URL, options, options && options.params, response);
        return response;
    });
};

const PUT = (_URL, data = null, options = {}) => {
    return instance.put(_URL, data, options).then(response => {
        apiLogger('PUT', _URL, options, data, response);
        return response;
    });
};

export { POST, GET, PUT };
export default instance;
