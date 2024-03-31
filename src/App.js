import { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

// Адрес API для заметок
const notesAPI = 'http://localhost:7777/notes';

function App() {
    // Состояние для хранения списка задач
    let [tasks, setTasks] = useState([]);

    // Загрузка списка задач при монтировании компонента
    useEffect(() => {
        updateTasks();
    }, []);

    // Обработчик нажатия кнопки "Создать"
    async function onButtonCreateClick(content) {
        // Параметры запроса для создания новой задачи
        let fetchParam = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: 0, content: content })
        };
        // Отправка запроса к API
        let response = await fetch(notesAPI, fetchParam);
        // Если задача успешно создана (статус 204), обновляем список задач
        if (response.status === 204) {
            updateTasks();
        }
    }

    // Обработчик нажатия кнопки "Удалить"
    async function onButtonDeleteClick(id) {
        // Параметры запроса для удаления задачи
        let fetchParam = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        // Отправка запроса к API для удаления задачи по ID
        await fetch(notesAPI + '/' + id, fetchParam);
        // Обновляем список задач после удаления
        updateTasks();
    }

    // Обработчик нажатия кнопки "Обновить"
    function onButtonUpdateClick() {
        updateTasks();
    }

    // Функция для обновления списка задач из API
    async function updateTasks() {
        // Запрос к API для получения списка задач
        let response = await fetch(notesAPI);
        // Получение данных в формате JSON
        const data = await response.json();
        // Установка нового списка задач в состояние
        setTasks(data);
    }

    return (
        <>
            {/* Верхняя часть приложения: заголовок */}
            <Header callBackFunc={onButtonUpdateClick} />
            {/* Список задач */}
            {tasks ? <Tasks tasks={tasks} callBackFunc={onButtonDeleteClick} /> : <></>}
            {/* Нижняя часть приложения: форма для создания новой задачи */}
            <Footer callBackFunc={onButtonCreateClick} />
        </>
    );
}

export default App;
