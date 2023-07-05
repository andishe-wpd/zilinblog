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

## Commit Strategy

A consistent and well-structured commit strategy is essential for maintaining a clean and understandable project history. In this project, we follow an atomic commit strategy.

### Atomic Commits

Atomic commits involve breaking down changes into small, self-contained units of work. Each commit represents a single logical change or feature. By making commits atomic, we can achieve several benefits:

- **Clarity**: Atomic commits make it easier to understand the purpose and intent of each change. Each commit focuses on a specific task, bug fix, or feature, providing clear and concise information.

- **Revertibility**: If needed, atomic commits can be reverted or rolled back individually without affecting other unrelated changes. This allows for quick and precise undoing of specific modifications.

- **Collaboration**: Atomic commits facilitate collaboration among team members. They make it easier to review, discuss, and merge changes, as each commit represents a coherent and manageable unit.

- **Versioning**: Atomic commits align well with version control systems like Git. They provide a granular history of changes, allowing for easier tracking, branching, and merging.

When making commits, aim to follow these guidelines:

1. **Keep commits focused**: Each commit should have a clear purpose and represent a single logical change.

2. **Use descriptive commit messages**: Write concise but informative commit messages that explain the change introduced by the commit.

3. **Commit early and often**: Make commits as frequently as needed to capture incremental progress and ensure the project history remains manageable.

By adhering to the atomic commit strategy and these guidelines, we can maintain a clean and organized project history, making it easier to understand, collaborate, and maintain the codebase.

## Folder Structure and Architecture

This project follows a modular and scalable folder structure to organize the codebase effectively. Here's an overview of the folder structure:

- **src**: This is the root directory of the project.
  - **components**: Contains reusable React components used throughout the application.
    - **Header**: Contains the components related to the header section.
      - `Header.tsx`: The main header component file.
      - `Navbar.tsx`: The navigation bar component.
      - `SearchBar.tsx`: The search bar component.
      - `IconImage.tsx`: The icon image component.
    - **Footer**: Contains the components related to the footer section.
      - `Footer.tsx`: The main footer component file.
      - `PaginationBar.tsx`: The pagination bar component.
    - **PostCards**: Contains the components related to the post cards section.
      - `PostCards.tsx`: The main post cards component file.
      - `PostCard.tsx`: The individual post card component.
    - _Other reusable components_: Create separate folders/files for other reusable components as needed.
  - **pages**: Contains the page-level components that represent different views of the blog.
    - `Home.tsx`: The main home page component that combines the header, footer, and post cards.
    - _Other page components_: Create separate files for other pages of your blog (e.g., About, Contact, etc.).
  - **styles**: Contains the global and component-specific stylesheets.
    - `global.css`: Global styles that apply to the entire application.
    - **components**: Contains component-specific stylesheets.
      - `Header.css`: Styles specific to the header component.
      - `Footer.css`: Styles specific to the footer component.
      - `PostCards.css`: Styles specific to the post cards component.
    - _Other stylesheet files_: Create separate files for other components or styles as needed.
  - **assets**: Contains static assets used in the application (e.g., images, icons).
    - _Icon images_: Store your icon images in this directory.
    - _Other assets_: Store any other static assets in separate folders/files.
  - **util**: Contains utility functions or helper modules if necessary.
  - **App.tsx**: The main component that sets up the routes and renders the appropriate page component.
  - **main.tsx**: The entry point of the React application.

This folder structure helps to keep the codebase organized, promotes reusability, and makes it easier to navigate and maintain the project as it grows. Feel free to adapt this structure to suit your specific needs and preferences.


## VS Code Extensions

To enhance your development experience and maintain consistent coding standards, this project includes a set of recommended Visual Studio Code extensions. The extensions listed below are configured in the `.vscode` folder of this project:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
- [VS Code Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

These extensions provide essential functionalities for linting, code formatting, React Native development, debugging, auto-importing modules, styling components, and Git integration.

To make the most of these recommended extensions, open the project in Visual Studio Code, and if prompted, consider installing the recommended extensions. Alternatively, you can manually install them from the links provided above.

Please note that while these extensions are recommended, you are free to use other extensions or adjust the configuration according to your preferences. Feel free to explore the rich VS Code extension ecosystem and customize your development environment to suit your needs.
