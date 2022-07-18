import {Routes, Route, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {AnimatePresence} from 'framer-motion';
import HomePage from './views/Pages/HomePage';
import Login from './views/Pages/Login';
import User from './views/Pages/User';
import Article from './views/Pages/Article';
import axios from 'axios';

export interface UserInfo {
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    workSpace: string;
    _id: string;
}

export interface ArticleInfoParams {
    firstName: string;
    lastName: string;
    position: string;
    workSpace: string;
    _id: string;
    ownerId: string;
    title: string;
    content: string;
}

function AnimatedRoutes() {
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false);
    const [userList, setUserList] = useState<Array<UserInfo>>([]);
    const [currentUser, setCurrentUser] = useState<UserInfo>();
    const [articleList, setArticleList] = useState<Array<ArticleInfoParams>>([]);
    const [article, setArticle] = useState<ArticleInfoParams>();
    const [articleSearchTerm, setArticleSearchTerm] = useState('');
    const [loginUserId, setLoginUserId] = useState('');

    async function handleCreate(e: any) {
        try {
            e.preventDefault();

            let {firstName, password, lastName, email, position, workSpace} = e.target.elements;
            firstName = firstName.value;
            lastName = lastName.value;
            password = password.value;
            email = email.value;
            position = position.value;
            workSpace = workSpace.value;

            if (!firstName || !lastName || !password || !email || !position || !workSpace) throw new Error('One of the arguments are not provided in handleCreate in AnimatedRoutes');

            const newUser = {
                firstName,
                lastName,
                password,
                email,
                position,
                workSpace,
            };

            const {data} = await axios.post('/api/users/add-user', newUser);
            const {ok} = data;
            if (!ok) throw new Error('ok is not true');
            navigate('/Home');
            e.target.reset();
        } catch (error) {
            console.error(error);
        }
    }
    async function handleLogin(e: any) {
        try {
            e.preventDefault();
            let {email, password}: any = e.target.elements;
            email = email.value;
            password = password.value;
            const {data} = await axios.post('/api/users/login', {
                email,
                password,
            });
            const {ok, userId} = data;
            setLoginUserId(userId);

            if (!ok) throw new Error('ok is not true');
            navigate('/Home');
            e.target.reset();
        } catch (error) {
            console.error(error);
        }
    }

    async function handleGetUsers(id?: string) {
        try {
            const {data} = await axios.post('/api/users/get-users', {
                id,
            });
            if (data.userList) {
                setUserList(data.userList);
                return;
            }
            if (data.thisUser) {
                setCurrentUser(data.thisUser);
                return;
            }
        } catch (error) {
            console.log({
                error,
            });
        }
    }
    function handleOpenUser(id: string) {
        try {
            navigate(`/User/${id}`);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleCreateNewArticle(e: any) {
        try {
            e.preventDefault();

            const title = e.target.newArticleTitle.value;
            const content = e.target.newArticleContent.value;

            const {data} = await axios.post('/api/articles/create', {
                title,
                content,
            });

            if (!data.error) {
                // e.target.reset();
                getAllArticles();
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function getAllArticles(ownerId?: string) {
        try {
            const {data} = await axios.post('/api/articles/get-articles', {
                ownerId,
            });
            setArticleList(data.result);
        } catch (error) {
            console.error(error);
        }
    }

    function handleSetSingleArticle(article: ArticleInfoParams) {
        setArticle(article);
        navigate(`/Article/${article._id}`);
    }

    function handleSearchArticles(searchTerm: string) {
        if (!searchTerm) {
            return articleList;
        }

        return articleList.filter((article) => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    const filteredArticleList = handleSearchArticles(articleSearchTerm);

    function handleSearchTerm(e: any) {
        // console.log(e.target.value.toLowerCase(), "setter");
        setArticleSearchTerm(e.target.value);
    }

    async function handleUpdateArticle(ev: any, articleId: string) {
        try {
            ev.preventDefault();
            let {updateArticleTitle, updateArticleContent} = ev.target.elements;
            updateArticleTitle = updateArticleTitle.value;
            updateArticleContent = updateArticleContent.value;
            const {data} = await axios.put('/api/articles/update-article', {updateArticleTitle, updateArticleContent, articleId});
            getAllArticles(loginUserId)
        } catch (error) {
            console.log(error);
        }
    }
async function handleDeleteArticle(ownerId: string, articleId: string){
    try {
        const {data} = await axios.post('/api/articles/delete-article', { ownerId: ownerId, articleId: articleId})

getAllArticles(loginUserId)

         
    } catch (error) {
        console.log(error);
    }
}
    return (
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<Login handleLogin={handleLogin} handleCreate={handleCreate} />} />
                <Route path='Home' element={<HomePage handleDeleteArticle={handleDeleteArticle} handleUpdateArticle={handleUpdateArticle} userList={userList} handleGetUsers={handleGetUsers} handleOpenUser={handleOpenUser} handleCreateNewArticle={handleCreateNewArticle} getAllArticles={getAllArticles} articleList={filteredArticleList} handleSetSingleArticle={handleSetSingleArticle} handleSearchTerm={handleSearchTerm} />} />
                <Route path='User'>
                    <Route path=':userId' element={<User handleDeleteArticle={handleDeleteArticle} handleUpdateArticle={handleUpdateArticle} handleGetUsers={handleGetUsers} currentUser={currentUser} getAllArticles={getAllArticles} articleList={filteredArticleList} handleSetSingleArticle={handleSetSingleArticle} handleSearchTerm={handleSearchTerm} loginUserId={loginUserId} />}></Route>
                </Route>
                <Route path='Article'>
                    <Route path=':articleId' element={<Article article={article} />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
