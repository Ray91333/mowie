/* A2 · lessons 42–46 */
LX({n:42,title:"Powiedział, że…",ru:"Культура и пересказ",who:["maks","kasia","natalia"],
intro:"Наталья пропустила встречу книжного клуба, и Макс пересказывает ей, кто что сказал. Это отличный повод научиться косвенной речи.",
goals:["пересказывать чужие слова: powiedział, że…","передавать вопросы: zapytała, czy…","передавать просьбы: prosił, żeby…","говорить о книгах и культуре"],
secs:[
{k:"scene",pl:"Klub książki",ru:"Книжный клуб",place:"Kawiarnia z książkami",desc:"Наталья пришла поздно, все уже расходятся.",
lines:`natalia|Spóźniłam się! Co mówili o książce?|Я опоздала! Что говорили о книге?
maks|Kasia powiedziała, że książka jest za długa, ale bardzo jej się podobała.|Кася сказала, что книга слишком длинная, но ей очень понравилась.
natalia|A pan Andrzej? On też był?|А пан Анджей? Он тоже был?
maks|Tak. Powiedział, że czytał ją już w młodości i że płakał na końcu.|Да. Он сказал, что читал её ещё в молодости и что плакал в конце.
natalia|Naprawdę? A o co pytała prowadząca?|Правда? А о чём спрашивала ведущая?
maks|Zapytała, czy ktoś zna inne książki tej autorki. Nikt nie znał!|Спросила, знает ли кто-нибудь другие книги этой писательницы. Никто не знал!
kasia|I poprosiła, żebyśmy na następny raz przeczytali coś z poezji.|И попросила, чтобы к следующему разу мы прочитали что-нибудь из поэзии.
natalia|Poezja? Po polsku? To będzie trudne.|Поэзия? По-польски? Это будет трудно.
maks|Kasia obiecała, że nam pomoże.|Кася обещала, что нам поможет.`,
ex:`mcq|Что сказала Кася о книге?|że jest za długa, ale jej się podobała;że jest nudna;że jest za krótka|0|Kasia powiedziała, że książka jest za długa, ale bardzo jej się podobała.
mcq|О чём спрашивала ведущая?|czy ktoś zna inne książki autorki;kto przeczytał książkę;ile kosztuje książka|0|Zapytała, czy ktoś zna inne książki tej autorki.
listen|Послушайте и выберите перевод|Powiedział, że płakał na końcu.|Он сказал, что плакал в конце.;Он сказал, что не дочитал до конца.;Он сказал, что конец смешной.|0|powiedzieć, że… — сказать, что…`},
{k:"grammar",lab:"że, czy",title:"Mowa zależna: że, czy",sub:"Косвенная речь в польском проще русской: время глагола не сдвигается.",
body:[{t:"Прямая речь;Косвенная речь|Kasia: „Książka jest długa.”;Kasia powiedziała, że książka jest długa.|Tomek: „Będę jutro.”;Tomek powiedział, że będzie jutro.|Ewa: „Czy znasz tę książkę?”;Ewa zapytała, czy znam tę książkę.|Ewa: „Gdzie mieszkasz?”;Ewa zapytała, gdzie mieszkam."},
{ex:"Mówi, że jest zmęczony.=Говорит, что устал.|Zapytał, czy mam czas.=Он спросил, есть ли у меня время.|Nie wiem, czy przyjdzie.=Не знаю, придёт ли он.|Powiedziała, kiedy wróci.=Она сказала, когда вернётся."},
{trap:"«Ли» в косвенном вопросе — это <span class='pl'>czy</span> в начале: «спросил, есть <b>ли</b> время» — <span class='pl'>zapytał, czy jest czas</span>.",lb:"Ловушка для русскоязычных"}],
ex:`fill|Выберите|Powiedział, ___ jest zmęczony.|że;czy;żeby|0|Утверждение: że.
fill|Выберите|Zapytała, ___ mam czas.|czy;że;żeby|0|Вопрос «да / нет»: czy.
fill|Выберите|Nie wiem, ___ on mieszka.|gdzie;że;czy gdzie|0|Вопрос со словом gdzie остаётся.
build|Соберите: «Он сказал, что придёт завтра»|Powiedział, że przyjdzie jutro.|czy|że + будущее время.`},
{k:"grammar",lab:"żeby",title:"Prosił, żebym…: просьбы",sub:"Просьба или желание о другом человеке: żeby + форма прошедшего времени.",
body:["После <span class='pl'>prosić, chcieć (о другом), powiedzieć (= велеть)</span> идёт <span class='pl'>żeby</span> + форма на -ł с окончанием лица:",
{t:"Лицо;Форма;Пример|ja;żebym;Mama chce, żebym wrócił.|ty;żebyś;Proszę, żebyś przyszła.|on / ona;żeby;Powiedz mu, żeby zadzwonił.|my;żebyśmy;Prosiła, żebyśmy przeczytali.|wy;żebyście;Chcę, żebyście odpoczęli.|oni;żeby;Prosimy, żeby nie palili."},
{ex:"Kasia prosi, żebym jej pomógł.=Кася просит, чтобы я ей помог.|Chcę, żebyś był szczęśliwy.=Я хочу, чтобы ты был счастлив.|Ewa poprosiła, żebyśmy czytali poezję.=Эва попросила, чтобы мы читали поэзию."},
{note:"Совсем как русское «чтобы я помог», только окончание лица прилипает к żeby: <span class='pl'>żebym, żebyś, żebyśmy</span>."}],
ex:`fill|Выберите форму|Mama chce, ___ wrócił do domu. (я)|żebym;żebyś;żeby|0|ja → żebym.
fill|Выберите форму|Proszę, ___ zadzwoniła. (ты, женщина)|żebyś;żebym;żebyśmy|0|ty → żebyś.
fill|Выберите|Powiedz mu, ___ przyszedł.|żeby;że;czy|0|Просьба / приказ: żeby.
type|Напишите по-польски: «Я хочу, чтобы ты пришёл»|chcę, żebyś przyszedł;chcę żebyś przyszedł|żebyś + przyszedł.`},
{k:"vocab",ex:`match|Соедините|książka=книга;autor=автор;poezja=поэзия;powieść=роман;wiersz=стихотворение
mcq|Что значит «obiecać»?|обещать;объяснить;обсудить|0|obiecać — пообещать.|obiecać`}],
vocab:`# Культура
kultura|культура
książka|книга
powieść|роман
wiersz|стихотворение
poezja|поэзия
autor|автор
autorka|писательница
teatr|театр
wystawa|выставка
muzeum|музей
# Речь
powiedzieć|сказать|Powiedział, że przyjdzie.|Он сказал, что придёт.
zapytać|спросить
odpowiedzieć|ответить
poprosić|попросить
obiecać|пообещать
wyjaśnić|объяснить
płakać|плакать
żeby|чтобы`});

