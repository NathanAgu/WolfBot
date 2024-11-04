const Discord = require("discord.js")

module.exports = {

    name: "ping",
    description: "",
    permission: "Aucune",
    dm: true,

    async run(bot, message) {
        await message.reply(`Ping : \`${bot.ws.ping}\``)
    }
}