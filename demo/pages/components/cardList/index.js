// pages/components/cardList/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        cardList: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        jumpDetail(e) {
            let id = e.currentTarget.dataset.id
            wx.navigateTo({
                url: '/pages/detail/detail?id=' + id
            })
        }
    }
})
