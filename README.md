# Discord Game Status
## Introduction

The main purpose of this project is to create a game selection webhook static page that automatically sends an embedded message to a Discord server with the selected game of choice. In addition, the content of the embedded data will be pushed to a Google Sheets document. Utilizing Google Sheets, the static page will also pull the selected current game of choice. Think of it as an online game status.

## Tasks & Milestones

### Completed

- [x] Implementation of Discord webhook
- [x] Basic search and filter system
- [x] Use JSON to send an embedded message to a specified server webhook
- [x] Push JSON data to Google Sheets via form method
- [x] Automatically flush rows of data daily on a specified time
- [x] Pull the latest data from Google Sheets to display on load
- [x] Set a timer and delayed event to prevent spamming

### In Progress

- [ ] Log hours of play time and push to a separate Google Sheets document
- [ ] Calculate and pull total hours of play time
