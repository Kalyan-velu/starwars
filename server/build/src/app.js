"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var __dirname1 = path_1.default.resolve();
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
//Enabling Cors
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname1, '../client/dist')));
    app.get('*', function (request, response) {
        response.sendFile(path_1.default.resolve(__dirname1, "../client", "dist", "index.html"));
    });
}
else {
    app.get("/", function (request, response) {
        response.json({ message: "Server is Up" });
    });
}
exports.default = app;
