# React实战-音乐项目

## 项目介绍

前些日子抽空学习了下 `hooks`，为了更好的理解和掌握，趁此机会使用 `react` 全家桶尝试编写下网易云项目。

如果觉得不错的话，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

### 技术栈
- react v17.0.2: 用于构建用户界面的 `MVVM` 框架
- redux: 状态管理容器
- redux-thunk: 处理异步逻辑的 `redux` 中间件
- react-router: 单页面应用路由跳转切换
- react-router-config：单独创建 `router` 配置文件集中处理路由映射表
- immutable: Facebook官方开发的进行持久性数据结构处理的库
- react-lazyload: `react` 懒加载库，可一定程度上优化单页首屏加载速度
- styled-components: 处理样式，体现 `css in js` 的前端工程化神器
- ant-design: 国内一款非常优秀的 `UI` 组件库（项目绝大部分`UI`组件全是自己封装）
- axios: 用来请求后端 `api` 的数据
- create-react-app: `react` 脚手架，快速搭建项目
- eslint: 代码风格检查工具

### 目标功能

项目预期想做的功能：

- [x] 推荐页面 --- 完成
- [x] 单曲页面 --- 完成
- [x] 排行页面 --- 完成
- [x] 歌单页面 --- 完成
- [x] 电台页面 --- 完成
- [x] 歌手页面 --- 完成
- [x] 新碟页面 --- 完成

### 项目规范
严谨的编码规范以及对代码风格的一些必要约束，有益于我们写出更加健壮和可扩展维护性的程序，本次项目遵循：

- 1.文件夹、文件名称统一小写、多个单词以连接符（-）连接；
- 2.`JavaScript` 变量名称采用小驼峰标识；常量全部使用大写字母，多个单词使用下换线（_）分隔；组件采用大驼峰；
- 3.`CSS` 采用普通 `CSS `和 `styled-component` 结合来编写（全局采用普通 `CSS` 、局部采用 `styled-components`）;
- 4.整个项目不再使用 `class` 组件，统一使用函数式组件，并且全面使用 `Hooks`；
- 5.所有的函数式组件，为了避免不必要的渲染，全部使用 `memo` 进行包裹；
- 6.组件内部的状态，使用 `useState ` 、 `useReducer`；业务数据全部放在 `redux` 中管理；
- 7.函数组件内部基本按照如下顺序编写代码：
  * 组件内部的 `state`；
  * `redux` 的 `hooks` 代码；
  * 其他组件的 `hooks` 代码；
  * 其他逻辑代码；
  * 最后返回`JSX` 代码；
- 8.`redux` 代码规范如下：
  * `redux` 直接采用 `redux hooks` 方式编写，不再使用 `connect`；
  * `redux` 结合 `ImmutableJS`
  * 每个模块有自己独立的 `reducer`，通过 `combineReducers` 进行合并；
  * 异步请求代码使用 `redux-thunk`，并且写在 `actionCreators` 中；
- 9.网络请求采用 `axios`：
  * 对 `axios` 进行二次封装；
  * 所有的模块请求会放到一个请求文件中单独管理；

### 项目结构

```
src  
├─api         # axios 封装 
│      
├─assets      # 资源文件
│  ├─css        # 全局样式    
│  └─img        # 图片资源
│          
├─common      # 公共JS文件，如常量、mixin等
│      
├─components  # 全局公共组件
│        
├─pages       # UI     
│        
├─router      # 路由配置
│      
├─store       # 全局store
│      
├─ utils      # 工具类
│ 
├─ App.js
└─ index.js
```

## 部分效果展示
项目已完成的 `UI` 展示部分基本1:1还原官方

**对于 `redux` 的组织和维护，在`dev tools`的直观表现：**
- 不同模块对应不同的 `reducer`，一眼看去结构非常的清晰
- 可快速对状态做可预测的追踪与定位

部分截图：
![2Kgzy.jpg](https://s.im5i.com/2021/05/01/2Kgzy.jpg)

**推荐页面已实现：**
- 页面所有 `UI` 的基本展示
- 路由、二级路由的跳转
- 点击轮播图跳转到对应的播放页面
- 各个子模块跳转都已通过`history hook`结合`location hook`来实现

部分截图：
![2Kdhx.png](https://s.im5i.com/2021/05/01/2Kdhx.png)

部分截图：
![26PKo.png](https://s.im5i.com/2021/05/01/26PKo.png)

**单曲页面已实现：**
- 可通过点击首页轮播或播放栏封面图片跳转来到
- 页面所有 `UI` 的基本展示
- 当前歌曲的歌词展示、包含当前歌曲的歌单与相似歌曲的推荐

部分截图：
![2KifQ.png](https://s.im5i.com/2021/05/01/2KifQ.png)

**播放栏已实现：**
- 通过点击右侧小锁可显示与隐藏播放栏并改变相应状态
- 音乐的播放/暂停、上一首/下一首切换
- 播放模式的三种切换（随机、顺序播放、单曲循环）
- 歌曲进度的拖拽以及音量大小的调节控制
- 播放面板的实现，展示对应歌曲的播放列表
- 歌词的解析、滚动与高亮显示

部分截图：
![2KY0D.jpg](https://s.im5i.com/2021/05/01/2KY0D.jpg)

**排行榜页面已实现：**
- 页面所有 `UI` 的基本展示
- 各种榜单的切换

部分截图：
![2KDPW.png](https://s.im5i.com/2021/05/01/2KDPW.png)

**歌单页面已实现：**
- 页面所有 `UI` 的基本展示
- 选择分类、选择分类后根据分类切换歌单
- 分页器的二次封装以及分页跳转

部分截图：
![2Kx4q.png](https://s.im5i.com/2021/05/01/2Kx4q.png)

**主播电台已实现：**
- 页面所有 `UI` 的基本展示
- 选择不同分类切换到对应的列表，展示不同的数据
- 分页器的二次封装以及分页跳转

部分截图：
![26HFs.png](https://s.im5i.com/2021/05/01/26HFs.png)

**歌手页面已实现：**
- 页面所有 `UI` 的基本展示
- 各种歌手分类（没找到接口，还自定义组织了数据结构）
- 歌手字母分类、对应歌手展示

部分截图：
![26IoB.png](https://s.im5i.com/2021/05/01/26IoB.png)

**新碟上架页面已实现：**
- 页面所有 `UI` 的基本展示
- 分页器的二次封装以及分页跳转

部分截图：
![26mLz.png](https://s.im5i.com/2021/05/01/26mLz.png)



以上展示了本次项目主要的模块。其实到这里，项目的整体逻辑已经打通，对还未做的功能可以在此框架基础上像堆砌积木一样往里面填充对应的功能模块就好了！

更多的内容，欢迎下载体验

### 使用方法
注意：项目用到了大量新特性，请保证`NodeJS`版本在`v10.0`以上

``` powershell
# 项目克隆
git clone https://github.com/uithen/react-cloudmusic.git 

# 切换到目标路径
cd react-cloudmusic

# 安装项目依赖(也可以使用npm)
yarn install
 
# 运行项目
yarn start
```

### 最后

- 感谢后台提供者[Binaryify](https://github.com/Binaryify/NeteaseCloudMusicApi)大佬开源的 `NodeJS` 版 `api` 接口 
- 感谢[王红元](https://github.com/coderwhy)老师对接口的部署，以及老师在b站和腾讯课堂上诸多的优秀课程都让我受益良多