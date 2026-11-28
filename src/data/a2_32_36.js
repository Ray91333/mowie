/* A2 · lessons 32–36 */
LX({n:32,title:"Wigilia u Kasi",ru:"Рождество и традиции",who:["maks","kasia","babcia"],
intro:"Кася приглашает Макса на Вигилию (сочельник) к своей семье в Гданьск. Бабушка Галина объясняет традиции, а Макс учится желать всего хорошего по-польски.",
goals:["рассказывать о польских праздничных традициях","желать: życzę ci zdrowia","использовать życzyć + дательный + родительный","повторить родительный падеж"],
secs:[
{k:"text",title:"Polska Wigilia",sub:"Короткий текст о польском сочельнике.",
text:`Wigilia to wieczór dwudziestego czwartego grudnia. Dla wielu Polaków to najważniejszy wieczór w roku.|Вигилия — это вечер двадцать четвёртого декабря. Для многих поляков это самый важный вечер в году.
Kolację zaczyna się, kiedy na niebie pojawia się pierwsza gwiazdka. Wcześniej wszyscy dzielą się opłatkiem i składają sobie życzenia.|Ужин начинают, когда на небе появляется первая звезда. Перед этим все делятся облаткой и поздравляют друг друга.
Na stole jest dwanaście potraw, ale nie ma mięsa. Je się barszcz z uszkami, pierogi z kapustą i grzybami, karpia i makowiec.|На столе двенадцать блюд, но нет мяса. Едят борщ с ушками, вареники с капустой и грибами, карпа и маковый рулет.
Przy stole zawsze jest jedno wolne miejsce dla niespodziewanego gościa.|За столом всегда есть одно свободное место для неожиданного гостя.
Po kolacji rodzina otwiera prezenty, śpiewa kolędy, a o północy niektórzy idą na pasterkę do kościoła.|После ужина семья открывает подарки, поёт колядки, а в полночь некоторые идут в костёл на пастерку (ночную мессу).`,
ex:`mcq|Когда начинают ужин в Вигилию?|kiedy pojawia się pierwsza gwiazdka;o północy;po kościele|0|Kolację zaczyna się, kiedy pojawia się pierwsza gwiazdka.
mcq|Сколько блюд на столе?|dwanaście;dwadzieścia cztery;siedem|0|Na stole jest dwanaście potraw.
mcq|Для кого свободное место?|dla niespodziewanego gościa;dla babci;dla Mikołaja|0|Jedno wolne miejsce dla niespodziewanego gościa.
listen|Послушайте и выберите перевод|Dzielimy się opłatkiem.|Мы делимся облаткой.;Мы открываем подарки.;Мы поём колядки.|0|opłatek — тонкая пресная облатка, которой делятся в Вигилию.`},
{k:"scene",pl:"Przy stole",ru:"За столом",place:"Dom rodziny Nowaków, Gdańsk",desc:"В окне первая звезда. Бабушка Галина держит в руках облатку.",
lines:`babcia|Maksie, podzielmy się opłatkiem. Życzę ci zdrowia, szczęścia i dużo sukcesów w Polsce.|Макс, давай поделимся облаткой. Желаю тебе здоровья, счастья и много успехов в Польше.
maks|Dziękuję, pani Halino. Ja też życzę pani zdrowia i radości.|Спасибо, пани Галина. Я тоже желаю Вам здоровья и радости.
kasia|A ja życzę ci, żebyś szybko nauczył się polskiego!|А я желаю тебе поскорее выучить польский!
maks|Dziękuję! Życzę ci spokojnych świąt i odpoczynku od pracy.|Спасибо! Желаю тебе спокойных праздников и отдыха от работы.
babcia|Proszę, siadajcie. Najpierw barszcz z uszkami.|Пожалуйста, садитесь. Сначала борщ с ушками.
maks|Dlaczego tu jest pusty talerz?|Почему здесь пустая тарелка?
kasia|Dla niespodziewanego gościa. Taka tradycja.|Для неожиданного гостя. Такая традиция.
maks|Piękna tradycja. Wesołych Świąt!|Прекрасная традиция. Весёлого Рождества!
babcia|Wesołych Świąt, kochani!|Весёлого Рождества, дорогие!`,
ex:`mcq|Что желает бабушка Максу?|zdrowia, szczęścia i sukcesów;dużo prezentów;dobrej pracy|0|Życzę ci zdrowia, szczęścia i dużo sukcesów w Polsce.
mcq|Как поздравить с Рождеством?|Wesołych Świąt!;Wszystkiego najlepszego z okazji urodzin!;Sto lat!|0|Wesołych Świąt! — Весёлого Рождества! (дословно «весёлых праздников»).|Wesołych Świąt!
build|Соберите: «Желаю тебе здоровья»|Życzę ci zdrowia.|zdrowie|życzyć + кому (ci) + чего (zdrowia).`},
{k:"grammar",lab:"życzyć",title:"Życzę ci zdrowia: пожелания",sub:"Глагол życzyć: кому — дательный, чего — родительный падеж.",
body:[{t:"Им. п.;Род. п. (чего желаем);Пример|zdrowie;zdrowia;Życzę ci zdrowia.|szczęście;szczęścia;Życzę wam szczęścia.|sukces;sukcesu / sukcesów;Życzę ci sukcesów.|miłość;miłości;Życzę wam miłości.|spokojne święta;spokojnych świąt;Życzę spokojnych świąt.|wesołe święta;wesołych świąt;Wesołych Świąt!"},
{ex:"Życzę ci wszystkiego najlepszego.=Желаю тебе всего наилучшего.|Smacznego!=Приятного аппетита! (род. п.: smaczny)|Powodzenia!=Удачи!|Szczęśliwego Nowego Roku!=Счастливого Нового года!|Udanego weekendu!=Удачных выходных!"},
{note:"Многие короткие пожелания — это просто родительный падеж без глагола: <span class='pl'>Smacznego! Powodzenia! Miłego dnia!</span> (подразумевается «życzę»)."}],
ex:`fill|Выберите форму|Życzę ci ___.|szczęście;szczęścia;szczęściem|1|życzyć + родительный.
fill|Выберите форму|Życzę ___ zdrowia. (маме)|mama;mamie;mamy|1|Кому? — дательный: mamie.
mcq|Как пожелать удачи?|Powodzenia!;Szczęście!;Udany!|0|Powodzenia! — удачи!|Powodzenia!
type|Напишите по-польски: «Весёлого Рождества!»|wesołych świąt|Wesołych Świąt!`},
{k:"grammar",lab:"Повтор: родительный",title:"Dopełniacz: всё вместе",sub:"Родительный падеж — самый частый в польском. Собираем все случаи вместе.",
body:[{t:"Когда;Пример|после отрицания;Nie ma mięsa. Nie mam czasu.|после do, od, bez, dla, z (откуда), u, obok, koło;do domu, bez cukru, dla babci, z Gdańska, u Kasi|после количества;dużo ludzi, kilo jabłek, pięć potraw|принадлежность;dom babci, mieszkanie Maksa|даты;dwudziestego czwartego grudnia|глаголы: szukać, potrzebować, życzyć, uczyć się, bać się;szukam pracy, potrzebuję pomocy, boję się psa"},
{h:"Окончания"},{t:"Род;Ед. ч.;Примеры;Мн. ч.;Примеры|м. р. одушевлённый;всегда -a;brata, Tomka, psa;-ów (-y, -i);Polaków, psów, lekarzy|м. р. неодушевлённый;-a или -u (запоминать);sera, chleba / czasu, domu;-ów (-y, -i);serów, domów, pokoi|ж. р.;-y / -i;kawy, książki, kuchni;нулевое (-i);kaw, książek, kuchni|ср. р.;-a;mięsa, okna;нулевое;okien, jabłek"},"Особые формы: <span class='pl'>brat → brata, мн. ч. braci; człowiek → człowieka, мн. ч. ludzi; dziecko → dziecka, мн. ч. dzieci</span>. Прилагательное: м. р. и ср. р. <b>-ego</b>, ж. р. <b>-ej</b>, мн. ч. <b>-ych / -ich</b>: <span class='pl'>nowego kolegi, dobrej kawy, nowych książek</span>.",{ex:"Potrzebuję twojej pomocy.=Мне нужна твоя помощь.|Szukam prezentu dla babci.=Ищу подарок для бабушки.|Boję się egzaminu.=Боюсь экзамена."},
{trap:"<span class='pl'>potrzebować</span> + родительный: <span class='pl'>potrzebuję czasu</span> (мне нужно время). Конструкция «мне нужно» тут не работает: «нуждаюсь в чём».",lb:"Ловушка для русскоязычных"}],
ex:`fill|Выберите форму|Szukam ___ dla Kasi.|prezent;prezentu;prezentem|1|szukać + родительный.
fill|Выберите форму|Potrzebuję ___.|pomoc;pomocy;pomocą|1|potrzebować + родительный.
fill|Выберите форму|To jest dom ___.|babcia;babci;babcią|1|Принадлежность: родительный, babci.
mcq|Что значит «Boję się psa»?|Я боюсь собаки.;Я бью собаку.;Я ищу собаку.|0|bać się + родительный: боюсь кого/чего.|Boję się psa.
fill|Выберите форму|Szukam ___ (nowy kolega).|nowy kolega;nowemu koledze;nowego kolegi|2|szukać + родительный: прилагательное -ego, kolega склоняется как женские → kolegi.
fill|Выберите форму|Nie ma tu ___ (dobra kawiarnia).|dobrej kawiarni;dobrą kawiarnię;dobra kawiarnia|0|nie ma + родительный: ж. р. -ej, -i.`},
{k:"vocab",ex:`match|Соедините|choinka=ёлка;kolęda=колядка;gwiazdka=звёздочка;opłatek=облатка;karp=карп
mcq|Что такое «pasterka»?|ночная рождественская месса;пастушка;пастила|0|Pasterka — месса в полночь с 24 на 25 декабря.|pasterka`}],
vocab:`# Рождество
Boże Narodzenie|Рождество
Wigilia|сочельник (24 декабря)
święta|праздники|Wesołych Świąt!|Весёлого Рождества!
choinka|ёлка
prezent|подарок
kolęda|колядка
opłatek|облатка
gwiazdka|звёздочка
barszcz|борщ
karp|карп
makowiec|маковый рулет
# Новый год и Пасха
Sylwester|канун Нового года
Nowy Rok|Новый год
Wielkanoc|Пасха
pisanka|расписное пасхальное яйцо
# Пожелания
życzyć|желать|Życzę ci zdrowia.|Желаю тебе здоровья.
życzenia|пожелания
Powodzenia!|Удачи!
tradycja|традиция
gość|гость`});

