// only deletes archived threads with label

function deleteArchivedWithLabel() {
  var threads = GmailApp.search("label:BLOCKEDSENDER in:all");

  if (threads != null) {
    for (var i = 0; i < threads.length; i++) {
      var labels = threads[i].getLabels();

      if (hasLabel(labels, "BLOCKEDSENDER")) {
        var messages = threads[i].getMessages();

        if (messages != null) {
          for (var j = 0; j < messages.length; j++) {
            Gmail.Users.Messages.remove('me', messages[j].getId());
          }
        }
      }
    }
  }
}

function hasLabel(labels, labelName) {
  for (var k = 0; k < labels.length; k++) {
    if (labels[k].getName() === labelName) {
      return true;
    }
  }
  return false;
}
