import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { useLanguage } from './hooks/useLanguage';

function App() {
  useLanguage(); 

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;