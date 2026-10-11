# Web Engineering Lab 1

A minimal HTML, CSS, and JavaScript project. `greet(name)` returns
`Hello, {name}!` and updates the page heading to **Hello, World!**.

## Run

```sh
npm install
npm start
```

Open http://localhost:3000. Alternatively, open `public/index.html` in
Visual Studio Code and select **Open with Live Server** (port 5500).

## Check

```sh
node --test
npm run lint
npm run format
```

The test imports the actual function from `public/script.js`. ESLint checks
JavaScript for undefined and unused variables. Prettier checks formatting. To fix formatting, run `npx prettier --write .`.

## Layout

- `public/`: page and assets
- `tests/`: Node built-in test runner tests
- `evidence/`: saved command output, screenshots, and completion status

See `evidence/lab-status.md` for verified tasks and any outstanding requirements.

## Repository

https://github.com/hamzanisar929/web-engineering-lab

## Acknowledgement

Prepared with assistance from OpenAI Codex, following the supplied Lab 01
Statement. Review the code and commands before your viva.
