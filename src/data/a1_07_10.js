/* A1 · lessons 7–10 */
LX({n:7,title:"Co lubisz robić?",ru:"Хобби и свободное время",who:["maks","kasia","diego"],
intro:"Кася, Диего и Макс сидят на набережной Одры и обсуждают, кто чем занимается в свободное время.",
goals:["рассказывать о хобби и спорте","знать все три типа спряжения","использовать lubić + инфинитив","говорить grać w и grać na","использовать mój, twój, jego, jej"],
secs:[
{k:"scene",pl:"Nad Odrą",ru:"На берегу Одры",place:"Bulwar nad Odrą",desc:"Тёплый вечер, на набережной много людей с велосипедами.",
lines:`diego|Co lubicie robić w wolnym czasie?|Что вы любите делать в свободное время?
kasia|Ja lubię czytać i jeździć na rowerze. Mój rower jest stary, ale szybki.|Я люблю читать и кататься на велосипеде. Мой велосипед старый, но быстрый.
maks|A ja gram na gitarze. I czasem gram w piłkę z kolegami z pracy.|А я играю на гитаре. И иногда играю в футбол с коллегами.
diego|Naprawdę? Ja też gram w piłkę! Ale dużo piszę i rysuję.|Правда? Я тоже играю в футбол! Но много пишу и рисую.
kasia|Co piszesz?|Что ты пишешь?
diego|Piszę bloga o Polsce. Po hiszpańsku, oczywiście.|Пишу блог о Польше. По-испански, конечно.
maks|A twoja siostra? Ona też pisze?|А твоя сестра? Она тоже пишет?
diego|Nie, jej hobby to taniec. Tańczy flamenco.|Нет, её хобби — танцы. Она танцует фламенко.
kasia|Super! Pracujemy, uczymy się… ale mamy też czas dla siebie!|Супер! Работаем, учимся… но и время для себя у нас есть!`,
ex:`mcq|На чём играет Макс?|na gitarze;na pianinie;w tenisa|0|Maks gra na gitarze.
mcq|О чём блог Диего?|o Hiszpanii;o Polsce;o tańcu|1|Diego pisze bloga o Polsce.
listen|Послушайте и выберите перевод|Co lubisz robić w wolnym czasie?|Что ты любишь делать в свободное время?;Что ты делаешь на работе?;Когда у тебя есть время?|0|wolny czas — свободное время.`},
{k:"grammar",lab:"Три спряжения",title:"Три типа спряжения",sub:"Почти каждый польский глагол относится к одной из трёх групп. Смотрите на форму «ja» и «ty».",
body:[{t:"Тип;ja;ty;on / ona;my;wy;oni|I -m, -sz (czytać);czytam;czytasz;czyta;czytamy;czytacie;czytają|II -ę, -isz (robić);robię;robisz;robi;robimy;robicie;robią|III -ę, -esz (pisać);piszę;piszesz;pisze;piszemy;piszecie;piszą"},
{h:"Глаголы на -ować: -uję, -ujesz"},
"Большая подгруппа третьего типа: <span class='pl'>-ować</span> превращается в <span class='pl'>-uj-</span>.",
{tbl:"ja pracuję=я работаю;my pracujemy=мы работаем|ty pracujesz=ты работаешь;wy pracujecie=вы работаете|on / ona pracuje=он / она работает;oni / one pracują=они работают"},
{ex:"Tańczę salsę.=Я танцую сальсу.|Gotujesz?=Ты готовишь?|Rysujemy.=Мы рисуем."},
{trap:"В третьем типе часто меняется согласный: <span class='pl'>pisać → piszę</span>, <span class='pl'>skakać → skaczę</span>. Форму «ja» лучше запоминать вместе с инфинитивом."}],
ex:`fill|Выберите форму|Diego ___ bloga.|pisze;pisa;piszę|0|pisać → on pisze.
fill|Выберите форму|Gdzie ty ___?|pracujesz;pracowasz;pracuje|0|pracować → ty pracujesz.
fill|Выберите форму|My dużo ___.|czytamy;czytymy;czytają|0|czytać (тип I) → my czytamy.
fill|Выберите форму|Oni ___ obiad.|gotują;gotowają;gotuje|0|gotować → oni gotują.
type|Напишите по-польски: «Я работаю в офисе»|pracuję w biurze|pracować → pracuję, w biurze — в офисе.`},
{k:"grammar",lab:"lubić, grać, mój",title:"Lubię…, gram w…, mój i twój",sub:"Как говорить о том, что любишь, и о своих вещах.",
body:[{h:"lubić + инфинитив"},
{ex:"Lubię czytać.=Я люблю читать.|Nie lubię gotować.=Я не люблю готовить.|Lubisz tańczyć?=Ты любишь танцевать?"},
{h:"grać w — спорт и игры, grać na — инструменты"},
{t:"grać w + вин. п.;grać na + предл. п.|w piłkę (в футбол);na gitarze (на гитаре)|w tenisa (в теннис);na pianinie (на пианино)|w szachy (в шахматы);na skrzypcach (на скрипке)"},
{h:"Притяжательные: мой, твой, его, её"},
{t:"Чей?;м. р.;ж. р.;ср. р.|мой;mój rower;moja siostra;moje hobby|твой;twój rower;twoja siostra;twoje hobby|его;jego rower;jego siostra;jego hobby|её;jej rower;jej siostra;jej hobby"},
{trap:"<span class='pl'>jego</span> и <span class='pl'>jej</span> никогда не меняются, как и русские «его», «её». А <span class='pl'>mój / twój</span> меняются по роду."}],
ex:`fill|Выберите слово|Gram ___ tenisa.|w;na;z|0|Спорт: grać w.
fill|Выберите слово|Kasia gra ___ pianinie.|w;na;o|1|Инструмент: grać na.
fill|Выберите слово|To jest ___ siostra.|mój;moja;moje|1|siostra (ж. р.) → moja.
mcq|Как сказать «Её хобби — танцы»?|Jej hobby to taniec.;Jego hobby to taniec.;Moja hobby to taniec.|0|jej — её.|Jej hobby to taniec.`},
{k:"vocab",ex:`match|Соедините|czytać=читать;pisać=писать;tańczyć=танцевать;gotować=готовить;rysować=рисовать
mcq|Как сказать «кататься на велосипеде»?|jeździć na rowerze;grać na rowerze;iść rowerem|0|jeździć na rowerze — дословно «ездить на велосипеде».|jeździć na rowerze`}],
vocab:`# Хобби
czytać|читать|Lubię czytać.|Я люблю читать.
pisać|писать
tańczyć|танцевать
gotować|готовить (еду)
rysować|рисовать
śpiewać|петь
grać|играть|Gram w piłkę.|Я играю в футбол.
jeździć na rowerze|кататься на велосипеде
pływać|плавать
# Спорт и музыка
piłka|мяч; футбол (разг.)
tenis|теннис
szachy|шахматы
gitara|гитара
taniec|танец, танцы
# Полезное
wolny czas|свободное время
hobby|хобби|Moje hobby to fotografia.|Моё хобби — фотография.
czasem|иногда
oczywiście|конечно`});

