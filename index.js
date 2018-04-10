console.log('Lerry...')
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json'); // a pasta de Configurações do bot
const fs = require('fs')
let xp = require("./xp.json");
const message = "message.author.id"

// Dono: NoKing // Ajudante: Shiro <3
client.on("ready",  () => {
 
  client.user.setPresence({game: { name: `Espero que estejam se divertindo ♥ Nyan~~` , type: 1,  url: "https://www.twitch.tv/az4zell"}})
    setInterval(() => {
  client.user.setPresence({game: { name: `Use n!ajuda || ${client.users.size} Pessoas ♥` , type: 1,  url: "https://www.twitch.tv/az4zell"}})
    },2 * 60 * 1000)
    });
    client.on('ready', function() {
      client.user.setUsername("Nami");
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

  client.on('guildDelete', guild => {
    console.log(`voce saiu de ${guild.name} até ${new Date()}`);
  });
  
  client.on('guildCreate', guild => {
  message.channel.send(`Adeus ${guild.name}`);
  });
    
  client.on('guildMemberAdd', member => {
    let guild = member.guild;
    guild.channel.get.first().send(`Bem-Vindo ${member.user.username} Ao servidor, Espero que se divirta!`);
  });
  
  client.on('guildMemberRemove', member => {
    let guild = member.guild;
    guild.channel.send(`Adeus ${member.user.username} Espero que volte um dia!`);
  });  

client.login("NDIyMjA5ODU5NzQ5MTUwNzIw.DYYp0g.yrMskwI6yww70CophiHFtf0nghs")
console.log('GO!')