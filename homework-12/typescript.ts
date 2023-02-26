// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

interface UserInterface {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
};

const maxMustermann: UserInterface = {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
};

const kateMuller: UserInterface = {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
};

// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейc Person, который будет соответствовать массиву

interface UserInterface {
    name: string,
    age: number,
    role: 'User'
};

interface AdminInterface {
    name: string,
    age: number,
    role: 'Admin'
};

interface PersonInterface {
    name: string,
    age: number,
    occupation?: string,
    role?: string
};

const persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];


// 3. Напишите анотации типов к этому классу.
interface ObjectManipulatorInterface {
    set(key: string, value: any): ObjectManipulatorInterface;
    get(key: string): any;
    delete(key: string): ObjectManipulatorInterface;
    getObject(): ObjectManipulatorInterface;
}

export class ObjectManipulator implements ObjectManipulatorInterface {

    constructor(protected obj) {
    }

    public set(key: string, value: any) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: any) {
        return this.obj[key];
    }

    public delete(key: string) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}