LX({n:8,title:"W sklepie",ru:"Покупки и цены",who:["maks"],
intro:"Вечером Макс заходит в маленький магазин у дома. Ему нужны хлеб, молоко и кофе, а ещё он хочет понять польские цены.",
goals:["делать покупки и спрашивать цену","использовать винительный падеж ед. числа","спрягать chcieć","говорить poproszę","считать до 1000 и называть цены в злотых"],
secs:[
{k:"scene",pl:"W sklepie osiedlowym",ru:"В магазине у дома",place:"Sklep na rogu ulicy",desc:"Небольшой магазин, у кассы стоит продавец.",
lines:`sprz|Dzień dobry! Słucham pana?|Добрый день! Что для Вас?
maks|Dzień dobry. Poproszę chleb i mleko.|Добрый день. Мне хлеб и молоко, пожалуйста.
sprz|Jaki chleb? Biały czy razowy?|Какой хлеб? Белый или ржаной?
maks|Razowy. I jeszcze chcę kawę. Ile kosztuje ta kawa?|Ржаной. И ещё хочу кофе. Сколько стоит этот кофе?
sprz|Dwadzieścia pięć złotych.|Двадцать пять злотых.
maks|Dobrze, biorę. I poproszę jeszcze zimną wodę.|Хорошо, беру. И ещё холодную воду, пожалуйста.
sprz|Coś jeszcze?|Что-нибудь ещё?
maks|Nie, dziękuję. To wszystko. Ile płacę?|Нет, спасибо. Это всё. Сколько с меня?
sprz|Trzydzieści osiem złotych pięćdziesiąt groszy. Kartą czy gotówką?|Тридцать восемь злотых пятьдесят грошей. Картой или наличными?
maks|Kartą, poproszę.|Картой, пожалуйста.`,
ex:`mcq|Какой хлеб покупает Макс?|biały;razowy;bułki|1|Maks kupuje chleb razowy.
mcq|Сколько стоит кофе?|25 zł;38 zł;15 zł|0|Kawa kosztuje dwadzieścia pięć złotych.
mcq|Как вежливо попросить в магазине?|Poproszę chleb.;Daj chleb.;Chleb jest.|0|Poproszę… — самая вежливая и естественная форма просьбы в магазине.|Poproszę chleb.
listen|Послушайте и выберите перевод|Kartą czy gotówką?|Картой или наличными?;Карта или чек?;Пакет нужен?|0|kartą / gotówką — творительный падеж: «картой», «наличными».`},
{k:"grammar",lab:"Винительный падеж",title:"Biernik: kogo? co?",sub:"Винительный падеж нужен после большинства глаголов: mam, chcę, lubię, kupuję, poproszę…",
body:[{t:"Род;Им. п.;Вин. п.;Правило|ж. р.;kawa, zimna woda;kawę, zimną wodę;-a → -ę, прилагательное -ą|м. р. неодуш.;chleb, sok;chleb, sok;не меняется|м. р. одуш.;brat, pies, nowy kolega;brata, psa, nowego kolegę;-a, прилагательное -ego|ср. р.;mleko, masło;mleko, masło;не меняется"},
{ex:"Poproszę kawę.=Кофе, пожалуйста.|Mam brata.=У меня есть брат.|Lubię zimną wodę.=Я люблю холодную воду.|Kupuję chleb.=Я покупаю хлеб."},
{note:"Это очень похоже на русский: «вижу маму, вижу брата, вижу стол». Главное отличие — окончание <b>-ę</b> вместо русского «-у»."},
{trap:"<span class='pl'>kawa</span> (кофе) по-польски женского рода, поэтому <span class='pl'>poproszę kawę</span>, <span class='pl'>dobra kawa</span>."}],
ex:`fill|Выберите форму|Poproszę ___.|herbata;herbatę;herbatą|1|herbata → herbatę.
fill|Выберите форму|Mam ___.|kot;kota;kotem|1|kot — одушевлённый: kota.
fill|Выберите форму|Kupuję ___.|sok;soka;sokę|0|sok — неодушевлённый: не меняется.
fill|Выберите форму|Chcę ___ wodę.|zimna;zimną;zimnej|1|Прилагательное ж. р. в вин. п.: -ą.
type|Напишите по-польски: «Пожалуйста, молоко»|poproszę mleko|mleko (ср. р.) не меняется.`},
{k:"grammar",lab:"chcieć и цены",title:"Chcę… Ile kosztuje?",sub:"Неправильный глагол chcieć и числа для цен.",
body:[{h:"chcieć — хотеть"},
{tbl:"ja chcę=я хочу;my chcemy=мы хотим|ty chcesz=ты хочешь;wy chcecie=вы хотите|on / ona chce=он / она хочет;oni / one chcą=они хотят"},
{h:"Сотни и тысяча"},
{t:"Число;По-польски|100;sto|200;dwieście|300;trzysta|400;czterysta|500;pięćset|600;sześćset|700;siedemset|800;osiemset|900;dziewięćset|1000;tysiąc"},
{h:"Злотые и гроши"},
{t:"Число;Форма|1;złoty, grosz|2, 3, 4;złote, grosze|5 и больше;złotych, groszy"},
{ex:"Ile kosztuje?=Сколько стоит?|Ile kosztują?=Сколько стоят?|To kosztuje dwa złote.=Это стоит два злотых."},
{trap:"Цены часто говорят коротко: <span class='pl'>12,50</span> = <span class='pl'>dwanaście pięćdziesiąt</span>, без слов «złotych» и «groszy»."}],
ex:`fill|Выберите форму|Co ___ na obiad?|chcesz;chcisz;chce|0|chcieć → ty chcesz.
fill|Выберите форму|To kosztuje pięć ___.|złoty;złote;złotych|2|5 и больше → złotych.
listen|Какое число вы слышите?|trzysta|300;30;13|0|trzysta = 300.
mcq|Как будет «200»?|dwieście;dwadzieścia;dwiesta|0|200 = dwieście.|dwieście`},
{k:"vocab",ex:`match|Соедините|chleb=хлеб;mleko=молоко;masło=масло;ser=сыр;woda=вода
mcq|Что значит «Ile płacę?»|Сколько с меня?;Сколько стоит?;Где касса?|0|płacić — платить. Ile płacę? — дословно «сколько я плачу?».|Ile płacę?`}],
vocab:`# Продукты
chleb|хлеб
bułka|булочка
mleko|молоко
masło|сливочное масло
ser|сыр
jajko|яйцо
kawa|кофе|Poproszę kawę.|Кофе, пожалуйста.
herbata|чай
woda|вода
sok|сок
# Покупки
sklep|магазин
kupować|покупать|Kupuję chleb.|Я покупаю хлеб.
chcieć|хотеть
kosztować|стоить|Ile kosztuje?|Сколько стоит?
płacić|платить
karta|карта
gotówka|наличные
złoty|злотый
tani|дешёвый
drogi|дорогой`});

