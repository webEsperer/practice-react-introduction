> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e01-react-introduction` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#01` React:  Wprowadzenie


Twoim pierwszym zadaniem jest uruchomienie webpacka, który będzie wykonywał transpilację utworzonego kodu z JSX do JavaScriptu.

W pliku `./webpack.config.js` (w katalogu głównym) mieści się gotowa konfiguracja webpacka dla Reacta. Znajduje się tam zmienna `taskNumber` przechowująca informację o zadaniu, które w danym momencie przerabiasz.

Za każdym razem będziesz musiał modyfikować zawartość tej zmiennej (np. `const  taskNumber  =  '01';`) i ponownie uruchamiać tryb developerski. Pamiętasz, jak to zrobić? Gdzie zapisany jest skrót do odpowiedniej komendy?

Pamiętaj również, żeby pobrać paczki z npm, które będziemy wykorzystywać podczas pracy z Reactem. Wiesz, jak je zainstalować?

W pliku `app.js` stwórz kod, który przy pomocy Reacta i JSX doda do elementu `#root` nagłówek pierwszego  poziomu, tj. `<h1/>` z napisem `React działa!`.

> Uwaga! W pliku `package.json` mamy zapisaną informacje o wersji 17 dla `react` oraz `react-dom`. Jeśli chcesz skorzysać z nowej formy osadzania root-a to musisz podmienić wersje przez instalacje wersji 18 tj. `npm i react@18 react-dom@18.`


&nbsp;

> :arrow_left: ~~*poprzednie zadanie*~~ | [*następne zadanie*](./../02) :arrow_right:
