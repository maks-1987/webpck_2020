export default class Post {
    constructor(title) {
        this.title = title
        this.date = new Date()
    }


    toString() {  // будет сериализовать данные из этого ПОСТА
        return JSON.stringify({ // stringify - функция обернет объект в СТРОКУ
            title: this.title,
            date: this.date.toJSON()
        })
    }
}