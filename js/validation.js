document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Отмена стандартной отправки

        // Сброс ошибок
        document.querySelectorAll('.text-red-500').forEach(el => el.classList.add('hidden'));
        form.querySelectorAll('input, select, textarea').forEach(el => {
            el.classList.remove('border-red-500');
        });

        let isValid = true;

        // Проверка имени (минимум 2 слова)
        const fullname = document.getElementById('fullname').value.trim();
        const words = fullname.split(' ').filter(word => word.length > 0);
        if (words.length < 2) {
            document.getElementById('fullname-error').classList.remove('hidden');
            document.getElementById('fullname').classList.add('border-red-500');
            isValid = false;
        }

        // Проверка email
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('email-error').classList.remove('hidden');
            document.getElementById('email').classList.add('border-red-500');
            isValid = false;
        }

        // Проверка темы
        const topic = document.getElementById('topic').value;
        if (!topic) {
            document.getElementById('topic-error').classList.remove('hidden');
            document.getElementById('topic').classList.add('border-red-500');
            isValid = false;
        }

        // Проверка сообщения
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            document.getElementById('message-error').classList.remove('hidden');
            document.getElementById('message').classList.add('border-red-500');
            isValid = false;
        }

        // Проверка чекбокса
        const consent = document.getElementById('consent').checked;
        if (!consent) {
            document.getElementById('consent-error').classList.remove('hidden');
            isValid = false;
        }

        if (isValid) {
            // Вызов логирования из logging.js
            logFormData({ fullname, email, topic, message });
            // Здесь можно добавить отправку на сервер, но пока только консоль
        }
    });
});