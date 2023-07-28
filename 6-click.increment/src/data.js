const views = (new Array(1000))
    .fill(6)
    .map(a => {
        return {
            mKey: 'num',
            component: 'Increment',
            parentPath: 'body'
        }
    });

const data = {
    models: [{
        key: 'num',
        value: 1
    }],
    views
}

module.exports = data;