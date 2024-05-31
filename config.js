import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '2347015667458', process.env.OWNER_NAME || '✞𝙏𝞖𝞢  𝘿𝞢𝝯𝞘𝙇 𝞖𝞘𝞛𝙎𝞢𝙇𝙁ᵍʳᵉʸ✞ꨄ', true],
  ['2347015667458', '✞  𝘿𝝯𝞙𝞢 ᵍʳᵉʸ  ✞ꨄ', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || '✞𝙏𝞖𝞢  𝘿𝞢𝝯𝞘𝙇 𝞖𝞘𝞛𝙎𝞢𝙇𝙁ᵍʳᵉʸ✞ꨄ'
global.botname = process.env.BOT_NAME || '𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇𝙎 𝞑𝞗𝙏'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || '𝞑𝞢𝙇𝞗𝞜𝙂𝙎 𝙏𝞗'
global.stkowner = process.env.OWNER_NAME || '𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇'

//Watermark
global.maker = process.env.MAKER || 'Made with 💔 by 𝙏𝞖𝞢 𝘿𝞢𝝯𝞘𝙇𝙎 𝞑𝞗𝙏'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '😏'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '💔' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 😭'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 😕'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Asia/Kolkata').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Asia/Kolkata').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
