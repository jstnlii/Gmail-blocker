// Searches and deletes entire inbox for label, then perm deletes

// Create filter from address > move to trash
// Services > Gmail API > Add
// Triggers > + Add Trigger (bottom right) > Time-driven > your choice > Save

function deleteWithLabel() {

  var bannedLabel = "BLOCKEDSENDER"

  var threads = GmailApp.search("label:" + bannedLabel +  " in:all");

  if (threads != null) {
    for (var i = 0; i < threads.length; i++) {
      var labels = threads[i].getLabels();

      if (hasLabel(labels, bannedLabel)) {
        var messages = threads[i].getMessages();

        if (messages != null) {
          for (var j = 0; j < messages.length; j++) { // sdf
            Gmail.Users.Messages.remove("me", messages[j].getId());
          }
        }
      }
    }
  }
  console.log(threads.length + " emails(s) deleted")
}

function hasLabel(labels, labelName) {
  for (var k = 0; k < labels.length; k++) {
    if (labels[k].getName() === labelName) {
      return true;
    }
  }
  return false;
}