function criacartao(categoria, pergunta, resposta) {
    let container = document.getelementbyld('container')
    let cartao = document.createelement('article')
    cartao.classname = 'cartao'
    cartao.innerhtml = '
        < div class="cartao__conteudo" >
    <h3>${ categoria}</h3>
    <div class=cartao__conteudo__pergunta">
        < p > ${ pergunta }</p >
    </div >
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
        </div >