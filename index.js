const Discord = require("discord.js")
// const { Client } = require("@notionhq")
const Client = require("@notionhq/client").Client;

const prefix = '!'

// Notion



async function asyncNotion(){
    const notion = new Client({auth: "secret_RzeLpoeo7HuEVB5GACI92oq6DT5HnE7JaKoEYxWcH38"})
    const databaseId = "cf8125588e364409bff6e18bc4b68eed"
    const response = await notion.databases.query({
        database_id: databaseId,
      });
    console.log(response['results'].length)
    const result = response['results'].length
    return result
}





const client = new Discord.Client({
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
    intents: [
        "Guilds",
        "GuildMessages",
        "GuildPresences",
        "GuildMembers",
        "GuildMessageReactions"
    ]
});

client.on("ready", () => {
    console.log("bot is online")

    const guildId = '1004290643096502354'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands.create({
        name: 'ping',
        description: 'Reply with a pong',

    })
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()){
        return
    }

    const { commandName, options } = interaction
    result = asyncNotion();
    if (commandName === 'ping') {
        interaction.reply({
            content: result,
            ephemeral: true
        })
    
    }

})



client.login("MTAwNTA3NTkzNTQ4NzMyODMyNw.GhFz4D.iFj1SU-ue3sYr-9PaKbi4OPwC37MjLarDEjzUo");