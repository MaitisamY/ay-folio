/* IMPORTS */

export const PROFILE = {
        name: "Aitisam Yaseen",
        designation: "Web Developer",
        description: [
            `I specialize in frontend design and full-stack development, boasting expertise in HTML, CSS, JavaScript, 
            as well as frontend frameworks and libraries such as React. Additionally, I am proficient in backend 
            technologies including Node.js, Express, and PHP. My focus is on crafting intuitive 
            user interfaces and robust backend solutions.`,
            `Let's collaborate and build something extraordinary together!`
        ],
        quotes: [
            `I have a passion for learning new technologies and staying up-to-date with the latest trends in web development.`,
            `I'm a self-taught developer and I'm always looking for ways to improve my skills. I'm always looking for new 
                                ways to expand my knowledge and opportunities to grow as a developer.`,
            `I'm a passionate learner who loves to learn and explore new technologies. I'm always looking for ways to improve`
        ],
};

export const CODE_BLOCKS = {
    HTML: [
        '<div>', '<p>', '<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>', '<span>', '<a>', '<ul>', '<li>', '<ol>', '<table>', '<tr>',
        '<td>', '<th>', '<thead>', '<tbody>', '<tfoot>', '<form>', '<input>', '<label>', '<select>', '<option>', '<textarea>',
        '<button>', '<header>', '<main>', '<section>', '<article>', '<aside>', '<nav>', '<figure>', '<figcaption>', '<details>', 
        '<summary>', '<menu>', '<footer>', '<i>', '<br />', '<hr />', '<img>', '<video>', '<audio>', '<source>', '<canvas>', '<map>', 
        '<area>', '<object>', '<embed>', '<param>', '<blockquote>', '<cite>', '<strong>',
    ],
    REACT: [
        'useState', 'useEffect', 'useRef', 'useCallback', 'useMemo', 'useReducer', 'useContext', 'useLayoutEffect', 'useRef', 
        'useMemo', 'useCallback', 'forwardRef', 'useTransition', 'useDeferredValue', 'useSyncExternalStore', 
    ]
}

export const PROJECTS = [
    {
        description: `The Quote Generator Application is a simple project designed to provide users with inspirational and 
        thought-provoking quotes based on their preferences. Users can input the type of quote they are interested in 
        and specify the number of quotes they want to receive. The application utilizes the quotable.io API to 
        fetch quotes and presents them in an easily accessible format.`,
        github: "https://github.com/MaitisamY/quote-generator",
        image: "quote-generator.png",
        image_alt: "Quote Generator Application's image",
        name: "Quote Generator",
        url: "https://quote-generator-sooty-two.vercel.app/",
        view_link: "quote-generator",
        id: '50GzRqX0R9amOWT9HMQN'
    },
    {
        description: `The Resume Builder project provides a user-friendly interface to create and customize professional resumes 
        effortlessly. With sections for credentials, experience, education, skills, and certifications, you can showcase your 
        qualifications effectively. Additionally, features such as adding/removing sections and detailed descriptions 
        enable you to personalize your resume further.`,
        github: "https://github.com/MaitisamY/resume-monster",
        image: "resume-monster.png",
        image_alt: "Resume Monster Application's image",
        name: "Resume Monster",
        url: "https://resume-monster.vercel.app/",
        view_link: "resume-monster",
        id: 'Scl2NPGNhZOfWXiDoO3H'
    },
    {
        description: `AuthSpot provides a robust and customizable solution for implementing secure user authentication within 
        your web applications. It is powered by React and bundled with Vite for optimal performance. This documentation will 
        guide you through the folder structure, key features, customization options, and integration process.`,
        github: 'null',
        image: "login-system.png",
        image_alt: "AuthSpot Application's image",
        name: "AuthSpot",
        url: "https://auth-spot.vercel.app/",
        view_link: "auth-spot",
        id: 'b5JBaF1vcv5kWskFvYSI'
    },
    {
        description: `Flashcard Quiz is an interactive web application designed to help users practice and test their knowledge on 
        various topics. With multiple-choice answer selection and minor animations, users can engage in an enjoyable learning 
        experience. The app utilizes local storage for certain functionalities and provides a seamless quiz-taking process. 
        Flashcard quiz takes your name to only save your quiz progress and show you the results related only to you.`,
        github: "https://github.com/MaitisamY/flashcard-quiz",
        image: "flashcard-quiz.png",
        image_alt: "Flashcard Quiz Application's image",
        name: "Flashcard Quiz",
        url: "https://flashcard-quiz-blush.vercel.app/",
        view_link: "flashcard-quiz",
        id: 'l90SByUeGEsWHd5BkiAz'
    }
]
