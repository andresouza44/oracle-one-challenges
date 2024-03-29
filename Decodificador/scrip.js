const textArea = document.querySelector('.decriptador__conteudo_texto')

const areaResposta = document.querySelector('.decriptador__resposta')

const areaRespostaImagem = document.querySelector('.decriptador__resposta__imagem')
const areaRespostaTexto = document.querySelector('.decriptador__resposta__texto')

const areaRaspostaObservacao = document.querySelector('.decriptador__resposta__observacao')


const btnCriptografar = document.querySelector('.decriptador__conteudo__botao__criptografar')
const btnDecriptografar = document.querySelector('.decriptador__conteudo__botao__decriptografar')

const btnCopiar = document.querySelector('.decriptador__resposta__botao')



const criptografar = () =>{
    btnCopiar.innerHTML = 'Copiar';
    let texto = (textArea.value).toLowerCase()
    if (texto ==='') return
    const vogais = ['a','e','i','o','u']
    let textoArray = Array.from(texto)
    textoArray.forEach( (letra, index) =>{
        if (vogais.includes(letra)){
            textoArray[index]=criptografarLetra(letra)
        }
    })

    textoArray = textoArray.join('')
    areaRespostaImagem.style.display='none'
    areaRaspostaObservacao.style.display='none'
    areaRespostaTexto.textContent = textoArray
    btnCopiar.style.display='block'

}

const criptografarLetra = letra =>{
    const conversao = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    };

    return conversao[letra];
}

const decriptografar = () =>{
    btnCopiar.innerHTML = 'Copiar';
    let textoDecriptografado = (textArea.value).toLowerCase()
    if (textoDecriptografado ==='') return
    
    const padrãoSubstitui = {
        ai:'a',
        enter:'e',
        imes:'i',
        ober:'o',
        ufat:'u',      
    }

    const substituir = ((padraoProcura,substitui)=>{
        let regex = new RegExp(padraoProcura,'g')
        textoDecriptografado = textoDecriptografado.replace(regex,substitui)
    })

    Object.entries(padrãoSubstitui).forEach(([padraoProcura, substitui])=>{
        substituir(padraoProcura,substitui)
    })
    
    areaRespostaImagem.style.display='none'
    areaRaspostaObservacao.style.display='none'
    btnCopiar.style.display='block'
    areaRespostaTexto.textContent = textoDecriptografado

}
   

const copiarTexto = () =>{
    const textoCopia = areaRespostaTexto.textContent
    navigator.clipboard.writeText(textoCopia)
    btnCopiar.innerHTML = 'Copiado!'
   
}

btnCriptografar.addEventListener('click', event =>{
    event.preventDefault()
    criptografar()
})

btnDecriptografar.addEventListener('click', event =>{
    event.preventDefault()
    decriptografar()
})

btnCopiar.addEventListener('click', event =>{
    event.preventDefault()
    copiarTexto()


})