LX({n:43,title:"Gotujemy po polsku",ru:"Рецепты",who:["maks","babcia"],
intro:"Бабушка Галина по видеосвязи учит Макса готовить пироги. Макс записывает рецепт, бабушка командует, и на кухне становится жарко.",
goals:["понимать и пересказывать рецепты","использовать повелительное наклонение в инструкциях","называть меры: szklanka, łyżka, szczypta","использовать родительный падеж для количества"],
secs:[
{k:"text",title:"Pierogi ruskie babci Haliny",sub:"Рецепт, который бабушка продиктовала Максу.",
text:`Składniki na ciasto: pół kilo mąki, szklanka ciepłej wody, łyżka oleju i szczypta soli.|Ингредиенты для теста: полкило муки, стакан тёплой воды, ложка масла и щепотка соли.
Składniki na farsz: pół kilo ziemniaków, dwadzieścia deko twarogu, jedna duża cebula, sól i pieprz.|Ингредиенты для начинки: полкило картошки, двести граммов творога, одна большая луковица, соль и перец.
Najpierw ugotuj ziemniaki i zrób z nich puree. Pokrój cebulę i podsmaż ją na oleju.|Сначала отвари картошку и сделай из неё пюре. Нарежь лук и обжарь его на масле.
Wymieszaj ziemniaki z twarogiem i cebulą. Dodaj sól i dużo pieprzu.|Смешай картошку с творогом и луком. Добавь соль и много перца.
Z mąki, wody, oleju i soli zrób ciasto. Rozwałkuj je cienko i wytnij szklanką kółka.|Из муки, воды, масла и соли сделай тесто. Раскатай его тонко и вырежи стаканом кружочки.
Na każde kółko połóż łyżeczkę farszu i dobrze sklej brzegi.|На каждый кружок положи ложечку начинки и хорошо слепи края.
Gotuj pierogi w osolonej wodzie, aż wypłyną. Podawaj ze smażoną cebulką albo ze śmietaną. Smacznego!|Вари вареники в подсоленной воде, пока не всплывут. Подавай с жареным луком или со сметаной. Приятного аппетита!`,
ex:`mcq|Что в начинке «ruskie»?|ziemniaki, twaróg i cebula;mięso i kapusta;grzyby|0|Farsz: ziemniaki, twaróg, cebula.
mcq|Сколько варят вареники?|aż wypłyną;dziesięć minut;godzinę|0|Gotuj, aż wypłyną.
mcq|Чем вырезают кружочки?|szklanką;nożem;łyżką|0|Wytnij szklanką kółka.`},
{k:"scene",pl:"Lekcja gotowania",ru:"Урок кулинарии",place:"Mieszkanie Maksa, rozmowa wideo",desc:"Телефон стоит на полке, на экране бабушка Галина в фартуке.",
lines:`babcia|Maksie, masz już ciasto? Pokaż mi!|Макс, у тебя уже готово тесто? Покажи!
maks|Mam, ale jest strasznie klejące.|Готово, но оно ужасно липкое.
babcia|Dodaj jeszcze trochę mąki. Nie za dużo! Łyżkę, dwie.|Добавь ещё немного муки. Не слишком много! Ложку, две.
maks|Dobrze. A teraz?|Хорошо. А теперь?
babcia|Teraz rozwałkuj ciasto. Cieniej, cieniej! Nie śpiesz się.|Теперь раскатай тесто. Тоньше, тоньше! Не торопись.
maks|Babciu… to znaczy pani Halino, ile farszu mam położyć?|Бабушка… то есть пани Галина, сколько начинки класть?
babcia|Mów do mnie babciu, wszyscy tak mówią! Łyżeczkę na każdego pieroga.|Называй меня бабушкой, все так зовут! Ложечку на каждый вареник.
maks|Pierwszy pieróg gotowy! Trochę krzywy…|Первый вареник готов! Немного кривой…
babcia|Pierwszy zawsze jest krzywy. Ważne, że z serca!|Первый всегда кривой. Главное, что от души!`,
ex:`mcq|Какая проблема с тестом?|jest klejące;jest za suche;jest za twarde|0|Ciasto jest strasznie klejące.
mcq|Как бабушка просит её называть?|babciu;pani Halino;proszę pani|0|Mów do mnie babciu!
listen|Послушайте и выберите перевод|Nie śpiesz się.|Не торопись.;Не спи.;Не сердись.|0|śpieszyć się — торопиться.`},
{k:"grammar",lab:"Инструкции",title:"Pokrój, dodaj, wymieszaj",sub:"В рецептах используют повелительное наклонение совершенного вида (одно действие) или несовершенного (процесс).",
body:[{t:"Инфинитив;Ty!;Значение|pokroić;pokrój;нарежь|dodać;dodaj;добавь|wymieszać;wymieszaj;смешай|ugotować;ugotuj;свари|podsmażyć;podsmaż;обжарь|położyć;połóż;положи|wlać;wlej;влей|posolić;posól;посоли|gotować;gotuj;вари (процесс)|piec;piecz;пеки"},
{note:"В книгах рецептов часто используют инфинитив вместо повелительного: <span class='pl'>Ziemniaki ugotować, cebulę pokroić</span>. Так звучит более безлично."},
{ex:"Pokrój cebulę w kostkę.=Нарежь лук кубиками.|Gotuj na małym ogniu.=Вари на маленьком огне.|Piecz w piekarniku przez pół godziny.=Выпекай в духовке полчаса."}],
ex:`fill|Выберите форму|___ sól i pieprz.|Dodaj;Dodać się;Dodajesz|0|dodać → dodaj.
fill|Выберите форму|___ cebulę.|Pokrój;Pokroić;Pokroisz|0|pokroić → pokrój.
mcq|Что значит «Wymieszaj»?|Смешай.;Вымой.;Вымеряй.|0|wymieszać — смешать.|Wymieszaj
match|Соедините|ugotuj=свари;pokrój=нарежь;dodaj=добавь;połóż=положи;wlej=влей`},
{k:"grammar",lab:"Меры",title:"Szklanka mąki, szczypta soli",sub:"После мер — родительный падеж, как и в русском.",
body:[{t:"Мера;Пример|szklanka (стакан);szklanka mąki, wody|łyżka (ложка);łyżka oleju, cukru|łyżeczka (чайная ложка);łyżeczka soli|szczypta (щепотка);szczypta pieprzu|kawałek (кусок);kawałek masła|plaster (ломтик);plaster sera|ząbek (зубчик);ząbek czosnku|dekagram (deko);dwadzieścia deko twarogu"},
{ex:"Potrzebuję dwóch szklanek mąki.=Мне нужно два стакана муки.|Dodaj trzy łyżki cukru.=Добавь три ложки сахара.|Nie ma już mleka.=Молока уже нет."},
{trap:"<span class='pl'>dwie szklanki</span> (2–4 + им. п. мн. ч.), но <span class='pl'>pięć szklanek</span> (5+ + род. п. мн. ч.). Правило из урока 16 работает и на кухне."}],
ex:`fill|Выберите форму|Szklanka ___.|mąka;mąki;mąkę|1|После меры: родительный, mąki.
fill|Выберите форму|Szczypta ___.|sól;soli;solą|1|sól → soli.
fill|Выберите форму|Trzy ___ cukru.|łyżki;łyżek;łyżka|0|3 → им. п. мн. ч.: łyżki.
type|Напишите по-польски: «ложка масла (растительного)»|łyżka oleju|olej → oleju.`},
{k:"vocab",ex:`match|Соедините|mąka=мука;sól=соль;pieprz=перец;cebula=лук;śmietana=сметана
mcq|Что значит «piekarnik»?|духовка;пекарня;сковорода|0|piekarnik — духовка. Пекарня — piekarnia.|piekarnik`}],
vocab:`# Кухня
przepis|рецепт|Daj mi przepis na pierogi.|Дай мне рецепт вареников.
składniki|ингредиенты
mąka|мука
sól|соль
pieprz|перец
olej|растительное масло
twaróg|творог
śmietana|сметана
czosnek|чеснок
garnek|кастрюля
patelnia|сковорода
piekarnik|духовка
# Глаголы
gotować|варить, готовить
piec|печь
smażyć|жарить
kroić|резать
mieszać|мешать
dodać|добавить
# Меры
szklanka|стакан
łyżka|ложка
szczypta|щепотка`});

