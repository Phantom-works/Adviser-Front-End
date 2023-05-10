export default class Game {
  id: number
  title: string
  developer: string
  releaseDate: string
  genre: string
  platforms: string[]
  imageURL: string

  constructor(
    _id: number,
    _title: string,
    _developer: string,
    _releaseDate: string,
    _genre: string,
    _platforms: string[],
    _imageURL: string
  ) {
    this.id = _id
    this.title = _title
    this.developer = _developer
    this.releaseDate = _releaseDate
    this.genre = _genre
    this.platforms = _platforms
    this.imageURL = _imageURL
  }
}
