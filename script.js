const quizData = [
  // UNIT-1
  {
    question: "Software Engineering can be best defined as:",
    image: "",
    options: [
      "The art of programming",
      "The process of developing programs quickly",
      "The systematic, disciplined, and quantifiable approach to software development",
      "Writing code in different programming languages"
    ],
    answer: 2
  },
  {
    question: "The exploratory style of programming focuses mainly on:",
    image: "",
    options: [
      "Systematic design and documentation",
      "Rapid coding without much planning",
      "Team-based software management",
      "Quality assurance"
    ],
    answer: 1
  },
  {
    question: "A major shortcoming of the exploratory style is:",
    image: "",
    options: [
      "Faster development",
      "Lack of maintainability and scalability",
      "More documentation",
      "Reduced testing time"
    ],
    answer: 1
  },
  {
    question: "The primary goal of software engineering is to:",
    image: "",
    options: [
      "Reduce cost and time",
      "Produce high-quality software in a systematic way",
      "Increase coding speed",
      "Replace programmers with tools"
    ],
    answer: 1
  },
  {
    question: "The complexity of software is best handled by:",
    image: "",
    options: [
      "Using a single developer",
      "Breaking the system into manageable modules",
      "Avoiding documentation",
      "Using only one programming language"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a basic principle to handle complexity?",
    image: "",
    options: [
      "Abstraction",
      "Ignorance",
      "Randomization",
      "Guesswork"
    ],
    answer: 0
  },
  {
    question: "Which of these is not a type of software project?",
    image: "",
    options: [
      "Application software",
      "System software",
      "Embedded software",
      "Textile software"
    ],
    answer: 3
  },
  {
    question: "Software services generally refer to:",
    image: "",
    options: [
      "Hardware maintenance",
      "Providing solutions or support using software",
      "Manufacturing software CDs",
      "Selling computer parts"
    ],
    answer: 1
  },
  {
    question: "The emergence of software engineering as a discipline was mainly due to:",
    image: "",
    options: [
      "Software crisis of the 1960s",
      "Internet revolution",
      "Availability of cheap computers",
      "Advancement of AI"
    ],
    answer: 0
  },
  {
    question: "The “software crisis” refers to:",
    image: "",
    options: [
      "Difficulty in coding simple programs",
      "Failure to deliver large, reliable software systems on time and within budget",
      "Lack of hardware components",
      "Shortage of programmers"
    ],
    answer: 1
  },
  {
    question: "Evolution of design techniques has moved from:",
    image: "",
    options: [
      "Structured to Object-Oriented design",
      "Object-Oriented to Structured design",
      "Agile to Waterfall",
      "Manual to Automated coding"
    ],
    answer: 0
  },
  {
    question: "One basic issue in software engineering is:",
    image: "",
    options: [
      "Handling low-level programming only",
      "Ensuring software reliability and maintainability",
      "Avoiding documentation",
      "Ignoring customer needs"
    ],
    answer: 1
  },
  {
    question: "Which of the following is not a software engineering activity?",
    image: "",
    options: [
      "Requirements analysis",
      "Design",
      "Hardware manufacturing",
      "Testing"
    ],
    answer: 2
  },
  {
    question: "Which of these describes a software service company?",
    image: "",
    options: [
      "Develops software for specific clients",
      "Manufactures operating systems",
      "Produces software packages for retail",
      "Develops hardware components"
    ],
    answer: 0
  },
  {
    question: "The main focus of software engineering is:",
    image: "",
    options: [
      "Coding only",
      "Process, quality, and management",
      "Hardware integration",
      "User interface design"
    ],
    answer: 1
  },
  {
    question: "A software life cycle model describes:",
    image: "",
    options: [
      "The hardware used in software development",
      "The stages involved in software development",
      "The employees in a company",
      "The marketing process of software"
    ],
    answer: 1
  },
  {
    question: "The classical waterfall model is:",
    image: "",
    options: [
      "Linear and sequential",
      "Iterative",
      "Spiral",
      "Random"
    ],
    answer: 0
  },
  {
    question: "The first phase in the classical waterfall model is:",
    image: "",
    options: [
      "Design",
      "Implementation",
      "Requirement analysis and specification",
      "Testing"
    ],
    answer: 2
  },
  {
    question: "The last stage of the waterfall model is:",
    image: "",
    options: [
      "Design",
      "Coding",
      "Maintenance",
      "Testing"
    ],
    answer: 2
  },
  {
    question: "The main drawback of the waterfall model is:",
    image: "",
    options: [
      "Too many iterations",
      "No feedback allowed between stages",
      "Too flexible",
      "Lack of documentation"
    ],
    answer: 1
  },
  {
    question: "The iterative waterfall model improves upon the classical model by:",
    image: "",
    options: [
      "Removing design phase",
      "Allowing feedback and corrections between stages",
      "Adding more stages",
      "Eliminating testing"
    ],
    answer: 1
  },
  {
    question: "The V-model stands for:",
    image: "",
    options: [
      "Verification and Validation model",
      "Visual and Virtual model",
      "Versioning model",
      "Variable model"
    ],
    answer: 0
  },
  {
    question: "In the V-model, the right side of the “V” represents:",
    image: "",
    options: [
      "Coding activities",
      "Testing and validation phases",
      "Design specification",
      "Maintenance"
    ],
    answer: 1
  },
  {
    question: "The V-model emphasizes:",
    image: "",
    options: [
      "Parallel development and testing",
      "Rapid coding",
      "Ignoring verification",
      "Random testing"
    ],
    answer: 0
  },
  {
    question: "The Prototyping model is best suited for:",
    image: "",
    options: [
      "Well-defined requirements",
      "Undefined or evolving requirements",
      "Hardware development",
      "Short-term projects only"
    ],
    answer: 1
  },
  {
    question: "A prototype in software engineering is:",
    image: "",
    options: [
      "The final software version",
      "An initial working model to understand requirements",
      "The source code",
      "The system manual"
    ],
    answer: 1
  },
  {
    question: "The main advantage of prototyping is:",
    image: "",
    options: [
      "Helps users understand requirements early",
      "Eliminates testing",
      "Reduces communication",
      "Avoids documentation"
    ],
    answer: 0
  },
  {
    question: "The incremental model develops software:",
    image: "",
    options: [
      "In a single stage",
      "In small, manageable increments or versions",
      "Without user feedback",
      "Without testing"
    ],
    answer: 1
  },
  {
    question: "The first increment in the incremental model usually delivers:",
    image: "",
    options: [
      "The complete system",
      "The core product functionality",
      "User manuals",
      "Design documents"
    ],
    answer: 1
  },
  {
    question: "One benefit of the incremental model is:",
    image: "",
    options: [
      "Early partial product delivery",
      "No need for documentation",
      "Reduced user involvement",
      "No testing required"
    ],
    answer: 0
  },
  {
    question: "In the waterfall model, once a phase is completed:",
    image: "",
    options: [
      "It can easily be modified later",
      "It is frozen and cannot easily be revisited",
      "It automatically repeats",
      "It merges with other phases"
    ],
    answer: 1
  },
  {
    question: "Which life cycle model is most rigid?",
    image: "",
    options: [
      "Waterfall model",
      "Prototyping model",
      "Incremental model",
      "Spiral model"
    ],
    answer: 0
  },
  {
    question: "The waterfall model is most suitable when:",
    image: "",
    options: [
      "Requirements are well understood and stable",
      "Requirements change frequently",
      "User feedback is critical",
      "System is highly complex and uncertain"
    ],
    answer: 0
  },
  {
    question: "Which life cycle model combines development and testing activities?",
    image: "",
    options: [
      "V-model",
      "Waterfall model",
      "Incremental model",
      "Spiral model"
    ],
    answer: 0
  },
  {
    question: "The prototyping model is disadvantageous because:",
    image: "",
    options: [
      "Users get a better understanding of the system",
      "Frequent changes make it difficult to manage",
      "It reduces communication",
      "It requires no testing"
    ],
    answer: 1
  },
  {
    question: "Which model provides working software earlier in the process?",
    image: "",
    options: [
      "Incremental model",
      "Waterfall model",
      "V-model",
      "Classical model"
    ],
    answer: 0
  },
  {
    question: "The V-model directly links each development stage with:",
    image: "",
    options: [
      "A corresponding testing phase",
      "Coding phase",
      "Maintenance",
      "Deployment"
    ],
    answer: 0
  },
  {
    question: "The iterative waterfall model helps to:",
    image: "",
    options: [
      "Correct errors early in development",
      "Skip requirements gathering",
      "Avoid testing",
      "Reduce documentation"
    ],
    answer: 0
  },
  {
    question: "The incremental model allows:",
    image: "",
    options: [
      "Delivery of partial functionalities to users early",
      "Delivery of complete software only at the end",
      "No user feedback",
      "No testing in between increments"
    ],
    answer: 0
  },
  {
    question: "The V-model can be considered as an extension of:",
    image: "",
    options: [
      "Waterfall model",
      "Prototyping model",
      "Incremental model",
      "Spiral model"
    ],
    answer: 0
  },

  // UNIT-2
  {
    question: "Which of the following best describes the concept of pair programming?",
    image: "",
    options: [
      "Two developers working independently on different parts of the same project.",
      "One developer writes code while the other reviews each line in real time.",
      "Two developers writing separate test cases for the same module.",
      "One developer codes while the other creates documentation."
    ],
    answer: 1
  },
  {
    question: "Suppose your organization has developed a customer relationship management (CRM) software for an Indian bank a few months ago. Now, you have a fresh order to develop a customer relationship software for an American bank. Which one of the following life cycle models would you use for the software development?",
    image: "",
    options: [
      "V model",
      "Prototyping model",
      "Iterative waterfall model",
      "Scrum"
    ],
    answer: 3
  },
  {
    question: "Which one of the following activities is performed during the requirements analysis activity in a waterfall-based software development process?",
    image: "",
    options: [
      "Identify requirements.",
      "Build a prototype.",
      "Identify any ambiguity, inconsistency, and incompleteness in the gathered requirements",
      "Analyze and allocate resources for requirements specification"
    ],
    answer: 2
  },
  {
    question: "Consider the following requirement for a word processor software: 'The software should provide a facility to convert the file into HTML format.' Which one of the following types of requirements is this?",
    image: "",
    options: [
      "Functional requirement",
      "Non-functional requirement",
      "Constraint on the implementation",
      "Goal of implementation"
    ],
    answer: 0
  },
  {
    question: "Consider the following partial description of the security software of an educational institute: 'A camera at the main gate should detect an incoming vehicle, and the gate should be opened only for the registered vehicles.' Which one of the following types of requirements is this?",
    image: "",
    options: [
      "Functional requirement",
      "Non-Functional requirement",
      "External interface",
      "Design constraint"
    ],
    answer: 0
  },
  {
    question: "Which one of the following best describes a functional requirement of a software system?",
    image: "",
    options: [
      "The system must be developed using Python and Django.",
      "The system should respond to user input within 2 seconds.",
      "The system shall allow users to log in using their email and password.",
      "The system must be maintainable and scalable for future enhancements."
    ],
    answer: 2
  },
  {
    question: "Suppose a software project is underway using the waterfall model of development. When is the requirement specification activity carried out?",
    image: "",
    options: [
      "During the requirements gathering activity",
      "Immediately after the requirements analysis activity is complete",
      "Before the requirements analysis activity",
      "Before the requirements gathering activity"
    ],
    answer: 1
  },
  {
    question: "Which one of the following is not a requirement gathering technique?",
    image: "",
    options: [
      "Task analysis",
      "Scenario analysis",
      "Form analysis",
      "SRS document review"
    ],
    answer: 3
  },
  {
    question: "Which one of the following views of the software to be developed is implicit in an SRS document?",
    image: "",
    options: [
      "Black box",
      "White box",
      "Grey box",
      "Glass box"
    ],
    answer: 0
  },
  {
    question: "The Evolutionary model is best suited for:",
    image: "",
    options: [
      "Projects with well-defined requirements",
      "Projects where requirements evolve over time",
      "Short-term projects only",
      "Maintenance phase of software"
    ],
    answer: 1
  },
  {
    question: "The Agile model emphasizes:",
    image: "",
    options: [
      "Extensive documentation",
      "Customer collaboration and flexibility",
      "Strict process adherence",
      "Sequential design"
    ],
    answer: 1
  },
  {
    question: "Which of the following is not an Agile principle?",
    image: "",
    options: [
      "Welcome changing requirements",
      "Working software is the primary measure of progress",
      "Process compliance over individuals",
      "Deliver working software frequently"
    ],
    answer: 2
  },
  {
    question: "Extreme Programming (XP) focuses on:",
    image: "",
    options: [
      "Pair programming and test-driven development",
      "Sequential development",
      "Late customer involvement",
      "Documentation-heavy process"
    ],
    answer: 0
  },
  {
    question: "In Scrum, a Sprint typically lasts:",
    image: "",
    options: [
      "1–2 hours",
      "1–4 weeks",
      "2–6 months",
      "6–12 weeks"
    ],
    answer: 1
  },
  {
    question: "The person responsible for maximizing product value in Scrum is:",
    image: "",
    options: [
      "Scrum Master",
      "Product Owner",
      "Project Manager",
      "Development Team"
    ],
    answer: 1
  },
  {
    question: "The Scrum Master’s main role is to:",
    image: "",
    options: [
      "Assign tasks to team members",
      "Remove impediments and ensure Scrum practices",
      "Approve design documents",
      "Manage customer billing"
    ],
    answer: 1
  },
  {
    question: "A Scrum team is typically:",
    image: "",
    options: [
      "Cross-functional and self-organizing",
      "Hierarchical",
      "Managed by a supervisor",
      "Departmentalized"
    ],
    answer: 0
  },
  {
    question: "The Scrum life cycle begins with:",
    image: "",
    options: [
      "Sprint Planning",
      "Product Backlog creation",
      "Daily Scrum",
      "Sprint Review"
    ],
    answer: 1
  },
  {
    question: "Which of the following is not an activity in requirement specification?",
    image: "",
    options: [
      "Requirement gathering",
      "Requirement analysis",
      "Coding",
      "Requirement specification"
    ],
    answer: 2
  },
  {
    question: "Requirement gathering primarily involves:",
    image: "",
    options: [
      "Identifying user needs and expectations",
      "Writing test cases",
      "Designing algorithms",
      "Debugging code"
    ],
    answer: 0
  },
  {
    question: "Functional requirements describe:",
    image: "",
    options: [
      "How the system performs",
      "What the system should do",
      "System’s physical structure",
      "Hardware limitations"
    ],
    answer: 1
  },
  {
    question: "Non-functional requirements are concerned with:",
    image: "",
    options: [
      "System functionality",
      "System quality attributes",
      "Business rules only",
      "Source code"
    ],
    answer: 1
  },
  {
    question: "Which of these is a tool for representing complex decision logic?",
    image: "",
    options: [
      "Flowchart",
      "Decision tree",
      "Pseudocode",
      "Gantt chart"
    ],
    answer: 1
  },
  {
    question: "A Decision Table is used when:",
    image: "",
    options: [
      "Logic depends on multiple conditions and actions",
      "The program has no conditions",
      "Only one outcome is possible",
      "A mathematical formula defines the output"
    ],
    answer: 0
  },
  {
    question: "In Decision Tables, columns typically represent:",
    image: "",
    options: [
      "Inputs only",
      "Rules or conditions",
      "Outputs",
      "Code snippets"
    ],
    answer: 1
  },
  {
    question: "A Decision Tree is a graphical representation of:",
    image: "",
    options: [
      "Sequential steps",
      "Conditions and possible outcomes",
      "Database schema",
      "Program code"
    ],
    answer: 1
  },
  {
    question: "The first activity in software requirement engineering is:",
    image: "",
    options: [
      "Requirement gathering",
      "System design",
      "Coding",
      "Maintenance"
    ],
    answer: 0
  },
  {
    question: "Requirement specification aims to produce:",
    image: "",
    options: [
      "SRS (Software Requirement Specification) document",
      "Source code",
      "Design diagram",
      "Test plan"
    ],
    answer: 0
  },
  {
    question: "Which of the following is true about modular design?",
    image: "",
    options: [
      "Modules are highly interdependent",
      "Each module performs a single function",
      "Modules are not reusable",
      "Modules cannot be independently tested"
    ],
    answer: 1
  },
  {
    question: "Modularity enhances:",
    image: "",
    options: [
      "Code size",
      "Maintainability and reusability",
      "Complexity",
      "Execution time"
    ],
    answer: 1
  },
  {
    question: "Functional Independence means:",
    image: "",
    options: [
      "Modules can function without relying heavily on other modules",
      "Modules share the same data",
      "Modules execute in sequence",
      "Modules are physically separated only"
    ],
    answer: 0
  },
  {
    question: "The two key concepts of functional independence are:",
    image: "",
    options: [
      "Coupling and cohesion",
      "Cohesion and integration",
      "Abstraction and encapsulation",
      "Polymorphism and inheritance"
    ],
    answer: 0
  },
  {
    question: "High cohesion in a module means:",
    image: "",
    options: [
      "Module performs multiple unrelated functions",
      "Module focuses on a single, well-defined task",
      "Module depends on others",
      "Module uses global data"
    ],
    answer: 1
  },
  {
    question: "Low coupling between modules implies:",
    image: "",
    options: [
      "High dependency",
      "Low dependency",
      "Shared global variables",
      "Frequent communication"
    ],
    answer: 1
  },
  {
    question: "The main goal of design fundamentals is to:",
    image: "",
    options: [
      "Translate requirements into architecture",
      "Write detailed code",
      "Define testing strategy",
      "Create user manuals"
    ],
    answer: 0
  },
  {
    question: "In software design, abstraction helps to:",
    image: "",
    options: [
      "Hide implementation details",
      "Increase complexity",
      "Link all modules tightly",
      "Avoid modularization"
    ],
    answer: 0
  },

  {
  question: "Software design is primarily concerned with:",
  options: [
    "Writing code",
    "Translating requirements into a blueprint for implementation",
    "Testing the software",
    "Maintaining hardware components"
  ],
  answer: 1
},
{
  question: "Coupling in software design refers to:",
  options: [
    "The degree of dependency between modules",
    "The internal structure of a module",
    "The clarity of code",
    "The length of the code"
  ],
  answer: 0
},
{
  question: "Which of the following represents the strongest (worst) form of coupling?",
  options: [
    "Control coupling",
    "Common coupling",
    "Content coupling",
    "Data coupling"
  ],
  answer: 2
},
{
  question: "The best (weakest) type of coupling is:",
  options: [
    "Data coupling",
    "Control coupling",
    "Common coupling",
    "Content coupling"
  ],
  answer: 0
},
{
  question: "When two modules share a global variable, it represents:",
  options: [
    "Data coupling",
    "Common coupling",
    "Control coupling",
    "Stamp coupling"
  ],
  answer: 1
},
{
  question: "Passing a large record as a parameter between modules indicates:",
  options: [
    "Data coupling",
    "Stamp coupling",
    "Control coupling",
    "Common coupling"
  ],
  answer: 1
},
{
  question: "Passing only necessary data values between modules indicates:",
  options: [
    "Control coupling",
    "Common coupling",
    "Data coupling",
    "Content coupling"
  ],
  answer: 2
},
{
  question: "Structured analysis focuses on:",
  options: [
    "System architecture",
    "Representing functional requirements using graphical models",
    "Coding algorithms",
    "Testing design"
  ],
  answer: 1
},
{
  question: "The key concept in structured analysis is:",
  options: [
    "Flowchart",
    "Data Flow Diagram (DFD)",
    "Pseudocode",
    "Use case diagram"
  ],
  answer: 1
},
{
  question: "Structured design emphasizes:",
  options: [
    "Top-down modular design",
    "Ad-hoc coding",
    "Hardware configuration",
    "Random connections between modules"
  ],
  answer: 0
},
{
  question: "Which of the following is not an element of a DFD?",
  options: [
    "Process",
    "Data store",
    "Data flow",
    "Control module"
  ],
  answer: 3
},
{
  question: "In a DFD, a process is represented by:",
  options: [
    "A rectangle",
    "A circle or rounded rectangle",
    "An arrow",
    "A double line"
  ],
  answer: 1
},
{
  question: "In a DFD, data flow is represented by:",
  options: [
    "A circle",
    "A rectangle",
    "An arrow",
    "A double line"
  ],
  answer: 2
},
{
  question: "In a DFD, a data store is represented by:",
  options: [
    "Two parallel lines",
    "A rectangle",
    "A circle",
    "A diamond"
  ],
  answer: 0
},
{
  question: "In a DFD, external entities (sources/sinks) are represented by:",
  options: [
    "Ovals",
    "Rectangles or squares",
    "Arrows",
    "Parallel lines"
  ],
  answer: 1
},
{
  question: "The purpose of a DFD is to show:",
  options: [
    "The control flow between modules",
    "The flow of data within the system",
    "The class relationships",
    "The program logic"
  ],
  answer: 1
},
{
  question: "The context diagram is:",
  options: [
    "The highest level DFD",
    "The lowest level DFD",
    "The middle level DFD",
    "The system chart"
  ],
  answer: 0
},
{
  question: "The methodology of DFD model development usually begins with:",
  options: [
    "Detailed design",
    "Context diagram creation",
    "Code generation",
    "Testing phase"
  ],
  answer: 1
},
{
  question: "In DFD development, level balancing means:",
  options: [
    "Ensuring data flow consistency across DFD levels",
    "Maintaining same number of processes",
    "Using identical data stores in all levels",
    "None of the above"
  ],
  answer: 0
},
{
  question: "In DFD decomposition, each process is expanded into:",
  options: [
    "A sub-DFD with more detailed processes",
    "A code fragment",
    "A data dictionary",
    "A control table"
  ],
  answer: 0
},
{
  question: "Procedural design transforms a DFD into:",
  options: [
    "A structure chart",
    "A class diagram",
    "A flowchart",
    "An ER diagram"
  ],
  answer: 0
},
{
  question: "A structure chart represents:",
  options: [
    "The data flow between modules",
    "The hierarchical organization of modules",
    "The database schema",
    "The testing procedure"
  ],
  answer: 1
},
{
  question: "Each box in a structure chart represents:",
  options: [
    "A process",
    "A module or subprogram",
    "A data store",
    "A database"
  ],
  answer: 1
},
{
  question: "A module call in a structure chart is represented by:",
  options: [
    "A data flow arrow",
    "A line connecting two boxes",
    "A diamond",
    "A circle"
  ],
  answer: 1
},
{
  question: "In a structure chart, control couples are shown using:",
  options: [
    "Dashed arrows",
    "Solid lines with arrows",
    "Dotted lines",
    "Double lines"
  ],
  answer: 2
},
{
  question: "The two main approaches to converting a DFD into a structure chart are:",
  options: [
    "Top-down and bottom-up",
    "Transform analysis and transaction analysis",
    "Functional and procedural",
    "Data and control"
  ],
  answer: 1
},
{
  question: "Transform analysis is used when:",
  options: [
    "The system transforms input data into output through sequential steps",
    "Multiple users perform different transactions",
    "The system is object-oriented",
    "Data flow is circular"
  ],
  answer: 0
},
{
  question: "Transaction analysis is used when:",
  options: [
    "Each transaction follows a different processing path",
    "The system performs one single function",
    "The input and output are identical",
    "The system does not require data flow"
  ],
  answer: 0
},
{
  question: "In transform analysis, the first step is to identify:",
  options: [
    "The central transform",
    "The input transaction",
    "The database",
    "The control module"
  ],
  answer: 0
},
{
  question: "The central transform in a DFD is:",
  options: [
    "The part where major data transformation occurs",
    "The database storage",
    "The user interface",
    "The testing procedure"
  ],
  answer: 0
},
{
  question: "In transaction analysis, the first step is to identify:",
  options: [
    "The transaction center",
    "The transform center",
    "The data flow",
    "The control store"
  ],
  answer: 0
},
{
  question: "The transaction center is the process where:",
  options: [
    "Multiple transactions are received and directed",
    "Data is permanently stored",
    "The system generates reports",
    "Inputs are validated"
  ],
  answer: 0
},
{
  question: "A structure chart derived from a DFD shows:",
  options: [
    "Control and data interfaces between modules",
    "Logical data flow only",
    "Physical data storage",
    "Testing steps"
  ],
  answer: 0
},
{
  question: "In transform analysis, the structure chart typically has:",
  options: [
    "Input modules → Central transform → Output modules",
    "Randomly connected modules",
    "Only input modules",
    "Only output modules"
  ],
  answer: 0
},
{
  question: "When converting a DFD to a structure chart, data flow arrows become:",
  options: [
    "Data couples",
    "Modules",
    "Control flows",
    "Decision nodes"
  ],
  answer: 0
},
{
  question: "In a structure chart, data couples represent:",
  options: [
    "Data passed between modules",
    "Control signals",
    "Error messages",
    "Process hierarchy"
  ],
  answer: 0
},
{
  question: "The main advantage of using structure charts is:",
  options: [
    "They show detailed algorithms",
    "They illustrate module hierarchy and communication",
    "They show user interfaces",
    "They replace code documentation"
  ],
  answer: 1
},
{
  question: "In transform analysis, the central transform is surrounded by:",
  options: [
    "Input and output modules",
    "Decision modules only",
    "Database modules",
    "Error-handling modules"
  ],
  answer: 0
},
{
  question: "Transaction analysis is particularly useful for:",
  options: [
    "Real-time or interactive systems",
    "Batch processing systems only",
    "Standalone systems",
    "Data analysis software"
  ],
  answer: 0
},
{
  question: "The overall purpose of DFD-to-Structure Chart conversion is to:",
  options: [
    "Move from logical data flow to procedural design",
    "Perform testing",
    "Create database schema",
    "Document user manuals"
  ],
  answer: 0
},

{
  question: "Object-oriented analysis (OOA) focuses on:",
  options: [
    "Identifying system functions",
    "Identifying and modeling objects and their interactions",
    "Coding algorithms",
    "Writing test cases"
  ],
  answer: 1
},
{
  question: "A Use Case represents:",
  options: [
    "System architecture",
    "A function or service provided by the system to an actor",
    "Class hierarchy",
    "Object attributes"
  ],
  answer: 1
},
{
  question: "Actors in a use case model represent:",
  options: [
    "Database entities",
    "External users or systems interacting with the system",
    "System modules",
    "System modules"
  ],
  answer: 1
},
{
  question: "The purpose of factoring use cases is to:",
  options: [
    "Reduce redundancy among use cases",
    "Add new actors",
    "Merge unrelated functions",
    "Eliminate system boundaries"
  ],
  answer: 0
},
{
  question: "Use case diagrams primarily show:",
  options: [
    "Object attributes",
    "System’s static structure",
    "Functional interactions between users and system",
    "Data flow paths"
  ],
  answer: 2
},
{
  question: "A class in OOP represents:",
  options: [
    "A data flow diagram",
    "A blueprint for creating objects",
    "A testing scenario",
    "A function only"
  ],
  answer: 1
},
{
  question: "An object is:",
  options: [
    "A variable of a class type",
    "A blueprint",
    "A program module",
    "An abstract concept only"
  ],
  answer: 0
},
{
  question: "Inheritance represents:",
  options: [
    "Sharing of data among classes",
    "A 'kind-of' relationship between classes",
    "Repetition of code",
    "Static relationship between objects"
  ],
  answer: 1
},
{
  question: "Inheritance promotes:",
  options: [
    "Code duplication",
    "Code reuse and extensibility",
    "Higher coupling",
    "Data hiding violation"
  ],
  answer: 1
},
{
  question: "Association in UML represents:",
  options: [
    "Functional dependency",
    "Relationship between two or more classes",
    "Data flow direction",
    "Event sequencing"
  ],
  answer: 1
},
{
  question: "Multiplicity in an association defines:",
  options: [
    "Number of attributes",
    "Number of instances participating in a relationship",
    "Number of operations",
    "Inheritance depth"
  ],
  answer: 1
},
{
  question: "Aggregation is a form of:",
  options: [
    "Strong inheritance",
    "Weak 'has-a' relationship",
    "Polymorphism",
    "Multiple inheritance"
  ],
  answer: 1
},
{
  question: "Composition differs from aggregation by:",
  options: [
    "Having weaker dependency",
    "Being a stronger ownership relationship",
    "Having no ownership",
    "Representing inheritance"
  ],
  answer: 1
},
{
  question: "Generalization in UML corresponds to:",
  options: [
    "Association",
    "Inheritance",
    "Aggregation",
    "Composition"
  ],
  answer: 1
},
{
  question: "A class diagram provides:",
  options: [
    "A dynamic view of the system",
    "A static structural view of the system",
    "Execution order of functions",
    "System behavior representation"
  ],
  answer: 1
},
{
  question: "UML stands for:",
  options: [
    "Unified Model Language",
    "Unified Modeling Language",
    "Universal Modeling Layout",
    "Unified Module Language"
  ],
  answer: 1
},
{
  question: "UML is used for:",
  options: [
    "Coding in object-oriented languages",
    "Modeling software systems visually",
    "Database normalization",
    "Data encryption"
  ],
  answer: 1
},
{
  question: "Interaction diagrams in UML include:",
  options: [
    "State and activity diagrams",
    "Sequence and collaboration diagrams",
    "Class and object diagrams",
    "Use case and package diagrams"
  ],
  answer: 1
},
{
  question: "A sequence diagram shows:",
  options: [
    "Flow of control between actors and system",
    "Time-ordered interaction among objects",
    "Static class structure",
    "System architecture only"
  ],
  answer: 1
},
{
  question: "The vertical axis in a sequence diagram represents:",
  options: [
    "Object lifeline",
    "Time progression",
    "Data storage",
    "Class hierarchy"
  ],
  answer: 1
},
{
  question: "The horizontal axis in a sequence diagram represents:",
  options: [
    "Time",
    "Object or actor instances",
    "Message order",
    "Message type"
  ],
  answer: 1
},
{
  question: "Collaboration diagrams emphasize:",
  options: [
    "Sequence of messages",
    "Structural organization of interacting objects",
    "Class inheritance",
    "Data attributes"
  ],
  answer: 1
},
{
  question: "The main difference between sequence and collaboration diagrams is:",
  options: [
    "Sequence shows time order; collaboration shows structure",
    "Collaboration shows time; sequence shows association",
    "Sequence shows class data; collaboration shows actors",
    "None of the above"
  ],
  answer: 0
},
{
  question: "Messages in sequence diagrams are represented by:",
  options: [
    "Solid lines with arrows",
    "Dotted lines with boxes",
    "Boxes only",
    "Dashed lines with crosses"
  ],
  answer: 0
},
{
  question: "A lifeline in a sequence diagram represents:",
  options: [
    "The lifespan of an object during interaction",
    "Class inheritance",
    "Use case dependency",
    "Message loop"
  ],
  answer: 0
},
{
  question: "Iteration in UML diagrams is shown by:",
  options: [
    "Square brackets with conditions [ ]",
    "Curly braces { }",
    "Circles",
    "Underlined text"
  ],
  answer: 0
},
{
  question: "A state chart diagram models:",
  options: [
    "Data flow",
    "Object states and transitions due to events",
    "Use case relationships",
    "Code dependencies"
  ],
  answer: 1
},
{
  question: "A transition in a state chart occurs when:",
  options: [
    "A new object is created",
    "An event triggers a change in state",
    "A class is deleted",
    "The system stops"
  ],
  answer: 1
},
{
  question: "The initial state in a state chart is shown by:",
  options: [
    "A solid black circle",
    "A rectangle",
    "A hollow circle",
    "A diamond shape"
  ],
  answer: 0
},
{
  question: "The final state is represented by:",
  options: [
    "Hollow circle",
    "Black circle with an outer ring",
    "Square",
    "Diamond"
  ],
  answer: 1
},
{
  question: "Code generation from FSM refers to:",
  options: [
    "Deriving procedural code from state transition logic",
    "Writing pseudocode manually",
    "Creating UML manually",
    "Data modeling"
  ],
  answer: 0
},
{
  question: "OOA stands for:",
  options: [
    "Object-Oriented Analysis",
    "Object Operation Algorithm",
    "Object-Oriented Arrangement",
    "Object-Oriented Architecture"
  ],
  answer: 0
},
{
  question: "OOD stands for:",
  options: [
    "Object-Oriented Design",
    "Object Output Diagram",
    "Object-Oriented Diagram",
    "Operational Output Design"
  ],
  answer: 0
},
{
  question: "The main goal of OOA is to:",
  options: [
    "Design algorithms",
    "Identify system objects and relationships",
    "Write code",
    "Perform testing"
  ],
  answer: 1
},
{
  question: "The main goal of OOD is to:",
  options: [
    "Translate OOA models into implementable design",
    "Gather requirements",
    "Perform debugging",
    "Define test cases"
  ],
  answer: 0
},
{
  question: "In OOD, boundary classes handle:",
  options: [
    "Database management",
    "Interaction between system and external actors",
    "Core logic",
    "Data storage"
  ],
  answer: 1
},
{
  question: "Entity classes represent:",
  options: [
    "System’s interface with users",
    "Persistent information and business entities",
    "Temporary data",
    "Control flow"
  ],
  answer: 1
},
{
  question: "Control classes manage:",
  options: [
    "Communication between boundary and entity classes",
    "UI layout",
    "External devices",
    "Memory allocation"
  ],
  answer: 0
},
{
  question: "Which of the following correctly represents the OOA and OOD sequence?",
  options: [
    "OOD → OOA → Coding",
    "Requirement → OOA → OOD → Implementation",
    "Coding → OOD → OOA",
    "OOA → Testing → OOD"
  ],
  answer: 1
},
{
  question: "The advantage of object-oriented design is:",
  options: [
    "Tight coupling and low cohesion",
    "Poor reusability",
    "Better modularity, reusability, and maintainability",
    "Increased code duplication"
  ],
  answer: 2
},

{
  question: "Combinational testing focuses on:",
  options: [
    "Testing all possible combinations of input conditions",
    "Testing only one input condition",
    "Testing user interfaces",
    "Testing performance only"
  ],
  answer: 0
},
{
  question: "The main goal of combinational testing is to:",
  options: [
    "Reduce redundant testing",
    "Test every possible input combination for correctness",
    "Skip invalid inputs",
    "Verify user acceptance"
  ],
  answer: 1
},
{
  question: "Decision table testing is most useful when:",
  options: [
    "Inputs are independent",
    "Inputs are interdependent and produce different outcomes",
    "The program is small",
    "The software has no conditions"
  ],
  answer: 1
},
{
  question: "A decision table helps identify:",
  options: [
    "Logical relationships between inputs and outputs",
    "Timing of test execution",
    "GUI layouts",
    "Network performance"
  ],
  answer: 0
},
{
  question: "The main components of a decision table are:",
  options: [
    "Conditions, Actions, Rules",
    "Inputs, Outputs, Variables",
    "Data, Control, Code",
    "Modules, Tests, Results"
  ],
  answer: 0
},
{
  question: "Cause-effect graphing is a technique that:",
  options: [
    "Represents logical relationships between inputs and outputs using graphs",
    "Tests system performance",
    "Measures code efficiency",
    "Designs database schemas"
  ],
  answer: 0
},
{
  question: "In cause-effect graphing, 'causes' refer to:",
  options: [
    "Inputs or conditions",
    "System failures",
    "Outputs or effects",
    "Code modules"
  ],
  answer: 0
},
{
  question: "In cause-effect graphing, 'effects' refer to:",
  options: [
    "Expected outputs or system responses",
    "Causes of errors",
    "Internal variables",
    "User inputs"
  ],
  answer: 0
},
{
  question: "The graph created in cause-effect graphing is later converted into:",
  options: [
    "A decision table",
    "A flowchart",
    "Source code",
    "A UML diagram"
  ],
  answer: 0
},
{
  question: "T-way testing involves:",
  options: [
    "Testing all possible combinations of inputs of size T",
    "Testing one input at a time",
    "Testing only the maximum value of each input",
    "Testing only two variables"
  ],
  answer: 0
},
{
  question: "Pairwise testing is a special case of:",
  options: [
    "T-way testing where T = 2",
    "White-box testing",
    "Mutation testing",
    "Path testing"
  ],
  answer: 0
},
{
  question: "Pairwise testing ensures that:",
  options: [
    "Every pair of input combinations is tested at least once",
    "Only single inputs are tested",
    "Each module is tested separately",
    "Random inputs are tested"
  ],
  answer: 0
},
{
  question: "Pairwise testing is particularly useful for:",
  options: [
    "Reducing test cases while maintaining coverage",
    "Increasing the number of test cases",
    "Measuring performance",
    "Checking database connectivity"
  ],
  answer: 0
},
{
  question: "White-box testing is based on:",
  options: [
    "Internal structure and code of the program",
    "User requirements only",
    "External interfaces only",
    "Random inputs"
  ],
  answer: 0
},
{
  question: "In statement coverage, the goal is to:",
  options: [
    "Execute all statements in the source code at least once",
    "Execute all loops multiple times",
    "Execute only one statement",
    "Avoid executing unreachable code"
  ],
  answer: 0
},
{
  question: "Branch coverage ensures:",
  options: [
    "Every possible decision outcome (true/false) is executed at least once",
    "Only positive conditions are tested",
    "Only main modules are tested",
    "Data flow is ignored"
  ],
  answer: 0
},
{
  question: "Which of the following provides stronger coverage than statement coverage?",
  options: [
    "Branch coverage",
    "Path coverage",
    "Dataflow coverage",
    "Condition coverage"
  ],
  answer: 0
},
{
  question: "Branch coverage is also known as:",
  options: [
    "Decision coverage",
    "Path coverage",
    "Condition coverage",
    "Loop coverage"
  ],
  answer: 0
},
{
  question: "The main difference between statement and branch coverage is that:",
  options: [
    "Branch coverage tests all possible decisions",
    "Statement coverage ignores conditions",
    "Branch coverage does not test loops",
    "They are identical"
  ],
  answer: 0
},
{
  question: "White-box testing techniques include:",
  options: [
    "Statement, Branch, and Path coverage",
    "Black-box testing",
    "Regression testing",
    "System testing"
  ],
  answer: 0
},
{
  question: "Condition testing is focused on:",
  options: [
    "Testing logical conditions in decision statements",
    "Testing user interface",
    "Testing integration",
    "Testing documentation"
  ],
  answer: 0
},
{
  question: "Basic condition coverage requires:",
  options: [
    "Each condition in a decision takes all possible outcomes (true and false) at least once",
    "Each statement is executed once",
    "Each branch is taken once",
    "Each path is executed"
  ],
  answer: 0
},
{
  question: "Condition/decision coverage ensures:",
  options: [
    "Both individual conditions and the overall decision are tested for true and false outcomes",
    "Only conditions are tested",
    "Only decisions are tested",
    "Loops are ignored"
  ],
  answer: 0
},
{
  question: "Multiple condition coverage ensures:",
  options: [
    "All possible combinations of condition outcomes are tested",
    "Only one condition per statement",
    "Only positive branches are tested",
    "Data values are ignored"
  ],
  answer: 0
},
{
  question: "The acronym MC/DC stands for:",
  options: [
    "Modified Condition/Decision Coverage",
    "Multiple Code/Decision Check",
    "Managed Control/Data Coverage",
    "Module Condition/Decision Coverage"
  ],
  answer: 0
},
{
  question: "MC/DC coverage is mainly used in:",
  options: [
    "Safety-critical systems (e.g., aviation software)",
    "Web development",
    "Database testing",
    "User interface testing"
  ],
  answer: 0
},
{
  question: "In MC/DC testing, each condition:",
  options: [
    "Must independently affect the outcome of the decision",
    "Can be ignored if already tested",
    "Is tested randomly",
    "Is not evaluated"
  ],
  answer: 0
},
{
  question: "Path testing aims to:",
  options: [
    "Execute all possible execution paths through the code",
    "Test only one path",
    "Test external interfaces",
    "Ignore branches"
  ],
  answer: 0
},
{
  question: "The number of possible paths in a program depends on:",
  options: [
    "The number of decisions or branches",
    "The number of inputs only",
    "The programming language",
    "The compiler"
  ],
  answer: 0
},
{
  question: "Cyclomatic complexity helps determine:",
  options: [
    "The number of independent paths in a program",
    "The number of statements",
    "The number of test cases executed",
    "The number of loops"
  ],
  answer: 0
},
{
  question: "Higher cyclomatic complexity implies:",
  options: [
    "More testing effort required",
    "Less testing needed",
    "Code is easier to maintain",
    "Code is less error-prone"
  ],
  answer: 0
},
{
  question: "Dataflow testing focuses on:",
  options: [
    "The points where variables are defined and used",
    "Execution time of a program",
    "GUI response",
    "Code readability"
  ],
  answer: 0
},
{
  question: "In dataflow testing, a variable definition is:",
  options: [
    "The point where a variable is assigned a value",
    "The point where it is declared only",
    "The point where it is deleted",
    "The point where it is printed"
  ],
  answer: 0
},
{
  question: "A variable use in dataflow testing occurs when:",
  options: [
    "The variable’s value is accessed for computation or output",
    "The variable is deleted",
    "The variable is declared",
    "The variable is hidden"
  ],
  answer: 0
},
{
  question: "The pair of variable definition and use is called a:",
  options: [
    "DU-pair (Definition-Use pair)",
    "Test pair",
    "Control pair",
    "Data link"
  ],
  answer: 0
},
{
  question: "The main purpose of dataflow testing is to:",
  options: [
    "Detect anomalies related to variable usage",
    "Measure performance",
    "Check system load",
    "Evaluate user satisfaction"
  ],
  answer: 0
},
{
  question: "Mutation testing involves:",
  options: [
    "Introducing small changes (mutations) in the code to check if tests detect them",
    "Changing test cases randomly",
    "Skipping test cases",
    "Modifying inputs for performance"
  ],
  answer: 0
},
{
  question: "The modified versions of the program in mutation testing are called:",
  options: [
    "Mutants",
    "Versions",
    "Variants",
    "Copies"
  ],
  answer: 0
},
{
  question: "The goal of mutation testing is to:",
  options: [
    "Evaluate the effectiveness of test cases",
    "Improve program speed",
    "Minimize code lines",
    "Optimize memory"
  ],
  answer: 0
},
{
  question: "A test case is considered strong in mutation testing if:",
  options: [
    "It kills (detects) the introduced mutant",
    "It passes all mutants",
    "It ignores all errors",
    "It produces no output"
  ],
  answer: 0
},

{
  question: "Combinational testing focuses on:",
  options: [
    "Testing performance of hardware",
    "Testing all possible combinations of input parameters",
    "Testing only individual modules",
    "Verifying security vulnerabilities"
  ],
  answer: 1
},
{
  question: "Decision table testing is based on:",
  options: [
    "Graph theory",
    "Rules and corresponding actions",
    "Code structure",
    "Regression analysis"
  ],
  answer: 1
},
{
  question: "A decision table is useful when:",
  options: [
    "There are complex business rules with multiple conditions",
    "The system is simple",
    "Only one input condition exists",
    "No rules are defined"
  ],
  answer: 0
},
{
  question: "Cause-effect graphing helps to:",
  options: [
    "Identify relationships between inputs and outputs",
    "Measure performance",
    "Generate test data automatically",
    "Optimize code"
  ],
  answer: 0
},
{
  question: "Cause-effect graphing is often used to derive:",
  options: [
    "Use case diagrams",
    "Decision tables",
    "Flow charts",
    "Entity relationship diagrams"
  ],
  answer: 1
},
{
  question: "In T-way testing, “T” represents:",
  options: [
    "Number of inputs tested",
    "Number of combinations covered simultaneously",
    "Test coverage percentage",
    "Total defects found"
  ],
  answer: 1
},
{
  question: "Pair-wise testing is a special case of T-way testing where T =",
  options: ["1", "2", "3", "4"],
  answer: 1
},
{
  question: "Pair-wise testing helps to:",
  options: [
    "Detect interaction faults between pairs of input parameters",
    "Identify code syntax errors",
    "Measure system performance",
    "Test all possible paths"
  ],
  answer: 0
},
{
  question: "Pair-wise testing reduces:",
  options: [
    "Number of test cases while maintaining reasonable coverage",
    "Number of code branches",
    "Execution speed",
    "Test data variety"
  ],
  answer: 0
},
{
  question: "White-box testing focuses on:",
  options: [
    "System functionality only",
    "Internal logic and structure of the code",
    "User interface behavior",
    "Requirement validation"
  ],
  answer: 1
},
{
  question: "Statement coverage ensures that:",
  options: [
    "Each condition is evaluated both true and false",
    "Every executable statement in the code is executed at least once",
    "All possible paths are tested",
    "All inputs are validated"
  ],
  answer: 1
},
{
  question: "Branch coverage is also known as:",
  options: ["Decision coverage", "Path coverage", "Condition coverage", "Functional coverage"],
  answer: 0
},
{
  question: "Branch coverage ensures that:",
  options: [
    "Every possible branch (true/false) from each decision is executed",
    "Every function is called once",
    "All test cases are independent",
    "Code runs without errors"
  ],
  answer: 0
},
{
  question: "Statement coverage cannot guarantee:",
  options: [
    "That all lines of code are executed",
    "That all decision outcomes are tested",
    "Execution of loops",
    "Syntax correctness"
  ],
  answer: 1
},
{
  question: "White-box testing requires knowledge of:",
  options: ["User requirements", "Internal code structure", "Graphical design", "System documentation only"],
  answer: 1
},
{
  question: "Condition testing focuses on:",
  options: [
    "Evaluating the logical conditions in code",
    "Checking system response time",
    "Measuring performance",
    "Analyzing memory usage"
  ],
  answer: 0
},
{
  question: "Basic condition coverage requires:",
  options: [
    "Each condition to be executed at least once",
    "Each condition to take all possible outcomes (true/false)",
    "All branches to be taken",
    "All paths to be tested"
  ],
  answer: 1
},
{
  question: "Condition/Decision coverage is a combination of:",
  options: [
    "Basic condition and branch coverage",
    "Decision table and path testing",
    "Data flow and mutation testing",
    "Equivalence and boundary testing"
  ],
  answer: 0
},
{
  question: "In condition/decision coverage:",
  options: [
    "Each condition and decision must be evaluated both true and false",
    "Only one branch is executed",
    "Only condition values are tested",
    "Loops are not considered"
  ],
  answer: 0
},
{
  question: "Multiple condition coverage requires:",
  options: [
    "All combinations of condition outcomes to be tested",
    "Only true outcomes",
    "Only false outcomes",
    "Only two conditions tested"
  ],
  answer: 0
},
{
  question: "MC/DC stands for:",
  options: [
    "Modified Condition/Decision Coverage",
    "Multiple Condition/Decision Control",
    "Modular Condition Decision Coverage",
    "Minimal Control/Decision Check"
  ],
  answer: 0
},
{
  question: "MC/DC coverage requires:",
  options: [
    "Every condition to independently affect the decision’s outcome",
    "All possible condition combinations",
    "Only true conditions tested",
    "Every branch to be skipped"
  ],
  answer: 0
},
{
  question: "MC/DC testing is mandatory in:",
  options: [
    "Financial systems",
    "Safety-critical domains (like aviation software)",
    "Mobile app development",
    "Web design"
  ],
  answer: 1
},
{
  question: "Path testing is used to:",
  options: [
    "Test all possible execution paths in a program",
    "Count lines of code",
    "Design input data",
    "Measure system reliability"
  ],
  answer: 0
},
{
  question: "Path testing is based on:",
  options: [
    "Control flow graph (CFG)",
    "Decision tables",
    "Data flow diagrams",
    "Class diagrams"
  ],
  answer: 0
},
{
  question: "The goal of path testing is to:",
  options: [
    "Identify untested execution paths",
    "Reduce number of test cases",
    "Optimize performance",
    "Validate design documents"
  ],
  answer: 0
},
{
  question: "In data flow testing, focus is on:",
  options: [
    "How data is used and defined across the code",
    "System throughput",
    "User interface",
    "Functional requirements"
  ],
  answer: 0
},
{
  question: "A “definition-use pair” in data flow testing refers to:",
  options: [
    "A variable definition and its subsequent use",
    "Two branches in the code",
    "Two loops connected",
    "Input-output pair"
  ],
  answer: 0
},
{
  question: "Data flow anomalies include:",
  options: [
    "Variables used before definition",
    "Variables defined but never used",
    "Variables used after destruction",
    "All of the above"
  ],
  answer: 3
},
{
  question: "Mutation testing evaluates:",
  options: [
    "The effectiveness of test cases",
    "The user interface quality",
    "Performance under load",
    "Code documentation"
  ],
  answer: 0
},
{
  question: "In mutation testing, mutants refer to:",
  options: [
    "Modified versions of the program with small code changes",
    "Test data samples",
    "Hardware errors",
    "GUI mockups"
  ],
  answer: 0
},
{
  question: "Mutation testing checks whether:",
  options: [
    "Existing test cases can detect code changes (mutants)",
    "Code runs faster",
    "Documentation matches design",
    "Program compiles without errors"
  ],
  answer: 0
},
{
  question: "Killing a mutant means:",
  options: [
    "The program crashes",
    "A test case detects the code change (mutant)",
    "The mutant compiles successfully",
    "The mutant is ignored"
  ],
  answer: 1
},
{
  question: "Surviving mutants indicate:",
  options: [
    "Effective tests",
    "Ineffective or weak test cases",
    "Missing files",
    "Complete coverage"
  ],
  answer: 1
},
{
  question: "Mutation score is calculated as:",
  options: [
    "(Killed Mutants / Total Mutants) × 100%",
    "(Total Tests / Total Mutants) × 100%",
    "(Failed Tests / Total Tests) × 100%",
    "(Survived Mutants / Killed Mutants) × 100%"
  ],
  answer: 0
},
{
  question: "Path coverage ensures that:",
  options: [
    "Every independent path in the code is executed",
    "Each function is tested once",
    "Each condition is evaluated",
    "Each input is checked"
  ],
  answer: 0
},
{
  question: "Data flow testing helps to identify:",
  options: [
    "Logical and data-related errors",
    "Timing issues",
    "Network errors",
    "Security bugs"
  ],
  answer: 0
},
{
  question: "Which of the following is a white-box testing method?",
  options: [
    "Path testing",
    "Data flow testing",
    "Mutation testing",
    "All of the above"
  ],
  answer: 3
},
{
  question: "The primary objective of white-box testing techniques is:",
  options: [
    "To ensure logical correctness of the program",
    "To validate customer requirements",
    "To check GUI layout",
    "To assess usability"
  ],
  answer: 0
},
{
  question: "Which of the following correctly matches the technique with its purpose?",
  options: [
    "Decision table – logical relationships",
    "MC/DC – independent condition effect",
    "Mutation testing – test effectiveness",
    "All of the above"
  ],
  answer: 3
}




];




let startTime = new Date();

function renderQuiz() {
  const container = document.getElementById('questions');
  container.innerHTML = '';
  quizData.forEach((q, qi) => {
    const divQ = document.createElement('div');
    divQ.className = 'question';

    const qTitle = document.createElement('h3');
    qTitle.textContent = (qi+1) + ". " + q.question;
    divQ.appendChild(qTitle);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    q.options.forEach((opt, idx) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q'+qi;
      input.value = idx;

      input.addEventListener('change', () => {
        const allLabels = optionsDiv.querySelectorAll('label');
        allLabels.forEach(l => l.classList.remove('selected'));
        label.classList.add('selected');
      });

      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      optionsDiv.appendChild(label);
    });

    divQ.appendChild(optionsDiv);
    container.appendChild(divQ);
  });
}

