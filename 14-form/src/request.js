module.exports = {
    create
}

function create(onLoad, onError) {
    return {
        request
    }



    function request(context) {
        switch (context.type.toLowerCase()) {
            case 'post':
                post(context)
                return;
        }
        onError('post not implemented', context);

        function post(context) {


            let data = [];
            switch (context.uri) {
                case 'submit-form':
                    submitForm(context, onLoad);
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

function submitForm(context, onLoad) {

    onLoad({
        "models": [{
            "key": "formResponse",
            "value": JSON.stringify(context.formData)
        }],
        "layouts": [{
            "name": "blank",
            "parentPath": "#content .response  .content"
        }],
        "views": [{
            "mKey": "formResponse",
            "component": "Paragraph",
            "parentPath": "#content .response  .content div"
        }]
    })
}