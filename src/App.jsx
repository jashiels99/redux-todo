import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DefaultLayout from './layouts/Default';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <DefaultLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </DefaultLayout>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
