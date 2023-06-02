export default class Game {
  id: number
  title: string
  imageURL: string

  constructor(_id: number, _title: string, _imageURL: string) {
    this.id = _id
    this.title = _title
    this.imageURL = _imageURL
  }
}
