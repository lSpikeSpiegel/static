import { compute } from "./compute";

@compute
export default class Tool {
    constructor(method, fVal, sVal) {
        this.method = method
        this.fVal = fVal
        this.sVal = sVal
    }

    doComput() {
        return this[this.method](this.fVal, this.sVal)
    }
}