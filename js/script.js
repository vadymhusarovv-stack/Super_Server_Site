const serverIP = 'listing-dans.gl.joinmc.link';

async function checkServerStatus() {
    try {
        const response = await fetch(`https://api.minetools.eu/ping/${serverIP}`);
        const data = await response.json();

        const statusElement = document.getElementById('server-status');
        const playersElement = document.getElementById('server-online-players');

        if (data.error) {
            statusElement.innerHTML = '<span style="color: #e74c3c;">🔴 Офлайн</span>';
            playersElement.innerHTML = 'Сервер відпочиває. Заходь пізніше!';
        } else {
            statusElement.innerHTML = '<span style="color: #2ecc71;">🟢 Онлайн</span>';
            playersElement.innerHTML = `Гравців у грі: <strong>${data.players.online} / ${data.players.max}</strong>`;
        }
    } catch (error) {
        document.getElementById('server-status').innerText = 'Не вдалося завантажити статус';
    }
}

checkServerStatus();


const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");

if (openBtn && modal) {
    openBtn.onclick = function () {
        modal.style.display = "block";
    }
}

if (closeBtn && modal) {
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }
}


const firstModal = document.getElementById("rulesModal");
const secondModal = document.getElementById("loreModal");
const closeFirst = document.querySelector(".close-rules");
const closeSecond = document.querySelector(".close-lore");

function openModalsAutomatically() {
    if (firstModal) {
        firstModal.style.display = "block";
    }
    if (secondModal) {
        secondModal.style.display = "block";
    }
}

openModalsAutomatically();

if (closeFirst && firstModal) {
    closeFirst.onclick = function () { firstModal.style.display = "none"; }
}
if (closeSecond && secondModal) {
    closeSecond.onclick = function () { secondModal.style.display = "none"; }
}

window.onclick = function (event) {
    if (modal && event.target == modal) { modal.style.display = "none"; }
    if (firstModal && event.target == firstModal) { firstModal.style.display = "none"; }
    if (secondModal && event.target == secondModal) { secondModal.style.display = "none"; }
}


alert("Система повідомлень: Вітаємо на сайті сервера! Тут ви знайдете важливу інформаію та останні новини.");

let result = confirm("Нагадуєм що наш сервер не є публічним!");
if (result) {
    console.log("Користувач ознайомився з повідомленням");
} else {
    console.log("Корстувач не прочитав повідомлення");
}

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});


function triggerSecretEasterEgg() {
    alert("⚠️ УВАГА: Зафіксовано несанкціонований доступ до архівів Королівства!");

    let acceptFate = confirm("Ти впевнений, що твоя загроза достатньо низька, щоб читати цей лор далі?");

    if (acceptFate) {
        alert("📜 Доступ дозволено. Стародавні Титани стежать за тобою... Швидше біжи у Вікі!");
    } else {
        alert("🚪 Розумний вибір. Повертайся на Головну, поки літопис не поглинув твій розум.");
    }
}


function downloadARGFiles() {
    alert("⚙️ Запуск скрипту автоматизації бекапів...");
    alert("⚠️ КРИТИЧНА ПОМИЛКА: Перехоплення пакетів розробником! Скачування заблокованих логів...");

    let file1 = document.createElement('a');
    file1.href = 'files/system_restore_log.xlsx';
    file1.download = 'system_restore_log.xlsx';
    document.body.appendChild(file1);
    file1.click();
    document.body.removeChild(file1);

    setTimeout(function () {
        let file2 = document.createElement('a');
        file2.href = 'files/kingdom_lore_archive.txt';
        file2.download = 'kingdom_lore_archive.txt';
        document.body.appendChild(file2);
        file2.click();
        document.body.removeChild(file2);
    }, 500);

    setTimeout(function () {
        let file3 = document.createElement('a');
        file3.href = 'files/secret_archive.docx';
        file3.download = 'secret_lore_archive.docx';
        document.body.appendChild(file3);
        file3.click();
        document.body.removeChild(file3);
    }, 500);
}