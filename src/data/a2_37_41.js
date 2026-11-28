/* A2 · lessons 37–41 */
LX({n:37,title:"W górach",ru:"Горы и походы",who:["maks","tomek"],
intro:"Томек наконец уговорил Макса пойти в Татры. Тропа становится всё круче, Макс идёт всё медленнее, а Томек — всё быстрее.",
goals:["сравнивать наречия: szybciej, najszybciej","использовать coraz + сравнительная степень","говорить о горах и походах","понимать предупреждения в горах"],
secs:[
{k:"scene",pl:"Szlak na Rysy",ru:"Тропа на Рысы",place:"Tatry, szlak nad Morskim Okiem",desc:"Шесть утра, озеро Морское Око в тумане. Впереди крутой подъём.",
lines:`tomek|Idź szybciej, Maks! Musimy wejść na szczyt przed południem.|Иди быстрее, Макс! Нам надо подняться на вершину до полудня.
maks|Idę najszybciej, jak mogę! Jest coraz bardziej stromo.|Я иду так быстро, как могу! Становится всё круче.
tomek|Na górze będzie lepiej. Widok jest najpiękniejszy w całych Tatrach.|Наверху будет лучше. Вид самый красивый во всех Татрах.
maks|Mam nadzieję… Oddycham coraz ciężej.|Надеюсь… Мне дышится всё тяжелее.
tomek|Pij więcej wody i idź wolniej, ale równo.|Пей больше воды и иди медленнее, но ровно.
maks|Tomek, patrz, chmury! Robi się ciemniej.|Томек, смотри, тучи! Становится темнее.
tomek|Hmm. W górach pogoda zmienia się szybko. Lepiej zawróćmy.|Хм. В горах погода меняется быстро. Лучше повернём назад.
maks|Najlepsza decyzja dzisiaj! Wrócimy tu w lepszą pogodę.|Лучшее решение сегодня! Вернёмся сюда в лучшую погоду.`,
ex:`mcq|Почему они повернули назад?|zrobiło się ciemniej, nadchodzą chmury;Maks był zmęczony;zgubili szlak|0|W górach pogoda zmienia się szybko.
mcq|Что советует Томек?|pić więcej wody i iść wolniej;biec;zjeść coś|0|Pij więcej wody i idź wolniej.
listen|Послушайте и выберите перевод|Jest coraz bardziej stromo.|Становится всё круче.;Очень круто!;Здесь не круто.|0|coraz + сравнительная — всё более.`},
{k:"grammar",lab:"Наречия: сравнение",title:"Szybko, szybciej, najszybciej",sub:"Наречия сравниваются как прилагательные: -ej и naj-.",
body:[{t:"Наречие;Сравнительная;Превосходная|szybko (быстро);szybciej;najszybciej|wolno (медленно);wolniej;najwolniej|łatwo (легко);łatwiej;najłatwiej|ciepło (тепло);cieplej;najcieplej|często (часто);częściej;najczęściej|dobrze (хорошо);lepiej;najlepiej|źle (плохо);gorzej;najgorzej|dużo (много);więcej;najwięcej|mało (мало);mniej;najmniej"},
{ex:"Mówisz coraz lepiej po polsku.=Ты говоришь всё лучше по-польски.|Kto biega najszybciej?=Кто бегает быстрее всех?|Dzisiaj jest cieplej niż wczoraj.=Сегодня теплее, чем вчера.|Im wyżej, tym zimniej.=Чем выше, тем холоднее."},
{h:"coraz — всё более"},
{ex:"coraz lepiej=всё лучше|coraz więcej turystów=всё больше туристов|coraz trudniej=всё труднее"},
{trap:"<span class='pl'>lepszy</span> — прилагательное (лучший), <span class='pl'>lepiej</span> — наречие (лучше). <span class='pl'>To lepszy pomysł</span>, но <span class='pl'>Czuję się lepiej</span>.",lb:"Ловушка"}],
ex:`fill|Выберите форму|Idź ___! (быстрее)|szybciej;szybszy;najszybszy|0|Наречие: szybciej.
fill|Выберите форму|Mówisz coraz ___ po polsku.|lepiej;lepszy;dobrzej|0|dobrze → lepiej.
fill|Выберите форму|Dzisiaj jest ___ niż wczoraj. (теплее)|cieplej;cieplejszy;ciepło|0|Погода — наречие: cieplej.
mcq|Как сказать «чем раньше, тем лучше»?|Im wcześniej, tym lepiej.;Coraz wcześniej, coraz lepiej.;Wcześniej, lepszy.|0|im… tym… — чем… тем…|Im wcześniej, tym lepiej.`},
{k:"grammar",lab:"Горы",title:"W górach: слова и безопасность",sub:"Горы в Польше — Татры, Карконоше, Бещады. Вот что пригодится в походе.",
body:[{ex:"szlak=тропа (маркированная)|szczyt=вершина|schronisko=горный приют|dolina=долина|zbocze=склон|wchodzić na szczyt=подниматься на вершину|schodzić=спускаться|zawrócić=повернуть назад|stromo=круто"},
{trap:"Номер горной спасательной службы: <span class='pl'>985</span> или <span class='pl'>601 100 300</span> (GOPR, TOPR в Татрах). Сокращение <span class='pl'>TOPR</span> вы увидите на всех табличках.",lb:"Важно"},
{ex:"Uwaga, ślisko!=Осторожно, скользко!|Zakaz wstępu.=Вход запрещён.|Nie schodź ze szlaku.=Не сходи с тропы.|Do schroniska: 2 godziny.=До приюта: 2 часа."}],
ex:`match|Соедините|szlak=тропа;szczyt=вершина;schronisko=горный приют;dolina=долина;ślisko=скользко
mcq|Что значит «zawrócić»?|повернуть назад;завернуть за угол;вернуть вещь|0|zawrócić — развернуться, повернуть обратно.|zawrócić`},
{k:"vocab",ex:`match|Соедините|plecak=рюкзак;mapa=карта;latarka=фонарик;buty górskie=горные ботинки;woda=вода
mcq|Что значит «Mam nadzieję»?|Надеюсь.;У меня есть надежда на тебя.;Я надежда.|0|mieć nadzieję — надеяться.|Mam nadzieję.`}],
vocab:`# Горы
góry|горы
szczyt|вершина
szlak|тропа|Nie schodź ze szlaku.|Не сходи с тропы.
schronisko|горный приют
dolina|долина
jezioro|озеро
wędrówka|поход
turysta|турист
plecak|рюкзак
mapa|карта
# Наречия
szybciej|быстрее
wolniej|медленнее
lepiej|лучше
gorzej|хуже
więcej|больше
mniej|меньше
coraz|всё (более)|Coraz lepiej mówię.|Я говорю всё лучше.
stromo|круто
mieć nadzieję|надеяться`});

