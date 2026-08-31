# 🕵️‍♂️ Розслідування АРГ №1: Таємничий Архів та Системний Збій

---

### ⚠️ Вступний інструктаж
Цей гайд проведе вас крізь перше глобальне розслідування на сервері. Якщо ви готові розкрити таємниці Загубленої Епохи та дізнатися, що передувало появі робота Aeterna, суворо дотримуйтесь інструкцій титанів-архітекторів.

---

## 📈 Покрокове проходження АРГ

### Крок 1: Ініціалізація та пошук вихідних файлів
Перейдіть на головну сторінку офіційного сайту сервера. Прокрутіть сторінку в самий затишний куточок — донизу. Знайдіть блок завантажень та натисніть зелену кнопку **«Завантажити скрипт автоматизації сервера v1.0.3»**. 

*Після проходження діалогових вікон система завантажить на ваш комп'ютер архів із 3 важливими файлами.*

<div style="display: inline-block; padding: 5px; background-color: #181825; border: 1px solid #45475a; border-radius: 6px; margin-top: 10px;">
  <img src="images/guilds/arg1/download_btn.png" style="border-radius: 4px; display: block;"/>
</div>

---

### Крок 2: Читання Засекреченого Архіву
Відкрийте перший текстовий файл із назвою `kingdom_lore_archive.txt`. Уважно вивчіть його вміст. У звіті про інцидент ви знайдете пряму вказівку від адміністрації: для подальшого розслідування вам знадобиться супутній Excel-документ.

<div style="display: inline-block; padding: 5px; background-color: #181825; border: 1px solid #45475a; border-radius: 6px; margin-top: 10px;">
  <img src="images/guilds/arg1/lore_txt_archive.png" style="border-radius: 4px; display: block;"/>
</div>

---

### Крок 3: Аналіз системного логу та пошук HEX-дампу
Відкрийте файл `system_restore_log.xlsx`. Ви побачите таблицю відновлення системи з помилкою дешифрування. Зверніть увагу на нижні рядки логу, де вказано підказку: *"КЛЮЧ ДЕКОДУВАННЯ: Переведіть НЕХ у текстовий рядок (ASCII)"*.

<div style="display: inline-block; padding: 5px; background-color: #181825; border: 1px solid #45475a; border-radius: 6px; margin-top: 10px;">
  <img src="images/guilds/arg1/excel_system_log.png" style="border-radius: 4px; display: block;"/>
</div>

<div style="display: inline-block; padding: 5px; background-color: #181825; border: 1px solid #45475a; border-radius: 6px; margin-top: 10px;">
  <img src="images/guilds/arg1/excel_hex_hint.png" style="border-radius: 4px; display: block;"/>
</div>

---

### Крок 4: Дешифрування першого коду
Скопіюйте всі шістнадцяткові цифри (HEX) з колонки логу та перейдіть на будь-який зручний онлайн-декодер. Рекомендований інструмент — [Декодер Google Apps Toolbox](https://toolbox.googleapps.com/apps/encode_decode/?lang=uk). 
Вставте цифри, оберіть параметр **«Шістнадцятковий код»** та натисніть «Надіслати». Отриманий результат відкриє вам шлях далі.

<div style="display: inline-block; padding: 5px; background-color: #181825; border: 1px solid #45475a; border-radius: 6px; margin-top: 10px;">
  <img src="images/guilds/arg1/google_decoder_result.png" style="border-radius: 4px; display: block;"/>
</div>

---

### Крок 5: Злам секретного архіву та перехід на GitHub
Використовуючи підказки, відкрийте файл `secret_lore_archive.docx` та дешифруйте його вміст. Після цього вирушайте у вебпростір:
1. Перейдіть до офіційного GitHub-репозиторію сайту та прочитайте гілку обговорення в [Issue #1](https://github.com/vadymhusarovv-stack/Super_Server_Site/issues/1).
2. Зазирніть у вкладку гілок (branches): уважно вивчіть зміни у гілці `system-error` та перевірте архіви в гілці `titan-archive`.

---

### Крок 6: Фінальна зачіпка у репозиторії та нагорода
Перейдіть до розділу [Вікі репозиторію GitHub](https://github.com/vadymhusarovv-stack/Super_Server_Site/wiki). Прочитайте наявні там матеріали, приділивши **особливу увагу третій статті**. У ній зашифровано фінальні координати. 

*Заходьте на сервер, вирушайте за вказаними координатами та забирайте свою заслужену нагороду!*

---

> 👁️ **ПАМ'ЯТАЙТЕ:** Титани стежать за вами! Будьте обережні з файлами, які заборонені для читання чужинцями.