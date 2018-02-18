export interface DaoInterface<T> {

    tableName: String;

    insert(object: T): boolean;
    update(object: T): boolean;
    delete(id: number):T;
    find(id: number):T;
    findAll(): Array<T>;

}