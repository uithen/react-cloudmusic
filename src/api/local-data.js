// 将用到的一些列表定义成本地数据,使用时直接遍历,避免在jsx里多次编写NavLink/Link/a

export const headerLinks = [
  {
    title: '发现音乐',
    link: '/discover'
  },
  {
    title: '我的音乐',
    link: '/mine'
  },
  {
    title: '朋友',
    link: '/friend'
  },
  {
    title: '商城',
    link: 'https://music.163.com/store/product'
  },
  {
    title: '音乐人',
    link: 'https://music.163.com/nmusician/web/index#/'
  },
  {
    title: '下载客户端',
    link: 'https://music.163.com/#/download'
  }
]

export const footerLinks = [
  {
    title: '服务条款',
    link: 'https://st.music.163.com/official-terms/service'
  },
  {
    title: '隐私政策',
    link: 'https://st.music.163.com/official-terms/privacy'
  },
  {
    title: '儿童隐私政策',
    link: 'https://st.music.163.com/official-terms/children'
  },
  {
    title: '版权投诉指引',
    link: 'https://music.163.com/st/staticdeal/complaints.html'
  },
  {
    title: '意见反馈',
    link: '#'
  }
]

export const footerImages = [
  {
    link: 'https://music.163.com/st/userbasic#/auth'
  },
  {
    link: 'https://music.163.com/recruit'
  },
  {
    link: 'https://music.163.com/web/reward'
  },
  {
    link: 'https://music.163.com/uservideo#/plan'
  }
]

export const subNav = [
  {
    title: '推荐',
    link: '/discover'
  },
  {
    title: '排行榜',
    link: '/discover/ranking'
  },
  {
    title: '歌单',
    link: '/discover/songs'
  },
  {
    title: '主播电台',
    link: '/discover/djradio'
  },
  {
    title: '歌手',
    link: '/discover/artist'
  },
  {
    title: '新碟上架',
    link: '/discover/album'
  },
]


// 推荐页-热门主播(该数据接口未找到)
export const hotDjRadio = [
  {
    picUrl: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40',
    name: '陈立',
    position: '心理学家、美食家陈立教授',
    url: '/user/home?id=278438485'
  },
  {
    picUrl: 'http://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40',
    name: '刘维-Julius',
    position: '歌手、播客节目《维维道来》主理人',
    url: '/user/home?id=559210341',
  },
  {
    picUrl: 'http://p1.music.126.net/S7dd9GvTPwl5IHym8qF8VA==/109951164999332400.jpg?param=40y40',
    name: '莫非定律MoreFeel',
    position: '男女双人全创作独立乐团',
    url: '/user/home?id=259292486',
  },
  {
    picUrl: 'http://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40',
    name: '碎嘴许美达',
    position: '脱口秀网络红人',
    url: '/user/home?id=1450418799',
  },
  {
    picUrl: 'http://p1.music.126.net/CpUdHPNvBvN7kebvL21TTA==/109951163676573083.jpg?param=40y40',
    name: '银临Rachel',
    position: '古风音乐人',
    url: '/user/home?id=2688170'
  }
]

