/* A1 · lessons 3–6 */
LX({n:3,title:"Skąd jesteś?",ru:"Откуда ты и где живёшь",who:["maks","natalia","diego"],
intro:"Перерыв в языковой школе. Макс знакомится с одногруппниками: Натальей из Минска и Диего из Испании. Все рассказывают, откуда они и где живут во Вроцлаве.",
goals:["спрашивать, откуда человек и где он живёт","называть все личные местоимения","спрягать глаголы на -m, -sz: mieszkać, mieć, znać","считать от 11 до 29"],
secs:[
{k:"scene",pl:"Na przerwie",ru:"На перемене",place:"Szkoła językowa, Wrocław",desc:"Кофемашина в коридоре, десять минут перерыва.",
lines:`natalia|Cześć! Jestem Natalia. Ty też jesteś z Ukrainy?|Привет! Я Наталья. Ты тоже из Украины?
maks|Tak, z Charkowa. A ty?|Да, из Харькова. А ты?
natalia|Ja jestem z Mińska. Mieszkam tu już rok.|Я из Минска. Живу здесь уже год.
diego|Hola! Przepraszam, cześć! Jestem Diego, z Hiszpanii.|Hola! Ой, то есть привет! Я Диего, из Испании.
maks|Cześć, Diego! Gdzie mieszkasz?|Привет, Диего! Где ты живёшь?
diego|Mieszkam w centrum, na ulicy Ruskiej. A wy?|Я живу в центре, на улице Руской. А вы?
natalia|Ja mieszkam na Krzykach.|Я живу на Кшиках.
maks|A ja na Nadodrzu. Mam małe mieszkanie.|А я на Надодже. У меня маленькая квартира.
diego|Masz numer telefonu, Maks?|У тебя есть номер телефона, Макс?
maks|Tak, mam. Dwanaście, dwadzieścia trzy, siedemnaście…|Да, есть. Двенадцать, двадцать три, семнадцать…
natalia|Super! Znasz już dużo liczb!|Супер! Ты уже знаешь много чисел!`,
ex:`mcq|Откуда Наталья?|z Mińska;z Charkowa;z Hiszpanii|0|Natalia jest z Mińska.|Natalia jest z Mińska.
mcq|Где живёт Диего?|na Krzykach;w centrum;na Nadodrzu|1|Diego mieszka w centrum, na ulicy Ruskiej.|Diego mieszka w centrum.
listen|Послушайте и выберите перевод|Gdzie mieszkasz?|Где ты живёшь?;Откуда ты?;Что у тебя есть?|0|Gdzie? — где? mieszkasz — (ты) живёшь.
build|Соберите фразу: «Я живу здесь уже год»|Mieszkam tu już rok.|jest mam|już = уже, rok = год.`},
{k:"grammar",lab:"Спряжение -m, -sz",title:"Местоимения и спряжение -m, -sz",sub:"Самая простая и самая частая группа глаголов: почти все глаголы на -ać.",
body:["Личные местоимения обычно опускают, но знать их нужно:",
{tbl:"ja=я;my=мы|ty=ты;wy=вы|on / ona / ono=он / она / оно;oni / one=они"},
{h:"mieszkać — жить"},
{tbl:"ja mieszkam=я живу;my mieszkamy=мы живём|ty mieszkasz=ты живёшь;wy mieszkacie=вы живёте|on / ona mieszka=он / она живёт;oni / one mieszkają=они живут"},
"Окончания всегда одни и те же: <b>-m, -sz, -, -my, -cie, -ją</b>. Так же спрягаются <span class='pl'>mieć</span> (иметь): mam, masz, ma, mamy, macie, mają и <span class='pl'>znać</span> (знать): znam, znasz, zna…",
{ex:"Mam brata.=У меня есть брат.|Znasz Kasię?=Ты знаешь Касю?|Czekamy na autobus.=Мы ждём автобус.|Pytają o adres.=Они спрашивают адрес."},
{trap:"«У меня есть» по-польски — <span class='pl'>mam</span> (дословно «я имею»). Не ищите аналог «у меня»: <span class='pl'>Mam samochód</span> = у меня есть машина."}],
ex:`fill|Выберите форму|Ja ___ we Wrocławiu.|mieszka;mieszkam;mieszkasz|1|ja → mieszkam.
fill|Выберите форму|Oni ___ dwa koty.|mają;macie;ma|0|oni → mają.
fill|Выберите форму|Czy ty ___ Natalię?|znasz;zna;znam|0|ty → znasz.
fill|Выберите форму|My ___ na Krzykach.|mieszkają;mieszkamy;mieszkacie|1|my → mieszkamy.
type|Напишите по-польски: «У тебя есть телефон?»|masz telefon;czy masz telefon;ty masz telefon|Masz telefon? или Czy masz telefon?`},
{k:"grammar",lab:"Числа 11–29",title:"Liczby: числа от 11 до 29",sub:"Окончание -naście — как наше «-надцать».",
body:[{t:"Число;По-польски;Как читать|11;jedenaście;[едэнащьчье]|12;dwanaście;[дванащьчье]|13;trzynaście;[тшынащьчье]|14;czternaście;[чтэрнащьчье]|15;piętnaście;[пьентнащьчье]|16;szesnaście;[шэснащьчье]|17;siedemnaście;[щедэмнащьчье]|18;osiemnaście;[ощемнащьчье]|19;dziewiętnaście;[джевьентнащьчье]|20;dwadzieścia;[двадзещьча]|21;dwadzieścia jeden;[двадзещьча едэн]|25;dwadzieścia pięć;[двадзещьча пеньчь]"},
{ex:"jedenaście=11|piętnaście=15|dwadzieścia osiem=28"},
{note:"Двадцать с единицами строится как в русском: <span class='pl'>dwadzieścia + jeden, dwa, trzy…</span>"},
{trap:"В 14, 15, 19 пропадают звуки: <span class='pl'>czternaście</span> (а не «cztery-naście»), <span class='pl'>piętnaście</span>, <span class='pl'>dziewiętnaście</span>."}],
ex:`listen|Какое число вы слышите?|siedemnaście|17;70;7|0|siedemnaście = 17.
mcq|Как будет «14»?|czterdzieści;czternaście;cztery|1|czternaście = 14. А czterdzieści = 40 (урок 6).|czternaście
match|Соедините число и слово|dwanaście=12;szesnaście=16;dwadzieścia=20;dziewiętnaście=19;jedenaście=11
type|Послушайте и напишите число цифрами|23|dwadzieścia trzy = 23.|dwadzieścia trzy`},
{k:"vocab",ex:`match|Соедините|skąd=откуда;gdzie=где;już=уже;też=тоже;ulica=улица
mcq|Как сказать «Я жду автобус»?|Czekam na autobus.;Pytam autobus.;Mam autobus.|0|czekać na + кого/что: czekam na autobus.|Czekam na autobus.
fill|Вставьте слово|Ja ___ jestem z Ukrainy.|też;już;gdzie|0|też = тоже.`}],
vocab:`# Вопросы и ответы
skąd|откуда|Skąd jesteś?|Откуда ты?
gdzie|где|Gdzie mieszkasz?|Где ты живёшь?
mieszkać|жить|Mieszkam we Wrocławiu.|Я живу во Вроцлаве.
mieć|иметь, у меня есть|Mam małe mieszkanie.|У меня маленькая квартира.
znać|знать (кого-то, что-то)|Znam Natalię.|Я знаю Наталью.
czekać na|ждать кого / что|Czekam na Diega.|Я жду Диего.
pytać o|спрашивать о|Pytam o adres.|Я спрашиваю адрес.
# Город и адрес
ulica|улица|Mieszkam na ulicy Pomorskiej.|Я живу на улице Поморской.
centrum|центр|Diego mieszka w centrum.|Диего живёт в центре.
mieszkanie|квартира
miasto|город
kraj|страна
adres|адрес
numer telefonu|номер телефона
# Полезные слова
już|уже|Mieszkam tu już rok.|Я живу здесь уже год.
też|тоже|Ja też jestem z Ukrainy.|Я тоже из Украины.
rok|год
mały|маленький`});

