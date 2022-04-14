import './App.scss';
import { AppRouter } from './app/router';
import { AppContext, DefaultState } from './store/AppContext';

function App() {
  return (
    <AppContext.Provider
        value={{
          state: DefaultState,
        }}>
        <AppRouter />
      </AppContext.Provider>
  );
}

export default App;
