const Discord = require('discord.js');

const messageEmbed = ()=>{
    const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Hola soy folesbot')
    .setDescription('ella no te ama')
    .setImage('https://m.media-amazon.com/images/I/71HrbfHCWlL._SS500_.jpg')

    return msgEmbed

}

module.exports = messageEmbed