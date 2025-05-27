export const categoryExpandQuery = 'category:categories(*)'
const categoryIdQuery = 'categoryId:category_id'

export const genreExpandQuery = 'genre:genres(*)'
const genreIdQuery = 'genreId:genre_id'

export const seasonExpandQuery = 'season:seasons(*)'
const seasonIdQuery = 'seasonId:season_id'

const all_enum_expand_queries = [
  Object.values([
    categoryExpandQuery,
    genreExpandQuery,
    seasonExpandQuery,
  ]).join(','),
]
const all_enum_id_queries = [
  Object.values([categoryIdQuery, genreIdQuery, seasonIdQuery]).join(','),
]

const publicName = 'publicName:public_name'

export const leagueIdQuery = `leagueId:league_id`
export const leagueRawQuery = `id, name, ${all_enum_id_queries}`
export const leagueEntityQuery = `id, name, ${all_enum_expand_queries}`
export const leagueExpandQuery = `league:leagues(${leagueEntityQuery})`

export const stadiumIdQuery = 'stadiumId:stadium_id'
export const stadiumRawQuery = 'id,name,address,town,province,url'
export const stadiumEntityQuery = 'id,name,address,town,province,url'
export const stadiumExpandQuery = `stadium:stadiums(${stadiumEntityQuery})`

export const clubIdQuery = 'clubId:club_id'
export const clubRawQuery = '*'
export const clubEntityQuery = `*, stadiums(id,name,address,town,province,url)`
export const clubExpandQuery = `club:clubs(${clubEntityQuery})`

export const teamIdQuery = 'teamId:team_id'
export const teamListQuery = 'id, name, publicName:public_name'
export const teamRawQuery = `id, name, publicName:public_name, ${all_enum_expand_queries}, ${leagueIdQuery}, ${clubIdQuery}, ${stadiumIdQuery}`
export const teamEntityQuery = `id, name, ${publicName}, ${all_enum_expand_queries}, ${leagueExpandQuery}, ${clubExpandQuery}, ${stadiumExpandQuery}`
export const teamExpandQuery = `team: teams(${teamEntityQuery})`
