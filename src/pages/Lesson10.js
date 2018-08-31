import React from 'react';
import PageTemplate from '../components/lesson10/PageTemplate';
import TodoInput from '../components/lesson10/TodoInput';
import TodoList from '../components/lesson10/TodoList';

export default () => {
	return (
		<PageTemplate>
			<TodoInput />
			<TodoList />
		</PageTemplate>
	);
};
