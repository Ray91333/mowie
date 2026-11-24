/* Polish grammar terms for each grammar section, as in the textbook.
   GT(lesson, section, "TERM shown in the grammar box") */
GT(1,"A","alfabet");GT(1,"B","dwuznaki");GT(1,"C","spółgłoski miękkie · samogłoski nosowe");GT(1,"D","wymowa · akcent");
GT(2,"B","czasownik BYĆ · zaimki osobowe");GT(2,"D","forma grzecznościowa: pan / pani");GT(2,"E","liczebniki 0–10");
GT(3,"B","zaimki osobowe · koniugacja -m, -sz");GT(3,"C","liczebniki 11–29");
GT(4,"B","rodzaj rzeczowników · MIANOWNIK l. poj.");GT(4,"C","przymiotnik · MIANOWNIK l. poj.");
GT(5,"B","koniugacja -ę, -isz / -ysz");GT(5,"C","przymiotniki: opis osoby");
GT(6,"B","NARZĘDNIK l. poj. · kim? czym?");GT(6,"C","liczebniki 30–100 · rok, lata, lat");
GT(7,"B","koniugacje: -m, -sz · -ę, -isz · -ę, -esz");GT(7,"C","zaimki dzierżawcze: mój, twój");
GT(8,"B","BIERNIK l. poj. · kogo? co?");GT(8,"C","czasownik CHCIEĆ · liczebniki 100–1000");
GT(9,"B","czasowniki JEŚĆ, PIĆ");GT(9,"C","NARZĘDNIK: z + narzędnik · l. poj. i l. mn.");
GT(10,"B","MIANOWNIK i BIERNIK l. mn.");GT(10,"C","DOPEŁNIACZ l. mn. po miarach");
GT(11,"B","DOPEŁNIACZ l. poj. · negacja · kogo? czego?");GT(11,"C","zaimki osobowe w NARZĘDNIKU");
GT(12,"B","zaimki dzierżawcze · czyj? czyja? czyje?");GT(12,"C","przysłówki częstotliwości · pory dnia");
GT(13,"B","liczebniki porządkowe · godziny");GT(13,"C","dni tygodnia · w + BIERNIK");
GT(14,"B","CZAS PRZESZŁY");GT(14,"C","CZAS PRZESZŁY: być, mieć, jeść, iść");
GT(15,"B","czasowniki ruchu: iść / chodzić, jechać / jeździć");GT(15,"C","do + DOPEŁNIACZ · NARZĘDNIK (środek transportu)");
GT(16,"B","DOPEŁNIACZ l. mn.");GT(16,"C","liczebnik + rzeczownik");
GT(17,"B","CZAS PRZYSZŁY złożony: będę + bezokolicznik");GT(17,"C","przysłówki · miesiące · w + MIEJSCOWNIK");
GT(18,"B","lubić / podobać się");GT(18,"C","CELOWNIK zaimków osobowych · komu?");
GT(19,"B","MIEJSCOWNIK l. poj. i l. mn. · o kim? o czym?");GT(19,"C","przyimki: w, na, przy, o, po + MIEJSCOWNIK");
GT(20,"B","przyimki statyczne + NARZĘDNIK / DOPEŁNIACZ");GT(20,"C","liczebniki porządkowe: piętra");
GT(21,"B","gdzie? dokąd? · przyimki statyczne i dynamiczne");GT(21,"C","kierunki geograficzne");
GT(22,"B","daty · liczebniki porządkowe w DOPEŁNIACZU");GT(22,"C","ASPEKT w czasie przeszłym");
GT(23,"B","ASPEKT w czasie przyszłym · czas przyszły prosty");GT(23,"C","dzwonić do + DOPEŁNIACZ");
GT(24,"B","stopniowanie przymiotników");GT(24,"C","nosić, mieć na sobie + BIERNIK");
GT(25,"B","BIERNIK zaimków: boli mnie");GT(25,"C","czasownik POWINIEN");
GT(26,"B","TRYB PRZYPUSZCZAJĄCY");GT(26,"C","PRZYPADKI: podsumowanie A1");
GT(27,"B","liczebniki porządkowe: lata · w + MIEJSCOWNIK");GT(27,"C","ASPEKT w narracji");
GT(28,"B","jako + MIANOWNIK · być / zostać + NARZĘDNIK");GT(28,"C","przyimki czasu: od, do, przez, po");
GT(29,"B","konstrukcje bezosobowe: trzeba, można, należy");GT(29,"C","SIĘ bezosobowe");
GT(30,"B","CELOWNIK l. poj. i l. mn. · komu? czemu?");GT(30,"C","czasowniki + CELOWNIK");
GT(31,"B","TRYB ROZKAZUJĄCY");GT(31,"C","TRYB ROZKAZUJĄCY: negacja");
GT(32,"C","życzyć + CELOWNIK + DOPEŁNIACZ");GT(32,"D","DOPEŁNIACZ: podsumowanie");
GT(33,"B","WOŁACZ");GT(33,"C","list oficjalny i nieoficjalny");
GT(34,"B","czasowniki ruchu z przedrostkami: iść");GT(34,"C","przyjść: czas przyszły i przeszły");
GT(35,"B","czasowniki ruchu z przedrostkami: jechać");GT(35,"C","słownictwo: droga");
GT(36,"C","zaimek względny KTÓRY · deklinacja");
GT(37,"B","stopniowanie przysłówków");GT(37,"C","słownictwo: góry");
GT(38,"B","narodowości · MIANOWNIK l. mn.");GT(38,"C","MIANOWNIK l. mn.: rodzaj męskoosobowy");
GT(39,"B","przymiotniki w l. mn.: rodzaj męskoosobowy");GT(39,"C","CZAS PRZESZŁY l. mn.: -li / -ły");
GT(40,"B","ASPEKT w narracji");GT(40,"C","opis osoby");
GT(41,"B","CELOWNIK w konstrukcjach: jest mi…, brakuje mi…");GT(41,"C","SIĘ wzajemne");
GT(42,"B","mowa zależna: że, czy");GT(42,"C","żeby + forma czasu przeszłego");
GT(43,"C","TRYB ROZKAZUJĄCY w przepisach");GT(43,"D","DOPEŁNIACZ po miarach");
GT(44,"B","TRYB PRZYPUSZCZAJĄCY: gdyby");GT(44,"C","zdania warunkowe: jeśli / gdyby");
GT(45,"B","przyimki czasu: od, przez, temu, za, w ciągu, na");GT(45,"C","pytania o czas · czasy: podsumowanie");
GT(46,"B","PRZYPADKI l. mn.: podsumowanie");GT(46,"C","gramatyka A2: podsumowanie");

