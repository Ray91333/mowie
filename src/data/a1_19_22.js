/* A1 · lessons 19–22 */
LX({n:19,title:"Moje mieszkanie",ru:"Квартира и комнаты",who:["maks","natalia"],
intro:"Наталья впервые в гостях у Макса. Он показывает квартиру и объясняет, где что лежит, ведь Наталья хочет сделать чай.",
goals:["описывать квартиру и комнаты","использовать предложный падеж: w kuchni, na stole","знать предлоги w, na, przy, o, po","говорить, где лежат вещи"],
secs:[
{k:"scene",pl:"Gdzie jest herbata?",ru:"Где чай?",place:"Mieszkanie Maksa",desc:"Маленькая двухкомнатная квартира в старом доме.",
lines:`maks|To jest mój pokój, a tam jest kuchnia i łazienka.|Это моя комната, а там кухня и ванная.
natalia|Ładnie tu! Mogę zrobić herbatę?|Здесь красиво! Можно я сделаю чай?
maks|Jasne. Czajnik jest w kuchni, na blacie przy oknie.|Конечно. Чайник на кухне, на столешнице у окна.
natalia|A herbata?|А чай?
maks|Herbata jest w szafce nad zlewem. A kubki stoją na półce.|Чай в шкафчике над раковиной. А кружки стоят на полке.
natalia|Widzę. A cukier?|Вижу. А сахар?
maks|Cukier jest w lodówce… Nie pytaj dlaczego!|Сахар в холодильнике… Не спрашивай почему!
natalia|Ha, ha! A o czym jest ta książka na stole?|Ха-ха! А о чём эта книга на столе?
maks|O historii Wrocławia. Czytam ją po pracy.|Об истории Вроцлава. Читаю её после работы.`,
ex:`mcq|Где чайник?|w kuchni, przy oknie;w łazience;w pokoju na stole|0|Czajnik jest w kuchni, na blacie przy oknie.
mcq|Где сахар?|w lodówce;w szafce;na półce|0|Cukier jest w lodówce.
listen|Послушайте и выберите перевод|Mogę zrobić herbatę?|Можно я сделаю чай?;Где чай?;Ты хочешь чай?|0|Mogę…? — можно мне…?`},
{k:"grammar",lab:"Предложный падеж",title:"Miejscownik: o kim? o czym? gdzie?",sub:"Предложный падеж употребляется только с предлогами: w, na, przy, o, po.",
body:[{t:"Тип;Окончание;Примеры|м. р. и ср. р. на твёрдый согласный;-e (с чередованием*);stół → na stole, okno → w oknie, miasto → w mieście, biuro → w biurze|м. р. и ср. р. на k, g, ch, мягкие (и исключения dom, syn);-u;park → w parku, pokój → w pokoju, dom → w domu|ж. р. на твёрдый согласный + -a;-e (с чередованием);szafa → w szafie, szkoła → w szkole, Polska → w Polsce|ж. р. на мягкий согласный, -ia, -ca;-i / -y;kuchnia → w kuchni, ulica → na ulicy, praca → w pracy|мн. ч. (все);-ach;pokoje → w pokojach, półki → na półkach"},
"* Перед -e согласные смягчаются: <b>t → ci</b> (miasto → w mieście), <b>r → rz</b> (biuro → w biurze), <b>ł → l</b> (stół → na stole), <b>k → c</b> (Polska → w Polsce).",
{ex:"Jestem w domu.=Я дома.|Mieszkam w Polsce.=Я живу в Польше.|Książka jest na stole.=Книга на столе.|Pracuję w biurze.=Я работаю в офисе."},
{trap:"Чередования в польском похожи на русские («рука — в руке»), но звучат иначе: <span class='pl'>noga → na nodze, ręka → w ręce</span>. Их лучше учить вместе с фразой."}],
ex:`fill|Выберите форму|Jestem w ___.|dom;domu;domie|1|dom → w domu.
fill|Выберите форму|Kubek jest na ___.|stół;stole;stoła|1|stół → na stole (ł → l).
fill|Выберите форму|Czajnik jest w ___.|kuchnia;kuchni;kuchnie|1|kuchnia → w kuchni.
fill|Выберите форму|Mieszkam w ___.|Polska;Polsce;Polski|1|Polska → w Polsce (k → c).
type|Напишите по-польски: «на улице»|na ulicy|ulica → na ulicy.`},
{k:"grammar",lab:"w, na, przy, o, po",title:"Предлоги с предложным падежом",sub:"Пять предлогов и их основные значения.",
body:[{t:"Предлог;Значение;Пример|w;в (внутри);w szafie, w Krakowie, w kinie|na;на (поверхность, открытое место, события);na stole, na ulicy, na koncercie, na poczcie|przy;у, возле;przy oknie, przy stole|o;о (тема);o historii, o tobie, o pracy|po;после; по;po pracy, po obiedzie, po mieście"},
{trap:"Некоторые места идут с <span class='pl'>na</span>, хотя по-русски «в»: <span class='pl'>na poczcie</span> (на почте — совпадает), <span class='pl'>na uniwersytecie</span> (в университете), <span class='pl'>na dworcu</span> (на вокзале), <span class='pl'>na Ukrainie</span> / <span class='pl'>w Ukrainie</span> (обе формы встречаются).",lb:"Ловушка для русскоязычных"},
{ex:"Rozmawiamy o pracy.=Мы говорим о работе.|Po pracy idę na siłownię.=После работы иду в спортзал.|Spacerujemy po mieście.=Гуляем по городу.|Siedzę przy oknie.=Я сижу у окна."}],
ex:`fill|Выберите предлог|Książka ___ historii Wrocławia.|o;po;przy|0|о чём — o + предл. п.
fill|Выберите предлог|___ pracy idę do domu.|Po;O;Na|0|po pracy — после работы.
fill|Выберите предлог|Studiuję ___ uniwersytecie.|w;na;przy|1|na uniwersytecie — в университете.
mcq|Как сказать «Я сижу у окна»?|Siedzę przy oknie.;Siedzę o oknie.;Siedzę po oknie.|0|przy — у, возле.|Siedzę przy oknie.`},
{k:"vocab",ex:`match|Соедините|pokój=комната;kuchnia=кухня;łazienka=ванная;sypialnia=спальня;przedpokój=прихожая
mcq|Что значит «lodówka»?|холодильник;лодка;полка|0|lodówka — холодильник (от lód — лёд).|lodówka`}],
vocab:`# Комнаты
pokój|комната
kuchnia|кухня
łazienka|ванная
sypialnia|спальня
salon|гостиная
przedpokój|прихожая
balkon|балкон
# Вещи на кухне
lodówka|холодильник
czajnik|чайник
zlew|раковина
szafka|шкафчик
półka|полка
kuchenka|плита
# Мебель
kanapa|диван
fotel|кресло
biurko|письменный стол
dywan|ковёр
lustro|зеркало
stać|стоять|Kubki stoją na półce.|Кружки стоят на полке.
leżeć|лежать`});

