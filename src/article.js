export const myNews = {
  news: [
    {
      id: 1,
      title: 'Лёффлер микс',
      category: 'Music',
      pictures:
        'http://cdn.waaterkant.com/wp-content/uploads/2015/09/christian-loffler-ssense-ki-rcords-1170x1061.jpg',
      bigText:
        'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
      id: 2,
      title: 'Выступление панасенко',
      category: 'History',
      pictures: 'https://i.ytimg.com/vi/1FlkMW1fn14/maxresdefault.jpg',
      bigText: 'А евро 42!'
    },
    {
      id: 3,
      title: 'Вебинар по веб технологиям',
      category: 'Work',
      pictures:
        'https://noyamolod.ru/uploads/posts/2018-12/1544789867_go-live-with-a-webinar-to-close-the-sale-opengraph.png',
      bigText: 'А евро опять выше 70.'
    },
    {
      id: 4,
      title: 'Ордынский период',
      category: 'History',
      pictures:
        'https://s00.yaplakal.com/pics/pics_original/0/5/9/12070950.jpg',
      bigText:
        'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
    },

    {
      id: 5,
      title: '10 фактов об космосе',
      category: 'Science',
      pictures:
        'http://kak-bog.ru/sites/default/files/article_images/inessa/09/20/2015_-_2301/all/interesnye_fakty_o_kosmose8.jpg',
      bigText:
        'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
    },

    {
      id: 6,
      title: 'isHome live',
      category: 'Music',
      pictures:
        'https://sova.ponominalu.ru/wp-content/uploads/2017/12/ishome.jpg',
      bigText:
        'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
    }
  ],
  all: function () {
    return this.news
  },
  get: function (id) {
    const isNews = p => p.id === id
    return this.news.find(isNews)
  }
}
