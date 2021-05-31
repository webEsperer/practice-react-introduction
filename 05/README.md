> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e01-react-introduction` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` React:  Wprowadzenie



W poprzednim zadaniu stworzyliśmy dwa komponenty tj. `<Nav/>` oraz  `<Menu/>`. 

Teraz zapisz je w osobnych plikach oraz zaimportuj wszystkie niezbędne elementy w pliku `app.js`.

Dodatkowo używając `PropTypes` zdefiniuj typy dla props-ów oraz wymagane elementy.

## Zadanie dodatkowe

Postaraj w komponencie `<Nav />` do `<Menu/>` przekazywać tablicę obiektów, które będą oznaczać jakie pozycje menu mają sie wyświetlić.

Tutaj możesz wykorzystać wiedzę, że React potrafi interpretować tablicę elementów JSX tj.
```
const arr = [<li>item1</li>, <li>item2</li>];
const jsx = <ul>{ arr }</ul>;
```
W powyższym przykładzie na stronie pojawi się lista z dwoma elementami tj. item1 oraz item2.

Dodatkową wskazówką może być metoda tablicowa [.map()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/map), która możemy użyć do wygenerowania tablicy zawierające JSX.

Składając te wszystkie informacje w całość to renderowanie przez komponent `<Nav/>` takiego JSX:
```
<nav>
    <Menu 
        items={[
            {text: 'strona główna', url: '/'}, 
            {text: 'www', url: '/www'}
        ]}
    />
</nav>
```

Spowoduje wygenerowanie menu z dwoma pozycjami przekazanymi przez props.

> **Uwaga** Na chwilę obecną nie przejmuj się ostrzeżeniem związanym z [key](https://en.reactjs.org/docs/lists-and-keys.html). Ten temat bedziemy poruszać póżniej.


&nbsp;


> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