function calculateScore() {
  let correctCount = 0;
  let wrongCount = 0;
  const endTime = new Date();
  const timeTaken = Math.floor((endTime - startTime)/1000);

  quizData.forEach((q, qi) => {
    const selectedEls = document.getElementsByName('q'+qi);
    let selected = -1;
    for (let el of selectedEls) if (el.checked) selected = parseInt(el.value);

    selectedEls.forEach(el => {
      const lbl = el.parentElement;
      lbl.classList.remove('selected');
      if (parseInt(el.value) === q.answer) lbl.classList.add('correct');
      else if (el.checked) lbl.classList.add('wrong');
    });

    if (selected === q.answer) correctCount++;
    else wrongCount++;
  });

  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';
  document.getElementById('score').textContent = `Correct: ${correctCount} | Wrong: ${wrongCount} | Time: ${timeTaken} sec`;
  document.getElementById('submitBtn').style.display = 'none';
}

// Buttons
document.getElementById('submitBtn').addEventListener('click', calculateScore);
document.getElementById('retakeBtn').addEventListener('click', () => {
 quizData.sort(() => Math.random() - 0.5);
  document.getElementById('result').style.display = 'none';
  document.getElementById('submitBtn').style.display = 'inline-block';
  renderQuiz();
  startTime = new Date();
});
document.getElementById('resetBtn').addEventListener('click', () => {
  const allLabels = document.querySelectorAll('.options label');
  allLabels.forEach(l => l.classList.remove('correct','wrong','selected'));
  const allInputs = document.querySelectorAll('input[type=radio]');
  allInputs.forEach(i => i.checked = false);
  document.getElementById('result').style.display = 'none';
  document.getElementById('submitBtn').style.display = 'inline-block';
  startTime = new Date();
});

renderQuiz();
