const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("~");
const CLEAR_MESSAGES = '!clearMessages';


bot.on('ready', () => {
    bot.user.setPresence({game: {name: 'Bot pour la classe 2SN', type: 0}})
    console.log("Le bot est prêt.");
});

bot.login('NDk1NTYxNjkxMjE2NDc4MjI5.DpD6SQ._MBkONSVg8c9_rZxvL5-SzLC9BY');

bot.on("guildMemberAdd", member =>{

    member.guild.channels.find("name", "arriver").send(`${member} a rejoint le discord !`);

})

bot.on('message', message => {

     if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#01FEDC")
        .addField("Commandes du bot :", "   ~help : Affiche la liste des commandes.")
        .addField("   ~edtg1 : Affiche l'emploi du temps du groupe 1.") 
        .addField("   ~edtg2 : Affiche l'emploi du temps du groupe 2.")
        .addField("   ~atrium : Envoie le lien d'Atrium.")
        .addField("   ~pronote : Envoie le lien de Pronote.")
        .addField("   ~cpro : Envoie le lien de CPro.")
        .addField("Commandes admins :", "   ~clear : Supprime les messages dans un canal.")
        .setFooter("Bot créée par Xixis_");
        message.channel.sendEmbed(help_embed);

    } else if(message.content === prefix + "edtg1"){

        message.channel.send("Emploi du temps du groupe 1", {files: ["./edtg1.jpg"]});

    } else if(message.content === prefix + "edtg2"){

        message.channel.send("Emploi du temps du groupe 2", {files: ["./edtg2.jpg"]});

    } else if(message.content === prefix + "atrium"){

        var atrium_embed = new Discord.RichEmbed().setColor("#FEA101").addField("Lien vers Atrium : ", "https://www.atrium-paca.fr/");
        message.channel.sendEmbed(atrium_embed);

    } else if(message.content === prefix + "pronote"){

        var pronote_embed = new Discord.RichEmbed().setColor("#40BF48").addField("Lien vers Pronote : ", "https://0060002v.index-education.net/pronote/");
        message.channel.sendEmbed(pronote_embed);

    } else if(message.content === prefix + "cpro"){

        var cpro_embed = new Discord.RichEmbed().setColor("#FEFE3D").addField("Lien vers CPro : ", "https://www.cpro-sti.fr/0060002V/");
        message.channel.sendEmbed(cpro_embed);

    } else if (messsage.content == prefix + "clear") {
         if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
        if (message.channel.type == 'text') {
          message.channel.fetchMessages()
            .then(messages => {
              message.channel.bulkDelete(messages);
              messagesDeleted = messages.array().length;
              message.channel.send("Tous les messages ont été supprimés par " + message.author + ".");
            })
            .catch(err => {
            });
        }
      }

})
