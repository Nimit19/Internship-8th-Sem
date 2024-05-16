"use strict";
// import express, { Express } from "express";
// import http from "http";
// import path from "path";
// import { Server, Socket } from "socket.io";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app: Express = express();
// const server = http.createServer(app);
// app.use(express.static("/public"));
// app.get("/", (req, res) => {
//   return res.sendFile(path.resolve("./public/index.html"));
// });
// const io = new Server(server);
// io.on("connection", (socket: Socket) => {
//   socket.on("user-message", (message: string) => {
//     console.log(`Message received: ${message} from ${socket.id}`);
//     io.emit("message", message); // Broadcast to all clients
//   });
//   socket.on("disconnect", () => {
//     console.log("User disconnected");
//   });
// });
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
// IMPORT PACKAGES
var express_1 = require("express");
var easyinvoice_1 = require("easyinvoice");
var fs_1 = require("fs");
var path_1 = require("path");
// APP
var app = (0, express_1.default)();
// IMAGE PATH
var imgPath = path_1.default.resolve("img", "invoice.png");
// Function to encode file data to base64 encoded string
function base64_encode(img) {
    // read binary data
    var png = fs_1.default.readFileSync(img);
    // convert binary data to base64 encoded string
    return Buffer.from(png).toString("base64");
}
// DATA OBJECT
var data = {
    //"documentTitle": "RECEIPT", //Defaults to INVOICE
    currency: "EUR",
    taxNotation: "vat", //or gst
    marginTop: 25,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    // logo: `${base64_encode(imgPath)}`, //or base64
    //"logoExtension": "png", //only when logo is base64
    sender: {
        company: "Buy Me A Gradient",
        address: "Corso Italia 13",
        zip: "1234 AB",
        city: "Milan",
        country: "IT",
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    client: {
        company: "Client Corp",
        address: "Clientstreet 456",
        zip: "4567 CD",
        city: "Clientcity",
        country: "Clientcountry",
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    invoiceNumber: "2020.0001",
    invoiceDate: "05-01-2020",
    products: [
        {
            quantity: "2",
            name: "Foood",
            description: "Test1",
            tax: 6,
            price: 33.87,
        },
        {
            quantity: "4",
            name: "Foood",
            description: "Test2",
            tax: 21,
            price: 10.45,
        },
    ],
    bottomNotice: "Kindly pay your invoice within 15 days.",
};
// INVOICE PDF FUNCTION
var invoicePdf = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //Create your invoice! Easy!
                console.log("hoooo");
                return [4 /*yield*/, easyinvoice_1.default.createInvoice(data)];
            case 1:
                result = _a.sent();
                fs_1.default.writeFileSync("./invoice/invoice".concat(Date.now(), ".pdf"), result.pdf, "base64");
                return [2 /*return*/];
        }
    });
}); };
invoicePdf();
// SERVER LISTENER
var PORT = 3001;
app.listen(PORT, function () {
    console.log("Server beating...");
});
