module.exports = {
    name: 'ban',
    description: "This command bonks a member the ban hammer",
    execute(message, args){
        
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            if(message.member.roles.cache.has(854380626370494474)) {  
                message.channel.send("<@${memberTarget.user.id}> has been bonked with the ban hammer");
                }
        }else{
            if(message.member.roles.cache.has(854019131804614716)) {  
                message.channel.send('You cant bonk that person with the ban hammer');
                }
        }
    }
}