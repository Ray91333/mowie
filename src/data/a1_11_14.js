/* A1 · lessons 11–14 */
LX({n:11,title:"W restauracji",ru:"Кафе и ресторан",who:["maks","kasia","tomek"],
intro:"Пятница. Макс, Кася и Томек идут в ресторан польской кухни на Рынке. Томек — вегетарианец, а Кася не пьёт кофе вечером.",
goals:["заказывать еду в ресторане","использовать родительный падеж после отрицания: nie mam czasu","спрашивать «с кем?» и отвечать ze mną, z tobą","просить счёт"],
secs:[
{k:"scene",pl:"Pierogi na Rynku",ru:"Пироги на Рынке",place:"Restauracja przy Rynku",desc:"Деревянные столы, на стенах старые фотографии Вроцлава.",
lines:`kel|Dobry wieczór! Co państwo zamawiają?|Добрый вечер! Что будете заказывать?
kasia|Dla mnie żurek i pierogi ruskie.|Мне журек и вареники «руские».
tomek|Ja nie jem mięsa. Czy są pierogi bez mięsa?|Я не ем мясо. Есть вареники без мяса?
kel|Tak, ruskie są z serem i ziemniakami. Mamy też pierogi z kapustą i grzybami.|Да, «руские» с творогом и картошкой. Есть ещё вареники с капустой и грибами.
tomek|To poproszę z kapustą i grzybami.|Тогда с капустой и грибами.
maks|A ja chcę schabowego z ziemniakami i surówką.|А я хочу отбивную с картошкой и салатом.
kel|Coś do picia?|Что-нибудь выпить?
kasia|Poproszę kompot. Wieczorem nie piję kawy.|Компот, пожалуйста. Вечером я не пью кофе.
maks|A dla nas dwa piwa. Tomek, idziesz ze mną potem na koncert?|А нам два пива. Томек, пойдёшь со мной потом на концерт?
tomek|Niestety, nie mam czasu. Jutro rano jadę w góry.|К сожалению, у меня нет времени. Завтра утром еду в горы.`,
ex:`mcq|Почему Томек не заказывает мясо?|nie je mięsa;nie ma czasu;nie lubi pierogów|0|Tomek nie je mięsa — он вегетарианец.
mcq|Что пьёт Кася?|kawę;kompot;piwo|1|Kasia pije kompot. Wieczorem nie pije kawy.
mcq|«Pierogi ruskie» — это вареники с…|творогом и картошкой;мясом;капустой и грибами|0|Ruskie — с творогом (twaróg) и картошкой. Название не про Россию, а про историческую Русь (Галичину).
listen|Послушайте и выберите перевод|Co państwo zamawiają?|Что будете заказывать?;Сколько вас?;Вам понравилось?|0|państwo — вежливое «Вы» к группе.`},
{k:"grammar",lab:"Родительный при отрицании",title:"Nie mam czasu: родительный падеж",sub:"Когда глагол с винительным падежом получает «nie», дополнение переходит в родительный падеж.",
body:["Сравните: <span class='pl'>Mam czas</span> — <span class='pl'>Nie mam czasu</span>. <span class='pl'>Piję kawę</span> — <span class='pl'>Nie piję kawy</span>.",
{t:"Род;Им. п.;Род. п.;Пример|м. р.;czas, ser, brat;czasu, sera, brata;Nie mam brata.|ж. р.;kawa, herbata;kawy, herbaty;Nie piję kawy.|ж. р. после k, g, -ia;książka, kuchnia;książki, kuchni;Nie mam książki.|ср. р.;mięso, mleko;mięsa, mleka;Nie jem mięsa."},
{note:"У мужского рода окончание бывает <b>-a</b> (часто у людей, животных, конкретных предметов: brata, kota, sera, chleba) или <b>-u</b> (часто у абстрактных и «неисчисляемых»: czasu, soku, cukru). Лучше запоминать вместе со словом."},
{ex:"Nie mam czasu.=У меня нет времени.|Nie lubię mleka.=Я не люблю молоко.|Nie znam Tomka.=Я не знаю Томека.|Nie ma chleba.=Хлеба нет."},
{trap:"Родительный нужен и после <span class='pl'>bez</span> (без) и <span class='pl'>dla</span> (для): <span class='pl'>bez cukru, dla mamy, dla mnie</span>."}],
ex:`fill|Выберите форму|Nie piję ___.|kawa;kawę;kawy|2|nie + piję → родительный: kawy.
fill|Выберите форму|Tomek nie je ___.|mięso;mięsa;mięsem|1|mięso → mięsa.
fill|Выберите форму|Nie mam ___.|czas;czasu;czasa|1|czas → czasu.
fill|Выберите форму|Herbata bez ___.|cukier;cukru;cukrem|1|bez + родительный: cukru.
type|Напишите по-польски: «Я не люблю рыбу»|nie lubię ryby|ryba → ryby.`},
{k:"grammar",lab:"Ze mną, z tobą",title:"Z kim? Со мной, с тобой",sub:"Личные местоимения в творительном падеже.",
body:[{t:"Местоимение;С кем?;Пример|ja;ze mną;Idziesz ze mną?|ty;z tobą;Idę z tobą.|on, ono;z nim;Rozmawiam z nim.|ona;z nią;Mieszkam z nią.|my;z nami;Chodź z nami!|wy;z wami;Jadę z wami.|oni, one;z nimi;Gram z nimi w piłkę."},
{ex:"Kto idzie ze mną?=Кто идёт со мной?|Lubię z tobą rozmawiać.=Я люблю с тобой разговаривать."},
{trap:"Не забудьте <b>e</b>: <span class='pl'>ze mną</span>, а не «z mną»."},
{h:"Фразы в ресторане"},
{ex:"Poproszę kartę.=Меню, пожалуйста.|Dla mnie…=Мне…|Poproszę rachunek.=Счёт, пожалуйста.|Czy mogę płacić kartą?=Можно оплатить картой?|Reszty nie trzeba.=Сдачи не надо."}],
ex:`fill|Выберите форму|Idziesz ___ na koncert?|ze mną;z mnie;z ja|0|ze mną — со мной.
fill|Выберите форму|Kasia? Lubię z ___ rozmawiać.|nią;nim;nimi|0|ona → z nią.
mcq|Как попросить счёт?|Poproszę rachunek.;Poproszę kartę.;Dla mnie żurek.|0|rachunek — счёт. A karta — меню.|Poproszę rachunek.
build|Соберите: «Пойдём с нами!»|Chodź z nami!|ze mną|chodź — иди, пойдём.`},
{k:"vocab",ex:`match|Соедините|zupa=суп;pierogi=вареники;surówka=салат из сырых овощей;deser=десерт;rachunek=счёт
mcq|Что такое «żurek»?|кислый суп на закваске;сладкий напиток;пирог с яблоками|0|Żurek — традиционный польский кислый суп на ржаной закваске, часто с колбасой и яйцом.|żurek`}],
vocab:`# Ресторан
restauracja|ресторан
kelner|официант
karta|меню; карта|Poproszę kartę.|Меню, пожалуйста.
zamawiać|заказывать|Co państwo zamawiają?|Что будете заказывать?
rachunek|счёт
napiwek|чаевые
# Польские блюда
pierogi|вареники
żurek|журек (кислый суп)
schabowy|свиная отбивная
surówka|салат из сырых овощей
kompot|компот
grzyby|грибы
deser|десерт
# Полезное
bez|без|Kawa bez cukru.|Кофе без сахара.
dla|для|Dla mnie zupa.|Мне суп.
niestety|к сожалению
czas|время|Nie mam czasu.|У меня нет времени.`});

