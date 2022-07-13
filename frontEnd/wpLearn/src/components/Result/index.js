import tpl from './index.tpl'

export default class Result {
    constructor() {
        this.name = "Result"
    }

    tpl() {
        console.log(tpl)
        return tpl()
    }
}