import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test for formatcurrency:')
if (formatCurrency(2005) === '20.05') {
    console.log('passed');
} else {
    console.log('failed');
}
console.log('work on 0:')
if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}
console.log('work on 20.005:')
if (formatCurrency(20004) === '200.04') {
    console.log('passed');
} else {
    console.log('failed');
}