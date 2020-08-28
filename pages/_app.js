// Packages
import { Provider } from 'next-auth/client';

const App = ({ Component, pageProps }) => (
    <Provider>
        <Component {...pageProps} />
    </Provider>
)

export default App
