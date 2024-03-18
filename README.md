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

# Part 2 Questions:

1. Please describe a perfect tech stack for a Front-End application. Please consider all information about our V2 Project mentioned during the interview sessions.

Next.js: The foundation. Fast, SEO-friendly, with SSR and static generation. Perfect for a performance-first web app. Pair it with MUI (Material-UI), and you're basically dressing your app in the latest fashion while making sure it looks good on any device.

Context API: Simplifying state management. Ditch the Redux boilerplate; Context API is all about managing state with less overhead, keeping your app’s data flow smooth and straightforward.

React Hook Form/Formik: Form wizards. Streamline form handling with validation and management, saving time and headaches.

NextAuth.js/Auth0: Locking down authentication. Whether it’s session management or social logins, these tools offer robust security with minimal fuss.

Jest & React Testing Library: The testing tag team. Ensure your app is bug-free and behaves as expected, with tools designed for the modern React ecosystem.

Socket.IO: On real-time communication, while I’m not deeply skilled in Socket.IO, its wide use and support from the community, alongside positive feedback, make it my preliminary choice for enabling real-time chat features. Might need a better investigation on that.

2. In what circumstances would you not use TypeScript?

Honestly, TypeScript is awesome for a lot of reasons—catching bugs early, making your code readable, and just generally saving you from yourself when your project gets big. But it's not always the right tool for the job.
Picture this: you're whipping up a quick prototype or a small project. The goal is to move fast and break things, right? Slapping TypeScript on that could slow you down with extra setup and type-checking gymnastics when you’re just trying to get your idea off the ground.

And if your team is new to TypeScript, the learning curve could be a speed bump. You're there trying to get to grips with types and interfaces, and suddenly, your project timeline is looking like a horror story. Same deal if you're working on a one-off script or a project that's not meant to last; the upfront cost in time and effort to set up TypeScript might not make sense.

Then there’s the odd chance you hit a library that’s like, “TypeScript? Never heard of it.” You find yourself in the wild west of typing your own definitions or wrestling with outdated ones. Not fun.
Bottom line: TypeScript has its place, and it's a game-changer for larger or more complex projects. But for quick prototypes, small teams, short-term projects, or when you're just cruising with JavaScript, sticking to plain JS might be the way to go. It’s all about using the right tool at the right time.

3. What is your favourite pancake recipe? We will test that!

It's a special family recipe for banana and Nutella pancakes, truly a treat. I could share, but then I'd be in big trouble—my mom says those who learn her secret might mysteriously disappear!
