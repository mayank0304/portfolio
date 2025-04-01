export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  content: string[];
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'week1',
    title: 'Exploring React Native & App Setup',
    subtitle: 'Setting up the React Native development environment and exploring the technology stack for our mobile application.',
    date: 'Feb 25 - Mar 3, 2025',
    image: '/1.png',
    content: [
      'This week marked the beginning of our mobile app development journey for SkillStack AI. We focused on exploring React Native as our cross-platform solution and setting up the development environment. The team spent considerable time evaluating the technology stack, understanding best practices, and creating a solid foundation for the upcoming development phases.',
      'We established the basic project structure, configured essential development tools, and created initial mockups for the core screens. The exploration phase involved extensive research on component libraries, navigation patterns, and state management solutions that would best fit our application requirements.',
      'As the lead mobile developer, I dedicated this week to setting up our React Native development environment and establishing the project architecture. I began by researching the most efficient way to structure our React Native application, particularly focusing on scalability and maintainability.',
      'I set up the initial repository with a clean folder structure that separates concerns and follows modern React Native best practices. This included configuring essential libraries such as React Navigation for routing, implementing a state management solution with Redux, and setting up TypeScript for type safety.',
      'One of the challenges I faced was deciding on the right UI component library that would match our design needs while maintaining performance. After evaluating several options, I selected React Native Paper for its Material Design implementation and excellent documentation.',
      'Additionally, I created several base components that will be used throughout the application, including buttons, input fields, and cards with consistent styling. These components follow our design system guidelines and will help maintain consistency across the app.',
      'By the end of the week, I had a functioning development environment with hot reloading, proper linting and formatting rules, and the ability to run on both iOS and Android simulators. The groundwork has been laid for the team to start implementing features in the coming weeks.'
    ]
  },
  {
    id: 'week2',
    title: 'API Integration & Backend Communication',
    subtitle: 'Implementing API communication between the mobile app and backend services to enable data flow.',
    date: 'Mar 11 - Mar 17, 2025',
    image: '/1.png',
    content: [
      'This week, our development efforts focused on establishing robust communication between the mobile application and our backend services. We implemented API integration across several key features, enabling data flow and synchronization.',
      'The team faced challenges with cross-platform networking nuances and authentication token management, but successfully established a solid API client that handles error states, request caching, and offline capabilities. We also implemented socket connections for real-time features and standardized our data models to ensure consistency between frontend and backend.',
      'By the end of the week, the app successfully communicated with all our primary API endpoints, passing our comprehensive test suite that verified both happy path scenarios and various edge cases.',
      'This week, I led the implementation of our API communication layer in the mobile app. I started by designing a robust architecture that would handle our networking needs while being flexible enough to evolve with our application.',
      'First, I set up a centralized API client using Axios, configuring it with interceptors for authentication headers and error handling. This approach allows us to maintain consistent request/response handling across all API calls while keeping the implementation details abstracted from feature components.',
      'I implemented the authentication flow, including token management, refresh logic, and secure storage using React Native\'s encrypted storage solution. This ensures tokens are properly managed and securely stored on the device.',
      'Additionally, I created API service modules for different feature domains, such as user management, quiz generation, and study materials. These modules encapsulate the specific endpoints and data transformations needed for each feature, making the codebase more maintainable and testable.',
      'Finally, I set up WebSocket integration for our real-time features, ensuring proper connection management and message handling. This enables feature like live study sessions.'
    ]
  },
  {
    id: 'week3',
    title: 'App Progress & Feature Development',
    subtitle: 'Weekly Overview of Feature Implementation and Development Progress',
    date: 'Mar 18 - Mar 24, 2025',
    image: '/1.png',
    content: [
      'This week saw significant progress in our mobile app development, with the team successfully implementing several key features. We focused on quiz functionality, infinite scrolling for content discovery, and enhancing the study experience.',
      'The development of quiz generation and attempt features marks a major milestone for the app, allowing users to create personalized quizzes based on their study materials. The infinite scroll implementation provides a seamless experience for users browsing through educational content.',
      'Additionally, we made improvements to the notes functionality, enhancing the way users can organize and access their study materials. The team collaborated effectively to ensure these features work cohesively within the application\'s architecture.',
      'This week, I focused on developing core quiz functionality in our mobile application, a key feature that aligns with our development goals. Specifically, I implemented both the quiz generation and quiz attempt features.',
      'For the quiz generation feature, I created a clean, intuitive interface that allows users to select topics and difficulty levels. The interface communicates with our backend API to generate personalized questions. I implemented a loading state with an engaging animation to keep users engaged during the generation process.',
      'I also contributed to the infinite scroll implementation. This feature allows users to seamlessly browse through educational content without pagination breaks. I optimized the performance by implementing lazy loading of images and virtualization of list items to ensure smooth scrolling even with large data sets.',
      'Additionally, I made updates to the notes functionality, adding the ability to organize notes by topics and tags, and implementing a robust search feature that helps users quickly find specific information in their study materials.',
      'All these features were implemented with a focus on cross-platform consistency, ensuring they work properly on both iOS and Android devices with various screen sizes.'
    ]
  },
  {
    id: 'week4',
    title: 'Final Touches & Deployment Preparation',
    subtitle: 'Weekly Overview of Final Development and Deployment Readiness',
    date: 'Mar 25 - Mar 31, 2025',
    image: '/1.png',
    content: [
      'The final week of March was marked by significant progress in preparing the SkillStack AI mobile application for deployment. The team focused on several critical areas: fixing bugs, enhancing the UI for mobile responsiveness, integrating analytics, and preparing the deployment configuration.',
      'Key improvements included fixing quiz saving functionality, adding a new home page with developer profiles, implementing proper user verification, and removing hardcoded URLs in favor of environment variables. The team also enhanced the navigation experience and fixed various issues related to authentication and CORS.',
      'The week culminated with the addition of Vercel configuration for deployment, setting the stage for the app\'s official launch. Multiple deployment-related fixes were implemented to ensure a smooth release process.',
      'During this final week, I focused on several critical aspects of the mobile app to prepare it for deployment. My contributions aligned with the team\'s push toward finalizing the application.',
      'One of my primary tasks was fixing the quiz functionality. I completely revamped the quiz saving system, removing automatic persistence during generation and replacing it with a more user-friendly approach where saving is explicitly initiated by the user. This involved creating a floating results panel with a save option and improving the quiz review experience with better explanations and handling of unanswered questions.',
      'I also dedicated significant effort to enhancing the mobile responsiveness of our application. Specifically, I made the Infinite page fully responsive for mobile devices, ensuring that all elements adapt properly to different screen sizes and orientations. This included optimizing layouts, adjusting font sizes, and implementing proper touch interactions.',
      'For the Reels feature, I implemented significant UI and animation improvements. This included adding motion-based slide transitions, keyboard controls for navigation, and new visual components like the DotPattern and Ripple effects. I also enhanced the quiz interaction within Reels by adding animated answers and feedback, and moved to a single-screen layout for better user experience.',
    ]
  }
]; 