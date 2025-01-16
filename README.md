npm- NODE PACKAGE MANAGER : allows to install library
NPX (NODE PACKAGE EXECUTOR) :- Not install in system, just directly execute it

npx create-react-app (utility - s/w through which we can create a project)  - A bUlky way
npm run start

npm create vite@latest
cd vite-project > npm i  - for node modules
TO run - npm run dev

CREATE & RUN PROJECT
npm create-react-app
npm run start

rafce - shortcut for React compiennt code

********************************* useCallback *********************************
useCallback is a React Hook that lets you cache a function definition between re-renders.

Purpose: useCallback is a React Hook used to memoize functions. It returns a memoized version of a callback function that only changes if one of its dependencies has changed.

Why Use It: It helps prevent unnecessary re-creations of functions when React re-renders the component. This can be beneficial for performance, especially when passing functions as props to child components or using them in useEffect.

const memoizedCallback = useCallback(() => {
  // function body
}, [dependency1, dependency2]);


********************************* useEffect *********************************
