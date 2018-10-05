import AsyncComponent from '../lib/AsyncComponent';

export const Home = AsyncComponent(() => import('./Home'));
export const About = AsyncComponent(() => import('./About'));
export const Post = AsyncComponent(() => import('./Post'));
export const Posts = AsyncComponent(() => import('./Posts'));
export const Hello = AsyncComponent(() => import('./Hello'));
