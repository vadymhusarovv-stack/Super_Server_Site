import telebot
from telebot import types

# Твій токен
TOKEN = 'Токен'
bot = telebot.TeleBot(TOKEN)

# Данні сервера для швидкого редагування
SERVER_IP = "listing-dans.gl.joinmc.link"  # Впиши сюди свій точний IP або ngrok-лінк!
SERVER_VERSION = "1.21.10"

# 1. Обробник команди /start (вітання з кнопками)
@bot.message_handler(commands=['start'])
def send_welcome(message):
    # Створюємо інлайн-кнопки під повідомленням
    markup = types.InlineKeyboardMarkup(row_width=2)
    
    # Кнопка-посилання на GitHub репозиторій твого сайту Super_Server_Site
    btn_site = types.InlineKeyboardButton("🌐 Сайт (GitHub)", url="https://github.com/vadymhusarovv-stack/Super_Server_Site")
    
    # Кнопки, які викликають функції в боті
    btn_ip = types.InlineKeyboardButton("🔌 Отримати IP", callback_data="get_ip")
    btn_recipes = types.InlineKeyboardButton("📜 Кастомні крафти", callback_data="get_recipes")
    btn_status = types.InlineKeyboardButton("🛡️ Стан Терміналу", callback_data="system_status")
    
    # Додаємо кнопки в меню
    markup.add(btn_site)
    markup.add(btn_ip, btn_recipes)
    markup.add(btn_status)
    
    welcome_text = (
        "⚙️ **Термінал Організації «Світ» активовано.**\n"
        "Введіть протокол доступу або скористайтеся швидкими кнопками нижче:"
    )
    
    bot.send_message(message.chat.id, welcome_text, reply_markup=markup, parse_mode="Markdown")


# 2. Окрема швидка команда /ip
@bot.message_handler(commands=['ip'])
def show_ip(message):
    ip_text = (
        f"🎮 **Дані для підключення до сервера:**\n\n"
        f"📍 **IP:** `{SERVER_IP}` *(натисни, щоб скопіювати)*\n"
        f"⚙️ **Версія:** `{SERVER_VERSION}`\n\n"
        f"⚡ _Приєднуйся, Організація чекає на твій онлайн!_"
    )
    bot.send_message(message.chat.id, ip_text, parse_mode="Markdown")


# 3. Обробник натискань на інлайн-кнопки (Callback)
@bot.callback_query_handler(func=lambda call: True)
def callback_listener(call):
    if call.data == "get_ip":
        # Відправляємо повідомлення з IP
        ip_text = (
            f"🔌 **Адреса підключення:**\n"
            f"`{SERVER_IP}` *(клацни для копіювання)*\n"
            f"Версія гри: `{SERVER_VERSION}`"
        )
        bot.send_message(call.message.chat.id, ip_text, parse_mode="Markdown")
        bot.answer_callback_query(call.id)  # Прибирає завантаження на кнопці
        
    elif call.data == "get_recipes":
        recipes_text = (
            "📜 **База даних CustomRecipes:**\n\n"
            "На сервері активовано кастомні рецепти! "
            "Шукай нові крафти безпосередньо у грі в книзі рецептів. "
            "Конфігурацію адаптовано під версію 1.21.10! 🛠️"
        )
        bot.send_message(call.message.chat.id, recipes_text, parse_mode="Markdown")
        bot.answer_callback_query(call.id)
        
    elif call.data == "system_status":
        status_text = (
            "🛡️ **СТАТУС СИСТЕМ БЕЗПЕКИ:**\n\n"
            "🟢 Головний сервер: **ONLINE**\n"
            "🟢 Модуль резервного копіювання (.tar.gz): **АКТИВНИЙ**\n"
            "🔴 Склад Віталія: **⚠️ ЗАГРОЗА ПРОРИВУ** (Об'єкт наближається до ящиків)"
        )
        bot.send_message(call.message.chat.id, status_text, parse_mode="Markdown")
        bot.answer_callback_query(call.id)


# 4. Обробник звичайних текстових повідомлень
@bot.message_handler(func=lambda message: True)
def echo_all(message):
    user_text = message.text.lower()
    
    if user_text == "віталій":
        bot.reply_to(message, "⚠️ ОБ'ЄКТ ПІД СУВОРИМ НАГЛЯДОМ. НЕ НАБЛИЖАЙТЕСЯ ДО СКЛАДУ.")
    elif "айпі" in user_text or "ip" in user_text:
        # Якщо користувач просто пише текстом "який айпі" - бот теж зрозуміє!
        show_ip(message)
    elif "крафт" in user_text or "рецепт" in user_text:
        bot.reply_to(message, "⚙️ Завантажую базу даних плагіну `CustomRecipes`... Усі кастомні крафти доступні в грі через книгу рецептів!")
    else:
        bot.reply_to(message, f"Отримано невідому команду: {message.text}\n\n🤖 _Спробуй натиснути кнопку в меню /start або напиши /ip!_")


# Запуск бота
bot.infinity_polling()