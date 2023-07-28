module.exports = {
    create
}

function create(onLoad, onError) {
    return {
        request
    }



    function request(params) {
        switch (params.type.toLowerCase()) {
            case 'post':
                post(params)
                return;
        }
        onError('post not implemented', params);

        function post(params) {
            const a = require('./data/a.json');
            const b = require('./data/b.json');
            const c = require('./data/c.json');
            const home = require('./data/default.json');

            let data;
            switch (params.uri) {
                case 'page-default':
                    data = home;
                    break;
                case 'page-a':
                    data = a;
                    break;
                case 'page-b':
                    data = b;
                    break;
                case 'page-c':
                    data = c;
                    break;
                default:
                    onError('invalid page name');
                    break;
            }

            onLoad({
                models: [data]
            });
        }
    }
}