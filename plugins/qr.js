const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')
const Heroku = require('heroku-client')
const db_pool = new DBM({
    db: config.DATABASE_URL
})

const heroku = new Heroku({
    token: config.HEROKU_API_KEY
})


cmd({
    pattern: "qr_off",
    react: "⚙",
    alias: ["uppre"],
    desc: "To Change The Prefix for Bot",
    category: "main",
    use: '.prefix',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
    if (!isCreator) { if (!isDev) return reply('🚫 *You must be a Moderator frist*') }
    let baseURI = '/apps/cyber-xqr'
           const form = await heroku.get(baseURI + '/formation')
       forID = form[0].id
       await heroku.patch(baseURI + '/formation/' + forID, {
        body: {
            quantity: 0
        }
    })
await conn.sendMessage(from , { text: '🛠️ *QR site successfully Turned off*' }, { quoted: mek })
                       
                   
   } catch (e) {
    reply('⛔ *Error accurated !!*\n\n'+ e )
    l(e)
    }
    })
    
    
