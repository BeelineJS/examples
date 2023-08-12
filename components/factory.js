// auto generated list of available components

const components = {
'A': require('./A/A.js'),
'Alert': require('./Alert/Alert.js'),
'Button': require('./Button/Button.js'),
'ClassNameSubscriber': require('./ClassNameSubscriber/ClassNameSubscriber.js'),
'Hx': require('./Hx/Hx.js'),
'Increment': require('./Increment/Increment.js'),
'Paragraph': require('./Paragraph/Paragraph.js'),
'Pointer': require('./Pointer/Pointer.js'),
'Resize': require('./Resize/Resize.js'),
'Select': require('./Select/Select.js'),
'TextInput': require('./TextInput/TextInput.js')
};

function get(key) {
   if (components[key] == null) {
      console.log('Component ' +key + ' not found')
      return new components['Component']()
   }

   return {
      ...require('./component'),
      ...components[key]
   }
}

module.exports =  get;
