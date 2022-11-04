import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme';
import Home from '@screens/home';
import Loading from '@components/loading';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar backgroundColor="transparent" style="light" translucent/>
        {fontsLoaded ? <Home /> : <Loading />}
      </>
    </ThemeProvider>
  );
}
