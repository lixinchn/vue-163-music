import Recommend from './recommend'
import Song from './song'
import Nav from './nav'
import Station from './station'
import Rank from './rank'
import New from './new'
import Singer from './singer'


export default{
  path: '/find',
  component: Nav,
  redirect: '/find/recommend',
  children: [
    {
      path: 'recommend',
      component: Recommend
    },
    {
      path: 'song',
      component: Song
    },
    {
      path: 'station',
      component: Station
    },
    {
      path: 'singer',
      component: Singer
    },
    {
      path: 'new',
      component: New
    },
    {
      path: 'rank',
      component: Rank
    }
  ]
}
