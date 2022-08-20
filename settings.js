const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}

global.alivemsg = `الیو مسیج
 ساتا بات` //Costomize Alive Message (type your message in `` )


global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owner v card
global.vcardowner = ['+989339658384'] // owner number
global.ownername = "☫𝐵𝐴𝐿𝑂𝐶𝐻 𝐸𝐷𝐼𝑇☫❯❯" // owner name
global.ytname = "https://youtube.com/channel/UCIdvdgFwdssFC0Nxx9Xk1dQ"
global.socialm = "GitHub: hoseinbaloch1" // github or insta name
global.location = "India, Mizoram, Aizawl, iran" // location

//bot body 
global.alivepic = `https://i.ibb.co/DR1Fk9N/IMG-20220820-WA0001.jpg` // alive picture \\ use "https://ibb.com" to upload photos. < 1 MB

global.dragonchat = "false"  // chat bot  "true" / "false" (200 auto replies in this)
global.callblock = "false" // call block "true" / "false" ("true"  to block callers)
global.antibad = "false" // To remove bad word senders
global.antispam = "true" // To remove or block spammers
global.antilink = "false" // To remove group link sharing peoples
global.upsongvoice = "false" // true/false \\ bot can upload song as voice note (it use your data and storage bacause auto download) you can put "false" (anyone can't get songs as voice note / your data is not wasted)
global.welcom_msg = "true" // Welcome / Goodbye   [true/false]

global.owner = ['+989339658384']
global.ownertag = '+989339658384' //your tag number
global.botname = '☫𝐵𝐴𝐿𝑂𝐶𝐻-𝐸𝐷𝐼𝑇☫' //ur bot name
global.packname = "sata" // sticker packname
global.author = "☫𝐵𝐴𝐿𝑂𝐶𝐻 𝐸𝐷𝐼𝑇☫" // sticker author
global.dragonemoji = '☫' // Menu emoji
global.footer = '[ ◉ ☫𝐵𝐴𝐿𝑂𝐶𝐻 𝐸𝐷𝐼𝑇☫ ]' //

global.button = '☰ گیت هاب ☰' //Costomize A Button Name In Alive Message
global.btnurl = 'https://github.com/hoseinbaloch1' //Change Your Button's URL

//database
global.premium = ['+989339658384'] //ur premium numbers

//other
global.sessionName = 'session'
global.antitags = false
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sp = '💠'
global.mess = {
    success: 'Done ✅',
    admin: 'فقط مدیران میتوانند استفاده کنند !😉',
    botAdmin: 'ربات میخواهد یک ادمین شود 😥',
    owner: 'فقط مالک میتواند از این استفاده کند!😉',
    group: 'ویژگی فقط برای گروه استفاده میشود!',
    private: 'ویژگی فقط برای چت خصوصی استفاده میشود!',
    bot: 'این ویژگی فقط برای ربات است😝',
    wait: '👉👈لطفا صبر کنید...',
    error: 'ارور!!! شاید کد اپ کی منقضی شده باشد 🤔!',
    endLimit: 'محدودیت روزانه شما منقضی شده است، این محدودیت هر 12 ساعت یکبار بازنشانی می شود',
    linkm: 'لینک کجاست?',
    nsfw: 'ویژگی nsfw فعال نشده است، لطفاً برای فعال کردن با مدیر تماس بگیرید',
    banChat: 'ربات در این گروه ممنوع شد، لطفاً برای لغو ممنوعیت با مالک تماس بگیرید',
    badwords: '*🚫🚫کلمات بد اینجا مجاز نیستند!*\n\n⚠️ هشدار... ⚠️⚠️',
    caption: 'عنوان سازنده *این ربات با تلاش بی پایان خیلی روش کار شده تشکر از تیم بزرگ ساتا و بلوچ ادیت*'
} // END \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thum = fs.readFileSync("./Android/AllData/theme/BALOCH.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Android/AllData/theme/BALOCH.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Android/AllData/theme/BALOCH.jpg") //ur error pic
global.thumb = fs.readFileSync("./Android/AllData/theme/BALOCH.jpg") //ur thumb pic

