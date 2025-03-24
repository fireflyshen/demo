interface A {
    id:number,
    name:string
}

interface B {
    name:string
}


let a:A = {
    id: 1,
    name :"1"
}

let b:B = {
    name: "2"
}

b = a;