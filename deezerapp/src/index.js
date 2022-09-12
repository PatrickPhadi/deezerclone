import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackRoutes } from './routes';
import { theme } from "./shared/assets/theme";

const Stack = createNativeStackNavigator();

const AppRoot = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {stackRoutes.map((route, key) =>
          <Stack.Screen
            key={key}
            name={route.title}
            options={route.options}
            component={route.component} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoot;