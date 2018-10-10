# React-Navigation Tabs Header example

While structuring my app, I wanted to have one main StackNavigator, which 1st (and default) route is a TabNavigator.

So I structured my app that way but I encountered an unexpected behaviour.

When nesting a TabNavigator inside a StackNavigator, it does not seem to take in account the `navigationOptions` that are defined in each screen.

I expected the `navigationOptions` of my `Tab1` (or `Tab2`) component to set the `Header` for that screen.

```
// Router.js
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
```

```
// Tab1.js
static navigationOptions = {
  title: 'Tab1',
};
```

```
// Tab2.js
static navigationOptions = {
  title: 'Tab2',
  headerStyle: {
      backgroundColor: 'orange',
      borderBottomWidth: 0,
      elevation: 0,
  },
  headerTintColor: 'pink',
};
```

This repository is a repro of the issue:

![](./screenshot.png)