LX({n:44,title:"Gdybym wygrał milion…",ru:"Мечты и условия",who:["maks","tomek","kasia"],
intro:"В офисе разыгрывают лотерею. Пока ждут результатов, Макс, Томек и Кася мечтают, что сделали бы с миллионом злотых.",
goals:["говорить о мечтах и нереальных условиях","использовать gdyby + условное наклонение","различать jeśli (реальное) и gdyby (нереальное)","давать советы: na twoim miejscu…"],
secs:[
{k:"scene",pl:"Loteria",ru:"Лотерея",place:"Kuchnia w biurze",desc:"Все смотрят на экран, где вот-вот появятся выигрышные номера.",
lines:`tomek|Gdybym wygrał milion, kupiłbym dom w górach i nigdy nie wracałbym do biura.|Если бы я выиграл миллион, я бы купил дом в горах и никогда бы не вернулся в офис.
maks|A ja gdybym miał tyle pieniędzy, pojechałbym w podróż dookoła świata.|А я, если бы у меня было столько денег, поехал бы в кругосветное путешествие.
kasia|Ja założyłabym własne biuro architektoniczne.|А я открыла бы своё архитектурное бюро.
tomek|Nudne! Gdybyś była milionerką, mogłabyś nie pracować!|Скучно! Если бы ты была миллионершей, могла бы не работать!
kasia|Ale ja lubię pracować. Gdybym nie pracowała, nudziłabym się.|Но я люблю работать. Если бы я не работала, мне было бы скучно.
maks|A gdybyśmy wygrali razem? Podzielilibyśmy się.|А если бы мы выиграли вместе? Мы бы поделились.
tomek|Patrzcie, wyniki! Trzy, siedemnaście, dwadzieścia dwa…|Смотрите, результаты! Три, семнадцать, двадцать два…
maks|Nic. Jeśli kupimy los w przyszłym tygodniu, może będziemy mieli więcej szczęścia.|Ничего. Если купим билет на следующей неделе, может, нам повезёт больше.`,
ex:`mcq|Что сделал бы Томек?|kupiłby dom w górach;pojechałby dookoła świata;założyłby firmę|0|Kupiłbym dom w górach.
mcq|Что сделала бы Кася?|założyłaby biuro architektoniczne;nie pracowałaby;kupiłaby samochód|0|Założyłabym własne biuro architektoniczne.
listen|Послушайте и выберите перевод|Gdybym wygrał milion…|Если бы я выиграл миллион…;Когда я выиграю миллион…;Я выиграл миллион…|0|gdyby — если бы.`},
{k:"grammar",lab:"Gdyby",title:"Gdybym miał…, kupiłbym…",sub:"Нереальное условие: gdyby + форма на -ł в обеих частях, как русское «если бы… то бы…».",
body:[{t:"Лицо;gdyby…;…то бы|ja (м.);gdybym miał;kupiłbym|ja (ж.);gdybym miała;kupiłabym|ty;gdybyś miał / miała;kupiłbyś / kupiłabyś|on / ona;gdyby miał / miała;kupiłby / kupiłaby|my;gdybyśmy mieli;kupilibyśmy|oni;gdyby mieli;kupiliby"},
{ex:"Gdybym miał czas, poszedłbym z tobą.=Если бы у меня было время, я бы пошёл с тобой.|Gdyby nie padało, pojechalibyśmy nad jezioro.=Если бы не шёл дождь, мы бы поехали на озеро.|Co byś zrobiła, gdybyś wygrała?=Что бы ты сделала, если бы выиграла?"},
{note:"Частица <span class='pl'>by</span> с окончанием может стоять и отдельно, в начале фразы: <span class='pl'>Co byś zrobił?</span> = <span class='pl'>Co zrobiłbyś?</span>. Оба варианта правильные."}],
ex:`fill|Выберите форму (мужчина)|___ miał więcej czasu, czytałbym więcej.|Gdybym;Gdyby;Jeśli|0|ja → gdybym.
fill|Выберите форму|Gdybym wygrała, ___ dom. (женщина)|kupiłabym;kupiłbym;kupię|0|Женщина: kupiłabym.
fill|Выберите форму|Gdybyśmy mieli samochód, ___ nad morze.|pojechalibyśmy;pojedziemy;pojechaliśmy|0|Нереальное: pojechalibyśmy.
type|Напишите по-польски (мужчина): «Если бы у меня было время…»|gdybym miał czas|gdybym + miał.`},
{k:"grammar",lab:"Jeśli / gdyby",title:"Jeśli czy gdyby?",sub:"Реальное условие — jeśli (jeżeli) + обычное время. Нереальное — gdyby.",
body:[{t:"Тип;Конструкция;Пример|реальное (возможно);jeśli / jeżeli + будущее / настоящее;Jeśli będzie ładnie, pójdziemy na spacer.|нереальное (мечта, прошлое);gdyby + форма на -ł + by;Gdyby było ładnie, poszlibyśmy na spacer."},
{ex:"Jeśli masz czas, zadzwoń.=Если у тебя есть время, позвони.|Gdybyś miał czas, zadzwoniłbyś.=Если бы у тебя было время, ты бы позвонил."},
{h:"Советы"},
{ex:"Na twoim miejscu…=На твоём месте…|Na twoim miejscu poszedłbym do lekarza.=На твоём месте я бы пошёл к врачу.|Lepiej byłoby…=Лучше было бы…|Mógłbyś spróbować…=Ты мог бы попробовать…"}],
ex:`fill|Выберите|___ jutro będzie ładnie, pojedziemy nad jezioro.|Jeśli;Gdyby;Żeby|0|Реальное условие: jeśli + будущее.
fill|Выберите|___ był milionerem, nie pracowałbym.|Gdybym;Jeśli;Kiedy|0|Нереальное: gdybym.
mcq|Как дать совет «На твоём месте я бы отдохнул»?|Na twoim miejscu odpocząłbym.;Na twoim miejscu odpocznę.;Jeśli twoim miejscu odpoczywam.|0|Совет: na twoim miejscu + условное наклонение.|Na twoim miejscu odpocząłbym.`},
{k:"vocab",ex:`match|Соедините|marzenie=мечта;loteria=лотерея;wygrać=выиграть;milioner=миллионер;szczęście=удача, счастье
mcq|Что значит «dookoła świata»?|вокруг света;по всему миру;до конца света|0|dookoła — вокруг.|dookoła świata`}],
vocab:`# Мечты
marzenie|мечта
marzyć|мечтать|Marzę o domu w górach.|Мечтаю о доме в горах.
wygrać|выиграть
przegrać|проиграть
loteria|лотерея
los|лотерейный билет; судьба
milion|миллион
szczęście|удача; счастье|Miałem szczęście.|Мне повезло.
pech|невезение
# Условия
gdyby|если бы
jeśli|если
na twoim miejscu|на твоём месте
własny|собственный
założyć firmę|открыть фирму
podzielić się|поделиться
dookoła|вокруг
świat|мир`});

