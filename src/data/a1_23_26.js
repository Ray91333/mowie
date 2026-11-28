/* A1 · lessons 23–26 */
LX({n:23,title:"Zadzwonię jutro",ru:"Планы и звонки",who:["maks","tomek"],
intro:"Томек звонит Максу: в субботу у него день рождения, и он планирует поездку на озеро. Макс обещает перезвонить, когда узнает свои планы.",
goals:["говорить по телефону","использовать совершенный вид в будущем: zrobię, zadzwonię","различать będę robić и zrobię","давать обещания"],
secs:[
{k:"scene",pl:"Rozmowa telefoniczna",ru:"Телефонный разговор",place:"Telefon",desc:"Среда, вечер. У Макса звонит телефон.",
lines:`maks|Halo?|Алло?
tomek|Cześć, Maks, tu Tomek. Masz chwilę?|Привет, Макс, это Томек. Есть минутка?
maks|Jasne, słucham.|Конечно, слушаю.
tomek|W sobotę mam urodziny. Pojedziemy nad jezioro, będziemy grillować i pływać. Pojedziesz z nami?|В субботу у меня день рождения. Поедем на озеро, будем жарить гриль и плавать. Поедешь с нами?
maks|Chętnie, ale jeszcze nie wiem, czy mam wolne. Sprawdzę i zadzwonię do ciebie jutro.|С удовольствием, но я ещё не знаю, свободен ли я. Проверю и позвоню тебе завтра.
tomek|Dobra. Kupię mięso i warzywa, a ty możesz coś upiec?|Ладно. Я куплю мясо и овощи, а ты можешь что-нибудь испечь?
maks|Upiec? Hmm… Zrobię sałatkę. I przyniosę gitarę!|Испечь? Хм… Сделаю салат. И принесу гитару!
tomek|Super! Napiszę ci adres SMS-em.|Супер! Напишу тебе адрес эсэмэской.
maks|Dzięki. To na razie, oddzwonię jutro!|Спасибо. Тогда пока, перезвоню завтра!`,
ex:`mcq|Что Макс принесёт?|sałatkę i gitarę;mięso i warzywa;ciasto|0|Maks zrobi sałatkę i przyniesie gitarę.
mcq|Когда Макс перезвонит?|jutro;w sobotę;dzisiaj wieczorem|0|Zadzwonię do ciebie jutro.
listen|Послушайте и выберите перевод|Masz chwilę?|Есть минутка?;Который час?;Ты занят?|0|chwila — минутка, момент.`},
{k:"grammar",lab:"Будущее совершенное",title:"Zrobię czy będę robić?",sub:"Как в русском: «сделаю» (результат) и «буду делать» (процесс).",
body:["Совершенный вид не имеет настоящего времени. Его формы настоящего значат будущее: <span class='pl'>zrobię</span> = сделаю, <span class='pl'>kupię</span> = куплю.",
{t:"Несовершенный;Будущее (процесс);Совершенный;Будущее (результат)|robić;będę robić;zrobić;zrobię|dzwonić;będę dzwonić;zadzwonić;zadzwonię|pisać;będę pisać;napisać;napiszę|kupować;będę kupować;kupić;kupię|jechać;będę jechać;pojechać;pojadę"},
{ex:"Zadzwonię jutro.=Позвоню завтра.|Jutro będę cały dzień pracować.=Завтра я буду весь день работать.|Kupisz chleb?=Купишь хлеб?|Napiszę do ciebie.=Я тебе напишу."},
{trap:"Не говорите «będę zrobić» — это ошибка. С <span class='pl'>będę</span> только несовершенный вид, как и в русском нельзя «буду сделать»."}],
ex:`fill|Выберите|Jutro ___ do ciebie.|zadzwonię;będę zadzwonić;dzwonię|0|Обещание с результатом: zadzwonię.
fill|Выберите|W sobotę ___ cały dzień grillować.|będziemy;zrobimy;będziemy zrobić|0|Процесс: będziemy grillować.
fill|Выберите|___ chleb po pracy?|Kupisz;Będziesz kupić;Kupujesz się|0|Результат: kupisz.
mcq|Какая форма ошибочная?|będę napisać;będę pisać;napiszę|0|С będę — только несовершенный вид: będę pisać.|będę pisać
type|Напишите по-польски: «Я сделаю салат»|zrobię sałatkę|zrobić → zrobię.`},
{k:"grammar",lab:"Телефон",title:"Rozmowa przez telefon",sub:"Фразы, которые помогут не растеряться во время звонка.",
body:[{ex:"Halo?=Алло?|Tu Maks. / Mówi Maks.=Это Макс.|Czy mogę rozmawiać z panią Anną?=Могу я поговорить с пани Анной?|Chwileczkę.=Минуточку.|Nie słyszę, proszę mówić głośniej.=Не слышу, говорите громче, пожалуйста.|Oddzwonię później.=Я перезвоню позже.|Pomyłka.=Вы ошиблись номером.|Napiszę SMS-a.=Я напишу эсэмэску."},
{trap:"<span class='pl'>dzwonić do</span> + родительный: <span class='pl'>dzwonię do mamy, do ciebie, do biura</span>. По-русски «звоню маме» — дательный, а по-польски «к маме».",lb:"Ловушка для русскоязычных"}],
ex:`mcq|Что значит «Oddzwonię później»?|Перезвоню позже.;Позвоню завтра.;Не звони мне.|0|oddzwonić — перезвонить.|Oddzwonię później.
fill|Выберите форму|Dzwonię do ___.|mama;mamy;mamie|1|dzwonić do + родительный: mamy.
mcq|Как сказать «Минуточку»?|Chwileczkę.;Moment później.;Czekam.|0|Chwileczkę — минуточку.|Chwileczkę.`},
{k:"vocab",ex:`match|Соедините|telefon=телефон;wiadomość=сообщение;rozmowa=разговор;dzwonić=звонить;przynieść=принести
mcq|Что значит «sprawdzić»?|проверить;спросить;справиться|0|sprawdzić — проверить.|sprawdzić`}],
vocab:`# Телефон
telefon|телефон
dzwonić|звонить|Zadzwonię jutro.|Позвоню завтра.
oddzwonić|перезвонить
rozmowa|разговор
wiadomość|сообщение
SMS|эсэмэска
chwila|минутка, момент
# Планы
plan|план
sprawdzić|проверить
przynieść|принести
zabrać|взять с собой
grillować|жарить на гриле
pływać|плавать
upiec|испечь
sałatka|салат
# Слова-связки
czy|ли (в косвенном вопросе)|Nie wiem, czy mam czas.|Не знаю, есть ли у меня время.
jeszcze|ещё
później|позже`});

