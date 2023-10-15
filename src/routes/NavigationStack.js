import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import SignUp from '../screens/SignUp';
import Questions from '../screens/Questions/QuestionsStart';
import QuestionsGender from '../screens/Questions/QuestionsGender';
import QuestionsOr from '../screens/Questions/QuestionsOr';
import QuestionsSelect from '../screens/Questions/QuestionsSelect';
import MatchFoundScreen from '../screens/MatchFoundScreen';
import MyTab from './NavigationBottom';


const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Questions" component={Questions} />
            <Stack.Screen name="QuestionsGender" component={QuestionsGender} />
            <Stack.Screen name="QuestionsOr" component={QuestionsOr} />
            <Stack.Screen name="QuestionsSelect" component={QuestionsSelect} />
            <Stack.Screen name="MatchFoundScreen" component={MatchFoundScreen} />
            <Stack.Screen name="MyTab" component={MyTab} />
        </Stack.Navigator>
    );
}

export default MyStack