LX({n:38,title:"Polacy i cudzoziemcy",ru:"Национальности",who:["maks","diego","natalia","ewa"],
intro:"На занятии пани Эва устраивает дискуссию: какие стереотипы есть о поляках, украинцах, испанцах? Студенты учат названия национальностей и особую форму множественного числа для мужчин.",
goals:["называть национальности: Polak, Polka, Polacy","образовывать мужско-личное множественное число существительных","понимать разницу между Polacy и Polki","говорить о стереотипах и культуре"],
secs:[
{k:"scene",pl:"Stereotypy",ru:"Стереотипы",place:"Szkoła językowa",desc:"На доске написано: «Jacy są Polacy?»",
lines:`ewa|Dzisiaj rozmawiamy o stereotypach. Jacy są Polacy?|Сегодня говорим о стереотипах. Какие поляки?
diego|Polacy są gościnni i zawsze dają dużo jedzenia!|Поляки гостеприимные и всегда дают много еды!
natalia|I narzekają na pogodę. Ale to robią też Białorusini.|И жалуются на погоду. Но это делают и белорусы.
maks|Ukraińcy też! Myślę, że Polacy i Ukraińcy są bardzo podobni.|Украинцы тоже! Думаю, что поляки и украинцы очень похожи.
ewa|A Hiszpanie? Diego, czy Hiszpanie naprawdę ciągle się spóźniają?|А испанцы? Диего, испанцы правда постоянно опаздывают?
diego|Nie wszyscy! Ale moi koledzy… no, tak.|Не все! Но мои друзья… ну, да.
ewa|A Polki? Jakie są Polki?|А польки? Какие польки?
maks|Polki są bardzo bezpośrednie. Kasia zawsze mówi, co myśli!|Польки очень прямолинейные. Кася всегда говорит, что думает!
ewa|To prawda! Pamiętajcie jednak: stereotypy to tylko uproszczenia.|Это правда! Но помните: стереотипы — это лишь упрощения.`,
ex:`mcq|Что говорит Диего о поляках?|są gościnni;się spóźniają;narzekają na wszystko|0|Polacy są gościnni i zawsze dają dużo jedzenia.
mcq|Какие, по мнению Макса, польки?|bezpośrednie;spokojne;nieśmiałe|0|Polki są bardzo bezpośrednie.
listen|Послушайте и выберите перевод|Jacy są Polacy?|Какие поляки?;Где поляки?;Кто такие поляки?|0|jacy — какие (о мужчинах / смешанной группе).`},
{k:"grammar",lab:"Национальности",title:"Polak, Polka, Polacy",sub:"Национальности: мужчина, женщина, группа. Пишутся с большой буквы.",
body:[{t:"Страна;Мужчина;Женщина;Группа (с мужчинами);Прилагательное|Polska;Polak;Polka;Polacy;polski|Ukraina;Ukrainiec;Ukrainka;Ukraińcy;ukraiński|Białoruś;Białorusin;Białorusinka;Białorusini;białoruski|Rosja;Rosjanin;Rosjanka;Rosjanie;rosyjski|Hiszpania;Hiszpan;Hiszpanka;Hiszpanie;hiszpański|Niemcy;Niemiec;Niemka;Niemcy;niemiecki|Francja;Francuz;Francuzka;Francuzi;francuski|Anglia;Anglik;Angielka;Anglicy;angielski"},
{trap:"Национальность пишется с большой буквы (<span class='pl'>Polak</span>), а прилагательное и язык — с маленькой: <span class='pl'>język polski, mówię po polsku</span>.",lb:"Ловушка для русскоязычных"},
{trap:"<span class='pl'>Niemcy</span> — это и «немцы», и страна «Германия» (мн. ч.): <span class='pl'>Jadę do Niemiec</span> — еду в Германию."}],
ex:`fill|Выберите форму|Maks jest ___.|Ukraińcem;Ukrainką;Ukraińcy|0|być + творительный: Ukraińcem.
fill|Выберите форму|Diego i jego koledzy to ___.|Hiszpanie;Hiszpanki;Hiszpany|0|Мужская группа: Hiszpanie.
mcq|Как называется женщина из Польши?|Polka;Polaczka;Polanka|0|Polka.|Polka
match|Соедините|Niemiec=немец;Francuz=француз;Anglik=англичанин;Białorusin=белорус;Rosjanin=русский (национальность)`},
{k:"grammar",lab:"Мужско-личная форма",title:"Rodzaj męskoosobowy: Polacy, studenci",sub:"Главная особенность польского мн. числа: у групп мужчин своя форма.",
body:["Во множественном числе польский различает две формы: <b>мужско-личную</b> (группы, где есть хотя бы один мужчина) и <b>немужско-личную</b> (всё остальное: женщины, дети, животные, вещи).",
{t:"Ед. ч.;Мужско-личная (мужчины);Немужско-личная (вещи, женщины)|student / studentka;studenci;studentki|kolega / koleżanka;koledzy;koleżanki|lekarz / lekarka;lekarze;lekarki|Polak / Polka;Polacy;Polki|pan / pani;panowie;panie|nauczyciel / nauczycielka;nauczyciele;nauczycielki"},
"Окончания мужско-личной формы: <b>-i / -y</b> (с чередованием согласной), <b>-e</b> и <b>-owie</b>. Какое выбрать, зависит от последней согласной:",
{t:"Слово кончается на;Мн. ч. (мужчины);Примеры|-t;-ci;student → studenci, architekt → architekci|-d;-dzi;sąsiad → sąsiedzi, Szwed → Szwedzi|-r;-rzy;doktor → doktorzy, aktor → aktorzy, kelner → kelnerzy|-k;-cy;Polak → Polacy, Słowak → Słowacy|-g;-dzy;kolega → koledzy, psycholog → psycholodzy|-ch;-si;Czech → Czesi, Włoch → Włosi|-z, -n, -m, -p, -b, -w;-i;Francuz → Francuzi, Rumun → Rumuni|-arz, -acz, -l, -ć, -j (мягкие);-e;lekarz → lekarze, nauczyciel → nauczyciele, gość → goście|члены семьи, титулы;-owie;pan → panowie, syn → synowie, ojciec → ojcowie, mąż → mężowie, Belg → Belgowie"},
{h:"Особые формы — учить наизусть"},
{ex:"człowiek → ludzie=люди|brat → bracia=братья|przyjaciel → przyjaciele=друзья|Amerykanin → Amerykanie=американцы|Hiszpan → Hiszpanie=испанцы|Niemiec → Niemcy=немцы|Ukrainiec → Ukraińcy=украинцы|chłopiec → chłopcy=мальчики, парни"},
{h:"Числа с мужчинами"},
"С группой мужчин числа тоже особые: <span class='pl'>dwaj studenci</span> или <span class='pl'>dwóch studentów</span>, <span class='pl'>trzej / trzech, czterej / czterech</span>; от пяти — <span class='pl'>pięciu studentów</span> (не «pięć»). Сравните: <span class='pl'>pięć studentek, pięć książek</span>.",
{ex:"To są moi koledzy.=Это мои друзья (мужчины / смешанная группа).|To są moje koleżanki.=Это мои подруги.|Ci studenci są z Hiszpanii.=Эти студенты из Испании."},
{note:"Указательное и притяжательное тоже меняются: <span class='pl'>ci studenci, moi koledzy</span> (мужчины), но <span class='pl'>te studentki, moje koleżanki</span>."}],
ex:`fill|Выберите форму|To są moi ___.|koledzy;kolegi;kolegów|0|Мужско-личная форма: koledzy.
fill|Выберите слово|___ studenci są z Polski.|Ci;Te;Ta|0|Мужчины: ci.
fill|Выберите форму|Moje ___ pracują w szpitalu.|koleżanki;koledzy;kolegi|0|Только женщины: koleżanki.
mcq|Как будет мн. ч. от «pan»?|panowie;pani;pany|0|pan → panowie.|panowie
type|Напишите по-польски: «поляки» (группа)|Polacy|Polak → Polacy.
fill|Выберите форму|Moi ___ są bardzo mili.|sąsiady;sąsiedzi;sąsiadowie|1|-d → -dzi: sąsiad → sąsiedzi.
fill|Выберите форму|W szpitalu pracują dobrzy ___.|doktory;doktorowie;doktorzy|2|-r → -rzy: doktor → doktorzy.
fill|Выберите форму|To są ___ z Pragi.|Czesi;Czechy;Czechowie|0|-ch → -si: Czech → Czesi (Czechy — это страна).
fill|Выберите форму|W naszym zespole pracuje ___ programistów.|pięć;pięciu;piąty|1|С группой мужчин: pięciu programistów.
mcq|Мн. ч. от «człowiek»?|człowieki;ludzie;człowiekowie|1|Особая форма: człowiek → ludzie.|ludzie`},
{k:"vocab",ex:`match|Соедините|cudzoziemiec=иностранец;kraj=страна;język=язык;kultura=культура;obywatelstwo=гражданство
mcq|Что значит «narzekać»?|жаловаться, ворчать;нарекать имя;обещать|0|narzekać na + вин. п. — жаловаться на.|narzekać`}],
vocab:`# Национальности
Polak|поляк
Polka|полька
Ukrainiec|украинец
Ukrainka|украинка
Białorusin|белорус
Hiszpan|испанец
Niemiec|немец
Francuz|француз
Anglik|англичанин
cudzoziemiec|иностранец
# Культура
kultura|культура
stereotyp|стереотип
język|язык
obywatelstwo|гражданство
gościnny|гостеприимный
bezpośredni|прямолинейный
podobny|похожий
narzekać|жаловаться, ворчать|Polacy narzekają na pogodę.|Поляки жалуются на погоду.`});