LX({n:33,title:"Piszę maila",ru:"Письма и сообщения",who:["maks","ewa"],
intro:"Макс пишет два письма: официальное — пани Эве с вопросом о сертификационном экзамене, и неофициальное — Диего, который уехал на каникулы в Испанию.",
goals:["писать официальные и неофициальные письма","использовать звательный падеж: Kasiu, Tomku, panie Andrzeju","знать формулы начала и конца письма","различать pan / pani в письме"],
secs:[
{k:"text",title:"Dwa maile Maksa",sub:"Сравните официальное и дружеское письмо.",
text:`Szanowna Pani,|Уважаемая пани,
piszę w sprawie egzaminu certyfikatowego z języka polskiego na poziomie A2. Chciałbym zapytać, kiedy odbędzie się najbliższy egzamin i ile kosztuje.|пишу по поводу сертификационного экзамена по польскому языку уровня A2. Хотел бы спросить, когда состоится ближайший экзамен и сколько он стоит.
Będę wdzięczny za odpowiedź.|Буду благодарен за ответ.
Z wyrazami szacunku, Maksym Kowalenko|С уважением, Максим Коваленко
Cześć Diego!|Привет, Диего!
Co słychać w Hiszpanii? Tutaj zimno i pada śnieg. Tęsknimy za tobą! Kasia i Natalia pozdrawiają.|Как дела в Испании? Тут холодно и идёт снег. Мы по тебе скучаем! Кася и Наталья передают привет.
Wracaj szybko, bo nie mam z kim grać w piłkę. Pisz!|Возвращайся скорее, а то мне не с кем играть в футбол. Пиши!
Ściskam, Maks|Обнимаю, Макс`,
ex:`mcq|Зачем Макс пишет пани Эве?|w sprawie egzaminu;w sprawie pracy;żeby zaprosić ją na kawę|0|Piszę w sprawie egzaminu certyfikatowego.
mcq|Как закончить официальное письмо?|Z wyrazami szacunku;Ściskam;Buziaki|0|Z wyrazami szacunku — с уважением.|Z wyrazami szacunku
mcq|Что значит «Tęsknimy za tobą»?|Мы по тебе скучаем.;Мы тебя ждём.;Мы о тебе думаем.|0|tęsknić za + творительный — скучать по.|Tęsknimy za tobą.`},
{k:"grammar",lab:"Звательный падеж",title:"Wołacz: Kasiu! Tomku!",sub:"При обращении к человеку польский использует отдельную форму — звательный падеж.",
body:[{t:"Им. п.;Wołacz;Правило|Kasia, Ania;Kasiu! Aniu!;женские уменьшительные на -ia → -iu|Ewa, Marta;Ewo! Marto!;женские на -a → -o|Tomek, Bartek;Tomku! Bartku!;-ek → -ku|Piotr, Adam;Piotrze! Adamie!;как предложный падеж|Andrzej, Maks;Andrzeju! Maksie!;мягкие и k, g, ch → -u, остальные → -e|pan, pani;panie! pani!;обращение «пан»"},
{ex:"Kasiu, gdzie jesteś?=Кася, ты где?|Dzień dobry, pani Ewo!=Здравствуйте, пани Эва!|Panie Andrzeju, mam pytanie.=Пан Анджей, у меня вопрос.|Kochana Mamo!=Дорогая мама!"},
{trap:"В разговоре молодёжь часто говорит просто «Kasia!», но в письмах и вежливой речи звательный обязателен: <span class='pl'>Szanowny Panie Profesorze!</span>"}],
ex:`fill|Выберите форму|Cześć, ___!|Tomek;Tomku;Tomka|1|Tomek → Tomku!
fill|Выберите форму|Dzień dobry, pani ___!|Ewa;Ewo;Ewę|1|Ewa → Ewo!
fill|Выберите форму|___ Andrzeju, dziękuję!|Pan;Panie;Pana|1|Обращение: panie.
mcq|Как обратиться к Касе в письме?|Droga Kasiu!;Droga Kasia!;Drogi Kasię!|0|Kasia → Kasiu, прилагательное ж. р.: droga.|Droga Kasiu!`},
{k:"grammar",lab:"Формулы письма",title:"Jak zacząć i skończyć list",sub:"Официальный и дружеский стиль.",
body:[{t:"Часть письма;Официально;Неофициально|начало;Szanowny Panie! / Szanowna Pani! / Szanowni Państwo!;Cześć Diego! / Droga Kasiu! / Kochana Mamo!|первое предложение;Piszę w sprawie…;Co słychać? / Dziękuję za maila!|просьба;Uprzejmie proszę o…;Napisz, proszę…|конец;Z wyrazami szacunku / Z poważaniem / Pozdrawiam;Ściskam / Buziaki / Do usłyszenia / Pa!"},
{note:"В официальном письме <span class='pl'>Pan, Pani, Państwo</span> часто пишут с большой буквы — это знак уважения: <span class='pl'>Dziękuję Pani za pomoc.</span>"},
{ex:"W załączniku przesyłam CV.=Во вложении отправляю резюме.|Z góry dziękuję.=Заранее спасибо.|Czekam na odpowiedź.=Жду ответа.|Pozdrów ode mnie rodziców!=Передай от меня привет родителям!"}],
ex:`mcq|Как начать письмо в учреждение?|Szanowni Państwo,;Cześć!;Kochani,|0|Официально к группе: Szanowni Państwo.|Szanowni Państwo
mcq|Что значит «W załączniku»?|Во вложении;В заключение;В заголовке|0|załącznik — вложение.|w załączniku
match|Соедините|Ściskam=Обнимаю;Z góry dziękuję=Заранее спасибо;Pozdrawiam=С приветом;Do usłyszenia=До связи;Co słychać=Как дела`},
{k:"vocab",ex:`match|Соедините|mail=имейл;odpowiedź=ответ;temat=тема;adres=адрес;załącznik=вложение
mcq|Что значит «tęsknić»?|скучать (по кому-то);тосковать от скуки;торопиться|0|tęsknić za kimś — скучать по кому-то. Скучать без дела — nudzić się.|tęsknić`}],
vocab:`# Письма
mail|электронное письмо
wiadomość|сообщение
list|письмо
odpowiedź|ответ
temat|тема
załącznik|вложение
nadawca|отправитель
odbiorca|получатель
# Формулы
Szanowny Panie|Уважаемый пан
Szanowna Pani|Уважаемая пани
Z wyrazami szacunku|С уважением
Pozdrawiam|С приветом
Ściskam|Обнимаю
Co słychać?|Как дела? Что нового?
Z góry dziękuję|Заранее спасибо
# Глаголы
tęsknić za|скучать по|Tęsknię za domem.|Скучаю по дому.
pozdrawiać|передавать привет
wracać|возвращаться
odpisać|ответить (на письмо)
przesłać|переслать, отправить`});

