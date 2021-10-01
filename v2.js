  const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://sbot-top.glitch.me/`);
}, 280000); 
const pretty = require("pretty-ms");

const Discord = require("discord.js");
const moment = require("moment");
const client = new Discord.Client();
const fs = require("fs");
client.login("NjE2NTE5ODMyMzQyMzY0MTcx.XZQdXQ.6DZ06f4I8AHkeSMW0sXQgNA9tbY");
const ms = require("ms");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
const prefix = "%";
const SQLite = require("sqlite"); // SQLite Package to read & write to sql files and databases
const path = require("path"); // Path Package to get paths easily
var bot = new Discord.Client();

bot.login("NTkzMDAwODc5ODc2MDc5NjE2.XbxPZQ.mKNQnRbZjhhMWI7yuGXH2-GltYQ");

const sql = require("sqlite");
sql.open("./database/userData.sqlite");

// V O I C E - S Y S T E M //
bot.on('voiceStateUpdate', (oldMember, newMember) => {
  setInterval(()=> {
sql.get(`SELECT * FROM scores WHERE userId ="${newMember.id}" AND guildId = "${newMember.guild.id}"`).then(row => {
 if(!row) {
  sql.run("CREATE TABLE IF NOT EXISTS scores (vcpoints INTEGER, vclevel INTEGER)").then(() => {
  sql.run("INSERT INTO scores (vcpoints, vclevel) VALUES (?, ?)", [1, 1])
})
 } else {
 
 let curLevel = row.vclevel * (row.vclevel * 200) / 2.5;
 if (row.vcpoints >= curLevel) {
   sql.run(`UPDATE scores SET vclevel = ${row.vclevel + 1} WHERE userId = ${newMember.id} AND guildId = "${newMember.guild.id}"`);
 } else {
  if(newMember.voiceChannel !== undefined) {
    if(!newMember.selfDeaf || !newMember.selfMute) {
sql.run(`UPDATE scores SET vcpoints = ${row.vcpoints + 1} WHERE userId = ${newMember.id} AND guildId = "${newMember.guild.id}"`);
   console.log(`${newMember} `+ `${row.vcpoints +1}`)
    }
  }
}
}
}).catch((err) => {
  console.log(err)
  sql.run("CREATE TABLE IF NOT EXISTS scores (vcpoints INTEGER, vclevel INTEGER)").then(() => {
  sql.run("INSERT INTO scores (vcpoints, vclevel) VALUES (?, ?)", [1, 1]);
  })
  })
  }, 60 * 400)
});
 // خليها هنا,, روح سطر 95 وحتفهم
  /////////////////////////////////////////////////////
  // T E X T - S Y S T E M //
  bot.on('message' , message => {
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}" AND guildId ="${message.guild.id}"`).then(rowguild => {
  if(!row || !rowguild) {
 sql.run(`INSERT INTO scores (
   userId, winNu ,
   loseNu,gamesNu,
   pointsFkk,points3oasm,
   pointslogo,pointsimoje,
   pointssr3h,pointsa3lam,
   xp , credit,
   level , like,
   ane , background,
   vcpoints, vclevel,
   guildId, xpguild
   ) VALUES (? ,? ,? ,? ,? ,? ,? ,? ,? ,?,?,?,?,?,?,?,?, ?, ? , ?)`, [message.author.id,0,0,0,0,0,0,0,0,0,0,0,1,0,'$عني','default', 1, 0, message.guild.id, 0]);
    } else {
    if(row) {
    let xpadd = 1;
    let newlevel = row.level * (row.level * 200) / 2.5;
    if(message.content.length > 1 && !message.content.startsWith(prefix)){
    sql.run(`UPDATE scores SET xp = ${row.xp + xpadd} WHERE userId = ${message.author.id}`);
    sql.run(`UPDATE scores SET xpguild = ${rowguild.xpguild + xpadd} WHERE userId = ${message.author.id} AND guildId = ${message.guild.id}`); // نقاط كتابة
    }
 
   
    }
  }
}).catch((e) => {
	console.log(e);
	sql.run(`CREATE TABLE IF NOT EXISTS scores 
	(userId TEXT,
	winNu INTEGER,
	loseNu INTEGER,
	gamesNu INTEGER,
	pointsFkk INTEGER,
	points3oasm INTEGER,
	pointslogo INTEGER,
	pointsimoje INTEGER ,
	pointssr3h INTEGER,
	pointsa3lam INTEGER,
	xp INTEGER,
	credit INTEGER,
	level INTEGER,
	like INTEGER,
	ane TEXT,
	background TEXT,
	vcpoints INTEGER,
	vclevel INTEGER,
  guildId TEXT, 
  xpguild INTEGER
	)`).then(() => {
	sql.run(`INSERT INTO scores (
	userId, winNu ,
	loseNu,gamesNu,
	pointsFkk,points3oasm,
	pointslogo,pointsimoje,
	pointssr3h,pointsa3lam,
	xp , credit,
	level , like,
	ane , background,
	vcpoints, vclevel, guildId, xpguild
	) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [message.author.id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,'$set-info' ,'default', 1, 0, message.guild.id, 0]);
	});
	});
}).catch((e) => {
	console.log(e);
	sql.run(`CREATE TABLE IF NOT EXISTS scores 
	(userId TEXT,
	winNu INTEGER,
	loseNu INTEGER,
	gamesNu INTEGER,
	pointsFkk INTEGER,
	points3oasm INTEGER,
	pointslogo INTEGER,
	pointsimoje INTEGER ,
	pointssr3h INTEGER,
	pointsa3lam INTEGER,
	xp INTEGER,
	credit INTEGER,
	level INTEGER,
	like INTEGER,
	ane TEXT,
	background TEXT,
	vcpoints INTEGER,
	vclevel INTEGER,
  guildId TEXT,
  xpguild INTEGER
	)`).then(() => {
	sql.run(`INSERT INTO scores (
	userId, winNu ,
	loseNu,gamesNu,
	pointsFkk,points3oasm,
	pointslogo,pointsimoje,
	pointssr3h,pointsa3lam,
	xp , credit,
	level , like,
	ane , background,
	vcpoints, vclevel, guildId, xpguild
	) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [message.author.id, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,'$set-info' ,'default', 1, 0, message.guild.id, 0]);
	});
	});
