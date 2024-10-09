const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "971557649104";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_17_10_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDM0LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYWdUOE9qekZzcmxmVytvMmVBZkU5MWsrOGM0QVUzdjZpQm13Ny9mMDJyMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTTRrZU1yZ0xRTUdGYXlqWjZWU28wQVwiLFxuICBcInBob25lSWRcIjogXCJhYWI3MmVkNy00NjkzLTQ5YzgtYjMzMi0yNzUyNDVkMTk3NjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMTM3LFxuICAgICAgMTczLFxuICAgICAgMTA5LFxuICAgICAgMjIxLFxuICAgICAgMjE3LFxuICAgICAgMjQzLFxuICAgICAgMjcsXG4gICAgICAxNTIsXG4gICAgICAxNjEsXG4gICAgICA4MyxcbiAgICAgIDU0LFxuICAgICAgMTMxLFxuICAgICAgMTE4LFxuICAgICAgMjIwLFxuICAgICAgMTQ1LFxuICAgICAgMTAwLFxuICAgICAgMTM4LFxuICAgICAgMjQyLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMjI0LFxuICAgICAgMjA4LFxuICAgICAgOTQsXG4gICAgICAwLFxuICAgICAgMjM1LFxuICAgICAgMTEwLFxuICAgICAgMjM0LFxuICAgICAgMjUyLFxuICAgICAgNzgsXG4gICAgICAyMTAsXG4gICAgICAxMjYsXG4gICAgICA1OSxcbiAgICAgIDcwLFxuICAgICAgMzksXG4gICAgICAyMDQsXG4gICAgICA2MixcbiAgICAgIDI0NSxcbiAgICAgIDc2LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlpSNjIxUDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk3MTU1NzY0OTEwNDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzI4ODY4MDgyNjQ3NzU6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYm9qWUlIRUl2MW1yZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5OTEd6Vy9jYkF2M1pSWEtWR01RVTFGRlpJdlZOUlVvV0EzYWc1V2dQVDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL2ZmdjVTdFNRSHY0UVEzdHBuRzVXQWcyTlpPazhqbGJPclhtc3lhWkdlN0d4NkszV2VSQ3FUbmxOQzBOdGlIRUE4ejZrZnhscHV4SVEvaTU2dW1EQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQmJIc01KVEJoRVRwYVhoRjdkNEtyZnFmTUVQcXJvU1BTUmlpb3BZREtkakFLbUZiaEVhQUQrbzNvL3ZmQ29PWE1wdlYvMjIzK3NVTElleEI4anl4aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTcxNTU3NjQ5MTA0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODQ5NDIyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9QTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1BMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZjIxVXF2cnJhMDVoQ1JYQ0dpY0NQT0dnWVNBWjd6R2pvNTFuU1R1dHh2MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODgzNDY4ODIxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
