# Mi Hero APP con Angular 13

## Creamos nuestra aplicación

    ng new spa

## Instalamos las dependencias (Bootstrap v5.1)

    npm install bootstrap jquery popper.js --save

## Configurar angular.json

```
    "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": [
        "node_modules/jquery/dist/jquery.slim.min.js",
        "node_modules/popper.js/dist/umd/popper.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
```

## Creación de Componentes

    ng g c components/shared/navbar
    ng g c components/home
    ng g c components/about
    ng g c components/buscador
    ng g c components/heroes
    ng g c components/heroe
    ng g c components/hero-card

## Creación de Rutas

- Crear un archivo `app.routes` e importar todos los components que se van a renderizar.

- Luego exportar `APP_ROUTING` hacia el archivo `app.module.ts`

- Configurar el constructor en el `navbar.components.ts`

- Finalmente agregar las siguientes propiedades en los Anchors 

    [routerLink]="['home']" routerLinkActive="active"

## Snippets

- a-rxjs-import
- a-service
