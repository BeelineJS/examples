const arr = [1, 2, 3, 4, 5, 6];
const data = {
    models: arr.map(i => {
        return {
            key: `H${i}_V`,
            value: `H${i}`
        }
    }),
    viewModels: arr.map(i => {
        return {
            key: `H${i}_VM`,
            value: `${i}`
        }
    }),
    views: arr.map(i => {
        return {
            mKey: `H${i}_V`,
            vmKey: `H${i}_VM`,
            component: `Hx`,
            parentPath: 'body'
        }
    })
}

module.exports = data;