LX({n:4,title:"Co to jest?",ru:"Предметы и цвета",who:["maks","kasia"],
intro:"Макс распаковывает коробки. Заходит Кася с горшком цветов в подарок и с любопытством разглядывает вещи.",
goals:["спрашивать «Что это?» и «Кто это?»","определять род существительного по окончанию","использовать ten, ta, to","согласовывать прилагательные: nowy, nowa, nowe","называть цвета"],
secs:[
{k:"scene",pl:"Nowe mieszkanie",ru:"Новая квартира",place:"Mieszkanie Maksa",desc:"Повсюду коробки. Кася стоит в дверях с цветком.",
lines:`kasia|Cześć! To dla ciebie. To jest kwiatek do mieszkania.|Привет! Это тебе. Это цветок для квартиры.
maks|Dziękuję! Jaki ładny! Wejdź, proszę.|Спасибо! Какой красивый! Заходи, пожалуйста.
kasia|O, co to jest?|О, что это?
maks|To jest stara lampa. Jest z Charkowa.|Это старая лампа. Она из Харькова.
kasia|A to? Kto to jest na zdjęciu?|А это? Кто это на фото?
maks|To jest moja mama, a to mój brat.|Это моя мама, а это мой брат.
kasia|Ten kubek jest super! Czerwony i duży.|Эта кружка супер! Красная и большая.
maks|Tak, to mój ulubiony kubek. A to okno jest bardzo stare…|Да, это моя любимая кружка. А это окно очень старое…
kasia|Ale mieszkanie jest ładne i jasne!|Но квартира красивая и светлая!`,
ex:`mcq|Что Кася принесла Максу?|kwiatek;lampę;kubek|0|Kasia ma kwiatek dla Maksa.|To jest kwiatek.
mcq|Какая кружка у Макса?|czerwony i duży;biały i mały;stary i zielony|0|Ten kubek jest czerwony i duży.
listen|Послушайте и выберите перевод|Kto to jest?|Кто это?;Что это?;Где это?|0|Kto? — кто? Co? — что?`},
{k:"grammar",lab:"Род и ten, ta, to",title:"Род существительных: ten, ta, to",sub:"Как и в русском, в польском три рода. Род почти всегда видно по окончанию.",
body:[{t:"Род;Окончание;Примеры;Указательное|мужской;согласный;stół, telefon, kot, kubek;ten (этот)|женский;-a;lampa, szafa, książka, mama;ta (эта)|средний;-o, -e, -ę;okno, krzesło, zdjęcie, imię;to (это)"},
{ex:"Ten telefon jest nowy.=Этот телефон новый.|Ta lampa jest stara.=Эта лампа старая.|To okno jest duże.=Это окно большое."},
{h:"To jest… — это…"},"Чтобы просто показать на предмет, используют <span class='pl'>to jest</span> для любого рода: <span class='pl'>To jest lampa. To jest stół.</span> Вопросы: <span class='pl'>Co to jest?</span> (что это?) и <span class='pl'>Kto to jest?</span> (кто это?).",
{trap:"Есть исключения: <span class='pl'>mężczyzna</span> (мужчина) на -a, но мужского рода; <span class='pl'>noc</span> (ночь) и <span class='pl'>rzecz</span> (вещь) женского рода, хотя без -a."},
{trap:"Род часто не совпадает с русским: <span class='pl'>ten kubek</span> — эта кружка (м. р.), <span class='pl'>to krzesło</span> — этот стул (ср. р.), <span class='pl'>ta kawa</span> — этот кофе (ж. р.).",lb:"Ловушка для русскоязычных"}],
ex:`mcq|Какого рода «krzesło»?|мужского;женского;среднего|2|Окончание -o → средний род: to krzesło.|to krzesło
fill|Выберите слово|___ szafa jest duża.|Ten;Ta;To|1|szafa на -a → ta.
fill|Выберите слово|___ telefon jest nowy.|Ten;Ta;To|0|telefon на согласный → ten.
fill|Выберите слово|___ zdjęcie jest ładne.|Ten;Ta;To|2|zdjęcie на -e → to.`},
{k:"grammar",lab:"Прилагательные и цвета",title:"Какой? Jaki, jaka, jakie",sub:"Прилагательное меняет окончание вслед за существительным.",
body:[{t:"Род;Вопрос;Окончание;Пример|мужской;jaki?;-y / -i;nowy stół, tani telefon|женский;jaka?;-a;nowa lampa, tania lampa|средний;jakie?;-e;nowe okno, tanie okno"},
"После k и g мужское окончание всегда <b>-i</b>: <span class='pl'>wysoki, drogi</span> (сравните: <span class='pl'>nowy, duży</span>). Женский род: <span class='pl'>wysoka, droga</span>, средний: <span class='pl'>wysokie, drogie</span>.",
{h:"Цвета"},
{ex:"czerwony=красный|niebieski=синий, голубой|zielony=зелёный|żółty=жёлтый|biały=белый|czarny=чёрный|szary=серый|brązowy=коричневый"},
{trap:"<span class='pl'>niebieski</span> — это и синий, и голубой. Тёмно-синий — <span class='pl'>granatowy</span>."}],
ex:`fill|Выберите форму|To jest ___ mieszkanie.|nowy;nowa;nowe|2|mieszkanie (ср. р.) → nowe.
fill|Выберите форму|Ta torba jest ___.|czarny;czarna;czarne|1|torba (ж. р.) → czarna.
match|Соедините цвет|czerwony=красный;zielony=зелёный;żółty=жёлтый;szary=серый;biały=белый
type|Напишите по-польски: «синяя лампа»|niebieska lampa|lampa ж. р. → niebieska.`},
{k:"vocab",ex:`match|Соедините|stół=стол;krzesło=стул;szafa=шкаф;łóżko=кровать;okno=окно
mcq|Что значит «drzwi»?|дверь;дрова;деревья|0|drzwi — дверь. Это слово только во множественном числе: te drzwi.|drzwi
listen|Что вы слышите?|klucz|klucz;kubek|0|klucz — ключ, kubek — кружка.`}],
vocab:`# Мебель
stół|стол|Na stole jest kubek.|На столе кружка.
krzesło|стул
szafa|шкаф
łóżko|кровать
lampa|лампа
okno|окно
drzwi|дверь (только мн. ч.)|Te drzwi są stare.|Эта дверь старая.
# Вещи
książka|книга
kubek|кружка|To mój ulubiony kubek.|Это моя любимая кружка.
klucz|ключ
torba|сумка
zdjęcie|фотография|Kto to jest na zdjęciu?|Кто это на фото?
kwiatek|цветок
# Описание
nowy|новый
stary|старый
duży|большой
ładny|красивый
jasny|светлый
ulubiony|любимый`});

