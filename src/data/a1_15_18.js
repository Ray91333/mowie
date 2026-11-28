/* A1 · lessons 15–18 */
LX({n:15,title:"Jak dojść do rynku?",ru:"Город и дорога",who:["diego","maks"],
intro:"Диего потерялся по дороге на встречу с Максом на Рынке. Он спрашивает дорогу у прохожей, а потом звонит Максу.",
goals:["спрашивать и объяснять дорогу","различать iść и chodzić, jechać и jeździć","использовать do + родительный падеж","понимать слова prosto, w prawo, w lewo"],
secs:[
{k:"scene",pl:"Gdzie jest Rynek?",ru:"Где Рынок?",place:"Ulica Świdnicka",desc:"Диего с телефоном, на котором села батарея.",
lines:`diego|Przepraszam, jak dojść do Rynku?|Извините, как дойти до Рынка?
pani|To blisko. Proszę iść prosto, potem skręcić w lewo przy kościele.|Это близко. Идите прямо, потом поверните налево у костёла.
diego|Prosto i w lewo. A daleko jest?|Прямо и налево. А далеко?
pani|Nie, pięć minut pieszo. Rynek jest naprzeciwko ratusza… no, ratusz jest na Rynku!|Нет, пять минут пешком. Рынок напротив ратуши… ну, ратуша и есть на Рынке!
diego|Dziękuję bardzo!|Большое спасибо!
diego|Maks? Już idę! Zgubiłem się, ale teraz wiem, gdzie jestem.|Макс? Уже иду! Я заблудился, но теперь знаю, где я.
maks|Nie ma problemu. Ja zawsze chodzę tu pieszo, a ty?|Без проблем. Я всегда хожу сюда пешком, а ты?
diego|Zwykle jeżdżę tramwajem, ale dzisiaj idę na piechotę.|Обычно езжу на трамвае, но сегодня иду пешком.
maks|Czekam przy krasnalu obok fontanny!|Жду у гнома рядом с фонтаном!`,
ex:`mcq|Как дойти до Рынка?|prosto, potem w lewo;w prawo, potem prosto;tramwajem|0|Proszę iść prosto, potem skręcić w lewo.
mcq|Где ждёт Макс?|przy krasnalu obok fontanny;przy kościele;na dworcu|0|Wrocław słynie z krasnali — небольших бронзовых гномов по всему городу.
listen|Послушайте и выберите перевод|Jak dojść do Rynku?|Как дойти до Рынка?;Где Рынок?;Далеко до Рынка?|0|dojść do — дойти до.`},
{k:"grammar",lab:"iść / chodzić",title:"Iść czy chodzić? Jechać czy jeździć?",sub:"В польском, как в русском, два глагола движения: «идти сейчас» и «ходить регулярно».",
body:[{t:"Пешком;Сейчас, в одну сторону;Регулярно, туда-сюда|инфинитив;iść (идти);chodzić (ходить)|ja;idę;chodzę|ty;idziesz;chodzisz|on / ona;idzie;chodzi|my;idziemy;chodzimy|wy;idziecie;chodzicie|oni;idą;chodzą"},
{t:"На транспорте;Сейчас, в одну сторону;Регулярно, туда-сюда|инфинитив;jechać (ехать);jeździć (ездить)|ja;jadę;jeżdżę|ty;jedziesz;jeździsz|on / ona;jedzie;jeździ|my;jedziemy;jeździmy|wy;jedziecie;jeździcie|oni;jadą;jeżdżą"},
{ex:"Idę do pracy.=Я иду на работу (сейчас).|Codziennie chodzę do pracy.=Каждый день хожу на работу.|Jadę tramwajem.=Я еду на трамвае.|Często jeżdżę do Krakowa.=Я часто езжу в Краков."},
{trap:"Транспорт — творительный падеж без предлога: <span class='pl'>jadę tramwajem, autobusem, rowerem, pociągiem</span>. «Пешком» — <span class='pl'>pieszo</span> или <span class='pl'>na piechotę</span>."}],
ex:`fill|Выберите глагол|Teraz ___ do domu.|idę;chodzę;jeżdżę|0|Сейчас, в одну сторону: idę.
fill|Выберите глагол|Co sobotę ___ na basen.|idę;chodzę;jadę|1|Регулярно: chodzę.
fill|Выберите глагол|Diego zwykle ___ tramwajem.|jedzie;jeździ;idzie|1|zwykle — регулярно: jeździ.
fill|Выберите форму|Jadę ___.|autobus;autobusem;autobusa|1|Транспорт — творительный: autobusem.
type|Напишите по-польски: «Я еду на работу»|jadę do pracy|jechać → jadę, do pracy — на работу.`},
{k:"grammar",lab:"Дорога",title:"Prosto, w lewo, do + родительный",sub:"Слова для дороги и предлог do (куда).",
body:[{ex:"prosto=прямо|w prawo=направо|w lewo=налево|skręcić=повернуть|obok=рядом с|naprzeciwko=напротив|blisko=близко|daleko=далеко|na rogu=на углу"},
{h:"do + родительный падеж"},
{t:"Куда?;Пример|do domu;домой|do pracy;на работу|do parku;в парк|do szkoły;в школу|do Krakowa;в Краков|do kina;в кино"},
{note:"После <span class='pl'>obok</span>, <span class='pl'>naprzeciwko</span>, <span class='pl'>blisko</span> тоже нужен родительный: <span class='pl'>obok fontanny, naprzeciwko ratusza, blisko dworca</span>."},
{trap:"<span class='pl'>do pracy</span> — «на работу», хотя в русском предлог «на». Польское <span class='pl'>do</span> значит «внутрь, к».",lb:"Ловушка для русскоязычных"}],
ex:`mcq|Что значит «w prawo»?|направо;правильно;налево|0|w prawo — направо, w lewo — налево.|w prawo
fill|Выберите форму|Idę do ___.|szkoła;szkoły;szkołę|1|do + родительный: szkoły.
fill|Выберите форму|Czekam obok ___.|fontanna;fontanny;fontanną|1|obok + родительный: fontanny.
build|Соберите: «Идите прямо, потом налево»|Proszę iść prosto, potem w lewo.|w prawo|Proszę + инфинитив — вежливая просьба.`},
{k:"vocab",ex:`match|Соедините|tramwaj=трамвай;autobus=автобус;przystanek=остановка;skrzyżowanie=перекрёсток;most=мост
mcq|Что значит «zgubić się»?|заблудиться;потерять сумку;опоздать|0|zgubić się — заблудиться. Zgubiłem się — я заблудился.|Zgubiłem się.`}],
vocab:`# Город
rynek|рыночная площадь, центр старого города
ratusz|ратуша
kościół|костёл, церковь
most|мост
skrzyżowanie|перекрёсток
przystanek|остановка
dworzec|вокзал
# Транспорт
tramwaj|трамвай|Jadę tramwajem.|Еду на трамвае.
autobus|автобус
pociąg|поезд
samochód|машина
rower|велосипед
pieszo|пешком
# Направления
prosto|прямо
w prawo|направо
w lewo|налево
blisko|близко
daleko|далеко
naprzeciwko|напротив
zgubić się|заблудиться`});

