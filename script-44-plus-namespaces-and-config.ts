//lessons 44 % 45:
//namespaces and config.json

//If I understood correctly, namespaces
//basically are used just to define scopes.
//see the examples below of exported and not exported classes.

namespace FirstNameSpace {

    class NotExported {
        name: string;
    }

    export class NameSpaceClass {
        id: number;
    }
}

namespace SecondNameSpace {

    export class NameSpaceClass {
        age: number;
    }
}

let firstNameSpace = new FirstNameSpace.NameSpaceClass();
let notExported = new FirstNameSpace.NotExported();
//why an error here? that class doesn't get exported outside the namespace.

let secondNameSpace = new SecondNameSpace.NameSpaceClass();

//tscongif.json
//when it's in a directory, it indicates that the directory is the root.
//it specifies the root files and compiler options.

//check out the tsconfig.json file for more.