LX({n:5,title:"Jaki on jest?",ru:"Внешность и характер",who:["maks","kasia"],
intro:"Кася показывает Максу фото своих друзей в телефоне и рассказывает о них. Макс пытается описывать людей по-польски.",
goals:["описывать внешность и характер","спрягать глаголы на -ę, -isz: mówić, robić, lubić","спрягать глаголы на -ę, -ysz: uczyć się, słyszeć","говорить «очень», «немного», «не очень»"],
secs:[
{k:"scene",pl:"Zdjęcia w telefonie",ru:"Фото в телефоне",place:"Kawiarnia, w której pracuje Kasia",desc:"Пятничный вечер, в кофейне почти нет посетителей.",
lines:`kasia|Zobacz, to jest Marta, moja przyjaciółka.|Смотри, это Марта, моя подруга.
maks|Jaka ona jest?|Какая она?
kasia|Jest bardzo wesoła i trochę szalona. Dużo mówi!|Она очень весёлая и немного сумасшедшая. Много говорит!
maks|A ten wysoki chłopak?|А этот высокий парень?
kasia|To jest Bartek. Jest spokojny i mądry. Uczy się chińskiego.|Это Бартек. Он спокойный и умный. Учит китайский.
maks|Chińskiego? Wow. A ty co robisz w wolnym czasie?|Китайский? Ого. А ты что делаешь в свободное время?
kasia|Rysuję i dużo myślę o architekturze. A ty?|Рисую и много думаю об архитектуре. А ты?
maks|Ja teraz robię tylko jedno: uczę się polskiego!|Я сейчас делаю только одно: учу польский!
kasia|I mówisz już całkiem dobrze!|И говоришь уже довольно хорошо!`,
ex:`mcq|Какая Марта?|wesoła i trochę szalona;spokojna i mądra;smutna i cicha|0|Marta jest wesoła i trochę szalona.
mcq|Что учит Бартек?|polskiego;chińskiego;hiszpańskiego|1|Bartek uczy się chińskiego.
build|Соберите фразу: «Он спокойный и умный»|Jest spokojny i mądry.|wesoła ale|Местоимение «on» можно опустить.`},
{k:"grammar",lab:"Спряжение -ę, -isz",title:"Спряжение -ę, -isz / -ysz",sub:"Вторая большая группа: почти все глаголы на -ić и -yć.",
body:[{h:"mówić — говорить"},
{tbl:"ja mówię=я говорю;my mówimy=мы говорим|ty mówisz=ты говоришь;wy mówicie=вы говорите|on / ona mówi=он / она говорит;oni / one mówią=они говорят"},
"Окончания: <b>-ę, -isz, -i, -imy, -icie, -ią</b>. Так же: <span class='pl'>robić</span> (делать), <span class='pl'>lubić</span> (любить, нравиться), <span class='pl'>myśleć</span> (думать): myślę, myślisz…",
{h:"uczyć się — учиться, учить"},
"После cz, sz, rz, ż вместо i пишется <b>y</b>:",
{tbl:"ja uczę się=я учу(сь);my uczymy się=мы учим(ся)|ty uczysz się=ты учишь(ся);wy uczycie się=вы учите(сь)|on / ona uczy się=он / она учит(ся);oni / one uczą się=они учат(ся)"},
{ex:"Co robisz?=Что ты делаешь?|Lubię kawę.=Я люблю кофе.|Słyszysz?=Ты слышишь?"},
{trap:"<span class='pl'>uczyć się</span> + родительный падеж: <span class='pl'>uczę się polskiego</span> (учу польский). Частица <span class='pl'>się</span> обязательна, но не прилипает к глаголу: она пишется отдельно."}],
ex:`fill|Выберите форму|Co ty ___ w weekend?|robisz;robię;robi|0|ty → robisz.
fill|Выберите форму|Oni dobrze ___ po polsku.|mówią;mówi;mówimy|0|oni → mówią.
fill|Выберите форму|Ja ___ się polskiego.|uczy;uczę;uczysz|1|ja → uczę się.
fill|Выберите форму|My ___ kawę.|lubimy;lubicie;lubią|0|my → lubimy.
type|Напишите по-польски: «Я много думаю»|dużo myślę;myślę dużo|myśleć → myślę.`},
{k:"grammar",lab:"Описание людей",title:"Jaki? Jaka? Описание людей",sub:"Прилагательные для внешности и характера и слова, которые смягчают или усиливают.",
body:[{t:"Внешность;Характер|wysoki — высокий;miły — милый, приятный|niski — низкий;wesoły — весёлый|młody — молодой;smutny — грустный|szczupły — стройный;mądry — умный|przystojny — симпатичный (о мужчине);spokojny — спокойный|ładna — красивая (о женщине);zabawny — смешной"},
{ex:"Jest bardzo miły.=Он очень милый.|Jest trochę nieśmiała.=Она немного стеснительная.|Nie jest za bardzo wysoki.=Он не очень высокий."},
{trap:"<span class='pl'>Bardzo</span> — очень, <span class='pl'>trochę</span> — немного. А «не очень» — <span class='pl'>nie za bardzo</span> или просто <span class='pl'>niezbyt</span>."},
{trap:"<span class='pl'>Przystojny</span> говорят о мужчине, <span class='pl'>ładna</span> или <span class='pl'>piękna</span> — о женщине. Сказать мужчине «ładny» звучит странно.",lb:"Ловушка"}],
ex:`mcq|Противоположность «wysoki»?|niski;młody;miły|0|wysoki — высокий, niski — низкий.|niski
fill|Выберите форму|Marta jest ___.|wesoły;wesoła;wesołe|1|Marta — женщина → wesoła.
mcq|Как сказать «немного грустный»?|trochę smutny;bardzo smutny;nie smutny|0|trochę = немного.|trochę smutny
listen|Послушайте и выберите перевод|On jest bardzo zabawny.|Он очень смешной.;Он очень грустный.;Он не очень умный.|0|zabawny — смешной, забавный.`},
{k:"vocab",ex:`match|Соедините|mówić=говорить;robić=делать;lubić=любить;myśleć=думать;słyszeć=слышать
mcq|Что значит «przyjaciółka»?|подруга;приятельница по работе;соседка|0|przyjaciel / przyjaciółka — близкий друг / подруга. Знакомый — znajomy.|przyjaciółka`}],
vocab:`# Глаголы
mówić|говорить|Mówię trochę po polsku.|Я немного говорю по-польски.
robić|делать|Co robisz?|Что ты делаешь?
lubić|любить, нравиться|Lubię kawę.|Я люблю кофе.
myśleć|думать
uczyć się|учить(ся)|Uczę się polskiego.|Я учу польский.
słyszeć|слышать
widzieć|видеть
# Люди
przyjaciel|друг
przyjaciółka|подруга
chłopak|парень
dziewczyna|девушка
# Описание
wysoki|высокий
niski|низкий
młody|молодой
wesoły|весёлый
spokojny|спокойный
mądry|умный
zabawny|смешной
trochę|немного`});