LX({n:16,title:"Na poczcie",ru:"Почта и упаковки",who:["maks"],
intro:"У мамы Макса скоро день рождения. Он идёт на почту, чтобы отправить посылку в Харьков, а по дороге покупает воду и сок в магазине.",
goals:["отправлять посылку и покупать конверты","образовывать родительный падеж множественного числа","правильно говорить числа с существительными: dwa listy, pięć listów","называть упаковки: butelka, puszka, paczka"],
secs:[
{k:"scene",pl:"Paczka do Charkowa",ru:"Посылка в Харьков",place:"Poczta Polska",desc:"Очередь из пяти человек, на табло номер 47.",
lines:`urz|Dzień dobry. Co dla pana?|Добрый день. Что Вам?
maks|Dzień dobry. Chcę wysłać paczkę na Ukrainę.|Добрый день. Хочу отправить посылку в Украину.
urz|Proszę położyć na wagę. Trzy kilogramy. Co jest w środku?|Положите на весы, пожалуйста. Три килограмма. Что внутри?
maks|Prezenty dla mamy: dwie książki, pięć czekolad i kawa.|Подарки для мамы: две книги, пять шоколадок и кофе.
urz|Dobrze. Proszę wypełnić ten formularz.|Хорошо. Заполните, пожалуйста, этот бланк.
maks|Poproszę jeszcze trzy koperty i pięć znaczków.|И ещё три конверта и пять марок, пожалуйста.
urz|Razem sto dwadzieścia złotych.|Всего сто двадцать злотых.
maks|Ile dni idzie paczka?|Сколько дней идёт посылка?
urz|Około dziesięciu dni.|Около десяти дней.`,
ex:`mcq|Что в посылке?|dwie książki, pięć czekolad i kawa;trzy koperty;pięć znaczków|0|W paczce są dwie książki, pięć czekolad i kawa.
mcq|Сколько идёт посылка?|około dziesięciu dni;trzy dni;tydzień|0|Około dziesięciu dni — около десяти дней.
listen|Послушайте и выберите перевод|Chcę wysłać paczkę.|Хочу отправить посылку.;Хочу получить посылку.;Где моя посылка?|0|wysłać — отправить.`},
{k:"grammar",lab:"Родительный мн. ч.",title:"Dopełniacz l.mn.: родительный множественного числа",sub:"Нужен после «много», «нет», мер и чисел от 5.",
body:[{t:"Тип;Окончание;Примеры|м. р. (большинство);-ów;list → listów, pomidor → pomidorów, znaczek → znaczków|м. р. на мягкий, cz, sz, rz;-y / -i;klucz → kluczy, pokój → pokoi|ж. р. и ср. р.;нулевое окончание;książka → książek, czekolada → czekolad, jabłko → jabłek, okno → okien|ж. р. на -ia, мягкие;-i / -y;kuchnia → kuchni, noc → nocy"},
"Нулевое окончание часто добавляет <b>e</b> между согласными: <span class='pl'>paczka → paczek, butelka → butelek, torba → toreb</span>.",
{ex:"dużo ludzi=много людей|nie ma biletów=нет билетов|kilo truskawek=кило клубники|pięć minut=пять минут"},
{trap:"<span class='pl'>ludzie → ludzi</span>, <span class='pl'>dzieci → dzieci</span>, <span class='pl'>pieniądze → pieniędzy</span> — частые исключения."}],
ex:`fill|Выберите форму|Mam dużo ___.|książki;książek;książkami|1|książka → książek.
fill|Выберите форму|Kilo ___, proszę.|pomidory;pomidorów;pomidor|1|Мужской род: -ów.
fill|Выберите форму|Nie ma ___.|biletów;bilety;biletem|0|bilet → biletów.
fill|Выберите форму|Pięć ___.|minuty;minut;minutów|1|minuta → minut.`},
{k:"grammar",lab:"Числа + существительное",title:"Dwa listy, pięć listów",sub:"Как в русском: «два письма — пять писем». Только в польском после 2–4 стоит именительный множественного.",
body:[{t:"Число;Форма;Пример|1;им. п. ед. ч.;jeden list, jedna koperta|2, 3, 4 (22–24…);им. п. мн. ч.;dwa listy, trzy koperty|5–21 (25–31…);род. п. мн. ч.;pięć listów, pięć kopert"},
{h:"dwa или dwie?"},
{ex:"dwa listy, dwa jabłka=два письма, два яблока (м. р., ср. р.)|dwie książki, dwie butelki=две книги, две бутылки (ж. р.)"},
{h:"Упаковки"},
{ex:"butelka wody=бутылка воды|puszka coli=банка колы|paczka kawy=пачка кофе|karton soku=пакет сока|słoik miodu=банка мёда|opakowanie jajek=упаковка яиц"}],
ex:`fill|Выберите форму|Trzy ___, proszę.|koperty;kopert;koperta|0|3 → им. п. мн. ч.: koperty.
fill|Выберите форму|Sześć ___.|koperty;kopert;kopertów|1|6 → род. п. мн. ч.: kopert.
fill|Выберите слово|___ butelki wody.|Dwa;Dwie;Dwoje|1|butelka (ж. р.) → dwie.
mcq|Как сказать «банка колы»?|puszka coli;butelka coli;paczka coli|0|puszka — жестяная банка.|puszka coli`},
{k:"vocab",ex:`match|Соедините|poczta=почта;paczka=посылка;list=письмо;koperta=конверт;znaczek=марка
mcq|Что значит «wypełnić formularz»?|заполнить бланк;подписать договор;отправить письмо|0|wypełnić — заполнить.|wypełnić formularz`}],
vocab:`# Почта
poczta|почта
paczka|посылка; пачка
list|письмо
koperta|конверт
znaczek|марка
formularz|бланк, форма
wysłać|отправить|Chcę wysłać paczkę.|Хочу отправить посылку.
odebrać|получить, забрать
# Упаковки
butelka|бутылка
puszka|жестяная банка
słoik|стеклянная банка
karton|коробка; пакет (сока)
opakowanie|упаковка
pudełko|коробочка
# Количество
dużo|много|Mam dużo pracy.|У меня много работы.
mało|мало
około|около
prezent|подарок`});

