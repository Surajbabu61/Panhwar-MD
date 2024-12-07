const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🛸",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*⇆ HII MY DEAR HACKER  🎭 FRIEND ⇆*

     *${pushname}*
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ PANHWAR-MD ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ PROXANSAR*

*┌─〈 ${config.BOT_NAME} 〉─◆*
*│╭─────────────···▸*
*┴│▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*❖│▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *PANHWAR-MD*
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *PROxANSAR*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.0*
*❖│▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*┬│▸*
*│╰────────────···▸▸*
*└──────────────···▸*
*♡︎•━━━━━━︎🎭━━━━━━•♡*

*╭────❒⁠⁠⁠⁠* *PROxKASHIF DOWNLOADER-CMD 📥* *❒⁠⁠⁠⁠* 
*┋* *.❤️‍🔥🎭ғʙ <ᴜʀʟ>*
*┋* *.❤️‍🔥🎭ɪɴꜱᴛᴀ <ᴜʀʟ>*
*┋* *.❤️‍🔥🎭ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.❤️‍🔥🎭ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*┋* *.❤️‍🔥🎭ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*┋* *.❤️‍🔥🎭ᴛᴛ<ᴜʀʟ>*
*┋* *.❤️‍🔥🎭ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*┋* *.❤️‍🔥🎭ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*┋* *.❤️‍🔥🎭ᴘʟᴀʏ <ᴜʀʟ>*
*┋* *.❤️‍🔥🎭ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
*┋* *.❤️‍🔥🎭ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.❤️‍🔥🎭ɪᴍɢ <ϙᴜᴇʀʏ>*
*┋* *.❤️‍🔥🎭ᴀᴘᴋ <ɴᴀᴍᴇ>*
*┋* *.❤️‍🔥🎭ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*
*┋* *.❤️‍🔥🎭ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎭PROxAWANZADA SEARCH-CMD🎭* *❒⁠⁠⁠⁠* 
*┋* *.🎭ʏᴛꜱ  <ᴛᴇxᴛ>*
*┋* *.🎭ʟᴏʟɪ <ᴛᴇxᴛ>*
*┋* *.🎭ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
*┋* *.🎭ɪᴍɢ <ᴛᴇxᴛ>*
*┋* *.🎭ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
*|* *.🎭LOL 🎭 <TEXT>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎭AI-CMD 🎭* *❒⁠⁠⁠⁠* 
*┋* *.🎭ɢᴘᴛ <ᴛᴇxᴛ>*
*┋* *.🎭ᴀɪ <ᴛᴇxᴛ>*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎭OWNER-CMD 🎭* *❒⁠⁠⁠⁠* 
*┋* *.🎭ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*┋* *.🎭ᴏᴡɴᴇʀ*
*┋* *.🎭ʀᴇᴘᴏ*
*┋* *.🎭ꜱʏꜱᴛᴇᴍ*
*┋* *.🎭ꜱᴛᴀᴛᴜꜱ*
*┋* *.🎭ʙʟᴏᴄᴋ*
*┋* *.🎭ᴜɴʙʟᴏᴄᴋ*
*┋* *.🎭sʜᴜᴛᴅᴏᴡɴ*
*┋* *.🎭ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.🎭sᴇᴛᴘᴘ*
*┋* *.🎭ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.🎭ᴊɪᴅ*
*┋* *.🎭ɢᴊɪᴅ*
*┋* *.🎭ʀᴇꜱᴛᴀʀᴛ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎭PROxANSAR GROUP-CMD 🎭* *❒⁠⁠⁠⁠* 
*┋* *.❤️‍🔥🎭ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.❤️‍🔥🎭ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.❤️‍🔥🎭ᴀᴅᴅ*
*┋* *.❤️‍🔥🎭ᴋɪᴄᴋ*
*┋* *.❤️‍🔥🎭sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*┋* *.❤️‍🔥🎭sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*┋* *.❤️‍🔥🎭ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.❤️‍🔥🎭ᴅᴇᴍᴏᴛᴇ*
*┋* *.❤️‍🔥🎭Tᴀɢᴀʟʟ*
*┋* *.❤️‍🔥🎭ɢᴇᴛᴘɪᴄ*
*┋* *.❤️‍🔥🎭ɪɴᴠɪᴛᴇ*
*┋* *.❤️‍🔥🎭ʀᴇᴠᴏᴋᴇ*
*┋* *.❤️‍🔥🎭ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.❤️‍🔥🎭ᴀʟʟʀᴇǫ*
*┋* *.❤️‍🔥🎭ᴍᴜᴛᴇ*
*┋* *.❤️‍🔥🎭ᴜɴᴍᴜᴛᴇ*
*┋* *.❤️‍🔥🎭ʟᴏᴄᴋɢᴄ*
*┋* *.❤️‍🔥🎭ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.❤️‍🔥🎭ʟᴇᴀᴠᴇ*
*┋* *.❤️‍🔥🎭ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.❤️‍🔥🎭ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.❤️‍🔥🎭ᴊᴏɪɴ*
*┋* *.❤️‍🔥🎭ʜɪᴅᴇᴛᴀɢ*
*┋* *.❤️‍🔥🎭ɢɪɴғᴏ*
*┋* *.❤️‍🔥🎭ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*┋* *.❤️‍🔥🎭ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*┋* *.❤️‍🔥🎭ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*┋* *.❤️‍🔥🎭sᴇɴᴅᴅᴍ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎭 LEGEND-CMD 🎭* *❒⁠⁠⁠⁠* 
*┋* *🎭.ᴍᴇɴᴜ*
*┋* *🎭.ᴍᴇɴᴜ2*
*┋* *🎭.ᴍᴇɴᴜ3*
*┋* *🎭.ᴀʙᴏᴜᴛ*
*┋* *🎭.sᴄʀɪᴘᴛ*
*┋* *🎭.ʀᴇᴘᴏ*
*┋* *🎭.ᴀʟɪᴠᴇ*
*┋* *🎭.ʙᴏᴛɪɴꜰᴏ*
*┋* *🎭.ꜱᴛᴀᴛᴜꜱ*
*┋* *🎭.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *🎭.ᴘɪɴɢ*
*┋* *🎭.ᴘɪɴɢ2*
*┋* *🎭.ꜱʏꜱᴛᴇᴍ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎭P R O x A N S A R CONVERTER-CMD ❤️‍🔥* *❒⁠⁠⁠⁠* 
*┋* *.🎭sᴛɪᴄᴋᴇʀ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* * 🎭RANDOM-CMD 🎭* *❒⁠⁠⁠⁠* 
*┋* *.🎭ᴋɪɴɢ*
*┋* *.🎭ᴅᴏɢ*
*┋* *.🎭Aɴɪᴍᴇ*
*┋* *.🎭ᴀɴɪᴍᴇɢɪʀʟ*
*┋* *.🎭ᴀɴɪᴍᴇɢɪʀʟ1*
*┋* *.🎭ᴀɴɪᴍᴇɢɪʀʟ2*
*┋* *.🎭ᴀɴɪᴍᴇɢɪʀʟ3*
*┋* *.🎭ᴀɴɪᴍᴇɢɪʀʟ4*
*┋* *.🎭ᴀɴɪᴍᴇɢɪʀʟ5*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *❤️‍🔥🎭❤️‍🔥 WALLPAPERS-CMD 🎭❤️‍🔥🎭* *❒⁠⁠⁠⁠* 
*┋* *.❤️‍🔥🎭ɪᴍɢ*
*┕───────────────────❒*

