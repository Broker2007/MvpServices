import { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { MainPage } from '@/pages/MainPage';

function App() {
    return (

        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
