module.exports = {
    name: 'kick',
    description: "This command gives a member a swift kick in the butt",
    execute(message, args){
        
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            if(message.member.roles.cache.has(854380626370494474)) {  
            message.channel.send("<@${memberTarget.user.id}> has gotten a kick in the butt");
            }
        }else{
            if(message.member.roles.cache.has(854019131804614716)) {  
                message.channel.send('You cant give that member a swift kick in the butt');
                }
        }
    }
}