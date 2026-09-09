# 🤖 Інструкція: Системний Термінал (Discord Bot)

---

### ⚠️ Перехоплення протоколів
Хакер **Interest_UA2** зміг обійти брандмауер та перенаправив системний термінал організації «Таємниці Світу» безпосередньо на наш Discord-сервер! Бот вважає усіх учасників сертифікованими співробітниками, що дає змогу моніторити стан мережі та запитувати секретні досьє.

---

## 🛰️ Автоматичні сповіщення
При підключенні нового гравця до сервера **WorldOrg_Monitor** автоматично надсилає сповіщення у спеціальний канал:
* **Запис у базу даних:** Вносить користувача до реєстру Організації зі статусом *«Гість (Рівень 1)»*, надаючи початковий рівень доступу.

<div style="display: inline-block; padding: 5px; background-color: #181825; border: 1px solid #45475a; border-radius: 6px; margin-top: 10px;">
  <img src="images/guilds/discord/ds_join_signal.png" style="border-radius: 4px; display: block;"/>
</div>

---

## 🛠️ Список команд бота

Взаємодія з ботом здійснюється за допомогою текстових команд із префіксом `!`:

### 1. 🔍 Команда `!hello`
* **Опис:** Перевіряє зв'язок із терміналом та повертає статус активації протоколів.
* **Відповідь бота:** `Привіт, @користувач! На зв'язку Організація «Світ». Протоколи активовано.`

### 2. 🔌 Команда `!ip`
* **Опис:** Виводить тимчасове повідомлення з даними для підключення до Minecraft-сервера.
* **Дані:** IP-адреса (`listing-dans.gl.joinmc.link`) та версія (`1.21.10`).

<div style="display: inline-block; padding: 5px; background-color: #181825; border: 1px solid #45475a; border-radius: 6px; margin-top: 10px;">
  <img src="images/guilds/discord/ds_ip_embed.png" style="border-radius: 4px; display: block;"/>
</div>

---

### 3. 📂 Команда `!logs`
* **Опис:** Виводить останні логи системної активності сервера (доступно кілька рівнів деталей).

---

### 4. 🕵️ Команда `!status [ім'я]` (Перевірка об'єктів)
Запитує стан або досьє конкретного об'єкта в базі даних. Відповідь залежить від вказаного імені:

<div style="background-color: #181825; border: 1px solid #45475a; border-radius: 8px; overflow: hidden; margin: 15px 0; font-size: 14px; color: #cdd6f4;">

  <div style="display: flex; background-color: #313244; border-bottom: 2px solid #45475a; font-weight: bold; color: #f5e0dc;">
    <div style="flex: 0 0 30%; padding: 10px 14px; border-right: 1px solid #45475a;">Аргумент</div>
    <div style="flex: 1; padding: 10px 14px;">Результат перевірки / Статус</div>
  </div>
  
  <div style="display: flex; border-bottom: 1px solid #313244; background-color: #181825;">
    <div style="flex: 0 0 30%; padding: 10px 14px; border-right: 1px solid #45475a;">
      <code style="background-color: #1e1e2e; color: #a6e3a1; padding: 3px 6px; border-radius: 4px; font-family: monospace;">!status віталій</code>
    </div>
    <div style="flex: 1; padding: 10px 14px;">
      🚨 <strong>СИСТЕМНА ТРИВОГА:</strong> Фіксує підозрілу активність у секторі складу (<em>Наглядач Віталій переносить зашифровані архіви</em>).
    </div>
  </div>

  <div style="display: flex; border-bottom: 1px solid #313244; background-color: #181825;">
    <div style="flex: 0 0 30%; padding: 10px 14px; border-right: 1px solid #45475a;">
      <code style="background-color: #1e1e2e; color: #a6e3a1; padding: 3px 6px; border-radius: 4px; font-family: monospace;">!status sys_admin</code>
    </div>
    <div style="flex: 1; padding: 10px 14px;">
      🔍 <strong>Статус об'єкта sys_admin:</strong> Може становити загрозу. Стежити обов'язково.
    </div>
  </div>

  <div style="display: flex; background-color: #181825;">
    <div style="flex: 0 0 30%; padding: 10px 14px; border-right: 1px solid #45475a;">
      <code style="background-color: #1e1e2e; color: #a6e3a1; padding: 3px 6px; border-radius: 4px; font-family: monospace;">!status адмін</code> / <code style="background-color: #1e1e2e; color: #a6e3a1; padding: 3px 6px; border-radius: 4px; font-family: monospace;">титан</code>
    </div>
    <div style="flex: 1; padding: 10px 14px;">
      🔍 <strong>Статус об'єкта адмін:</strong> Стабільний. Аномалій не виявлено. Доступ дозволено.
    </div>
  </div>
</div>

<div style="display: inline-block; padding: 5px; background-color: #181825; border: 1px solid #45475a; border-radius: 6px; margin-top: 10px;">
  <img src="images/guilds/discord/ds_status_alert.png" style="border-radius: 4px; display: block;"/>
</div>

---

> ☣️ **ПОРАДА:** Слідкуйте за аномаліями у відповідях `!status`, щоб першими дізнаватися про сюжетні події та секретні переміщення на сервері!