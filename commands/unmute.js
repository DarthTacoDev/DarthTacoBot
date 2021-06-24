module.exports = {
    name: 'unmute',
    description: "This uncommand mutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Guild Member')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'In Jail')

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted`)
        } else
            message.channel.send('Cant find that member');
    }
}