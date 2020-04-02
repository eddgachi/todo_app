import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const initialTodos = [
        { id: 1, task: "Clean the fishtank", completed: false },
        { id: 2, task: "Wash the car", completed: true },
        { id: 3, task: "Grow Beard", completed: false }
    ]
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
    }
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
    }
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color="primary" position='static' style={{ height: "64px" }}>
                <ToolBar>
                    <Typography color="inherit">TODO APP WITH REACT HOOKS + MATERIAL UI</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: '3rem'}}>
                <Grid item xs={11} md={8} lg={5}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;