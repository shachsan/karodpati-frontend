import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeContainer from './components/HomeContainer';
import QuizContainer from './components/QuizContainer';
import QuizPrep from './components/QuizPrep';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeContainer},
  Quiz: {screen: QuizContainer},
  PrepareQuiz: {screen: QuizPrep},
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;