LX({n:20,title:"Szukam pokoju",ru:"Аренда жилья",who:["natalia"],
intro:"Наталья ищет новую комнату ближе к работе. Она звонит по объявлению, а потом приходит посмотреть квартиру.",
goals:["понимать объявления об аренде","спрашивать о цене, залоге и коммунальных","использовать предлоги места: nad, pod, przed, za, między, obok","называть этажи: na parterze, na pierwszym piętrze"],
secs:[
{k:"scene",pl:"Pokój do wynajęcia",ru:"Комната в аренду",place:"Telefon, potem mieszkanie na Ołbinie",desc:"Объявление: «Pokój do wynajęcia, 1200 zł, blisko centrum».",
lines:`natalia|Dzień dobry, dzwonię w sprawie ogłoszenia. Pokój jest jeszcze wolny?|Добрый день, звоню по объявлению. Комната ещё свободна?
pan|Tak, jest wolny. Kosztuje tysiąc dwieście złotych plus media.|Да, свободна. Стоит тысяча двести злотых плюс коммунальные.
natalia|Ile wynoszą media?|Сколько выходят коммунальные?
pan|Około dwustu złotych. I kaucja: jeden czynsz.|Около двухсот злотых. И залог: одна месячная оплата.
natalia|Na którym piętrze jest mieszkanie?|На каком этаже квартира?
pan|Na trzecim. Niestety, nie ma windy.|На третьем. К сожалению, лифта нет.
natalia|Rozumiem. Gdzie jest najbliższy przystanek?|Понятно. Где ближайшая остановка?
pan|Przed domem. Między przystankiem a domem jest mały park, a za domem sklep.|Перед домом. Между остановкой и домом маленький парк, а за домом магазин.
natalia|Świetnie. Czy mogę obejrzeć pokój jutro?|Отлично. Можно посмотреть комнату завтра?
pan|Oczywiście. Zapraszam o siedemnastej.|Конечно. Приходите в семнадцать.`,
ex:`mcq|Сколько стоит комната?|1200 zł plus media;1400 zł;200 zł|0|Pokój kosztuje tysiąc dwieście złotych plus media.
mcq|Где остановка?|przed domem;za domem;w parku|0|Przystanek jest przed domem.
mcq|Что значит «kaucja»?|залог;комиссия;коммунальные|0|kaucja — залог, его возвращают в конце аренды.|kaucja
listen|Послушайте и выберите перевод|Czy mogę obejrzeć pokój?|Можно посмотреть комнату?;Можно снять комнату?;Комната свободна?|0|obejrzeć — осмотреть, посмотреть.`},
{k:"grammar",lab:"Предлоги места",title:"Nad, pod, przed, za, między, obok",sub:"Предлоги, отвечающие на вопрос «где?», и падежи после них.",
body:[{t:"Предлог;Значение;Падеж;Пример|nad;над;творительный;nad stołem, nad zlewem|pod;под;творительный;pod łóżkiem, pod oknem|przed;перед;творительный;przed domem|za;за;творительный;za domem, za sklepem|między;между;творительный;między parkiem a domem|obok;рядом с;родительный;obok sklepu|koło;около;родительный;koło dworca|blisko;близко к;родительный;blisko centrum"},
{ex:"Kot śpi pod łóżkiem.=Кот спит под кроватью.|Lampa wisi nad stołem.=Лампа висит над столом.|Spotkajmy się przed kinem.=Встретимся перед кинотеатром."},
{note:"Это совпадает с русским: «над столом, под кроватью, перед домом» — тоже творительный. Только окончания польские: <b>-em</b> (м. р., ср. р.), <b>-ą</b> (ж. р.)."}],
ex:`fill|Выберите форму|Kot śpi pod ___.|łóżko;łóżkiem;łóżka|1|pod + творительный: łóżkiem.
fill|Выберите форму|Sklep jest obok ___.|park;parkiem;parku|2|obok + родительный: parku.
fill|Выберите форму|Czekam przed ___.|szkoła;szkołą;szkole|1|przed + творительный: szkołą.
mcq|Как сказать «за домом»?|za domem;za domu;za dom|0|za (где?) + творительный: za domem.|za domem`},
{k:"grammar",lab:"Этажи и аренда",title:"Piętro, czynsz, media",sub:"Как говорят об этажах и о деньгах за квартиру.",
body:[{t:"Как говорят;Значение|na parterze;на первом этаже (уровень земли)|na pierwszym piętrze;на втором этаже|na drugim piętrze;на третьем этаже|na ostatnim piętrze;на последнем этаже"},
{trap:"Польский <span class='pl'>parter</span> — это наш первый этаж. Поэтому <span class='pl'>pierwsze piętro</span> — это наш второй этаж!",lb:"Ловушка для русскоязычных"},
{ex:"czynsz=арендная плата (или квартплата)|media=коммунальные услуги|kaucja=залог|umowa najmu=договор аренды|właściciel=владелец|wynająć=снять, сдать"}],
ex:`mcq|Квартира «na pierwszym piętrze» по-русски находится…|на втором этаже;на первом этаже;в подвале|0|Отсчёт начинается с parter, поэтому pierwsze piętro — второй этаж.|na pierwszym piętrze
match|Соедините|czynsz=арендная плата;media=коммунальные;kaucja=залог;umowa=договор;winda=лифт
type|Напишите по-польски: «на первом этаже (уровне земли)»|na parterze|parter → na parterze.`},
{k:"vocab",ex:`match|Соедините|ogłoszenie=объявление;wynająć=снять;właściciel=владелец;sąsiad=сосед;dzielnica=район
mcq|Что значит «dzwonię w sprawie ogłoszenia»?|звоню по объявлению;звоню насчёт договора;звоню владельцу|0|w sprawie + род. п. — по поводу, насчёт.|w sprawie ogłoszenia`}],
vocab:`# Аренда
wynająć|снять, сдать (в аренду)|Chcę wynająć pokój.|Хочу снять комнату.
do wynajęcia|сдаётся
ogłoszenie|объявление
czynsz|арендная плата
media|коммунальные услуги
kaucja|залог
umowa|договор
właściciel|владелец
# Дом
piętro|этаж
parter|первый этаж
winda|лифт
schody|лестница
dzielnica|район
sąsiad|сосед
# Предлоги
nad|над
pod|под
przed|перед
za|за
między|между
obok|рядом с`});

