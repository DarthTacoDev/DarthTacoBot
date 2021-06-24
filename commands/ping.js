module.exports = {
    name: 'ping',
    description: "sends a pong back!",
    execute(message, args){
       
        
        if(message.member.roles.cache.some(r => r.name === "Guild Member")){
            message.channel.send('pong!')
       
       
        } else {
            message.channel.send('You cant use this command because you dont have the right roles. Let me fix that for you!');
            message.member.roles.add('854019131804614716').catch(console.error);
        }
      
        
    }
}