LX({n:39,title:"Mili ludzie",ru:"Люди вокруг",who:["maks","kasia"],
intro:"Макс рассказывает Касе о своей новой команде на работе. Чтобы описать коллег, ему нужны мужско-личные формы прилагательных и глаголов в прошедшем времени.",
goals:["использовать мужско-личные прилагательные: mili, nowi, dobrzy","различать byli и były, mieli и miały","описывать группы людей","использовать ci, ci moi koledzy, wszyscy"],
secs:[
{k:"scene",pl:"Nowy zespół",ru:"Новая команда",place:"Kawiarnia, w której pracuje Kasia",desc:"Пятница, вечер. Макс получил повышение и теперь руководит маленькой командой.",
lines:`kasia|No i jak? Jacy są twoi nowi koledzy?|Ну как? Какие твои новые коллеги?
maks|Wszyscy są bardzo mili i młodzi. Dwaj programiści są z Poznania, a dwie testerki z Lublina.|Все очень милые и молодые. Два программиста из Познани, а две тестировщицы из Люблина.
kasia|Byli zdziwieni, że jesteś szefem?|Удивились, что ты начальник?
maks|Programiści byli trochę zdziwieni, a dziewczyny były bardzo miłe od początku.|Программисты были немного удивлены, а девушки были очень милыми с самого начала.
kasia|A co robiliście pierwszego dnia?|А что вы делали в первый день?
maks|Rano mieliśmy spotkanie, a potem chłopaki pokazali mi system. Testerki przyniosły ciasto!|Утром у нас была встреча, а потом ребята показали мне систему. Тестировщицы принесли пирог!
kasia|Super ludzie. Tacy koledzy są najlepsi.|Классные люди. Такие коллеги — лучшие.
maks|Tak. Mam nadzieję, że będziemy dobrym zespołem.|Да. Надеюсь, что мы будем хорошей командой.`,
ex:`mcq|Откуда программисты?|z Poznania;z Lublina;z Wrocławia|0|Dwaj programiści są z Poznania.
mcq|Что принесли тестировщицы?|ciasto;kwiaty;kawę|0|Testerki przyniosły ciasto.
listen|Послушайте и выберите перевод|Wszyscy są bardzo mili.|Все очень милые.;Всё очень мило.;Они все молодые.|0|wszyscy — все (о людях, с мужчинами).`},
{k:"grammar",lab:"Прилагательные",title:"Mili, nowi, dobrzy",sub:"Прилагательные во мн. ч. для мужчин меняют последний согласный.",
body:[{t:"Ед. ч. м. р.;Мужско-личная;Немужско-личная|miły;mili;miłe|nowy;nowi;nowe|młody;młodzi;młode|dobry;dobrzy;dobre|wysoki;wysocy;wysokie|polski;polscy;polskie|zdziwiony;zdziwieni;zdziwione|ten;ci;te|mój;moi;moje|wszystek;wszyscy;wszystkie"},
"Чередования: <b>ł → l</b> (miły → mili), <b>d → dz</b> (młody → młodzi), <b>r → rz</b> (dobry → dobrzy), <b>k → c</b> (wysoki → wysocy), <b>n → ni</b> (zdziwiony → zdziwieni).",
{ex:"Moi nowi koledzy są mili.=Мои новые коллеги милые.|Te nowe koleżanki są miłe.=Эти новые коллеги (женщины) милые.|Polscy studenci są młodzi.=Польские студенты молодые."},
{trap:"<span class='pl'>chłopcy</span> — мальчики (ед. ч. chłopiec), а разговорное <span class='pl'>chłopaki</span> — ребята, парни. Обе формы вы услышите."}],
ex:`fill|Выберите форму|Moi koledzy są bardzo ___.|mili;miłe;miły|0|Мужская группа: mili.
fill|Выберите форму|Te koleżanki są bardzo ___.|mili;miłe;miła|1|Женская группа: miłe.
fill|Выберите форму|___ nowi programiści są z Poznania.|Ci;Te;Ten|0|Мужчины: ci.
fill|Выберите форму|Polscy studenci są ___.|młodzi;młode;młody|0|d → dz: młodzi.`},
{k:"grammar",lab:"Byli / były",title:"Byli czy były? Прошедшее время мн. ч.",sub:"В прошедшем времени мн. ч. тоже две формы: -li (с мужчинами) и -ły (без мужчин).",
body:[{t:"Глагол;Мужско-личная (-li);Немужско-личная (-ły)|być;byli;były|mieć;mieli;miały|robić;robili;robiły|iść;szli;szły|przynieść;przynieśli;przyniosły|jeść;jedli;jadły"},
{ex:"Programiści byli zdziwieni.=Программисты были удивлены.|Dziewczyny były miłe.=Девушки были милыми.|Mieliśmy spotkanie.=У нас была встреча (с мужчиной: Макс).|Koleżanki przyniosły ciasto.=Коллеги-женщины принесли пирог."},
{note:"Если в группе 10 женщин и один мужчина — всё равно <span class='pl'>byli</span>. Если только женщины, дети, животные или вещи — <span class='pl'>były</span>."}],
ex:`fill|Выберите форму|Kasia i Natalia ___ w kinie.|były;byli;była|0|Только женщины: były.
fill|Выберите форму|Maks i Kasia ___ w kinie.|byli;były;był|0|Есть мужчина: byli.
fill|Выберите форму|Koty ___ głodne.|były;byli;był|0|Животные: były.
type|Напишите по-польски: «Они (мужчины) были на работе»|byli w pracy;oni byli w pracy|Мужско-личная форма: byli.`},
{k:"vocab",ex:`match|Соедините|zespół=команда;kolega=коллега, друг;koleżanka=коллега (ж.), подруга;szef=начальник;awans=повышение
mcq|Что значит «zdziwiony»?|удивлённый;сердитый;уставший|0|dziwić się — удивляться.|zdziwiony`}],
vocab:`# Люди
ludzie|люди
kolega|коллега, друг
koleżanka|коллега (ж.), подруга
chłopaki|ребята, парни (разг.)
dziewczyny|девушки, девчонки
wszyscy|все (о людях)|Wszyscy są mili.|Все милые.
tacy|такие (о мужчинах)
# Работа
zespół|команда
awans|повышение
system|система
spotkanie|встреча, совещание
# Описание групп
mili|милые (м.-личн.)
młodzi|молодые (м.-личн.)
dobrzy|хорошие (м.-личн.)
zdziwiony|удивлённый
od początku|с самого начала`});

