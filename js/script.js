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

// === ПАСХАЛКА 1: СЕКРЕТНЕ СЛОВО НА КЛАВІАТУРІ ===

const SECRET_WORD = "lore"; 

let inputBuffer = [];

document.addEventListener('keydown', (event) => {

    const key = event.key.toLowerCase();

    if (key.length === 1) {

        inputBuffer.push(key);

        if (inputBuffer.length > SECRET_WORD.length) {
            inputBuffer.shift();
        }

        if (inputBuffer.join('') === SECRET_WORD) {
            activateSecretCode();
        }
    }
});

function activateSecretCode() {
    console.log("🔓 Код активації лору успішно введено!");
    
    inputBuffer = [];

    const audio = document.getElementById('secret-sound');
    if (audio) {
        audio.currentTime = 0; 
        audio.play().catch(e => console.log("Браузер заблокував звук до першого кліку:", e));
    }

    const originalBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#00ffcc"; 
    
    setTimeout(() => {
        document.body.style.backgroundColor = originalBackground;
        
        alert("📜 Стародавні літописи відкрили свій секрет. Ключ до наступного кроку: ... ");
    }, 300);
}

// === ПАСХАЛКА 2: СЕКРЕТНИЙ КЛІКЕР ПО ІКОНЦІ ===

let clickCount = 0;       
let clickTimeout;         

const amebaImg = document.getElementById('secret-ameba');
const clickAudio = document.getElementById('click-sound');
const successAudio = document.getElementById('success-sound');

if (amebaImg) {
    amebaImg.addEventListener('click', () => {
        clearTimeout(clickTimeout);
        clickTimeout = setTimeout(() => {
            clickCount = 0;
            amebaImg.style.transform = "scale(1)"; 
            console.log("⏱️ Час вийшов, лічильник кліків скинуто.");
        }, 2000);

        clickCount++;
        console.log(`🖱️ Клік по амебі: ${clickCount}/10`);

        amebaImg.style.transform = `scale(${1 + clickCount * 0.05}) rotate(${clickCount * 15}deg)`;
        amebaImg.style.opacity = 0.4 + (clickCount * 0.06);

        if (clickAudio) {
            clickAudio.currentTime = 0;
            clickAudio.play().catch(e => {});
        }

        if (clickCount === 10) {
            // Зкидаємо лічильник та таймер
            clearTimeout(clickTimeout);
            clickCount = 0;

            activateAmebaSecret();
        }
    });
}

function activateAmebaSecret() {
    console.log("🧬 Еволюція завершена! Секрет амеби відкрито.");

    if (successAudio) {
        successAudio.currentTime = 0;
        successAudio.play().catch(e => {});
    }

    amebaImg.style.transform = "scale(1) rotate(0deg)";
    amebaImg.style.opacity = 0.4;

    alert("🧬 МУТАЦІЯ УСПІШНА! Ви роздратували первісну планету. Код для архіву: АМЕВА_2026");
}

// === ПАСХАЛКА 3: КОНСОЛЬНИЙ ШПИГУН (КЛІК F12 / CTRL+SHIFT+I) ===

let consoleActivated = false;

function runConsoleEasterEgg() {
    if (consoleActivated) return;
    consoleActivated = true;

    // 1. Граємо звук сигналу
    const consoleAudio = document.getElementById('console-sound');
    if (consoleAudio) {
        consoleAudio.currentTime = 0;
        consoleAudio.play().catch(e => console.log("Потрібен клік на сайті перед F12"));
    }

    // 2. Величезний стилізований текст (зелений хакерський колір)
    console.log(
        "%c👁️ СИСТЕМА ВИЯВИЛА СЛІДКУВАННЯ... 👁️", 
        "color: #00ffcc; font-size: 24px; font-weight: bold; font-family: monospace; text-shadow: 0 0 10px #00ffcc;"
    );
    
    console.log(
        "%c----------------------------------------------------------------\n" +
        "📜 ДОСТУП ДО ЗАБЛОКОВАНИХ СЕКТОРІВ ЛІТОПИСУ ДОЗВОЛЕНО.\n" +
        "🔍 Ви відкрили консоль розробника. Справжній детектив дивиться глибше.\n" +
        "🔒 Ваш наступний ключ заховано в історії комітів репозиторію.\n" +
        "🤖 Проєкт 'ARG-2026' активний. Слідкуйте за коментарями в HTML.\n" +
        "----------------------------------------------------------------",
        "color: #a0ff90; font-size: 14px; font-family: monospace;"
    );
}

// Перехоплюємо натискання клавіш, які відкривають консоль
document.addEventListener('keydown', (event) => {
    // 1. Перевірка на клавішу F12
    const isF12 = (event.key === 'F12');
    
    // 2. Перевірка на комбінацію Ctrl + Shift + I
    const isCtrlShiftI = (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'і' || event.code === 'KeyI'));

    if (isF12 || isCtrlShiftI) {
        // Запускаємо пасхалку з невеликою затримкою у 300 мс, щоб консоль встигла відкритися перед очима гравця
        setTimeout(runConsoleEasterEgg, 300);
    }
});
