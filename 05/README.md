
> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e01-react-introduction` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` React:  Wprowadzenie



W poprzednim zadaniu stworzyliśmy dwa komponenty: `<Nav/>` oraz  `<Menu/>`. 

Teraz zapisz je w osobnych plikach i zaimportuj wszystkie niezbędne elementy w pliku `app.js`.

Dodatkowo, używając `PropTypes`, zdefiniuj typy dla propsów oraz określ propsy wymagane (`.isRequired`).

## Zadanie dodatkowe

W komponencie `<Nav />` przekazuj do `<Menu/>` tablicę obiektów, które będą kolejnymi pozycjami menu, jakie mają się wyświetlać.

Tutaj możesz wykorzystać wiedzę, że React potrafi interpretować tablicę elementów JSX, tj.
```jsx
const arr = [<li>item1</li>, <li>item2</li>];
const jsx = <ul>{ arr }</ul>;
```
W powyższym przykładzie na stronie pojawi się lista z dwoma elementami: item1 oraz item2.

Dodatkową wskazówką jest metoda tablicowa [.map()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/map), której możemy użyć do wygenerowania tablicy zawierającej JSX.

Podsumowując: poniższy kod JSX z komponentu `<Nav/>` powinien generować menu z dwoma pozycjami przekazanymi przez props.
```jsx
<nav>
    <Menu 
        items={[
            {text: 'strona główna', url: '/'}, 
            {text: 'www', url: '/www'}
        ]}
    />
</nav>
```

> **Uwaga!** Na razie nie przejmuj się ostrzeżeniem związanym z [key](https://en.reactjs.org/docs/lists-and-keys.html). Ten temat omówimy później.


&nbsp;


> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
