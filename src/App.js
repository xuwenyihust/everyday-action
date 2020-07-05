import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoList from './containers/TodoList/TodoList';

function App() {
  return (
    <div>
      <Layout>
        <TodoList />
      </Layout>
    </div>
  );
}

export default App;
