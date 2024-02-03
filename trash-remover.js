// only deletes threads in trash with label

function DeleteTrashWithLabel() {
    var threads = GmailApp.getTrashThreads();
  
    if (threads != null) {
      for (var i = 0; i < threads.length; i++) {
        var labels = threads[i].getLabels();
  
        // Check if the thread has the specific label "BLOCKEDSENDER"
        if (hasLabel(labels, 'BLOCKEDSENDER')) {
          var messages = threads[i].getMessages();
  
          if (messages != null) {
            for (var j = 0; j < messages.length; j++) {
              // Permanently delete the message
              Gmail.Users.Messages.remove('me', messages[j].getId());
            }
          }
        }
      }
    }
  }
