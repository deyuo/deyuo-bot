const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VoteCommand extends BaseCommand {
  constructor() {
    super('Vote', 'Vote reminders', []);
  }

  async run(client) {
    if (message) return;
    client.id.deyuo.vote.forEach(reminder => {
        let role = client.channels.cache.get(reminder.channel).guild.roles.cache.get(reminder.id);
        const embed = client.embed()
            .setTitle(`Daily Voting Reminder!`)
            .setDescription(`You got this notification because you signed up the the ${role.toString()} role! To remove this role, request a moderator.`)
            .addField(`BOT VOTES BELOW`, `\u200B`, false)
            .addField(`Jonin`, `[Vote on TOP.GG](${client.id.jonin.vote})\n[Vote on DISCORD.BOATS](https://discord.boats/bot/662517805983334416/vote)\n[Vote on DEL](https://discordextremelist.xyz/en-US/bots/662517805983334416)\n[Vote on BFD](https://botsfordiscord.com/bot/662517805983334416/vote)\n[Vote on DBL](https://discordbotlist.com/bots/jonin/upvote)`, true)
            .addField(`Trusted Bots`, `[MarksBot on TOP.GG](https://top.gg/bot/417143274713776139/vote)\n[MarksBot on DISCORD.BOATS](https://discord.boats/bot/417143274713776139)\n[Respects Bot on TOP.GG](https://top.gg/bot/468171246018756609/vote)`, true)
        client.channels.cache.get(reminder.channel).send(role.toString(), embed)
    })
  }
}