import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Test from './Test';

const MainTabNavigator = createBottomTabNavigator(
    {
        Tab1,
        Tab2,
    },
    {
        tabBarOptions: {
            activeTintColor: 'red',
            style: {
                backgroundColor: 'yellow',
            },
        },
    }
);

const RootNavigator = createStackNavigator({
  Tabs: MainTabNavigator,
  Test,
}, {
  navigationOptions: {
      headerBackTitle: null,
      headerTintColor: 'blue',
  }
});

const prevGetStateForActionHomeStack = RootNavigator.router.getStateForAction;
RootNavigator.router.getStateForAction = (action, state) => {
    if (state && action.type === 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    return prevGetStateForActionHomeStack(action, state);
};

export default RootNavigator;
