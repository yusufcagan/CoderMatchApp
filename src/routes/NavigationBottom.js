import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native'
import MatchScreen from '../screens/MatchScreen';
import MyFavorites from '../screens/MyFavorites';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CardIcon from '../assets/card.png'
import HeartIcon from '../assets/heart.png'
import ChatIcon from '../assets/message.png'
import PersonIcon from '../assets/people.png'
import { screenWidth } from '../utils/AppDimensions';

const Tab = createBottomTabNavigator();

function MyTab() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen
                name="MatchScreen"
                component={MatchScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                {
                                    focused && (
                                        <View style={{ width: screenWidth / 6, backgroundColor: '#e94057', height: 2, position: 'absolute', top: 0 }} />
                                    )
                                }
                                <Image
                                    source={CardIcon}
                                    style={{ width: screenWidth / 15, height: screenWidth / 16, tintColor: focused && '#e94057' }}
                                />
                            </>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="MyFavorites"
                component={MyFavorites}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                {
                                    focused && (
                                        <View style={{ width: screenWidth / 6, backgroundColor: '#e94057', height: 2, position: 'absolute', top: 0 }} />
                                    )
                                }
                                <Image
                                    source={HeartIcon}
                                    style={{ width: screenWidth / 14, height: screenWidth / 16, tintColor: focused && '#e94057' }}
                                />
                            </>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                {
                                    focused && (
                                        <View style={{ width: screenWidth / 6, backgroundColor: '#e94057', height: 2, position: 'absolute', top: 0 }} />
                                    )
                                }

                                <Image
                                    source={ChatIcon}
                                    style={{ width: screenWidth / 15, height: screenWidth / 16, tintColor: focused && '#e94057' }}
                                />
                            </>

                        )
                    }
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                {
                                    focused && (
                                        <View style={{ width: screenWidth / 6, backgroundColor: '#e94057', height: 2, position: 'absolute', top: 0 }} />
                                    )
                                }
                                <Image
                                    source={PersonIcon}
                                    style={{ width: screenWidth / 15, height: screenWidth / 16, tintColor: focused && '#e94057' }}
                                />
                            </>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTab