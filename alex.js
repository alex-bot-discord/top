const vcpoints = new dbq.table("VOICE_POINTS");
const textpoints = new dbq.table("TEXT_POINTS");
client.on('voiceStateUpdate', (oldMember, newMember) => {
  setInterval(()=> {
  vcpoints.fetch(`${newMember.guild.id}_${newMember.id}`).then(i => {
    if (i == null) vcpoints.set(`${newMember.guild.id}_${newMember.id}`, 0);
  });
  if(newMember.voiceChannel !== undefined) {
    if(!newMember.selfDeaf || !newMember.selfMute) {
vcpoints.add(`${newMember.guild.id}_${newMember.id}`, 1)
    }
  }
  }, 60 * 400)
  }).on('message' , message => {
 if (message.channel.type == "dm" || message.author.bot || !message.guild) return;
  textpoints.fetch(`${message.guild.id}_${message.author.id}`).then(i => {
    if (i == null) textpoints.set(`${message.guild.id}_${message.author.id}`, 0);
    });
    if(message.content.length > 1 && !message.content.startsWith(prefix)){
   textpoints.add(`${message.guild.id}_${message.author.id}`, 1)
    }
}).on("message", async msg => {
if(msg.author.bot || msg.channel.type === "dm") return undefined;
let args = msg.content.split(' ');
if(args[0].toLowerCase() == `${prefix}top`) {
  vcpoints.startsWith(`${msg.guild.id}`, {
    sort: '.data'
  }).then(resp => {
    resp.length = 5;
    var i = 0;
    for (i in resp) {
  textpoints.startsWith(`${msg.guild.id}`, {
    sort: '.data'
  }).then(rest => {
    rest.length = 5;
    var i = 0;
    for (i in rest) {
    var count = 0
    var vcleaders = "";
    vcleaders += `**#${++count} |  <@${client.users.get(resp[i].ID.split('_')[1]).id || "خرج من السيرفر"}>** - \`${resp[i].data}Points\`\n`;
    var countt = 0
    var textleaders = "";
    textleaders += `**#${++countt} |  <@${client.users.get(rest[i].ID.split('_')[1]).id || "خرج من السيرفر"}>** - \`${rest[i].data}Points\`\n`;
   msg.channel.send(new Discord.RichEmbed()
    .setAuthor(`📋 Guild Score Leaderboards`, msg.guild.iconURL)
    .addField(`TOP 5 TEXT 💬`, `${textleaders}\n**✨ More? \`\`${prefix}top text\`\` **`,true)
    .addField(`TOP 5 VOICE 🎙`, `${vcleaders}\n**✨ More? \`\`${prefix}top voice\`\` **`,true)
    .setFooter(msg.author.username, msg.author.avatarURL)
    .setColor(`#00FF00`)
    .setTimestamp())
    }
  })
    }
  })
}
if(args[0].toLowerCase() == `${prefix}top text`) {
 
}
if(args[0].toLowerCase() == `${prefix}top voice`) {
 
}
if(args[0].toLowerCase() == `${prefix}text`) {
 
}
if(args[0].toLowerCase() == `${prefix}voice`) {
}
})
