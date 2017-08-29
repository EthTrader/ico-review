function makeForm() {

  var response = UrlFetchApp.fetch('https://raw.githubusercontent.com/EthTrader/ico-review/master/out/criteria.json'); // get feed
  var data = JSON.parse(response.getContentText()); //

  // var name = prompt('What is the name of the ICO?');
  var name = '!!!NAME!!!';

  var form = FormApp.create(data.form_title_template.replace('%%NAME%%', name));
  form.setDescription(data.form_description_template.replace('%%NAME%%', name));
  form.setCollectEmail(true);

  data.categories.forEach(function(category){
    var section = form.addSectionHeaderItem();
    section.setTitle(category.name);
    category.criteria.forEach(function(criteria){
      var item = form.addScaleItem();
      var description = criteria.description;
      if (criteria.children) description += ' ' + criteria.children.join(' ');
      item.setTitle(criteria.title)
      .setHelpText(criteria.description)
      .setBounds(1, 5);
    });
  });
}
