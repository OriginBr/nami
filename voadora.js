exports.run = (client, message, args)  => {
    var falas = ['']
        let user = message.mentions.users.first();
        const variavel = falas[Math.round(Math.random()*falas.length-1)]
        if (message.mentions.users.size < 1) return message.reply('**Você Não Mencionou O Usuario Que Você Quer Dar Uma Voadora!**').catch(console.error);
    message.channel.send({embed:{
        description:"**você <@" + message.author.id + "> deu uma Voadora em <@" + user.id + ">**",
        color: "46546",
        timestamp: new Date(),
     image: {
          url: variavel  }}})
   

     }