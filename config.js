// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "亲爱的贾郝鸣宝宝",  // 同上...
        "今天是你的生日",
        "作为你的男朋友",
        "抱歉我总是让你那么失望",
        "但是无可否认无比确认",
        "你是我独一无二的珍宝",
        "日出日落山河壮阔",
        "我只想和你一个人共享",
        "只要我们深深地爱过",
        "我愿将我漫长的一生",
        "缩短到我们相遇的一瞬",
        "贾郝鸣同学",
        "23岁生日快乐",
        "希望23岁的你有万般欣喜",
        "加油~",
        "未来的经济学家心理学家天文学家",
        "噢还有一件事想问问你",
        "以后的生日也请和我一起",
        "可以吗？",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "亲爱的贾郝鸣宝宝": "./imgs/baobao.jpg",
        "今天是你的生日": "./imgs/shengri.jpg",
       "作为你的男朋友": "./imgs/nan.jpg",
        "抱歉我总是让你那么失望": "./imgs/shi.jpg",
        "贾郝鸣同学": "./imgs/jia.jpg",
        "23岁生日快乐": "./imgs/sheng.jpg",
        "以后的生日也请和我一起": "./imgs/yi.jpg",
        "可以吗？": "./imgs/wen.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "请点这个",
        play: "来点音乐",
        bannar_coming: "来点东西",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