LX({n:12,title:"Moja rodzina",ru:"Семья",who:["maks","kasia"],
intro:"Кася показывает Максу семейный альбом: родители в Гданьске, брат в Лондоне, бабушка Галина. Макс рассказывает о своей семье в Харькове.",
goals:["рассказывать о семье","спрашивать «чей?»: czyj, czyja, czyje","использовать nasz, wasz, ich","говорить, как часто что-то происходит","называть части дня: rano, wieczorem"],
secs:[
{k:"scene",pl:"Album rodzinny",ru:"Семейный альбом",place:"Mieszkanie Kasi",desc:"На диване старый фотоальбом в бархатной обложке.",
lines:`kasia|To są moi rodzice. Mama jest nauczycielką, a tata ma mały warsztat.|Это мои родители. Мама учительница, а у папы маленькая мастерская.
maks|A czyj to pies?|А чья это собака?
kasia|To nasz pies, Burek. Mieszka z rodzicami w Gdańsku.|Это наша собака, Бурек. Живёт с родителями в Гданьске.
maks|A ten chłopak? To twój brat?|А этот парень? Это твой брат?
kasia|Tak, to Piotrek. Mieszka w Londynie. Rzadko przyjeżdża do domu.|Да, это Пётрек. Живёт в Лондоне. Редко приезжает домой.
maks|Często do niego dzwonisz?|Часто ему звонишь?
kasia|W każdą niedzielę wieczorem. A ty masz rodzeństwo?|Каждое воскресенье вечером. А у тебя есть братья или сёстры?
maks|Mam młodszego brata. Moi rodzice mieszkają w Charkowie. Dzwonię do nich codziennie.|У меня есть младший брат. Мои родители живут в Харькове. Звоню им каждый день.
kasia|Codziennie? Ja nie dzwonię do rodziców codziennie!|Каждый день? Я не звоню родителям каждый день!`,
ex:`mcq|Где живёт брат Каси?|w Gdańsku;w Londynie;w Charkowie|1|Piotrek mieszka w Londynie.
mcq|Как часто Макс звонит родителям?|codziennie;rzadko;w niedzielę|0|Maks dzwoni do rodziców codziennie.
listen|Послушайте и выберите перевод|Masz rodzeństwo?|У тебя есть братья или сёстры?;У тебя есть семья?;У тебя есть родители?|0|rodzeństwo — братья и сёстры вместе.`},
{k:"grammar",lab:"Czyj? Nasz, wasz",title:"Czyj to jest? Чей это?",sub:"Вопрос «чей» и все притяжательные местоимения.",
body:[{t:"Чей?;м. р.;ж. р.;ср. р.;мн. ч. (вещи)|чей?;czyj;czyja;czyje;czyje|мой;mój;moja;moje;moje|твой;twój;twoja;twoje;twoje|его / её;jego / jej;jego / jej;jego / jej;jego / jej|наш;nasz;nasza;nasze;nasze|ваш;wasz;wasza;wasze;wasze|их;ich;ich;ich;ich"},
{ex:"Czyj to pies? To nasz pies.=Чья это собака? Это наша собака.|Czyja to torba? To moja torba.=Чья это сумка? Моя.|To jest ich dom.=Это их дом."},
{trap:"Собака по-польски мужского рода: <span class='pl'>ten pies</span>, поэтому <span class='pl'>czyj to pies</span>, <span class='pl'>nasz pies</span>.",lb:"Ловушка для русскоязычных"},
{h:"Семья"},
{ex:"rodzice=родители|mama, tata=мама, папа|brat, siostra=брат, сестра|rodzeństwo=братья и сёстры|dziadek, babcia=дедушка, бабушка|syn, córka=сын, дочь|mąż, żona=муж, жена"}],
ex:`fill|Выберите слово|___ to jest kot?|Czyj;Czyja;Czyje|0|kot (м. р.) → czyj.
fill|Выберите слово|To jest ___ córka.|nasz;nasza;nasze|1|córka (ж. р.) → nasza.
fill|Выберите слово|To jest ___ mieszkanie.|wasz;wasza;wasze|2|mieszkanie (ср. р.) → wasze.
mcq|Как сказать «Это их машина»?|To jest ich samochód.;To jest ichy samochód.;To jest ichny samochód.|0|ich не меняется.|To jest ich samochód.`},
{k:"grammar",lab:"Как часто? Когда?",title:"Jak często? Kiedy?",sub:"Наречия частоты и части дня.",
body:[{t:"Как часто?;Значение|zawsze;всегда|zwykle;обычно|często;часто|czasem / czasami;иногда|rzadko;редко|nigdy nie;никогда не|codziennie;каждый день"},
{trap:"С <span class='pl'>nigdy</span> обязательно <span class='pl'>nie</span>, как в русском: <span class='pl'>Nigdy nie piję kawy</span> (никогда не пью кофе)."},
{t:"Когда?;Значение|rano;утром|przed południem;до полудня|w południe;в полдень|po południu;после обеда, днём|wieczorem;вечером|w nocy;ночью"},
{ex:"Zwykle rano piję kawę.=Обычно утром я пью кофе.|Wieczorem czytam.=Вечером я читаю.|W nocy śpię.=Ночью я сплю."}],
ex:`fill|Вставьте слово|Nigdy ___ jem mięsa.|nie;tak;już|0|nigdy + nie.
mcq|Что значит «po południu»?|после обеда, днём;до полудня;в полночь|0|po południu — после полудня.|po południu
match|Соедините|zawsze=всегда;często=часто;rzadko=редко;wieczorem=вечером;rano=утром
type|Напишите по-польски: «каждый день»|codziennie|codziennie = co + dzień.`},
{k:"vocab",ex:`match|Соедините|mąż=муж;żona=жена;syn=сын;córka=дочь;dziadek=дедушка
mcq|Что значит «dzwonić do mamy»?|звонить маме;звонить в дверь маме;идти к маме|0|dzwonić do + родительный: dzwonię do mamy.|Dzwonię do mamy.`}],
vocab:`# Семья
rodzina|семья
rodzice|родители
mama|мама
tata|папа
brat|брат
siostra|сестра
rodzeństwo|братья и сёстры
dziadek|дедушка
babcia|бабушка
syn|сын
córka|дочь
mąż|муж
żona|жена
dziecko|ребёнок
# Частота
zawsze|всегда
zwykle|обычно
często|часто
rzadko|редко
nigdy|никогда|Nigdy nie piję kawy.|Я никогда не пью кофе.
codziennie|каждый день
dzwonić|звонить|Dzwonię do mamy.|Я звоню маме.`});

