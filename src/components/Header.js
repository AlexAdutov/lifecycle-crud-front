// Компонент Header отображает заголовок и кнопку для обновления заметок

export default function Header({ callBackFunc }) {
    // Функция обработки клика по кнопке обновления
    function onButtonClick() {
        // Вызываем коллбэк-функцию, которая обновляет список заметок
        callBackFunc();
    }

    return (
        <div className={'header'}>
            {/* Заголовок */}
            <span className={'header_title'}>Заметки</span>
            {/* Кнопка для обновления */}
            <button onClick={onButtonClick} className={'button_update'}></button>
        </div>
    );
}