LX({n:40,title:"Co się stało?",ru:"Происшествия",who:["maks","natalia"],
intro:"У Натальи украли кошелёк в трамвае. Вместе с Максом она идёт в полицию и рассказывает, что произошло.",
goals:["рассказывать о происшествии","использовать вид глагола в рассказе","говорить в полиции: ukraść, zgubić, zgłosić","описывать внешность подозреваемого"],
secs:[
{k:"scene",pl:"Na komisariacie",ru:"В полицейском участке",place:"Komisariat policji",desc:"Наталья взволнована, Макс держит её сумку.",
lines:`pan|Dzień dobry. Co się stało?|Добрый день. Что случилось?
natalia|Ktoś ukradł mi portfel w tramwaju. Chcę zgłosić kradzież.|Кто-то украл у меня кошелёк в трамвае. Хочу заявить о краже.
pan|Kiedy to się stało?|Когда это случилось?
natalia|Dzisiaj rano, około ósmej. Jechałam do pracy linią numer dwa. Było bardzo dużo ludzi.|Сегодня утром, около восьми. Я ехала на работу на втором маршруте. Было очень много людей.
pan|Co było w portfelu?|Что было в кошельке?
natalia|Dowód osobisty, karta pobytu, dwie karty bankowe i około dwustu złotych.|Удостоверение, карта побыту, две банковские карты и около двухсот злотых.
pan|Czy zablokowała pani karty?|Вы заблокировали карты?
natalia|Tak, od razu zadzwoniłam do banku.|Да, сразу позвонила в банк.
pan|Widziała pani złodzieja?|Вы видели вора?
natalia|Chyba tak. Wysoki mężczyzna w czarnej kurtce. Stał obok mnie i wysiadł na Placu Grunwaldzkim.|Кажется, да. Высокий мужчина в чёрной куртке. Стоял рядом со мной и вышел на Пласу Грюнвальдзком.
pan|Dziękuję. Proszę podpisać protokół.|Спасибо. Подпишите, пожалуйста, протокол.`,
ex:`mcq|Что украли у Натальи?|portfel;telefon;torbę|0|Ktoś ukradł mi portfel.
mcq|Что Наталья сделала сразу?|zablokowała karty;poszła do domu;zadzwoniła do Maksa|0|Od razu zadzwoniłam do banku.
mcq|Как выглядел вор?|wysoki mężczyzna w czarnej kurtce;niska kobieta;młody chłopak w czapce|0|Wysoki mężczyzna w czarnej kurtce.
listen|Послушайте и выберите перевод|Co się stało?|Что случилось?;Что стоит?;Кто это?|0|stać się — случиться.`},
{k:"grammar",lab:"Вид в рассказе",title:"Jechałam, kiedy ktoś ukradł…",sub:"В рассказе о происшествии несовершенный вид задаёт фон, совершенный — продвигает события.",
body:[{t:"Фон (несов.);Событие (сов.)|Jechałam do pracy…;…kiedy ktoś ukradł mi portfel.|Stał obok mnie…;…a potem wysiadł.|Czytałem gazetę…;…kiedy usłyszałem krzyk."},
{h:"Глаголы происшествий"},
{t:"Несовершенный;Совершенный;Значение|kraść;ukraść;красть / украсть|gubić;zgubić;терять / потерять|zgłaszać;zgłosić;заявлять / заявить|blokować;zablokować;блокировать / заблокировать|wysiadać;wysiąść;выходить / выйти (из транспорта)|wsiadać;wsiąść;садиться / сесть (в транспорт)|dzwonić;zadzwonić;звонить / позвонить"},
{ex:"Zgubiłem klucze.=Я потерял ключи.|Ukradli mi rower.=У меня украли велосипед.|Wysiadam na następnym przystanku.=Выхожу на следующей остановке."},
{trap:"«У меня украли» — <span class='pl'>ukradli mi</span> (дательный, как «украли мне»). «Кто-то украл у меня» — <span class='pl'>ktoś mi ukradł</span>.",lb:"Ловушка для русскоязычных"}],
ex:`fill|Выберите вид|___ do domu, kiedy zaczęło padać.|Szedłem;Poszedłem;Pójdę|0|Фон: szedłem.
fill|Выберите вид|Wczoraj ___ portfel w autobusie.|zgubiłam;gubiłam;zgubię|0|Одно событие: zgubiłam.
fill|Выберите|Ktoś ___ ukradł telefon.|mi;mnie;ja|0|Кому? — mi.
mcq|Как сказать «выйти из трамвая»?|wysiąść z tramwaju;wyjść z tramwaju na zewnątrz;zejść tramwaj|0|Из транспорта: wysiąść.|wysiąść z tramwaju
type|Напишите по-польски (мужчина): «Я потерял ключи»|zgubiłem klucze|zgubić → zgubiłem.`},
{k:"grammar",lab:"Описание человека",title:"Jak wyglądał? Описание",sub:"Как описать человека полиции или знакомым.",
body:[{ex:"Jak on wyglądał?=Как он выглядел?|Był wysoki i szczupły.=Он был высокий и худой.|Miał krótkie, ciemne włosy.=У него были короткие тёмные волосы.|Miał brodę i okulary.=У него была борода и очки.|Był w czarnej kurtce.=Он был в чёрной куртке.|Miał około trzydziestu lat.=Ему было около тридцати лет."},
{t:"Внешность;Слова|włosy (волосы);krótkie, długie, jasne, ciemne, kręcone|twarz (лицо);okrągła, pociągła|zarost;broda (борода), wąsy (усы)|w czym?;w kurtce, w czapce, w dżinsach, w okularach"}],
ex:`fill|Выберите|Miał długie ___.|włosy;włos;włosów|0|włosy — волосы (мн. ч.).
mcq|Как сказать «Он был в очках»?|Był w okularach.;Miał okulary na.;Był okulary.|0|w + предл. п.: w okularach. Можно и Miał okulary.|Był w okularach.
match|Соедините|broda=борода;wąsy=усы;okulary=очки;włosy=волосы;twarz=лицо`},
{k:"vocab",ex:`match|Соедините|kradzież=кража;złodziej=вор;policja=полиция;portfel=кошелёк;świadek=свидетель
mcq|Что значит «od razu»?|сразу;от раза;один раз|0|od razu — сразу же.|od razu`}],
vocab:`# Происшествия
stać się|случиться|Co się stało?|Что случилось?
kradzież|кража
złodziej|вор
ukraść|украсть
zgubić|потерять|Zgubiłem klucze.|Я потерял ключи.
zgłosić|заявить, сообщить
policja|полиция
komisariat|полицейский участок
świadek|свидетель
wypadek|несчастный случай, авария
pomoc|помощь|Pomocy!|Помогите!
# Вещи
portfel|кошелёк
klucze|ключи
dowód|удостоверение
# Описание
włosy|волосы
broda|борода
okulary|очки
od razu|сразу
chyba|кажется, наверное`});

