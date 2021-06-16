const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.on('ready', () => {
    client.user.setActivity("NoobZhere sleep", {type: "WATCHING"})
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.channel.name === "server-chat") {
const embed = new Discord.MessageEmbed();
let channel = client.channels.cache.find(ch => ch.name === "server-chat");
.setDescription(message.content)
.setAuthor(message.author.tag) 
.setTimestamp()
channel.send(embed);
}
});

client.login(config.token);
