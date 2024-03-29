/* IMPORTS */
import FlashcardQuiz from '../assets/projects/flashcard-quiz.png';
import QuoteGenerator from '../assets/projects/quote-generator.png';
import ResumeMonster from '../assets/projects/resume-monster.png';
import LoginSystem from '../assets/projects/login-system.png';

export const PROFILE = [
    {
        name: "Aitisam Yaseen",
        role: "Web Developer",
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
    },
];

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
        id: 1,
        name: 'Flashcard Quiz',
        image: FlashcardQuiz,
        imageAlt: `Flashcard Quiz Application's image`, 
        url: 'https://flashcard-quiz-blush.vercel.app/',
        github: 'https://github.com/MaitisamY/flashcard-quiz',
        description: `A simple flashcard quiz application that allows users to create accounts and test their knowledge of various topics.`
    },
    {
        id: 2,
        name: 'Quote Generator',
        image: QuoteGenerator,
        imageAlt: `Quote Generator Application's image`,
        url: 'https://quote-generator-sooty-two.vercel.app/',
        github: 'https://github.com/MaitisamY/quote-generator',
        description: `The Quote Generator Application fetches inspirational quotes from quotable.io based on user preferences, 
        allowing them to specify the type and quantity of quotes desired.`
    },
    {
        id: 3,
        name: 'Resume Monster',
        image: ResumeMonster,
        imageAlt: `Resume Monster Application's image`,
        url: 'https://resume-monster.vercel.app/',
        github: 'https://github.com/MaitisamY/resume-monster',
        description: `Resume Monster is a web application that allows users to create and download resumes.`
    },
    {
        id: 4,
        name: 'AuthSpot',
        image: LoginSystem,
        imageAlt: `AuthSpot Application's image`,
        url: 'https://auth-spot.vercel.app/',
        github: '',
        description: `AuthSpot is made to access your account with ease. Login and Signup solution built with React.`
    }
]
