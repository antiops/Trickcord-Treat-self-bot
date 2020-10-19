# Trickcord-Treat-auto-bot
Bot that automatically sends the correct trick or treat to Discords Halloween bot, Trick'cord Treat


### Installation
1. Install nodejs https://nodejs.org/en/download/
2. Download this repo [here](https://github.com/antiops/Trickcord-Treat-self-bot/archive/main.zip) and unzip
3. Shift+right click the folder and click 'Open Powershell/Command window here'
4. When it's open run `npm install` to install dependencies
5. Open the `.env` file in a text editor and add your user token (Instructions inside the file)
6. Get the server id of the server you want to bot in and do either of the below options. Option 2 is easier to switch servers fast
    - [Option 1] You can add the server id to the `SERVERID=` value in `.env`
    - [Option 2] Launch the script with the server ID as an argument (ie. `node bot.js SERVERID`)
7. Start the bot with `node bot.js`. (Use the command in option 2 above if you chose to run it that way)
8. [Optional] Send replies after each spawn based on wether you won or lost. This is only tested on a server I run. If you want to try it add `True` to the `REPLY=""` variable in `.env`

#### Config
##### Available options: timeout min/max, replies

Open `bot.js` in a text editor to change these options 

- Timeouts: Edit `sleepMin` & `sleepMax` in the config object. Values are in miliseconds (1000ms = 1s)
- Replies: Edit `afterWin` & `afterLoss` and change them to your liking. Each must be an array (ie. ['reply1', 'reply2', 'reply3'])


### Notes
- This is a self bot
- Bot has no timeout
