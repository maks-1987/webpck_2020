export default class Post { // по умолчанию экспортировать класс
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

    get uppercaseTitli() {
        return this.title.toUpperCase()
    }
}