global.thumb = fs.readFileSync('./Android/AllData/theme/BALOCH.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []





































// DO NOT CHANGE THIS. ERROR WARNING දාන්න තැනක් නැතුව මෙතන දැම්මෙ.
global.rep = { // All Replies = 145
    K1: ' سلام😁❤️'، 
    K2: '🤭 هوی✌️💞 '، 
    K3: '😉 سلام😂'، 
    K4: ' هوی😊'، 
    K5: "😂هی، چطور شدی ✌️"، 
    K6: "😁سلام💝 من ربات واتساپ هستم😏"، 
    K7: '❣️چرا سلام😌'، 
    K8: "🙃چه خبر سلام "، 
    K9: '😒 چی؟'، 
    K10: ' چرا لطفا؟❤️ '، 
    K11: '🌝❤️'، 
    K12: '😜هی هی😁هو هو، 
    K13: '😁هی هی💞'، 
    K14: "هه..."، 
    K15: "چرا ", 
    K16: '😂😂✌️'، 
    K17: '😐ah'، 
    K18: "این زیباست😇"، 
    K19: ' چرا سفید❤️💓'، 
    K20: "پس به هیچ وجه😒"، 
    K21: "😁 من نمی دانم "، 
    K22: "خوب است 😌"، 
    K23: '😂😂 مرده اما'، 
    K24: "کیف ها🙃", 
    K25: '😘😇❤️'، 
    K26: '😘😘اینم به شما💕' 
    K27: "واقعا؟❤️"، 
    K28: '☺️👻واقعی هستی❤️'، 
    K29: "چرا🙄", 
    K30: ' ✌️آیا این اتفاق می افتد؟'، 
    K31: '😐💔به آن سبز نیایید😒، 
    K32: '😏اوه این😒 برو کنار 
    K33: "تو دزد هستی
    : "تو دزدی 😒 که قلبم را دزدید😌"،
    K34: "😇چه زمزمه می کند😒 جغد"،
    K35: " ‌ ‌
    K36: "😉نه لطفا هیچی😐  "،
    K37: '😒ah',
    K38: "✌️بله همین است😌",
    K39: '😐هی هی نه؟  '،
    K40: '🙄چه چیزی را دوست داری؟'،
    K41: '😌من هم دوستت دارم😊💞'،
    K42: "Ela😌",
    K43: "نه، فقط صبر کن😏"،
    K44: '😂😂💔'،
    K45: "چرا سفید است؟🙄",
    K46: "😇هنوز نخورده ام لطفا  "،
    K47: "ننوشید😒"،
    K48: "اگر خوابی نگران نباش خواهر 😒😌❤️"
    K49: "😇نمیتونم بخوابم لطفا😜 من خواب آلود نیستم😁💞"،
    K50: "😉هیچی لطفا  "،
    K51: "نمیدونم چی',
    K52: "😝من کاری انجام نمی دهم لطفا😁 من به شما بچه ها نگاه می کنم😌"، 
    K53: ' لطفا گم شد. یه بازی کنیم؟😊✌️', 
    K54: '😌😁عشق❤️'، 
    K55: '😌 خیلی دوستت دارم❤️❤️', 
    K56: ' واقعا؟'، 
    K57: " این چیه؟ "، 
    K58: '😒من هم از این بابت ناراحتم😕'، 
    K59: "🤭 نمی توانم صبر کنم لطفا😜" 
    K60: " چرا گریه می کنی؟😒"، 
    K61: '😉 چه داداش😂'، 
    K62: "😐من بی گناهم که چیزی نمی دانم😕💔" 
    K63: '🚲بیا بریم😌'، 
    K64: " نمی توانم بدهم😒"، 
    K65: "🙏آن را پس بده "، 
    K66: '😁گرسنه نیستم❤️😒'، 
    K67: '😳ام ها ها🙏'، 
    K68: '😂چرا تو 😉😈'، 
    K69: '👻چرا هوی😁 کونگ گاه نای😂'، 
    K70: " اگر نمی دانید، فقط صبر کنید😜"، 
    K71: "ما بهترینیم \n🤧این پارچه است😂"،
    K72: '🙄اه ها 😏 نگاه کن 
    K73: "هی😂😂😂💓", 
    K74: "Wonderpool 😂"، 
    K75: '😂 ببین چطوره 😂'، 
    K76: '😌Ela', 
    K77: ' Moko Do😉❣️'، 
    K78: "Adeh🙃😹", 
    K79: "اگر آن را بگویید بزرگ نیست"، 
    K80: "😹من فقط یک بچه هستم😌"، 
    K81: ' آیا این کافی است؟😂'، 
    K82: " او اینطوری نیست😅"، 
    K83: ' او چه کار می کند؟'، 
    K84: "😂 نگو که گناه میکنن😐🤭" 
    K85: "هوممممممممممممممممممممم😂" 
    K86: "هه 😒 فقط می گفت 🙏❣️"، 
    K87: "نمی دانم "، 
    K88: '👀'، 
    K89: ' برو و بگیرش'، 
    K90: ' خیلی سخته؟☝️'، 
    K91: 'دوست داری DSI بخوری؟😂'، 
    K92: "پس شلوارت را در بیاور 😒"،
    K93: "دست لپت "، 
    K94: " خیلی بد😒"، 
    K95: '😌من بی گناهم و ارزش یک کشور را دارم 😁❤️', 
    K96: 'دستها... '، 
    K97: "😐نمی توان گذاشت😒"، 
    K98: " 
    K99: ' 🤭چرا؟ آیا شما ناراحت هستید؟🤨😏💔'، 
    K100: "💔عشق قلبم را آزار داد 🤧" 
    K101: '😹😹☝️'، 
    K102: "سگ گربه موش خرگوش روباه فیل😒"، 
    K103: ' خود اورولا گاتی'، 
    K104: "😐نمی توان گفت😒 چرا چی؟🙄"، 
    K105: '😐آیا فرار کنیم؟🤭 '، 
    K106: "☝️رفته، برنگرد😒"، 
    K107: '😅✌️😝'، 
    K108: "😂😂اگه خنده دار باشه مهم نباشه😌" 
    K109: "عصبانی هستم😒 چرا چی؟👎",
    K110: "چرا پاکو ", 
    K111: "لبا😒"، 
    K112: "چه بلایی سرت آمده؟🙄", 
    K113: '😒Palanna Ponnaya💔'، 
    K114: ' 💔🙏'، 
    K115: ' 💔☝️'، 
    K116: '😏😑 با یک زن بیا 🤨💔💔💔'، 
    K117: "الان نه بچه ها 🤭🤭 بعدا بدید😝😒"، 
    K118: "مشکل چیست؟😒", 
    K119: '😒👎'، 
    K120: "این را نگو، این گناه است"، 
    K121: ' 🙄'، 
    K122: "اوه تو گیر میکنی 🙂💔"، 
    K123: '😐بیایید حفظ کنیم😒😂😂'، 
    K124: "چرا به پوکا نگاه می کنی؟" 
    K125: "دو شما؟😂"، 
    K126: 'مال شما؟😂'،
    K127: ' بیایم در دهانم بگیرم؟ 
    K128: '😂😂هی'، 
    K129: '😏فقط صبر کنید'، 
    K130: '🤭فقط صبر نکن لباس بپوش😂❤️', 
    K131: '😂😂🙏'، 
    K132: '😂🤭'، 
    K133: '😁'، 
    K134: '😏☝️'، 
    K135: "پس گریه نکن 😒😝"، 
    K136: ' پیتو'، 
    K137: '🙂'، 
    K138: "😌😌", 
    K139: ' 💔'، 
    K140: '😍 😘💞💕💓💗💖❣️❤️'، 
    K141: '😐🙄'، 
    K142: " غمگین نباش❤️"،
    K144: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️',
    K145: ' 🤝'، 
    K146: "BALOCH EDIT" 
    K147: "شاید شب آینده، شبی از رویاهای دلخراش باشد، بیدار شدن در نیمه های شب غرق در عرق، ارواح که زیر تخت می آیند، سفالگرانی که از پنجره ها نگاه می کنند، یک شب وحشتناک😂👻👻❤️"
    }






let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