LX({n:17,title:"Jaka będzie pogoda?",ru:"Погода и месяцы",who:["maks","kasia"],
intro:"Кася и Макс планируют поездку в горы в следующие выходные. Они смотрят прогноз погоды и решают, что взять с собой.",
goals:["говорить о погоде","использовать будущее время: będę + инфинитив","называть месяцы и времена года","образовывать наречия: ciepły → ciepło"],
secs:[
{k:"scene",pl:"Prognoza pogody",ru:"Прогноз погоды",place:"Mieszkanie Maksa",desc:"Кася с ноутбуком, на экране карта Польши с тучками.",
lines:`kasia|Zobacz prognozę. W sobotę będzie słonecznie i ciepło.|Посмотри прогноз. В субботу будет солнечно и тепло.
maks|A w niedzielę?|А в воскресенье?
kasia|W niedzielę będzie padać deszcz i będzie wiać silny wiatr.|В воскресенье будет идти дождь и дуть сильный ветер.
maks|To w sobotę będziemy chodzić po górach, a w niedzielę będziemy odpoczywać.|Тогда в субботу будем ходить по горам, а в воскресенье — отдыхать.
kasia|Dobry plan. Ale w górach zawsze jest zimniej. Weź ciepłą kurtkę.|Хороший план. Но в горах всегда холоднее. Возьми тёплую куртку.
maks|W październiku? Przecież jest jesień, a nie zima!|В октябре? Ведь осень, а не зима!
kasia|W Tatrach w październiku czasem pada śnieg!|В Татрах в октябре иногда идёт снег!
maks|Dobrze, dobrze. Wezmę kurtkę i czapkę.|Хорошо, хорошо. Возьму куртку и шапку.`,
ex:`mcq|Какая погода будет в субботу?|słonecznie i ciepło;deszcz i wiatr;śnieg|0|W sobotę będzie słonecznie i ciepło.
mcq|Что будут делать в воскресенье?|odpoczywać;chodzić po górach;jechać do domu|0|W niedzielę będą odpoczywać.
listen|Послушайте и выберите перевод|Pada deszcz.|Идёт дождь.;Идёт снег.;Светит солнце.|0|padać — падать, идти (о дожде и снеге).`},
{k:"grammar",lab:"Будущее время",title:"Czas przyszły: będę + инфинитив",sub:"Будущее время несовершенного вида строится как в русском: «буду делать».",
body:[{h:"być в будущем времени"},
{tbl:"ja będę=я буду;my będziemy=мы будем|ty będziesz=ты будешь;wy będziecie=вы будете|on / ona będzie=он / она будет;oni / one będą=они будут"},
{ex:"Jutro będę pracować.=Завтра я буду работать.|Będziesz w domu?=Ты будешь дома?|Będzie zimno.=Будет холодно.|Będziemy odpoczywać.=Мы будем отдыхать."},
{note:"Есть второй вариант: <span class='pl'>będę</span> + форма прошедшего времени на -ł: <span class='pl'>będę pracował / pracowała</span>. Обе формы правильные, выбирайте ту, что проще."},
{trap:"<span class='pl'>Będę</span> + профессия или роль — творительный падеж, как и в настоящем: <span class='pl'>Będę lekarzem</span>."}],
ex:`fill|Выберите форму|Jutro ___ w domu.|będę;będzie;będą|0|ja → będę.
fill|Выберите форму|W sobotę ___ ciepło.|będzie;będę;będą|0|Безличное: będzie.
fill|Выберите форму|Co ___ robić w weekend?|będziesz;będziemy;będzie|0|ty → będziesz.
type|Напишите по-польски: «Мы будем отдыхать»|będziemy odpoczywać;będziemy odpoczywali|będziemy + инфинитив.`},
{k:"grammar",lab:"Погода и месяцы",title:"Pogoda, miesiące, pory roku",sub:"Наречия на -o, месяцы и времена года.",
body:[{t:"Прилагательное;Наречие (погода)|ciepły;ciepło (тепло)|zimny;zimno (холодно)|gorący;gorąco (жарко)|słoneczny;słonecznie (солнечно)|pochmurny;pochmurno (пасмурно)"},
{ex:"Pada deszcz.=Идёт дождь.|Pada śnieg.=Идёт снег.|Świeci słońce.=Светит солнце.|Wieje wiatr.=Дует ветер.|Jest mi zimno.=Мне холодно."},
{t:"Месяц;W którym miesiącu?|styczeń;w styczniu|luty;w lutym|marzec;w marcu|kwiecień;w kwietniu|maj;w maju|czerwiec;w czerwcu|lipiec;w lipcu|sierpień;w sierpniu|wrzesień;we wrześniu|październik;w październiku|listopad;w listopadzie|grudzień;w grudniu"},
{ex:"wiosna — wiosną=весна — весной|lato — latem=лето — летом|jesień — jesienią=осень — осенью|zima — zimą=зима — зимой"},
{trap:"Польские месяцы совсем не похожи на русские. <span class='pl'>Listopad</span> — это ноябрь, а не листопад-октябрь; <span class='pl'>lipiec</span> — июль.",lb:"Ловушка для русскоязычных"}],
ex:`mcq|Какой месяц «lipiec»?|июль;июнь;апрель|0|lipiec — июль, czerwiec — июнь.|lipiec
mcq|Какой месяц «listopad»?|ноябрь;октябрь;сентябрь|0|listopad — ноябрь. Октябрь — październik.|listopad
fill|Выберите форму|Jest bardzo ___.|zimny;zimno;zimna|1|Погода — наречие: zimno.
match|Соедините|wiosna=весна;lato=лето;jesień=осень;zima=зима;styczeń=январь`},
{k:"vocab",ex:`match|Соедините|deszcz=дождь;śnieg=снег;wiatr=ветер;słońce=солнце;chmura=туча
mcq|Что значит «prognoza pogody»?|прогноз погоды;плохая погода;прогулка|0|prognoza pogody — прогноз погоды.|prognoza pogody`}],
vocab:`# Погода
pogoda|погода|Jaka jest pogoda?|Какая погода?
słońce|солнце
deszcz|дождь
śnieg|снег
wiatr|ветер
chmura|туча, облако
burza|гроза
ciepło|тепло
zimno|холодно
gorąco|жарко
# Времена года
wiosna|весна
lato|лето
jesień|осень
zima|зима
# Одежда для погоды
kurtka|куртка
czapka|шапка
parasol|зонт
# Полезное
prognoza|прогноз
przecież|ведь, же`});

