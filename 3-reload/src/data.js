function getInitData(index) {

    return {
        models: [{
            key: 'text',
            value: `Text Example ${index}`
        }],
        views: [{
            mKey: 'text',
            component: 'Paragraph',
            parentPath: 'body'
        }]
    }
}

function getUpdateData(index) {

    return {
        models: [{
            key: 'text',
            value: `Text Example ${index}`
        }]
    }
}



module.exports = {
    getInitData,
    getUpdateData
}