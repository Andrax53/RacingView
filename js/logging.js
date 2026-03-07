function logFormData(data) {
    console.log('Форма отправлена:');
    console.log('Имя:', data.fullname);
    console.log('Email:', data.email);
    console.log('Тема:', data.topic);
    console.log('Сообщение:', data.message);
}