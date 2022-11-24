// == Import : npm
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// == Import : local
// Composants
import App from 'src/components/App';
import store from 'src/store';

// == Render
const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
