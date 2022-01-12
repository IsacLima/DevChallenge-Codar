const menuItens = document.querySelectorAll('.menu a[href^="#"]');

function scrollParaSecao(to){
	window.scroll({
		top: to,
		behavior: 'smooth'
	})
}

function topoDaSecao(event){
	event.preventDefault();
	var topo = document.getElementById(event.currentTarget.hash).offsetTop;
	if(event.currentTarget.hash != "#rodape"){
		topo = topo - 100;
	}
	scrollParaSecao(topo);
}

menuItens.forEach(item =>{
	item.addEventListener('click', topoDaSecao)
})

