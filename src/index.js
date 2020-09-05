const Discord = require('discord.js');
const client = new Discord.Client();
const messageEmbed = require('./utils/messageEmbed');

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('message', msg => {
    console.log(msg.content);

    if (msg.channel.type === 'dm') {
        console.log('dm');
        msg.reply('Hola mundo');
        msg.react('💩');
    }

    if (msg.content.toLowerCase() === 'hola') {
        msg.channel.send(messageEmbed())
        msg.react('💩');

    }



});


client.on('ready', () => {
    console.log(`Conectado... ${client.user.tag}`)
})

client.login(DISCORD_TOKEN)