LX({n:18,title:"Co o tym myślisz?",ru:"Мнения и впечатления",who:["maks","kasia","tomek"],
intro:"После кино Макс, Кася и Томек спорят о фильме. Каждый говорит, что ему понравилось, а что нет.",
goals:["выражать мнение: moim zdaniem, myślę, że","различать lubić и podobać się","использовать дательный падеж местоимений: mi, ci, mu, jej","соглашаться и не соглашаться"],
secs:[
{k:"scene",pl:"Po filmie",ru:"После фильма",place:"Przed kinem",desc:"Вечер, у входа в кинотеатр. Друзья решают, понравился ли им фильм.",
lines:`tomek|No i jak? Podobał wam się film?|Ну как? Вам понравился фильм?
kasia|Mnie bardzo się podobał! Aktorzy grali świetnie.|Мне очень понравился! Актёры играли отлично.
maks|Moim zdaniem był za długi. Trzy godziny to dużo.|По-моему, он был слишком длинный. Три часа — это много.
tomek|Zgadzam się z Maksem. Ale muzyka była super.|Согласен с Максом. Но музыка была супер.
kasia|Nie zgadzam się. Myślę, że to najlepszy film roku!|Не согласна. Думаю, что это лучший фильм года!
maks|A tobie, Tomku, co się nie podobało?|А тебе, Томек, что не понравилось?
tomek|Koniec. Był smutny. Nie lubię smutnych filmów.|Конец. Он был грустный. Не люблю грустные фильмы.
kasia|Wy nic nie rozumiecie! Następnym razem ja wybieram film.|Вы ничего не понимаете! В следующий раз фильм выбираю я.`,
ex:`mcq|Что думает Макс о фильме?|był za długi;był najlepszy;był smutny|0|Maks: Moim zdaniem był za długi.
mcq|Что не понравилось Томеку?|koniec;muzyka;aktorzy|0|Tomkowi nie podobał się koniec.
listen|Послушайте и выберите перевод|Zgadzam się.|Я согласен.;Я не знаю.;Мне нравится.|0|zgadzać się — соглашаться.`},
{k:"grammar",lab:"lubić / podobać się",title:"Lubię czy podoba mi się?",sub:"Два способа сказать «нравится», и они не взаимозаменяемы.",
body:[{t:"Глагол;Когда;Пример|lubić + вин. п.;что-то знакомое, постоянная симпатия;Lubię jazz. Lubię Kasię.|podobać się + кому;первое впечатление, внешний вид;Podoba mi się ta kurtka. Podobał mi się film."},
"С <span class='pl'>podobać się</span> то, что нравится, — подлежащее, а человек — в дательном падеже, как в русском «мне нравится»:",
{ex:"Podoba mi się Wrocław.=Мне нравится Вроцлав.|Podobają ci się te buty?=Тебе нравятся эти ботинки?|Film bardzo mu się podobał.=Фильм ему очень понравился."},
{trap:"Сказать о человеке <span class='pl'>podobasz mi się</span> — значит «ты мне нравишься» в романтическом смысле. О друге или коллеге говорят <span class='pl'>lubię cię</span>.",lb:"Ловушка"}],
ex:`fill|Выберите глагол|___ mi się twoja kurtka.|Podoba;Lubię;Lubi|0|Впечатление: podoba mi się.
fill|Выберите глагол|Bardzo ___ pierogi.|lubię;podoba mi się;podobam|0|Постоянная симпатия к еде: lubię.
fill|Выберите форму|Podobają ci się te ___?|buty;but;butów|0|Podobają (мн. ч.) → te buty.
mcq|Как сказать «Мне понравился фильм»?|Podobał mi się film.;Lubiłem film.;Film mnie podobał.|0|podobać się + mi, прошедшее время: podobał się.|Podobał mi się film.`},
{k:"grammar",lab:"Mi, ci, mu, jej",title:"Komu? Дательный падеж местоимений",sub:"Короткие формы mi, ci, mu — обычные, длинные mnie, tobie, jemu — для акцента и после предлогов.",
body:[{t:"Местоимение;Кому? (краткая);Кому? (полная)|ja;mi;mnie|ty;ci;tobie|on;mu;jemu|ona;jej;jej|my;nam;nam|wy;wam;wam|oni / one;im;im"},
{ex:"Daj mi kawę.=Дай мне кофе.|Mnie się podobał, a tobie?=Мне понравился, а тебе?|Dziękuję ci.=Спасибо тебе.|Jest im zimno.=Им холодно."},
{h:"Мнение"},
{ex:"Moim zdaniem…=По-моему…|Myślę, że…=Думаю, что…|Zgadzam się (z tobą).=Я согласен (с тобой).|Nie zgadzam się.=Я не согласен.|Masz rację.=Ты прав.|Nie wiem, co o tym myśleć.=Не знаю, что об этом думать."}],
ex:`fill|Выберите форму|Podoba ___ się ten film. (мне)|mi;mnie;ja|0|Краткая форма без акцента: mi.
fill|Выберите форму|A ___? Podobało ci się? (тебе — с акцентом)|tobie;ci;ty|0|С акцентом в начале: tobie.
fill|Выберите форму|Daję ___ prezent. (ему)|mu;go;on|0|Кому? → mu.
build|Соберите: «Я думаю, что ты прав»|Myślę, że masz rację.|jesteś prawo|mieć rację — быть правым.`},
{k:"vocab",ex:`match|Соедините|aktor=актёр;film=фильм;muzyka=музыка;koniec=конец;zdanie=мнение
mcq|Что значит «Masz rację»?|Ты прав.;У тебя есть причина.;Ты рад.|0|mieć rację — быть правым.|Masz rację.`}],
vocab:`# Мнение
zdanie|мнение; предложение|Moim zdaniem to dobry film.|По-моему, это хороший фильм.
myśleć|думать
zgadzać się|соглашаться|Zgadzam się z tobą.|Я с тобой согласен.
mieć rację|быть правым
podobać się|нравиться|Podoba mi się Wrocław.|Мне нравится Вроцлав.
# Кино
film|фильм
aktor|актёр
aktorka|актриса
kino|кинотеатр
bilet|билет
koniec|конец
# Оценки
świetny|отличный
nudny|скучный
ciekawy|интересный
długi|длинный
krótki|короткий
smutny|грустный
najlepszy|лучший`});
