import os
import zipfile
import tarfile  # <--- Додали імпорт для TAR.GZ
from datetime import datetime

# --- КОНФІГУРАЦІЯ СКРИПТУ ---
SOURCE_DIR = r"D:\MC_Server" 
BACKUP_DIR = r"./Backups_Archive" 
# ----------------------------

def create_backup():
    if not os.path.exists(SOURCE_DIR):
        print(f"Помилка: Папка {SOURCE_DIR} не знайдена!")
        return

    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)

    # Загальний час для обох архівів
    current_time = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

    # ==========================================
    # БЛОК 1: СТВОРЕННЯ ZIP-АРХІВУ
    # ==========================================
    zip_filename = f"server_backup_{current_time}.zip"
    full_zip_path = os.path.join(BACKUP_DIR, zip_filename)

    print(f"🤖 Початок архівації папок...") 
    print(f"📦 [1/2] Початок архівації у ZIP: {SOURCE_DIR}...")
    with zipfile.ZipFile(full_zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(SOURCE_DIR):
            for file in files:
                full_path = os.path.join(root, file)
                relative_path = os.path.relpath(full_path, SOURCE_DIR)
                zipf.write(full_path, relative_path)
    print(f"✅ ZIP успішно створено: {full_zip_path}")

    print("-" * 40)  # Просто красива лінія розмежування в консолі

    # ==========================================
    # БЛОК 2: СТВОРЕННЯ TAR.GZ-АРХІВУ
    # ==========================================
    tar_filename = f"server_backup_{current_time}.tar.gz"
    full_tar_path = os.path.join(BACKUP_DIR, tar_filename)
    
    print(f"🔥 [2/2] Початок архівації у TAR.GZ: {SOURCE_DIR}...")
    with tarfile.open(full_tar_path, "w:gz") as tarf:
        tarf.add(SOURCE_DIR, arcname=os.path.basename(SOURCE_DIR))
    print(f"✅ TAR.GZ успішно створено: {full_tar_path}")

if __name__ == "__main__":
    create_backup()








# import os
# import zipfile
# from datetime import datetime

# --- КОНФІГУРАЦІЯ СКРИПТУ ---
# Вкажи шлях до папки сервера, яку треба заархівувати
# SOURCE_DIR = r"D:\MC_Server"

# Вкажи папку, куди зберігати готові бекапи
# BACKUP_DIR = r"./Backups_Archive"
# ----------------------------

# def create_backup():
    # 4 пробіли (або 1 Tab) від краю для коментаря і if
    # Перевіряємо, чи існує папка сервера
#    if not os.path.exists(SOURCE_DIR):
        # Ще +4 пробіли (разом 8 пробілів або 2 Tab-а) для того, що всередині if
#        print(f"Помилка: Папка {SOURCE_DIR} не знайдена!")
#        return

    # Знову на рівні 4 пробілів (1 Tab) від краю
    # Якщо папки для бекапів немає, скрипт створить її автоматично
#    if not os.path.exists(BACKUP_DIR):
#        # Знову +4 пробіли (разом 8 пробілів) всередині if
#        os.makedirs(BACKUP_DIR)

    # Генеруємо унікальне ім'я файлу на основі поточної дати та часу
#    current_time = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
#    backup_filename = f"server_backup_{current_time}.zip"
#    full_backup_path = os.path.join(BACKUP_DIR, backup_filename)

#    print(f"🤖 Початок архівації папки: {SOURCE_DIR}...")

     # Створюємо новий ZIP-файл для запису
#    with zipfile.ZipFile(full_backup_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        # Обходимо всі підпапки та файли у вказаній директорії
#        for root, dirs, files in os.walk(SOURCE_DIR):
#           for file in files:
#                full_path = os.path.join(root, file)
                # Вираховуємо відносний шлях, щоб в архіві не було повних шляхів комп'ютера
#                relative_path = os.path.relpath(full_path, SOURCE_DIR)
#                zipf.write(full_path, relative_path)
                
#    print(f"✅ Бекап успішно створено! Файл: {full_backup_path}")

# if __name__ == "__main__":
# create_backup()



# ----------------------------
# def create_backup():
# Перевіряємо, чи існує папка сервера
# if not os.path.exists(SOURCE_DIR):
  #  print(f"Помилка: Папка {SOURCE_DIR} не знайдена!")
# return
 # Якщо папки для бекапів немає, скрипт створить її автоматично
 # if not os.path.exists(BACKUP_DIR):
 #   os.makedirs(BACKUP_DIR)
 # Генеруємо унікальне ім'я файлу на основі поточної дати та часу
# current_time = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
 # backup_filename = f"server_backup_{current_time}.zip"
 # full_backup_path = os.path.join(BACKUP_DIR, backup_filename)
# print(f" Початок архівації папки: {SOURCE_DIR}...")
 # Створюємо новий ZIP-файл для запису
# with zipfile.ZipFile(full_backup_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
 # Обходимо всі підпапки та файли у вказаній директорії
# for root, dirs, files in os.walk(SOURCE_DIR):
 # for file in files:
 # full_path = os.path.join(root, file)
 # Вираховуємо відносний шлях, щоб в архіві не було повних шляхів комп'ютера
# relative_path = os.path.relpath(full_path, SOURCE_DIR)
# zipf.write(full_path, relative_path)
# print(f" Бекап успішно створено! Файл: {full_backup_path}")
# if __name__ == "__main__":
# create_backup()