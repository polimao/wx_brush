// pages/brush/brush.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movies: [
            {
                "id": 767,
                "douban_id": 26662798,
                "title": "京城81号Ⅱ",
                "directors": "钱人豪",
                "rate": 4,
                "star": 20,
                "cover_x": 1700,
                "cover_y": 2551,
                "type": 0,
                "area": 0,
                "url": "https://movie.douban.com/subject/26662798/",
                "casts": "张智霖,梅婷,钟欣潼,耿乐,邬君梅",
                "cover": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2471580153.jpg",
                "created_at": "2017-07-29 21:29:40",
                "updated_at": "2017-07-29 21:29:40"
            },
            {
                "id": 768,
                "douban_id": 25827741,
                "title": "反转人生",
                "directors": "伍仕贤",
                "rate": 5.5,
                "star": 30,
                "cover_x": 563,
                "cover_y": 800,
                "type": 0,
                "area": 0,
                "url": "https://movie.douban.com/subject/25827741/",
                "casts": "夏雨,闫妮,潘斌龙,宋茜,吴大维",
                "cover": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2472782062.jpg",
                "created_at": "2017-07-29 21:29:40",
                "updated_at": "2017-07-29 21:29:40"
            },
            {
                "id": 769,
                "douban_id": 26738642,
                "title": "我是医生",
                "directors": "谢鸣晓",
                "rate": 6,
                "star": 30,
                "cover_x": 532,
                "cover_y": 800,
                "type": 0,
                "area": 0,
                "url": "https://movie.douban.com/subject/26738642/",
                "casts": "赵有亮,胡亚捷,赵静,虞嘉娜",
                "cover": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2462048588.jpg",
                "created_at": "2017-07-29 21:29:40",
                "updated_at": "2017-07-29 21:29:40"
            },
            {
                "id": 770,
                "douban_id": 26898747,
                "title": "父子雄兵",
                "directors": "袁卫东",
                "rate": 5.1,
                "star": 25,
                "cover_x": 682,
                "cover_y": 1000,
                "type": 0,
                "area": 0,
                "url": "https://movie.douban.com/subject/26898747/",
                "casts": "大鹏,范伟,张天爱,乔杉,邬君梅",
                "cover": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2492957074.jpg",
                "created_at": "2017-07-29 21:29:40",
                "updated_at": "2017-07-29 21:29:40"
            },
            {
                "id": 771,
                "douban_id": 27065692,
                "title": "伪装大师1：维多女人",
                "directors": "刘亚当",
                "rate": 7.2,
                "star": 40,
                "cover_x": 2480,
                "cover_y": 3508,
                "type": 0,
                "area": 0,
                "url": "https://movie.douban.com/subject/27065692/",
                "casts": "陈启杰,高雨儿,张炜迅",
                "cover": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462654245.jpg",
                "created_at": "2017-07-29 21:29:40",
                "updated_at": "2017-07-29 21:29:40"
            },
            {
                "id": 772,
                "douban_id": 26751902,
                "title": "借眼",
                "directors": "张洋",
                "rate": 3.9,
                "star": 20,
                "cover_x": 8465,
                "cover_y": 12402,
                "type": 0,
                "area": 0,
                "url": "https://movie.douban.com/subject/26751902/",
                "casts": "陈浩民,薛佳凝,罗兰,王皓祯,杨苏",
                "cover": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462912672.jpg",
                "created_at": "2017-07-29 21:29:40",
                "updated_at": "2017-07-29 21:29:40"
            },
            {
                "id": 773,
                "douban_id": 26843838,
                "title": "碟仙之毕业照",
                "directors": "陆诗雨",
                "rate": 2,
                "star": 10,
                "cover_x": 1329,
                "cover_y": 1861,
                "type": 0,
                "area": 0,
                "url": "https://movie.douban.com/subject/26843838/",
                "casts": "陈圆,刘俐儿,宋伟,聂晶磊,柴子娣",
                "cover": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2440370546.jpg",
                "created_at": "2017-07-29 21:29:40",
                "updated_at": "2017-07-29 21:29:40"
            },
            {
                "id": 774,
                "douban_id": 27064200,
                "title": "走火枪",
                "directors": "李明明",
                "rate": 5.4,
                "star": 30,
                "cover_x": 610,
                "cover_y": 878,
                "type": 0,
                "area": 0,
                "url": "https://movie.douban.com/subject/27064200/",
                "casts": "刘冠麟,张锦程",
                "cover": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2461997400.jpg",
                "created_at": "2017-07-29 21:29:40",
                "updated_at": "2017-07-29 21:29:40"
            },
            {
                "id": 775,
                "douban_id": 27039022,
                "title": "超级大山炮之夺宝奇兵",
                "directors": "崔俊杰",
                "rate": 3.2,
                "star": 15,
                "cover_x": 1980,
                "cover_y": 2810,
                "type": 0,
                "area": 0,
                "url": "https://movie.douban.com/subject/27039022/",
                "casts": "程野,张家豪,刘晓光,张尧,于震宇",
                "cover": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2458870384.jpg",
                "created_at": "2017-07-29 21:29:40",
                "updated_at": "2017-07-29 21:29:40"
            },
            {
                "id": 776,
                "douban_id": 27018248,
                "title": "小城二月",
                "directors": "邱阳",
                "rate": 6.8,
                "star": 35,
                "cover_x": 670,
                "cover_y": 962,
                "type": 0,
                "area": 0,
                "url": "https://movie.douban.com/subject/27018248/",
                "casts": "Shuxian LI",
                "cover": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459521130.jpg",
                "created_at": "2017-07-29 21:29:40",
                "updated_at": "2017-07-29 21:29:40"
            }
        ],
        great_movies: [],
        page: 1,
        test: false,
        userInfo: '',
        openid: 0,
        items: [
            { name: 'USA', value: '美国' },
            { name: 'CHN', value: '中国', checked: 'true' },
            { name: 'BRA', value: '巴西' },
            { name: 'JPN', value: '日本' },
            { name: 'ENG', value: '英国' },
            { name: 'TUR', value: '法国' },
        ],
        types: ['剧情', '爱情', '喜剧', '科幻', '动作', '悬疑', '犯罪', '恐怖', '青春', '励志', '战争', '文艺', '黑色幽默', '传记', '情色', '暴力', '音乐', '家庭'],
        areas: ['大陆', '美国', '香港', '台湾', '日本', '韩国', '英国', '法国', '德国', '意大利', '西班牙', '印度', '泰国', '俄罗斯', '伊朗', '加拿大', '澳大利亚', '爱尔兰', '瑞典', '巴西', '丹麦'],
        typeIndex: 0,
        areaIndex: 0,
        behavior:["赞","坑","看过","想看","不看"],
        sort:["评分最高","评分最低"],
        open_movie_search : false
    },


    onLoad: function (options) {
        this.getMovies();
        this.getUserOpenId();
        var that = this
        wx.getSystemInfo({
            success: function (res) {

                that.setData({
                    view: {
                        windowWidth: res.windowWidth,
                        windowHeight: res.windowHeight
                    }
                })
                console.log(res.windowWidth)
                console.log(res.windowHeight)
            }
        })

    },
    onReachBottom: function () {
        this.getMore();
    },
    getUserOpenId: function () {
        var that = this
        wx.login({
            success: function (res) {
                if (res.code) {
                    console.log('js_code:', res.code)
                    //后端发起网络请求，获取用户id
                    wx.request({
                        url: 'http://shuamovie.dev/app/index.php?requestOpenId',
                        data: {
                            jscode: res.code
                        }, success(res) {
                            console.log('openid:', res.data)
                            that.setData({ openid: res.data })
                        }
                    })
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
    },
    /**
     * 获取列表
     */
    getMovies: function () {
        var that = this
        wx.request({
            url: 'http://shuamovie.dev/app/index.php?list&page', //仅为示例，并非真实的接口地址
            success: function (res) {
                console.log(res.data)
                that.setData({
                    movies: res.data
                })
            }
        })
    },
    test: function () {

    },

    /**
     * 超赞
     */
    setGreat: function () {
        var pool = this.getSelected();
        console.log(pool)
        var that = this
        wx.request({
            url: 'http://shuamovie.dev/app/index.php?setGreat', //仅为示例，并非真实的接口地址
            data: {
                movie_ids: pool,
                openid: that.data.openid
            },
            success: function (res) {
                console.log(res.data)

                // that.changeBehavior(that.data.movies,pool)
                for (var key in that.data.movies) {
                    for (var k in pool) {
                        if (that.data.movies[key].id == pool[k]) {
                            //刷一个电影到great
                            that.data.great_movies.push(that.data.movies[key])
                            that.data.movies.splice(key, 1)
                            console.log(key, k)
                        }

                    }
                }
                that.setData({ 'movies': that.data.movies })

                that.setData({ 'great_movies': that.data.great_movies })
            }
        })

        console.log('2', this.data.movies)
    },
    changeBehavior: function (movies, pool) {
        for (key in movies) {
            for (k in pool) {
                console.log(key, k)
            }
        }
    },
    getSelected: function () {
        var movies = this.data.movies
        var pool = [];
        for (var k in movies) {
            if (movies[k].selected) {
                pool = pool.concat(movies[k].id)
            }
        }
        return pool
    },
    getMore: function () {
        var that = this

        wx.request({
            url: 'http://shuamovie.dev/app/index.php?list', //仅为示例，并非真实的接口地址
            method: 'GET',
            data: {
                page: that.data.page
            },
            success: function (res) {

                var movies = that.data.movies.concat(res.data)
                that.setData({
                    movies: movies,
                    page: that.data.page + 1
                })
                console.log(movies)
            }
        })
    },
    setSeleted: function (e) {
        var index = e.currentTarget.dataset.index
        console.log(index)
        if (!this.data.movies[index].selected)
            var bool = true
        else
            var bool = false
        this.setData({ ["movies[" + index + "].selected"]: bool })
    },
    setBehavoir:function()
    {
        wx.showActionSheet({
            itemList: this.data.behavior,
            success: function (res) {
                console.log(res.tapIndex)
            },
            fail: function (res) {
                console.log(res.errMsg)
            }
        })
    },
    setSort: function () {
        wx.showActionSheet({
            itemList: this.data.sort,
            success: function (res) {
                console.log(res.tapIndex)
            },
            fail: function (res) {
                console.log(res.errMsg)
            }
        })
    },
    openMovieSearch: function()
    {
        this.setData({
            open_movie_search : this.data.open_movie_search ? false : true
        });
    }

})