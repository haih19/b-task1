import './App.css';
import { HomePage } from './pages/home/homePage';
import { AboutPage } from './pages/about/aboutPage';
import { StudentPage } from './pages/student/studentPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListRoute = () => {
   return (
      <Routes>
         <Route>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/student'} element={<StudentPage />} />
         </Route>
      </Routes>
   );
};

function App() {
   return (
      <>
         <BrowserRouter>
            <ListRoute />
         </BrowserRouter>
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
         {/* Same as */}
         <ToastContainer />
      </>
   );
}

export default App;