LX({n:9,title:"Smacznego!",ru:"Завтрак, обед, ужин",who:["maks","kasia","babcia"],
intro:"В воскресенье Кася приглашает Макса на завтрак. Приехала её бабушка Галина из Гданьска и привезла домашнюю еду.",
goals:["говорить о еде и приёмах пищи","спрягать jeść и pić","говорить «с чем»: z + творительный падеж","использовать вежливые фразы за столом"],
secs:[
{k:"scene",pl:"Niedzielne śniadanie",ru:"Воскресный завтрак",place:"Mieszkanie Kasi",desc:"Стол накрыт, пахнет кофе и свежим хлебом.",
lines:`kasia|Babciu, to jest Maks, mój sąsiad.|Бабушка, это Макс, мой сосед.
babcia|Dzień dobry, panie Maksie! Proszę, niech pan siada. Je pan jajecznicę?|Здравствуйте, пан Макс! Пожалуйста, садитесь. Будете яичницу?
maks|Bardzo chętnie! Dziękuję.|С удовольствием! Спасибо.
kasia|Co pijesz? Kawę czy herbatę?|Что будешь пить? Кофе или чай?
maks|Herbatę z cytryną, poproszę.|Чай с лимоном, пожалуйста.
babcia|A kanapkę z serem? Albo z szynką i pomidorem?|А бутерброд с сыром? Или с ветчиной и помидором?
maks|Z serem, poproszę. Wszystko wygląda pysznie!|С сыром, пожалуйста. Всё выглядит очень вкусно!
babcia|To smacznego!|Тогда приятного аппетита!
maks|Dziękuję, nawzajem!|Спасибо, взаимно!
kasia|Babcia zawsze robi za dużo jedzenia. Na obiad też zostaniesz?|Бабушка всегда готовит слишком много еды. На обед тоже останешься?`,
ex:`mcq|Что пьёт Макс?|kawę z mlekiem;herbatę z cytryną;sok|1|Maks pije herbatę z cytryną.
mcq|Что отвечают на «Smacznego!»?|Dziękuję, nawzajem!;Na zdrowie!;Do widzenia!|0|Smacznego! — приятного аппетита. Отвечают: Dziękuję, nawzajem! (спасибо, взаимно).|Dziękuję, nawzajem!
listen|Послушайте и выберите перевод|Wszystko wygląda pysznie!|Всё выглядит очень вкусно!;Всё очень дорого!;Всё уже готово!|0|pyszny — очень вкусный.`},
{k:"grammar",lab:"jeść, pić",title:"Jeść i pić",sub:"Два неправильных глагола, без которых не обойтись за столом.",
body:[{h:"jeść — есть"},
{tbl:"ja jem=я ем;my jemy=мы едим|ty jesz=ты ешь;wy jecie=вы едите|on / ona je=он / она ест;oni / one jedzą=они едят"},
{h:"pić — пить"},
{tbl:"ja piję=я пью;my pijemy=мы пьём|ty pijesz=ты пьёшь;wy pijecie=вы пьёте|on / ona pije=он / она пьёт;oni / one piją=они пьют"},
{h:"Приёмы пищи"},
{ex:"śniadanie=завтрак|obiad=обед (основная горячая еда, часто в 14–16 часов)|kolacja=ужин|Co jesz na śniadanie?=Что ты ешь на завтрак?"},
{trap:"В Польше <span class='pl'>obiad</span> — главная еда дня, её едят днём, часто после работы. А <span class='pl'>kolacja</span> — лёгкий ужин."}],
ex:`fill|Выберите форму|Co ty ___ na śniadanie?|jesz;jem;je|0|jeść → ty jesz.
fill|Выберите форму|Oni ___ obiad o piętnastej.|jedzą;jeją;jedą|0|jeść → oni jedzą.
fill|Выберите форму|Ja ___ kawę bez cukru.|piję;pije;piję się|0|pić → ja piję.
mcq|Что такое «kolacja»?|ужин;завтрак;обед|0|kolacja — ужин.|kolacja`},
{k:"grammar",lab:"z + творительный",title:"Z czym? С чем?",sub:"Предлог z (с) требует творительного падежа, как в русском.",
body:[{t:"Род;Окончание;Пример|м. р. / ср. р.;-em;z serem, z mlekiem, z masłem|ж. р.;-ą;z cytryną, z szynką|мн. ч.;-ami;z pomidorami, z jajkami"},
{ex:"kanapka z serem=бутерброд с сыром|herbata z cytryną=чай с лимоном|kawa z mlekiem=кофе с молоком|makaron z warzywami=макароны с овощами"},
{note:"Перед сложными сочетаниями согласных z превращается в <span class='pl'>ze</span>: <span class='pl'>ze mną</span> (со мной), <span class='pl'>ze szpinakiem</span> (со шпинатом)."},
{trap:"«Без» — <span class='pl'>bez</span> + родительный: <span class='pl'>kawa bez cukru</span> (кофе без сахара). Мы вернёмся к нему в уроке 11."}],
ex:`fill|Выберите форму|Kanapka z ___.|ser;serem;sera|1|z + творительный: serem.
fill|Выберите форму|Herbata z ___.|cytryną;cytryna;cytrynę|0|cytryna (ж. р.) → z cytryną.
fill|Выберите форму|Makaron z ___.|warzywa;warzywami;warzywem|1|Множественное число: -ami.
type|Напишите по-польски: «кофе с молоком»|kawa z mlekiem|mleko → z mlekiem.`},
{k:"vocab",ex:`match|Соедините|śniadanie=завтрак;obiad=обед;kolacja=ужин;zupa=суп;mięso=мясо
mcq|Что значит «Bardzo chętnie!»?|С удовольствием!;Очень вкусно!;Очень голоден!|0|chętnie — охотно, с удовольствием.|Bardzo chętnie!`}],
vocab:`# Еда
śniadanie|завтрак
obiad|обед
kolacja|ужин
kanapka|бутерброд|Kanapka z serem.|Бутерброд с сыром.
jajecznica|яичница
zupa|суп
mięso|мясо
ryba|рыба
szynka|ветчина
makaron|макароны
cukier|сахар
cytryna|лимон
# Глаголы и фразы
jeść|есть (кушать)|Co jesz?|Что ты ешь?
pić|пить
Smacznego!|Приятного аппетита!
Nawzajem!|Взаимно!
pyszny|очень вкусный
chętnie|охотно, с удовольствием
głodny|голодный`});

