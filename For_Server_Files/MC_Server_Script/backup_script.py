import os
import zipfile
import tarfile
from datetime import datetime

# --- КОНФІГУРАЦІЯ СКРИПТУ ---
SOURCE_DIR = r"D:\MC_Server" 
BACKUP_DIR = r"./Backups_Archive" 
MAX_BACKUPS_PER_TYPE = 5 
# ----------------------------

def clean_old_backups(extension):
    """Функція, яка знаходить і видаляє старі бекапи для конкретного розширення"""
    backups = [
        os.path.join(BACKUP_DIR, f) 
        for f in os.listdir(BACKUP_DIR) 
        if f.endswith(extension) and os.path.isfile(os.path.join(BACKUP_DIR, f))
    ]
    
    backups.sort(key=os.path.getmtime, reverse=True)

    if len(backups) > MAX_BACKUPS_PER_TYPE:
        old_backups = backups[MAX_BACKUPS_PER_TYPE:]  
        print(f"🧹 Знайдено надлишкові файли {extension}. Видалення застарілих архівів...")
        for old_file in old_backups:
            try:
                os.remove(old_file)
                print(f"🗑️ Видалено старий бекап: {old_file}")
            except Exception as e:
                print(f"⚠️ Не вдалося видалити {old_file}: {e}")

def create_backup():
    if not os.path.exists(SOURCE_DIR):
        print(f"Помилка: Папка {SOURCE_DIR} не знайдена!")
        return

    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)

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

    print("-" * 40)

    # ==========================================
    # БЛОК 2: СТВОРЕННЯ TAR.GZ-АРХІВУ
    # ==========================================
    tar_filename = f"server_backup_{current_time}.tar.gz"
    full_tar_path = os.path.join(BACKUP_DIR, tar_filename)
    
    print(f"🔥 [2/2] Початок архівації у TAR.GZ: {SOURCE_DIR}...")
    with tarfile.open(full_tar_path, "w:gz") as tarf:
        tarf.add(SOURCE_DIR, arcname=os.path.basename(SOURCE_DIR))
    print(f"✅ TAR.GZ успішно створено: {full_tar_path}")

    print("-" * 40)

    # ==========================================
    # БЛОК 3: РОЗУМНЕ ОЧИЩЕННЯ ПАПКИ
    # ==========================================
    clean_old_backups(".zip")     
    clean_old_backups(".tar.gz")  

if __name__ == "__main__":
    create_backup()
    