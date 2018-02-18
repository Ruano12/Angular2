import { DaoInterface } from "./Dao.Interface";
import { AnimalDao } from "./Animal-dao";
import { Animal } from "../aula07-classes/animal";


let dao:DaoInterface = new AnimalDao();
let animal:Animal = new Animal('Rex');

dao.insert(animal);