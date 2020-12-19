export default class Post { // по умолчанию экспортировать класс
    constructor(title, img) {
        this.title = title
        this.img = img
        this.date = new Date()
    }

    toString() {  // будет сериализовать данные из этого ПОСТА
        return JSON.stringify({ // stringify - функция обернет объект в СТРОКУ
            title: this.title,
            date: this.date.toJSON(),
            img: this.img
        }, null, 2)
    }

    get uppercaseTitli() {
        return this.title.toUpperCase()
    }
}