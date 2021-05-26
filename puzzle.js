const {проверка_моделей,  Символ, Не, И, Или, Импликация, Эквивалентность} = require('./logic.js')

АРыцарь = new Символ("А - рыцарь.")
АЛжец = new Символ("А - лжец.")

БРыцарь = new Символ("Б - рыцарь.")
БЛжец = new Символ("Б - лжец.")

ВРыцарь = new Символ("В - рыцарь.")
ВЛжец = new Символ("В - лжец.")

// Задача 0
// А сказал: "Я и лжец и рыцарь."
знания0 = new И()
//Эквивалентность, рыцарь - не лжец 
знания0.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
//Эквивалентность, сказал правду - значит рыцарь
знания0.добавить(new Эквивалентность(new И(АРыцарь, АЛжец), АРыцарь))

// Задача 1
// А сказал: "Мы оба лжецы."
// Б ни чего не сказал.
знания1 = new И()
//Эквивалентность, рыцарь - не лжец
знания1.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания1.добавить(new Эквивалентность(БРыцарь, new Не(БЛжец)))
//Эквивалентность, сказал правду - значит рыцарь
знания1.добавить(new Эквивалентность(new И(АЛжец, БЛжец), АРыцарь))


// Задача 2
// А сказал: "Мы одинаковые."
// Б сказал: "Мы разного вида."
знания2 = new И()
//Эквивалентность, рыцарь - не лжец
знания2.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания2.добавить(new Эквивалентность(БРыцарь, new Не(БЛжец)))
//Эквивалентность, сказал правду - значит рыцарь
знания2.добавить(new Эквивалентность(new И(АЛжец, БЛжец), АРыцарь))
знания2.добавить(new Эквивалентность(new И(АЛжец, БРыцарь), БРыцарь))

// Задача 3
// А сказал, но мы вы не услышали.
// Б сказал: "А сказал 'Я лжец'."
// Б сказал: "В - лжец."
// В сказал: "А - рыцарь."
знания3 = new И()
//Эквивалентность, рыцарь - не лжец
знания3.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания3.добавить(new Эквивалентность(БРыцарь, new Не(БЛжец)))
знания3.добавить(new Эквивалентность(ВРыцарь, new Не(ВЛжец)))
//Эквивалентность, сказал правду - значит рыцарь
знания3.добавить(new Эквивалентность(new И(ВРыцарь, АЛжец), ВЛжец))
знания3.добавить(new Эквивалентность(new И(ВЛжец, АРыцарь), БРыцарь))


символы = [АРыцарь, АЛжец, БРыцарь, БЛжец, ВРыцарь, ВЛжец] 
задания = {
        "Задание 0": знания0,
        "Задание 1": знания1,
        "Задание 2": знания2,
        "Задание 3": знания3
    }

main()


function main()
{
	for(let задание in задания) 
	{
		console.log(задание)
		if(задания[задание].операнды.length == 0)
		    console.log("    Пока не реализована.")
		else
		    for(let  символ of символы)
			if(проверка_моделей(задания[задание], символ))
			    console.log(`    ${символ.имя}`)
	}
}

