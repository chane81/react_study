import React from 'react';
import PageTemplate from '../components/lesson10/PageTemplate';
import { default as ContainerTodoInput } from '../Containers/lesson14/TodoInput';
import { default as ContainerTodoList } from '../Containers/lesson14/TodoList';
import MapTest from '../components/lesson14/MapTest';

export default () => {
	return (
		<div>
			<MapTest />
			<PageTemplate>
				<ContainerTodoInput />
				<ContainerTodoList />
			</PageTemplate>
		</div>
	);
};
