function makeForm() {

  var response = UrlFetchApp.fetch('https://raw.githubusercontent.com/EthTrader/ico-review/master/out/criteria.json'); // get feed
  var data = JSON.parse(response.getContentText()); //

  // var name = prompt('What is the name of the ICO?');
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("Details");
  if(!sheet) sheet = spreadsheet.getSheetByName("Sheet1");

  if(!sheet) throw new Error("No sheet named Details or Sheet1");
  // var sheet = spreadsheet.getSheets()[0];
  // var name = SpreadsheetApp.getActiveSpreadsheet().getName();
  var name = sheet.getRange("A1").getValue();
  if(!name) throw new Error("Please put the ICO name in A1 of a sheet named Details or Sheet1");

  var url = sheet.getRange("A2").getValue();

  var form = FormApp.create(data.form_title_template.replace('%%NAME%%', name));
  form.setDescription(data.form_description_template.replace('%%NAME%%', name).replace('%%URL%%', url));
  form.setConfirmationMessage('Thanks for reviewing the ' + name + ' ICO!');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, SpreadsheetApp.getActiveSpreadsheet().getId());
  form.setShowLinkToRespondAgain(false);

  // var isVerifiedItem = form.addMultipleChoiceItem().setRequired(true);
  //
  // var verifiedReviewerPage = form.addPageBreakItem().setTitle('Reviewer verification');

  // form
  //   .addTextItem()
  //   .setTitle('Please submit your Reddit/EthTrader username.')
  //   .setRequired(true)

  form
    .addTextItem()
    .setTitle('Please submit a verification code. Also, see further instuctions below.')
    .setHelpText('Choose a random string (eg. from http://www.passwordrandom.com/query?command=password) and paste it here and also as a comment response to the appropriate top level comment in the EthTrader ICO review post.')
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

  // isVerifiedItem
  //   .setTitle('Would you like to be a verified reviewer?')
  //   .setHelpText('Review score aggregation will result in two final scores: one from all reviewers and another from verified reviewers only.')
  //   .setChoices([
  //     isVerifiedItem.createChoice('Yes', verifiedReviewerPage),
  //     isVerifiedItem.createChoice('No', pages[0])
  //   ]);
}
