# Essential Stuff

## Html import links

Google font

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet" />
```

---

## Colors

```css
--primary: #b5a1e5;
--on-primary: #100e17;
--background: #131214;
--on-background: #eae6f2;
--surface: #1d1c1f;
--on-surface: #dddae5;
--on-surface-variant: #7b7980;
--on-surface-variant-2: #b9b6bf;
--outline: #3e3d40;
--bg-aqi-1: #89e589;
--on-bg-aqi-1: #1f331f;
--bg-aqi-2: #e5dd89;
--on-bg-aqi-2: #33311f;
--bg-aqi-3: #e5c089;
--on-bg-aqi-3: #332b1f;
--bg-aqi-4: #e58989;
--on-bg-aqi-4: #331f1f;
--bg-aqi-5: #e589b7;
--on-bg-aqi-5: #331f29;
--white: hsl(0, 0%, 100%);
--white-alpha-4: hsla(0, 0%, 100%, 0.04);
--white-alpha-8: hsla(0, 0%, 100%, 0.08);
--black-alpha-10: hsla(0, 0%, 0%, 0.1);
```

### Gradient color

```css
--gradient-1: linear-gradient(180deg, hsla(270, 5%, 7%, 0) 0%, hsla(270, 5%, 7%, 0.8) 65%, hsl(270, 5%, 7%) 100%);
--gradient-2: linear-gradient(180deg, hsla(260, 5%, 12%, 0) 0%, hsla(260, 5%, 12%, 0.8) 65%, hsl(260, 5%, 12%) 100%);
```

## Typography

```css
--ff-nunito-sans: "Nunito Sans", sans-serif;

--heading: 5.6rem;
--title-1: 2rem;
--title-2: 1.8rem;
--title-3: 1.6rem;
--body-1: 2.2rem;
--body-2: 2rem;
--body-3: 1.6rem;
--label-1: 1.4rem;
--label-2: 1.2rem;

--weight-regular: 400;
--weight-semiBold: 600;
```

## Shadow

```css
--shadow-1: 0px 1px 3px hsla(0, 0%, 0%, 0.5);
--shadow-2: 0px 3px 6px hsla(0, 0%, 0%, 0.4);
```

## Border Radius

```css
--radius-28: 28px;
--radius-16: 16px;
--radius-pill: 500px;
--radius-circle: 50%;
```

## Transition

```css
--transition-short: 100ms ease;
```

}

/_ responsive for large than 1200px screen _/

/_ @media (min-width: 1200px) {
/_ :root {
/_ Font size _/
/\* --heading: 8rem;
--title-2: 2rem;
}

    /* Reused styles */
    .container {
      padding: 40px;
    }

    .card-lg {
      padding: 36px;
    }

    .card-sm {
      padding: 24px;
    }

    .title-1 {
      font-size: 3.6rem;
    }

    .highlight-card.two .card-item {
      column-gap: 24px;
    }

    /* Header styles */
    .header .icon-btn {
      display: none;
    }

    .logo img {
      width: 250px;
    }

    .header {
      position: relative;
      height: 120px;
      z-index: 4;
    }

    .header .container {
      padding-block-start: 0;
      padding-block-end: 0;
      height: 100%;
    }

    .search-view,
    .search-view.active {
      display: block;
      position: relative;
      width: 500px;
      all: unset;
      animation: none;
    }

    .search-wrapper {
      border-bottom: none;
    }

    .search-wrapper > .m-icon {
      display: block;
    }

    .search-field,
    .search-view .view-list {
      background-color: var(--surface);
    }

    .search-field {
      height: 56px;
      border-radius: var(--radius-28);
    }

    .search-result,
    .search-view:not(:focus-within) .search-result {
      display: none;
    }

    .search-view:focus-within .search-result.active {
      display: block;
    }

    .search-view:has(.search-result.active):focus-within .search-field {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .search-view .view-list {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      max-height: 360px;
      border-radius: 0 0 var(--radius-28) var(--radius-28);
      border-top: 1px solid var(--outline);
      overflow: auto; /* For Firefox */
      overflow: overlay; /* For WebKit-based browsers */
    }

    .search-view .view-list .empty {
      min-height: 120px;
    }  */
