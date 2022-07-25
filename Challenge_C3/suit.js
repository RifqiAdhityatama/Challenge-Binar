const r_user = document.getElementById('rock-user');
const p_user = document.getElementById('paper-user');
const s_user = document.getElementById('scissor-user');
const r_com = document.getElementById('rock-com');
const p_com = document.getElementById('paper-com');
const s_com = document.getElementById('scissor-com');
const resultBox = document.getElementById('versus-box');
const result = document.getElementById('vs');
const refresh = document.getElementById('refresh');
const userButton = document.querySelectorAll(".user-option");
const comButton = document.querySelectorAll(".com-option")

// com option
const comChoose = () => {
    let choices = ['batu','kertas','gunting'];
    let randomChoose = Math.floor(Math.random() * 3);
    return choices[randomChoose];
}

// box background
const winLoseResult = () => {
    resultBox.classList.add('winlosebox'),
    result.classList.add('boxtext')
    result.classList.remove('vs')
}

const drawResult = () => {
    resultBox.classList.add('drawbox'),
    result.classList.add('boxtext')
    result.classList.remove('vs')
}

// result text
const win = () => {
    winLoseResult();
    result.innerText = "PLAYER 1 WIN";
    console.log("PLAYER 1 WIN")
}

const lose = () => {
    winLoseResult();
    result.innerText = "COM WIN";
    console.log("COM WIN")
}

const draw = () => {
    drawResult();
    result.innerText = "DRAW";
    console.log("DRAW")
}

// hasil suit
const hasilSuit = (userSelect) => {
    const comSelect = comChoose();

    switch (userSelect + comSelect) {
        case "batubatu":
        case "kertaskertas":
        case "guntinggunting":
            draw();
            break;
        case "guntingbatu":
        case "kertasgunting":
        case "batukertas":
            lose();
            break;
        case "batugunting":
        case "kertasbatu":
        case "guntingkertas":
            win();
    }

    switch (comSelect){
        case "batu":
            r_com.classList.add('chosen');
            break;
        case "gunting":
            s_com.classList.add('chosen');
            break;
        case "kertas":
            p_com.classList.add('chosen');
    }
}

// pilihan user

const rockPlay = () => {
    r_user.classList.add('chosen');
    hasilSuit('batu');
    userButton.forEach(userButtonDis => {
        userButtonDis.setAttribute("style","cursor: not-allowed;pointer-events: none;")
    })
}

const paperPlay = () => {
    p_user.classList.add('chosen');
    hasilSuit('kertas');
    userButton.forEach(userButtonDis => {
        userButtonDis.setAttribute("style","cursor: not-allowed;pointer-events: none;")
    })
}

const scissorPlay = () => {
    s_user.classList.add('chosen');
    hasilSuit('gunting');
    userButton.forEach(userButtonDis => {
        userButtonDis.setAttribute("style","cursor: not-allowed;pointer-events: none;")
    })
}

// refresh
refresh.addEventListener('click', () => {
    userButton.forEach(userButtonRem => {
        userButtonRem.classList.remove('chosen')
    });
    comButton.forEach(comButtonRem => {
        comButtonRem.classList.remove('chosen')
    });
    userButton.forEach(userButtonDis => {
        userButtonDis.removeAttribute("style","cursor: not-allowed;pointer-events: none;")
    });
    resultBox.classList.remove('winlosebox')
    resultBox.classList.remove('drawbox')
    result.classList.remove('boxtext')
    result.classList.add('vs')
    result.innerText = "VS"
})