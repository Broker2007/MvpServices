import { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { MainPage } from '@/pages/MainPage';

function App() {
    return (

        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                {/* <Header /> */}
                <div className="content-page">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                    </Routes>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
