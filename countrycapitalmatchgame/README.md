# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list




Crear view game
/pages/game (render en app) = a
/components/button c
/components/Messages c

/views/countrycapital  (render en game) b 

/hooks/countrycapital 
  este hook va a tener estado donde recive un obj (maper )
  retornar (mexico,cdmx, usa,) shuffle array
  debe tener dos estados  opc1, opc2 (validacion de no ingresar el mismo)
  lanzar la comparacion
  para despues comparar con el array aleatorio regresado (isCorreccapital)
  si esta bien, lo meto a un array de correctos.
  si esta mal, un entero que contabilice y meter en un array de incorrectosa/ si es 3, no aparece y quita los botones



  con el array de correctos, pinto verde, si todos son correctos, 
  con el array de incorrectos, pinto rojo, si todos son correctos, 



  clickbutton 

  const options = [
  { country: 'USA', city: 'New York' },
  { country: 'USA', city: 'Los Angeles' },
  { country: 'USA', city: 'Chicago' },
  { country: 'USA', city: 'Houston' },
]