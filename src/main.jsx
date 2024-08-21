
import { createRoot } from 'react-dom/client'
import Shopping from './Shopping.jsx'

import { CartProvider } from './components/Cart/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <Shopping/>
  </CartProvider>,
)
