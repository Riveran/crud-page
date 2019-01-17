export const myNews = {
  news: [
    {
      id: 1,
      title: 'Лёффлер микс',
      bigText:
        'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
      id: 2,
      title: 'Выступление панасенко',
      bigText: 'А евро 42!'
    },
    {
      id: 3,
      title: 'Вебинар по веб технологиям',
      bigText: 'А евро опять выше 70.'
    },
    {
      id: 4,
      title: 'Ордынский период',
      bigText:
        'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
    },

    {
      id: 5,
      title: '10 фактов об космосе',
      bigText:
        'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
    },

    {
      id: 6,
      title: 'isHome live',
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
