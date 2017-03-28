import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../components/find/not-found'


import Find from '../components/find/index.js'
import Personal from '../components/personal/index.js'
import Cloud from '../components/cloud/index.js'
import Download from '../components/download/index.js'
import Friend from '../components/friend/index.js'
import Local from '../components/local/index.js'
import Mv from '../components/mv/index.js'
import Singer from '../components/singer/index.js'
import Station from '../components/station/index.js'


Vue.use(Router)

export default new Router({
  routes: [
    Find,
    Personal,
    Cloud,
    Download,
    Friend,
    Local,
    Mv,
    Singer,
    Station,
    {
      path: '*',
      redirect: '/find/recommend',
    }
  ]
})
