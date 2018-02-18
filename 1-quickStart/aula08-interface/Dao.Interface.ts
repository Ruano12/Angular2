export interface DaoInterface {

    tableName: String;

    insert(object: any): boolean;
    update(object: any): boolean;
    delete(id: number):any;
    find(id: number):any;
    findAll(): [any];

}