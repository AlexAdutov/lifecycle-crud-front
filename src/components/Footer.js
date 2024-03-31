// Компонент Footer отвечает за отображение формы для создания новой заметки

export default function Footer({ callBackFunc }) {
    // Функция обработки клика по кнопке создания заметки
    function onButtonClick() {
        // Получаем доступ к элементу textarea по классу 'notes_input'
        const element = document.getElementsByClassName('notes_input')[0];
        // Вызываем коллбэк-функцию, передавая ей значение из текстового поля
        callBackFunc(element.value);
    }

    return (
        <div className={'footer'}>
            {/* Заголовок блока */}
            <span className={'footer_title'}>Новая заметка</span>
            {/* Поле ввода текста для заметки */}
            <textarea className={'notes_input'}></textarea>
            {/* Кнопка для создания новой заметки */}
            <button onClick={onButtonClick} className={'button_create'}></button>
        </div>
    );
}
