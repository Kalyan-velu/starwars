"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var graphql_tag_1 = require("graphql-tag");
exports.typeDefs = (0, graphql_tag_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Movie{\n    title:String!\n    episode_id:Int\n    opening_crawl:String\n    producer:String\n    release_date:String\n  }\n  \n  type Query{\n    movie(id:Int!):Movie\n    movies:[Movie]\n  }\n"], ["\n  type Movie{\n    title:String!\n    episode_id:Int\n    opening_crawl:String\n    producer:String\n    release_date:String\n  }\n  \n  type Query{\n    movie(id:Int!):Movie\n    movies:[Movie]\n  }\n"])));
var templateObject_1;
