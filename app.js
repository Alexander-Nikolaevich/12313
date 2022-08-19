let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];


//экран
const out = document.querySelector('.calc-screen p');


function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = '0';
    console.log(a, b, sign);
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    //нажата кнопка ac
    if (event.target.classList.contains('ac')) return;
    out.textContent = '';
    //получаю нажатую кнопку
    const key = event.target.textContent;

    //есть нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
            console.log(a, b, sign);
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
            console.log(a, b, sign);
        }
        else {
            b += key;
            out.textContent = b;
            console.log(a, b, sign);
        }
        return;

    }

    //есть нажата клавиша знак
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //=
    if (key === '=') {
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;

            case "-":
                a = a - b;
                break;

            case "x":
                if (b === '1') {
                    out.textContent = 'Ты лох';
                    return;
                }
                a = a * b;
                break;

            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';

                    return;
                }
                else {a = a / b;
                break;
                }
        }
    finish = true;
        out.textContent = a;
    }
    console.log(a, b, sign);
}


