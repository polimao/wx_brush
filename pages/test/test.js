var sourceType = [['camera'], ['album'], ['camera', 'album']]
var sizeType = [['compressed'], ['original'], ['compressed', 'original']]

Page({
    data: {
        sourceTypeIndex: 0,
        sourceType: [' - 类型 - ', '剧情', '爱情', '喜剧', '科幻', '动作', '悬疑', '犯罪', '恐怖', '青春', '励志', '战争', '文艺', '黑色幽默', '传记', '情色', '暴力', '音乐', '家庭'],

        sizeTypeIndex: 0,
        sizeType: [' - 地区 - ', '大陆', '美国', '香港', '台湾', '日本', '韩国', '英国', '法国', '德国', '意大利', '西班牙', '印度', '泰国', '俄罗斯', '伊朗', '加拿大', '澳大利亚', '爱尔兰', '瑞典', '巴西', '丹麦'],
    },
    sourceTypeChange: function (e) {
        this.setData({
            sourceTypeIndex: e.detail.value
        })
    },
    sizeTypeChange: function (e) {
        this.setData({
            sizeTypeIndex: e.detail.value
        })
    },

})
