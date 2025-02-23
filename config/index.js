const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "6ab01632e2b44936b4951d8019007eab",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx380713899c9e171e",

  // 微信公众号的appsecret
  APP_SECRET: "90412c352abd8b610870e8c53aa77243",

  // 微信公众号的模板ID
  TEMPLATE_ID: "Vb4PwnEDnzSH8wJhuVwzwjRlstlJmu1CbxLKeroGLG0",

  // 天行API的key
  TXApiKey: "387c47aaece63dd6850ff11889e3b30a",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "曦曦宝贝",
      // 用户列表的`微信号`
      userId: "oA6Rv5xlwYdIYX4X_vAmwALv1tPw",
      // 星座
      star: "双鱼座",
      // 生日 - 格式：08-22
      birthday: "01-29",
      // 城市 - 格式：支持省市县区
      city: "成都市",
    },
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2022-10-1",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2019-03-17",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: true,
    // 健康小提示
    healthtip: true,
    // 毒鸡汤
    duJiTang: true,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: true,
    // 彩虹屁
    caiHongPi: true,
  },
};

module.exports = {
  CONFIG,
};
