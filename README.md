# mondora.eu

Sito portfolio sviluppato con [BuildAwesome](https://build.awesome.me/) e [WebC](https://www.11ty.dev/docs/languages/webc/) ed ospitato su [Cloudflare Workers](https://www.cloudflare.com/products/workers/).

## Struttura

- `src/index.md` — homepage con elenco progetti e contatti
- `src/_data/progetti.json` — elenco dei progetti mostrati in homepage
- `src/_data/site.js` — metadati del sito (autore, contatti, lingua)
- `src/_layouts/` — layout del sito

## Comandi

```bash
# installa le dipendenze
npm install

# avvia il server di sviluppo su http://localhost:8080
npm start

# genera il sito statico in _site/
npm run build
```

## Personalizzazione

Per aggiungere un progetto, modifica `src/_data/progetti.json`:

```json
{
  "name": "Nome progetto",
  "domain": "dominio.it",
  "url": "https://dominio.it/",
  "description": "Breve descrizione del progetto."
}
```

`src/_data/site.js` legge automaticamente i dati dell'autore (nome, email, URL) dal `package.json`. Per personalizzare i metadati del sito (titolo, descrizione, lingua), modificate direttamente `src/_data/site.js`, ad esempio:

```js
export default {
  title: "mondora.eu",
  description: "Landing Page con portfolio e contatti",
  language: "it",
};
```

## Licenza

Questo progetto è distribuito sotto licenza [AGPL-3.0](LICENSE.txt).