LX({n:10,title:"Na targu",ru:"Овощи, фрукты, рынок",who:["maks","natalia"],
intro:"Наталья ведёт Макса в Хала Таргова, крытый рынок в центре Вроцлава. Там дешевле и вкуснее, чем в супермаркете.",
goals:["покупать овощи и фрукты на рынке","образовывать множественное число существительных","использовать множественное число в винительном падеже","говорить kilo, pół kilo, dziesięć deko"],
secs:[
{k:"scene",pl:"W Hali Targowej",ru:"В Хале Тарговой",place:"Hala Targowa, Wrocław",desc:"Ряды с овощами, фруктами, мёдом и цветами.",
lines:`natalia|Zobacz, jakie piękne truskawki! I pomidory są tu bardzo dobre.|Смотри, какая красивая клубника! И помидоры здесь очень хорошие.
maks|Dzień dobry. Ile kosztują te pomidory?|Добрый день. Сколько стоят эти помидоры?
sprzf|Dwanaście złotych za kilo.|Двенадцать злотых за кило.
maks|Poproszę kilo pomidorów i pół kilo ogórków.|Мне кило помидоров и полкило огурцов, пожалуйста.
sprzf|Proszę bardzo. Coś jeszcze? Mam świeże jabłka i gruszki.|Пожалуйста. Что-нибудь ещё? Есть свежие яблоки и груши.
natalia|Jabłka są słodkie czy kwaśne?|Яблоки сладкие или кислые?
sprzf|Słodkie, polskie. Proszę spróbować!|Сладкие, польские. Попробуйте!
maks|Mmm, pyszne. To poproszę dwa kilo jabłek i jeszcze ziemniaki.|Ммм, очень вкусно. Тогда два кило яблок и ещё картошку.
sprzf|Razem trzydzieści cztery złote.|Всего тридцать четыре злотых.`,
ex:`mcq|Сколько стоят помидоры?|12 zł za kilo;34 zł;2 zł za sztukę|0|Pomidory kosztują dwanaście złotych za kilo.
mcq|Какие яблоки?|słodkie;kwaśne;drogie|0|Jabłka są słodkie, polskie.
listen|Послушайте и выберите перевод|Ile kosztują te pomidory?|Сколько стоят эти помидоры?;Где эти помидоры?;Это польские помидоры?|0|kosztują — множественное число: «стоят».`},
{k:"grammar",lab:"Множественное число",title:"Liczba mnoga: множественное число",sub:"Для вещей, животных и женщин окончаний всего три: -y, -i, -e, а в среднем роде -a.",
body:[{t:"Тип;Окончание;Примеры|твёрдый согласный / -a;-y;pomidor → pomidory, banan → banany, kawa → kawy|после k, g;-i;ogórek → ogórki, truskawka → truskawki, noga → nogi|мягкий согласный, c, cz, sz, rz, ż, -ia;-e;owoc → owoce, klucz → klucze, kuchnia → kuchnie|средний род -o, -e;-a;jabłko → jabłka, jajko → jajka, mieszkanie → mieszkania"},
{ex:"Te pomidory są czerwone.=Эти помидоры красные.|Lubię truskawki.=Я люблю клубнику.|Jabłka są słodkie.=Яблоки сладкие."},
{note:"Прилагательные во множественном числе (для таких слов) оканчиваются на <b>-e</b>: <span class='pl'>czerwone pomidory, słodkie jabłka, nowe mieszkania</span>. Указательное: <span class='pl'>te</span> (эти)."},
{trap:"В винительном падеже множественного числа эти слова не меняются: <span class='pl'>kupuję pomidory, jabłka, ogórki</span>. Мужчин и людей в мужском роде мы разберём на уровне A2."}],
ex:`fill|Выберите форму|Te ___ są słodkie.|truskawki;truskawky;truskawka|0|После k → -i.
fill|Выберите форму|Kupuję ___.|pomidory;pomidori;pomidorów|0|pomidor → pomidory.
fill|Выберите форму|Te ___ są świeże.|jabłka;jabłki;jabłko|0|Средний род: -o → -a.
fill|Выберите форму|To są polskie ___.|owocy;owoce;owoca|1|owoc (c) → owoce.
mcq|Как будет «новые квартиры»?|nowe mieszkania;nowy mieszkania;nowa mieszkanie|0|Прилагательное -e, существительное -a.|nowe mieszkania`},
{k:"grammar",lab:"Сколько?",title:"Kilo, pół kilo, deko",sub:"На рынке вес называют особыми словами, а после них идёт родительный падеж.",
body:[{t:"Мера;Значение;Пример|kilo (kilogram);1 кг;kilo jabłek|pół kilo;0,5 кг;pół kilo ogórków|deko (dekagram);10 г;dwadzieścia deko sera|sztuka;штука;trzy sztuki, pięć sztuk"},
"После мер нужен родительный падеж множественного числа. Пока запомните готовые формы, правило будет в уроке 16:",
{ex:"kilo pomidorów=кило помидоров|pół kilo ogórków=полкило огурцов|kilo ziemniaków=кило картошки|dwa kilo jabłek=два кило яблок|kilo truskawek=кило клубники"},
{trap:"<span class='pl'>deko</span> — это 10 граммов. <span class='pl'>Dwadzieścia deko sera</span> = 200 граммов сыра. Так говорят в магазинах по всей Польше."}],
ex:`mcq|Сколько это: «pół kilo»?|500 г;50 г;5 кг|0|pół — половина.|pół kilo
mcq|Сколько это: «dziesięć deko»?|100 г;10 г;1 кг|0|1 deko = 10 г, значит 10 deko = 100 г.|dziesięć deko
build|Соберите: «Мне кило помидоров, пожалуйста»|Poproszę kilo pomidorów.|pomidory jest|После kilo — pomidorów.`},
{k:"vocab",ex:`match|Соедините|jabłko=яблоко;gruszka=груша;truskawka=клубника;ziemniak=картофель;ogórek=огурец
mcq|Противоположность «słodki»?|kwaśny;świeży;tani|0|słodki — сладкий, kwaśny — кислый.|kwaśny
listen|Что вы слышите?|marchewka|marchewka;malina|0|marchewka — морковь, malina — малина.`}],
vocab:`# Овощи
pomidor|помидор
ogórek|огурец
ziemniak|картофель
marchewka|морковь
cebula|лук
kapusta|капуста
papryka|перец (овощ)
# Фрукты
jabłko|яблоко
gruszka|груша
truskawka|клубника
malina|малина
banan|банан
śliwka|слива
# Рынок
targ|рынок
kilo|килограмм|Poproszę kilo jabłek.|Кило яблок, пожалуйста.
pół|половина
świeży|свежий
słodki|сладкий
kwaśny|кислый
razem|вместе; итого`});
