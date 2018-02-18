"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_dao_1 = require("./Animal-dao");
var animal_1 = require("../aula07-classes/animal");
var dao = new Animal_dao_1.AnimalDao();
var animal = new animal_1.Animal('Rex');
dao.insert(animal);
//# sourceMappingURL=run.js.map