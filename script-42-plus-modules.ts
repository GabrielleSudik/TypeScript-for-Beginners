//lessons 42 & 43: modules

//modules only execute within their own scope
//unless they are exported. hence...
//imports and exports.

//there are a bunch of common libraries out there
//that are also imported modules.

//"export" needed if another file will use it.
export class abc {
    a: string;
    b: string;

    constructor(private _a: string, private _b: string) {
        this.a = _a;
        this.b = _b;
    }
}

export class def {
    age: number;
}

//another way to export:
class ghi {
    name: string;
}

export { ghi as Name };

////////
//Pretend the following is another file:
////////

import { abc } from './script-42-plus-modules';

//let myABC = new abc(_a: 'xyz', _b: 'uvw'); //still with the errors.
let myABC = new abc('xyz', 'uvw');

//change an import's name:
import { abc as Alphabet } from './script-42-plus-modules';

//import multiple classes from the same file:
import * as SomeName from './script-42-plus-modules';

let myDEF = new SomeName.def(); //needs SomeName because that's the collection's name

let myGHI = new SomeName.Name(); //ref's Name not ghi because you exported ghi as Name.

