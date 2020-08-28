// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
  const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }
  
  async run(client, guildMember) {
    if (guildMember.guild.id === client.id.jonin.home) { await update(client.id.jonin); };

    async function update(bot) {
        let home = client.guilds.cache.get(bot.home);
        if (bot.update) { await home.channels.cache.get(bot.update).send(`${guildMember.toString()}, just left the server [${guildMember.guild.name}]`); };
        if (bot.members) { await home.channels.cache.get(bot.members).setName(`Members: ${home.memberCount}`); };
    }
  }
}