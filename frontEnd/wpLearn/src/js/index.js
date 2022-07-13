import Result from '../components/Result'
import InputGroup from '../components/InputGroup'
import BtnGroup from '../components/BtnGroup'
import Tool from '../tools/tool'

;((doc) => {
    const root = doc.querySelector('.J_Calculator')

    function init() {
        let comps = [createComp(Result), createComp(InputGroup), createComp(BtnGroup)]
        render(comps)
        bindEvent()
    }

    function createComp(comp) {
        const wraper = doc.createElement('div')
        const component = new comp()
        wraper.innerHTML = component.tpl()
        wraper.className = component.name
        return wraper
    }

    function render(args) {
        const oFrag = doc.createDocumentFragment()
        args.forEach(i => {
            oFrag.appendChild(i)
        })
        root.appendChild(oFrag)
    }

    function bindEvent() {
        const oBtn = doc.querySelector('.BtnGroup')
        console.log(oBtn)
        oBtn.addEventListener('click', (e) => {
            const ev = e || window.event
            const tar = ev.target || ev.srcElement
            if (tar.tagName.toLowerCase() === 'button') {
                const method = tar.getAttribute('data-method')
                const fVal = doc.querySelectorAll('.oInput')[0].value
                const sVal = doc.querySelectorAll('.oInput')[1].value

                getResult(method, Number(fVal), Number(sVal))
            }

        }, false)
    }

    function getResult(method, fVal, sVal) {
        const res = doc.querySelector('.result')
        const tool = new Tool(...arguments)
        res.innerText = '计算的结果是：' + tool.doComput()
    }

    init()
})(document);