LX({n:24,title:"W sklepie z ubraniami",ru:"Одежда",who:["maks","kasia"],
intro:"Скоро зима, а у Макса только осенняя куртка из Харькова. Кася ведёт его в торговый центр выбрать тёплую одежду.",
goals:["называть одежду и размеры","сравнивать: tańszy, lepszy, najładniejszy","использовать nosić и mieć na sobie","говорить za mały, za duży"],
secs:[
{k:"scene",pl:"W galerii handlowej",ru:"В торговом центре",place:"Galeria handlowa",desc:"Магазин одежды, длинные ряды курток и свитеров.",
lines:`kasia|Zobacz tę kurtkę. Jest cieplejsza niż twoja.|Посмотри эту куртку. Она теплее, чем твоя.
maks|Ale jest droższa. Ta czarna jest tańsza.|Но она дороже. Эта чёрная дешевле.
kasia|Ta czarna jest najtańsza, ale też najgorsza. Przymierz niebieską.|Эта чёрная самая дешёвая, но и самая плохая. Примерь синюю.
sprzf|W czym mogę pomóc? Jaki rozmiar pan nosi?|Чем могу помочь? Какой размер Вы носите?
maks|Zwykle L. Gdzie jest przymierzalnia?|Обычно L. Где примерочная?
sprzf|Tam, po lewej stronie.|Там, слева.
maks|Hmm… Jest trochę za mała. Mogę prosić większą?|Хм… Немного мала. Можно побольше?
sprzf|Proszę, rozmiar XL.|Пожалуйста, размер XL.
kasia|O, teraz jest w sam raz! Wyglądasz w niej świetnie.|О, теперь в самый раз! Ты в ней отлично выглядишь.
maks|Dobrze, biorę. I jeszcze ciepłe rękawiczki i szalik.|Хорошо, беру. И ещё тёплые перчатки и шарф.`,
ex:`mcq|Какую куртку купил Макс?|niebieską, rozmiar XL;czarną, najtańszą;niebieską, rozmiar L|0|Niebieska w rozmiarze XL była w sam raz.
mcq|Что значит «w sam raz»?|в самый раз;сам по себе;один раз|0|w sam raz — как раз, впору.|w sam raz
listen|Послушайте и выберите перевод|Gdzie jest przymierzalnia?|Где примерочная?;Где касса?;Где выход?|0|przymierzać — примерять, przymierzalnia — примерочная.`},
{k:"grammar",lab:"Сравнение",title:"Tańszy, najtańszy: степени сравнения",sub:"Сравнительная степень: -szy / -ejszy. Превосходная: naj- + сравнительная.",
body:[{t:"Прилагательное;Сравнительная;Превосходная|tani (дешёвый);tańszy;najtańszy|drogi (дорогой);droższy;najdroższy|ciepły (тёплый);cieplejszy;najcieplejszy|ładny (красивый);ładniejszy;najładniejszy|młody (молодой);młodszy;najmłodszy|duży (большой);większy;największy|mały (маленький);mniejszy;najmniejszy|dobry (хороший);lepszy;najlepszy|zły (плохой);gorszy;najgorszy"},
{ex:"Ta kurtka jest tańsza niż tamta.=Эта куртка дешевле, чем та.|To najlepszy sklep w mieście.=Это лучший магазин в городе.|Mój brat jest młodszy ode mnie.=Мой брат младше меня."},
{note:"Длинные прилагательные часто сравнивают описательно: <span class='pl'>bardziej interesujący</span> (более интересный), <span class='pl'>najbardziej interesujący</span> (самый интересный)."},
{trap:"«Чем» — <span class='pl'>niż</span> + именительный или <span class='pl'>od</span> + родительный: <span class='pl'>wyższy niż ja = wyższy ode mnie</span>."}],
ex:`fill|Выберите форму|Ta kurtka jest ___ niż tamta.|tańsza;tanisza;bardziej tania|0|tani → tańszy / tańsza.
fill|Выберите форму|To ___ pizza w mieście!|najlepsza;najdobrsza;lepsza|0|dobry → najlepszy (неправильная форма).
fill|Выберите форму|Mój pokój jest ___ niż twój.|mniejszy;małszy;najmniejszy|0|mały → mniejszy.
mcq|Сравнительная степень от «duży»?|większy;duższy;bardziej duży|0|duży → większy (неправильная форма).|większy`},
{k:"grammar",lab:"nosić, mieć na sobie",title:"Nosić, mieć na sobie, przymierzać",sub:"Как говорить об одежде, которую носишь.",
body:[{t:"Глагол;Значение;Пример|nosić + вин. п.;носить (обычно);Zwykle noszę dżinsy.|mieć na sobie + вин. п.;быть одетым во что-то сейчас;Mam na sobie niebieską kurtkę.|przymierzać / przymierzyć;примерять / примерить;Mogę przymierzyć?|zakładać / założyć;надевать / надеть;Załóż czapkę!|pasować;подходить (по размеру, к чему-то);Ta koszula pasuje do spodni."},
{ex:"za mały / za duży=слишком маленький / большой|za krótki / za długi=слишком короткий / длинный|w sam raz=в самый раз|Jaki rozmiar pan nosi?=Какой у Вас размер?|Wyglądasz świetnie!=Ты отлично выглядишь!"}],
ex:`fill|Выберите|Dzisiaj mam na ___ czarny sweter.|sobie;siebie;się|0|mieć na sobie — быть одетым в.
mcq|Как сказать «Можно примерить?»|Mogę przymierzyć?;Mogę mierzyć?;Mogę pasować?|0|przymierzyć — примерить.|Mogę przymierzyć?
build|Соберите: «Эта куртка слишком большая»|Ta kurtka jest za duża.|bardzo|za + прилагательное — слишком.`},
{k:"vocab",ex:`match|Соедините|spodnie=брюки;koszula=рубашка;sukienka=платье;buty=обувь;sweter=свитер
mcq|Что такое «rękawiczki»?|перчатки;рукава;варежки для кухни|0|rękawiczki — перчатки (от ręka — рука).|rękawiczki`}],
vocab:`# Одежда
kurtka|куртка
płaszcz|пальто
sweter|свитер
koszula|рубашка
koszulka|футболка
spodnie|брюки
dżinsy|джинсы
sukienka|платье
spódnica|юбка
buty|обувь, ботинки
szalik|шарф
rękawiczki|перчатки
# Покупка одежды
rozmiar|размер|Jaki rozmiar pan nosi?|Какой у Вас размер?
przymierzalnia|примерочная
przymierzyć|примерить
nosić|носить
w sam raz|в самый раз
wyglądać|выглядеть|Wyglądasz świetnie!|Отлично выглядишь!
galeria handlowa|торговый центр`});

