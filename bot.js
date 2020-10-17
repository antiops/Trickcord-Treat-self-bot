require('dotenv').load()
const Discord = require('discord.js')
const client = new Discord.Client()

const getDateString = () => {
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
  console.log(`[${getDateString()}][Info] Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  // ID of Trick'cord Treat#1944
  if (msg.author.id === '755580145078632508') {
    if (msg.guild.id === process.env.SERVER) {
      const botMessage = msg.embeds[0].description
      const [sleepMin, sleepMax] = [1000, 2000] // Typing sleep delay (Looks more legit)
      const [trick, treat] = ['h!trick', 'h!treat']
      let randomSleep = Math.floor(Math.random() * (sleepMax - sleepMin) + sleepMin)

      console.log(`[${getDateString()}][Info] New message in server: ${msg.guild.name} (${botMessage})`)
      if (botMessage.includes(treat)) {
        msg.channel.startTyping()
        msleep(randomSleep)
        msg.channel.send(treat).then(msg => msg.channel.stopTyping())
        return console.log(`[${getDateString()}][Info] Sent ${treat} in channel: ${msg.channel.name} after ${randomSleep}ms`)
      }
      else if (botMessage.includes(trick)) {
        msg.channel.startTyping()
        msleep(randomSleep)
        msg.channel.send(trick).then(msg => msg.channel.stopTyping())
        return console.log(`[${getDateString()}][Info] Sent ${trick} in channel: #${msg.channel.name} after ${randomSleep}ms`)
      }
    }
  }
})

client.login(process.env.TOKEN)
