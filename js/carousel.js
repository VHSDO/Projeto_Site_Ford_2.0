let carouselArr = [];

class Carousel {
    constructor(imagem, titulo, link){
        this.imagem = imagem;
        this.titulo = titulo;
        this.link = link;    
    }

    static Start(arr){
        if (!arr || arr.length === 0){
            throw "Você precisa fornecer um array com imagens.";
        }
    
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel._interval = setInterval(() => Carousel.AutoNext(), 3000); // muda automaticamente a cada 3 segundos
        Carousel.Next(); // mostra primeira imagem
    }

    static Next() {
        let container = document.getElementById("carrossel");
        let title = document.getElementById("titulo-carrossel");
        let item = carouselArr[Carousel._sequence];

        container.innerHTML = `
            <button onclick="voltarImagem()"> < </button>
            <a href="${item.link}">
                <img src="img/${item.imagem}" alt="${item.titulo}">
            </a>
            <button onclick="passarImagem()"> > </button>
        `;

        title.innerText = item.titulo;
    }

    static AutoNext() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel.Next();
    }
}

function passarImagem() {
    Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    Carousel.Next(); 
}

function voltarImagem() {
    Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
    Carousel.Next(); 
}