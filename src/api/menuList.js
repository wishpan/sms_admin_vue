export const menuList = () => {
    return Promise.resolve([
        {
            path: '/',
            childMenuInfos: [],
            component: '/Index',
            isRoute: "0",
            icon: "icon-shouye",
            menuId: 233,
            parentId: 233,
            menuName: "首页",
            menuUrl: '/'
        },
        {
            childMenuInfos: [
                {
                    childMenuInfos: [],
                    component: "/messageService/SignManage",
                    isRoute: "1",
                    menuId: 261,
                    menuName: "签名管理",
                    menuUrl: "/messageService/SignManage",
                    parentId: 261
                },
                {
                    childMenuInfos: [],
                    component: "/messageService/TemplateManage",
                    isRoute: "1",
                    menuId: 252,
                    menuName: "模板管理",
                    menuUrl: "/messageService/TemplateManage",
                    parentId: 245
                },
                {
                    childMenuInfos: [],
                    component: "/messageService/PassagewayManage",
                    isRoute: "1",
                    menuId: 253,
                    menuName: "通道管理",
                    menuUrl: "/messageService/PassagewayManage",
                    parentId: 246
                },
                {
                    childMenuInfos: [],
                    component: "/messageService/ApplyManage",
                    isRoute: "1",
                    menuId: 24,
                    menuName: "应用管理",
                    menuUrl: "/messageService/ApplyManage",
                    parentId: 247
                },
                {
                    childMenuInfos: [],
                    component: "/messageService/ServiceLog",
                    isRoute: "1",
                    menuId: 55,
                    menuName: "服务日志",
                    menuUrl: "/messageService/ServiceLog",
                    parentId: 248
                }
            ],
            isRoute: "0",
            menuId: 245,
            menuName: "短信服务",
            menuUrl: "#",
            icon: "icon-duanxinfuwu",
            parentId: 0
        },
        /**
        {
          isRoute: "1",
          menuId: 246,
          component: "/marketSMS/MarketSMS",
          menuName: "营销短信",
          menuUrl: "/MarketSMS",
          icon: 'icon-yingxiao22x',
          parentId: 0
        },
        **/
        {
            childMenuInfos: [
                {
                    childMenuInfos: [],
                    component: "/businessStatist/SendingNum",
                    icon: "",
                    isRoute: "1",
                    menuId: 256,
                    menuName: "发送量统计",
                    menuUrl: "/businessStatist/SendingNum",
                    parentId: 247
                },
                /**
                {
                  childMenuInfos: [],
                  component: "/businessStatist/MarketSMSStatist",
                  icon: "",
                  isRoute: "1",
                  menuId: 56,
                  menuName: "营销短信统计",
                  menuUrl: "/businessStatist/MarketSMSStatist",
                  parentId: 47
                },
                **/
                {
                    childMenuInfos: [],
                    component: "/businessStatist/SendRecord",
                    icon: "",
                    isRoute: "1",
                    menuId: 257,
                    menuName: "发送记录",
                    menuUrl: "/businessStatist/SendRecord",
                    parentId: 247
                }
            ],
            isRoute: "0",
            menuId: 247,
            menuName: "业务统计",
            menuUrl: "#",
            icon: 'icon-yewutongji',
            parentId: 0
        },
        {
            childMenuInfos: [
                {
                    childMenuInfos: [],
                    component: "/systemManage/BlacklistManage",
                    icon: "",
                    isRoute: "1",
                    menuId: 258,
                    menuName: "黑名单管理",
                    menuUrl: "/systemManage/BlacklistManage",
                    parentId: 248
                },
            ],
            isRoute: "0",
            menuId: 248,
            menuName: "系统管理",
            menuUrl: "#",
            icon: 'icon-xitong',
            parentId: 0
        },
    ]);
};
//# sourceMappingURL=menuList.js.map