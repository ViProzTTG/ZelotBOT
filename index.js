const Discord = require("discord.js")
const client = new Discord.Client();
var prefix = "T!";

client.login("NjA3NjQ4MjcxMDQ0OTY4NDc4.XUk2ug.czXIFw1SsnTUeDa0x8dBQGYCTh0");

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "help"){
        message.channel.send("Voici la liste des commande :\nT!ban + mention : ban la personne mentionner\nT!kick + mention : kick la personne mentionner\nT!usinfo + mention : voir les information (ID, date de création du compte...)de la personne mentionner\nT!servinfo : voir les informations du serveur(ID,Date de création,propiétaire...).\nDerien c'est cadeaux "+ message.author)
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("T!kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " A bien été kick... Je me demande bien pourquoi ! :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});
client.on("message", (message) => {
    if (message.content.startsWith("T!ban")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // ban
        member.ban().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " A bien été bannis... Je me demande bien pourquoi ! https://gfycat.com/playfulfittingcaribou :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});
client.on("message", (message) => {
    if (message.content.startsWith("T!usinfo")) {
	message.channel.send(`pseudo: ${message.author.username}\nID: ${message.author.id}\nDate de création du compte: ${message.author.createdAt}\nTAG: ${message.author.tag}\nStatus: ${message.author.presence}\nURL de l'avatar: ${message.author.avatarURL}`);
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("T!servinfo")) {
	message.channel.send(`Nom du serveur: ${message.guild.name}\nTotal de membre: ${message.guild.memberCount}\nURL de l'avatar: ${message.guild.iconURL}\nID du server: ${message.guild.id}\nRégion du server: ${message.guild.region}\nLe server est il vérifier??: ${message.guild.verified}\nDate de création du server: ${message.guild.createdAt}\nCréateur du server: ${message.guild.client}\nNom du salon actuel: ${message.guild.systemChannel}\nID du salon actuel: ${message.guild.systemChannelID}`);
    }
});
