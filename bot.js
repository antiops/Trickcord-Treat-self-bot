require('dotenv').config({ path: '.env' })
const Discord = require('discord.js')
const client = new Discord.Client()

const config = {
  targetServer: process.argv[2] || process.env.SERVER,
  sendReplies: process.argv[3] || false,
  sleepMin: 1000, // Min & Max amount of time in ms to wait before sending reply
  sleepMax: 1750
}

const afterWin = ['list of stuff to say after you win', 'git gud <:LETSGOOOOO:738098779634401401> <:LETSGOOOOO:738098779634401401>', '<a:plugwalk:738098805265662012>', '<:lacOkay:738097506923184128>', '<:peepoKek:702836822656548874>', '<:mouseleo:759407095082385439>', '<a:americanplugwalk:738097516540723280>', '<a:poggershype:648711157732999188>', 'omw <a:americanplugwalk:738097516540723280>']
const afterLoss = ['list of stuff to say after you lose', '<a:kittyCrying:725997861363253319>', '<:pepefatWeird:582995514421805091>', '<a:plugwalkL:755535619849060383>', '<:PES_SadRose:647744695279026176>', '<:woeisme:737847155825442819>', '<:WHYYYYYY:724055664925606011>', '<:lacWeird:731630495120752661>', '<:PU_pepefatWTF:586593309406003210>', '<:Pepeg:738098782742249604>']
let run

const timestamp = () => {
  let date = new Date()
  return `${date.getDate().toString().padStart(2, '0')}-` +
    `${(date.getMonth() + 1).toString().padStart(2, '0')}-` +
    `${date.getFullYear()} ` +
    `${date.getHours().toString().padStart(2, '0')}:` +
    `${date.getMinutes().toString().padStart(2, '0')}:` +
    `${date.getSeconds().toString().padStart(2, '0')}.` +
    `${date.getMilliseconds().toString().padStart(3, '0')}`
}

const msleep = (n) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n)
}

client.on('ready', () => {
  console.log(`[${timestamp()}][Info] Logged in as ${client.user.tag}!`)
})

if (config.sendReplies) {
  client.on('messageUpdate', (msgOld, msgNew) => {
  if (run) return
  if (msgNew.author.id === '755580145078632508') {
    msleep(Math.floor(Math.random() * (config.sleepMax - config.sleepMin) + config.sleepMin))
    if (msgNew.embeds[0].description.includes(process.env.ME)) {
      msgNew.channel.send(afterWin[Math.floor(Math.random() * afterWin.length)]).then(msg => console.log(`[${timestamp()}][Info] Youre a winner!`)); run = 1
    } else if (msgNew.embeds[0].description.includes('kindness')) {
      msgNew.channel.send(afterLoss[Math.floor(Math.random() * afterLoss.length)]).then(msg => console.log(`[${timestamp()}][Info] Youre a loser`)); run = 1
    }
  }
})
}


client.on('message', msg => {
  // ID of Trick'cord Treat#1944
  if (msg.author.id === '755580145078632508') {
    if (msg.guild.id === config.targetServer) {
      const botMessage = msg.embeds[0].description
      const [trick, treat] = ['h!trick', 'h!treat']
      let randomSleep = Math.floor(Math.random() * (config.sleepMax - config.sleepMin) + config.sleepMin)
      run = 0
      console.log(`[${timestamp()}][Info] New message in server: ${msg.guild.name} (${botMessage})`)
      if (botMessage.includes(treat)) {
        msg.channel.startTyping()
        msleep(randomSleep)
        msg.channel.send(treat).then(msg => msg.channel.stopTyping())
        return console.log(`[${timestamp()}][Info] Sent ${treat} in channel: ${msg.channel.name} after ${randomSleep}ms`)
      }
      else if (botMessage.includes(trick)) {
        msg.channel.startTyping()
        msleep(randomSleep)
        msg.channel.send(trick).then(msg => msg.channel.stopTyping())
        return console.log(`[${timestamp()}][Info] Sent ${trick} in channel: #${msg.channel.name} after ${randomSleep}ms`)
      }
    }
  }
})

client.login(process.env.TOKEN)