LX({n:34,title:"Przyjść, wyjść, wejść",ru:"Движение пешком",who:["maks","kasia"],
intro:"Кася приходит к Максу в гости, но опаздывает. Пока они ждут Томека, оказывается, что все глаголы движения в польском, как и в русском, меняют смысл с приставкой.",
goals:["использовать глаголы с приставками от iść: przyjść, wyjść, wejść","понимать значения приставок przy-, wy-, w-, prze-, do-, od-, po-","различать пары przychodzić / przyjść","говорить, кто куда пришёл и ушёл"],
secs:[
{k:"scene",pl:"Kto przyszedł?",ru:"Кто пришёл?",place:"Mieszkanie Maksa",desc:"Звонок в дверь. На часах 19:20, а договаривались на семь.",
lines:`maks|O, jesteś! Wejdź, proszę.|О, ты пришла! Заходи, пожалуйста.
kasia|Przepraszam za spóźnienie! Wyszłam z domu za późno, a potem weszłam do sklepu po wino.|Извини за опоздание! Я вышла из дома слишком поздно, а потом зашла в магазин за вином.
maks|Nie ma problemu. Tomek jeszcze nie przyszedł.|Без проблем. Томек ещё не пришёл.
kasia|Pewnie poszedł najpierw na siłownię.|Наверное, сначала пошёл в спортзал.
maks|Mówił, że przyjdzie o wpół do ósmej. Przejdźmy do pokoju.|Говорил, что придёт в половине восьмого. Пойдём в комнату.
kasia|Słyszysz? Ktoś podchodzi do drzwi.|Слышишь? Кто-то подходит к двери.
tomek|Cześć! Doszedłem w końcu! Przeszedłem przez cały park pieszo.|Привет! Я наконец дошёл! Прошёл через весь парк пешком.
maks|Wchodź! A gdzie twój samochód?|Заходи! А где твоя машина?
tomek|Odszedł do warsztatu. Żart! Jest w naprawie.|Ушла в мастерскую. Шутка! Она в ремонте.`,
ex:`mcq|Почему Кася опоздала?|wyszła z domu za późno;zgubiła się;tramwaj się spóźnił|0|Wyszłam z domu za późno, a potem weszłam do sklepu.
mcq|Как Томек дошёл?|pieszo przez park;samochodem;tramwajem|0|Przeszedłem przez cały park pieszo.
listen|Послушайте и выберите перевод|Tomek jeszcze nie przyszedł.|Томек ещё не пришёл.;Томек уже ушёл.;Томек не придёт.|0|przyjść — прийти.`},
{k:"grammar",lab:"Приставки",title:"Przedrostki: przy-, wy-, w-, prze-…",sub:"Приставки почти совпадают с русскими. Совершенный вид — от iść, несовершенный — от chodzić.",
body:[{t:"Приставка;Значение;Совершенный (от iść);Несовершенный (от chodzić)|przy-;при-;przyjść (прийти);przychodzić|wy-;вы-;wyjść (выйти);wychodzić|w-;в-;wejść (войти);wchodzić|prze-;пере-, про-;przejść (перейти, пройти);przechodzić|do-;до-;dojść (дойти);dochodzić|od-;от-, у-;odejść (отойти, уйти);odchodzić|po-;по- (начало);pójść (пойти);—|pod-;под-;podejść (подойти);podchodzić|z-;с- (вниз);zejść (сойти, спуститься);schodzić"},
{ex:"Przyjdę jutro.=Я приду завтра.|Wyszedł z domu.=Он вышел из дома.|Proszę wejść.=Входите, пожалуйста.|Przejdź przez ulicę.=Перейди через улицу."},
{trap:"<span class='pl'>-jść</span> после приставки: <span class='pl'>przyjść, wyjść, dojść</span>. Но <span class='pl'>wejść</span> и <span class='pl'>zejść</span> пишутся с одним j."}],
ex:`fill|Выберите глагол|Kasia ___ z domu o siódmej.|wyszła;weszła;przeszła|0|wy- — выйти.
fill|Выберите глагол|Proszę ___!|wejść;wyjść;dojść|0|Приглашение войти: wejść.
fill|Выберите глагол|Tomek ___ jutro o ósmej.|przyjdzie;wyjdzie;odejdzie|0|przy- — прийти.
fill|Выберите глагол|Codziennie ___ przez park.|przechodzę;przejdę;przeszedłem|0|Регулярно: несовершенный, przechodzę.
match|Соедините|przyjść=прийти;wyjść=выйти;wejść=войти;przejść=перейти;odejść=уйти`},
{k:"grammar",lab:"Формы",title:"Przyjść: настоящее, прошлое, будущее",sub:"У глаголов от iść одна схема форм.",
body:[{t:"Время;ja;ty;on;ona;oni|будущее (сов.);przyjdę;przyjdziesz;przyjdzie;przyjdzie;przyjdą|прошедшее;przyszedłem / przyszłam;przyszedłeś / przyszłaś;przyszedł;przyszła;przyszli|настоящее (несов.);przychodzę;przychodzisz;przychodzi;przychodzi;przychodzą"},
{ex:"O której przyjdziesz?=Во сколько придёшь?|Przyszli wszyscy.=Пришли все.|Zawsze przychodzi spóźniony.=Он всегда приходит с опозданием.|Wyjdźmy na spacer.=Давай выйдем погулять."},
{note:"По той же схеме: <span class='pl'>wyjdę, wyszedłem / wyszłam; wejdę, wszedłem / weszłam; dojdę, doszedłem / doszłam</span>."}],
ex:`fill|Выберите форму (о Касе)|Kasia ___ o siódmej.|przyszła;przyszedł;przyjdę|0|ona → przyszła.
fill|Выберите форму|O której ___ do domu?|wrócisz;wyjdziesz;wejdziesz|0|Вернуться: wrócić (wrócisz).
fill|Выберите форму (говорит Макс)|Wczoraj ___ z pracy o osiemnastej.|wyszedłem;wyszłam;wyjdę|0|Мужчина, прошлое: wyszedłem.
type|Напишите по-польски: «Я приду завтра»|przyjdę jutro|przyjść → przyjdę.`},
{k:"vocab",ex:`match|Соедините|spóźnienie=опоздание;spacer=прогулка;warsztat=мастерская;drzwi=дверь;wrócić=вернуться
mcq|Что значит «po wino» в «weszłam do sklepu po wino»?|за вином;после вина;по вину|0|po + вин. п. — за чем-то: idę po chleb.|po wino`}],
vocab:`# Глаголы движения
przyjść|прийти|Przyjdę o siódmej.|Приду в семь.
przychodzić|приходить
wyjść|выйти|Wyszłam z domu.|Я вышла из дома.
wychodzić|выходить
wejść|войти|Proszę wejść!|Входите!
wchodzić|входить
przejść|перейти, пройти
dojść|дойти
odejść|уйти, отойти
podejść|подойти
zejść|спуститься, сойти
wrócić|вернуться
# Полезное
spóźnić się|опоздать
spóźnienie|опоздание
spacer|прогулка
iść po|идти за (чем-то)|Idę po chleb.|Иду за хлебом.
pewnie|наверное`});

