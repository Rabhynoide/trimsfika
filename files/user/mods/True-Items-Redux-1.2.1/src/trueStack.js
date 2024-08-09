"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrueStack = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/brace-style */
const tsyringe_1 = require("/snapshot/project/node_modules/tsyringe");
const DatabaseServer_1 = require("/snapshot/project/obj/servers/DatabaseServer");
const ILogger_1 = require("/snapshot/project/obj/models/spt/utils/ILogger");
const LogTextColor_1 = require("/snapshot/project/obj/models/spt/logging/LogTextColor");
let TrueStack = class TrueStack {
    db;
    logger;
    barterConfig = require("../config/barter.json");
    clothingConfig = require("../config/clothing.json");
    medicalConfig = require("../config/medicals.json");
    partsnmodsConfig = require("../config/partsnmods.json");
    provisionsConfig = require("../config/provisions.json");
    keycardsConfig = require("../config/keycards.json");
    items;
    FEATURE_NAME = "[True Stack]";
    MSG_CHANGING = "Changing";
    MSG_DONE = "Done";
    constructor(db, logger) {
        this.db = db;
        this.logger = logger;
        this.items = db.getTables().templates.items;
        this.Log(this.MSG_CHANGING);
        this.changeSettings(this.clothingConfig);
        this.changeSettings(this.provisionsConfig);
        this.changeSettings(this.medicalConfig, true);
        this.changeSettings(this.barterConfig);
        this.changeParentSettings(this.partsnmodsConfig);
        this.changeParentSettings(this.keycardsConfig);
        this.Log(this.MSG_DONE);
    }
    changeSettings(data, isMedical = false) {
        if (!this.isActive(data))
            return;
        for (const itemInfoIndex in data.List) {
            const itemInfo = data.List[itemInfoIndex];
            this.forEachItem(itemInfo._id, false, isMedical, itemInfo._props.StackMaxSize, data.StackMult);
        }
    }
    changeParentSettings(data) {
        if (!this.isActive(data))
            return;
        for (const ParentInfoIndex in data.ParentList) {
            const parentInfo = data.ParentList[ParentInfoIndex];
            this.forEachItem(parentInfo._id, true, false, parentInfo.StackMaxSize, data.StackMult);
        }
    }
    forEachItem(id, isParent = false, isMedical = false, stackMaxSize, stackMult) {
        for (const itemDBIndex in this.items) {
            const item = this.items[itemDBIndex];
            // validations to prevent errors
            if (item._props === undefined)
                continue;
            if (isParent === true && item._parent != id) {
                continue;
            }
            else if (item._id != id)
                continue;
            if (item._props.StackMaxSize === undefined)
                continue;
            if (isMedical === true) {
                if (item._props.MaxHpResource === undefined)
                    continue;
                if (item._props.MaxHpResource > 0)
                    continue;
            }
            item._props.StackMaxSize = stackMaxSize * stackMult;
            item._props.StackMinRandom = 1;
            break;
        }
    }
    isActive(data) {
        if (data === undefined)
            return false;
        if (data.Active === false)
            return false;
        return true;
    }
    Log(message) {
        this.logger.logWithColor("[True Items]" + this.FEATURE_NAME + " " + message, LogTextColor_1.LogTextColor.CYAN);
    }
};
exports.TrueStack = TrueStack;
exports.TrueStack = TrueStack = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("DatabaseServer")),
    __param(1, (0, tsyringe_1.inject)("WinstonLogger")),
    __metadata("design:paramtypes", [typeof (_a = typeof DatabaseServer_1.DatabaseServer !== "undefined" && DatabaseServer_1.DatabaseServer) === "function" ? _a : Object, typeof (_b = typeof ILogger_1.ILogger !== "undefined" && ILogger_1.ILogger) === "function" ? _b : Object])
], TrueStack);
//# sourceMappingURL=trueStack.js.map