"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("../aula07-classes/animal");
var dao_1 = require("./dao");
var cavalo_1 = require("../aula07-classes/cavalo");
var dao = new dao_1.Dao();
var daoCavalo = new dao_1.Dao();
var animal = new animal_1.Animal('Rex');
var cavalo = new cavalo_1.Cavalo('Titã');
//cavalo herda Animal, por isso pode usar o tipo generico de animal
dao.insert(cavalo);
daoCavalo.insert(cavalo);
//# sourceMappingURL=run.js.map