LX({n:21,title:"Podróże po Polsce",ru:"Вокзал и поездки",who:["maks","kasia"],
intro:"Макс и Кася едут на выходные в Краков. На вокзале Вроцлав Главный Макс покупает билеты и узнаёт, с какой платформы поезд.",
goals:["покупать билет на поезд","различать gdzie? и dokąd? (где? и куда?)","использовать do, nad, w, na с разными падежами","называть стороны света"],
secs:[
{k:"scene",pl:"Na dworcu",ru:"На вокзале",place:"Wrocław Główny",desc:"Красивое здание вокзала, похожее на замок. У кассы короткая очередь.",
lines:`maks|Dzień dobry. Poproszę dwa bilety do Krakowa na sobotę rano.|Добрый день. Два билета в Краков на субботу утром, пожалуйста.
urz|Pociąg jest o siódmej dziesięć albo o ósmej czterdzieści. Który pan woli?|Поезд в семь десять или в восемь сорок. Какой Вы предпочитаете?
maks|O ósmej czterdzieści. Ile trwa podróż?|В восемь сорок. Сколько длится поездка?
urz|Trzy godziny. Bilety normalne czy ulgowe?|Три часа. Билеты полные или льготные?
maks|Jeden normalny i jeden studencki, ulgowy.|Один полный и один студенческий, льготный.
urz|Proszę. Pociąg odjeżdża z peronu trzeciego, tor czwarty.|Пожалуйста. Поезд отправляется с третьей платформы, четвёртый путь.
kasia|Super. W Krakowie zobaczymy Wawel, a w niedzielę pojedziemy do Wieliczki.|Супер. В Кракове увидим Вавель, а в воскресенье поедем в Величку.
maks|A latem pojedziemy nad morze, dobrze? I w góry!|А летом поедем на море, хорошо? И в горы!
kasia|Najpierw Kraków, potem zobaczymy!|Сначала Краков, потом посмотрим!`,
ex:`mcq|Во сколько поезд?|8:40;7:10;9:00|0|Wybrali pociąg o ósmej czterdzieści.
mcq|С какой платформы поезд?|z peronu trzeciego;z peronu czwartego;z toru trzeciego|0|Peron trzeci, tor czwarty.
listen|Послушайте и выберите перевод|Ile trwa podróż?|Сколько длится поездка?;Сколько стоит билет?;Когда отправляется поезд?|0|trwać — длиться.`},
{k:"grammar",lab:"Gdzie? Dokąd?",title:"Gdzie jesteś? Dokąd jedziesz?",sub:"«Где» и «куда» требуют разных предлогов и падежей.",
body:[{t:"Тип места;Dokąd? (куда);Gdzie? (где)|город, страна;do Krakowa, do Polski;w Krakowie, w Polsce|море, озеро, река;nad morze, nad jezioro;nad morzem, nad jeziorem|горы;w góry;w górach|остров, регион, события;na Mazury, na koncert;na Mazurach, na koncercie|человек;do Kasi, do lekarza;u Kasi, u lekarza"},
{ex:"Jadę do Krakowa.=Я еду в Краков.|Jestem w Krakowie.=Я в Кракове.|Jedziemy nad morze.=Мы едем на море.|Byliśmy nad morzem.=Мы были на море.|Idę do lekarza.=Я иду к врачу.|Jestem u lekarza.=Я у врача."},
{trap:"«На море» — <span class='pl'>nad morze</span> (куда, вин. п.) и <span class='pl'>nad morzem</span> (где, твор. п.). Предлог <span class='pl'>na</span> здесь не используется.",lb:"Ловушка для русскоязычных"}],
ex:`fill|Выберите|Latem jedziemy ___.|nad morze;nad morzem;na morze|0|Куда? → nad morze.
fill|Выберите|W sobotę byłem ___.|w górach;w góry;na górach|0|Где? → w górach.
fill|Выберите|Jadę ___ Gdańska.|do;w;na|0|Город, куда? → do + род. п.
fill|Выберите|Jestem ___ Kasi.|u;do;w|0|У человека: u + род. п.
type|Напишите по-польски: «Я еду в Краков»|Jadę do Krakowa.|do Krakowa — в Краков.`},
{k:"grammar",lab:"Вокзал и стороны света",title:"Na dworcu. Północ, południe…",sub:"Полезные слова на вокзале и стороны света.",
body:[{ex:"bilet normalny=полный билет|bilet ulgowy=льготный билет|w jedną stronę=в одну сторону|tam i z powrotem=туда и обратно|peron=платформа|tor=путь|odjazd=отправление|przyjazd=прибытие|opóźnienie=опоздание (поезда)|przesiadka=пересадка"},
{t:"Сторона;Где?;Пример|północ (север);na północy;Gdańsk jest na północy Polski.|południe (юг);na południu;Zakopane jest na południu.|wschód (восток);na wschodzie;Lublin jest na wschodzie.|zachód (запад);na zachodzie;Wrocław jest na zachodzie."},
{trap:"<span class='pl'>Pociąg ma opóźnienie</span> — поезд опаздывает. Это фраза, которую вы точно услышите на польском вокзале."}],
ex:`mcq|Где находится Гданьск?|na północy Polski;na południu Polski;na wschodzie Polski|0|Gdańsk leży nad Bałtykiem, na północy.|Gdańsk jest na północy Polski.
match|Соедините|peron=платформа;odjazd=отправление;przyjazd=прибытие;przesiadka=пересадка;opóźnienie=опоздание
mcq|Как попросить билет туда и обратно?|Poproszę bilet tam i z powrotem.;Poproszę bilet w jedną stronę.;Poproszę bilet ulgowy.|0|tam i z powrotem — туда и обратно.|Poproszę bilet tam i z powrotem.`},
{k:"vocab",ex:`match|Соедините|podróż=путешествие;wakacje=каникулы, отпуск;morze=море;jezioro=озеро;zamek=замок
mcq|Что значит «Który pan woli?»|Какой Вы предпочитаете?;Какой Вам нужен?;Какой Вы купили?|0|woleć — предпочитать.|Który pan woli?`}],
vocab:`# Вокзал
dworzec|вокзал
pociąg|поезд
bilet|билет|Poproszę bilet do Krakowa.|Билет в Краков, пожалуйста.
peron|платформа
tor|путь
kasa|касса
odjazd|отправление
przyjazd|прибытие
opóźnienie|опоздание
przesiadka|пересадка
# Путешествия
podróż|путешествие, поездка
wakacje|каникулы, отпуск
morze|море
jezioro|озеро
góry|горы
zamek|замок
zwiedzać|осматривать (достопримечательности)
woleć|предпочитать
# Стороны света
północ|север
południe|юг
wschód|восток
zachód|запад`});

