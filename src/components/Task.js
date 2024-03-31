// Компонент Task отображает отдельную задачу с контентом и кнопкой для удаления

export default function Task({ id, content, callBackFunc }) {
    const _id = id;

    // Функция обработки клика по кнопке удаления
    function onButtonClick() {
        // Вызываем коллбэк-функцию, передавая ей id задачи для удаления
        callBackFunc(_id);
    }

    return (
        <div className={'task'} data-key={id}>
            {/* Контент задачи */}
            <div className={'content'}>{content}</div>
            {/* Кнопка для удаления */}
            <button onClick={onButtonClick} className={'button_delete'}>X</button>
        </div>
    );
}
