实战课[最新版react native+redux打造高质量上线app](https://coding.imooc.com/class/304.html)

>课程已升级适配react-native 0.6x，react-navigation 4x，[点我查看](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc/RN0.6x_react_navigation4x等升级适配说明.md)

## 概述
- 课程文档查看[doc](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc);
- 课程中所用到的demo查看[demo](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/demo);
- 更多demo可查看[demo](https://github.com/crazycodeboy/RNStudyNotes/tree/master/Demo);
- 课程源码，可通过git查看课程各章节的源码；


## 如何运行？

1. 在项目根目录执行`npm install`或`yarn install`；
2. 切换到ios目录下执行`pod setup`来拉取最新pod库；
3. ios目录下执行`pod install`来安装iOS项目所需要的依赖；
4. 然后运行 react-native run-ios 或 react-native run-android；
5. Ok,有问题可以提issues出来；

## 课程辅导答疑

[http://coding.imooc.com/learn/qa/304.html](http://coding.imooc.com/learn/qa/304.html)

## 更新日志

#### 2019-09-08：重大升级！react-native 0.6x，react-navigation 4x 以及其他所有依赖库升级适配到最新版本

- [点我查看升级适配说明](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc/RN0.6x_react_navigation4x等升级适配说明.md)


#### 2019-06-21：优化详情页webview兼容问题；升级GitHubTrending；升级react-navigation & react-navigation-tabs到最新版-解决Android下点击切换问题；

- `"GitHubTrending": "^3.0.2"` -> `"GitHubTrending": "^3.1.1"`
- `"react-navigation": "^3.3.2"` -> `"react-navigation": "^3.11.0"`
- `"react-navigation-tabs": "^2.0.0-alpha.0"` -> `react-navigation-tabs": "^2.1.3"`

#### 2019-06-12：升级GitHubTrending 具体更新如下：

- `"GitHubTrending": "^3.0.1"` -> `"GitHubTrending": "^3.0.2"`

#### 2019-06-09：适配react-native:0.59.9 具体更新如下：

- `"react-native": "0.59.1"` -> `"react-native": "0.59.9"`
- `"@babel/core": "^7.4.0"` -> `"@babel/core": "^7.4.5"`
- `"@babel/runtime": "^7.4.0"` ->  `"@babel/runtime": "^7.4.5"`
- `"babel-jest": "^24.5.0"` -> `"babel-jest": "^24.8.0"`
- `"jest": "^24.5.0"` -> `"jest": "^24.8.0"`
- `"metro-react-native-babel-preset": "^0.53.1"` -> `"metro-react-native-babel-preset": "^0.54.1"`

#### 2019-03-21：适配react-native:0.59.1 具体更新如下 - [e8c1e746fa](https://git.imooc.com/coding-304/GitHub_Advanced/commit/e8c1e746fad47c2d0b7f73131744af3aca9bcb5b)：

- `"react-native": "0.58.4"` -> `"react-native": "0.59.1"`
- `"react": "16.6.3"` -> `"react": "16.8.3"`
- `"react-native-splash-screen": "^3.1.1"` -> `"react-native-splash-screen": "^3.2.0"`
- `"react-native-webview": "^2.14.0"` -> `"react-native-webview": "^5.3.1"`
- 其他依赖升级
- Android版本升级：
	-  `targetSdkVersion = 27` -> `targetSdkVersion = 28`
	-  其他构件工具版本升级

此次更新，主要升级了一些SDK和构件工具的版本，另外，**此次从RN 0.5.84 升级到RN 0.59.1 除了版本号更新外其它需要适配的很少，为避免踩坑同学们可以参考老师的提交记录进行升级**

#### 2019-03-19：新增列表实例代码 : [1849994783](https://git.imooc.com/coding-304/GitHub_Advanced/commit/1849994783b160c899c6da4f4db0e43a1811c989)

- 新增[列表实例代码](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/demo/FasterListDemo)；

#### 2019-03-14：react-navigation-tabs升级到2.x : [c8163255de](https://git.imooc.com/coding-304/GitHub_Advanced/commit/c8163255decb9629e3c53a4819ae711a5e241f9d)

- `"react-navigation": "^3.3.2"` -> `"react-navigation": "^3.3.2"`
- `"react-navigation-tabs": "^1.0.2"` -> `react-navigation-tabs": "^2.0.0-alpha.0"`
- 添加`"react-native-reanimated": "^1.0.0-alpha.12"`

>因为有些同学将[react-navigation-tabs](https://github.com/react-navigation/react-navigation-tabs)升级到了刚刚发布的alpha版本为此采坑了，主要原因归结于这个版本的[react-navigation-tab](https://github.com/react-navigation/react-navigation-tabs)引入了[react-native-reanimated](https://github.com/kmagiera/react-native-reanimated)这个第三方库，但同学们在使用时却没将其添加进来导致的，为了不让大家踩坑，老师特意为大家准备了`react-navigation-tabs`升级到了最新版的教程，如需使用最新版大家课程参考这次的提交修改即可。

**另外需要注意的是因为`react-native-reanimated`包含native部分的代码，所以我们除了运行yarn add命令之外，还需要通过`react-native link react-native-reanimated`将它的native部分的代码关联到项目中去。**

#### 2019-02-19：此次更新适配了react-navigation-redux-helpers3.0 : [24212eb835](https://git.imooc.com/coding-304/GitHub_Advanced/commit/24212eb835b6db639b82017b8090c15a14dea48f)

> react-navigation-redux-helpers3.0的两个变更:

**1.reduxifyNavigator被改名为createReduxContainer，所以：**

```
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers';
//改为
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';
...
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
//改为
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');
```

**2.createReactNavigationReduxMiddleware的参数顺序发生了变化：**

```
export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
//改为
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);
```

可参考：[https://git.imooc.com/coding-304/GitHub_Advanced/commit/24212eb835b6db639b82017b8090c15a14dea48f](https://git.imooc.com/coding-304/GitHub_Advanced/commit/24212eb835b6db639b82017b8090c15a14dea48f)



