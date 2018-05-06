const superagent = require('superagent');
module.exports.run = async (client, message, args) => {

try {
   function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
    const bug = args.join(" ")
    if (!bug) return message.channel.send('Please specify a approve')
    const content = clean(`**${message.author.username}**#${message.author.discriminator} (${message.author.id}) approved:\n${bug}\n**`);
    const id = '442465425159356418';
    new Promise((resolve, reject) => {
      superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
        .set('Authorization', `Bot ${client.token}`).send({ content })
        .end((err, res) => {
          if (err) {
            reject(err);
            message.reply('There was an error while sending your bug report to Frogbot Support. Please try again later.');
          } else {
            resolve(res);
            message.channel.send(`:white_check_mark: **${message.author.username}**, your approve was sent. Thank you!.`);
          }
        });
    });
}  catch (err) {
console.log(err)
}
}