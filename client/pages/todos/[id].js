import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';

const Todo = () => {
    const router = useRouter();
    const { id } = router.query;
    const [todo, setTodo] = useState(null);
    useEffect(() => {
        const fetchdata = async () => {
            if (isNaN(id)) return;
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/todos/${id}`
            );
            setTodo(res.data);
        };
        fetchdata();
    }, [id]);
    const renderTodo = () => {
        if (!todo) return <Loading></Loading>;
        else {
            return (
                <div>
                    <h1>Title: {todo.title}</h1>
                    <p>Create by user id: {todo.userId}</p>
                </div>
            );
        }
    };
    return (
        <Layout>
            <div style={{ marginTop: '20px' }}>{renderTodo()}</div>
        </Layout>
    );
};

export default Todo;
