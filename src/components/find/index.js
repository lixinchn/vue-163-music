import Recommend from './recommend'
import Song from './song'
import Nav from './nav'
import Station from './station'
import Rank from './rank'
import New from './new'
import Singer from './singer'


export default{
  path: '/find',
  name: 'find',
  component: Nav,
  redirect: '/find/recommend',
  children: [
    {
      path: 'recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: 'song',
      name: 'song',
      component: Song
    },
    {
      path: 'station',
      name: 'station',
      component: Station
    },
    {
      path: 'singer',
      name: 'singer',
      component: Singer
    },
    {
      path: 'new',
      name: 'new',
      component: New
    },
    {
      path: 'rank',
      name: 'rank',
      component: Rank
    }
  ]
}