LX({n:45,title:"Od roku, za tydzień",ru:"Выражения времени",who:["maks","ewa"],
intro:"Пани Эва готовит студентов к экзамену A2 и проверяет, как они говорят о времени. Макс считает: в Польше он уже год, экзамен через неделю, а польский учит с прошлой осени.",
goals:["использовать od, przez, temu, za, w ciągu, po","спрашивать: od kiedy? jak długo? kiedy?","говорить о планах и прошлом точно во времени","повторить пройденные времена"],
secs:[
{k:"scene",pl:"Przed egzaminem",ru:"Перед экзаменом",place:"Szkoła językowa",desc:"Последнее занятие перед экзаменом. На доске: «Od kiedy? Jak długo? Kiedy?»",
lines:`ewa|Maks, od kiedy mieszkasz w Polsce?|Макс, с какого времени ты живёшь в Польше?
maks|Od roku. Przyjechałem rok temu, w październiku.|Год. Я приехал год назад, в октябре.
ewa|A jak długo uczysz się polskiego?|А как долго ты учишь польский?
maks|Uczę się od jedenastu miesięcy. Przez pierwsze dwa miesiące nic nie rozumiałem!|Учу уже одиннадцать месяцев. Первые два месяца ничего не понимал!
ewa|A kiedy jest egzamin?|А когда экзамен?
maks|Za tydzień, w sobotę. W ciągu tygodnia muszę jeszcze powtórzyć gramatykę.|Через неделю, в субботу. В течение недели мне ещё нужно повторить грамматику.
ewa|A co zrobisz po egzaminie?|А что ты будешь делать после экзамена?
maks|Pojadę do Charkowa na dwa tygodnie. Nie byłem w domu od roku.|Поеду в Харьков на две недели. Я не был дома уже год.
ewa|Na pewno zdasz. Twój polski jest coraz lepszy!|Ты точно сдашь. Твой польский всё лучше!`,
ex:`mcq|Когда Макс приехал в Польшу?|rok temu;dwa lata temu;za tydzień|0|Przyjechałem rok temu.
mcq|Когда экзамен?|za tydzień;za miesiąc;jutro|0|Za tydzień, w sobotę.
mcq|На сколько Макс поедет в Харьков?|na dwa tygodnie;na rok;na tydzień|0|Pojadę do Charkowa na dwa tygodnie.
listen|Послушайте и выберите перевод|Od kiedy mieszkasz w Polsce?|С какого времени ты живёшь в Польше?;Когда ты приехал в Польшу?;Сколько ты будешь жить в Польше?|0|od kiedy — с какого времени.`},
{k:"grammar",lab:"Предлоги времени",title:"Od, przez, temu, za, w ciągu, na",sub:"Шесть маленьких слов, которые точно размещают событие во времени.",
body:[{t:"Выражение;Падеж;Значение;Пример|od + род.;родительный;с (и до сих пор);od roku, od października|przez + вин.;винительный;в течение (весь отрезок);przez dwa miesiące|… temu;винительный;… назад;rok temu, tydzień temu|za + вин.;винительный;через (в будущем);za tydzień, za godzinę|w ciągu + род.;родительный;в течение, за (внутри отрезка);w ciągu tygodnia|na + вин.;винительный;на (запланированный срок);na dwa tygodnie|po + предл.;предложный;после;po egzaminie"},
{ex:"Pracuję tu od marca.=Работаю здесь с марта.|Przez rok mieszkałem w Kijowie.=Год я жил в Киеве.|Byłem tam dwa lata temu.=Я был там два года назад.|Wrócę za godzinę.=Вернусь через час.|Zrobię to w ciągu dnia.=Сделаю это в течение дня.|Jadę na weekend do Krakowa.=Еду в Краков на выходные."},
{trap:"<span class='pl'>temu</span> стоит после слова: <span class='pl'>rok temu</span> (год назад). И <span class='pl'>za</span> — это «через» во времени: <span class='pl'>za tydzień</span> = через неделю, а не «за неделю».",lb:"Ловушка для русскоязычных"}],
ex:`fill|Выберите|Byłem w Gdańsku dwa tygodnie ___.|temu;za;przez|0|… назад: temu.
fill|Выберите|Egzamin jest ___ tydzień.|za;temu;od|0|Через: za.
fill|Выберите|Mieszkam tu ___ roku.|od;przez;za|0|С тех пор и до сих пор: od roku.
fill|Выберите|Jadę do domu ___ dwa tygodnie.|na;przez;za|0|Запланированный срок: na.
type|Напишите по-польски: «год назад»|rok temu|rok temu.`},
{k:"grammar",lab:"Вопросы о времени",title:"Kiedy? Od kiedy? Jak długo? Na jak długo?",sub:"Каждый вопрос требует своего ответа.",
body:[{t:"Вопрос;Значение;Ответ|Kiedy?;Когда?;Wczoraj. Rok temu. Za tydzień. W sobotę.|Od kiedy?;С какого времени?;Od roku. Od października.|Jak długo?;Как долго?;Przez rok. Dwa miesiące. Od dawna.|Na jak długo?;На какой срок?;Na dwa tygodnie. Na weekend.|Do kiedy?;До какого времени?;Do piątku. Do końca roku.|Jak często?;Как часто?;Codziennie. Raz w tygodniu."},
{h:"Повторение: три времени"},
{ex:"Przyjechałem rok temu.=Прошедшее (сов.): приехал.|Uczę się od roku.=Настоящее: учу (до сих пор).|Pojadę do domu za tydzień.=Будущее (сов.): поеду.|Będę powtarzać gramatykę.=Будущее (несов.): буду повторять."}],
ex:`mcq|Ответ на «Od kiedy?»|Od marca.;Za tydzień.;Dwa razy.|0|od kiedy → od + род. п.|Od marca.
mcq|Ответ на «Na jak długo?»|Na dwa tygodnie.;Dwa tygodnie temu.;Od dwóch tygodni.|0|na jak długo → na + вин. п.|Na dwa tygodnie.
match|Соедините|rok temu=год назад;za rok=через год;od roku=уже год (с…);przez rok=в течение года;na rok=на год`},
{k:"vocab",ex:`match|Соедините|egzamin=экзамен;powtórzyć=повторить;miesiąc=месяц;godzina=час;dawno=давно
mcq|Что значит «na pewno»?|наверняка, точно;на всякий случай;наверное|0|na pewno — точно, наверняка.|na pewno`}],
vocab:`# Время
temu|назад|rok temu|год назад
za|через (о времени)|za tydzień|через неделю
od|с (какого времени)
przez|в течение
w ciągu|в течение, за
na|на (срок)
dawno|давно
niedawno|недавно
wkrótce|скоро
właśnie|как раз, только что
# Экзамен
egzamin|экзамен
certyfikat|сертификат
powtórzyć|повторить
zdać|сдать (успешно)
oblać|провалить (разг.)
na pewno|точно, наверняка
stres|стресс
wynik|результат`});