/* Case reference ("Przypadki"), as in the textbook appendix.
   key = word searched in GT terms to list the lessons where the case is taught */
CASE({key:"MIANOWNIK",n:"Mianownik",q:"kto? co?",ru:"именительный падеж",
use:"подлежащее; после «to jest»; после jako",
sg:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|męski;– (stół, student);-y / -i;nowy stół|żeński;-a (kawa, lampa);-a;nowa lampa|nijaki;-o, -e, -ę (okno, morze, imię);-e;nowe okno",
pl:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|męskoosobowy;-i / -y / -owie / -e;-i / -y;mili studenci, panowie|niemęskoosobowy;-y / -i / -e / -a;-e;nowe lampy, okna",
ex:"To jest Kasia.=Это Кася.|Ci studenci są z Polski.=Эти студенты из Польши."});
CASE({key:"DOPEŁNIACZ",n:"Dopełniacz",q:"kogo? czego?",ru:"родительный падеж",
use:"отрицание (nie ma, nie mam); do, od, bez, dla, u, z (откуда), obok; количество (dużo, kilo, 5+); принадлежность; глаголы szukać, potrzebować, życzyć, uczyć się, bać się",
sg:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|męski;-a / -u;-ego;nowego telefonu, brata|żeński;-y / -i;-ej;nowej lampy, kuchni|nijaki;-a;-ego;nowego okna",
pl:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|męski;-ów / -y / -i;-ych / -ich;nowych telefonów|żeński;– (zero) / -i;-ych / -ich;nowych lamp, książek|nijaki;– (zero);-ych / -ich;nowych okien",
ex:"Nie mam czasu.=У меня нет времени.|Kilo jabłek, proszę.=Кило яблок, пожалуйста.|To dom babci.=Это дом бабушки."});
CASE({key:"CELOWNIK",n:"Celownik",q:"komu? czemu?",ru:"дательный падеж",
use:"кому-то дать, сказать, помочь; dziękować, pomagać, ufać, życzyć; podobać się; jest mi zimno, brakuje mi",
sg:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|męski;-owi / -u (bratu, panu);-emu;nowemu koledze, Tomkowi|żeński;-e / -i / -y (как miejscownik);-ej;mamie, Kasi|nijaki;-u;-emu;dziecku",
pl:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|wszystkie;-om;-ym / -im;nowym kolegom, dzieciom",
ex:"Pomagam bratu.=Я помогаю брату.|Dziękuję ci.=Спасибо тебе.|Podoba mi się Wrocław.=Мне нравится Вроцлав."});
CASE({key:"BIERNIK",n:"Biernik",q:"kogo? co?",ru:"винительный падеж",
use:"прямое дополнение после mam, lubię, widzę, kupuję, poproszę; w + дни недели; przez, na (время); boli mnie",
sg:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|męski nieżywotny;= mianownik;= mianownik;nowy telefon|męski żywotny;-a (= dopełniacz);-ego;nowego kolegę, brata|żeński;-ę;-ą;nową kawę|nijaki;= mianownik;= mianownik;nowe okno",
pl:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|męskoosobowy;= dopełniacz;-ych / -ich;nowych studentów|niemęskoosobowy;= mianownik;-e;nowe książki",
ex:"Poproszę kawę.=Кофе, пожалуйста.|Mam brata.=У меня есть брат.|W sobotę idę do kina.=В субботу иду в кино."});
CASE({key:"NARZĘDNIK",n:"Narzędnik",q:"kim? czym?",ru:"творительный падеж",
use:"być / zostać + профессия; z (с кем, с чем); транспорт (jadę tramwajem); nad, pod, przed, za, między; interesować się. Мужские слова на -a (programista, kierowca) получают -ą",
sg:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|męski;-em / -iem;-ym / -im;dobrym lekarzem, programistą|żeński;-ą;-ą;dobrą nauczycielką|nijaki;-em / -iem;-ym / -im;z mlekiem",
pl:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|wszystkie;-ami (ludźmi, dziećmi);-ymi / -imi;z nowymi kolegami",
ex:"Jestem programistą.=Я программист.|Kawa z mlekiem.=Кофе с молоком.|Jadę autobusem.=Еду на автобусе."});
CASE({key:"MIEJSCOWNIK",n:"Miejscownik",q:"o kim? o czym?",ru:"предложный падеж",
use:"только с предлогами: w, na, o, po, przy (где? о чём?)",
sg:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|męski;-e (stół → stole) / -u (dom → domu);-ym / -im;w nowym domu, na stole|żeński;-e / -i / -y;-ej;w nowej kuchni, w Polsce|nijaki;-e / -u;-ym / -im;w mieście, w biurze",
pl:"Rodzaj;Rzeczownik;Przymiotnik;Przykład|wszystkie;-ach;-ych / -ich;w nowych pokojach",
ex:"Mieszkam w Polsce.=Я живу в Польше.|Książka jest na stole.=Книга на столе.|Rozmawiamy o pracy.=Говорим о работе."});
CASE({key:"WOŁACZ",n:"Wołacz",q:"o! (обращение)",ru:"звательный падеж",
use:"обращение к человеку, особенно в письмах и вежливой речи",
sg:"Rodzaj;Końcówka;Przykład|męski;-e / -u;Piotrze! Andrzeju! Tomku! Panie!|żeński;-o / -u (после -ia);Ewo! Marto! Kasiu! Mamo!|nijaki;= mianownik;Dziecko!",
pl:"Rodzaj;Końcówka;Przykład|wszystkie;= mianownik;Drodzy Państwo! Kochani!",
ex:"Kasiu, chodź tutaj!=Кася, иди сюда!|Dzień dobry, pani Ewo!=Здравствуйте, пани Эва!"});

