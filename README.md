# Gmail - Email Blocker

This is a simple script designed to search and delete emails with a specific label from anywhere in your Gmail inbox. Its main purpose is to manage unwanted emails and to *actually* block addresses since Gmail surprisingly doesn't offer this. Gmail's blocking system only sends the emails to trash and does not stop them.

## Setup Instructions

1. **Create a Filter:**
   - In (https://gmail.com/), set up a filter called `BLOCKEDSENDER` to automatically label emails from the address you want to block. You can change this label name to anything, but that's the default. You can then make the filter automatically send emails from that address to trash, or archive. This way, you do not receive any notifications for these unwanted emails.

2. **Paste script:**
   - Create a new project in Google Apps Script (https://script.google.com/)
   - Copy and paste the provided code into the script editor.

2. **Enable Gmail API:**
   - Go to `Services` > `Gmail API` and click `Add`.

3. **Set up Triggers:**
   - Navigate to `Triggers` and add a new time-driven trigger based on your preferences. Recommended every hour and to immediately notify failiures.

5. **Configure Label:**
   - Set the `bannedLabel` variable to the label name used for filtering unwanted emails. If you didn't change the name of the label in Gmail, you can skip this step.

6. **Save and Run:**
   - Save the script (Ctrl + S) and run the `deleteWithLabel` function manually for the first time.

7. **Verify Execution:**
   - Check the logs to ensure that the script is working as expected.

8. **Automate with Triggers:**
   - Any email from the address will be automatically and periodically deleted without you ever seeing it. Ignorance is bliss.

## Usage

- The script searches for emails with the specified label and permanently deletes them.
- Ensure proper setup and configuration before relying on automated execution.

## Disclaimer

- Handle the script with caution, since it is dealing with permanent deletions.
- Use this script at your own risk. Double-check the configuration and ensure it meets your requirements before deploying.

## Contribution

Feel free to contribute to the improvement of this script by submitting pull requests or reporting issues.
