const PI = 3.1416
const INCHES_TO_FEET = 0.083333

const exportObject = {
    PI,
    INCHES_TO_FEET,
    sum(n1, n2){
        return n1 + n2
    },
    substract(n1, n2){
        return n1 - n2
    }
}

console.log(exportObject)


