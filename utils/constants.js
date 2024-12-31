export const projectsData = [
  {
    title: "Automatic Invoice Processing",
    description: `This is an Automatic Invoice Generator platform using Next.js, crafted specifically for managing personal and corporate insurance products within a structured, role-based framework.The platform is engineered to handle complex insurance logic, requiring multiple layers of validation to ensure accuracy and compliance at every stage.The user interface is designed to be visually appealing and consistent, promoting a seamless experience across all features. At the core is a landing dashboard that displays processing details in a structured, tabular format, empowering users to track and manage transactions efficiently.Additionally, the platform provides insightful graphical representations based on country data, along with an interactive map that visualizes our provider network.This comprehensive approach not only simplifies invoice generation but also enhances data transparency and accessibility, making it an invaluable tool for managing insurance products.`,
    image: "/images/autobill.jpg",
    link: "https://auto-bill-generator.vercel.app/",
  },
  {
    title: "Matha Buru Hill Resort Website",
    description:
      'The BNB website for Matha Buru Hill Eco Resort is crafted to be fully responsive across all devices, presenting a seamless user experience. Located in the scenic region of Purulia, this website effectively showcases the resort\'s natural charm and facilities, beginning with an "About Us" section that offers visitors an insight into the resort’s unique features and hospitality. Following this, the "Amenities" section provides detailed information on the resort\'s offerings, tailored to ensure guests’ comfort and relaxation. To capture the allure of the location, a "Gallery" section allows visitors to visualize the resort and its surroundings, enhancing their anticipation for an immersive getaway. The "Packages" section presents curated options catering to different travel preferences, and the "Booking" section includes an inquiry form for ease of communication. Here, users can submit queries or reach out directly through the resort’s social media accounts. Developed with React for the front end and Node.js for the backend, the website utilizes MongoDB for efficient data handling, ensuring a smooth and reliable experience for all users',
    image: "/images/bnb.jpg",
    link: "https://mathaburuhillecoresort.onrender.com/",
  },
  {
    title: "Yuvipep Website",
    description: `YuviPep.com is an educational platform offering live online courses that cover a range of subjects, tailored to different levels of student needs.It includes courses designed to enhance foundational skills as well as advanced topics across various fields, likely including technical and non-technical disciplines.Alongside its course offerings, YuviPep also features a "Student's Corner," which appears to provide additional resources for enrolled students, perhaps in the form of forums, support materials, or interactive elements to aid learning​. For Yuvipep.com, I designed and developed the Careers page, making it a dynamic, engaging destination for potential applicants.This page serves as a gateway for candidates to explore opportunities, providing comprehensive job descriptions, application instructions, and an inviting, professional presentation of Yuvipep’s mission and values.My contribution focused on creating a user-friendly interface, optimizing the page’s layout for clarity, and implementing responsive design to ensure accessibility across devices.This allows Yuvipep to attract talent effectively while maintaining a consistent brand image throughout their online presence.`,
    image: "/images/yuvipep.jpg",
    link: "https://yuvipep.com/careers",
  },
  {
    title: "Resolution Tracker",
    description: `Resolution Tracker Application is a powerful and highly interactive tool, designed to help you set, manage, and achieve personal and professional goals. With easy goal creation, real-time progress tracking, and celebratory animations when milestones are achieved, it makes your trip toward self-improvement exciting and rewarding. Its user-friendly design guarantees smooth navigation, while its social features allow you to share your resolutions and be inspired by a supportive community. Whether it's personal growth, career opportunities, or simply new hobbies, be motivated, and on top of the things with this app—it's the perfect companion for the year ahead that will help you achieve all your resolutions.`,
    image: "/images/resolute.png",
    link: "https://resolute-drab.vercel.app/",
  },
  {
    title: "Street Canvas",
    description:
      "The Street Canvas portfolio website is a carefully crafted platform designed to showcase the work and journey of Nikita Biswas, a dedicated street photographer from Kolkata. This website begins with a visually engaging Landing page, which provides visitors with direct links to her various social media profiles and an impressive display of her photography portfolio. This initial interaction captures the essence of her work and offers easy access to her online presence. Following this, the About page takes a personal approach, offering an in-depth look at Nikita's story. Here, she shares her journey, passion for street photography, career goals, and her connection to the streets of various places, giving visitors insight into her perspective and motivation. Lastly, the Booking page facilitates direct engagement by allowing interested individuals to schedule sessions or inquire about her work. This page also includes a display of her available slots, making it easy for clients to choose a convenient time to connect. Altogether, Street Canvas is an interactive, user-friendly site that effectively promotes Nikita Biswas's talent and facilitates connections with potential clients",
    image: "/images/streetcanvas.jpg",
    link: "https://streetcanvas.onrender.com/",
  },
  {
    title: "Tic Tac Toe",
    description: `This Tic-Tac-Toe game, developed with React, is a responsive web application that allows players to engage in the classic game with a dynamic and user-friendly interface. The game’s structure begins with the main App component, which sets up the overall framework and appearance, including the primary game board and background elements for visual appeal. Within the game, the Board component handles the core mechanics and state management, using state variables to track the game’s history and monitor player moves. This tracking allows players to revisit past moves, enhancing interactivity by letting them review their strategies. Game logic within the Board component uses the calculateWinner function, which determines if a player has won or if the game has ended in a tie. This function checks specific board positions and highlights winning moves, adding an element of excitement to each win. Each cell on the Tic-Tac-Toe grid is represented by the Square component, which displays either an "X" or an "O" based on player actions. The component also includes styling adjustments to differentiate player symbols, giving the game an engaging look and feel. The History component provides players with a timeline of their moves, allowing them to navigate back through the game. This functionality is complemented by a StateInfo component, which displays the current game status, updating in real time to show whose turn it is, the game’s winner, or if the game has tied. The calculateWinner function powers the winning logic by checking all possible winning combinations. If a player meets one of these conditions, the function identifies and highlights the winning squares, providing visual feedback that signifies victory. This Tic-Tac-Toe game offers a streamlined and enjoyable experience for players of all ages, adapting seamlessly across devices and providing a polished, interactive experience`,
    image: "/images/tictactoe.jpg",
    link: "https://sayantictac.surge.sh/",
  },
  {
    title: "1Stop E-Commerce Website",
    description:
      "The E-commerce website designed for 1Stop.ai offers a professional, responsive interface tailored for an engaging user experience across devices. This design includes essential pages such as a Landing Page to showcase the brand, an About Us section to introduce the company, and a Services page to outline offerings. Additionally, a Blogs section provides space for content and engagement, while the Contact page ensures easy communication with visitors. Login and Register pages are also integrated for user account management. The site’s layout and styling leverage Bootstrap 4, ensuring a cohesive and modern design",
    link: "https://onestopecommerce.onrender.com/",
    image: "/images/ecommerce.jpg",
  },
  {
    title: "Student Management System",
    description:
      "The Student Management System is a Python-based application with a graphical interface built using Tkinter. Designed for schools and colleges, it provides an essential tool for managing student records, focusing on core database operations: Create, Read, Update, and Delete (CRUD). The project begins by establishing a connection to a MySQL server, enabling seamless database interactions. This connection allows the system to perform all database-related tasks, including adding new student records, displaying records to the user, and managing existing data entries. The backend uses the pymysql library to facilitate these database operations, ensuring a stable and efficient interface with the MySQL database. A MySQL database is created in phpMyAdmin through WAMP server, where we define tables and insert initial data to set up the structure. After setting up the database, we move to coding in the editor, where we leverage Tkinter for the graphical interface. The user interface is designed with Tkinter, where various frames, labels, buttons, and entry fields are set up to allow users to input student details such as name, phone number, email, and password. Each interaction on the GUI triggers backend functions that connect to the database, ensuring that records are securely stored, retrieved, updated, or deleted as needed. The interface allows users to add new students, view and search for student records, and update or delete existing records, making it easy for administrators to manage student information efficiently. In summary, this Student Management System provides an interactive and user-friendly solution for handling student data, combining Python, Tkinter, and MySQL to create a reliable and robust tool for educational institutions.",
    image: "/images/studentmanagement.webp",
    link: "https://github.com/sayan-k-d/Student-management-python/releases/download/v1.0/Ui.exe",
  },
];

export const skillsData = [
  { name: "React", image: "/images/react.webp" },
  { name: "Node", image: "/images/node.webp" },
  { name: "MongoDB", image: "/images/mongo.webp" },
  { name: "JavaScript", image: "/images/js.webp" },
  { name: "Python", image: "/images/python.webp" },
  { name: "Django", image: "/images/dj.webp" },
  { name: "HTML & CSS", image: "/images/htmlcss.svg" },
];
