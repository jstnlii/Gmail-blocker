# Gmail - Email Blocker

This is a simple JS script using Gmail's API designed to search and delete emails with a specific label from anywhere in your Gmail inbox. Its main purpose is to completely stop unwanted emails and to *actually* block addresses since Gmail surprisingly doesn't offer this. Gmail's blocking system only sends the emails to trash and does not stop them 100%.

## Setup Instructions

1. **Create a Filter:**
   - In your [Gmail](https://gmail.com/), set up a filter called `BLOCKEDSENDER` to automatically label emails from the address you want to block. You can change this label name to anything, but that's the default. You can then make the filter automatically send emails from that address to trash, or archive. This way, you do not receive any notifications for these unwanted emails.

2. **Paste script:**
   - Create a new project in [Google Apps Script](https://script.google.com/)
   - Copy and paste the provided code into the script editor.

3. **Configure Label:**
   - Set the `bannedLabel` variable to the name of the label you created in your Gmail. If you didn't change the name of the label in Gmail, you can skip this step.

4. **Enable Gmail API:**
   - On the left side of the screen, `Services` > `Gmail API` and click `Add`.

5. **Set up Triggers:**
   - Navigate to `Triggers` and add a new time-driven trigger based on your preferences.
   - Ensure the `choose which function to run` dropdown is set to `deleteWithLabel`.

6. **Save and Run:**
   - Save the script (Ctrl + S) and run the `deleteWithLabel` function manually for the first time.

7. **Verify Execution:**
   - Check the logs to ensure that the script is working as expected.
   

### ignorance is bliss lol


## Usage

- The script searches for emails with the specified label and permanently deletes them.
- Ensure proper setup and configuration before relying on automated execution.

## Disclaimer

- Edit the script with caution, as it is dealing with permanent deletions.
