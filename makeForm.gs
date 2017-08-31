function makeForm() {

  var response = UrlFetchApp.fetch('https://raw.githubusercontent.com/EthTrader/ico-review/master/out/criteria.json'); // get feed
  var data = JSON.parse(response.getContentText()); //

  // var name = prompt('What is the name of the ICO?');
  var name = SpreadsheetApp.getActiveSpreadsheet().getName();

  var form = FormApp.create(data.form_title_template.replace('%%NAME%%', name));
  form.setDescription(data.form_description_template.replace('%%NAME%%', name));
  form.setConfirmationMessage('Thanks for reviewing the ' + name + ' ICO!');

  var isVerifiedItem = form.addMultipleChoiceItem().setRequired(true);

  var verifiedReviewerPage = form.addPageBreakItem().setTitle('Reviewer verification');

  form
    .addTextItem()
    .setTitle('Please submit your EthTrader username.')
    .setRequired(true)

  form
    .addTextItem()
    .setTitle('Please submit a verification message.')
    .setHelpText('Choose a random string (eg. from http://www.passwordrandom.com/query?command=password) and paste it here and also as a comment response to the appropriate top level comment in the ICO review request thread (the EthTrader post that published the link to this form).')
    .setRequired(true);

  var pages = [];

  data.categories.forEach(function(category){
    var page = form.addPageBreakItem().setTitle(category.name);
    pages.push(page);
    category.criteria.forEach(function(criteria){
      var description = criteria.description;
      if (criteria.children) description += ' ' + criteria.children.join(' ');
      form
        .addScaleItem()
        .setTitle(criteria.title)
        .setHelpText(description)
        .setBounds(1, 5)
        .setRequired(true);
    });
  });

  isVerifiedItem
    .setTitle('Do you want to be a verified reviewer?')
    .setChoices([
      isVerifiedItem.createChoice('Yes', verifiedReviewerPage),
      isVerifiedItem.createChoice('No', pages[0])
    ]);
}