LX({n:13,title:"Umówmy się!",ru:"Время и дни недели",who:["maks","tomek"],
intro:"Томек нашёл билеты на концерт джаза и зовёт Макса. Нужно договориться о дне и времени, а у обоих плотный график.",
goals:["спрашивать и называть время","договариваться о встрече: o której?","называть дни недели","приглашать, соглашаться и отказываться"],
secs:[
{k:"scene",pl:"Masz czas w piątek?",ru:"Ты свободен в пятницу?",place:"Biuro, przerwa na kawę",desc:"Томек держит телефон с открытой афишей.",
lines:`tomek|Maks, masz ochotę iść na koncert jazzowy?|Макс, хочешь пойти на джазовый концерт?
maks|Chętnie! Kiedy?|С удовольствием! Когда?
tomek|W piątek albo w sobotę. Kiedy masz czas?|В пятницу или в субботу. Когда ты свободен?
maks|W piątek mam lekcję polskiego do osiemnastej. W sobotę jestem wolny.|В пятницу у меня урок польского до восемнадцати. В субботу я свободен.
tomek|To w sobotę. Koncert jest o dwudziestej.|Тогда в субботу. Концерт в двадцать часов.
maks|Spotkamy się przed klubem?|Встретимся у клуба?
tomek|Tak, o wpół do ósmej. Pasuje ci?|Да, в половине восьмого. Тебе подходит?
maks|Pasuje. Która jest teraz godzina? Muszę iść na spotkanie.|Подходит. Который сейчас час? Мне нужно идти на встречу.
tomek|Jest za pięć jedenasta. Biegnij!|Без пяти одиннадцать. Беги!`,
ex:`mcq|Когда концерт?|w piątek o osiemnastej;w sobotę o dwudziestej;w niedzielę rano|1|Koncert jest w sobotę o dwudziestej.
mcq|Во сколько они встречаются?|o 19:30;o 20:00;o 18:00|0|o wpół do ósmej — в половине восьмого, 19:30.
listen|Послушайте и выберите перевод|Masz ochotę iść na koncert?|Хочешь пойти на концерт?;Ты был на концерте?;Где концерт?|0|mieć ochotę — хотеть, быть не прочь.`},
{k:"grammar",lab:"Która godzina?",title:"Która godzina? О времени",sub:"Часы называют порядковыми числительными женского рода, потому что godzina — женского рода.",
body:[{t:"Час;Która jest godzina? (сейчас);O której? (во сколько)|1;pierwsza;o pierwszej|2;druga;o drugiej|3;trzecia;o trzeciej|4;czwarta;o czwartej|5;piąta;o piątej|6;szósta;o szóstej|7;siódma;o siódmej|8;ósma;o ósmej|9;dziewiąta;o dziewiątej|10;dziesiąta;o dziesiątej|11;jedenasta;o jedenastej|12;dwunasta;o dwunastej|20;dwudziesta;o dwudziestej"},
{ex:"Jest ósma.=Восемь часов.|Jest ósma piętnaście.=Восемь пятнадцать.|Jest wpół do dziewiątej.=Половина девятого.|Jest za pięć dziesiąta.=Без пяти десять.|Spotkajmy się o szóstej.=Давай встретимся в шесть."},
{trap:"<span class='pl'>Wpół do dziewiątej</span> — это 8:30, как русское «половина девятого». В официальной речи (вокзал, радио) время называют по 24 часам: <span class='pl'>o dwudziestej trzydzieści</span>."}],
ex:`mcq|Как сказать «в семь часов»?|o siódmej;o siedem;w siódma|0|O której? → o siódmej.|o siódmej
mcq|Сколько это: «wpół do szóstej»?|5:30;6:30;6:00|0|Половина шестого = 5:30.
fill|Выберите форму|Lekcja jest o ___.|dziesiąta;dziesiątej;dziesięć|1|o + форма на -ej.
listen|Который час?|Jest za pięć dwunasta.|11:55;12:05;12:55|0|za pięć dwunasta — без пяти двенадцать.`},
{k:"grammar",lab:"Дни недели",title:"Dni tygodnia: дни недели",sub:"«В какой день» — предлог w и винительный падеж.",
body:[{t:"День;Когда?|poniedziałek (понедельник);w poniedziałek|wtorek (вторник);we wtorek|środa (среда);w środę|czwartek (четверг);w czwartek|piątek (пятница);w piątek|sobota (суббота);w sobotę|niedziela (воскресенье);w niedzielę"},
{ex:"W poniedziałek pracuję.=В понедельник я работаю.|Co robisz w weekend?=Что делаешь на выходных?|Do zobaczenia we wtorek!=До встречи во вторник!"},
{note:"Перед «w» в начале слова — <span class='pl'>we</span>: <span class='pl'>we wtorek</span>, <span class='pl'>we Wrocławiu</span>."},
{h:"Приглашение"},
{ex:"Masz czas w sobotę?=Ты свободен в субботу?|Masz ochotę na kawę?=Хочешь кофе?|Pasuje ci?=Тебе подходит?|Niestety, nie mogę.=К сожалению, не могу.|Może innym razem?=Может, в другой раз?"}],
ex:`fill|Выберите форму|Spotkamy się ___ środę.|w;we;na|0|w środę.
fill|Выберите форму|Mam lekcję ___ wtorek.|w;we;o|1|we wtorek: перед w → we.
match|Соедините|poniedziałek=понедельник;czwartek=четверг;sobota=суббота;niedziela=воскресенье;środa=среда
mcq|Как вежливо отказаться?|Niestety, nie mogę.;Nie chcę.;Nie mam ochoty z tobą.|0|Niestety, nie mogę — к сожалению, не могу.|Niestety, nie mogę.`},
{k:"vocab",ex:`match|Соедините|godzina=час;minuta=минута;spotkanie=встреча;tydzień=неделя;dzisiaj=сегодня
mcq|Что значит «jutro»?|завтра;утро;вчера|0|jutro — завтра. «Утро» — rano.|jutro`}],
vocab:`# Время
godzina|час|Która jest godzina?|Который час?
minuta|минута
teraz|сейчас
dzisiaj|сегодня
jutro|завтра
wczoraj|вчера
tydzień|неделя
weekend|выходные
# Дни недели
poniedziałek|понедельник
wtorek|вторник
środa|среда
czwartek|четверг
piątek|пятница
sobota|суббота
niedziela|воскресенье
# Встречи
spotkanie|встреча
spotkać się|встретиться|Spotkamy się o ósmej.|Встретимся в восемь.
mieć ochotę|хотеть, быть не прочь|Masz ochotę na kawę?|Хочешь кофе?
pasować|подходить|Pasuje ci?|Тебе подходит?`});

