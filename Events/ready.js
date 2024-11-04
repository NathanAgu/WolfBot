const Discord = require("discord.js")
const loadSlashCommands = require("../Handler/loadSlashCommands")

module.exports = async bot => {

    await loadSlashCommands(bot)
    console.log(`${bot.user.tag} est en ligne !`)
}