
/* 
    Descrizione:
    Partendo dal markup consegnato rendere dinamici tutti i contenuti (foto e testi) e al click su una thumb, visualizzare in grande l’immagine corrispondente
    Bonus:
    1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
    2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

    1. Al click di una thumb la classe Active deve spostarsi;
    2. Al click della thumb il contenuto ella div.item deve cambiare in accordo con la card cliccata;

    BONUS
 */


const app = new Vue ({
    
    el: '#app',

    data: {

        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],

        activeSlide: 0
    },

    methods: {
        prevImage(){
            this.activeSlide--;
            if(this.activeSlide ===  - 1){
                this.activeSlide = 4;
            }
            // console.log(this.activeSlide)
        },

        nextImage(){
            this.activeSlide++;
            if(this.activeSlide === this.slides.length){
                this.activeSlide = 0;
            }
            // console.log(this.activeSlide)
        }
    }
})