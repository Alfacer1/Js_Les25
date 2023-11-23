class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;

        if (this.isValidOperator(znak)) {
            const result = this.calculate(X, Y, znak);
            console.log(`Результат операції ${X} ${znak} ${Y}: ${result}`);
        } else {
            console.log("Некоректний оператор. Спробуйте ще раз.");
            this.input(obj);
        }
    }

    calculate(X, Y, znak) {
        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '*':
                return X * Y;
            case '/':
                return X / Y;
            case '%':
                return X % Y;
            default:
                console.log("Некоректний оператор. Спробуйте ще раз.");
                return this.input({ X, Y, znak });
        }
    }

    isValidOperator(znak) {
        const validOperators = ['+', '-', '*', '/', '%'];
        return validOperators.includes(znak);
    }

    input(obj) {
        const newX = parseFloat(prompt("Введіть нове значення X:"));
        const newY = parseFloat(prompt("Введіть нове значення Y:"));
        const newZnak = prompt("Введіть новий оператор (+, -, *, /, %):");

        const newObj = { X: newX, Y: newY, znak: newZnak };
        this.check(newObj);
    }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);