LX({n:41,title:"Uczucia i relacje",ru:"Чувства и отношения",who:["maks","kasia"],
intro:"Вечером на набережной Кася признаётся Максу, что скучает по Гданьску, а Макс — что ему не хватает Харькова. Разговор становится очень личным.",
goals:["говорить о чувствах: jest mi smutno, brakuje mi","использовать дательный падеж в конструкциях состояния","понимать взаимное się: spotykamy się, kochają się","говорить об отношениях"],
secs:[
{k:"scene",pl:"Wieczór nad Odrą",ru:"Вечер на Одре",place:"Wyspa Słodowa",desc:"Летний вечер, на острове играет уличный музыкант.",
lines:`kasia|Czasem jest mi smutno. Brakuje mi morza i rodziny.|Иногда мне грустно. Мне не хватает моря и семьи.
maks|Rozumiem cię. Mnie brakuje Charkowa, mamy i jej barszczu.|Понимаю тебя. Мне не хватает Харькова, мамы и её борща.
kasia|Jest ci tu dobrze? We Wrocławiu?|Тебе здесь хорошо? Во Вроцлаве?
maks|Tak. Na początku było mi trudno, ale teraz czuję się tu jak w domu. Dzięki tobie.|Да. Вначале мне было трудно, но теперь я чувствую себя здесь как дома. Благодаря тебе.
kasia|Dzięki mnie? Miło mi to słyszeć.|Благодаря мне? Приятно это слышать.
maks|Znamy się już ponad rok. Spotykamy się prawie codziennie… Kasiu, bardzo cię lubię. Może nawet więcej niż lubię.|Мы знакомы уже больше года. Видимся почти каждый день… Кася, ты мне очень нравишься. Может, даже больше, чем нравишься.
kasia|Maks… Jest mi głupio, ale… ja też.|Макс… Мне неловко, но… мне тоже.
maks|Naprawdę? Nie wiem, co powiedzieć.|Правда? Не знаю, что сказать.
kasia|To nic nie mów.|Тогда ничего не говори.`,
ex:`mcq|Чего не хватает Касе?|morza i rodziny;Charkowa;pracy|0|Brakuje mi morza i rodziny.
mcq|Как давно они знакомы?|ponad rok;miesiąc;pięć lat|0|Znamy się już ponad rok.
listen|Послушайте и выберите перевод|Czuję się tu jak w domu.|Я чувствую себя здесь как дома.;Я хочу домой.;Здесь мой дом.|0|czuć się — чувствовать себя.`},
{k:"grammar",lab:"Jest mi smutno",title:"Jest mi smutno, brakuje mi…",sub:"Состояния выражаются как в русском: «мне грустно» — человек в дательном падеже.",
body:[{t:"Конструкция;Пример;Значение|jest mi + наречие;Jest mi smutno / zimno / głupio / przykro;Мне грустно / холодно / неловко / жаль|było / będzie mi…;Było mi trudno.;Мне было трудно.|brakuje mi + род. п.;Brakuje mi domu.;Мне не хватает дома.|szkoda mi + род. п.;Szkoda mi czasu.;Мне жаль времени.|chce mi się + инф.;Chce mi się spać.;Мне хочется спать.|nie chce mi się;Nie chce mi się iść.;Мне не хочется идти."},
{ex:"Przykro mi.=Мне жаль. (сочувствие)|Jest ci zimno?=Тебе холодно?|Brakuje mi ciebie.=Мне тебя не хватает.|Było nam bardzo wesoło.=Нам было очень весело."},
{trap:"<span class='pl'>Przykro mi</span> — сочувствие («мне жаль, сочувствую»), <span class='pl'>szkoda</span> — сожаление о ситуации («жалко, что…»): <span class='pl'>Szkoda, że nie przyjdziesz</span>."}],
ex:`fill|Выберите форму|Jest ___ zimno. (мне)|mi;mnie;ja|0|Краткая форма: mi.
fill|Выберите форму|Brakuje mi ___.|dom;domu;domem|1|brakować + родительный.
mcq|Как выразить сочувствие?|Przykro mi.;Szkoda mi.;Smutno ci.|0|Przykro mi — мне жаль (сочувствую).|Przykro mi.
type|Напишите по-польски: «Мне хочется спать»|chce mi się spać|chce mi się + инфинитив.`},
{k:"grammar",lab:"Взаимное się",title:"Spotykamy się: взаимное się",sub:"Się также значит «друг друга».",
body:[{ex:"Znamy się od roku.=Мы знакомы (знаем друг друга) год.|Spotykamy się codziennie.=Мы видимся каждый день.|Kochają się.=Они любят друг друга.|Pokłóciliśmy się.=Мы поссорились.|Pogodzili się.=Они помирились.|Całują się.=Они целуются."},
{h:"Отношения"},
{ex:"chodzić ze sobą=встречаться (о паре)|zakochać się w kimś=влюбиться в кого-то|być w związku=быть в отношениях|rozstać się=расстаться|wziąć ślub=пожениться|przyjaźń=дружба|miłość=любовь"},
{trap:"<span class='pl'>Kocham cię</span> — «я тебя люблю» (сильное чувство). <span class='pl'>Lubię cię</span> — «ты мне нравишься» (дружески). Не перепутайте!",lb:"Ловушка"}],
ex:`fill|Выберите|Znamy ___ od roku.|się;sobie;siebie|0|Взаимное: się.
mcq|Что значит «Pokłócili się»?|Они поссорились.;Они познакомились.;Они помирились.|0|kłócić się — ссориться.|Pokłócili się.
match|Соедините|miłość=любовь;przyjaźń=дружба;ślub=свадьба;zakochać się=влюбиться;rozstać się=расстаться`},
{k:"vocab",ex:`match|Соедините|smutny=грустный;szczęśliwy=счастливый;zły=злой, сердитый;zazdrosny=ревнивый;samotny=одинокий
mcq|Что значит «Jest mi głupio»?|Мне неловко.;Я глупый.;Мне скучно.|0|głupio mi — мне неловко, стыдно.|Jest mi głupio.`}],
vocab:`# Чувства
uczucie|чувство
smutno|грустно|Jest mi smutno.|Мне грустно.
wesoło|весело
głupio|неловко
przykro|жаль (сочувствие)|Przykro mi.|Мне жаль.
brakować|не хватать|Brakuje mi domu.|Мне не хватает дома.
tęsknić|скучать (по)
czuć się|чувствовать себя
szczęśliwy|счастливый
samotny|одинокий
zazdrosny|ревнивый
# Отношения
miłość|любовь
przyjaźń|дружба
kochać|любить
zakochać się|влюбиться
spotykać się|встречаться, видеться
pokłócić się|поссориться
pogodzić się|помириться
ślub|свадьба
dzięki|благодаря|Dzięki tobie.|Благодаря тебе.`});
