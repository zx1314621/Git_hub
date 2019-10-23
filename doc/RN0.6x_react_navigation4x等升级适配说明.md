
号外号外，RN0.6x已经发布有一段时间了，react-navigation也在前不久进入了4x的时代。为了让大家少踩坑，现已将课程升级适配到RN0.6x以及react-navigation4x，另外，包括友盟分享和统计在内的所有插件也已升级是配到最新版。

为了帮助到大家顺利的学习使用新版本RN与react-navigation等相关库，我将整个的升级适配过程总结出以下文档供小伙伴们学习参考：

1. react-native 0.6x升级适配说明
2. react-navigation 4x升级适配说明
3. 友盟分享和统计最新版升级适配说明
4. 其他升级适配说明
5. FAQ

## 1.react-native 0.6x升级适配说明

本次为了将项目从0.59.9升级适配到0.6x，由于变更跨度比较大，顾采用了“创建一个新的RN项目，然后将代码移植到这个RN项目”的方式进行升级适配的，变更了那些代码，可查看提交记录：[c0d8d0b5](https://git.imooc.com/coding-304/GitHub_Advanced/commit/c0d8d0b571bfbc93a3abb2506489f5a822c36838)

### 1.1 0.6x版本重大特性
- 0.61.0
    - react版本采用16.9
    - 采用了`use_frameworks!`来更好的支持CocoaPods
    - 默认打开"Fast refresh"，可以通过devtool关闭
    - 其他[changelog](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md)
- 0.60：0.60标志着RN进入了又一个新的里程碑，本次更新焦距在提效与与时俱进，比如：自动link、默认支持CocoaPods等
    - 支持了Android X，如果你用的RN是0.6x那么对应的三方插件请用适配了Android X的版本（可去插件的官库上看change log）
    - 移除了WebView和Geolocation，用到这些组件时需要单独引入对应的独立插件
        - [react-native-webview](https://github.com/react-native-community/react-native-webview)
        - [react-native-geolocation](https://github.com/react-native-community/react-native-geolocation)
    - iOS项目默认支持CocoaPods，所以打开ios目录下的项目时记得选择xxx.xcworkspace文件
    - 支持自动link，之前npm安装完还需要手动link的插件现在RN脚手架能够自动帮你link，释放了双手
    - 其他[changelog](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md)

### 1.2 新版本带来的小技巧

#### 更简洁的运行指令

新版本RN脚本中引入了`android`和`ios`简化命令：

```json
"scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    ...
  },
```

现在通过`npm run android`、`npm run ios`就可以运行项目了。

#### 升级助手

RN社区提供了一个查看不同版本间升级变更的小助手：叫 [upgrade helper webtool](https://react-native-community.github.io/upgrade-helper/)，通过它你能快速查看你当前的RN版到你要升级到的RN版本间的所有变更和需要注意的点，比如：从0.59.9到0.61.0-rc.0的变更内容：[0.59.9 -> 0.61.0-rc.0](https://react-native-community.github.io/upgrade-helper/?from=0.59.9&to=0.61.0-rc.0)。

## 2. react-navigation 4x升级适配说明

react-navigation从发布以来经历了1x，2x，3x的重要变更，现在已经到了4x的阶段，4x相比3x最为重大的变更点如下：

>建议，结合[react-navigation官方安装文档](https://reactnavigation.org/docs/en/getting-started.html)在借助下面教程进行学习。

### 2.1 4x版本重大特性

- navigator被拆分到不同的库中：
    - createStackNavigator -> [react-navigation-stack](https://github.com/react-navigation/stack)
    - createDrawerNavigator -> [react-navigation-drawer](https://github.com/react-navigation/drawer)
    - createBottomTabNavigator, createMaterialTopTabNavigator -> [react-navigation-tabs](https://github.com/react-navigation/tabs)

所以，用到这些类型导航器的地方其引入方式也需要做相应的调整：

```js
- import { createAppContainer, createStackNavigator } from 'react-navigation';
+ import { createAppContainer } from 'react-navigation';
+ import { createStackNavigator } from 'react-navigation-stack';
```

### 2.2 4x版本安装使用的正确方式

**4x版本对于的RN版本是0.6x，使用时需要注意**，另外，4x版本的安装方式如下：

#### 第一步： 安装主库

```bash
yarn add react-navigation
# or with npm
# npm install react-navigation
```
#### 第二步： 安装主库依赖的三方库

因为新版react-navigation依赖一些第三方库，所以安装时需要同时引入：

```bash
yarn add react-native-gesture-handler
yarn add react-native-reanimated
# or with npm
# npm install react-native-gesture-handler
# npm install react-native-reanimated
```

#### 第三步： 根据需要引入各导航组件的库

```bash
yarn add react-navigation-stack
yarn add react-navigation-drawer
yarn add react-navigation-tabs
# or with npm
# npm install react-navigation-stack
# npm install react-navigation-drawer
# npm install react-navigation-tabs
```

#### 第四步：执行pod install

为了在iOS上完成安装，还需要执行一些命令：

```bash
cd ios
pod install
cd ..
```

#### 第五步：配置react-native-gesture-handler

为了在Android上能够使react-native-gesture-handler有效，需要修改MainActivity.java：

```java
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```
  
#### 已知兼容问题

当你在RN 0.61.0 上使用react-navigation 4.0时你会发现，createMaterialTopTabNavigator在Android上左右滑动无效，这是一个已知的兼容问题。

该问题由"react-native": "0.61.0-rc.0" 的ReactActivityDelegate的改动引起，导致`protected ReactRootView createRootView()`不回调，所以react-navigation所使用的react-native-gesture-handler也就在Android上无法监测到用户的手势，进而导致滑动切换tab失效。

>该问题还在等待react-navigation和react-native进行修复，用到该功能的同学请使用0.60.5版本的RN。

## 3.友盟分享和统计最新版 升级适配说明

现已将项目中所用到的友盟分享、登录和统计相关的库和代码升级到了最新版，并且做了相应适配。

>大家在集成适配最新友盟分享、登录和统计时可参考这次提交：[6cc61494](https://git.imooc.com/coding-304/GitHub_Advanced/commit/6cc6149449e1bcd67adb9d4d8ec9b599a41b92a1)

### 重要变更

统计方法由track 变成了 onEvent使用时需要留意：

```js
//新版本友盟SDK 时间统计方法由 track -> onEvent
AnalyticsUtil.onEvent("SearchButtonClick");
```

## 4. 其他升级适配说明

### AsyncStorage 导入方式发生变化

react-native中的AsyncStorage在未来的版本迭代中将会被从react-native中移除，官方推荐使用
[react-native-community/async-storage](https://github.com/react-native-community/async-storage)来代替：

>安装方式：

```bash
yarn add @react-native-community/async-storage
```
然后：

```bash
cd ios/ && pod install
```

>使用方式：


```js
//将
import {AsyncStorage} from 'react-native';
//改成
import AsyncStorage from '@react-native-community/async-storage';
```

其他API不变。

## 5.FAQ

### Cannot get property 'supportLibVersion' on extra properties extension as it does not exist

#### 问题描述

升级到rn 0.61.0后报上述错误

#### 解决办法 

在android/build.gradle中添加supportLibVersion：

```bash 
buildscript {
    ext {
        buildToolsVersion = "28.0.3"
        minSdkVersion = 16
        compileSdkVersion = 28
        targetSdkVersion = 28
        supportLibVersion = "28.0.0"
    }
```



### Unsupported Modules Detected

#### 问题描述

```
Unsupported Modules Detected.
Compilation is not supported for following modules: react-native-vector-icons
```

#### 解决办法 

删除android下的./idea 目录然后重新打开项目。

### Android不显示矢量图标

#### 问题描述

>版本信息：

```bash
 "react-native": "0.60.5",
 "react-native-vector-icons": "^6.6.0",
```
不报错但是不显示图标。


#### 解决办法 

在android/app/build.gradle添加：

```bash
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
参考：[https://github.com/oblador/react-native-vector-icons#option-with-gradle-recommended](https://github.com/oblador/react-native-vector-icons#option-with-gradle-recommended)


### Update is invalid - A JS bundle file named "null"


#### 问题描述

```bash
 "react-native": "0.60.5",
 "react-native-code-push": "^5.7.0",
```
Codepush jsbundle下载完成，跟新时报错，如下：

```bash
 com.microsoft.codepush.react.CodePushInvalidUpdateException: Update is invalid - A JS bundle file named "null" could not be found within the downloaded contents. Please check that you are releasing your CodePush updates using the exact same JS bundle file name that was shipped with your app's binary.
        at com.microsoft.codepush.react.CodePushUpdateManager.downloadPackage(CodePushUpdateManager.java:241)
        at com.microsoft.codepush.react.CodePushNativeModule$3.doInBackground(CodePushNativeModule.java:217)
        at com.microsoft.codepush.react.CodePushNativeModule$3.doInBackground(CodePushNativeModule.java:211)
        at android.os.AsyncTask$2.call(AsyncTask.java:333)
        at java.util.concurrent.FutureTask.run(FutureTask.java:266)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1162)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:636)
        at java.lang.Thread.run(Thread.java:764)
2019-09-03 14:52:57.952 10010-10045/com.github_rn I/ReactNativeJS
```

#### 解决办法

在MainApplication.java中添加：`CodePush.getJSBundleFile()`：

```java
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
        }
        ...
```


### Error in getting binary resources modified time

#### 问题描述

```bash
 "react-native": "0.60.5",
 "react-native-code-push": "^5.7.0",
```
Codepush检测更新，logcat上述错误。

#### 解决办法

在android/app/build.gradle添加：

```bash
apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"
```
参考：[https://github.com/Microsoft/react-native-code-push/issues/1046](https://github.com/Microsoft/react-native-code-push/issues/1046)

## Unrecognized font family 'Ionicons' 
#### 问题描述

>版本信息：

```bash
 "react-native": "0.60.5",
 "react-native-vector-icons": "^6.6.0",
```
无论是自动link还是手动link都包这个错误。

#### 解决办法

将下面配置粘贴到info.plist：
 
```
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
```

参考：[https://github.com/oblador/react-native-vector-icons#option-manually](https://github.com/oblador/react-native-vector-icons#installation)


