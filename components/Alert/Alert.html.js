// auto generated based on components\Alert\Alert.html

module.exports =  create;

function create(value) {

   return `<div>
    <div class="bg"></div>
    <div class="alert-box">
        <div class="alert-header">
            <h1>${value.title}</h1>
        </div>
        <div class="alert-body">
            <p>${value.content}</p>
        </div>
        <button data-key="ok-button">OK</button>
    </div>

</div>`;
}