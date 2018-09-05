import React from 'react';
import PageTemplate from '../components/lesson10/PageTemplate';
import { default as ContainerTodoInput } from '../Containers/lesson14/TodoInput';
import { default as ContainerTodoList } from '../Containers/lesson14/TodoList';

export default () => {
	return (
		<PageTemplate>
			<ContainerTodoInput />
			<ContainerTodoList />
		</PageTemplate>
	);
};
