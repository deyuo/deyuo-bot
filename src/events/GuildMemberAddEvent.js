// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, guildMember) {
    if (guildMember.guild.id === client.id.jonin.home) { await update(client.id.jonin); };
    if (guildMember.guild.id === `641709561430016002`) { await special(); };

    async function update(bot) {
      if (guildMember.user.bot && bot.bot.length > 0) { return bot.bot.forEach(id => { guildMember.roles.add(guildMember.guild.roles.cache.find(role => role.id === id)); }); };
      let home = client.guilds.cache.get(bot.home);
      if (bot.members) { await home.channels.cache.get(bot.members).setName(`Members: ${home.memberCount}`); };
      bot.roles.forEach(id => { guildMember.roles.add(guildMember.guild.roles.cache.find(role => role.id === id)); });
    }

    async function special() {
        if (guildMember.user.bot) return;
        client.channels.cache.get(`730800317758963832`).send(`${guildMember.toString()} Please click the corresponding emoji to assign yourself a role in ${client.channels.cache.get(`641732643968385034`).toString()}`, client.embed().setTitle(`Welcome to ${guildMember.guild.name}`).setImage(`https://i.imgur.com/7oGQVyK.png`));
    }
  }
}