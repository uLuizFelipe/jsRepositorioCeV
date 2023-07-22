function ação(num) {
    if(num%2==0) {
        return `par`
    }
        else {
            return `impar`
        }
}

let num = ação(8)
console.log(`${num}`)

function soma(num1, num2) {
    return num1+num2
}

console.log(`${soma(2, 7)}`)
// caso um parametro não seja passado, é possivel pre setar um valor padrão
//function subtração (num1 = 0, num2 = 10) {}

//funções recursivas podem ser usadas
function fatorial(num) {
    if (num == 1) {
        return 1
    }
        else {
            return num * fatorial(num-1)
        }
}

console.log(fatorial(5))