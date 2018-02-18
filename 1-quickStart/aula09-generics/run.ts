import { Animal } from "../aula07-classes/animal";
import { Dao} from "./dao"; 
import { Cavalo } from "../aula07-classes/cavalo";

let dao: Dao<Animal> = new Dao<Animal>();
let daoCavalo: Dao<Cavalo> = new Dao<Cavalo>();
let animal: Animal = new Animal('Rex');
let cavalo:Cavalo = new Cavalo('Titã');

//cavalo herda Animal, por isso pode usar o tipo generico de animal
dao.insert(cavalo);


daoCavalo.insert(cavalo);