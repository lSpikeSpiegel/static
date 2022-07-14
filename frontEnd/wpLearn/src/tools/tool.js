import { compute } from "./compute";

@compute
export default class Tool {
    constructor(dom) {
        this.root = dom
        this.oBtn = this.root.querySelector('.BtnGroup')
        this.oInput = this.root.querySelector('.InputGroup')
        this.data = this.defaineData()
        this.bindEvent()
    }
    
    defaineData() {
        const that = this
        const _obj = {}
        let method = 'plus',
            fVal = 0,
            sVal = 0;

        Object.defineProperties(_obj, {
            method: {
                get() {
                    return method
                },
                set(val) {
                    method = val
                    that.doComput()
                }
            },
            fVal: {
                get() {
                    return fVal
                },
                set(val) {
                    fVal = val
                    that.doComput()
                }
            },
            sVal: {
                get() {
                    return sVal
                },
                set(val) {
                    sVal = val
                    that.doComput()
                }
            },
        })

        return _obj
    }

    bindEvent() {
        this.oBtn.addEventListener('click', this.onBtnClick.bind(this), false)
        this.oInput.addEventListener('input', this.onInput.bind(this), false)
    }

    onBtnClick(e) {
        const tar = this.getTarget(e)
        if (tar.tagName.toLowerCase() === 'button') {
            const key = tar.getAttribute('data-key')
            const val = tar.getAttribute('data-val')

            const btns = this.oBtn.querySelectorAll('.oBtn')
            const oldAct = this.root.querySelector('.oBtn.active')
            oldAct.className = 'oBtn'
            const nowIdx = [].indexOf.call(btns, tar)
            console.log(nowIdx)
            btns[nowIdx].className += ' active'

            this.setVal(key, val)
        }
    }

    onInput(e) {
        const tar = this.getTarget(e)
        const key = tar.getAttribute('data-key')
        const val = Number(tar.value)
        this.setVal(key, val)
    }

    getTarget(e) {
        const ev = e || window.event
        const tar = ev.target || ev.srcElement
        return tar
    }

    setVal(key, val) {
        this.data[key] = val
    }

    doComput() {
        const res = this.root.querySelector('.result')
        res.innerText = '计算的结果是：' + this[this.data.method](this.data.fVal, this.data.sVal)
    }
}