LX({n:35,title:"Przyjechać, wyjechać",ru:"Поездки на транспорте",who:["maks","kasia","natalia"],
intro:"Летом друзья едут на машине Томека в Гданьск. В дороге всё идёт не по плану: пробки, объезды и неожиданные остановки.",
goals:["использовать глаголы с приставками от jechać","различать przyjechać / przyjeżdżać","рассказывать о поездке","понимать дорожные слова: korek, objazd, stacja benzynowa"],
secs:[
{k:"scene",pl:"W drodze do Gdańska",ru:"По дороге в Гданьск",place:"Autostrada A1",desc:"Пятница, 15:00. Машина Томека, на заднем сиденье Кася и Наталья, за рулём Макс.",
lines:`natalia|Kiedy wyjechaliśmy z Wrocławia? O dwunastej?|Когда мы выехали из Вроцлава? В двенадцать?
maks|Tak. Mieliśmy przyjechać do Gdańska o osiemnastej, ale jest wielki korek.|Да. Мы должны были приехать в Гданьск в восемнадцать, но огромная пробка.
kasia|Zjedź na następną stację benzynową. Musimy zatankować i chcę kawę.|Съезжай на следующую заправку. Надо заправиться, и я хочу кофе.
maks|Dobrze. A potem objedziemy korek bocznymi drogami.|Хорошо. А потом объедем пробку по боковым дорогам.
natalia|Uwaga, przejeżdżamy przez most! Jaki piękny widok na Wisłę.|Внимание, проезжаем по мосту! Какой красивый вид на Вислу.
kasia|Mama dzwoniła. Pyta, kiedy dojedziemy.|Мама звонила. Спрашивает, когда доедем.
maks|Powiedz, że dojedziemy około dwudziestej.|Скажи, что доедем около двадцати.
kasia|Mama mówi, że jak przyjedziemy, kolacja będzie czekać.|Мама говорит, что когда приедем, ужин будет ждать.
natalia|To jedźmy szybciej… ale ostrożnie!|Тогда поехали быстрее… но осторожно!`,
ex:`mcq|Почему они опаздывают?|jest wielki korek;zepsuł się samochód;zgubili się|0|Jest wielki korek.
mcq|Когда они доедут?|około dwudziestej;o osiemnastej;o północy|0|Dojedziemy około dwudziestej.
listen|Послушайте и выберите перевод|Kiedy wyjechaliśmy z Wrocławia?|Когда мы выехали из Вроцлава?;Когда мы приехали во Вроцлав?;Когда мы едем во Вроцлав?|0|wyjechać — выехать.`},
{k:"grammar",lab:"Приставки + jechać",title:"Przyjechać, wyjechać, przejechać…",sub:"Те же приставки, что и у iść. Совершенный вид от jechać, несовершенный — от -jeżdżać.",
body:[{t:"Приставка;Совершенный;Несовершенный;Значение|przy-;przyjechać;przyjeżdżać;приехать|wy-;wyjechać;wyjeżdżać;выехать, уехать|w-;wjechać;wjeżdżać;въехать|prze-;przejechać;przejeżdżać;проехать, переехать|do-;dojechać;dojeżdżać;доехать|od-;odjechać;odjeżdżać;отъехать, уехать|z-;zjechać;zjeżdżać;съехать|ob-;objechać;objeżdżać;объехать|po-;pojechać;—;поехать"},
{ex:"Pociąg odjeżdża o ósmej.=Поезд отправляется в восемь.|Przyjechałam wczoraj.=Я приехала вчера.|Wyjeżdżamy w piątek.=Мы уезжаем в пятницу.|Jak dojechać do centrum?=Как доехать до центра?"},
{t:"Формы;ja;ty;on / ona;my;oni|будущее;przyjadę;przyjedziesz;przyjedzie;przyjedziemy;przyjadą|прошедшее (м. / ж.);przyjechałem / przyjechałam;przyjechałeś / przyjechałaś;przyjechał / przyjechała;przyjechaliśmy;przyjechali"},
{trap:"<span class='pl'>przejechać</span> — и «проехать (мимо, через)», и «переехать (кого-то машиной)». А переехать жить — <span class='pl'>przeprowadzić się</span>!",lb:"Ловушка для русскоязычных"}],
ex:`fill|Выберите глагол|Kiedy ___ do Gdańska?|przyjedziecie;wyjedziecie;zjedziecie|0|приехать: przyjechać.
fill|Выберите глагол|Pociąg ___ z peronu drugiego.|odjeżdża;przyjeżdża się;dojeżdża się|0|Отправляется: odjeżdża.
fill|Выберите глагол|Musimy ___ korek.|objechać;przyjechać;wjechać|0|Объехать: objechać.
fill|Выберите форму (говорит Кася)|Wczoraj ___ z Krakowa.|przyjechałam;przyjechałem;przyjadę|0|Женщина, прошлое: przyjechałam.
type|Напишите по-польски: «Как доехать до вокзала?»|jak dojechać do dworca|dojechać do + род. п.`},
{k:"grammar",lab:"В дороге",title:"Na drodze: в дороге",sub:"Слова, которые пригодятся водителю и пассажиру.",
body:[{ex:"korek=пробка|objazd=объезд|stacja benzynowa=заправка|zatankować=заправить(ся)|autostrada=автострада|zjazd=съезд|prawo jazdy=водительские права|parking=парковка|mandat=штраф|ograniczenie prędkości=ограничение скорости|wypadek=авария|pas=полоса; ремень"},
{note:"В Польше на автострадах платят за проезд: <span class='pl'>opłata za autostradę</span>. А на заправке часто нужно назвать номер колонки: <span class='pl'>Dystrybutor numer trzy</span>."}],
ex:`match|Соедините|korek=пробка;objazd=объезд;mandat=штраф;wypadek=авария;prawo jazdy=водительские права
mcq|Что значит «zatankować»?|заправить машину;застрять в пробке;припарковаться|0|zatankować — заправить (бак).|zatankować`},
{k:"vocab",ex:`match|Соедините|kierowca=водитель;pasażer=пассажир;droga=дорога;widok=вид;bagażnik=багажник
mcq|Что значит «ostrożnie»?|осторожно;острожно;быстро|0|ostrożny — осторожный.|ostrożnie`}],
vocab:`# Глаголы
przyjechać|приехать|Przyjechaliśmy wieczorem.|Мы приехали вечером.
wyjechać|выехать, уехать
dojechać|доехать
odjechać|отъехать, уехать
przejechać|проехать
zjechać|съехать
objechać|объехать
pojechać|поехать
zatankować|заправить(ся)
# Дорога
droga|дорога
korek|пробка
objazd|объезд
stacja benzynowa|заправка
autostrada|автострада
kierowca|водитель
pasażer|пассажир
bagażnik|багажник
mandat|штраф
ostrożnie|осторожно`});