/* Verb reference ("Czasownik") */
VREF({n:"Koniugacje",ru:"три типа спряжения",key:"KONIUGACJ",
t:"Typ;ja;ty;on / ona;my;wy;oni|-m, -sz (czytać);czytam;czytasz;czyta;czytamy;czytacie;czytają|-ę, -isz (robić);robię;robisz;robi;robimy;robicie;robią|-ę, -esz (pisać);piszę;piszesz;pisze;piszemy;piszecie;piszą|-uję (pracować);pracuję;pracujesz;pracuje;pracujemy;pracujecie;pracują"});
VREF({n:"Czas przeszły",ru:"прошедшее время",key:"CZAS PRZESZŁY",
t:"Osoba;rodzaj męski;rodzaj żeński|ja;robiłem;robiłam|ty;robiłeś;robiłaś|on / ona;robił;robiła|my;robiliśmy;robiłyśmy|wy;robiliście;robiłyście|oni / one;robili;robiły"});
VREF({n:"Czas przyszły",ru:"будущее время",key:"CZAS PRZYSZŁY",
t:"Aspekt;Forma;Przykład|niedokonany;będę + bezokolicznik;Będę pracować.|dokonany;forma teraźniejsza = przyszłość;Zrobię to jutro."});
VREF({n:"Aspekt",ru:"вид глагола",key:"ASPEKT",
t:"Niedokonany (proces);Dokonany (rezultat)|robić;zrobić|pisać;napisać|kupować;kupić|czytać;przeczytać|dzwonić;zadzwonić"});
VREF({n:"Tryb rozkazujący",ru:"повелительное наклонение",key:"TRYB ROZKAZUJĄCY",
t:"Bezokolicznik;ty;my;wy|robić;rób;róbmy;róbcie|pisać;pisz;piszmy;piszcie|iść;idź;idźmy;idźcie|być;bądź;bądźmy;bądźcie"});
VREF({n:"Tryb przypuszczający",ru:"условное наклонение",key:"TRYB PRZYPUSZCZAJĄCY",
t:"Osoba;rodzaj męski;rodzaj żeński|ja;chciałbym;chciałabym|ty;chciałbyś;chciałabyś|on / ona;chciałby;chciałaby|my;chcielibyśmy;chciałybyśmy|oni / one;chcieliby;chciałyby"});
