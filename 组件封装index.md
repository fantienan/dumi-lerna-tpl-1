
# 组件库结构-开发管理

```html
结构： monorepo项目
工具： lerna工具 + yarn workspaces + dumi
参考： pro-component
```

##  monorepo项目  & lerna工具 & yarn workspaces

### monorepo项目结构：

```html
my-lerna-repo/
  package.json
  packages/
    package-1/
      package.json
    package-2/
      package.json
```

### lerna是monorepo项目的工具

把一个大型的项目（如组件库）分割成独立的小的 package， 使得每个package 组件可以单独用npm和 git 安装管理，

* 一个项目仓库维护多个模块package

工具仓库git: https://github.com/lerna/lerna

```html
leran init       //初始项目
leran create     //创建子package
leran add        //为所有（或单个package）添加依赖
leran publish    //发布

leran bootstrap --hoist     //将公共的依赖包提取安装到root层
learn clean      //清除所有package的node_moudles
```

### yarn workspaces

```html
{
  "npmClient": "yarn"
  "useWorkspaces": true
}
```
使用 Lerna 发布，使用 yarn workspaces 管理包的依赖

```html
yarn workspace packageB remove packageA   //给 packageB 删除 packageA
yarn workspaces remove lodash             //给所有的 pacakge 安装 lodsh
yarn remove -W -D typescript           //给 root 删除 typescript

```

## 参考的组件库（pro-component）

* 基于antd二次封装
* 属于模块，页面级组件，更重。 （一个组件 ≈ 一个页面）
* 书写的代码量将更少


### pro-component 结构

```html
packages
    card
        package.json
        src
            component
            demos
            style
            card.md
            index.tsx

    field
        package.json
        src
            ....
            ....
    layout
    list
    provider
    table
    utils
        package.json
        src
            ....
```



## pro-component 提供的组件
    布局：
        ProLayout
        PageContainer
        ProCard
        ...
    数据录入，展示：
        ProForm
        ProFormFields
        ProFormList
        Query
        StepsForm

        ProTable
        ProList

    通用：
        ProField
            Field(数字，金额，百分比，)
    



### 使用typescript


## dumi  

组件开发脚手架,dumi 默认会以 packages/[包名]/src 为基础路径搜寻所有子包的 Markdown 文档并生成路由，

可以是把组件使用文档 和 demo 写在一起。


## 问题
解决的问题：
1. 项目的结构， 依赖管理，文档书写。

遇到的问题：
1. reactjs. antd 非常熟练。
2. typescript 语言封装（）
3. 较高的抽象能力。
