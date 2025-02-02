const app = Vue.createApp({
    // data, functions
    data () {
        return {
            url: 'http://www.thenetninja.co.uk',
            title: 'The Final Empire',
            club: 'Turma do Cocoricó',
            name: 'Jan',
            age: 25,
            showBooks: true,
            x: 0,
            y: 0,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true }
            ]
        }
    },
    methods: {
        changeTitle() {
            if(this.club == 'Turma da Mônica')
                this.club = 'Turma do Cocoricó'
            else
                this.club = 'Turma da Mônica'
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        handleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')