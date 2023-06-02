import API from '@/Service/API'
import type Game from '@//Model/Game'
import type Category from '@/Model/Category'

export default {
  FetchGames: function (_categories: Category[]): Promise<Game[]> {
    let games: Game[] = []

    const categoryTitles: string[] = _categories.map((_categories) => _categories.title)
    const data = { genres: categoryTitles }

    return API()
      .post('/Games', data)
      .then((response) => {
        games = response.data.map((game: { id: any; name: any; cover: { url: any } }) => {
          console.log(game)

          return {
            id: game.id,
            title: game.name,
            imageURL: game.cover.url
          }
        })

        console.log(games)

        return games
      })
      .catch(() => {
        return games
      })
  }
}
