# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React Introduction #05

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
