import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

/**
 * BarberSystem Web — Application Root
 *
 * Placeholder — React Router, pages and components will be added
 * in subsequent Issues as features are implemented.
 */

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('[BarberSystem] Root element #root not found. Check apps/web/index.html.');
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <div>BarberSystem — em desenvolvimento</div>
  </StrictMode>,
);
