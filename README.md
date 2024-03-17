The Provide Finance project utilises the following technologies:

- **Jest**: A testing framework for JavaScript projects.
- **Material-UI (MUI)**: A popular React component library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and developer productivity.
- **Next.js**: A React framework for building server-side rendered and statically generated web applications.

# Running the Project

To run the Provide Finance project, follow these steps:

1. Install dependencies:
```bash
   npm install
```
2. Start the development server:
```bash
   npm run dev
```
3. Access the application:
   Open a web browser and go to `http://localhost:3000` to view the application.
   
4. Login Credentials:
   - **Email**: test@test.com
   - **Password**: 123

5. For testing:
   Run Jest tests using:
```bash
   npm test
```
6. Folder Structure:
```md
src
├── app
│   ├── lenders
│   │   ├── [lenderId]
│   │   │   └── page.tsx
│   │   ├── _components
│   │   │   └── LenderCard.tsx
│   │   └── page.tsx
├── auth
│   └── login
│       └── page.tsx
├── middleware.ts
├── types
│   └── lenderType.ts
├── mockData
│   └── data.json
├── utils
│   └── isUserLoggedIn.ts
├── constants.ts
├── api
│   ├── auth
│   │   └── route.ts
│   └── lenders
│       └── route.ts
├── layout.tsx
├── not-found.tsx
├── jest.config.ts
├── tsconfig.json
├── next.config.mjs
├── .eslintrc.json
└── .gitignore
```