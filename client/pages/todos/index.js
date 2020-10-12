import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import axios from 'axios';
import TodoCard from '../../components/TodoCard';
import Loading from '../../components/Loading';

const todos = (props) => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                'https://jsonplaceholder.typicode.com/todos'
            );
            setTodos(res.data.slice(0, 10));
        };
        fetchData();
    }, []);
    const markComplete = (id) => {
        const clone = todos.slice();
        for (let i = 0; i < clone.length; i++) {
            if (clone[i].id === id) {
                clone[i].completed = true;
                break;
            }
        }
        setTodos(clone);
    };
    const renderTodos = () => {
        if (todos.length === 0) return <Loading></Loading>;
        const todoList = todos.map((todo) => {
            return (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    mark={markComplete}
                ></TodoCard>
            );
        });
        return (
            <Grid container spacing={3}>
                {todoList}
            </Grid>
        );
    };

    return (
        <Layout>
            <h1 style={{ margin: '20px 0' }}>This is list of todos</h1>
            {renderTodos()}
        </Layout>
    );
};

export default todos;