LX({n:6,title:"Kim jesteś?",ru:"Профессии и возраст",who:["maks","tomek"],
intro:"Первый рабочий день Макса в IT-компании. Его новый коллега Томек показывает офис и знакомит с командой.",
goals:["говорить о профессии: Jestem programistą","использовать творительный падеж после być","спрашивать и называть возраст","считать от 30 до 100","говорить об интересах: interesuję się…"],
secs:[
{k:"scene",pl:"Pierwszy dzień w pracy",ru:"Первый день на работе",place:"Biuro, Wrocław",desc:"Опенспейс, кофе и много мониторов. Томек машет Максу рукой.",
lines:`tomek|Cześć! Ty jesteś Maks, prawda? Jestem Tomek.|Привет! Ты Макс, правильно? Я Томек.
maks|Cześć! Tak. Jestem nowym testerem.|Привет! Да. Я новый тестировщик.
tomek|Super. Ja jestem programistą. A to jest Ania, ona jest naszą szefową.|Супер. Я программист. А это Аня, она наша начальница.
maks|Miło mi. Ania jest bardzo młoda!|Приятно. Аня очень молодая!
tomek|Ma trzydzieści lat. A ty ile masz lat?|Ей тридцать лет. А тебе сколько лет?
maks|Dwadzieścia siedem. A ty?|Двадцать семь. А тебе?
tomek|Trzydzieści dwa. Czym się interesujesz?|Тридцать два. Чем ты увлекаешься?
maks|Interesuję się fotografią i muzyką.|Я увлекаюсь фотографией и музыкой.
tomek|A ja górami! W weekendy zawsze jestem w górach.|А я горами! По выходным я всегда в горах.`,
ex:`mcq|Кем работает Томек?|testerem;programistą;szefem|1|Tomek jest programistą.
mcq|Сколько лет Томеку?|27;30;32|2|Tomek ma trzydzieści dwa lata.
listen|Послушайте и выберите перевод|Ile masz lat?|Сколько тебе лет?;Сколько у тебя денег?;Как долго ты здесь?|0|Дословно «Сколько ты имеешь лет?»`},
{k:"grammar",lab:"Творительный падеж",title:"Kim jesteś? Творительный падеж",sub:"После być + профессия, национальность, роль нужен творительный падеж (narzędnik).",
body:["Сравните с русским: «я <b>был студентом</b>». В польском так говорят и в настоящем времени: <span class='pl'>Jestem studentem</span>.",
{t:"Род;Окончание;Пример|мужской;-em (после k, g: -iem);student → studentem, informatyk → informatykiem|женский;-ą;studentka → studentką, lekarka → lekarką|прилагательное м. р.;-ym / -im;dobrym programistą|прилагательное ж. р.;-ą;dobrą nauczycielką"},
{ex:"Jestem lekarzem.=Я врач.|Kasia jest studentką.=Кася студентка.|Tomek jest dobrym programistą.=Томек хороший программист."},
{note:"Мужские профессии на -a (<span class='pl'>programista, kierowca</span>) получают -ą: <span class='pl'>jestem programistą</span>, <span class='pl'>jest kierowcą</span>."},
{trap:"Если после «to» — нужен именительный: <span class='pl'>To jest lekarz</span> (это врач), но <span class='pl'>On jest lekarzem</span> (он врач)."}],
ex:`fill|Выберите форму|Jestem ___.|student;studentem;studentką|1|Мужчина: jestem studentem.
fill|Выберите форму|Kasia jest ___.|architektką;architektka;architektem|0|Женщина: -ą.
fill|Выберите форму|To jest ___.|lekarz;lekarzem;lekarką|0|После «to jest» — именительный падеж.
mcq|Как сказать «Он хороший программист»?|On jest dobry programista.;On jest dobrym programistą.;On jest dobrego programisty.|1|Оба слова в творительном: dobrym programistą.|On jest dobrym programistą.`},
{k:"grammar",lab:"Возраст и числа",title:"Ile masz lat? Числа 30–100",sub:"Возраст «имеют», а слово «год» меняется, как в русском.",
body:[{t:"Число;По-польски|30;trzydzieści|40;czterdzieści|50;pięćdziesiąt|60;sześćdziesiąt|70;siedemdziesiąt|80;osiemdziesiąt|90;dziewięćdziesiąt|100;sto"},
{h:"rok, lata, lat"},
{t:"Число;Форма;Пример|1;rok;Mam rok.|2, 3, 4 (и 22–24, 32–34…);lata;Mam dwa lata. Mam 23 lata.|5–21, 25–31…;lat;Mam pięć lat. Mam 27 lat."},
{ex:"Ile masz lat?=Сколько тебе лет?|Ile pan ma lat?=Сколько Вам лет?|Mam dwadzieścia siedem lat.=Мне двадцать семь лет."},
{trap:"«Мне 27 лет» = <span class='pl'>Mam 27 lat</span> (я имею). Не говорите «Mi jest 27» — так нельзя."}],
ex:`fill|Выберите форму|Tomek ma trzydzieści dwa ___.|rok;lata;lat|1|2, 3, 4 в конце → lata.
fill|Выберите форму|Maks ma dwadzieścia siedem ___.|rok;lata;lat|2|7 → lat.
listen|Какое число вы слышите?|pięćdziesiąt|50;15;5|0|pięćdziesiąt = 50.
type|Напишите по-польски: «Мне 30 лет»|mam trzydzieści lat;mam 30 lat|Mam trzydzieści lat.`},
{k:"vocab",ex:`match|Соедините профессию|lekarz=врач;nauczyciel=учитель;kierowca=водитель;sprzedawca=продавец;informatyk=айтишник
fill|Выберите форму|Interesuję się ___.|muzyka;muzyką;muzyki|1|interesować się + творительный: muzyką.`}],
vocab:`# Профессии
programista|программист|Tomek jest programistą.|Томек — программист.
tester|тестировщик
lekarz|врач|Jestem lekarzem.|Я врач.
lekarka|врач (женщина)
nauczyciel|учитель
nauczycielka|учительница
kierowca|водитель
sprzedawca|продавец
informatyk|айтишник, информатик
student|студент
studentka|студентка
szef|начальник
szefowa|начальница
# Работа и интересы
praca|работа|Jestem w pracy.|Я на работе.
biuro|офис
interesować się|интересоваться, увлекаться|Interesuję się muzyką.|Я увлекаюсь музыкой.
fotografia|фотография
góry|горы`});
