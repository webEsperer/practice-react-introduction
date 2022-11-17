> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e01-react-introduction` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` React:  Wprowadzenie


W poprzednim zadaniu utworzyłeś komponent `<MenuItem/>`, prawda? To świetnie, ponieważ teraz będziemy go potrzebować! To oznacza, że w tym zadaniu też powinieneś go zaimportować.

Teraz stwórz dodatkowe komponenty (na razie zrób to w pliku `app.js`) o nazwie `<Nav/>` oraz `<Menu />`.

Komponent `<Nav/>` ma renderować znacznik `<nav>` oraz zawartość menu, tj.:

```html
<nav>
    <ul>
        <li><a href="/">home</a></li>
        <li><a href="/contact">kontakt</a></li>
    </ul>
</nav>
```

Jednak to komponent `<Menu/>` ma renderować `</ul>` oraz jego zawartość, tj.:
```html
<ul>
    <li><a href="/">home</a></li>
    <li><a href="/contact">kontakt</a></li>
</ul>
```

Dlatego docelowo komponent `<Nav/>` będzie renderował:
```jsx
<nav>
    <Menu />
</nav>
```

W poprzednim zadaniu komponent `<MenuItem/>` renderował `<li/>`, dlatego wykorzystamy go w `<Menu />`, który będzie zwracał poniższą strukturę JSX:

```jsx
<ul>
    <MenuItem text="home" url="/">
    <MenuItem text="kontakt" url="/contact">
</ul>
```

Na końcu do metody `.render()` w `root` powinieneś przekazać komponent `<Nav/>`. Jeśli wszystko wykonałeś poprawnie, to na stronie zobaczysz listę `ul > li > a`, która zawiera dwie pozycje.


&nbsp;


> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:
