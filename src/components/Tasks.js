// Компонент Tasks отображает список задач

import Task from "./Task";

export default function Tasks({ tasks, callBackFunc }) {
    return (
        <div className={'board'}>
            <div className={'tasks'}>
                {/* Маппинг по массиву задач и создание компонента Task для каждой задачи */}
                {tasks.map(task => {
                    return (
                        <Task
                            key={task.id} // Уникальный ключ для компонента Task
                            id={task.id} // ID задачи
                            content={task.content} // Контент задачи
                            callBackFunc={callBackFunc} // Коллбэк-функция для удаления задачи
                        />
                    );
                })}
            </div>
        </div>
    );
}
