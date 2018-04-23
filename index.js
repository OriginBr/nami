console.log('Lerry...')
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json'); // a pasta de Configurações do bot
const fs = require('fs');
const YTDL = require('ytdl-core');
let xp = require("./xp.json");
// Dono: Shiro <3 // Ajudante: Az4zell

client.on("ready",  () => {
 
  client.user.setPresence({game: { name: `Eae rapaziada || ajudando ${client.guilds.size} Guilds` , type: 1,  url: "https://www.twitch.tv/az4zell"}})
    setInterval(() => {
  client.user.setPresence({game: { name: `Use `+ config.prefix +`ajuda || Jogando com ${client.users.size} Pessoas ♥` , type: 1,  url: "https://www.twitch.tv/az4zell"}})
    },2 * 60 * 1000)
    });

    client.on("ready", () => {
      client.user.setUsername("Akashin")
    });

client.on('message', msg => {
  if (msg.content === '<@422209859749150720>') {
    msg.reply(`Oi sou o ${client.user.username}. Minha prefix:**` + config.prefix + "**");
  }
});

//Permições de Comandos nas Pastas
fs.readdir("./events/", (err, files) => { // pasta que é para ser lida
    if (err) return console.error(err); // erro caso teja algo bugado
    files.forEach(file => { // pesquisa os arquivos e dps reproduz
      let eventFunction = require(`./events/${file}`); // pega os arquivos do evento
      let eventName = file.split(".")[0]; // le eles
  client.on(eventName, (...args) => eventFunction.run(client, ...args)); // e depois reproduz
    });
  });
  
client.on("message", message => {
    if (message.author.bot) return; // Mensagem de Bot, Será ignorada
    if (!message.content.startsWith(config.prefix)) return; // Se não começar com o prefix ignora.
    let command = message.content.split(" ")[0]; // command = oq falar dps da prefix: a!alo
    command = command.slice(config.prefix.length);
   
    let args = message.content.split(" ").slice(1); // "alo"
   
    try {
      let commandFile = require(`./comandos/${command}.js`); // Procura o arquivo na pasta
      commandFile.run(client, message, args); // Executa
    } catch (err) { // caso de erro, serve para não crashar o bot
      console.error(err); // mandará o erro no Systema
    }
  });

  client.on('message',message => {

    if (message.author.bot) return;

let xpAdd = Math.floor(Math.random() * 7) + 8;
console.log(xpAdd);

if(!xp[message.author.id]){
xp[message.author.id] = {
xp: 1,
level: 1
};
}

let curxp = (xp[message.author.id]).xp;
let curLvl = xp[message.author.id].level; 
let nxtLvl = xp[message.author.id].level * 700;
xp[message.author.id].xp = curxp + xpAdd;
if(nxtLvl <= xp[message.author.id].xp){
xp[message.author.id].level = curLvl + 1;
let lvlup = new Discord.RichEmbed()
.setTitle(`${message.author.username} Parabéns por upa!`)
.setColor(0xffffff)
.addField("Novo Level", curLvl + 1);

message.channel.send(lvlup);
}
fs.writeFile("./xp.json", JSON.stringify(xp), (err) =>{
if(err) console.log(err)
});
  });

  client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'eventos');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Bem-Vindo Ao servidor, ${member}`);
  });
  

client.login(config.token)
console.log('GO!')