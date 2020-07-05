import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import TodoListBuilder from './containers/TodoListBuilder/TodoListBuilder';

function App() {
  return (
    <div>
      <Layout>
        <TodoListBuilder />
      </Layout>
    </div>
  );
}

export default App;
