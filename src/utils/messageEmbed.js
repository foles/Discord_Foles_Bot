const Discord = require('discord.js');

const messageEmbed = ()=>{
    const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Hola soy folesbot')
    .setDescription('Hola Mundo')

    return msgEmbed

}

module.exports = messageEmbed