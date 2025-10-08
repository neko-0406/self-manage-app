import { AppProvider } from './contexts/AppProvider';
import { CssBaseline } from '@mui/material';
import Layout from './components/Layout';

export default function App() {
  return (
    <AppProvider>
      <CssBaseline />
      <Layout />
    </AppProvider>
  );
}
