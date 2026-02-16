export const navLinks = [
    { id: 1, name: 'Home', href: '/#home' },
    { id: 2, name: 'About', href: '/#about' },
    { id: 3, name: 'Work', href: '/#work' },
    { id: 4, name: 'Contact', href: '/#contact' },
];


export const myProjects = [
    {
        title: 'Random Forest Hyperparameter Tuning for Churn Prediction',
        desc: 'Investigated the impact of hyperparameter tuning on Random Forest performance for telecom customer churn prediction using a Kaggle dataset of 7,043 customers and 21 features.',
        subdesc:
            'Built a full preprocessing pipeline in Python (Pandas, Seaborn, Scikit-Learn), implemented cross-validation, RandomizedSearchCV, and improved test cross-validation accuracy from 78.9% to 81.0% through optimized tuning.',
        href: '/assets/proj1.pdf',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/myself.svg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 2,
                name: 'Sklearn',
                path: '/assets/sklearn.webp',
            },
            {
                id: 3,
                name: 'Pandas',
                path: '/assets/pandas.svg',
            },
        ],
    },
    {
        title: 'Omani Banking Transaction Classifier (ML + NLP)',
        desc: 'Built a supervised ML classifier to automatically categorize noisy, unstructured bank-statement transactions in an Omani banking context to improve Personal Finance Management (PFM) and internal analytics.',
        subdesc:
            'Generated 30,000 realistic synthetic transactions, engineered lexicon + TF-IDF word/char n-gram features with amount signals, benchmarked Linear SVM, Gradient Boosting, and MLP, and validated generalization on an out-of-sample merchant dataset.',
        href: '/assets/proj2.pdf',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/bank-muscat.svg',
        logoStyle: {
            backgroundColor: 'white',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 2,
                name: 'Sklearn',
                path: '/assets/sklearn.webp',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Toronto Student Investment Council',
        pos: 'Junior Analyst',
        duration: '2025 - Present',
        title: "Conduct equity research within the TMT sector, develop valuation theses, and pitched DoubleVerify at Buy-Side Night with an AI-driven ad verification investment case.",
        icon: '/assets/tsic.svg',
        animation: 'clapping',
    },
    {
        id: 2,
        name: 'Bank Muscat',
        pos: 'Business Intelligence Intern',
        duration: 'Summer 2025',
        title: "Built an end-to-end NLP and machine learning pipeline to classify retail banking transactions, benchmarked SVM, MLP, and Gradient Boosting models, and presented actionable customer segmentation insights to senior retail leadership.",
        icon: '/assets/bank-muscat.svg',
        animation: 'victory',
    },
    {
        id: 3,
        name: 'IMTAC Oman',
        pos: 'Data Analytics Intern',
        duration: 'Summer 2024',
        title: "Developed supervised ML models for housing price prediction using economic and spatial features, optimized hyperparameters, and delivered a reusable pricing prototype for internal analytics projects.",
        icon: '/assets/imtac.svg',
        animation: 'clapping',
    },
    {
        id: 4,
        name: 'OTE Group',
        pos: 'Automotive Services Intern',
        duration: 'Summer 2023',
        title: "Supported high-volume automotive service operations, assisted in diagnostics and maintenance workflows, and gained exposure to enterprise systems used for repair tracking and performance metrics.",
        icon: '/assets/ote.png',
        animation: 'salute',
    },
];
