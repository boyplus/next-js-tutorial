import styles from '../styles/TodoCard.module.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const TodoCard = ({ todo, mark }) => {
    const displayTitle = () => {
        if (todo.title.length <= 15) return todo.title;
        return todo.title.slice(0, 15) + '...';
    };
    const renderComplete = () => {
        if (todo.completed) {
            return (
                <div style={{ padding: '5px 0' }}>
                    <p style={{ color: 'green' }}>Completed</p>
                </div>
            );
        } else {
            return (
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => mark(todo.id)}
                >
                    complete
                </Button>
            );
        }
    };
    return (
        <Grid item xs={12} sm={6} md={4}>
            <div className={styles.card}>
                <h2>{displayTitle()}</h2>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '10px',
                    }}
                >
                    <div>
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                        >
                            see detailed
                        </Button>
                    </div>
                    <div>{renderComplete()}</div>
                </div>
            </div>
        </Grid>
    );
};
export default TodoCard;
