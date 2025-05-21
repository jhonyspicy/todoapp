import React from 'react';

export const TodoList = ({ taskList, setTaskList }) => {
    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id != id));
    };

    const handleCompleted = (id) => {
        setTaskList(
            taskList.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            })
        );
    };

    return (
        <div className="todoList">
            <div className="todos">
                {taskList.map((task) => (
                    <div
                        className={`todo ${task.completed ? 'completed' : ''}`}
                        key={task.id}
                    >
                        <div className="todoText">
                            <span>{task.text}</span>
                        </div>
                        <div className="icons">
                            <button onClick={() => handleCompleted(task.id)}>
                                <i className="fa-regular fa-square-check"></i>
                            </button>
                            <button onClick={() => handleDelete(task.id)}>
                                <i className="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
