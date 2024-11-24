import * as allSkiers from './skifahrer-obj'
import * as users from './users'

// for (let i = 0; i < allSkiers.skiers.length; i++) {
//     let defaultski = allSkiers.skiers[i];
//     // console.log(defaultski)
// }
// for (let i = 0; i < allSkiers.worldCupSkier.length; i++) {
//     let WCski = allSkiers.worldCupSkier[i];
//     // console.log(WCski)
// }

//express modul einbetten ud´nd server starten

import express from 'express';
const app = express();

//server konfigurieren
const port = 4000;

//sattic file server starten
app.use(express.static(__dirname + '/../public'));

//server starten
app.listen(port,() =>{
    console.log('*************Server gestartet***************');
    console.log(`Erreichbar unter http://localhost:${port}`);
})

// //NGROK Tunnel öffnen
// import ngrok from 'ngrok';

// (async function () {
//     const url = await ngrok.connect({
//         authtoken: '2d20Tgdl3xeFjnAJxYVnRd6jnz0_4dXLzy2iRVZ5CKKVDr2HQ',
//         addr: port
//     });
//     console.log('***************ngrok Tunnel offen *********************')
//     console.log(url)
//     console.log('')
// })();


//GET ROUTE definieren - Default
//Hocht auf http://localhost:3000/get-skiers

app.get('/skiers', (_req, res) => {
    let answer_json = {
        'result': allSkiers.skiers
    }
    res.send(answer_json)
})  


//GET ROUTE definieren - WC
//Hocht auf http://localhost:3000/get-skiers
app.get('/worldCup-skiers', (_req, res) => {
    let answer_json = {
        'result': allSkiers.worldCupSkier
    }
    res.send(answer_json)
})  

//GET ROUTE definieren - Ski Map
//Hocht auf http://localhost:3000/get-skiers
app.get('/skiMap-Skiers', (_req, res) => {
    let answer_json = {
        'result': allSkiers.skiMapSkiers
    }
    res.send(answer_json)
})  

//GET Router User Authentifizierung
//Horcht auf http://localhoast:3000/auth-user
app.use(express.json())
app.post('/auth-user', (req, res) => {
    let uname = req.body.username;
    let upassword = req.body.password;

    let answer = {
        success: false
    };

    for (let i = 0; i < users.allusers.length; i++) {
        let trueUserName = users.allusers[i].username;
        let trueUserPassword = users.allusers[i].password;

        if (uname === trueUserName && upassword === trueUserPassword) {
            answer = {
                success: true
            };
        }
    }

    res.json(answer);
});