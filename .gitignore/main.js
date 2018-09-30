const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("~");

bot.on('ready', () => {
    bot.user.setPresence({game: {name: 'Bot pour la classe 2SN', type: 0}})
    console.log("Le bot est prêt.");
});

bot.login('NDk1NTYxNjkxMjE2NDc4MjI5.DpD6SQ._MBkONSVg8c9_rZxvL5-SzLC9BY');

bot.on("guildMemberAdd", member =>{

    member.guild.channels.find("name", "général").send(`${member} a rejoint le discord !`);

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
        .addField("Commandes admins :", "   ~clear [lignes] : Supprime les messages dans un canal.");
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

    }

})

bot.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {

      // Check the following permissions before deleting messages:
      //    1. Check if the user has enough permissions
      //    2. Check if I have the permission to execute the command

      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        return;
      }

      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
      }
    }
  });
