function build(code, documentElement) {
    function append(elem, childs) {
        childs.forEach((child) => {
            var element = document.createElement(child[0])
            Object.entries(child[1]).forEach((e) => {
                element[e[0]] = e[1]
            })
            elem.appendChild(element)
            if (Object.keys(child[1]).includes('childs')) {
                append(element, child[1].childs)
            }
        })
    }
    document.documentElement.innerHTML = "";
    do {
        if (document.documentElement.attributes.length > 0) {
            document.documentElement.removeAttribute(document.documentElement.attributes[0].name);
        }
    } while (document.documentElement.attributes.length > 0)
    Object.entries(documentElement).forEach((attribute) => {
        document.documentElement[attribute[0]] = attribute[1]
    })
    code.forEach((item) => {
        var ele = document.createElement(item[0])
        if (Object.keys(item[1]).includes('childs')) {
            append(ele, item[1].childs)
        }
        Object.entries(item[1]).forEach((entr) => {
            ele[entr[0]] = entr[1]
        })
        document.documentElement.appendChild(ele)
        if (item[0] === "head") {
            document.documentElement.removeChild(document.head);
        } else if (item[0] === "body") {
            document.documentElement.removeChild(document.body)
        }
    })   
}