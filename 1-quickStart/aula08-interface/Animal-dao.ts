import { DaoInterface } from "./Dao.Interface";
import { Animal } from './../aula07-classes/animal';

export class AnimalDao implements DaoInterface{
    tableName:string = '';

    insert(object: Animal):boolean{
        console.log("inserind");
        object.move(50)
        return true;
    }

    update(object: Animal):boolean{
        return true;
    }

    delete(id: number):Animal{
        return null;
    }

    find(id: number):Animal{
        return null;
    }

    findAll():[Animal]{
        return [new Animal('Rex')];
    }
}