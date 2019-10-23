import {combineReducers} from 'redux'
import theme from './theme'
import popular from './popular'
import trending from './trending'
import favorite from './favorite'
import language from './language'
import search from './search'
import {rootCom, RootNavigator} from '../navigator/AppNavigators';

//1.指定默认state（根路由的初始化state）
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

/**
 * 2.为导航器创建一个reducer，目的是通过action与state来获取导航器新的状态
 */
const navReducer = (state = navState, action) => {
    //根据action与state获取导航器的新的状态（nextState）
    const nextState = RootNavigator.router.getStateForAction(action, state);
    // 如果`nextState`为null或未定义，只需返回原始`state`
    return nextState || state;
};

/**
 * 3.合并reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const index = combineReducers({
    nav: navReducer,
    theme: theme,
    popular: popular,
    trending: trending,
    favorite: favorite,
    language: language,
    search: search,
});

export default index;