LX({n:25,title:"U lekarza",ru:"Здоровье",who:["maks"],
intro:"После выходных у озера Макс простудился. Он записывается к врачу и потом идёт в аптеку.",
goals:["описывать симптомы: boli mnie głowa","называть части тела","давать советы: powinieneś odpoczywać","покупать лекарства в аптеке"],
secs:[
{k:"scene",pl:"W przychodni",ru:"В поликлинике",place:"Przychodnia",desc:"Кабинет врача, на столе компьютер и тонометр.",
lines:`lek|Dzień dobry. Co panu dolega?|Добрый день. На что жалуетесь?
maks|Dzień dobry. Boli mnie gardło i głowa. Mam też katar.|Добрый день. У меня болит горло и голова. Ещё насморк.
lek|Od kiedy?|С какого времени?
maks|Od niedzieli. Wczoraj miałem gorączkę, trzydzieści osiem stopni.|С воскресенья. Вчера была температура, тридцать восемь градусов.
lek|Proszę otworzyć usta… Gardło jest czerwone. Kaszel pan ma?|Откройте, пожалуйста, рот… Горло красное. Кашель есть?
maks|Trochę. I bolą mnie mięśnie.|Немного. И болят мышцы.
lek|To przeziębienie. Powinien pan leżeć w łóżku i dużo pić. Wypiszę receptę i zwolnienie na trzy dni.|Это простуда. Вам нужно лежать в постели и много пить. Выпишу рецепт и больничный на три дня.
maks|Dziękuję. Czy mogę pić kawę?|Спасибо. Можно мне пить кофе?
lek|Lepiej herbatę z miodem i cytryną. Zdrowia życzę!|Лучше чай с мёдом и лимоном. Выздоравливайте!`,
ex:`mcq|Что болит у Макса?|gardło i głowa;brzuch;noga|0|Boli go gardło i głowa.
mcq|Что советует врач?|leżeć w łóżku i dużo pić;iść do pracy;pić kawę|0|Powinien pan leżeć w łóżku i dużo pić.
mcq|Что такое «zwolnienie»?|больничный лист;увольнение;рецепт|0|zwolnienie (lekarskie) — больничный, L4.|zwolnienie
listen|Послушайте и выберите перевод|Co panu dolega?|На что жалуетесь?;Что Вы хотите?;Где у Вас болит?|0|dolegać — беспокоить (о болезни).`},
{k:"grammar",lab:"Boli mnie…",title:"Boli mnie głowa",sub:"Как в русском «у меня болит голова», только человек в винительном падеже: mnie, cię, go, ją.",
body:[{t:"Кого?;Пример|mnie;Boli mnie głowa.|cię;Co cię boli?|go;Boli go brzuch.|ją;Boli ją ząb.|nas / was / ich;Bolą nas nogi."},
{ex:"Boli mnie głowa.=У меня болит голова.|Bolą mnie plecy.=У меня болит спина.|Bolą mnie zęby.=У меня болят зубы.|Mam gorączkę.=У меня температура.|Mam katar i kaszel.=У меня насморк и кашель.|Jestem przeziębiony.=Я простужен."},
{trap:"<span class='pl'>plecy</span> (спина) и <span class='pl'>usta</span> (рот) — только множественное число: <span class='pl'>bolą mnie plecy</span>."},
{h:"Части тела"},
{ex:"głowa=голова|oko (oczy)=глаз (глаза)|ucho (uszy)=ухо (уши)|nos=нос|usta=рот|gardło=горло|ręka=рука|noga=нога|brzuch=живот|plecy=спина|serce=сердце|ząb=зуб"}],
ex:`fill|Выберите форму|___ mnie głowa.|Boli;Bolą;Boleć|0|głowa (ед. ч.) → boli.
fill|Выберите форму|___ mnie plecy.|Boli;Bolą;Bolę|1|plecy (мн. ч.) → bolą.
fill|Выберите форму|Co ___ boli, Kasiu?|cię;ci;tobie|0|Кого? → cię.
match|Соедините|głowa=голова;gardło=горло;brzuch=живот;noga=нога;ząb=зуб`},
{k:"grammar",lab:"Powinien",title:"Powinieneś odpoczywać: советы",sub:"powinien — «должен, следует». Изменяется по лицам и роду, как прошедшее время.",
body:[{t:"Лицо;Мужчина;Женщина|ja;powinienem;powinnam|ty;powinieneś;powinnaś|on / ona;powinien;powinna|pan / pani;pan powinien;pani powinna|my;powinniśmy;powinnyśmy|wy;powinniście;powinnyście|oni / one;powinni;powinny"},
{ex:"Powinieneś odpoczywać.=Тебе следует отдыхать.|Pani powinna pić dużo wody.=Вам следует пить много воды.|Powinniśmy iść do lekarza.=Нам нужно пойти к врачу.|Nie powinnaś pracować.=Тебе не следует работать."},
{h:"В аптеке"},
{ex:"apteka=аптека|lekarstwo / lek=лекарство|tabletki=таблетки|syrop=сироп|recepta=рецепт|bez recepty=без рецепта|Coś na ból głowy?=Что-нибудь от головной боли?|dwa razy dziennie=два раза в день"}],
ex:`fill|Выберите форму (говорят Максу)|___ leżeć w łóżku.|Powinieneś;Powinnaś;Powinien|0|ty (мужчина) → powinieneś.
fill|Выберите форму (о Касе)|Kasia ___ odpoczywać.|powinna;powinien;powinnam|0|ona → powinna.
mcq|Как попросить средство от горла?|Poproszę coś na ból gardła.;Poproszę coś dla gardła.;Poproszę gardło.|0|coś na + вин. п. — что-нибудь от…|Poproszę coś na ból gardła.
type|Напишите по-польски: «У меня температура»|mam gorączkę|mieć gorączkę — иметь температуру.`},
{k:"vocab",ex:`match|Соедините|lekarz=врач;apteka=аптека;recepta=рецепт;tabletka=таблетка;przeziębienie=простуда
mcq|Что значит «Zdrowia życzę!»?|Желаю здоровья!;Будьте здоровы! (при чихании);Здравствуйте!|0|Так желают выздоровления. При чихании говорят: Na zdrowie!|Zdrowia życzę!`}],
vocab:`# Здоровье
zdrowie|здоровье
choroba|болезнь
chory|больной|Jestem chory.|Я болен.
przeziębienie|простуда
gorączka|температура, жар
katar|насморк
kaszel|кашель
ból|боль|ból głowy|головная боль
boleć|болеть|Boli mnie głowa.|У меня болит голова.
# У врача
przychodnia|поликлиника
lekarz|врач
recepta|рецепт
zwolnienie lekarskie|больничный
apteka|аптека
lekarstwo|лекарство
tabletka|таблетка
# Тело
głowa|голова
gardło|горло
brzuch|живот
plecy|спина`});

