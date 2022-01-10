import {lazy, Suspense} from "react";
import {Route, Routes , useLocation} from 'react-router-dom';
import ScrollTop from './components/helper/ScrollTop';
import PrivateRoute from './components/helper/PrivateRoute';
import AuthVerify from './components/helper/AuthVerify';
import {AnimatePresence} from "framer-motion";

//=====================//
//===== component =====//
//=====================//

import Loading from './core/Loading';
import Notification from './core/Notification';

//================//
//===== page =====//
//================//

const Home = lazy(() => import('./pages/main/Home'));
const Cart = lazy(() => import('./pages/main/Cart'));
const Book = lazy(() => import('./pages/main/Book'));
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Dashboard = lazy(() => import('./pages/account/Dashboard'));
const Books = lazy(() => import('./pages/account/Books'));
const AddBook = lazy(() => import('./pages/account/AddBook'));
const EditBook = lazy(() => import('./pages/account/EditBook'));
const Categories = lazy(() => import('./pages/account/Categories'));
const AddCategory = lazy(() => import('./pages/account/AddCategory'));
const EditCategory = lazy(() => import('./pages/account/EditCategory'));
const Users = lazy(() => import('./pages/account/Users'));
const Orders = lazy(() => import('./pages/account/Orders'));
const Order = lazy(() => import('./pages/account/Order'));
const Profile = lazy(() => import('./pages/account/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));


const App = () => {

    const location = useLocation();

    const routes = [
        {path: "/" , element: <Home/> , requireAdmin: false , requireAuth: false},
        {path: "/books/:id" , element: <Book/> , requireAdmin: false , requireAuth: false},
        {path: "/cart" , element: <Cart/> , requireAdmin: false , requireAuth: true},
        {path: "/login" , element: <Login/> , requireAdmin: false , requireAuth: false},
        {path: "/register" , element: <Register/> , requireAdmin: false , requireAuth: false},
        {path: "/account/dashboard" , element: <Dashboard/> , requireAdmin: false , requireAuth: true},
        {path: "/account/books" , element: <Books/> , requireAdmin: true , requireAuth: true},
        {path: "/account/books/add" , element: <AddBook/> , requireAdmin: true , requireAuth: true},
        {path: "/account/books/:id/edit" , element: <EditBook/> , requireAdmin: true , requireAuth: true},
        {path: "/account/categories" , element: <Categories/> , requireAdmin: true , requireAuth: true},
        {path: "/account/categories/add" , element: <AddCategory/> , requireAdmin: true , requireAuth: true},
        {path: "/account/categories/:id/edit" , element: <EditCategory/> , requireAdmin: true , requireAuth: true},
        {path: "/account/orders" , element: <Orders/> , requireAdmin: false , requireAuth: true},
        {path: "/account/orders/:id" , element: <Order/> , requireAdmin: false , requireAuth: true},
        {path: "/account/users" , element: <Users/> , requireAdmin: true , requireAuth: true},
        {path: "/account/profile" , element: <Profile/> , requireAdmin: false , requireAuth: true},
        {path: "/coming-soon" , element: <ComingSoon/> , requireAdmin: false , requireAuth: false},
        {path: "*" , element: <NotFound/> , requireAdmin: false , requireAuth: false},
    ];

    return (
        <>
            {/* routes */}
            <AnimatePresence
                initial={false}
                exitBeforeEnter
                onExitComplete={() => window.scrollTo(0, 0)}
            >

                <Routes key={location.pathname} location={location}>

                    {
                        routes.map(route =>
                            <Route
                                key={route}
                                path={route.path}
                                index
                                element={
                                    <PrivateRoute
                                        requiredAdmin={route.requireAdmin}
                                        requiredAuth={route.requireAuth}
                                    >
                                        <Suspense fallback={false}>
                                            {route.element}
                                        </Suspense>
                                    </PrivateRoute>
                                }
                            />
                        )
                    }

                </Routes>

            </AnimatePresence>

            {/* notification */}
            <Notification/>

            {/* loading */}
            <Loading/>

            {/* scroll top */}
            <ScrollTop/>

            {/* auth verify */}
            <AuthVerify/>

        </>
    );
};

export default App;