LX({n:22,title:"Wszystkiego najlepszego!",ru:"Дни рождения и даты",who:["maks","kasia","tomek"],
intro:"Томек рассказывает Максу, что 25 ноября у Каси именины. Макс не знает, что это, и Томек объясняет польскую традицию. Потом Макс покупает цветы.",
goals:["называть даты: pierwszego maja","поздравлять: Wszystkiego najlepszego!","понимать, что такое imieniny","различать вид глагола в прошедшем: robiłem / zrobiłem"],
secs:[
{k:"scene",pl:"Imieniny Kasi",ru:"Именины Каси",place:"Biuro, potem kwiaciarnia",desc:"Конец ноября, за окном серо и дождливо.",
lines:`tomek|Wiesz, że dwudziestego piątego listopada Kasia ma imieniny?|Ты знаешь, что двадцать пятого ноября у Каси именины?
maks|Imieniny? Co to jest?|Именины? Что это?
tomek|To dzień twojego imienia. Katarzyna ma imieniny właśnie wtedy. W Polsce to ważne święto.|Это день твоего имени. У Катажины именины как раз тогда. В Польше это важный праздник.
maks|A kiedy są twoje urodziny?|А когда у тебя день рождения?
tomek|Ósmego marca. Urodziłem się w tysiąc dziewięćset dziewięćdziesiątym czwartym roku.|Восьмого марта. Я родился в тысяча девятьсот девяносто четвёртом году.
maks|Kupiłem już prezent dla Kasi. Długo szukałem i w końcu znalazłem książkę o architekturze.|Я уже купил подарок для Каси. Долго искал и наконец нашёл книгу об архитектуре.
tomek|Świetnie! Kup jeszcze kwiaty.|Отлично! Купи ещё цветы.
maks|Dzień dobry, poproszę bukiet róż… Kasiu, wszystkiego najlepszego z okazji imienin!|Добрый день, букет роз, пожалуйста… Кася, поздравляю с именинами!
kasia|Dziękuję! Pamiętałeś? Jesteś kochany!|Спасибо! Ты помнил? Ты милый!`,
ex:`mcq|Когда у Каси именины?|25 listopada;8 marca;1 maja|0|Dwudziestego piątego listopada.
mcq|Что Макс подарил Касе?|książkę o architekturze i kwiaty;czekoladę;bilet do kina|0|Maks kupił książkę o architekturze i bukiet róż.
listen|Послушайте и выберите перевод|Wszystkiego najlepszego!|Всего наилучшего! (Поздравляю!);Самое лучшее!;С днём рождения!|0|Универсальное поздравление: wszystkiego najlepszego.`},
{k:"grammar",lab:"Даты",title:"Którego? Даты",sub:"Число в дате — порядковое числительное в родительном падеже, месяц — тоже в родительном.",
body:[{t:"Дата;Как сказать|1.05;pierwszego maja|3.01;trzeciego stycznia|8.03;ósmego marca|11.11;jedenastego listopada|25.12;dwudziestego piątego grudnia"},
{t:"Месяц;Им. п.;Род. п. (в дате)|январь;styczeń;stycznia|февраль;luty;lutego|март;marzec;marca|апрель;kwiecień;kwietnia|май;maj;maja|июнь;czerwiec;czerwca|июль;lipiec;lipca|август;sierpień;sierpnia|сентябрь;wrzesień;września|октябрь;październik;października|ноябрь;listopad;listopada|декабрь;grudzień;grudnia"},
{ex:"Którego jest dzisiaj?=Какое сегодня число?|Dzisiaj jest pierwszy maja.=Сегодня первое мая.|Urodziłem się trzeciego stycznia.=Я родился третьего января.|Kiedy masz urodziny?=Когда у тебя день рождения?"},
{note:"Год: <span class='pl'>w dwa tysiące dwudziestym szóstym roku</span> — в 2026 году. Десятки и единицы — порядковые числительные в предложном падеже (dwudziestym szóstym), тысячи — обычное число (dwa tysiące)."},
{h:"Поздравления"},
{ex:"Wszystkiego najlepszego!=Всего наилучшего!|z okazji urodzin=по случаю дня рождения|z okazji imienin=по случаю именин|Sto lat!=Сто лет! (пожелание и песня)|Zdrowia, szczęścia!=Здоровья, счастья!"}],
ex:`mcq|Как сказать «первого мая»?|pierwszego maja;pierwszy maj;pierwszym maju|0|Дата: родительный падеж.|pierwszego maja
fill|Выберите форму|Urodziłem się ósmego ___.|marzec;marca;marcu|1|Месяц в дате: родительный, marca.
listen|Какая дата?|dwudziestego piątego grudnia|25.12;20.05;5.12|0|25 grudnia — Рождество.
build|Соберите: «Поздравляю с днём рождения!»|Wszystkiego najlepszego z okazji urodzin!|imienin|z okazji urodzin — по случаю дня рождения.`},
{k:"grammar",lab:"Вид в прошедшем",title:"Robiłem czy zrobiłem? Вид глагола",sub:"Как в русском: несовершенный вид — процесс, совершенный — результат.",
body:[{t:"Несовершенный (процесс);Совершенный (результат)|robić → robiłem (делал);zrobić → zrobiłem (сделал)|kupować → kupowałem (покупал);kupić → kupiłem (купил)|pisać → pisałem (писал);napisać → napisałem (написал)|szukać → szukałem (искал);znaleźć → znalazłem (нашёл)|czytać → czytałem (читал);przeczytać → przeczytałem (прочитал)"},
{ex:"Długo szukałem prezentu.=Я долго искал подарок.|W końcu znalazłem książkę.=Наконец я нашёл книгу.|Codziennie kupowałam chleb.=Я каждый день покупала хлеб.|Wczoraj kupiłam chleb.=Вчера я купила хлеб."},
{note:"Хорошая новость: польский вид работает почти так же, как русский. Совершенный вид часто образуется приставкой: <span class='pl'>z-, na-, prze-, po-</span>."}],
ex:`fill|Выберите вид|Wczoraj ___ cały dzień. (долго, процесс)|pracowałem;popracowałem;zrobiłem|0|Процесс: pracowałem.
fill|Выберите вид|W końcu ___ klucze!|szukałem;znalazłem;znajdowałem|1|Результат: znalazłem.
fill|Выберите вид|Kasia ___ już książkę. (прочитала)|czytała;przeczytała;czyta|1|Результат: przeczytała.
mcq|Совершенный вид от «pisać»?|napisać;popisać;zapisywać|0|pisać → napisać.|napisać`},
{k:"vocab",ex:`match|Соедините|urodziny=день рождения;imieniny=именины;święto=праздник;kwiaty=цветы;prezent=подарок
mcq|Что значит «Jesteś kochany!»?|Ты милый! (спасибо, ты лучший);Ты влюблён!;Ты любимый!|0|Jesteś kochany / kochana — тёплое «ты такой милый».|Jesteś kochany!`}],
vocab:`# Праздники
urodziny|день рождения|Kiedy masz urodziny?|Когда у тебя день рождения?
imieniny|именины
święto|праздник
prezent|подарок
życzenia|поздравления, пожелания
kwiaty|цветы
bukiet|букет
róża|роза
tort|торт
# Фразы
Wszystkiego najlepszego!|Всего наилучшего!
z okazji|по случаю
Sto lat!|Сто лет! (пожелание)
gratulacje|поздравления (с успехом)
# Глаголы
urodzić się|родиться|Urodziłem się w Charkowie.|Я родился в Харькове.
pamiętać|помнить
znaleźć|найти
szukać|искать
data|дата`});
