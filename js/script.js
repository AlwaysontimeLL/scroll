function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }
});

const select = document.querySelector('select');
const allLang = ['ru', 'ua'];
const langArr = {
	"1": {
		"ru": "Дорогие наши мама и папа!",
		"ua": "Любі наші мамо і тато!",
	},
   "2": {
		"ru": "Уважаемая Ольга Павловна!",
		"ua": "Шановна Ольго Павлівно!",
	},
   "3": {
		"ru": "Дорогие и любимые наши",
		"ua": "Дорогі та любі наші",
	},
   "4": {
		"ru": "родственники и друзья!",
		"ua": "родичі та друзі!",
	},
   "5": {
		"ru": "Да! Мы сломались!",
		"ua": "Так! Ми зламалися!",
	},
   "6": {
		"ru": "Будет пафосное платье",
		"ua": "Буде пафосне плаття",
	},
   "7": {
		"ru": "и кукла на капоте!",
		"ua": "і лялька на капоті!",
	},
   "8": {
		"ru": "Приглашаем злорадствовать,",
		"ua": "Запрошуємо глузувати,",
	},
   "9": {
		"ru": "хихикать и получать",
		"ua": "тішитися і отримувати",
	},
   "10": {
		"ru": "удовольствие!",
		"ua": "задоволення!",
	},
   "11": {
		"ru": "Шоу «Прощай свобода!",
		"ua": "Шоу «Прощай свобода!»",
	},
   "12": {
		"ru": "начнётся 23 октября 2021 г.",
		"ua": "почнеться 23 жовтня 2021 р.",
	},
   "13": {
		"ru": "в 14:00 в Центральном",
		"ua": "о 14:00 в Центральному",
	},
   "14": {
		"ru": "ЗАГСе г. Киев.",
		"ua": "РАГСі м. Київ.",
	},
   "15": {
		"ru": "Нам было бы приятно видеть",
		"ua": "Нам було б приємно бачити",
	},
   "16": {
		"ru": "Вас среди наших гостей,",
		"ua": "Вас серед наших гостей,",
	},
   "17": {
		"ru": "пришедших разделить",
		"ua": "які прийдуть розділити",
	},
   "18": {
		"ru": "с нами наше счастье",
		"ua": "з нами наше щастя",
	},
   "19": {
		"ru": "и радость.",
		"ua": "і радість.",
	},
   "20": {
		"ru": "Свадебное торжество",
		"ua": "Весільне святкування",
	},
   "21": {
		"ru": "состоится в ресторане &quot;Прага&quot;",
		"ua": "відбудеться в ресторані &quot;Прага&quot;",
	},
   "22": {
		"ru": "в 17:00, по адресу: г. Киев,",
		"ua": "о 17:00, за адресою: м Київ,",
	},
   "23": {
		"ru": "проспект Академика Глушкова,1.",
		"ua": "проспект Академіка Глушкова, 1.",
	},
   "24": {
		"ru": "Просьба присутствовать,",
		"ua": "Прохання бути присутніми,",
	},
   "25": {
		"ru": "веселиться от души, пить, есть",
		"ua": "веселитися від душі, пити, їсти",
	},
   "26": {
		"ru": "и радоваться за нас!",
		"ua": "і радіти за нас!",
	},
   "27": {
		"ru": "Александр и Наталья",
		"ua": "Олександр і Наталя",
	},
   "title": {
		"ru": "Приглашение на свадьбу",
		"ua": "Запрошення на весілля",
	},
};
select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
   let lang = select.value;
   location.href = window.location.pathname + '#' + lang;
   location.reload();
};

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = langArr['title'][hash];
   //document.querySelector('.p1').innerHTML = langArr['p1'][hash];
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}

   }
}
changeLanguage();