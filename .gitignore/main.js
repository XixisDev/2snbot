const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("~");

bot.on('ready', () => {
    bot.user.setPresence({game: {name: 'Bot pour la classe 2SN', type: 0}})
    console.log("Le bot est prêt.");
});

bot.login('NDk1NTYxNjkxMjE2NDc4MjI5.DpD6SQ._MBkONSVg8c9_rZxvL5-SzLC9BY');

bot.on('message', message => {
    if(message.content === "ping"){
        message.reply("pong");
        console.log("Le bot a interprété et répondu au message");
    }

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed().setColor("#01FEDC").addField("Commandes du bot :", "   ~help : Affiche la liste des commandes.");
        message.channel.sendEmbed(help_embed);
        console.log("Aide envoyée !");

    } else if(message.content === prefix + "edpg1"){

        try{
            get('https://imgur.com/a/HeDZMqT').then(res =>{
                const embedimg = new Discord.RichEmbed().setDescription('Tests').setImage(res.body.file).setColor("0x201F1F");
                return message.channel.sendEmbed(embedimg);
            })
        } catch(err){

            message.channel.send("Erreur !");

        }

    }
});
