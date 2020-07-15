import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from '../index';
import  Navigator  from './navigator';
import {SideDrawer} from 'components/containers';
import {withTheme} from 'hooks/withTheme';

const Drawer = createDrawerNavigator();

function SideNavigator({theme}) {
	return (
		<Drawer.Navigator 
			initialRouteName="Home"
			drawerContent={(props) =><SideDrawer  {...props} theme={theme} />} 
		>
			<Drawer.Screen name="Home" component={Navigator} />
		</Drawer.Navigator>
	);
}

export default withTheme(SideNavigator)