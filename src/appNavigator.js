import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeContainer from './components/HomeContainer';
import QuizContainer from './components/QuizContainer';
import QuizPrep from './components/QuizPrep';
import QuizEndReport from './components/QuizEndReport';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeContainer},
  QuizContainer: {
    screen: QuizContainer, 
    navigationOptions:{
      title:'Quiz'
    }
  },
  QuizEndReport: {
    screen: QuizEndReport, 
    navigationOptions:{
      title:'End of Quiz',
    }
  },
  PrepareQuiz: {screen: QuizPrep},
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;