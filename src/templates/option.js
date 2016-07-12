const optionTemplates = {
  option: '<div class={{data.classes.option}}>' +
            '<label>{{data.name}}</label>' +
            '<select class={{data.classes.select}} name={{data.name}}>' +
              '{{#data.values}}' +
                '<option {{#disabled}}disabled{{/disabled}} {{#selected}}selected{{/selected}} value={{name}}>{{name}}</option>' +
              '{{/data.values}}' +
            '</select>' +
            '</div>',
};
export default optionTemplates;