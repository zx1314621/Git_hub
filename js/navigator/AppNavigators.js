import {createSwitchNavigator, createAppContainer} from 'react-navigation';
//@ https://github.com/react-navigation/react-navigation/releases/tag/v4.0.0
import {createStackNavigator} from 'react-navigation-stack';
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import WebViewPage from '../page/WebViewPage';
import DetailPage from '../page/DetailPage';
import SortKeyPage from '../page/SortKeyPage';
import SearchPage from '../page/SearchPage';
import CustomKeyPage from '../page/CustomKeyPage';
import AboutPage from '../page/about/AboutPage';
import AboutMePage from '../page/about/AboutMePage';
import CodePushPage from '../page/CodePushPage';
import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';

export const rootCom = 'Init';//设置根路由，对应RootNavigator中第一个初始化的路由名

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
});
const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    WebViewPage: {
        screen: WebViewPage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    AboutPage: {
        screen: AboutPage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    AboutMePage: {
        screen: AboutMePage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    CustomKeyPage: {
        screen: CustomKeyPage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    SortKeyPage: {
        screen: SortKeyPage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    SearchPage: {
        screen: SearchPage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    CodePushPage: {
        screen: CodePushPage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
}, {
    defaultNavigationOptions: {
        header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    },
});
export const RootNavigator = createAppContainer(createSwitchNavigator({
    [rootCom]: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    },
}));
/**
 * 1.初始化react-navigation与redux的中间件，
 * 该方法的一个很大的作用就是为createReduxContainer的key设置actionSubscribers(行为订阅者)
 * 设置订阅者@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L29
 * 检测订阅者是否存在@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L97
 * @type {Middleware}
 */
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root',
);

/**
 * 2.将根导航器组件传递给 createReduxContainer 函数,
 * 并返回一个将navigation state 和 dispatch 函数作为 props的新组件；
 * 注意：
 * a.要在createReactNavigationReduxMiddleware之后执行
 * b.key是createReduxContainer用来关联RootNavigator与middleware的
 * ，所以要和createReactNavigationReduxMiddleware的入参key保持一致
 */
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

/**
 * State到Props的映射关系
 * @param state
 */
const mapStateToProps = state => ({
    state: state.nav,//v2
});
/**
 * 3.连接 React 组件与 Redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState);
