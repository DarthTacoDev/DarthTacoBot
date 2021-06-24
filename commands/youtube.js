module.exports = {
    name: 'youtube',
    description: "sends the developers youtube channel!",
    execute(message, args){
       

        if(message.member.roles.cache.some(r => r.name === "Guild Member")){
            message.channel.send('http://www.youtube.com/DarthTaco')
       
       
        } else {
            message.channel.send('You cant use this command because you dont have the right roles. Let me fix that for you!');
            message.member.roles.add('857323816216821781').catch(console.error);
        }
      
        
    }
}