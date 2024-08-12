const Discord  = require('discord.js')
const client = new Discord.Client({ intents: 48651 });
const { MessageEmbed } = require('discord.js');

client.on('ready', () => {
    console.log(client.user.username)
});

const suggestionChannel = '1268622475298603100';
client.on('messageCreate', async message => {

     const user = message.author;
     const channel = message.guild.channels.cache.get(suggestionChannel)
     const args = message.content.slice('!').trim().split(/ +/);
     const command = args.shift().toLowerCase();
     const content = args.join(' ');

          if(command === '!sug') {
            message.delete();

            const embed = new MessageEmbed()
            .setColor('BLUE')
            .setAuthor(`${user.username}#${user.discriminator} New Suggestion!`, message.member.displayAvatarURL({ dynamic: true }))
            .setTitle('New Suggestion')
            .setDescription(content)
            .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true}))
            .setTimestamp();

         await channel.send({ embeds: [embed] }).then((msg) => {
            msg.react('✅')
            msg.react('❌')
      })
   }
})

client.login("token")