LX({n:26,title:"Mam sprawę",ru:"Просьбы и жалобы",who:["maks","kasia"],
intro:"Наушники, которые Макс купил неделю назад, перестали работать. Он идёт в магазин оформить жалобу. Это последний урок уровня A1, в конце ждёт обзор всех падежей.",
goals:["вежливо просить: czy mógłby pan…?","использовать условное наклонение: chciałbym, mógłbyś","оформлять жалобу (reklamacja)","повторить все падежи уровня A1"],
secs:[
{k:"scene",pl:"Reklamacja",ru:"Жалоба",place:"Sklep z elektroniką",desc:"У стойки обслуживания. Макс держит коробку с наушниками и чек.",
lines:`maks|Dzień dobry. Mam sprawę. Chciałbym złożyć reklamację.|Добрый день. У меня дело. Я хотел бы подать жалобу.
sprzf|Dzień dobry. Co się stało?|Добрый день. Что случилось?
maks|Kupiłem te słuchawki tydzień temu i lewa słuchawka nie działa.|Я купил эти наушники неделю назад, и левый наушник не работает.
sprzf|Czy ma pan paragon?|У Вас есть чек?
maks|Tak, proszę. Czy mógłbym wymienić je na nowe?|Да, пожалуйста. Мог бы я обменять их на новые?
sprzf|Niestety, tego modelu nie mamy. Mogłabym zaproponować zwrot pieniędzy albo inny model.|К сожалению, этой модели нет. Я могла бы предложить возврат денег или другую модель.
maks|Wolałbym zwrot pieniędzy.|Я бы предпочёл возврат денег.
sprzf|Dobrze. Proszę wypełnić formularz. Pieniądze wrócą na kartę za kilka dni.|Хорошо. Заполните бланк. Деньги вернутся на карту через несколько дней.
maks|Dziękuję. Byłbym wdzięczny, gdyby to było szybko.|Спасибо. Был бы благодарен, если бы это было быстро.`,
ex:`mcq|Что случилось с наушниками?|lewa słuchawka nie działa;są za duże;są za drogie|0|Lewa słuchawka nie działa.
mcq|Что выбрал Макс?|zwrot pieniędzy;nowy model;naprawę|0|Wolałbym zwrot pieniędzy.
mcq|Что такое «paragon»?|чек;гарантия;пакет|0|paragon — кассовый чек. Без него рекламацию сделать сложнее.|paragon
listen|Послушайте и выберите перевод|Chciałbym złożyć reklamację.|Я хотел бы подать жалобу.;Я хотел бы купить наушники.;Я хотел бы поговорить с менеджером.|0|złożyć reklamację — подать жалобу на товар.`},
{k:"grammar",lab:"Условное наклонение",title:"Chciałbym, mógłbyś: условное наклонение",sub:"Форма прошедшего времени + частица by + окончание лица. Это делает просьбу вежливее, как русское «бы».",
body:[{t:"Лицо;chcieć (м.);chcieć (ж.);móc (м.);móc (ж.)|ja;chciałbym;chciałabym;mógłbym;mogłabym|ty;chciałbyś;chciałabyś;mógłbyś;mogłabyś|on / ona;chciałby;chciałaby;mógłby;mogłaby|my;chcielibyśmy;chciałybyśmy;moglibyśmy;mogłybyśmy|wy;chcielibyście;chciałybyście;moglibyście;mogłybyście|oni / one;chcieliby;chciałyby;mogliby;mogłyby"},
{ex:"Chciałbym kawę.=Я хотел бы кофе.|Mógłbyś mi pomóc?=Ты не мог бы мне помочь?|Czy mógłby pan powtórzyć?=Не могли бы Вы повторить?|Wolałabym herbatę.=Я бы предпочла чай.|Byłbym wdzięczny.=Я был бы благодарен."},
{trap:"В польском «бы» прилипает к глаголу и несёт окончание лица: <span class='pl'>chciałbym</span> — одно слово, а не «chciał by ja».",lb:"Ловушка для русскоязычных"}],
ex:`fill|Выберите форму (говорит Макс)|___ zarezerwować stolik.|Chciałbym;Chciałabym;Chcę by|0|Мужчина: chciałbym.
fill|Выберите форму (говорит Кася)|___ herbatę.|Wolałbym;Wolałabym;Wolała|1|Женщина: wolałabym.
fill|Выберите форму|Czy ___ pan mi pomóc?|mógłby;mógłbyś;mogła|0|pan → mógłby (3-е лицо).
type|Напишите по-польски (мужчина): «Я хотел бы кофе»|chciałbym kawę|chcieć → chciałbym + вин. п. kawę.`},
{k:"grammar",lab:"Обзор падежей A1",title:"Siedem przypadków: все падежи",sub:"Вы уже знаете все семь падежей. Это шпаргалка для повторения.",
body:[{t:"Падеж;Вопросы;Когда;Пример (ж. р. / м. р.)|Mianownik (именительный);kto? co?;подлежащее;To jest kawa / chleb.|Dopełniacz (родительный);kogo? czego?;отрицание, do, bez, dla, количество;Nie ma kawy / chleba.|Celownik (дательный);komu? czemu?;кому-то дать, помочь;Daję mamie / bratu.|Biernik (винительный);kogo? co?;прямое дополнение;Piję kawę. Jem chleb.|Narzędnik (творительный);kim? czym?;z, jestem kim, транспорт;z kawą, z chlebem|Miejscownik (предложный);o kim? o czym?;w, na, o, po, przy;o kawie, o chlebie|Wołacz (звательный);—;обращение;Kasiu! Panie Andrzeju!"},
{note:"Звательный падеж (wołacz) используют при обращении: <span class='pl'>Kasia → Kasiu!, Tomek → Tomku!, pani Ewa → pani Ewo!, pan Andrzej → panie Andrzeju!</span> Подробнее — в уровне A2."},
{h:"Вежливые просьбы"},
{ex:"Mam sprawę.=У меня дело (просьба).|Czy mógłby pan…?=Не могли бы Вы…?|Czy byłaby pani tak miła…?=Не будете ли Вы так любезны…?|Przepraszam, że przeszkadzam.=Извините, что беспокою."}],
ex:`match|Соедините падеж и вопрос|mianownik=kto? co?;dopełniacz=kogo? czego?;narzędnik=kim? czym?;miejscownik=o kim? o czym?;biernik=kogo? co? (вижу)
fill|Какой падеж?|Nie mam ___. (родительный)|czasu;czas;czasem|0|После отрицания: родительный, czasu.
fill|Какой падеж?|Jadę ___. (творительный)|tramwajem;tramwaj;tramwaju|0|Транспорт: творительный.
fill|Какой падеж?|Mieszkam w ___. (предложный)|Krakowie;Kraków;Krakowa|0|w + предложный: w Krakowie.
mcq|Как обратиться к Касе?|Kasiu!;Kasia!;Kasią!|0|Звательный падеж: Kasiu!|Kasiu!`},
{k:"vocab",ex:`match|Соедините|reklamacja=жалоба на товар;paragon=чек;zwrot=возврат;gwarancja=гарантия;naprawa=ремонт
mcq|Что значит «nie działa»?|не работает;не делает;не двигается|0|działać — работать (о технике).|nie działa`}],
vocab:`# Жалоба
sprawa|дело, вопрос|Mam sprawę.|У меня к Вам дело.
reklamacja|жалоба на товар
paragon|кассовый чек
gwarancja|гарантия
zwrot pieniędzy|возврат денег
wymienić|обменять
naprawa|ремонт
działać|работать (о технике)|Telefon nie działa.|Телефон не работает.
zepsuty|сломанный
# Вежливость
pomóc|помочь|Mógłbyś mi pomóc?|Ты не мог бы мне помочь?
wdzięczny|благодарный
woleć|предпочитать
przeszkadzać|мешать, беспокоить
# Электроника
słuchawki|наушники
ładowarka|зарядка
bateria|батарея
model|модель`});
