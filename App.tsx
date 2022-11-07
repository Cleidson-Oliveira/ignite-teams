import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import { Loading } from '@components/loading';
import { Routes } from './src/routes';
import theme from './src/theme';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar backgroundColor="transparent" style="light" translucent/>
        {fontsLoaded ? <Routes /> : <Loading />}
      </>
    </ThemeProvider>
  );
}
