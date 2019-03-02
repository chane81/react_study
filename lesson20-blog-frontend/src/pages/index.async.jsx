import asyncComponent from 'lib/asyncComponent';

export const ListPage = asyncComponent(() => import('pages/ListPage'));
export const PostPage = asyncComponent(() => import('pages/PostPage'));
export const EditorPage = asyncComponent(() => import('pages/EditorPage'));
export const NotFoundPage = asyncComponent(() => import('pages/NotFoundPage'));
