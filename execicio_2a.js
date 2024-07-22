const frm = document.querySelector("form")
const nmedicamento = document.querySelector("#outnomeMedicamento")
const pmedicamento = document.querySelector("#outprecomedicamento")


frm.addEventListener("submit", (e) => {    
    
    const medicamento = frm.nomeMedicamento.value
    const preco = Number(frm.precoMedicamento.value)
    const quantidade = Number(frm.qtdMedicamento.value) 
    const pagoComDesconto = (preco * 0.80)
    
    if (quantidade % 2 === 0 || quantidade === 2) {        
        nmedicamento.innerText = `Promoção de ${medicamento}`
        pmedicamento.innerText = `Leve ${quantidade} por apenas ${((pagoComDesconto*quantidade).toFixed(2))}`

    }else if(quantidade > 2 ) {

        const resut = Math.floor(quantidade-1)
        const resut2 = (quantidade%2)

        const precoCheioPromo = pagoComDesconto * resut
        const precoCheio = preco * resut2
        const total = precoCheio + precoCheioPromo         
        
        nmedicamento.innerText = `Voce esta levando ${quantidade} unidades, ${resut} unidades terá um descontonto de 20% e ${resut2} unidade não terá desconto, entrara com o preço cheio. \n ${resut} unidades = R$ ${precoCheioPromo.toFixed(2)} \n ${resut2} unidades = R$ ${precoCheio.toFixed(2)}`

        pmedicamento.innerText = `Total a pagar ${total.toFixed(2)}`
    }else {
        const precoCheio = preco * quantidade        
        pmedicamento.innerText = `Total a pagar ${precoCheio.toFixed(2)}`
        nmedicamento.innerText = `Voce esta comprando ${medicamento} \n Caso queira aderir a promoção  Multiplos de 2 e ganhe desconto de 20% você ira pagar ${pagoComDesconto.toFixed(2)} na unidade`
    }

    
    e.preventDefault()
    
})