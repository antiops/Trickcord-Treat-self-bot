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
      `${date.getMilliseconds().toString().padStart(2, '0')}`
}

client.on('ready', () => {
  console.log(`[${getDateString()}][Info] Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  // ID of Trick'cord Treat#1944
  if (msg.author.id === '755580145078632508') {
    if (msg.guild.id === process.env.SERVER) {
      const botMessage = msg.embeds[0].description
      const [trick, treat] = ['h!trick','h!treat']

      console.log(`[${getDateString()}][Info] New message in server: ${msg.guild.name} (${botMessage})`)
      if (botMessage.includes(treat)) {
        msg.channel.send(treat)
        console.log(`[${getDateString()}][Info] Sent ${treat} in channel: ${msg.channel.name}`)
      }
      else if (botMessage.includes(trick)) {
        msg.channel.send(trick)
        console.log(`[${getDateString()}][Info] Sent ${trick} in channel: #${msg.channel.name}`)
      }
    }
  }
})

client.login(process.env.TOKEN)
