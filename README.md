# Mi primera APP con Angular 13

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

## Creación de componentes

    ng g c components/shared/navbar
    ng g c components/home
    ng g c components/about
    ng g c components/heroes