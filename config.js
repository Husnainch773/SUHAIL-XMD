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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "971558283036";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_51_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE0LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxMemkxL1pUOHZzMWVPSTB2bVVCQ3JrazBJakswN1NKM0pFMHJuQU1jSWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJtQlJmVWJYVEVpUWp5UDB2YUJWNXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjY2ODg2ZmQtMTA1Ny00ZjMyLThhYjYtNGJiOTUxMTM3NGIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgMTUyLFxuICAgICAgMTk2LFxuICAgICAgMzYsXG4gICAgICA0MSxcbiAgICAgIDg2LFxuICAgICAgMTYyLFxuICAgICAgMTIxLFxuICAgICAgMjIyLFxuICAgICAgMTM5LFxuICAgICAgMzUsXG4gICAgICAxNzcsXG4gICAgICAxMTIsXG4gICAgICAxNzEsXG4gICAgICAxNjgsXG4gICAgICA2NSxcbiAgICAgIDc3LFxuICAgICAgNTYsXG4gICAgICAxNDAsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgNDQsXG4gICAgICAxMzQsXG4gICAgICAxNDMsXG4gICAgICAxNTUsXG4gICAgICAyMDAsXG4gICAgICA1NixcbiAgICAgIDY2LFxuICAgICAgMTQwLFxuICAgICAgMTQ4LFxuICAgICAgMSxcbiAgICAgIDc5LFxuICAgICAgMTU1LFxuICAgICAgMjM1LFxuICAgICAgOTksXG4gICAgICAxNDEsXG4gICAgICAxMDgsXG4gICAgICAxOTQsXG4gICAgICAyMDEsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFJOU01WTEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk3MTU1ODI4MzAzNjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzI4Njk2Nzg3MzEzMDI6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLVHp6NWNERU0zRmlyb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBld3hKTGhuVm9rQzR1aUlGcU5qSmt1OW9sT29CdVFhajhkRXF1R2hoRjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWWpuS01JbGt3Z252RXZrNWVCdmVhUlZRWlRMRHhFRVNMdVpQL0pobkVMdXdjNmtQV3F6bGJ1YWY2dTNSclpPbGUzdS9aQzdDbjlJdEtOR0NHV1JLQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT2U4Sm9Ua05YdSt2V2NWaEZhTVkzMlNFaFRUUUZhemVkY2g4eTdXNCtQakpyTG50Wk9lN1Q2UXZqdDE4MnlDeTBtWEFxSXRzUUlCWk1TempXTXY1Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTcxNTU4MjgzMDM2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjQyMDMwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUlBQUJSR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBSUFBQlJHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ1J5TXRCZnBGN0gyYlhPaUxJVDAvSGY3V3NKano4ZTdnVWpvVHBoUC9KVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTQ4NDk5NTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMTYwOTgxODMzMlwifSIKfQ=="  // PUT your SESSION_ID 


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
