export const compute = (target) => {
    target.prototype.plus = (a, b) => a + b
    target.prototype.minus = (a, b) => a - b
    target.prototype.mul = (a, b) => a * b
    target.prototype.div = (a, b) => a / b
}