LX({n:36,title:"Nad morzem",ru:"Отпуск у моря",who:["maks","kasia","natalia"],
intro:"Друзья гуляют по Сопоту и Гданьску. Кася показывает места, которые любит, а Макс учится строить длинные предложения со словом «который».",
goals:["описывать места и людей придаточными предложениями","использовать który, która, które в разных падежах","говорить о море и пляже","понимать короткий текст о Гданьске"],
secs:[
{k:"text",title:"Trójmiasto",sub:"Текст о трёх городах на Балтийском море.",
text:`Trójmiasto to trzy miasta, które leżą obok siebie nad Morzem Bałtyckim: Gdańsk, Sopot i Gdynia.|Тромясто — это три города, которые расположены рядом друг с другом на Балтийском море: Гданьск, Сопот и Гдыня.
Gdańsk to miasto, w którym zaczęła się historia „Solidarności”. Ma piękne stare miasto, które zniszczono w czasie wojny i odbudowano.|Гданьск — город, в котором началась история «Солидарности». У него красивый старый город, который разрушили во время войны и восстановили.
Sopot to kurort, do którego latem przyjeżdża bardzo dużo turystów. Najbardziej znane jest molo, które ma ponad pięćset metrów.|Сопот — курорт, в который летом приезжает очень много туристов. Самое известное — мол длиной более пятисот метров.
Gdynia to młode miasto z dużym portem. Mieszka tam ciocia Kasi, która zawsze zaprasza wszystkich na ryby.|Гдыня — молодой город с большим портом. Там живёт тётя Каси, которая всегда приглашает всех на рыбу.`,
ex:`mcq|Какие города входят в Тромясто?|Gdańsk, Sopot, Gdynia;Gdańsk, Gdynia, Hel;Sopot, Gdynia, Elbląg|0|Trójmiasto to Gdańsk, Sopot i Gdynia.
mcq|Чем знаменит Сопот?|molo;port;Solidarność|0|Najbardziej znane jest molo.
mcq|Кто живёт в Гдыне?|ciocia Kasi;babcia Kasi;brat Kasi|0|Mieszka tam ciocia Kasi.`},
{k:"scene",pl:"Na molo",ru:"На молу",place:"Molo w Sopocie",desc:"Ветер, чайки, на горизонте корабли.",
lines:`kasia|To jest kawiarnia, w której zawsze piłam gorącą czekoladę jako dziecko.|Это кафе, в котором я всегда пила горячий шоколад в детстве.
maks|A ten chłopak, z którym rozmawiałaś na plaży?|А тот парень, с которым ты разговаривала на пляже?
kasia|To kolega ze szkoły, który teraz pracuje jako ratownik.|Это одноклассник, который теперь работает спасателем.
natalia|Patrzcie, statek, który płynie do Szwecji!|Смотрите, корабль, который плывёт в Швецию!
maks|Morze jest dzisiaj takie spokojne. Kto idzie popływać?|Море сегодня такое спокойное. Кто идёт поплавать?
kasia|Woda ma szesnaście stopni! Ty idź, a my będziemy się opalać.|Вода шестнадцать градусов! Ты иди, а мы будем загорать.
maks|Bałtyk, o którym tyle słyszałem… Dobra, wchodzę!|Балтика, о которой я столько слышал… Ладно, захожу!`,
ex:`mcq|Кем работает одноклассник Каси?|ratownikiem;kelnerem;marynarzem|0|Kolega, który pracuje jako ratownik.
mcq|Какая температура воды?|16 stopni;26 stopni;6 stopni|0|Woda ma szesnaście stopni.
listen|Послушайте и выберите перевод|Będziemy się opalać.|Мы будем загорать.;Мы будем плавать.;Мы будем гулять.|0|opalać się — загорать.`},
{k:"grammar",lab:"który",title:"Który, która, które",sub:"Слово «который» согласуется с главным словом в роде и числе, а падеж берёт из своего предложения.",
body:[{t:"Падеж;м. р.;ж. р.;ср. р.;мн. ч. (не мужчины);мн. ч. (мужчины)|им.;który;która;które;które;którzy|род.;którego;której;którego;których;których|дат.;któremu;której;któremu;którym;którym|вин.;którego / który*;którą;które;które;których|твор.;z którym;z którą;z którym;z którymi;z którymi|предл.;o którym;o której;o którym;o których;o których"},
"* Для неодушевлённых мужского рода винительный = именительный: <span class='pl'>film, który oglądałem</span>.",
{ex:"Kolega, który pracuje jako ratownik.=Друг, который работает спасателем.|Kawiarnia, w której piłam czekoladę.=Кафе, в котором я пила шоколад.|Chłopak, z którym rozmawiałaś.=Парень, с которым ты разговаривала.|Miasto, do którego jedziemy.=Город, в который мы едем."},
{note:"Это точь-в-точь как русское «который»: тот же принцип согласования. Перед <span class='pl'>który</span> всегда ставится запятая."}],
ex:`fill|Выберите форму|To jest kawiarnia, w ___ pracuje Kasia.|której;który;którą|0|kawiarnia (ж. р.), w + предл.: której.
fill|Выберите форму|Mam kolegę, ___ mieszka w Gdyni.|który;którego;która|0|Подлежащее, м. р.: który.
fill|Выберите форму|To jest film, o ___ ci mówiłem.|którym;który;której|0|film (м. р.), o + предл.: którym.
fill|Выберите форму|Ludzie, ___ tu pracują, są mili.|którzy;które;który|0|Мужчины / смешанная группа: którzy.
build|Соберите: «Город, в который мы едем»|Miasto, do którego jedziemy.|który|do + род. п.: do którego.`},
{k:"vocab",ex:`match|Соедините|plaża=пляж;morze=море;fala=волна;statek=корабль;piasek=песок
mcq|Что значит «opalać się»?|загорать;обжигаться;отапливаться|0|opalać się — загорать.|opalać się`}],
vocab:`# Море
morze|море
plaża|пляж|Idziemy na plażę.|Идём на пляж.
piasek|песок
fala|волна
molo|мол, пирс
port|порт
statek|корабль
latarnia morska|маяк
mewa|чайка
# Отдых
urlop|отпуск (на работе)
wakacje|каникулы, отпуск
kurort|курорт
opalać się|загорать
pływać|плавать
ratownik|спасатель
krem z filtrem|солнцезащитный крем
# Описание
spokojny|спокойный
wietrznie|ветрено
który|который`});
