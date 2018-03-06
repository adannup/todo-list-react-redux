import { createStore } from 'redux';
import reducerTodoApp from './reducerTodoApp';

const store = createStore(reducerTodoApp);
export default store;
