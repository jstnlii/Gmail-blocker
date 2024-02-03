// only deletes emails found in inbox with label

function DeleteEmailByLabel(e) {
  var bannedLabel = 'BLOCKEDSENDER';
  var deleteLabel = GmailApp.getUserLabelByName(bannedLabel);

  if (deleteLabel != null) {
    var threads = deleteLabel.getThreads();

    if (threads != null) {
      for (var i = 0; i < threads.length; i++) {
        var messages = threads[i].getMessages();

        if (messages != null) {
          for (var j = 0; j < messages.length; j++) {
            Gmail.Users.Messages.remove('me', messages[j].getId());
          }
        }
      }
    }
  } else {
    deleteLabel = GmailApp.createLabel(bannedLabel);
  }
}