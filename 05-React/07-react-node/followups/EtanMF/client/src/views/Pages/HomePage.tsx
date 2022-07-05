import {useEffect, useTransition} from 'react';
import {Outlet, useLocation, Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {createBrowserHistory} from 'history';
import NewArticle from '../Components/NewArticle';
import AllUsers from '../Components/AllUsers';
import Back from '../Components/Back';
import AllArticles from '../Components/AllArticles';
import {ArticleInfoParams} from '../../AnimatedRoutes';
import ArticleSearch from '../Components/ArticleSearch';

interface HomePageProps {
    handleGetUsers: Function;
    handleOpenUser: Function;
    userList: Array<UserInfo>;
    handleCreateNewArticle: Function;
    getAllArticles: Function;
    articleList: Array<ArticleInfoParams>;
    handleSetSingleArticle: Function;
    handleSearchTerm: Function;
    handleDeleteArticle: Function;
    handleUpdateArticle: Function;
}

interface UserInfo {
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    workSpace: string;
    _id: string;
}

function HomePage(props: HomePageProps) {
    const {userList, handleOpenUser, handleGetUsers, handleCreateNewArticle, getAllArticles, articleList, handleSetSingleArticle, handleSearchTerm, handleDeleteArticle, handleUpdateArticle} = props;
    const [isPending, startTransition] = useTransition();
    useEffect(() => {
        startTransition(() => {
            handleGetUsers();
            getAllArticles();
        });
        return () => {};
    }, []);
    return (
        <motion.div
            className='wrapper'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            // transition={{ duration: 2 }}
        >
            <div className='wrapper__HomePage'>
                <Back />
                {/* <ArticleSearch /> */}
                <NewArticle handleCreateNewArticle={handleCreateNewArticle} />
                {isPending && <p>loading...</p>}
                <div className='wrapper__HomePage-lists'>
                    {userList && <AllUsers userList={userList} handleOpenUser={handleOpenUser} />}

                    {articleList && <AllArticles handleDeleteArticle={handleDeleteArticle} handleUpdateArticle={handleUpdateArticle} articleList={articleList} handleSetSingleArticle={handleSetSingleArticle} handleSearchTerm={handleSearchTerm} />}
                </div>
                <Outlet />
            </div>
        </motion.div>
    );
}

export default HomePage;
