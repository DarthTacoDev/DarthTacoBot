module.exports = {
    name: 'help',
    description: "Gives a list of commands",
    execute(message, args){
       
        
        if(message.member.roles.cache.some(r => r.name === "Guild Member")){
            message.channel.send('Heres the commands! -ban, -kick, -clear, -mute, -unmute, -ping, -youtube')
       
       
        } else {
            message.channel.send('You cant use this command because you dont have the right roles. Let me fix that for you!');
            message.member.roles.add('854019131804614716').catch(console.error);
        }
      
        
    }
}