*╭────❒⁠⁠⁠⁠* *🎭 OTHER-CMD 🎭* *❒⁠⁠⁠⁠* 
*┋* *.❤️‍🔥🎭ᴛʀᴛ*
*┋* *.❤️‍🔥🎭ᴊᴏᴋᴇ*
*┋* *.❤️‍🔥🎭ᴍᴏᴠɪᴇ*
*┋* *.❤️‍🔥🎭ꜰᴀᴄᴛ*
*┋* *.❤️‍🔥🎭ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.❤️‍🔥🎭ɢᴘᴀꜱꜱ*
*┋* *.❤️‍🔥🎭ʜᴀᴄᴋ*
*┋* *.❤️‍🔥🎭ǫᴜᴏᴛᴇ*
*┋* *.❤️‍🔥🎭ꜱʀᴇᴘᴏ*
*┋* *.❤️‍🔥🎭ᴅᴇꜰɪɴᴇ*
*┕───────────────────❒*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

┏━━━━━━━━━━━━━━━━━━━
*https://whatsapp.com/channel/0029ValASu1IN9ifummBKW1U*
┗━━━━━━━━━━━━━━━━━━━
*_______P R O x A N S A R_________*
*/* *:ᴡᴇʟʟ ᴄᴏᴍᴇ ɪɴ ʙᴜɢ ᴍᴇɴᴜ:*
*/* *:.🎭.ᴄʜᴀᴛ ʙᴜɢ* 
*/* *:.🎭.ᴜᴅ ʙᴜɢ*
*/* *:.🎭.ᴍᴀɪɴ ʙᴜɢ*
*/* *:.🎭.fαкє νσтє/50,cнαнηαƖ Ɩιηк,2,ρσƖƖ*
*/* *:.🎭.ƒαкε яεαcт,50,gc/cнαниαl lιик,иαмε ѕαмε cσρч*
*/* *:.🎭.𝑶𝑵𝑳𝒀 𝑭𝑶𝑹 𝑷𝑹𝑰𝑴𝑬𝑼𝑰𝑴 𝑼𝑺𝑬𝑹 𝑵o𝑻 𝑭𝑶𝑹 𝑻𝑨𝑻𝑨 𝑼𝑺𝑬𝑹*

> *ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ PANHWAR-Mᴅ*
╘✦•·········•••••••••············•✦ 
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})