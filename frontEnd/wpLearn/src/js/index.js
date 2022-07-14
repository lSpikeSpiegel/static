import Result from '../components/Result'
import InputGroup from '../components/InputGroup'
import BtnGroup from '../components/BtnGroup'
import Tool from '../tools/tool'
; ((doc) => {
    function init() {
        let comps = [createComp(Result), createComp(InputGroup), createComp(BtnGroup)]
        const root = document.querySelector('.J_Calculator')
        render(comps, root)
        new Tool(root)
    }

    function createComp(comp) {
        const wraper = doc.createElement('div')
        const component = new comp()
        wraper.innerHTML = component.tpl()
        wraper.className = component.name
        return wraper
    }

    function render(comps, root) {
        const oFrag = doc.createDocumentFragment()
        comps.forEach(i => {
            oFrag.appendChild(i)
        })
        root.appendChild(oFrag)
    }

    init()
})(document);