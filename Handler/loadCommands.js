const fs = require("fs")

module.exports = async bot => {
    fs.readdirSync("./Commands").filter(f => f.endsWith(".js")).forEach(async file => {

        let command = require(`../Commands/${file}`)

        if (!command.name || typeof command.name !== "string") throw new TypeError(`[-] ${file} : Erreur !`)
            
        bot.commands.set(command.name, command)
        console.log(`[+] ${file} : Succès !`)
    })
}