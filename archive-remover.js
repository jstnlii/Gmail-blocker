// only deletes archived threads with label

function DeleteArchivedEmailsWithLabel() {
    var threads = SearchArchivedEmailsWithLabel('BLOCKEDSENDER');
  
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
  }
  
  function SearchArchivedEmailsWithLabel(labelName) {
    var query = 'in:all -in:inbox label:' + labelName;
  
    return GmailApp.search(query);
  }