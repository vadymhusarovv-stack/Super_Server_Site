const serverIP = 'listing-dans.gl.joinmc.link';

async function checkServerStatus() {
    // Елементи для старої сторінки (index.html)
    const oldStatusElement = document.getElementById('server-status');
    const oldPlayersElement = document.getElementById('server-online-players');

    // Елемент для нової сторінки (index_new.html)
    const newStatusText = document.getElementById('serverStatusText');

    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();

        if (data.online) {
            // Оновлюємо стару сторінку, якщо вона відкрита
            if (oldStatusElement) {
                oldStatusElement.innerHTML = '<span style="color: #2ecc71;">🟢 Онлайн</span>';
            }
            if (oldPlayersElement) {
                oldPlayersElement.innerHTML = `Гравців у грі: <strong>${data.players.online} / ${data.players.max}</strong>`;
            }

            // Оновлюємо нову сторінку, якщо вона відкрита
            if (newStatusText) {
                newStatusText.innerHTML = `<span style="color: #2ecc71;">🟢 Онлайн (${data.players.online}/${data.players.max})</span>`;
            }
        } else {
            // Режим Офлайн
            if (oldStatusElement) {
                oldStatusElement.innerHTML = '<span style="color: #e74c3c;">🔴 Офлайн</span>';
            }
            if (oldPlayersElement) {
                oldPlayersElement.innerHTML = 'Сервер відпочиває. Заходь пізніше!';
            }
            if (newStatusText) {
                newStatusText.innerHTML = '<span style="color: #e53935;">🔴 Офлайн (Сервер відпочиває)</span>';
            }
        }
    } catch (error) {
        // Помилка завантаження
        if (oldStatusElement) {
            oldStatusElement.innerText = 'Не вдалося завантажити статус';
        }
        if (newStatusText) {
            newStatusText.innerHTML = '<span style="color: #dca355;">Працює в режимі супутника</span>';
        }
    }
}

// Запускаємо перевірку при завантаженні будь-якої зі сторінок
document.addEventListener('DOMContentLoaded', checkServerStatus);


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

// Копіювання IP в буфер обміну
function copyServerIP() {
  const ipText = document.getElementById('serverIP').innerText;
  navigator.clipboard.writeText(ipText).then(() => {
    const toast = document.getElementById('copyToast');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  });
}



    // 1. Ефект друкарської машинки для слогана
    document.addEventListener("DOMContentLoaded", function() {
        if (document.getElementById("typed-slogan")) {
            new Typed("#typed-slogan", {
                strings: [
                    "Вітаємо на офіційному порталі Королівства!",
                    "Тут живуть легенди, кастомні плагіни та справжня атмосфера.",
                    "Увага: система спостерігає за кожним вашим кроком..."
                ],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                smartBackspace: true
            });
        }
    });

    // 2. Функція салюту з конфеті для пасхалок або кнопок
    function triggerConfetti() {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
// === ФІНАЛЬНА ІНІЦІАЛІЗАЦІЯ ЕФЕКТІВ (Asciinema та Three.js) ===
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Ініціалізація Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // 2. Ініціалізація Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 3. Запуск Asciinema Плеєра
    const terminalEl = document.getElementById('terminal-container');
    if (terminalEl) {
        AsciinemaPlayer.create(
            'files/server-start.cast', 
            terminalEl, 
            {
                cols: 80,
                rows: 20,
                theme: 'dracula',
                autoPlay: true,
                loop: true,
                speed: 1.5
            }
        );
    }

    // 4. Запуск Three.js 3D-Кристала
    const container = document.getElementById('three-container');
    if (container && typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        
        const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(1.8, 0); 
        const material = new THREE.MeshStandardMaterial({
            color: 0xffd700,       // Яскравіший золотий
            emissive: 0x332200,    // Легке внутрішнє світіння
            wireframe: true,       
            roughness: 0.1,
            metalness: 0.9
        });
        
        const crystal = new THREE.Mesh(geometry, material);
        scene.add(crystal);

        const light = new THREE.PointLight(0xffea75, 4, 100);
        light.position.set(5, 5, 5);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffcc00, 1.2);
        scene.add(ambientLight);

        let mouseX = 0; 
        let mouseY = 0;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) - 0.5;
            mouseY = (event.clientY / window.innerHeight) - 0.5;
        });

        function animate() {
            requestAnimationFrame(animate);
            crystal.rotation.x += 0.005;
            crystal.rotation.y += 0.008;
            crystal.rotation.x += (mouseY * 0.5 - crystal.rotation.x) * 0.05;
            crystal.rotation.y += (mouseX * 0.5 - crystal.rotation.y) * 0.05;
            renderer.render(scene, camera);
        }
        
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
    }
});