//////////////////////////// C O M M A N D S /////////////////////////////////////////////////////////////
    if(message.channel.type == "dm") return;
  if(message.content.startsWith(prefix+"voice") || message.content.startsWith(prefix + "فويس") ) {
    const getvalueof = message.mentions.users.first() || message.author
    sql.get(`SELECT * FROM scores WHERE userId ="${getvalueof.id}" AND guildId = "${message.guild.id}"`).then(row => {
      if(getvalueof.bot) return message.channel.send(`**:robot:  |  ${message.author.username},** bots do not have any DataBase **Alright?** :wink:`);
      if (!row) return message.channel.send(`:high_brightness: **Seems that ${getvalueof} isn't ranked yet.** :wink:`);
      let tolevelup = (row.vclevel+0.8) * 40
      sql.get(`SELECT 1 + (SELECT count( * ) FROM scores a WHERE a.vcpoints > b.vcpoints AND guildId = ${message.guild.id} ) AS rank FROM
      scores b WHERE guildId = ${message.guild.id} AND userId = ${getvalueof.id} ORDER BY rank LIMIT 1`).then(voice => {
      const embed = new Discord.RichEmbed()
      .setAuthor(`${getvalueof.username}`,`${getvalueof.avatarURL}`)
      .addField("Voice Rank", `#${voice.rank}`, true)
      .addField("Voice Lvl", `${row.vclevel}`, true)
      .addField("Voice Exp", ` ${row.vcpoints} / ${Math.floor(tolevelup)} (tot. ${row.vcpoints})`, true)
      .setColor("BLUE")
      message.channel.send(embed);
      });
    });
 }
  if(message.content.startsWith(prefix+"text") || message.content.startsWith(prefix + "تكست") ) {
    const getvalueof = message.mentions.users.first() || message.author
    sql.get(`SELECT * FROM scores WHERE userId ="${getvalueof.id}" AND guildId ="${message.guild.id}"`).then(rowguild => {
      if(getvalueof.bot) return message.channel.send(`**:robot:  |  ${message.author.username},** bots do not have any data **Alright?** :wink:`);
      if (!rowguild) return message.channel.send(`:high_brightness: **Seems that ${getvalueof} isn't ranked yet.** :wink:`);
      let tolevelup = rowguild.level * (rowguild.level * 200) / 2.5;
      sql.get(`SELECT 1 + (SELECT count( * ) FROM scores a WHERE a.xpguild > b.xpguild AND guildId = ${message.guild.id} ) AS rank FROM
      scores b WHERE guildId = ${message.guild.id} AND userId = ${getvalueof.id} ORDER BY rank LIMIT 1`).then(text => {
      const embed = new Discord.RichEmbed()
      .setAuthor(`${getvalueof.username}`,`${getvalueof.avatarURL}`)
      .addField("Text Rank", `#${text.rank}`, true)
      .addField("Text Lvl", `${rowguild.level}`, true)
      .addField("Text Exp", ` ${rowguild.xp} / ${Math.floor(tolevelup)} (Guild XP. ${rowguild.xpguild})`, true)
      .setColor("ORANGE")
      message.channel.send(embed);
      });
    });
  }
  if(message.content.startsWith(prefix+"top text")) {
    let args = message.content.split(" ").slice(2).join("")
      if(!args || !args > 0) args = 1
      if(isNaN(args)) {
   return message.channel.send(`Do \`\`${prefix}top [number]\`\``)
      }
      let num;
      if(args > 0) {
  num = Math.floor(args)*10 - 10
      } else {
   num = Math.floor(args+1)
      }
    sql.all(`SELECT * FROM scores WHERE guildId = ${message.guild.id} ORDER BY xpguild DESC LIMIT 10 OFFSET ${num};`).then(rows => {
   let leaders = '';
   let counter = num;
   if(rows) {
   rows.forEach(function (rowguild) {
     let user = `<@${rowguild.userId}>` || ":x: خرج من السيرفر"
     if(!bot.users.get(rowguild.userId)) user = ":x: خرج من السيرفر"
     counter = counter + 1
     leaders += `#${counter} | ${user} Xp: \`\`${rowguild.xpguild}\`\``+ `\n\n`
      })
    }
    if(!leaders) return message.channel.send(`**Sorry Sempai!, page doesn't exist!**`);
    sql.get(`SELECT 1 + (SELECT count( * ) FROM scores a WHERE a.xpguild > b.xpguild AND guildId = ${message.guild.id} ) AS rank FROM
      scores b WHERE guildId = ${message.guild.id} AND userId = ${message.author.id} ORDER BY rank LIMIT 1`).then(toprow => {
   message.channel.send({
  embed: {
	author: {
		name: '📋 Guild Score Leaderboards',
		icon_url: message.guild.iconURL,
	},
      title: `:speech_balloon: TEXT SCORE [${args}/64]`,
      color: 0x00FF00,
      description: `${leaders} **#${toprow.rank} ${message.author.username} **\n----------------------\n:sparkles: More?: \`\`${[prefix]}top text ${args + 1}\`\` `
  }
     });
     }).catch(err => console.log(err))
   }).catch(err => console.log(err))
    }
 
 
    if(message.content.startsWith(prefix+"top voice")) {
      let args = message.content.split(" ").slice(2).join("")
   if(!args || !args > 0) args = 1
   if(isNaN(args)) {
     return message.channel.send(`Do \`\`${prefix}top [number]\`\``)
   }
   let num;
   if(args > 0) {
    num = Math.floor(args)*10 - 10
   } else {
     num = Math.floor(args+1)
   }
   sql.all(`SELECT * FROM scores WHERE guildId = ${message.guild.id} ORDER BY vcpoints DESC LIMIT 10 OFFSET ${num};`).then(rows => {
     let leaders = '';
     let counter = num;
     if(rows) {
     rows.forEach(function (row) {
  let user = `<@${row.userId}>` || ":x: خرج من السيرفر"
  if(!bot.users.get(row.userId)) user = ":x: خرج من السيرفر"
  counter = counter + 1
  leaders += `**#${counter} | ${user} XP: \`\`${row.vcpoints}\`\`**`+ `\n\n`
   })
      }
      if(!leaders) return message.channel.send(`**Sorry Sempai!, page doesn't exist!**`);
      sql.get(`SELECT 1 + (SELECT count( * ) FROM scores a WHERE a.vcpoints > b.vcpoints AND guildId = ${message.guild.id} ) AS rank FROM
   scores b WHERE guildId = ${message.guild.id} AND userId = ${message.author.id} ORDER BY rank LIMIT 1`).then(toprow => {
     message.channel.send({
    embed: {
 	author: {
		name: '📋 Guild Score Leaderboards',
		icon_url: message.guild.iconURL,
	},
  title: `🎙 Voice leaderboard [Page ${args}/64]`,
   color:  0x00FF00,
    description: `${leaders} **#${toprow.rank} ${message.author.username} **\n----------------------\n:sparkles: More?: \`\`${[prefix]}top voice ${args + 1}\`\` `
    }
  });
  }).catch(err => console.log(err))
     }).catch(err => console.log(err))
      }
 
      if(message.content === prefix+"top") {
   sql.all(`SELECT * FROM scores WHERE guildId = ${message.guild.id} ORDER BY xpguild DESC LIMIT 5`).then(txtrows => {
     let leaders = '';
     let count = 0
     txtrows.forEach(function(rowguild){
  let user = `<@${rowguild.userId}>` || ":x: خرج من السيرفر"
  if(!bot.users.get(rowguild.userId)) user = ":x: خرج من السيرفر"
  leaders +=  `#${++count} | ${user} \`\`XP: ${rowguild.xpguild}\`\` \n`
     })
   sql.all(`SELECT * FROM scores WHERE guildId = ${message.guild.id} ORDER BY vcpoints DESC LIMIT 5`).then(vcrows => {
     count = 0
     let leaders1 = '';
     vcrows.forEach(function(row){
  let user = `<@${row.userId}>` || ":x: خرج من السيرفر"
  if(!bot.users.get(row.userId)) user = ":x: خرج من السيرفر"
  leaders1 +=  `#${++count} | ${user} \`\`XP: ${row.vcpoints}\`\` \n`
     })
      message.channel.send(new Discord.RichEmbed()
    .setAuthor(`📋 Guild Score Leaderboards`, message.guild.iconURL)
    .addField(`TOP 5 TEXT 💬`, `${leaders}\n\n**✨ More? \`\`${prefix}top text\`\` **`,true)
    .addField(`TOP 5 VOICE 🎙`, `${leaders1}\n\n**✨ More? \`\`${prefix}top voice\`\` **`,true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setColor(`#00FF00`)
    .setTimestamp()
    )     


 });
  });
    }



  });

