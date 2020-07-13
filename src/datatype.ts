// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
// str = 1  修改变量类型，报错

// 数组
let arr1: number[] = [1,2,3]
let arr2: Array<string | number> = ['123', 'b', 5]

// 元组
let tuple: [number, string] = [0, '1']
tuple.push(2)   // 可以添加，但不可访问
console.log(tuple, 'tuple')
// tuple[2] 

// 函数 
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: {x: number, y: string} = {x: 1, y: 'b'}
obj.x = 3

// symbol -- 具有唯一的值
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 == s2)

// undefined, null
let un: undefined = undefined   // 声明为 undefined 不能被赋值为其他类型
let nu: null = null
// 报错 - 可修改 tsconfig.json 中的 strictNullChecks 为 false，或者声明num时使用联登类型
num = undefined     // 报错
num = null

// void 没有任何返回值的类型
let noReturn = () => {}

// any
let x
x = 1
x = true
x = 'b'
x = () => {}

// never - 永远不会有返回值的函数
let error = () =>{
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}