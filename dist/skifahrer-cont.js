"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allSkiers = __importStar(require("./skifahrer-obj"));
const users = __importStar(require("./users"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.static(__dirname + '/../public'));
app.listen(port, () => {
    console.log('*************Server gestartet***************');
    console.log(`Erreichbar unter http://localhost:${port}`);
});
app.get('/skiers', (_req, res) => {
    let answer_json = {
        'result': allSkiers.skiers
    };
    res.send(answer_json);
});
app.get('/worldCup-skiers', (_req, res) => {
    let answer_json = {
        'result': allSkiers.worldCupSkier
    };
    res.send(answer_json);
});
app.get('/skiMap-Skiers', (_req, res) => {
    let answer_json = {
        'result': allSkiers.skiMapSkiers
    };
    res.send(answer_json);
});
app.use(express_1.default.json());
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
