require('dotenv').load()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`[Info] Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  // ID of Trick'cord Treat#1944
  if (msg.author.id === '755580145078632508') {
    const botMessage = msg.embeds[0].description
    const [trick, treat] = ['h!trick','h!treat']

    console.log(`[Received] ${botMessage}`)
    if (botMessage.includes(treat)) {
      msg.channel.send(treat)
      console.log(`[Sent] ${treat}`)
    }
    else if (botMessage.includes(trick)) {
      msg.channel.send(trick)
      console.log(`[Sent] ${trick}`)
    }
  }
})

client.login(process.env.TOKEN)
