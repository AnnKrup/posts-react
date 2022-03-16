import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import React from "react";
import Login from "../pages/Login";
import Error from "../pages/Error";

export const privetRoutes = [
    { path: '/about', component: <About/>, exact: true },
    { path: '/', component: <Posts/>, exact: true },
    { path: '/login', component: <Posts/>, exact: true },
    { path: '/posts/:id', component: <PostIdPage/>, exact: true },
    { path: '/*', component: <Error/>, exact: true },
];

export const publicRoutes = [
    { path: '/*', component: <Login/>, exact: true },
];