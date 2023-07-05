# Digi Task

his is a frontend project built with React using TypeScript. It follows best practices and utilizes modern tools and libraries such as ESLint for code linting, Atomic Design for component organization, Yarn as the package manager, Vite as the build tool, and integrates with Figma for design collaboration.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher): Visit [https://nodejs.org](https://nodejs.org) and follow the installation instructions for your operating system.

## Development

To start the development server, run the following command:
yarn dev
This will launch the application in development mode. Open http://localhost:3000 in your browser to view it.

## Building the Project

To build a production-ready version of the application, run the following command:

yarn build
This will generate an optimized build in the dist directory.



## Linting

This project utilizes ESLint for code linting. To run the linter, use the following command:

yarn lint


## Atomic Design
The project follows the Atomic Design methodology for component organization. The components are structured into atoms, molecules, organisms, templates, and pages, providing a scalable and maintainable architecture.

## Design Collaboration
We use Figma for design collaboration. Access the Figma project at [link to Figma project] to view and collaborate on the designs.


## Branching Strategy
For each task or feature, create a new branch based on the master branch. Ensure that the branch name is descriptive of the task or feature being worked on. Once the task is completed, create a pull request for code review and merging it back into the master branch.

## Folder Structure and Architecture

This project follows a modular and scalable folder structure to organize the codebase effectively. Here's an overview of the folder structure:

- **src**: This is the root directory of the project.
  - **components**: Contains reusable React components used throughout the application.
    - **Header**: Contains the components related to the header section.
      - `Header.js`: The main header component file.
      - `Navbar.js`: The navigation bar component.
      - `SearchBar.js`: The search bar component.
      - `IconImage.js`: The icon image component.
    - **Footer**: Contains the components related to the footer section.
      - `Footer.js`: The main footer component file.
      - `PaginationBar.js`: The pagination bar component.
    - **PostCards**: Contains the components related to the post cards section.
      - `PostCards.js`: The main post cards component file.
      - `PostCard.js`: The individual post card component.
    - *Other reusable components*: Create separate folders/files for other reusable components as needed.
  - **pages**: Contains the page-level components that represent different views of the blog.
    - `Home.js`: The main home page component that combines the header, footer, and post cards.
    - *Other page components*: Create separate files for other pages of your blog (e.g., About, Contact, etc.).
  - **styles**: Contains the global and component-specific stylesheets.
    - `global.css`: Global styles that apply to the entire application.
    - **components**: Contains component-specific stylesheets.
      - `Header.css`: Styles specific to the header component.
      - `Footer.css`: Styles specific to the footer component.
      - `PostCards.css`: Styles specific to the post cards component.
    - *Other stylesheet files*: Create separate files for other components or styles as needed.
  - **assets**: Contains static assets used in the application (e.g., images, icons).
    - *Icon images*: Store your icon images in this directory.
    - *Other assets*: Store any other static assets in separate folders/files.
  - **util**: Contains utility functions or helper modules if necessary.
  - **App.js**: The main component that sets up the routes and renders the appropriate page component.
  - **index.js**: The entry point of the React application.

This folder structure helps to keep the codebase organized, promotes reusability, and makes it easier to navigate and maintain the project as it grows. Feel free to adapt this structure to suit your specific needs and preferences.