LX({n:46,title:"Do zobaczenia!",ru:"Итог курса",who:["maks","kasia","tomek","natalia","diego","ewa","andrzej"],
intro:"Макс сдал экзамен A2! Друзья собираются на Надодже, чтобы отпраздновать. Это последний урок курса: в нём история заканчивается, а грамматика A2 собрана в одном месте.",
goals:["понять большой текст и разговор без перевода","повторить падежи в единственном и множественном числе","повторить виды глагола и времена","повторить условное наклонение и косвенную речь"],
secs:[
{k:"scene",pl:"Impreza",ru:"Вечеринка",place:"Podwórko na ulicy Pomorskiej",desc:"Гирлянды во дворе, стол с пирогами. Даже Мручек вышел посмотреть.",
lines:`kasia|Uwaga, wszyscy! Maks zdał egzamin na poziomie A2!|Внимание, все! Макс сдал экзамен уровня A2!
tomek|Gratulacje, stary! Wiedziałem, że dasz radę.|Поздравляю, старик! Я знал, что ты справишься.
natalia|Ile punktów dostałeś?|Сколько баллов ты получил?
maks|Dziewięćdziesiąt dwa na sto! Najtrudniejsze było pisanie.|Девяносто два из ста! Самым трудным было письмо.
andrzej|Panie Maksie, pamięta pan, jak rok temu mówił pan tylko „dzień dobry” i „przepraszam”?|Пан Макс, помните, как год назад Вы говорили только «здравствуйте» и «извините»?
maks|Pamiętam! A teraz mogę rozmawiać z panem o wszystkim. Nawet o Mruczku.|Помню! А теперь могу говорить с Вами обо всём. Даже о Мручке.
diego|A ja wciąż mylę końcówki… Pomożesz mi, Maks?|А я всё ещё путаю окончания… Поможешь мне, Макс?
ewa|Diego, gdybyś więcej powtarzał, nie myliłbyś! Ale jestem z was wszystkich dumna.|Диего, если бы ты больше повторял, не путал бы! Но я горжусь вами всеми.
maks|Dziękuję wam wszystkim. Bez was nie dałbym rady. Następny cel: B1!|Спасибо вам всем. Без вас я бы не справился. Следующая цель: B1!
kasia|To za B1! I za nas!|Тогда за B1! И за нас!
wszyscy|Na zdrowie! Do zobaczenia na B1!|За здоровье! До встречи на B1!`,
ex:`mcq|Сколько баллов получил Макс?|92 na 100;72 na 100;100 na 100|0|Dziewięćdziesiąt dwa na sto.
mcq|Что было самым трудным?|pisanie;słuchanie;mówienie|0|Najtrudniejsze było pisanie.
mcq|Какая следующая цель Макса?|B1;C2;Hiszpański|0|Następny cel: B1!
listen|Послушайте и выберите перевод|Wiedziałem, że dasz radę.|Я знал, что ты справишься.;Я знал, что ты придёшь.;Я знал, что ты дашь совет.|0|dać radę — справиться.`},
{k:"grammar",lab:"Падежи: мн. ч.",title:"Przypadki w liczbie mnogiej",sub:"Шпаргалка: окончания множественного числа во всех падежах.",
body:[{t:"Падеж;Мужчины (studenci);Вещи, женщины (książki);Пример|mianownik;studenci;książki;To są studenci / książki.|dopełniacz;studentów;książek;Nie ma studentów / książek.|celownik;studentom;książkom;Pomagam studentom.|biernik;studentów;książki;Widzę studentów / książki.|narzędnik;studentami;książkami;Rozmawiam ze studentami.|miejscownik;studentach;książkach;Mówię o studentach / książkach."},
{note:"Во множественном числе окончания дательного (<b>-om</b>), творительного (<b>-ami</b>) и предложного (<b>-ach</b>) одинаковые для всех родов. Это сильно упрощает жизнь!"},
{trap:"Винительный мн. ч. мужчин совпадает с родительным: <span class='pl'>widzę studentów</span>. У вещей и женщин — с именительным: <span class='pl'>widzę książki, koleżanki</span>.",lb:"Ловушка"}],
ex:`fill|Выберите форму|Rozmawiam z ___.|kolegami;kolegom;kolegów|0|Творительный мн. ч.: -ami.
fill|Выберите форму|Mówimy o ___.|książkach;książkami;książek|0|Предложный мн. ч.: -ach.
fill|Выберите форму|Widzę ___. (мужчин)|studentów;studenci;studentami|0|Вин. п. мужчин = род. п.: studentów.
fill|Выберите форму|Daję prezenty ___.|dzieciom;dziećmi;dzieci|0|Дательный мн. ч.: -om.`},
{k:"grammar",lab:"Обзор A2",title:"Podsumowanie A2",sub:"Всё главное из уровня A2 на одной странице.",
body:[{t:"Тема;Пример|вид глагола;Czytałem książkę (процесс). Przeczytałem książkę (результат).|приставки движения;przyjść, wyjść, wejść; przyjechać, wyjechać|повелительное;Zrób! Nie rób! Chodźmy!|условное;Chciałbym… Gdybym miał czas, poszedłbym.|косвенная речь;Powiedział, że… Zapytał, czy… Prosił, żebym…|który;Dom, w którym mieszkam.|мужско-личная форма;Ci mili studenci byli zmęczeni.|дательный;Pomagam mamie. Jest mi zimno. Brakuje mi domu.|звательный;Kasiu! Panie Andrzeju!|время;rok temu, za tydzień, od roku, przez rok"},
{note:"Поздравляем! Вы прошли курс от алфавита до уровня A2. Продолжайте повторять слова в разделе Słownictwo и возвращайтесь к урокам, где задания вызывали трудности."}],
ex:`fill|Выберите|Gdybym ___ czas, poszedłbym z wami.|miał;mam;będę miał|0|Нереальное условие: gdybym miał.
fill|Выберите|To jest dom, w ___ mieszkam.|którym;który;którego|0|dom (м. р.), w + предл.: którym.
fill|Выберите|Kasia powiedziała, ___ przyjdzie.|że;czy;żeby|0|Утверждение: że.
fill|Выберите|Moi koledzy ___ bardzo zmęczeni.|byli;były;był|0|Мужчины: byli.
mcq|Как обратиться к пану Анджею?|Panie Andrzeju!;Pan Andrzej!;Pana Andrzeja!|0|Звательный падеж: Panie Andrzeju!|Panie Andrzeju!`},
{k:"vocab",ex:`match|Соедините|impreza=вечеринка;gratulacje=поздравления;cel=цель;dumny=гордый;punkt=балл
mcq|Что значит «dać radę»?|справиться;дать совет;дать слово|0|dać radę — справиться (с чем-то). Dam radę! — Справлюсь!|dać radę`}],
vocab:`# Праздник
impreza|вечеринка
gratulacje|поздравления|Gratulacje!|Поздравляю!
świętować|праздновать
toast|тост
Na zdrowie!|За здоровье!
# Успех
sukces|успех
cel|цель
punkt|балл; пункт
poziom|уровень
dać radę|справиться|Dasz radę!|Ты справишься!
dumny|гордый|Jestem z ciebie dumna.|Я тобой горжусь.
mylić|путать
wciąż|всё ещё
# Прощание
Do zobaczenia!|До встречи!
Trzymaj się!|Держись! Пока!
Powodzenia!|Удачи!`});
