# Forms with Angular Signals

A responsive login form demo built with Angular Signal Forms. It demonstrates
signal-based form state, email and password validation, inline validation
messages, and a custom dark glassmorphism design.

## Features

- Angular Signal Forms using `form()` and `FormField`
- Required and format validation for email
- Required, minimum-length, and letter-and-number validation for password
- Inline validation messages shown after a field is touched
- Submit button disabled until the form is valid
- Reset action to clear the form
- Responsive styling for mobile and desktop

## Requirements

- Node.js compatible with the installed Angular CLI
- npm

## Getting started

Clone the repository, then install dependencies and start the development server:

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The
development server reloads the app when source files change.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Build the application |
| `npm run watch` | Rebuild when source files change |
| `npm test` | Run the unit tests |

## Project structure

- `src/app/app.ts` — form model, validation rules, submit, and reset logic
- `src/app/app.html` — login form template
- `src/app/app.css` — component styles
- `src/styles.css` — global styles

## Security note

This is a front-end learning demo, not a production authentication system. The
form currently initializes with sample values and displays the model values,
including the password, as a live preview. Do not use real credentials or
deploy this as-is. A production login should remove that preview, send
credentials only over HTTPS to a trusted authentication service, and avoid
logging passwords.

## License

No license is currently specified. Add a `LICENSE` file before redistributing
the project if you want to grant others explicit reuse rights.