LX({n:14,title:"Co robiłeś w weekend?",ru:"Выходные",who:["maks","tomek"],
intro:"Понедельник, утро. Томек вернулся из Карконошей, а Макс провёл выходные во Вроцлаве. За кофе они рассказывают друг другу, что делали.",
goals:["рассказывать о прошлом","образовывать прошедшее время","различать мужской и женский род в прошедшем","использовать прошедшее время глаголов być, mieć, jeść, iść"],
secs:[
{k:"scene",pl:"Poniedziałek rano",ru:"Утро понедельника",place:"Kuchnia w biurze",desc:"Томек загорелый и довольный. У Макса в руках вторая чашка кофе.",
lines:`maks|Cześć, Tomek! Jak było w górach?|Привет, Томек! Как было в горах?
tomek|Super! Byłem w Karkonoszach. W sobotę wszedłem na Śnieżkę.|Супер! Был в Карконошах. В субботу поднялся на Снежку.
maks|Sam?|Один?
tomek|Nie, z siostrą. Ona była pierwszy raz w górach. A ty co robiłeś?|Нет, с сестрой. Она первый раз была в горах. А ты что делал?
maks|W sobotę byłem z Kasią w ZOO. Widzieliśmy słonie i pingwiny.|В субботу я был с Касей в зоопарке. Мы видели слонов и пингвинов.
tomek|A w niedzielę?|А в воскресенье?
maks|Spałem do jedenastej, potem gotowałem i oglądałem film.|Спал до одиннадцати, потом готовил и смотрел фильм.
tomek|Co jadłeś? Znowu pierogi?|Что ты ел? Опять вареники?
maks|Nie! Zrobiłem barszcz ukraiński. Kasia zjadła dwa talerze!|Нет! Я сварил украинский борщ. Кася съела две тарелки!`,
ex:`mcq|Где был Томек?|w Karkonoszach;w ZOO;nad morzem|0|Tomek był w Karkonoszach.
mcq|Что делал Макс в воскресенье?|spał, gotował, oglądał film;był w górach;był w ZOO|0|W niedzielę Maks spał, gotował i oglądał film.
listen|Послушайте и выберите перевод|Jak było w górach?|Как было в горах?;Где горы?;Ты был в горах?|0|Jak było? — как было?`},
{k:"grammar",lab:"Прошедшее время",title:"Czas przeszły: прошедшее время",sub:"Берём инфинитив, убираем -ć, добавляем -ł- и окончание лица.",
body:[{h:"robić → robi- + ł + окончание"},
{t:"Лицо;Мужчина;Женщина|ja;robiłem;robiłam|ty;robiłeś;robiłaś|on / ona / ono;robił;robiła (ono robiło)|my;robiliśmy;robiłyśmy|wy;robiliście;robiłyście|oni / one;robili;robiły"},
"В отличие от русского, форма сама показывает лицо: <span class='pl'>robiłem</span> = я делал, <span class='pl'>robiłaś</span> = ты делала. Местоимение не нужно.",
{ex:"Oglądałem film.=Я смотрел фильм.|Gotowałaś obiad?=Ты готовила обед?|Kasia czytała książkę.=Кася читала книгу.|Graliśmy w piłkę.=Мы играли в футбол."},
{note:"Форма <b>-li</b> (robili, byli) — для групп, где есть хотя бы один мужчина. <b>-ły</b> (robiły, były) — для женщин, детей, животных, вещей."},
{trap:"Ударение в формах <span class='pl'>robiliśmy, robiliście</span> падает на третий слог с конца: <span class='pl'>ro-BI-liś-my</span>. Это одно из немногих исключений.",lb:"Ловушка"}],
ex:`fill|Выберите форму (говорит Макс)|Wczoraj ___ film.|oglądałem;oglądałam;oglądał|0|Мужчина о себе: -łem.
fill|Выберите форму (говорит Кася)|W sobotę ___ w kinie.|byłem;byłam;była|1|Женщина о себе: -łam.
fill|Выберите форму|Tomek ___ w górach.|był;była;było|0|on → był.
fill|Выберите форму|Co ty ___, Kasiu?|robiłeś;robiłaś;robiła|1|Кася — женщина: robiłaś.
type|Напишите по-польски (мужчина): «Я готовил обед»|gotowałem obiad|gotować → gotowa + łem.`},
{k:"grammar",lab:"być, mieć, jeść, iść",title:"Być, mieć, jeść, iść в прошедшем",sub:"Самые частые глаголы и несколько неправильных форм.",
body:[{t:"Глагол;on;ona;oni;ja (м.)|być;był;była;byli;byłem|mieć;miał;miała;mieli;miałem|jeść;jadł;jadła;jedli;jadłem|iść;szedł;szła;szli;szedłem|pójść;poszedł;poszła;poszli;poszedłem"},
{ex:"Byłem w pracy.=Я был на работе.|Miałam dużo pracy.=У меня было много работы.|Co jadłeś?=Что ты ел?|Poszliśmy do kina.=Мы пошли в кино."},
{note:"«Мы видели» — <span class='pl'>widzieliśmy</span>: глаголы на -eć меняют e на a в единственном числе (<span class='pl'>widział, miał</span>), но оставляют e во множественном (<span class='pl'>widzieli, mieli</span>)."},
{trap:"«Был» о погоде, событиях — средний род: <span class='pl'>Jak było?</span> (как было?), <span class='pl'>Było super!</span>"}],
ex:`fill|Выберите форму|Gdzie ___ wczoraj, Tomku?|byłeś;byłaś;był|0|ty (мужчина) → byłeś.
fill|Выберите форму|Kasia ___ dwa talerze zupy.|jadła;jadł;jedła|0|jeść → ona jadła.
fill|Выберите форму|My ___ do kina.|poszliśmy;poszłyśmy;poszedł|0|Группа с мужчиной: poszliśmy.
mcq|Как сказать «Было здорово!»?|Było super!;Był super!;Była super!|0|Безличное «было» — средний род: było.|Było super!`},
{k:"vocab",ex:`match|Соедините|spać=спать;oglądać=смотреть;wczoraj=вчера;potem=потом;znowu=опять
mcq|Что значит «pierwszy raz»?|первый раз;первый день;первое место|0|raz — раз. pierwszy raz — впервые.|pierwszy raz`}],
vocab:`# Глаголы
spać|спать|Spałem do jedenastej.|Я спал до одиннадцати.
oglądać|смотреть (фильм, телевизор)
widzieć|видеть
iść|идти
pójść|пойти
odpoczywać|отдыхать
# Время
wczoraj|вчера
przedwczoraj|позавчера
potem|потом
znowu|опять, снова
pierwszy raz|впервые
w zeszły weekend|в прошлые выходные
# Места
kino|кино
zoo|зоопарк
klub|клуб
góry|горы
wycieczka|экскурсия, поездка`});
