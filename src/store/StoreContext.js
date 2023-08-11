import { createContext, useState } from "react";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";
import p7 from "../images/p7.jpg";
import p8 from "../images/p8.jpg";

import s1 from "../images/slide1.png";
import s2 from "../images/slide.jpg";
import s3 from "../images/slide3.jpg";

import tnkcLogo from '../images/tnkc_logo.jpg'
export const StoreContext = createContext(null);

const Store = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [user, setUser] = useState(null);
  const [change, setChange] = useState(true);
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  const [section, setSection] = useState(null);
  const [filter, setFilter] = useState("All");

  const [courseIndex, setCourseIndex] = useState(null);
  const [eventIndex, setEventIndex] = useState(null);

  const [metrics, setMetrics] = useState(true);
  const [feedback, setFeedback] = useState(true);
  const [theme, setTheme] = useState("Light-mode");
  const [check, setCheck] = useState(false);

  const courseList = [
    {
      id: 0,
      name: "PRODUCT DEVELOPMENT PROGRAM",
      thumbnail: "../../images/courses.jpg",
      category: "PRODUCT DEVELOPMENT",
      flag: true,
      metrics: {
        students: 1000,
        hours: 18,
      },
      slide: s1,
      description:
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts",
      description_L: [
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts",
        "In 18+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "This program gives a general outlook on how to identify real time problems and forming solutions, by systematic approaches like applying , Design Thinking , Reverse Engineering, root cause analysis, DFMEA and other relevant tools.",
        "The topics are explained using product development strategy. Moreover, in this session students get brief explanation of new product trends and opportunities.",
      ],
      duration: ["Day 01 - 06 Hrs", "Day 02 - 06 Hrs", "Day 03 - 06 Hrs"],
      feedback: [
        {
          name: "PRAVEEN D [STUDENT]",
          msg: "I adore how natural it is for me to be open and connect with the other participants in this programme. The steps in this class were designed to put us in a position where we could confidently continue tapping after it ended.",
          dp: p1,
        },
        {
          name: "TAMIL DHARANI [STUDENT]",
          msg: 'I will say it as "Two extremely useful and educational days". The Product Development Program was great, especially because everyone there was so nice.',
          dp: p2,
        },
        {
          name: "JEYANTH P [STUDENT]",
          msg: "I found the workshop to be very informative. My hands-on skills were specifically enhanced by the session. In both my personal and professional life, the skills will be priceless.",
          dp: p3,
        },
        {
          name: "YASHITH M V [STUDENT]",
          msg: "The content was comprehensive, excellent, very thorough, and suitable for people of all skill levels because we had the chance to implement what we learned immediately. such a great session, really comprehensive.",
          dp: p4,
        },
        {
          name: "BALAMURALI [PROFFESOR@SNSCE]",
          msg: "The training was so innovative, informative, and instructive; linking our minds to ideas, possibilities, and unforeseen circumstances.",
          dp: p6,
        },
        {
          name: "DR R MAGUTEESWARAN [PRINCIPAL@SCE]",
          msg: "Positive thoughts and ideas  kept flowing as the session went on with the trainers. The trainers gave their speeches with so many facts, figures, and humor. It was a value-pack training session.",
          dp: p5,
        },
        {
          name: "DR S NANDHAKUMAR [HOD@DR.NGPIT]",
          msg: "This training was so overwhelming, is one of its kind. The new diverse expertise I acquire from the training will surely be pragmatically used. relevant to our course of study. Kudos to the organizers.",
          dp: p7,
        },
        {
          name: "ARUMUGAM [JR.SUPERVISOR@SE FORGE]",
          msg: "As bulky as the training materials were, the trainers presented them so simple and practicably. This training has equipped positively with problem-solving skills.",
          dp: p8,
        },
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2FxYDMzS4SDOxwsH0HTYNa%2Fcertificates%2Fcert.jpg?alt=media&token=0a3e9cdc-a152-4692-afe6-e8077978fb79&_gl=1*19607cn*_ga*MTI0Mzg0ODM1MS4xNjg0MjQ5MjMz*_ga_CW55HF8NVT*MTY4NTc2NzM5MS4zMy4xLjE2ODU3NzE1MTcuMC4wLjA.",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        { id: 0, type: "One Day", price: 200 },
        {
          id: 1,
          type: "Two Days",
          price: 350,
        },
        { id: 2, type: "Three Days", price: 450 },
      ],
      schedule: [
        {
          name: "Day 01",
          topics: [
            {
              name: "PRODUCT DEVELOPMENT",
              SUB: [
                "Introduction to Product Development",
                "Product management Tool - Road mapping",
                "Net Present Value (NPV)",
                "Introduction to Pattern Rights - Utility, Design, and Plant",
                "Case Study",
              ],
            },
            {
              name: "REVERSE ENGINEERING",
              SUB: [
                "How to develop a existing Product",
                "Root Cause Analysis",
                "Net Present Value (NPV)",
                "FMEA",
                "Case Study",
              ],
            },
            {
              name: "DESIGN THINKING",
              SUB: [
                "How to Develop a innovating Product",
                "What — Definition of Design Thinking",
                "Process of DT",
                "Case Study",
              ],
            },
            {
              name: "BOI (Business Opportunities Identification)",
              SUB: [
                "Forming business model & Market Strategy",
                "Fund pitching and launching the product or service",
                "Consumer segmentation",
                "Purchase situation analysis",
                "Direct competitor analysis",
                "Indirect competitor analysis",
                "Case Study",
              ],
            },
          ],
        },
        {
          name: "Day 02",
          topics: [
            {
              name: "PRODUCT DEVELOPMENT",
              SUB: [
                "Kano Model",
                "TRIZ (theory of inventive problem solving)",
                "Scoring methods for technology and project prioritisation",
                "How to Apply Pattern Rights - Utility, Design, and Plant",
                "Case Study",
              ],
            },
            {
              name: "REVERSE ENGINEERING",
              SUB: [
                "Process and Implementation",
                "Requirements",
                "Use Mathematics and Computational Thinking",
                "Problem Analyzing Too",
              ],
            },
            {
              name: "DESIGN THINKING",
              SUB: [
                "How — The Process in-depth",
                "Flexibility — Adapt to Fit Your Needs",
                "Why — The Advantage",
                "Scalability — Think Bigger",
                "Case Study",
              ],
            },
            {
              name: "BOI (Business Opportunities Identification)",
              SUB: [
                "How to Get Fund from Govt & Non Govt Organization",
                "Foreign market analysis",
                "Environmental analysis",
                "Market Strategy",
                "Case Study",
              ],
            },
          ],
        },
        {
          name: "Day 03",
          topics: [
            {
              name: "PRODUCT DEVELOPMENT",
              SUB: [
                "Team up",
                "Case Study By Students",
                "Developing a Product by students",
                "Creating Structurer",
              ],
            },
            {
              name: "BOI (Business Opportunities Identification)",
              SUB: [
                "Company Registration",
                "Certification",
                "Forming business model for there product",
                "Pitching model for Joint venture / capital Venture",
                "Case Study",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "DESIGN THINKING",
      thumbnail: "../../images/course.jpg",
      metrics: {
        students: 600,
        hours: 20,
      },
      slide: s2,
      description:
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
        "In 20+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "The Design Thinking is a comprehensive program that introduces participants to the principles and methodology of Design Thinking—a human-centered approach to problem-solving.",
        "This course provides a structured framework for participants to understand and apply the Design Thinking process in various contexts. Through a combination of theoretical knowledge, practical exercises, and real-life case studies, participants will develop the skills necessary to identify and address complex challenges effectively",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      feedback: [
        {
          name: "TAMILSELVAN [STUDENT]",
          msg: "I absolutely loved this course! It provided a comprehensive introduction to Design Thinking, and the sessions were wellstructured and engaging. The reallife examples and case studies helped me understand how Design Thinking can be applied in various contexts.",
          dp: p7,
        },
        {
          name: "ABIRAMI R [STUDENT]",
          msg: "I now have a better understanding of stakeholder engagement and communication strategies that are essential for successful implementation of design solutions.",
          dp: p7,
        },
        {
          name: "GOWTHAM T [STUDENT]",
          msg: "Overall, this course exceeded my expectations. The instructor was knowledgeable and passionate about the topic, and the course content was well-paced and comprehensive. Thank you for a fantastic learning experience!",
          dp: p7,
        },
        {
          name: "YOGESH R [STUDENT]",
          msg: "The course was informative and well-structured. I enjoyed the hands-on activities and group discussions, which allowed me to apply the concepts in a practical way.",
          dp: p7,
        },
        {
          name: "MANICKAM J [STUDENT]",
          msg: "The case studies shared in the course were inspiring and provided valuable insights into how Design Thinking has been successfully applied in realworld scenarios.",
          dp: p7,
        },
        {
          name: "AMAL G KRISHNA [STUDENT]",
          msg: "The ideation and prototyping sessions were my favorite. They pushed me to think creatively and come up with innovative solutions. The hands-on exercises helped me develop my ideation and prototyping skills.",
          dp: p7,
        },
        {
          name: "BARATHI S A [STUDENT]",
          msg: "The instructor was engaging and knowledgeable. They provided clear explanations and examples that helped me grasp the principles of Design Thinking.",
          dp: p7,
        },
        {
          name: "PON ESSAKI [STUDENT]",
          msg: "I feel more confident in my ability to apply Design Thinking in my work after completing this course. It has equipped me with a structured approach and practical tools that I can use to tackle complex problems.",
          dp: p7,
        },
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2FgnEqBo9BphFg2f393Bbw%2Fcertificates%2Fcert.jpg?alt=media&token=1d1f9649-d26a-4a10-be92-b5ccb0f1f856&_gl=1*13cfvvy*_ga*MTI0Mzg0ODM1MS4xNjg0MjQ5MjMz*_ga_CW55HF8NVT*MTY4NTc2NzM5MS4zMy4xLjE2ODU3NzE0MzEuMC4wLjA.",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "INTRODUCTION TO DESIGN THINKING",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "What is Design Thinking?",
              SUB: [
                "Definition and core principles of Design Thinking",
                "Exploring the history and evolution of Design Thinking",
                "Discussing the benefits and applications of Design Thinking in various industries.",
              ],
            },
            {
              name: "The Design Thinking Process",
              SUB: [
                "Introduction to the five stages of Design Thinking: Empathize, Define, Ideate, Prototype, and Test",
                "Explanation of each stage's purpose and activities involved",
                "Discussion on the iterative nature of the Design Thinking process",
              ],
            },
            {
              name: "Empathy in Design",
              SUB: [
                "Understanding the importance of empathy in the design process",
                "Exploring techniques for developing empathy with end-users and stakeholders",
                "Discussing the role of empathy in identifying user needs and insights",
              ],
            },
            {
              name: "Case Studies and Examples",
              SUB: [
                "Presenting real-life case studies that highlight successful applications of Design Thinking",
                "Analyzing how Design Thinking principles were applied in these case studies",
                "Discussing the outcomes and impact of these Design Thinking projects",
              ],
            },
          ],
        },
        {
          name: "EMPATHIZE AND DEFINE",
          topics: [
            {
              name: "The Importance of Empathy",
              SUB: [
                "Explaining the significance of empathy in the design process",
                "Discussing the benefits of understanding user emotions, motivations, and needs",
                "Sharing real-life examples of successful design solutions drivenby empathy",
              ],
            },
            {
              name: "User Research Techniques",
              SUB: [
                "Introduction to different user research methods, such as interviews, observations, and surveys.",
                "Explaining how to conduct effective user interviews",
                "Discussing the importance of active listening and open-ended questions, Sharing tips for observing and documenting user behaviors and pain points.",
              ],
            },
            {
              name: "Creating User Personas and Empathy Maps",
              SUB: [
                "Explaining the concept of user personas and their role in design.",
                "Discussing how to create realistic and representative personas based on user research.",
                "Demonstrating the process of developing empathy maps to understand user motivations, thoughts, and feelings.",
              ],
            },
            {
              name: "Define the Problem Statement and User Needs",
              SUB: [
                "Explaining the purpose of defining a clear problem statement",
                "Discussing techniques for reframing problems to uncover deeper user needs",
                "Guiding participants through exercises to define a problem statement and identify user needs",
              ],
            },
            {
              name: "Group Activity: Empathy Building Exercise",
              SUB: [
                "Engaging participants in a group activity to develop empathy skills",
                "Assigning participants roles to simulate different user perspectives",
                "Encouraging discussions and reflections on the experience",
              ],
            },
          ],
        },
        {
          name: "IDEATION & PROTOTYPING",
          topics: [
            {
              name: "Ideation Techniques",
              SUB: [
                "Brainstorming",
                "SCAMPER Technique.",
                "Mind Mapping.",
                "Random Word/Stimulus Technique.",
              ],
            },
            {
              name: "Idea Selection and Prioritization",
              SUB: [
                "Criteria for evaluating and selecting ideas",
                "Techniques for prioritizing ideas based on feasibility, desirability, and viability",
                "Group exercises to practice idea selection and prioritization",
              ],
            },
            {
              name: "Introduction to Prototyping",
              SUB: [
                "Definition and purpose of prototyping in the design process",
                "Different levels of prototyping: low-fidelity and high-fidelity prototypes",
                "Explaining the benefits of prototyping, such as gathering feedback and testing assumptions",
              ],
            },
            {
              name: "Prototyping Tools and Techniques",
              SUB: [
                "Paper Prototyping",
                "Digital Prototyping",
                "Rapid Prototyping",
              ],
            },
            {
              name: "User Testing and Feedback Collection",
              SUB: [
                "Importance of user testing in the prototyping phase",
                "Techniques for conducting effective user testing sessions",
                "Strategies for collecting and analyzing user feedback",
              ],
            },
            {
              name: "Case Study: Applying Ideation and Prototyping",
              SUB: [
                "Presenting a real-world case study",
                "Discussing the ideation process used in the case study",
                "Exploring the prototyping techniques employed",
                "Analyzing the impact of ideation and prototyping on the final design solution",
              ],
            },
          ],
        },
        {
          name: "TESTING AND ITERATION",
          topics: [
            {
              name: "Importance of Testing and Iteration",
              SUB: [
                "Explaining the significance of testing and iteration in the design process",
                "Discussing the benefits of gathering user feedback and insights",
                "Sharing real-life examples of how testing and iteration have led to successful design solutions",
              ],
            },
            {
              name: "Planning & Conducting User Tests",
              SUB: [
                "Identifying the objectives and goals of user testing",
                "Defining user testing scenarios and tasks",
                "Discussing the selection of appropriate user test participants.",
                "Demonstrating methods for capturing user feedback and observations. Emphasizing the importance of creating a comfortable and open environment for users during testing",
              ],
            },
            {
              name: "Analyzing and Interpreting User Feedback",
              SUB: [
                "Techniques for analyzing and interpreting user feedback",
                "Identifying patterns and insights from user test results",
                "Discussing how to prioritize & address user feedback effectively",
              ],
            },
            {
              name: "Iteration and Refinement",
              SUB: [
                "Understanding the iterative nature of the design process",
                "Discussing strategies for incorporating user feedback and iterating on design solutions",
                "Highlighting the importance of prototyping and testing again after making iterations",
              ],
            },
            {
              name: "Case Study: Testing & Iteration in Product Design",
              SUB: [
                "Presenting a real-world case study",
                "Discussing the testing and iteration process used in the case study",
                "Analyzing the user feedback gathered and the resulting design iterations",
                "Evaluating the impact of testing and iteration on the final product",
              ],
            },
          ],
        },
        {
          name: "IMPLEMENTATION & BUSINESS OPPORTUNITIES IDENTIFICATION",
          topics: [
            {
              name: "Strategies for Implementation",
              SUB: [
                "Discussing the importance of planning & preparing for implement.",
                "Exploring strategies for effectively implementing design solutions",
                "Addressing potential barriers and challenges in implementation and how to overcome them",
              ],
            },
            {
              name: "Stakeholder Engagement",
              SUB: [
                "Identifying key stakeholders and their roles in the implementation process",
                "Techniques for engaging stakeholders and obtaining their buy-in",
                "Discussing communication strategies to ensure alignment and collaboration with stakeholders",
              ],
            },
            {
              name: "Intro to Business Opportunities Identification",
              SUB: [
                "Definition and importance of BOI",
                "Benefits of identifying new business opportunities",
              ],
            },
            {
              name: "Understanding Market Dynamics",
              SUB: [
                "Market analysis techniques (PESTEL analysis, SWOT analysis, Porter's Five Forces)",
                "Identifying industry trends and opportunities",
                "Analyzing market size, growth potential, and competitive landscape",
              ],
            },
            {
              name: "Trend Spotting and Innovation",
              SUB: [
                "Techniques for trend spotting (scanning the environment, monitoring industry news)",
                "Assessing emerging trends and their potential impact on businesses",
                "Applying innovation frameworks (design thinking, disruptive innovation) to identify new opportunities",
              ],
            },
          ],
        },
      ],
    },

    {
      id: 2,
      name: "REVERSE ENGINEERING ",
      thumbnail: "../../images/course.jpg",
      category: "DESIGN ELEMENTS",
      metrics: {
        students: 600,
        hours: 20,
      },
      slide: s3,
      description:
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
        "In 20+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "Reverse engineering is a vital skill for understanding and analyzing software systems, uncovering vulnerabilities, and gaining insights into proprietary technologies. This program provides a comprehensive introduction to the fundamentals of reverse engineering, equipping participants with the knowledge and techniques needed to analyze and deconstruct software applications. The program covers both static & dynamic analysis techniques, enabling learners to disassemble & decompile executables, analyze assembly code, debug programs, and manipulate software behavior at runtime.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      feedback: [
        {
          name: "GUHAN RAJ R [STUDENT]",
          msg: "I feel confident in my ability to apply the learned techniques to analyze and secure communication systems in my professional work.",
          dp: p7,
        },
        {
          name: "ASHWIN G [STUDENT]",
          msg: "I would highly recommend this course to anyone interested in learning reverse engineering.",
          dp: p7,
        },
        {
          name: "DIVAKAR [STUDENT]",
          msg: "I feel equipped with the necessary knowledge and skills to tackle reverse engineering projects confidently. This course has been a game-changer for me!",
          dp: p7,
        },
        {
          name: "THUSAR R [STUDENT]",
          msg: "I found the reverse engineering course to be an eye-opening experience. The instructor's in-depth knowledge and passion for the subject were evident throughout the sessions.",
          dp: p7,
        },
        {
          name: "ARUN VEL [STUDENT]",
          msg: "I feel much more confident in my reverse engineering skills now and can apply them to real-world scenarios. Thank you for an excellent learning experience!.",
          dp: p7,
        },
        {
          name: "KOTTAI RAJ [STUDENT]",
          msg: "The dynamic analysis session was equally informative.The interactive exercises helped me develop my skills in monitoring program behavior and identifying vulnerabilities.",
          dp: p7,
        },
        {
          name: "THANUSH T [STUDENT]",
          msg: "The sessions were well-paced and covered a wide range of topics, from static analysis to advanced techniques.",
          dp: p7,
        },
        {
          name: "PRAVEEN R [STUDENT]",
          msg: "The mix of theory and practical exercises helped me grasp the concepts effectively.  I am excited to apply my newfound skills in my professional work. Thank you for a great course!",
          dp: p7,
        },
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2F8Lqp9FZcnjss2XFfzh3n%2Fcertificates%2Fcert.png?alt=media&token=a767e1e8-aeaf-4cd7-a28c-54f9542e8da6&_gl=1*1hhx6up*_ga*MTI0Mzg0ODM1MS4xNjg0MjQ5MjMz*_ga_CW55HF8NVT*MTY4NTg2NzM1OS4zOC4xLjE2ODU4NjgxMTMuMC4wLjA.",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "STATIC ANALYSIS TECHNIQUES (SAT)",
          topics: [
            {
              name: "File Formats, Headers, and Data Structures",
              SUB: [
                "Overview of common file formats (e.g., PE, ELF)",
                "Understanding file headers and their significance",
                "Analyzing data structures within executables",
                "Identifying key information and metadata",
              ],
            },
            {
              name: "Disassembling and Decompiling Executables",
              SUB: [
                "Introduction to disassembly and decompilation",
                "Using disassemblers (e.g., IDA Pro, Ghidra) to generate assembly code",
                "Interpreting assembly instructions and control flow",
                "Converting assembly code back into high-level languages",
              ],
            },
            {
              name: "Analyzing and Understanding Assembly Code",
              SUB: [
                "Techniques for reading and understanding assembly instructions",
                "Identifying control structures (loops, conditions) in assembly code",
                "Analyzing function calls and arguments passing conventions",
                "Identifying key algorithms and data structures",
              ],
            },
            {
              name: "Identifying Program Functionality & Algorithms",
              SUB: [
                "Reverse engineering program behavior through static analysis",
                "Identifying key functions and their purposes",
                "Analyzing data flow and dependencies",
                "Extracting algorithms and understanding their functionality",
              ],
            },
            {
              name: "Hands-on Exercises and Case Studies",
              SUB: [
                "Engaging in practical exercises to apply static analysis techniques",
                "Analyzing real-world examples of executables",
                "Solving challenges to identify program functionality and algorithms",
              ],
            },
          ],
        },
        {
          name: "DYNAMIC ANALYSIS TECHNIQUES (DAT)",
          topics: [
            {
              name: "Introduction to Dynamic Analysis ",
              SUB: [
                "Overview of dynamic analysis and its importance in reverse engineering",
                "Understanding the benefits and limitations of dynamic analysis techniques",
                "Comparison between static and dynamic analysis approaches",
                "Real-world applications of dynamic analysis in vulnerability assessment and malware analysis",
              ],
            },
            {
              name: "Debugging and Runtime Analysis",
              SUB: [
                "Introduction to debugging tools.",
                "Setting breakpoints, stepping through code, and examining memory",
                "Analyzing program state and variables during runtime",
                "Investigating stack traces and crash dumps",
              ],
            },
            {
              name: "Using Debuggers and Monitoring Tools ",
              SUB: [
                "Utilizing advanced features of debugging tools",
                "Memory analysis and monitoring tools (e.g., Process Monitor)",
                "Tracing system calls and API interactions",
                "Analyzing network traffic and communications",
              ],
            },
            {
              name: "Define the Problem Statement and User Needs",
              SUB: [
                "Explaining the purpose of defining a clear problem statement",
                "Discussing techniques for reframing problems to uncover deeper user needs",
                "Guiding participants through exercises to define a problem statement and identify user needs",
              ],
            },
            {
              name: "Analyzing Runtime Behavior and Memory Usage",
              SUB: [
                "Monitoring program execution flow and behavior",
                "Identifying runtime vulnerabilities and exploit techniques",
                "Analyzing memory usage, heap, and stack structures",
                "Detecting and analyzing code injections and anti-debugging techniques",
              ],
            },
            {
              name: "Patching and Modifying Program Behavior",
              SUB: [
                "Modifying program behavior during runtime.",
                "Patching binaries to alter program functionality.",
                "Bypassing license checks and other security mechanisms.",
                "Reverse engineering and modifying cryptographic algorithms.",
              ],
            },
          ],
        },
        {
          name: "ADVANCED & APPLICATIONS",
          topics: [
            {
              name: "Advanced Reverse Engineering Techniques",
              SUB: [
                "Advanced code analysis techniques",
                "Function pointer analysis and virtual table reconstruction",
                "Code obfuscation and anti-reverse engineering techniques",
                "Recognizing and bypassing code protections (e.g., anti-debugging, anti-disassembly)",
              ],
            },
            {
              name: "Reverse Engineering Malware & Security Threats",
              SUB: [
                "Overview of malware analysis methodologies",
                "Dynamic and static analysis of malware samples",
                "Identifying malware behavior and capabilities",
                "Reverse engineering malware communication and command-and-control mechanisms",
              ],
            },
            {
              name: "Network Protocols & Communications",
              SUB: [
                "Reverse engineering network protocols and data formats",
                "Analyzing network traffic and packet capture files",
                "Identifying communication patterns and extracting data",
                "Identifying vulnerabilities and potential attack vectors in network protocols",
              ],
            },
            {
              name: "Hardware and Firmware",
              SUB: [
                "Introduction to hardware reverse engineering.",
                "Analyzing firmware and embedded systems.",
                "Identifying and extracting firmware from hardware devices.",
                "Analyzing hardware components and their interactions.",
              ],
            },
            {
              name: "Practical Applications and Case Studies",
              SUB: [
                "Real-world applications of reverse engineering in different domains",
                "Case studies on reverse engineering of software, hardware, and protocols",
                "Success stories and lessons learned from reverse engineering projects",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "PRODUCTION PLANNING & CONTROL (PPC)",
      thumbnail: "../../images/course.jpg",
      category: "MANAGEMENT",
      slide: s3,
      order: 3,
      description:
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
        "In 50+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "Production Planning and Control Management provides participants with a comprehensive understanding of the principles, strategies, and tools necessary for effective production planning and control.The course covers material requirement planning (MRP), where participants will gain insights into the basics of MRP, bill of materials, master production scheduling, and inventory management. Participants will learn about production scheduling techniques, shop floor control, lean manufacturing principles, quality control, and performance measurement.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2FBmTpjtkRUuSLmcEQ4HVu%2Fcertificates%2Fcert.png?alt=media&token=c7050733-7850-4541-9660-35e03278c649&_gl=1*1wrqmnv*_ga*MTI0Mzg0ODM1MS4xNjg0MjQ5MjMz*_ga_CW55HF8NVT*MTY4NjQ2NjE2OC41OS4xLjE2ODY0NjY1MjEuMC4wLjA.",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "INTRO PRODUCTION PLANNING & CONTROL",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Production Planning Process",
              SUB: [
                "Overview of the production planning process",
                "Demand forecasting and sales planning",
                "Aggregate production planning and master production scheduling",
                "Capacity planning and resource allocation",
              ],
            },
            {
              name: "Material Planning and Control",
              SUB: [
                "MRP and its role in production planning",
                "Bill of Materials (BOM) and its significance in material planning",
                "Inventory management techniques in ppc",
                "Just-in-Time (JIT) and Kanban systems",
              ],
            },
            {
              name: "Production Control Techniques",
              SUB: [
                "Shop floor control and work order release",
                "Sequencing and scheduling of production orders",
                "Managing and tracking work in progress (WIP)",
                "Real-time production monitoring and control",
              ],
            },
            {
              name: "Key Performance Indicators (KPIs) in PPC",
              SUB: [
                "Essential KPIs for measuring production performance",
                "Metrics for evaluating production efficiency and effectiveness",
                "Analyzing and interpreting production data",
              ],
            },
            {
              name: "PPC Software and Tools ",
              SUB: [
                "Introduction to production planning and control software systems",
                "Features and functionalities of production planning tools",
                "Benefits and considerations in selecting and implementing production planning software",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world production planning and control challenges",
                "Examining successful production planning and control strategies",
                "Applying concepts to practical scenarios",
              ],
            },
          ],
        },
        {
          name: "DEMAND FORECASTING & CAPACITY PLANNING",
          topics: [
            {
              name: "Importance of Demand Forecasting",
              SUB: [
                "Understanding the significance of demand forecasting in PPC",
                "Impact of accurate demand forecasting on inventory management and customer satisfaction",
                "Forecasting methods and techniques.",
              ],
            },
            {
              name: "Demand Forecasting Techniques",
              SUB: [
                "Qualitative forecasting methods",
                "Quantitative forecasting methods",
                "Selection and application of appropriate forecasting techniques based on data availability and forecast horizon",
              ],
            },
            {
              name: "Challenges & Considerations",
              SUB: [
                "Factors influencing demand variability and uncertainty",
                "Seasonality, trends, and other demand patterns",
                "Dealing with demand forecasting errors and adjusting forecasts",
              ],
            },
            {
              name: "Capacity Planning and Analysis",
              SUB: [
                "Capacity planning objectives and considerations",
                "Evaluating production capacity requirements.",
                "Capacity utilization and bottleneck identification",
              ],
            },
            {
              name: "Determining Production Capacity",
              SUB: [
                "Factors influencing production capacity",
                "Capacity measurement and estimation methods",
                "Techniques for determining the required production capacity",
              ],
            },
            {
              name: "Strategies for Balancing Demand & Capacity",
              SUB: [
                "Level production strategy and chase production strategy",
                "Strategies for managing demand fluctuations",
                "Outsourcing and subcontracting as capacity management approaches.",
              ],
            },
            {
              name: "Aggregate Production Planning",
              SUB: [
                "Developing aggregate production plans based on demand forecasts and capacity constraints",
                "Production smoothing techniques",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world demand forecasting and capacity planning scenarios",
                "Examining successful strategies for demand and capacity management.",
              ],
            },
          ],
        },
        {
          name: "MATERIAL REQUIREMENT PLANNING (MRP)",
          topics: [
            {
              name: "Introduction to MRP",
              SUB: [
                "Overview of MRP and its significance",
                "Objectives and benefits of implementing MRP in PPC",
                "Integration of MRP with other planning and control systems",
              ],
            },
            {
              name: "Bill of Materials (BOM) and its Role in MRP",
              SUB: [
                "Understanding the structure and components of the Bill of Materials",
                "BOM accuracy and maintenance",
                "BOM explosion and implosion techniques",
              ],
            },
            {
              name: "MRP Process and Calculations",
              SUB: [
                "Key steps in the MRP process",
                "MRP calculations and logic",
                "Time-phased MRP versus order point systems",
              ],
            },
            {
              name: "Material Planning Parameters in MRP",
              SUB: [
                "Lead time and safety stock considerations",
                "Lot sizing methods (e.g., EOQ, fixed order quantity, periodic order quantity)",
                "Reorder points and order quantities determination.",
              ],
            },
            {
              name: "Managing Inventory in MRP",
              SUB: [
                "Inventory control techniques in MRP",
                "ABC analysis and inventory classification",
                "Stockout and excess inventory management",
              ],
            },
            {
              name: "MRP Implementation & Software Systems",
              SUB: [
                "Steps and considerations for implementing MRP",
                "Introduction to MRP software systems and tools",
                "Benefits and challenges of MRP implementation",
              ],
            },
            {
              name: "MRP in Production Scheduling and Control",
              SUB: [
                "Linking MRP with production scheduling and shop floor control",
                "Coordination between MRP and capacity planning",
                "Role of MRP in meeting production schedules and customer demand.",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world MRP implementation and challenges",
                "Examining successful strategies for effective MRP management",
                "Applying MRP concepts to practical scenarios",
              ],
            },
          ],
        },
        {
          name: "PRODUCTION SCHEDULING AND CONTROL",
          topics: [
            {
              name: "Intro to Production Scheduling & Control",
              SUB: [
                "Definition and significance of production scheduling and control",
                "Objectives and benefits of effective production scheduling",
                "Key challenges in production scheduling and control",
              ],
            },
            {
              name: "Principles of Production Scheduling",
              SUB: [
                "Basic principles and considerations in production scheduling",
                "Types of production scheduling",
                "Factors influencing production scheduling decisions",
              ],
            },
            {
              name: "Techniques for Production Scheduling",
              SUB: [
                "Gantt charts and their role in production scheduling",
                "Finite and infinite capacity scheduling methods",
                "Scheduling algorithms (e.g., priority rules, heuristics)",
                "Sequencing and prioritization of production orders",
              ],
            },
            {
              name: "Shop Floor Control and Work Order Release",
              SUB: [
                "Shop floor control techniques and strategies",
                "Work order release processes and considerations",
                "Material availability and release timing",
              ],
            },
            {
              name: "Managing and Tracking Work in Progress",
              SUB: [
                "Techniques for monitoring and tracking work in progress",
                "Shop floor data collection and real-time production monitoring",
                "Visual management tools (e.g., Kanban boards, Andon systems)",
              ],
            },
            {
              name: "Production Control & Bottleneck Management",
              SUB: [
                "Identifying and managing production bottlenecks",
                "Load leveling and smoothing techniques",
                "Techniques for managing production disruptions and changes",
              ],
            },
            {
              name: "Lean Production and Pull Systems",
              SUB: [
                "Introduction to lean production principles",
                "Pull production systems (e.g., Kanban, Just-in-Time)",
                "Implementing lean production concepts in production scheduling",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world production scheduling and control scenarios",
                "Examining successful strategies for efficient production scheduling",
                "Applying production scheduling and control concepts to practical situations",
              ],
            },
          ],
        },
        {
          name: "LEAN PRODUCTION & CONTINUOUS IMPROVEMENT ",
          topics: [
            {
              name: "Introduction to Lean Production",
              SUB: [
                "Understanding the principles and philosophy of lean production",
                "Key benefits of adopting lean production in manufacturing operations",
                "Lean thinking and its application in PPC",
              ],
            },
            {
              name: "Seven Wastes in Lean Production",
              SUB: [
                "Identification and elimination of the seven wastes (muda) in production processes",
                "Waste reduction techniques",
                "Value-added and non-value-added activities",
              ],
            },
            {
              name: "Value Stream Mapping (VSM)",
              SUB: [
                "Intro to value stream mapping and its role in lean production",
                "Mapping the current state and identifying opportunities for improvement",
                "Designing the future state value stream map",
              ],
            },
            {
              name: "Just-in-Time (JIT) Production",
              SUB: [
                "Principles and objectives of just-in-time production",
                "Pull systems (e.g., Kanban) and their role in JIT production",
                "Lean layout design and workplace organization",
              ],
            },
            {
              name: "Kaizen and Continuous Improvement",
              SUB: [
                "Understanding the concept of kaizen and its significance in lean production",
                "Techniques for generating improvement ideas and facilitating kaizen events, Creating a culture of continuous improvement.",
              ],
            },
            {
              name: "Lean Tools and Techniques",
              SUB: [
                "Poka-yoke (error-proofing) techniques",
                "Total Productive Maintenance (TPM)",
                "Single-Minute Exchange of Die (SMED)",
              ],
            },
            {
              name: "Lean Leadership and Employee Engagement",
              SUB: [
                "Role of leadership in driving lean transformation",
                "Creating a culture of employee involvement and engagement",
                "Training and empowering employees in lean practices",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world lean production implementation and challenges",
                "Examining successful lean production strategies and outcomes",
                "Applying lean production concepts to practical scenarios",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "SUPPLY CHAIN MANAGEMENT",
      thumbnail: "../../images/course.jpg",
      category: "MANAGEMENT",
      slide: s3,
      order: 4,
      description:
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
        "In 40+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "This comprehensive online course on supply chain management provides a deep understanding of the key concepts, strategies, and practices involved in effectively managing the flow of goods, services, and information across the supply chain. ",
        "The course is designed to equip participants with the knowledge and skills necessary to optimize supply chain operations, enhance efficiency, reduce costs, and improve overall business performance.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2FHdguF5RNcSHdhm0VC4oE%2Fcertificates%2Fcert.png?alt=media&token=494f8357-cb1d-4a6d-a333-96d891616182&_gl=1*1xd9yjn*_ga*MTI0Mzg0ODM1MS4xNjg0MjQ5MjMz*_ga_CW55HF8NVT*MTY4NjQ3NDQwMy42MC4xLjE2ODY0NzQ0OTkuMC4wLjA.",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "INTRO TO SUPPLY CHAIN MANAGEMENT",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Overview of SCM",
              SUB: [
                "Definition and scope of supply chain management",
                "Evolution and importance of supply chain management in today's global economy",
                "Key objectives and benefits of effective supply chain management",
              ],
            },
            {
              name: "Components of the Supply Chain",
              SUB: [
                "Overview of the different components and stages of the supply chain",
                "Explanation of the upstream and downstream activities",
                "Understanding the flow of goods, services, and information across the supply chain",
              ],
            },
            {
              name: "Key Functions in Supply Chain Management",
              SUB: [
                "Procurement and sourcing , Operations and production",
                "Distribution and logistics",
                "Demand planning and forecasting",
              ],
            },
            {
              name: "Supply Chain Integration & Collaboration",
              SUB: [
                "Importance of collaboration among supply chain partners",
                "Enhancing communication and coordination throughout the supply chain",
                "Benefits and challenges of supply chain integration",
              ],
            },
            {
              name: "Technology and Innovation in SCM",
              SUB: [
                "Role of technology in optimizing supply chain operations",
                "Introduction to supply chain management software and tools",
                "Emerging trends and innovations in supply chain management",
              ],
            },
            {
              name: "Sustainability and Ethical Considerations",
              SUB: [
                "Sustainable supply chain practices and their impact on business",
                "Ethical considerations in supply chain management, Corporate social responsibility & supply chain sustainability initiatives",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world supply chain management cases",
                "Examining successful supply chain strategies & lessons learned",
                "Applying concepts to practical scenarios",
              ],
            },
          ],
        },
        {
          name: "DEMAND PLANNING AND FORECASTING",
          topics: [
            {
              name: "Understanding Demand Patterns",
              SUB: [
                "Different types of demand patterns (seasonal, trend, random fluctuations)",
                "Analyzing historical demand data to identify patterns",
                "Factors influencing demand variation in different industries",
              ],
            },
            {
              name: "Forecasting Techniques and Models",
              SUB: [
                "Quantitative forecasting methods",
                "Qualitative forecasting methods",
                "Time series analysis and forecasting model.",
              ],
            },
            {
              name: "Forecast Accuracy Measuring & Improvement",
              SUB: [
                "Metrics for measuring forecast accuracy",
                "Techniques for improving forecast accuracy",
                "Continuous monitoring and adjustment of forecasting models",
              ],
            },
            {
              name: "Demand Planning and Inventory Management",
              SUB: [
                "Importance of demand planning in inventory optimization",
                "Safety stock and reorder point determination",
                "Demand-driven inventory management strategies (Just-in-Time, Vendor-Managed Inventory)",
              ],
            },
            {
              name: "CPFR",
              SUB: [
                "Overview of CPFR process and its benefits",
                "Collaboration with customers and suppliers for demand planning and forecasting",
                "Sharing of information and coordination in the supply chain",
              ],
            },
            {
              name: "Demand Sensing and Shaping",
              SUB: [
                "Techniques for real-time demand sensing using point-of-sale data and advanced analytics",
                "Demand shaping strategies to influence customer demand.",
              ],
            },
            {
              name: "Demand Planning Software and Tools",
              SUB: [
                "Introduction to demand planning software solutions",
                "Features & functionalities of demand forecasting & planning tools",
                "Benefits and considerations in selecting and implementing demand planning systems",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world demand planning and forecasting challenges",
                "Examining successful demand planning strategies & lessons learned",
                "Applying forecasting techniques to practical scenarios",
              ],
            },
          ],
        },
        {
          name: "PROCUREMENT & SUPPLIER MANAGEMENT",
          topics: [
            {
              name: "Strategic Sourcing & Supplier Selection",
              SUB: [
                "Importance of strategic sourcing in supply chain management",
                "Supplier evaluation and selection criteria",
                "Developing a supplier portfolio & supplier segmentation strategies",
              ],
            },
            {
              name: "Supplier Relationship Management (SRM)",
              SUB: [
                "Understanding the role and benefits of supplier relationship management",
                "Building collaborative and long-term relationships with suppliers",
                "Strategies for effective communication, trust, and mutual value creation",
              ],
            },
            {
              name: "Supplier Performance Measuring & Improve",
              SUB: [
                "Key performance indicators (KPIs) for evaluating supplier performance",
                "Techniques for supplier performance measurement & monitoring",
                "Collaborative improvement initiatives & supplier development programs",
              ],
            },
            {
              name: "Negotiation and Contract Management",
              SUB: [
                "Negotiation strategies and techniques in procurement",
                "Contract types, terms, and conditions",
                "Supplier contract management and compliance monitoring",
              ],
            },
            {
              name: "Supplier Risk Management",
              SUB: [
                "Identifying and assessing supplier risks",
                "Strategies for mitigating supplier-related risks",
                "Continuity planning and supplier diversification",
              ],
            },
            {
              name: "Sustainable and Ethical Procurement",
              SUB: [
                "Importance of sustainable and ethical procurement practices",
                "Environmental and social considerations in supplier selection",
                "Supplier code of conduct and auditing processes",
              ],
            },
            {
              name: "Supplier Collaboration and Innovation",
              SUB: [
                "Collaborative product development and innovation with suppliers",
                "Supplier involvement in value engineering and cost optimization",
                "Supplier collaboration platforms and tools",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world procurement and supplier management scenarios",
                "Examining successful supplier management strategies and lessons learned",
                "Applying supplier management concepts to practical situations",
              ],
            },
          ],
        },
        {
          name: "INVENTORY MANAGEMENT & WAREHOUSING",
          topics: [
            {
              name: "Types of Inventory",
              SUB: [
                "Overview of different types of inventory.",
                "Understanding the costs and risks associated with holding inventory",
                "Importance of accurate inventory tracking and management",
              ],
            },
            {
              name: "Inventory Control Techniques",
              SUB: [
                "ABC analysis and categorization of inventory items",
                "Economic Order Quantity (EOQ) model for order quantity optimization",
                "Safety stock calculation and determination",
              ],
            },
            {
              name: "Inventory Optimization Strategies",
              SUB: [
                "Just-in-Time (JIT) and Lean principles for reducing inventory levels",
                "Demand-driven inventory management approaches",
                "Collaborative inventory planning and forecasting",
              ],
            },
            {
              name: "Warehouse Operations and Layout Design",
              SUB: [
                "Warehouse functions and processes",
                "Layout design principles for efficient space utilization",
                "Slotting and storage strategies to minimize travel time and improve picking efficiency",
              ],
            },
            {
              name: "Warehouse Technology and Automation",
              SUB: [
                "Warehouse management systems (WMS) and their functionalities",
                "Automated storage and retrieval systems (AS/RS)",
                "RFID, barcoding, and other technologies for inventory tracking and management",
              ],
            },
            {
              name: "Cross-Docking and Consolidation Centers",
              SUB: [
                "Cross-docking concepts and benefits",
                "Consolidation centers for efficient order fulfillment",
                "Strategies for reducing handling and storage time",
              ],
            },
            {
              name: "Inventory Visibility & Tracking Technologies",
              SUB: [
                "Real-time inventory tracking and visibility solutions",
                "RFID, IoT, and sensor-based technologies",
                "Integration of inventory data with supply chain systems",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world inventory management and warehousing scenarios",
                "Examining successful strategies for inventory optimization",
                "Applying inventory management concepts to practical situations",
              ],
            },
          ],
        },
        {
          name: "LOGISTICS AND TRANSPORTATION",
          topics: [
            {
              name: "Modes of Transportation",
              SUB: [
                "Overview of transportation modes (road, rail, air, sea)",
                "Characteristics, advantages, and limitations of each mode",
                "Factors influencing mode selection in different supply chain scenarios.",
              ],
            },
            {
              name: "Freight Forwarding and Carrier Selection",
              SUB: [
                "Role of freight forwarders in international logistics",
                "Factors to consider when selecting carriers",
                "Contract negotiation and service level agreements",
              ],
            },
            {
              name: "Route Optimization and Load Planning",
              SUB: [
                "Route optimization techniques for efficient transportation",
                "Load planning strategies to maximize truck/container utilization",
                "Tools and software for route planning and load optimization",
              ],
            },
            {
              name: "Customs Management and Trade Compliance",
              SUB: [
                "Import and export regulations and documentation",
                "Customs clearance procedures and compliance requirements",
                "Managing customs brokers and ensuring trade compliance",
              ],
            },
            {
              name: "Last-Mile Delivery and Customer Service",
              SUB: [
                "Importance of last-mile delivery in customer satisfaction",
                "Strategies for efficient last-mile delivery operations",
                "Enhancing customer service through timely and accurate deliveries",
              ],
            },
            {
              name: "Reverse Logistics & Returns Management",
              SUB: [
                "Managing reverse logistics processes for product returns & repairs",
                "Reverse logistics network design and optimization",
                "Strategies for minimizing costs and maximizing value in returns management",
              ],
            },
            {
              name: "Logistics Outsourcing & Third-Party Logistics",
              SUB: [
                "Benefits and considerations of outsourcing logistics functions",
                "Roles and responsibilities of third-party logistics providers (3PLs)",
                "Effective management of 3PL relationships",
              ],
            },
            {
              name: "Emerging Trends - Logistics & Transportation",
              SUB: [
                "Green logistics and sustainability initiatives",
                "Impact of e-commerce on logistics and delivery operations",
                "Technological advancements and automation in transportation",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "PROJECT MANAGEMENT",
      thumbnail: "../../images/course.jpg",
      category: "MANAGEMENT",
      slide: s3,
      order: 5,
      description:
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
        "In 50+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "Project management course provides a comprehensive introduction to the principles and practices of project management. Participants will gain a solid foundation in project management methodologies, tools, and techniques, enabling them to successfully plan, execute, monitor, and close projects. Through interactive sessions, real-world case studies, and practical exercises, participants will learn how to effectively manage project scope, time, cost, quality, and stakeholders. ",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2FT4tJgpGiKixHQGqDH2eZ%2Fcertificates%2Fcert.png?alt=media&token=11b8e108-0ec7-4845-860a-4e67c373de44&_gl=1*khvk73*_ga*MTI0Mzg0ODM1MS4xNjg0MjQ5MjMz*_ga_CW55HF8NVT*MTY4NjQ3ODU1OS42MS4xLjE2ODY0Nzg2MzIuMC4wLjA.",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "INTRO TO PROJECT MANAGEMENT",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Importance of Project Management",
              SUB: [
                "Significance of effective project management in achieving organizational goals",
                "Project management methodologies and practices",
                "Common challenges faced in project management and their impact on project success.",
              ],
            },
            {
              name: "Project Life Cycle and Process Groups",
              SUB: [
                "Overview of the project life cycle stages",
                "Understanding the five process groups & their interdependencies",
                "Key deliverables & activities associated with each process group",
              ],
            },
            {
              name: "Project Stakeholders and Communication",
              SUB: [
                "Overview of the project life cycle stages",
                "Understanding the five process groups & their interdependencies",
                "Key deliverables & activities associated with each process group",
              ],
            },
            {
              name: "Project Management Roles & Responsibilities",
              SUB: [
                "The role of the project manager and their responsibilities",
                "Project team roles and their contributions",
                "Collaborative approaches and team dynamics in project management",
              ],
            },
            {
              name: "Project Success Criteria and Metrics",
              SUB: [
                "Defining project success criteria",
                "Establishing project metrics and key performance indicators (KPIs)",
                "Measuring and evaluating project success",
              ],
            },
            {
              name: "Ethical Considerations - Project Management",
              SUB: [
                "Ethical challenges in project management",
                "Ethical standards and codes of conduct for project managers",
                "Promoting ethical practices in project management",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world production planning and control challenges",
                "Examining successful production planning and control strategies",
                "Applying concepts to practical scenarios",
              ],
            },
          ],
        },
        {
          name: "PROJECT PLANNING & SCOPE MANAGEMENT",
          topics: [
            {
              name: "Defining Project Scope",
              SUB: [
                "Importance of clearly defining project scope",
                "Techniques for gathering and documenting project requirements",
                "Identifying project constraints and assumptions",
                "Scope statement development",
              ],
            },
            {
              name: "Work Breakdown Structure (WBS)",
              SUB: [
                "Introduction to the Work Breakdown Structure (WBS)",
                "Creating a hierarchical breakdown of project deliverables",
                "WBS dictionary and its role in project planning",
              ],
            },
            {
              name: "Activity Sequencing and Dependencies",
              SUB: [
                "Identifying project activities and their relationships",
                "Techniques for sequencing project activities (e.g., precedence diagramming method, dependency determination)",
                "Critical Path Method (CPM) and its role in project scheduling",
              ],
            },
            {
              name: "Developing the Project Schedule",
              SUB: [
                "Estimating activity durations and resource requirements",
                "Creating a project schedule using project management software",
                "Gantt charts and network diagrams for visualizing the project schedule.",
              ],
            },
            {
              name: "Resource Planning and Allocation",
              SUB: [
                "Identifying project resources (human, material, equipment)",
                "Estimating resource requirements",
                "Resource leveling and resource allocation techniques",
              ],
            },
            {
              name: "Risk Identification & Management",
              SUB: [
                "Techniques for identifying project risks",
                "Assessing and prioritizing project risks",
                "Developing risk response strategies and contingency plans",
              ],
            },
            {
              name: "Scope Change Management",
              SUB: [
                "Change control process and procedures",
                "Evaluating and managing scope change requests",
                "Impact of scope changes on the project schedule and resources",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world project planning and scope management scenarios",
                "Examining successful projects and lessons learned",
                "Applying project planning and scope management concepts to practical situations",
              ],
            },
          ],
        },
        {
          name: "PROJECT EXECUTION  & TEAM MANAGEMENT",
          topics: [
            {
              name: "Project Execution Overview",
              SUB: [
                "Introduction to project execution phase",
                "Key objectives and activities during project execution",
                "Linking project execution to project planning and scope managemen",
              ],
            },
            {
              name: "Team Roles and Responsibilities",
              SUB: [
                "Defining project team roles and responsibilities",
                "Team formation and development stages",
                "Building and managing a high-performing project team",
              ],
            },
            {
              name: "Communication Stakeholder Engagement",
              SUB: [
                "Importance of effective communication in project execution",
                "Communication planning and strategies",
                "Stakeholder engagement and management.",
              ],
            },
            {
              name: "Managing Project Risks and Issues",
              SUB: [
                "Identifying and assessing project risks",
                "Developing risk response strategies and contingency plans",
                "Proactively managing project risks during execution",
                "Handling project issues and conflicts",
              ],
            },
            {
              name: "Quality Assurance and Control",
              SUB: [
                "Defining project quality objectives and criteria",
                "Quality planning and quality control techniques",
                "Quality assurance activities during project execution",
              ],
            },
            {
              name: "Procurement and Vendor Management",
              SUB: [
                "Procurement planning and strategy development",
                "Request for Proposal (RFP) process and vendor selection",
                "Contract management and vendor performance monitoring",
              ],
            },
            {
              name: "Change Management and Project Updates",
              SUB: [
                "Change control process and procedures during project execution",
                "Assessing and managing project changes",
                "Communicating project updates and progress reports",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world project execution and team management scenarios",
                "Examining successful projects and lessons learned",
                "Applying project execution and team management concepts to practical situations",
              ],
            },
          ],
        },
        {
          name: "PROJECT MONITORING AND CONTROL",
          topics: [
            {
              name: "Project Monitoring and Control Overview",
              SUB: [
                "Introduction to project monitoring and control phase",
                "Key objectives and activities during project monitoring and control",
                "Linking project monitoring and control to project execution",
              ],
            },
            {
              name: "Monitoring Project Progress & Performance",
              SUB: [
                "Defining project performance metrics and key performance indicators (KPIs)",
                "Collecting project data and progress updates",
                "Analyzing project performance and identifying variances",
              ],
            },
            {
              name: "Earned Value Management (EVM)",
              SUB: [
                "Introduction to Earned Value Management (EVM)",
                "EVM formulas and calculations (PV, EV, AC, SPI, CPI)",
                "Assessing project schedule and cost performance using EVM",
              ],
            },
            {
              name: "Project Tracking and Reporting",
              SUB: [
                "Creating project status reports and dashboards",
                "Tracking project milestones and deliverables",
                "Reporting project progress to stakeholders",
              ],
            },
            {
              name: "Managing Project Changes and Variations",
              SUB: [
                "Change control process during project monitoring and control",
                "Assessing and managing project changes and variations",
                "Evaluating change requests and their impact on project objectives",
              ],
            },
            {
              name: "Risk Response and Mitigation Strategies",
              SUB: [
                "Reviewing project risks and their mitigation strategies",
                "Monitoring and controlling project risks during project execution",
                "Implementing risk response plans",
              ],
            },
            {
              name: "Project Documentation and Record Keeping",
              SUB: [
                "Importance of project documentation and record keeping",
                "Document control and versioning",
                "Archiving project documents and lessons learned",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world project monitoring and control scenarios",
                "Examining successful projects and lessons learned",
                "Applying project monitoring and control concepts to practical situations.",
              ],
            },
          ],
        },
        {
          name: "PROJECT CLOSURE AND LESSONS LEARNED ",
          topics: [
            {
              name: "Project Closure Overview",
              SUB: [
                "Importance of project closure for project success",
                "Key objectives and activities during project closure",
                "Transitioning project deliverables to operations or clients",
              ],
            },
            {
              name: "Project Closure Activities and Deliverables",
              SUB: [
                "Completing final project deliverables",
                "Conducting final project reviews and approvals",
                "Obtaining project sign-offs and acceptance",
              ],
            },
            {
              name: "Project Evaluate & Performance Assessment",
              SUB: [
                "Assessing project performance against objectives",
                "Conducting post-project evaluations",
                "Analyzing project success factors and challenges",
              ],
            },
            {
              name: "Analyzing project success factors and challenges",
              SUB: [
                "Importance of lessons learned in project management",
                "Techniques for capturing and documenting lessons learned",
                "Creating a lessons learned repository for future projects",
              ],
            },
            {
              name: "Project Documentation and Archiving",
              SUB: [
                "Organizing and archiving project documentation",
                "Ensuring proper storage and accessibility of project records",
                "Documenting project closure activities and outcomes",
              ],
            },
            {
              name: "Project Success and Team Contributions",
              SUB: [
                "Recognizing and appreciating project team contributions",
                "Celebrating project success and milestones",
                "Promoting a positive project closure experience",
              ],
            },
            {
              name: "Continuous Improvement - Project",
              SUB: [
                "Applying lessons learned to future projects",
                "Promoting a culture of continuous improvement in project management , Incorporating feedback and insights ",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world project closure and lessons learned scenarios",
                "Examining successful project closures and their impact on future projects.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "QUALITY MANAGEMENT",
      thumbnail: "../../images/course.jpg",
      category: "MANAGEMENT",
      slide: s3,
      order: 6,
      description:
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
        "In 50+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "This Quality Management online course is designed to provide participants with a comprehensive understanding of quality management principles, tools, and techniques. Over the course of 50 hours They will explore topics such as quality planning, quality control, quality assurance, quality management systems, and developing a quality culture within organizations. Through interactive discussions, case studies, and practical exercises, participants will develop the skills necessary to drive continuous improvement and enhance customer satisfaction through effective quality management practices.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2Fr8weEIiW3iJ8ocAkeTtJ%2Fcertificates%2Fcert.png?alt=media&token=fbaf147c-9414-43f4-9eae-1ec8bfc2f289&_gl=1*1remt56*_ga*MTI0Mzg0ODM1MS4xNjg0MjQ5MjMz*_ga_CW55HF8NVT*MTY4NjQ4NTczNy42Mi4xLjE2ODY0ODU3OTYuMC4wLjA.",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "INTRO TO QUALITY MANAGEMENT",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Understanding Quality Management",
              SUB: [
                "Definition of quality and its significance in business",
                "Historical development of quality management",
                "The role of quality management in achieving organizational goals",
              ],
            },
            {
              name: "Quality - Philosophies & Approaches",
              SUB: [
                "Intro to different quality management philosophies (e.g., Total Quality Management, Six Sigma, Lean)",
                "Overview of quality improvement methodologies and tools",
                "Key principles and concepts underlying quality management approaches",
              ],
            },
            {
              name: "Quality Management Principles",
              SUB: [
                "Quality management principles (e.g., customer focus, continuous improvement, process approach)",
                "Understanding the impact of quality management principles on organizational performance.",
              ],
            },
            {
              name: "Benefits of Quality Management",
              SUB: [
                "Identifying the benefits of effective quality management",
                "Cost of poor quality and its impact on organizations",
                "Linking quality management to customer satisfaction and loyalty",
              ],
            },
            {
              name: "Quality Management Tools and Techniques",
              SUB: [
                "Quality management tools and techniques (e.g., Pareto analysis, cause and effect diagrams, process mapping)",
                "Overview of statistical process control and data-driven decision-making",
              ],
            },
            {
              name: "Quality Management Roles & Responsibilities",
              SUB: [
                "Roles and responsibilities of quality managers and quality teams",
                "Collaboration between quality management and other functions within an organization",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world examples of quality management practices",
                "Examining successful quality management initiatives and their outcomes",
                "Applying quality management concepts to practical scenarios",
              ],
            },
          ],
        },
        {
          name: "QUALITY PLANNING AND DESIGN",
          topics: [
            {
              name: "Defining Quality Requirements",
              SUB: [
                "Understanding customer needs and expectations",
                "Translating customer requirements into quality specifications",
                "Identifying critical quality parameters and performance indicators",
              ],
            },
            {
              name: "Setting Quality Objectives",
              SUB: [
                "Establishing measurable quality objectives",
                "Linking quality objectives to organizational goals",
                "Defining key performance indicators (KPIs) for quality measurement",
              ],
            },
            {
              name: "Quality Planning Techniques",
              SUB: [
                "Introduction to quality planning tools and techniques",
                "Quality Function Deployment (QFD) for product and service design",
                "Failure Modes and Effects Analysis (FMEA) for risk assessment",
              ],
            },
            {
              name: "Designing for Quality",
              SUB: [
                "Integrating quality into product and service design",
                "Design for Six Sigma (DFSS) principles and methodologies",
                "Considering manufacturability and serviceability in design processes",
              ],
            },
            {
              name: "Quality Control Plans & Inspection Procedures",
              SUB: [
                "Developing quality control plans for process control and monitoring",
                "Defining inspection procedures and acceptance criteria",
                "Determining appropriate sampling techniques for inspection",
              ],
            },
            {
              name: "Projects & Process Improvement Initiatives",
              SUB: [
                "Incorporating quality planning into project management processes",
                "Applying quality planning techniques for process improvement initiatives (e.g., DMAIC in Six Sigma)",
                "Setting up process controls and metrics for continuous improvement.",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world quality planning and design scenarios",
                "Examining successful quality planning initiatives and their outcomes",
                "Applying quality planning and design concepts to practical situations.",
              ],
            },
          ],
        },
        {
          name: "QUALITY CONTROL AND ASSURANCE ",
          topics: [
            {
              name: "Implementing Quality Control Techniques",
              SUB: [
                "Introduction to quality control methods and techniques",
                "Statistical Process Control (SPC) for monitoring and controlling process variation",
                "Control charts and other statistical tools for quality control.",
              ],
            },
            {
              name: "Measurement and Analysis of Process",
              SUB: [
                "Selecting appropriate quality metrics and indicators",
                "Collecting and analyzing data for quality measurement",
                "Interpreting process capability and performance indices.",
              ],
            },
            {
              name: "Quality Auditing and Internal Controls",
              SUB: [
                "Conducting internal quality audits",
                "Importance of internal controls for quality management",
                "Compliance with quality standards and regulatory requirements",
              ],
            },
            {
              name: "Monitoring Quality Metrics and KPIs",
              SUB: [
                "Defining key quality metrics and performance indicators",
                "Establishing benchmark targets for quality performance",
                "Tracking and reporting on quality metrics and KPIs",
              ],
            },
            {
              name: "Continuous Improvement & Corrective Action ",
              SUB: [
                "Defining project quality objectives and criteria",
                "Quality planning and quality control techniques",
                "Quality assurance activities during project execution",
              ],
            },
            {
              name: "Procurement and Vendor Management",
              SUB: [
                "Identifying areas for improvement through data analysis and performance evaluation",
                "Implementing corrective and preventive actions",
                "Root cause analysis and problem-solving techniques",
              ],
            },
            {
              name: "Supply Chain & Vendor Management",
              SUB: [
                "Ensuring quality in the supply chain",
                "Vendor selection and evaluation for quality assurance",
                "Supplier quality management and performance monitoring",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world quality control & assurance scenarios",
                "Examining successful quality control and assurance initiatives and their outcomes",
              ],
            },
          ],
        },
        {
          name: "QUALITY MANAGEMENT SYSTEMS & STANDARDS",
          topics: [
            {
              name: "Intro to Quality Management Systems",
              SUB: [
                "Understanding the purpose and benefits of a quality management system",
                "Overview of popular quality management system standards (e.g., ISO 9001, Six Sigma)",
              ],
            },
            {
              name: "ISO 9001: QMS Requirements",
              SUB: [
                "Understanding the structure and requirements of ISO 9001",
                "Key principles and clauses of ISO 9001",
                "Implementing ISO 9001 within an organization",
              ],
            },
            {
              name: "Developing a Quality Management System",
              SUB: [
                "Steps involved in developing a quality management system",
                "Identifying quality policies, objectives, and processes",
                "Documenting and implementing quality management system procedures",
              ],
            },
            {
              name: "Auditing and Certifying a QMS",
              SUB: [
                "Conducting internal and external QMS audits",
                "Roles and responsibilities of auditors and auditees",
                "Certification process and requirements",
              ],
            },
            {
              name: "Integrating QMS with Business Processes",
              SUB: [
                "Aligning QMS with other business processes",
                "Linking QMS objectives to organizational goals",
                "Ensuring effective communication and collaboration across functions",
              ],
            },
            {
              name: "QMS Documentation and Recordkeeping",
              SUB: [
                "Documentation requirements for a quality management system",
                "Creating and maintaining quality management system documents",
                "Recordkeeping and document control processes",
              ],
            },
            {
              name: "Continuous Improvement of the QMS",
              SUB: [
                "Applying corrective and preventive actions within the QMS",
                "Management review and continual assessment of the QMS",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world examples of QMS and standards",
                "Examining successful QMS implementations and their outcomes",
                "Applying QMS concepts to practical scenarios",
              ],
            },
          ],
        },
        {
          name: "QUALITY LEADERSHIP & ORGANIZATIONAL CULTURE",
          topics: [
            {
              name: "Role of Leadership in Quality Management",
              SUB: [
                "Understanding the importance of leadership in driving quality excellence",
                "Characteristics of effective quality leaders",
                "Leadership styles and their impact on quality culture",
              ],
            },
            {
              name: "Build a Quality-Focused Organization",
              SUB: [
                "Defining organizational culture and its influence on QMS",
                "Strategies for creating a culture of quality",
                "Aligning organizational values and behaviors with quality principles",
              ],
            },
            {
              name: "Employee Empowerment and Engagement ",
              SUB: [
                "Empowering employees to take ownership of quality improvement",
                "Fostering a culture of collaboration and teamwork",
                "Motivating and engaging employees in quality initiatives",
              ],
            },
            {
              name: "Effective Communication and Collaboration",
              SUB: [
                "Importance of effective communication in quality management",
                "Building strong communication channels within the organization",
              ],
            },
            {
              name: "Managing Change and Resistance in QMS",
              SUB: [
                "Understanding the challenges of change management in quality initiatives",
                "Strategies for managing resistance to change",
                "Overcoming barriers to implementing quality improvement.",
              ],
            },
            {
              name: "Leading Continuous Improvement in QMS",
              SUB: [
                "Creating a culture of continuous improvement",
                "Applying lean principles and practices in quality management",
                "Sustaining and evolving quality excellence over time",
              ],
            },
            {
              name: "Case Studies and Best Practices",
              SUB: [
                "Analyzing real-world examples of quality leadership and cultural transformation",
                "Examining successful quality leadership initiatives and their outcomes",
                "Applying quality leadership concepts to practical situations",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "ELECTRIC VEHICLE DESIGN & TECHNOLOGY",
      thumbnail: "../../images/course.jpg",
      category: "PRODUCT DEVELOPMENT",
      slide: s3,
      order: 7,
      description:
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
        "In 30 hours sessions, students will get an overview to Develop a comprehensive understanding of personality theories and their implications for personal growth.students will get certificates from Mechnido.",
        "The Electric Vehicle Design and Technology online advanced course is designed to provide participants with in-depth knowledge and practical skills in the field of electric vehicle (EV) design and technology. Participants will gain a comprehensive understanding of EV components, systems, and design principles. They will also explore the latest advancements in EV technology and learn about emerging trends in the industry",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2FTywbW8r6AzeENPcyJBAQ%2Fcertificates%2Fcert.jpg?alt=media&token=8a73a5f3-91f7-4f83-bb6e-58eae7962803",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2000,
        },
      ],
      schedule: [
        {
          name: "INTRO TO ELECTRIC VEHICLE TECHNOLOGY ",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Types of Electric Vehicles",
              SUB: [
                "Differentiating between BEVs, HEVs, and PHEVs.",
                "Exploring the characteristics and use cases of each vehicle type.",
                "Understanding the concept of range anxiety and its implications.",
              ],
            },
            {
              name: "Electric Vehicle Components",
              SUB: [
                "Electric motors: types, operation, and efficiency",
                "Battery technologies: lithium-ion, solid-state, and future advancements",
                "Power electronics: inverters, converters, and motor controllers",
                "Energy storage and management systems.",
              ],
            },
            {
              name: "Charging Infrastructure and Standards ",
              SUB: [
                "Overview of electric vehicle charging infrastructure",
                "Charging standards: CHAdeMO, CCS, and Tesla Supercharger",
                "Exploring emerging wireless charging technologies",
                "Different types of charging stations: AC and DC charging",
              ],
            },
            {
              name: "Safety Considerations in EV Design",
              SUB: [
                "Electrical safety: high voltage systems and insulation requirements",
                "Battery safety: thermal management and protection systems",
                "Crash safety and structural integrity of electric vehicles",
                "Emergency response procedures for electric vehicle incidents",
              ],
            },
            {
              name: "Emerging Trends in EV Technology",
              SUB: [
                "Current advancements in electric vehicle technology",
                "Development of solid-state batteries and their potential impact",
                "Vehicle-to-Grid (V2G) integration and smart charging technologies",
                "Exploring the role of artificial intelligence and autonomous driving in electric vehicles",
              ],
            },
          ],
        },
        {
          name: "ELECTRIC VEHICLE SYSTEM ARCHITECTURE",
          topics: [
            {
              name: "Vehicle Dynamics and Control Systems in EV",
              SUB: [
                "Overview of vehicle dynamics and handling characteristics in Ev",
                "Electric vehicle stability control systems and traction control",
                "Regenerative braking and its impact on vehicle dynamics",
                "Drive modes and driving experience in electric vehicles",
              ],
            },
            {
              name: "Electric Motor Types and Characteristics",
              SUB: [
                "Induction motors, permanent magnet synchronous motors, and switched reluctance motors",
                "Motor characteristics: torque-speed curve, efficiency, and power density",
                "Selection criteria for electric motors in different EV applications",
                "Thermal management considerations for electric motors",
              ],
            },
            {
              name: "Power Electronics & Motor Control Strategies ",
              SUB: [
                "Power electronics components: inverters, converters, and DC-DC converters",
                "Motor control strategies: Field-Oriented Control (FOC), Direct Torque Control (DTC), and sensorless control",
              ],
            },
            {
              name: "BMS and Optimization Techniques",
              SUB: [
                "BMS: monitoring, balancing, and state-of-charge estimation",
                "Energy optimization algorithms and control strategies",
                "Maximizing range and efficiency through intelligent energy management",
              ],
            },
            {
              name: "Regenerative Braking & Energy Recovery Systems",
              SUB: [
                "Principles and benefits of regenerative braking in electric vehicles",
                "Energy recovery systems: supercapacitors, flywheels, and hydraulic systems",
                "Integration of regenerative braking into the vehicle's BMS",
              ],
            },
            {
              name: "V2G and Smart Grid Technologies ",
              SUB: [
                "Concept of Vehicle-to-Grid (V2G) and Vehicle-to-Home (V2H) integration",
                "Potential benefits and challenges of V2G technology",
                "Smart grid technologies and their role in enabling V2G integration",
              ],
            },
          ],
        },
        {
          name: "ELECTRIC VEHICLE DESIGN AND MANUFACTURING",
          topics: [
            {
              name: "EV Design Principles and Considerations ",
              SUB: [
                "Design considerations for electric vehicles: aerodynamics, weight reduction, and packaging",
                "Importance of vehicle efficiency and range optimization",
                "Battery placement and thermal management considerations",
                "Designing for crash safety and occupant protection",
              ],
            },
            {
              name: "Chassis and Suspension Systems for EV",
              SUB: [
                "Chassis design considerations for EVs: structural integrity & rigidity",
                "Suspension systems and their impact on ride comfort and handling",
                "Optimizing chassis and suspension for weight reduction & energy efficiency",
                "Integration of electric powertrain components into the vehicle structure",
              ],
            },
            {
              name: "Battery Integration and Thermal Management ",
              SUB: [
                "Battery pack design and integration into the vehicle",
                "Thermal management systems for battery cooling and heating",
                "Ensuring optimal battery performance, longevity, and safety",
                "Challenges and solutions for thermal management in EVs",
              ],
            },
            {
              name: "Manufacturing Processes for Electric Vehicles",
              SUB: [
                "Overview of manufacturing processes specific to EVs",
                "Lightweight materials and their use in EV manufacturing",
                "Assembly techniques and automation in EV production",
                "Quality control and assurance in EV manufacturing",
              ],
            },
            {
              name: "Testing, Validation, and Certification of EV",
              SUB: [
                "Testing protocols for EV : performance, safety, and emissions",
                "Validation processes for electric vehicle components and systems",
                "Compliance with industry standards and regulations",
                "Certification requirements for electric vehicles in different markets",
              ],
            },
            {
              name: "Emerging Trends EV - Design & Manufacturing ",
              SUB: [
                "Advancements in EV design and manufacturing technologies",
                "3D printing and additive manufacturing applications in EV production",
                "Sustainable manufacturing practices in the EV industry",
              ],
            },
          ],
        },
        {
          name: "ADVANCED ELECTRIC VEHICLE TECHNOLOGIES",
          topics: [
            {
              name: "Advanced Electric Propulsion Systems",
              SUB: [
                "Comparison between BEVs and FCEVs",
                "Pros and cons of different propulsion systems for specific applications",
                "Future trends and developments in electric propulsion",
              ],
            },
            {
              name: "Next-Generation Energy Storage Solutions",
              SUB: [
                "Advancements in battery technologies: solid-state batteries, lithium-air batteries, and beyond",
                "Exploring the potential of alternative energy storage solutions",
                "Challenges and opportunities in improving energy density and charging capabilities",
                "Impact of advanced energy storage on EV performance and range",
              ],
            },
            {
              name: "Charging Infrastructure and Fast Charging Technologies",
              SUB: [
                "Rapid charging technologies: high-power DC fast charging and ultra-fast charging",
                "Vehicle-to-Grid (V2G) and bidirectional charging capabilities",
                "Exploring advancements in wireless charging technologies",
              ],
            },
            {
              name: "Autonomous Driving and Electric Vehicles",
              SUB: [
                "Introduction to autonomous driving technologies and levels of automation",
                "Integration of autonomous driving features into electric vehicles",
                "Benefits and challenges of autonomous electric vehicles",
              ],
            },
            {
              name: "Connected Technologies & Intelligent Mobility",
              SUB: [
                "Role of connectivity and smart systems in electric vehicles",
                "Vehicle-to-Vehicle (V2V) and Vehicle-to-Infrastructure (V2I) communication",
                "Intelligent mobility solutions: ride-sharing, car-sharing, and mobility-as-a-service (MaaS)",
              ],
            },
          ],
        },
        {
          name: "EV PERFORMANCE AND FUTURE TRENDS",
          topics: [
            {
              name: "Electric Vehicle Performance Metrics",
              SUB: [
                "Key performance indicators for electric vehicles: acceleration, top speed, range, and efficiency",
                "Comparing EV performance with IC Engine vehicles",
                "Impact of battery capacity, motor power, and vehicle weight on performance",
              ],
            },
            {
              name: "Vehicle Dynamics and Handling in EV",
              SUB: [
                "Understanding the unique characteristics of EV dynamics",
                "Impact of battery placement on vehicle balance and handling",
                "Suspension tuning for optimal ride comfort and stability",
                "Design considerations for enhancing EV handling and performance ",
              ],
            },
            {
              name: "Energy Efficiency and Range Optimization",
              SUB: [
                "Factors influencing energy efficiency in electric vehicles",
                "Aerodynamics and its role in reducing energy consumption",
                "Efficient powertrain design and drivetrain optimization",
                "Strategies for maximizing range and addressing range anxiety",
              ],
            },
            {
              name: "Emerging Trends in EV Technology ",
              SUB: [
                "Exploring the latest advancements in EV technology",
                "Lightweight materials and their use in electric vehicle design",
                "Battery technology advancements and their impact on EV performance",
                "Integration of smart systems and connectivity in EVs",
              ],
            },
            {
              name: "Future Trends and Outlook for EV",
              SUB: [
                "Emerging trends in electric vehicle design, technology, and market adoption",
                "Government policies and incentives driving EV adoption",
                "Impact of electric vehicles on the energy grid and renewable energy integration",
                "Exploring the future of electric mobility and its potential implications",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "PERSONALITY DEVELOPMENT",
      thumbnail: "../../images/course.jpg",
      category: "PERSONAL DELVELOPMENT",
      slide: s3,
      order: 8,
      description:
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
        "In 40 hours sessions, students will get an overview to Develop a comprehensive understanding of personality theories and their implications for personal growth.students will get certificates from Mechnido.",
        "The Personality Development  Advanced Online Course is designed to provide individuals with an in-depth understanding of personality development while equipping them with the necessary skills and techniques to excel in job interviews.",
        "This course combines advanced concepts in personality development with practical job interview training to enhance personal and professional growth.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2FGuww3uxKDIz7ijtX0PYg%2Fcertificates%2Fcert.jpg?alt=media&token=d0563321-9f6e-4ed6-af2d-be14f2f7df49",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2000,
        },
      ],
      schedule: [
        {
          name: "PERSONALITY TRAITS AND ASSESSMENT",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Exploring Personality Assessment Tools",
              SUB: [
                "Introduction to common personality assessment tools and inventories ",
                "Understanding the purpose and applications of personality assessments",
                "Comparing different assessment tools and their strengths and limitations",
              ],
            },
            {
              name: "The Big Five Personality Traits",
              SUB: [
                "In-depth exploration of the Big Five personality traits and their sub-facets",
                "Understanding the characteristics and behavioral tendencies associated with each trait",
                "Assessing one's own personality traits using the Big Five model",
              ],
            },
            {
              name: "Interpreting Personality Assessment Results ",
              SUB: [
                "Techniques for interpreting personality assessment results accurately",
                "Analyzing and understanding the meaning of scores and profiles",
                "Identifying strengths, areas for development, and potential career preferences based on assessment results",
              ],
            },
            {
              name: "Self-Reflection and Personal Growth",
              SUB: [
                "Engaging in self-reflection exercises to gain insights into personal strengths and areas for growth",
                "Developing an action plan for leveraging strengths and addressing areas for improvement",
                "Sharing personal experiences and insights in a group discussion",
              ],
            },
          ],
        },
        {
          name: " EMOTIONAL INTELLIGENCE AND SELF-MANAGEMENT",
          topics: [
            {
              name: "Emotional Intelligence",
              SUB: [
                "Understanding the concept of emotional intelligence and its relevance in personal and professional settings",
                "Exploring the components of emotional intelligence: self-awareness, self-regulation, social awareness, relationship management",
                "Recognizing the benefits of developing emotional intelligence skills",
              ],
            },
            {
              name: "Developing Self-Awareness",
              SUB: [
                "Understanding the importance of self-awareness in emotional intelligence",
                "Reflecting on personal emotions, triggers, and patterns of behavior. Practicing mindfulness techniques for enhancing self-awareness",
              ],
            },
            {
              name: "Emotion Regulation and Stress Management",
              SUB: [
                "Techniques for managing and regulating emotions effectively",
                "Developing strategies to handle stress and pressure in a healthy manner",
                "Exploring coping mechanisms and relaxation techniques",
              ],
            },
            {
              name: "Building Empathy and Social Awareness",
              SUB: [
                "Introduction to prototyping techniques and materials",
                "Building low-fidelity and high-fidelity prototypes",
                "Conducting user testing and gathering feedback for refinement.",
              ],
            },
            {
              name: "Resilience and Self-Care ",
              SUB: [
                "Understanding the concept of resilience and its importance in personal and professional life",
                "Identifying strategies for building resilience and bouncing back from setbacks.",
              ],
            },
            {
              name: "Personal Growth and Action Planning",
              SUB: [
                "Reflecting on personal strengths and areas for development in emotional intelligence",
                "Setting goals for personal growth and developing an action plan",
                "Identifying opportunities to apply emotional intelligence skills in various areas of life",
              ],
            },
          ],
        },
        {
          name: "COMMUNICATION AND INTERPERSONAL SKILLS",
          topics: [
            {
              name: "Effective Communication Basics",
              SUB: [
                "Understanding the importance of effective communication in personal and professional contexts",
                "Exploring the components of effective communication: verbal, nonverbal, and listening skills",
                "Overcoming common communication barriers and challenges",
              ],
            },
            {
              name: "Active Listening & Empathetic Communication",
              SUB: [
                "Developing active listening skills to enhance understanding and empathy",
                "Practicing reflective listening techniques and paraphrasing",
                "Cultivating empathy in communication to build rapport and trust",
              ],
            },
            {
              name: "Nonverbal Communication & Body Language ",
              SUB: [
                "Understanding the impact of nonverbal communication on interpersonal interactions",
                "Interpreting and using body language effectively",
                "Developing awareness of personal nonverbal cues and their implications.",
              ],
            },
            {
              name: "Assertive Communication & Conflict Resolution",
              SUB: [
                "Exploring assertive communication techniques for expressing thoughts, feelings, and needs",
                "Managing conflicts constructively and seeking win-win solutions",
                "Practicing effective negotiation and compromise strategies",
              ],
            },
            {
              name: "Building Rapport & Positive Relationships",
              SUB: [
                "Strategies for building rapport and establishing connections with others",
                "Developing interpersonal skills to foster positive relationships",
                "Recognizing and adapting to different communication styles",
              ],
            },
          ],
        },
        {
          name: "JOB INTERVIEW PREPARATION",
          topics: [
            {
              name: "Understanding the Job Interview Process",
              SUB: [
                "Overview of different types of job interviews: behavioral, situational, panel, etc.",
                "Exploring the stages of the interview process: pre-interview, during the interview, and post-interview",
                "Understanding the expectations and objectives of interviewers",
              ],
            },
            {
              name: "Researching the Company and Position",
              SUB: [
                "Techniques for conducting thorough research on the company and the role",
                "Identifying key information to demonstrate knowledge and interest during the interview",
                "Understanding the company's values, culture, and industry trends",
              ],
            },
            {
              name: "Crafting a Strong Resume and Cover Letter",
              SUB: [
                "Optimizing the resume to highlight relevant skills and experiences",
                "Writing a compelling cover letter that aligns with the job requirements",
                "Tailoring the resume and cover letter for specific job applications",
              ],
            },
            {
              name: "Developing Effective Interview Responses",
              SUB: [
                "Identifying common interview questions and understanding their purpose",
                "Formulating concise and impactful responses using the STAR technique (Situation, Task, Action, Result). Showcasing relevant skills, accomplishments, and experiences during the interview",
              ],
            },
            {
              name: "Mock Interviews and Feedback ",
              SUB: [
                "Conducting mock interviews to simulate real interview scenarios",
                "Providing constructive feedback and guidance on interview performance",
                "Identifying strengths and areas for improvement",
              ],
            },
            {
              name: "Documentation Skills",
              SUB: [
                "Structuring Documents for Clarity",
                "Writing Concise and Clear Content",
                "Formatting and Visual Presentation",
                "Proofreading and Editing Techniques ",
              ],
            },
          ],
        },
        {
          name: "PERSONAL GROWTH AND CAREER DEVELOPMENT",
          topics: [
            {
              name: "Self-Assessment and Goal Setting ",
              SUB: [
                "Engaging in self-assessment exercises to identify personal values, interests, and strengths",
                "Setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals for personal and career development",
              ],
            },
            {
              name: "Exploring Career Paths and Opportunities",
              SUB: [
                "Researching and identifying potential career paths and industries of interest",
                "Understanding the current job market and emerging trends in different industries",
                "Exploring career development opportunities, such as mentorship programs, networking events, and professional associations",
              ],
            },
            {
              name: "Developing a Personal Brand",
              SUB: [
                "Understanding the concept of personal branding and its importance in career development",
                "Crafting a compelling personal brand statement and elevator pitch",
                "Utilizing online platforms and social media to showcase skills and expertise.",
              ],
            },
            {
              name: "Networking and Relationship Building",
              SUB: [
                "Strategies for building and nurturing professional relationships",
                "Exploring networking opportunities, both online and offline",
                "Practicing effective communication and networking techniques",
              ],
            },
            {
              name: "Creating a Personal Development Plan ",
              SUB: [
                "Synthesizing self-assessment results, career goals, and skill development plans into a personal development plan",
                "Identifying short-term and long-term actions to achieve personal and career objectives",
                "Setting milestones and regularly reviewing and updating the personal development plan",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "PRODUCT DESIGN & DEVELOPMENT",
      category: "PRODUCT DEVELOPMENT",
      thumbnail: "../../images/course.jpg",
      slide: s3,
      order: 9,
      description:
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts.",
        "In 60 hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "The Product Design and Development online course is designed to provide participants with a comprehensive understanding of the product design and development process. Throughout this 60-hours course, participants will learn the key principles, techniques, and strategies involved in creating successful products from concept to launch. Through a combination of theoretical lessons, case studies, and hands-on exercises, participants will develop the skills necessary to design, engineer, and bring innovative products to market.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2Fk3OeP7wFOwIDFHK6lab1%2Fcertificates%2Fcert.jpg?alt=media&token=3378be37-3210-4027-84ea-a5e1d3e2515a",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "INTRO TO PRODUCT DESIGN & DEVELOPMENT",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
                "Role of product design in achieving business objectives",
                "Overview of the product development lifecycle",
              ],
            },
            {
              name: "Understand - User Needs & Market Research",
              SUB: [
                "Identifying customer needs and preferences",
                "Conducting market research and analysis",
                "Using market insights to drive product development decisions",
              ],
            },
            {
              name: "Idea Generation and Creativity Techniques",
              SUB: [
                "Techniques for generating innovative product ideas",
                "Brainstorming and ideation sessions",
                "Leveraging design thinking principles for idea generation",
              ],
            },
            {
              name: "Concept Development and Evaluation",
              SUB: [
                "Translating ideas into viable product concepts",
                "Developing concept sketches and prototypes",
                "Methods for evaluating and selecting the most promising concepts",
              ],
            },
            {
              name: "Product Design Documentation & Communication",
              SUB: [
                "Creating effective product design documents and specifications",
                "Importance of clear communication in product development teams",
                "Collaborating with cross-functional teams for design success",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world product design and development case studies",
                "Examining successful product launches and their design strategies",
                "Learning from failures and lessons learned in product development",
              ],
            },
          ],
        },
        {
          name: "PRODUCT REQUIREMENTS AND CONCEPT DEVELOPMENT",
          topics: [
            {
              name: "Define Product Requirement & Specification",
              SUB: [
                "Importance of clear and specific product requirements",
                "Techniques for gathering customer needs and preferences",
                "Prioritizing requirements based on importance and feasibility",
              ],
            },
            {
              name: "Market and Competitive Analysis",
              SUB: [
                "Conducting a thorough analysis of the market landscape",
                "Identifying key competitors and their product offerings",
                "Analyzing market trends and customer preferences",
              ],
            },
            {
              name: "Concept Generation Techniques",
              SUB: [
                "Divergent thinking and ideation methods",
                "Brainstorming variations and alternatives for product concepts",
                "Stimulating creativity and innovation in concept development",
              ],
            },
            {
              name: "Concept Evaluation and Selection",
              SUB: [
                "Establishing criteria for evaluating product concepts",
                "Conducting concept assessments using qualitative and quantitative methods",
                "Selecting the most promising concepts for further development",
              ],
            },
            {
              name: "Prototyping and Iteration",
              SUB: [
                "Introduction to prototyping techniques and materials",
                "Building low-fidelity and high-fidelity prototypes",
                "Conducting user testing and gathering feedback for refinement.",
              ],
            },
            {
              name: "Considerations for Feasibility and Viability",
              SUB: [
                "Assessing technical feasibility and manufacturability of concepts",
                "Evaluating the economic viability of product concepts",
                "Balancing customer needs, business objectives, and technical constraints",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world examples of successful product requirements and concept development",
                "Examining challenges and lessons learned in concept selection",
                "Learning from both successful and unsuccessful product launches",
              ],
            },
          ],
        },
        {
          name: "PRODUCT DESIGN AND ENGINEERING",
          topics: [
            {
              name: "Effective Communication Basics",
              SUB: [
                "Understanding the importance of effective communication in personal and professional contexts",
                "Exploring the components of effective communication: verbal, nonverbal, and listening skills",
                "Overcoming common communication barriers and challenges",
              ],
            },
            {
              name: "Principles of Product Design and Engineering",
              SUB: [
                "Understanding the role of design in product development",
                "Key considerations for effective product design",
                "Balancing aesthetics, functionality, and user experience",
              ],
            },
            {
              name: "Design for Manufacturing and Assembly",
              SUB: [
                "Overview of DFMA principles and methodologies",
                "Designing products for efficient and cost-effective manufacturing",
                "Streamlining assembly processes and reducing production time",
              ],
            },
            {
              name: "CAD Tools and Software",
              SUB: [
                "Introduction to CAD tools and their applications in product design",
                "Hands-on demonstration of CAD software functionalities",
                "Creating 2D and 3D product designs using CAD tools",
              ],
            },
            {
              name: "Materials Selection and Considerations",
              SUB: [
                "Understanding different types of materials and their properties",
                "Factors to consider in materials selection for product design",
                "Balancing cost, performance, and sustainability in material choices",
              ],
            },
            {
              name: "Design Verification and Validation",
              SUB: [
                "Importance of design verification and validation in product development",
                "Techniques for testing and evaluating product designs",
                "Iterative refinement based on testing results and user feedback",
              ],
            },
            {
              name: "Ergonomics and Human Factors in Design",
              SUB: [
                "Designing products that optimize user comfort and usability",
                "Considerations for ergonomics & human factors in product design",
                "User-centered design principles and methodologies",
              ],
            },
            {
              name: "Design for Sustainability",
              SUB: [
                "Incorporating sustainable design principles and practices",
                "Minimizing environmental impact through material choices and lifecycle considerations.",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world product design and engineering case studies",
                "Examining successful product designs and their impact on market success.",
              ],
            },
          ],
        },
        {
          name: "MANUFACTURING AND PRODUCTION PLANNING",
          topics: [
            {
              name: "Manufacturing Processes and Technologies",
              SUB: [
                "Introduction to various manufacturing processes (e.g., machining, molding, 3D printing)",
                "Understanding the advantages and limitations of different manufacturing technologies. ",
              ],
            },
            {
              name: "Designing for Efficient Production",
              SUB: [
                "Design considerations for manufacturability and assembly",
                "Reducing complexity and optimizing product designs for cost-effective production, Collaborating with manufacturing engineers for design improvements",
              ],
            },
            {
              name: "Production Planning and Scheduling",
              SUB: [
                "Introduction to production planning and scheduling methodologies",
                "Creating production plans based on demand forecasts and capacity constraints",
                "Utilizing tools and techniques for efficient production scheduling",
              ],
            },
            {
              name: "QC and QA in Manufacturing",
              SUB: [
                "Implementing quality control measures throughout the manufacturing process",
                "SPC techniques for monitoring and improving product quality",
                "Ensuring compliance with quality standards and regulations",
              ],
            },
            {
              name: "SCM in Product Development",
              SUB: [
                "Understanding the role of SCM in product development",
                "Supplier selection and management for timely and high-quality material procurement",
                "Logistics and inventory management considerations in the SCM",
              ],
            },
            {
              name: "Lean Manufacturing Principles and Practices",
              SUB: [
                "Introduction to lean manufacturing principles",
                "Identifying and eliminating waste in the manufacturing process",
                "Implementing continuous improvement initiatives",
              ],
            },
            {
              name: "Cost Management and Value Engineering",
              SUB: [
                "Techniques for managing costs throughout the manufacturing process",
                "Value engineering methodologies for optimizing product costs and performance",
                "Balancing cost considerations with quality and customer value",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Analyzing real-world manufacturing and production case studies",
                "Examining successful product launches and their manufacturing strategies",
              ],
            },
          ],
        },
        {
          name: "LAUNCHING AND COMMERCIALIZING THE PRODUCT",
          topics: [
            {
              name: "Intro-Product Launch and Commercialization",
              SUB: [
                "Importance of a well-planned and executed product launch",
                "Key considerations for successful commercialization",
                "Overview of the product lifecycle stages",
              ],
            },
            {
              name: "Marketing Strategies and Branding",
              SUB: [
                "Developing effective marketing strategies for product promotion",
                "Defining target markets and customer segments",
                "Branding strategies for creating a strong brand identity",
              ],
            },
            {
              name: "Sales and Distribution Channels",
              SUB: [
                "Identifying appropriate sales and distribution channels",
                "Selecting and managing retail partners, distributors, and e-commerce platforms",
                "Developing effective channel strategies for product reach",
              ],
            },
            {
              name: "Pricing and Revenue Management",
              SUB: [
                "Pricing strategies and considerations",
                "Pricing models and revenue management techniques",
                "Balancing profitability with market competitiveness",
              ],
            },
            {
              name: "Customer Support and After-sales Service",
              SUB: [
                "Establishing effective customer support channels",
                "Providing excellent after-sales service and support",
                "Handling customer inquiries, feedback, and complaints",
              ],
            },
            {
              name: "Gathering and Utilizing Customer Feedback",
              SUB: [
                "Methods for collecting customer feedback and insights",
                "Analyzing customer data for product improvements",
                "Incorporating customer feedback into product updates and iterations",
              ],
            },
            {
              name: "Product Lifecycle Management",
              SUB: [
                "Understanding the different stages of the product lifecycle",
                "Developing strategies for product extensions, upgrades, and end-of-life management",
                "Assessing market trends and planning for product obsolescence",
              ],
            },
            {
              name: "Intellectual Property & Legal Considerations",
              SUB: [
                "Protecting intellectual property rights during product launch",
                "Ensuring compliance with regulations and standards",
                "Navigating legal considerations in the commercialization process",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: "GD&T",
      thumbnail: "../../images/course.jpg",
      category: "DESIGN ELEMENTS",
      slide: s3,
      order: 10,
      description:
        "This Program offers students to get clear insights of  GD&T concepts by Practical training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of  GD&T concepts by Practical training which will be handled by Mechnido's faculty and industrial experts.",
        "In 20+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "The Advanced GD&T (Geometric Dimensioning and Tolerancing) Training online course is designed to provide participants with an in-depth understanding and application of advanced concepts and techniques related to GD&T. The course aims to enhance participants' skills in interpreting and applying GD&T principles to engineering drawings and manufacturing processes.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/courses%2FMXrd9ZIr70JJbqHvDiLt%2Fcertificates%2Fcert.jpg?alt=media&token=d2a3be38-0236-41ce-a13b-9e94d24116ea",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 1500,
        },
      ],
      schedule: [
        {
          name: "INTRO TO GD&T PRINCIPLES & SYMBOLS",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Introduction to GD&T",
              SUB: [
                "What is GD&T and why is it important in engineering and manufacturing?",
                "Advantages of using GD&T over traditional dimensioning and tolerancing methods",
                "Overview of the GD&T system and its components",
              ],
            },
            {
              name: "GD&T Symbols and Feature Control Frames",
              SUB: [
                "Understanding the basic GD&T symbols and their meanings",
                "Introduction to feature control frames and their components",
                "Interpreting GD&T callouts on engineering drawings",
              ],
            },
            {
              name: "Datums and Datum Reference Frames",
              SUB: [
                "Definition and significance of datums in GD&T",
                "Understanding datum feature symbols and their usage",
                "Establishing datum reference frames for part inspection and assembly",
              ],
            },
            {
              name: "Tolerance Zones and Feature Control",
              SUB: [
                "Creating effective product design documents and specifications",
                "Importance of clear communication in product development teams",
                "Collaborating with cross-functional teams for design success",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Introduction to tolerance zones and their representation in GD&T",
                "Exploring different types of tolerance zones: cylindrical, parallel, flatness, etc.",
                "Interpreting feature control frames and understanding the permissible variations.",
              ],
            },
          ],
        },
        {
          name: "ADVANCED GD&T PRINCIPLES & APPLICATIONS ",
          topics: [
            {
              name: "Advanced Geometric Controls",
              SUB: [
                "Exploring advanced geometric controls: circularity, cylindricity, profile of a surface, etc.",
                "Understanding the interpretation and application of advanced geometric controls",
              ],
            },
            {
              name: "Composite Tolerancing",
              SUB: [
                "Introduction to composite tolerancing and its advantages",
                "Understanding composite position, profile, and concentricity tolerances",
                "Interpreting composite tolerances in engineering drawings",
              ],
            },
            {
              name: "Positional Tolerancing",
              SUB: [
                "Importance of positional tolerancing in GD&T",
                "Defining positional tolerances and their applications",
                "Interpreting positional tolerances in engineering drawings",
              ],
            },
            {
              name: "GD&T for Functional Requirements ",
              SUB: [
                "Exploring the use of GD&T to specify functional requirements and ensure proper assembly, mating, and interchangeability of components",
                "Discussing the application of GD&T in critical functional features, such as hole patterns, shaft fits, and assembly interfaces",
              ],
            },
            {
              name: "Case Studies and Examples ",
              SUB: [
                "Presenting real-world case studies that demonstrate the application of advanced GD&T principles in various industries",
                "Analyzing examples to illustrate the challenges, solutions, and benefits of incorporating GD&T in engineering design and manufacturing processes.",
              ],
            },
          ],
        },
        {
          name: "GD&T INSPECTION & MEASUREMENT TECHNIQUES ",
          topics: [
            {
              name: "Inspection Tools for GD&T",
              SUB: [
                "Overview of inspection tools used in GD&T, such as CMMs, height gauges, and micrometers",
                "Understanding the capabilities and limitations of different inspection tools",
                "Selecting the appropriate inspection tools for specific GD&T requirements",
              ],
            },
            {
              name: "Measurement Instruments for GD&T",
              SUB: [
                "Introduction to measurement instruments used in GD&T, such as calipers, dial indicators, and coordinate measuring machines (CMMs)",
                "Understanding the measurement techniques and best practices for GD&T verification",
                "Calibration and maintenance of measurement instruments",
              ],
            },
            {
              name: "GD&T Inspection & Verification Techniques",
              SUB: [
                "Step-by-step process for inspecting and verifying GD&T requirements",
                "Common challenges and considerations in GD&T inspection",
                "Practical tips and techniques for ensuring accurate GD&T measurements",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Presenting real-world case studies that highlight the challenges and solutions in GD&T inspection",
                "Analyzing examples to illustrate the proper application of measurement techniques and interpretation of inspection results",
              ],
            },
          ],
        },
        {
          name: "GD&T APPLICATIONS AND INTERPRETATION",
          topics: [
            {
              name: "GD&T Applications in Different Industries",
              SUB: [
                "Exploring the application of GD&T in various industries, such as automotive, aerospace, and manufacturing",
                "Industry-specific GD&T standards and requirements",
                "Case studies of GD&T implementation in real-world engineering projects",
              ],
            },
            {
              name: "GD&T Datum Systems & Coordinate Reference",
              SUB: [
                "Understanding the concept of datum systems and their importance in GD&T",
                "Explanation of datum feature selection, datum reference frames, and the use of datum targets",
                "Interpretation of geometric tolerances based on the established datum system",
              ],
            },
            {
              name: "GD&T in Assembly and Mating",
              SUB: [
                "Exploring the use of GD&T to ensure proper assembly, mating, and interchangeability of components",
                "Discussing the application of GD&T in assembly features, positional tolerancing, and datum references",
              ],
            },
            {
              name: "Case Studies and Practical Examples",
              SUB: [
                "Presenting real-world case studies that illustrate the effective application and interpretation of GD&T in practical scenarios",
                "Analyzing examples to highlight the challenges, solutions, and benefits of incorporating GD&T in design, manufacturing, and inspection processes",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 11,
      name: "3D CAD MODELING",
      thumbnail: "../../images/course.jpg",
      category: "DESIGN ELEMENTS",
      slide: s3,
      order: 11,
      description:
        "This Program offers students to get clear insights of  3D CAD Modeling concepts by Practical training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of  3D CAD Modeling concepts by Practical training which will be handled by Mechnido's faculty and industrial experts.",
        "In 50+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "The Advanced 3D CAD Modeling course is designed to take your CAD skills to the next level and empower you with advanced techniques and strategies for creating complex 3D models. This comprehensive online course focuses on enhancing your proficiency in CAD software and equipping you with the knowledge and skills needed to tackle challenging modeling projects.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/courses%2FsE2QV4XJjyCVPWjA8XNs%2Fcertificates%2Fcert.jpg?alt=media&token=3b067e65-919d-4e7c-854e-a6f71c7a297a",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "INTRO TO 3D CAD MODELING PRINCIPLES",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Introduction to 3D CAD Modeling",
              SUB: [
                "Overview of 3D CAD modeling and its significance in various industries",
                "Explanation of the advantages and benefits of using CAD software for design and visualization",
              ],
            },
            {
              name: "Understanding CAD Software",
              SUB: [
                "Familiarization with the user interface and tools of the chosen CAD software",
                "Navigating the workspace, customizing preferences, and accessing essential features",
              ],
            },
            {
              name: "2D Sketching and Constraints",
              SUB: [
                "Introduction to 2D sketching techniques, including lines, arcs, circles, and splines",
                "Applying sketch constraints to control the dimensions and relationships of sketch entities",
              ],
            },
            {
              name: "3D Modeling Basics",
              SUB: [
                "Creating 3D features such as extrusions, revolves, and sweeps based on 2D sketches",
                "Understanding the concept of parametric modeling and its role in maintaining design intent",
              ],
            },
            {
              name: "Advanced 3D Modeling Techniques ",
              SUB: [
                "Exploring advanced modeling tools and operations, such as fillets, chamfers, and patterns Applying techniques for creating complex geometry, including lofts, sweeps, and blends",
              ],
            },
            {
              name: "Assemblies and Component Relationships ",
              SUB: [
                "Introduction to assemblies and their role in representing multiple components",
                "Establishing relationships and constraints between components to define their positions and movements",
              ],
            },
            {
              name: "Visualization and Presentation",
              SUB: [
                "Utilizing visualization tools to enhance the appearance of 3D models",
                "Creating rendered images and realistic simulations for presentation purposes",
              ],
            },
          ],
        },
        {
          name: "ADVANCED 3D CAD MODELING TECHNIQUES ",
          topics: [
            {
              name: "Advanced Sketching Techniques",
              SUB: [
                "Exploring advanced sketching tools and features, such as splines, ellipses, and advanced sketch constraints",
                "Applying sketch patterns and guide curves to create complex sketch geometry",
              ],
            },
            {
              name: "Advanced 3D Feature Creation",
              SUB: [
                "Delving into advanced feature creation techniques, including sweeps along guides, variable fillets, and draft angles",
                "Exploring advanced surfacing tools and commands for creating complex surface features",
              ],
            },
            {
              name: "Complex Geometry Creation ",
              SUB: [
                "Applying techniques for creating organic shapes, freeform surfaces, and complex curvature",
                "Exploring sculpting and deformation tools for manipulating geometry",
              ],
            },
            {
              name: "Assembly Design and Management ",
              SUB: [
                "Advanced assembly modeling techniques, including top-down and bottom-up approaches",
                "Utilizing advanced assembly features, such as mates, flexible components, and configurations",
              ],
            },
            {
              name: "Advanced Parametric Modeling",
              SUB: [
                "Exploring advanced parametric modeling techniques, including equations, design tables, and configurations",
                "Applying design automation techniques to improve efficiency and productivity",
              ],
            },
            {
              name: "Design Optimization and Analysis ",
              SUB: [
                "Introduction to design optimization techniques using CAD software",
                "Utilizing simulation and analysis tools to evaluate and validate designs",
              ],
            },
          ],
        },
        {
          name: "PARAMETRIC DESIGN AND DESIGN AUTOMATION",
          topics: [
            {
              name: "Introduction to Parametric Design ",
              SUB: [
                "Understanding the principles and benefits of parametric modeling in CAD",
                "Exploring the concept of design intent and how it drives parametric modeling",
              ],
            },
            {
              name: "Advanced Parametric Modeling Techniques",
              SUB: [
                "Exploring advanced dimensioning and constraints to control and modify models",
                "Applying equations, variables, and global parameters to create dynamic models",
              ],
            },
            {
              name: "Design Automation Basics",
              SUB: [
                "Introduction to design automation and its advantages in repetitive design tasks",
                "Understanding the fundamentals of creating and managing design automation features",
              ],
            },
            {
              name: "Creating Design Tables",
              SUB: [
                "Utilizing design tables to automate changes in model dimensions and configurations",
                "Exploring advanced techniques for creating and managing design tables effectively.",
              ],
            },
            {
              name: "Configurations and Variants",
              SUB: [
                "Creating and managing multiple design configurations within a single model",
                "Applying configurations and variants to streamline the design process",
              ],
            },
            {
              name: "Design Automation with Macros",
              SUB: [
                "Introduction to macros and their role in automating repetitive tasks",
                "Building and executing macros for common design operations",
              ],
            },
          ],
        },
        {
          name: "ADVANCED CAD MODELING ANALYSIS AND SIMULATION",
          topics: [
            {
              name: "Intro to CAD Analysis and Simulation",
              SUB: [
                "Understanding the importance of analysis and simulation in the design process",
                "Overview of different types of analysis and simulation techniques available in CAD software",
              ],
            },
            {
              name: "Structural Analysis ",
              SUB: [
                "Conducting static and dynamic structural analysis on 3D models",
                "Understanding stress analysis, deformation analysis, and factor of safety calculations",
              ],
            },
            {
              name: "Thermal Analysis",
              SUB: [
                "Simulating heat transfer and thermal behavior of 3D models",
                "Analyzing temperature distribution, heat flow, and thermal stress",
              ],
            },
            {
              name: "Fluid Flow Analysis",
              SUB: [
                "Introduction to computational fluid dynamics (CFD) analysis",
                "Analyzing fluid flow patterns, pressure distribution, and velocity profiles",
              ],
            },
            {
              name: "Motion Analysis",
              SUB: [
                "Simulating and analyzing the motion of assemblies and mechanisms",
                "Exploring kinematics, dynamics, and collision detection",
              ],
            },
            {
              name: "Optimization and Design Validation",
              SUB: [
                "Utilizing optimization tools to improve design performance and efficiency",
                "Validating design changes through analysis iterations",
              ],
            },
          ],
        },
        {
          name: "ADVANCED CAD MODELING VISUALIZATION & DOCUMENTATION",
          topics: [
            {
              name: "Advanced Visualization Techniques ",
              SUB: [
                "Understanding the importance of visualization in communicating design intent",
                "Overview of advanced visualization techniques available in CAD software",
              ],
            },
            {
              name: "Material and Texture Application ",
              SUB: [
                "Applying realistic materials and textures to 3D models for enhanced visualization",
                "Exploring advanced material properties and texture mapping techniques",
              ],
            },
            {
              name: "Lighting and Rendering ",
              SUB: [
                "Setting up and controlling lighting conditions for realistic renderings",
                "Exploring rendering techniques and settings to achieve high-quality visual outputs",
              ],
            },
            {
              name: "Exploded Views and Sectioning ",
              SUB: [
                "Creating exploded views to showcase assembly sequences and part relationships",
                "Utilizing sectioning techniques to highlight internal components and features",
              ],
            },
            {
              name: "Technical Documentation & 2D Drawing Generation",
              SUB: [
                "Generating comprehensive technical documentation, including assembly drawings and part drawings",
                "Utilizing dimensioning, annotations, and symbols to communicate design specifications",
              ],
            },
            {
              name: "Design Presentation and Collaboration",
              SUB: [
                "Preparing design presentations for effective communication with stakeholders",
                "Exploring collaborative features and file sharing options for design review and feedback",
              ],
            },
          ],
        },
      ],
    },

    {
      id: 12,
      name: "CSS MASTERCLASS ",
      thumbnail: "../../images/course.jpg",
      slide: s3,
      order: 12,
      category: "SOFTWARE", 
      description:
        "This comprehensive course is designed to take you on a journey from understanding the basics of CSS to mastering advanced techniques and best practices",
      description_L: [
        "This comprehensive course is designed to take you on a journey from understanding the basics of CSS to mastering advanced techniques and best practices",
        "Whether you're a beginner looking to build a strong foundation or an experienced web developer seeking to level up your CSS skills, this course is tailored to meet your needs.",
        "Your CSS mastery will open doors to exciting opportunities in web development and design",
        "This Program offers students to get clear insights of CSS by Practical training which will be handled by Mechnido's faculty and industrial experts.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/courses%2Fp27VFrEl2726xBbjQdxJ%2Fcertificates%2Fcert.jpg?alt=media&token=6c5d7ab9-4b3b-407a-ac90-8b1f14f020df",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria. ",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "INTRO TO CSS AND BASIC STYLING",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Introduction to CSS",
              SUB: [
                "Understanding the role & importance of CSS in web development",
                "The separation of concerns: HTML for structure, CSS for styling",
              ],
            },
            {
              name: "Inline CSS and Internal CSS",
              SUB: [
                "Adding inline styles directly to HTML elements",
                "Styling individual web pages using internal CSS",
              ],
            },
            {
              name: "External CSS",
              SUB: [
                "Creating separate CSS files for better code organization",
                "Linking external CSS files to HTML documents",
              ],
            },
            {
              name: "Introduction to CSS",
              SUB: [
                "Understanding the role & importance of CSS in web development",
                "The separation of concerns: HTML for structure, CSS for styling",
              ],
            },
            {
              name: "CSS Comments",
              SUB: [
                "Using comments to document your CSS code and improve code readability",
              ],
            },
            {
              name: "CSS Properties",
              SUB: [
                "Introduction to various CSS properties for styling elements",
                "Changing text color, background color, font size, etc.",
              ],
            },
            {
              name: "Styling Backgrounds",
              SUB: [
                "Applying background colors and images to elements",
                " Using CSS gradients for visually appealing backgrounds",
              ],
            },
            {
              name: "CSS Border",
              SUB: [
                "Adding borders to elements with different styles, widths, and colors",
              ],
            },
            {
              name: "CSS Display and Float",
              SUB: [
                "Understanding the display property and its values (block, inline, inline-block)",
                "Using the float property for layout and alignment",
              ],
            },
          ],
        },
        {
          name: "TYPOGRAPHY AND LAYOUT CONTROL",
          topics: [
            {
              name: "CSS Font",
              SUB: [
                "Understanding font families, weights, and styles",
                "Applying custom fonts using @font-face",
              ],
            },
            {
              name: "CSS Line Height",
              SUB: ["Controlling line spacing for better readability"],
            },
            {
              name: "CSS Margin and Padding",
              SUB: [
                "Creating space around elements using margin",
                "Adding space within elements using padding",
              ],
            },
            {
              name: "CSS Opacity and Visibility",
              SUB: [
                "Making elements transparent with opacity",
                "Controlling element visibility with visibility property",
              ],
            },
            {
              name: "CSS Overflow",
              SUB: ["Handling overflow content within elements"],
            },
            {
              name: "CSS Position",
              SUB: [
                "Understanding the position property and its values (relative, absolute, fixed, static)",
                "Creating layouts with positioned elements",
              ],
            },
            {
              name: "CSS Vertical Align",
              SUB: ["Aligning elements vertically within their containers"],
            },
            {
              name: "CSS White Space",
              SUB: ["Managing white space and controlling text wrapping"],
            },
            {
              name: "CSS Width",
              SUB: ["Specifying width for elements and containers"],
            },
          ],
        },
        {
          name: "ADVANCED STYLING TECHNIQUES",
          topics: [
            {
              name: "Working with Counters",
              SUB: [
                "Utilizing CSS counters for automatic numbering and list styling",
              ],
            },
            {
              name: "CSS Animations",
              SUB: [
                "Understanding keyframes and animation properties",
                "Creating smooth animations with CSS",
              ],
            },
            {
              name: "CSS Transitions",
              SUB: [
                "Implementing transitions for smooth element changes",
                "Transitioning properties like color, size, and position",
              ],
            },
            {
              name: "Adding Tooltips with CSS",
              SUB: [
                "Creating tooltip elements using CSS",
                "Styling and positioning tooltips for user interaction",
              ],
            },
            {
              name: "Tooltip Animation",
              SUB: [
                "Applying animations to tooltips for a visually engaging experience",
              ],
            },
            {
              name: "Creating CSS Arrows",
              SUB: ["Using CSS techniques to add arrow elements to designs"],
            },
            {
              name: "CSS Flexbox",
              SUB: [
                "Understanding the flex container and flex item model",
                "Building flexible and responsive layouts with Flexbox",
              ],
            },
            {
              name: "Implementing @media Queries",
              SUB: [
                "Building responsive designs with media queries",
                "Adapting layouts for different screen sizes",
              ],
            },
            {
              name: "Enhancing User Interface with CSS",
              SUB: [
                "Styling form elements and customizing checkboxes and radio buttons",
                "Creating interactive buttons and hover effects",
              ],
            },
          ],
        },
        {
          name: "3D, AURAL, PAGE LAYOUT AND TABLES",
          topics: [
            {
              name: "CSS 3D Transforms",
              SUB: [
                "Understanding the 3D space in CSS transforms",
                "Applying 3D effects like rotation, perspective, and scaling",
              ],
            },
            {
              name: "2D Transforms",
              SUB: [
                "Using CSS transforms for rotation, scaling, and skewing",
                "Creating 2D effects with CSS",
              ],
            },
            {
              name: "CSS Aural Media",
              SUB: [
                "Implementing CSS for speech synthesis and sound",
                "Adding sound effects and audio to web pages",
              ],
            },
            {
              name: "Page Layout with CSS",
              SUB: [
                "Reviewing CSS-based layouts for web pages",
                "Creating fixed, fluid, and responsive layouts",
              ],
            },
            {
              name: "CSS Pagination",
              SUB: ["Building pagination for long content and articles"],
            },
            {
              name: "CSS Table Styling",
              SUB: [
                "Styling HTML tables with CSS for better presentation",
                "Customizing table elements, headers, and cells",
              ],
            },
            {
              name: "CSS Layout for Multi-Column Content",
              SUB: ["Creating multi-column layouts with CSS"],
            },
          ],
        },
        {
          name: "PRACTICES AND INTERVIEW PREPARATION",
          topics: [
            {
              name: "Hands-On Exercises",
              SUB: [
                "Engaging in practical CSS exercises to reinforce concepts learned in previous sessions",
                "Creating real-world scenarios to apply CSS techniques to different web page elements",
                "Reviewing solutions and discussing best practices",
              ],
            },
            {
              name: "Interview Preparation",
              SUB: [
                "Reviewing common CSS interview questions and potential answers",
                "Discussing tips and strategies for effectively answering interview questions",
                "Preparing for technical and non-technical aspects of interviews",
              ],
            },
          ],
        },
      ],
    },

    {
      id: 13,
      name: "AUTO-CAD BOOTCAMP",
      thumbnail: "../../images/course.jpg",
      slide: s3,
      order: 13,
      category: "SOFTWARE",
      description:
        "AUTO-CAD Course is a well-structured and in-depth program designed to provide participants with a comprehensive understanding of AutoCAD, a leading software for computer-aided design and drafting.",
      description_L: [
        "This Program offers students to get clear insights of  AUTOCAD Software by Practical training which will be handled by Mechnido's faculty and industrial experts.",
        "In 60+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "AUTO-CAD Course is a well-structured and in-depth program designed to provide participants with a comprehensive understanding of AutoCAD, a leading software for computer-aided design and drafting.",
        "This course is divided into three modules, each catering to participants with different levels of experience: Beginner, Intermediate, and Advanced.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/courses%2FWQr8ckDkU1WtOt5Vtnxl%2Fcertificates%2Fcert.jpg?alt=media&token=8b0c14ae-7155-4a85-908f-64d6c28fac5d",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria. ",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "BEGINNER LEVEL",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Introduction to AUTOCAD",
              SUB: [
                "Understanding the purpose and applications of AutoCAD",
                "Exploring the interface and navigation tools",
              ],
            },
            {
              name: "Basic Drawing Commands",
              SUB: [
                "Line, Circle, Arc, Rectangle, and other basic shape commands",
                "Using coordinate systems to draw accurately",
              ],
            },
            {
              name: "Editing Tools",
              SUB: [
                "Modify, Move, Copy, Rotate, Scale, and Mirror commands",
                "Erase, Trim, and Extend tools for editing drawings",
              ],
            },
            {
              name: "Object Properties",
              SUB: [
                "Understanding and manipulating object properties like color, layer, and linetype",
                "Using object selection methods",
              ],
            },
            {
              name: "Precision Drawing",
              SUB: [
                "Snapping tools (Endpoint, Midpoint, Intersection, etc.) for precise drawing & Using Polar and Object Tracking",
              ],
            },
            {
              name: "Layers and Linetypes",
              SUB: [
                "Working with layers to organize drawings effectively",
                "Creating and managing custom linetypes",
              ],
            },
            {
              name: "Annotating Drawings",
              SUB: [
                "Adding text with the Text and Multiline Text commands",
                "Dimensioning using Dimension and Dimension Style tools",
              ],
            },
            {
              name: "Blocks and References",
              SUB: [
                "Creating and inserting blocks for reusable content",
                "Using external references (Xrefs) to link drawings.",
              ],
            },
            {
              name: "Hatching and Gradients",
              SUB: [
                "Applying hatches and gradients to add context and depth to drawings",
                "Editing and managing hatch patterns",
              ],
            },
            {
              name: "Layouts and Printing",
              SUB: [
                "Setting up layouts for plotting and printing",
                "Configuring plot styles and page setups.",
              ],
            },
          ],
        },
        {
          name: "INTERMEDIATE LEVEL",
          topics: [
            {
              name: "Advanced Editing Commands",
              SUB: [
                "Exploring more editing tools like Offset, Fillet, Chamfer, and Blend",
                "Understanding the use of grips for quick editing",
              ],
            },
            {
              name: "Working with Advanced Object Types",
              SUB: [
                "Using Polyline and Spline for complex shapes and curves",
                "Editing and converting between different object types",
              ],
            },
            {
              name: "Mastering Layers and Layer Properties",
              SUB: [
                "Advanced layer management and organization",
                "Layer states and layer properties overrides",
              ],
            },
            {
              name: "Advanced Dimensioning",
              SUB: [
                "Dimension styles and customizing dimension appearance",
                "Dimensioning techniques for complex drawings",
              ],
            },
            {
              name: "Advanced Block and Attribute Management",
              SUB: [
                "Creating dynamic blocks with custom properties and actions",
                "Using attributes to add information to blocks",
              ],
            },
            {
              name: "External References (Xrefs)",
              SUB: [
                "Advanced techniques for working with Xrefs",
                "Xref overlays and clip options",
              ],
            },
            {
              name: "Advanced Layouts and Annotation Scaling",
              SUB: [
                "Working with multiple viewports in layouts",
                "Implementing annotation scaling for different viewport scales",
              ],
            },
            {
              name: "Isometric Drawing",
              SUB: [
                "Setting up and using isometric snap and isometric grid",
                "Drawing and editing in isometric view",
              ],
            },
            {
              name: "Introduction to 3D Modeling Concepts",
              SUB: [
                "Understanding the 3D workspace and viewing tools",
                "Introduction to 3D solid and surface modeling",
              ],
            },
            {
              name: "3D Modeling in AutoCAD",
              SUB: [
                "Creating basic 3D shapes (extrude, revolve, loft, sweep, etc.)",
                "Editing 3D objects using grips and gizmos",
              ],
            },
            {
              name: "Working with 3D Surfaces and Meshes",
              SUB: [
                "Creating and editing 3D surfaces",
                "Importing and modifying mesh models",
              ],
            },
            {
              name: "Applying Materials and Textures",
              SUB: [
                "Assigning materials to 3D objects for realistic rendering",
                "Applying textures and mapping",
              ],
            },
            {
              name: "Lights and Rendering in 3D",
              SUB: [
                "Adding light sources to the 3D scene",
                "Basic rendering settings and producing rendered images",
              ],
            },
          ],
        },
        {
          name: "ADVANCED LEVEL",
          topics: [
            {
              name: "Advanced 3D Editing Tools",
              SUB: [
                "Working with UCS (User Coor for complex 3D editing",
                "Advanced editing commands for 3D objects",
              ],
            },
            {
              name: "3D Mesh Modeling",
              SUB: [
                "Creating and editing 3D mesh models",
                "Converting mesh models to 3D solids or surfaces",
              ],
            },
            {
              name: "Navigating the 3D Workspace",
              SUB: [
                "Understanding 3D views and using the ViewCube",
                "Working with the SteeringWheels tool",
              ],
            },
            {
              name: "Advanced Rendering Techniques",
              SUB: [
                "Fine-tuning rendering settings for high-quality output",
                "Using environment and background settings for better realism",
              ],
            },
            {
              name: "Advanced 3D Modeling Techniques",
              SUB: [
                "Lofting between splines and faces for complex shapes",
                "Advanced use of Boolean operations (Union, Subtract, Intersect)",
              ],
            },
            {
              name: "Parametric Constraints in 3D",
              SUB: [
                "Applying geometric and dimensional constraints to 3D models",
                "Creating fully constrained 3D models",
              ],
            },
            {
              name: "Working with Point Clouds",
              SUB: [
                "Importing and managing point cloud data in AutoCAD",
                "Using point clouds for modeling and visualization",
              ],
            },
            {
              name: "Customizing AutoCAD",
              SUB: [
                "Introduction to AutoLISP and creating simple scripts",
                "Customizing tool palettes, menus, and ribbon panels",
              ],
            },
            {
              name: "Data Extraction and Linking",
              SUB: [
                "Extracting data from drawings for analysis and reporting",
                "Linking AutoCAD data with external databases or spreadsheets",
              ],
            },
            {
              name: "Collaborating with AutoCAD Design Center",
              SUB: [
                "Using Design Center to access and reuse content",
                "Working with tool palettes and content libraries",
              ],
            },
            {
              name: "Introduction to Sheet Sets",
              SUB: [
                "Creating and managing sheet sets for better project organization",
                "Automating title blocks and layouts",
              ],
            },
            {
              name: "Industry-Specific Features ",
              SUB: [
                "Exploring industry-specific tools and features (e.g., AutoCAD Architecture, AutoCAD MEP, etc.)",
              ],
            },
          ],
        },
        {
          name: "PRACTICES & INTERVIEW PREPARATION",
          topics: [
            {
              name: "Beginner - Practices ",
              SUB: [
                "Practice 1: Advanced 3D Editing",
                "Practice 2: 3D Modeling Techniques ",
                "Practice 3: Rendering and Visualization ",
                "Practice 4: Customization ",
                "Practice 5: Comprehensive Project ",
              ],
            },
            {
              name: "Intermediate - Practices",
              SUB: [
                "Practice 1: Advanced Editing ",
                "Practice 2: 3D Modeling Basics ",
                "Practice 3: Advanced Dimensioning ",
                "Practice 4: Dynamic Blocks & Attributes ",
                "Practice 5: 3D Modeling Exercises ",
              ],
            },
            {
              name: "Advanced - Practices ",
              SUB: [
                "Practice 1: Advanced 3D Editing ",
                "Practice 2: 3D Modeling Techniques ",
                "Practice 3: Rendering and Visualization ",
                "Practice 4: Customization ",
                "Practice 5: Comprehensive Project ",
              ],
            },
            {
              name: "Interview Preparation",
              SUB: [
                "Reviewing common AUTOCAD interview questions and potential answers",
                "Discussing tips and strategies for effectively answering interview questions",
                "Preparing for technical and non-technical aspects of interviews",
              ],
            },
          ],
        },
      ],
    },

    {
      id: 14,
      name: "COMPLETE HTML BOOTCAMP",
      thumbnail: "../../images/course.jpg",
      slide: s3,
      order: 14,
      category: "SOFTWARE",
      description:
        "The HTML (HyperText Markup Language) course is designed to provide participants with a comprehensive understanding of the fundamental concepts of web development using HTML. ",
      description_L: [
        " The HTML (HyperText Markup Language) course is designed to provide participants with a comprehensive understanding of the fundamental concepts of web development using HTML.",
        "In this course, participants will learn how to create and structure web pages using HTML to build the foundation of websites and web applications. You will learn how to create web pages and gain an in-depth understanding of various HTML elements, attributes, and best practices.",
        "By the end of the course, you'll be well-equipped to build and design your own websites using HTML.",
        "This Program offers students to get clear insights of HTML by Practical training which will be handled by Mechnido's faculty and industrial experts.",
        "In 50+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/courses%2FQOhykZgOQCwzbBiGoXMF%2Fcertificates%2Fcert.jpg?alt=media&token=55c2b184-bb62-4552-ad82-bacd4192bda9",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria. ",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],
      schedule: [
        {
          name: "INTRODUCTION TO HTML",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },

            {
              name: "Introduction to HTML",
              SUB: [
                "Understanding the role of HTML in web development",
                "HTML version history",
              ],
            },
            {
              name: "Structure of an HTML Document",
              SUB: [
                "The basic structure of an HTML document",
                "The DOCTYPE declaration,Head and body sections in HTML",
              ],
            },
            {
              name: "Basic HTML Tags",
              SUB: [
                "Exploring essential HTML tags (e.g., <html>, <head>, <title>, <body>)",
                "Using meta tags for page metadata",
              ],
            },
            {
              name: "HTML Formatting",
              SUB: [
                "Formatting text using tags like <strong>, <em>, <u>, <s>, etc.",
                "Creating line breaks with <br> tag",
              ],
            },
            {
              name: "Creating Headings and Paragraphs",
              SUB: [
                "Using heading tags (<h1> to <h6>) for different levels of headings",
                "Structuring content with <p> tags for paragraphs",
              ],
            },
            {
              name: "Working with Anchors and Hyperlinks",
              SUB: [
                "Creating hyperlinks with the <a> tag",
                "Linking to external websites and internal pages",
                "Utilizing anchor tags for smooth scrolling within a page",
              ],
            },
            {
              name: "Building Tables to Organize Data",
              SUB: [
                "Creating tables using <table> and related tags (<tr>, <th>, <td>)",
                "Customizing table appearance with attributes",
              ],
            },
            {
              name: "Creating Ordered and Unordered Lists",
              SUB: [
                "Organizing content with ordered (numbered) and unordered (bullet) lists",
                "Nesting lists for hierarchical information.",
              ],
            },
            {
              name: "Implementing Description Lists",
              SUB: [
                "Creating description lists with <dl>, <dt>, and <dd> tags",
                "Displaying term and description pairs",
              ],
            },
          ],
        }, //1st ps ends
        {
          name: "HTML HEAD AND LAYOUT",
          topics: [
            {
              name: "The Role of the HTML Head Section",
              SUB: [
                "Reviewing the purpose and importance of the head section",
                "Understanding the role of the head elements (e.g., <meta>, <title>, <link>, etc.)",
              ],
            },
            {
              name: "Working with Meta Tags",
              SUB: [
                "Exploring common meta tags (e.g., description, keywords, author, charset, etc.)",
                "Setting up the viewport for mobile devices",
              ],
            },
            {
              name: "Defining the Viewport for Responsive Design",
              SUB: [
                "Understanding the concept of responsive design",
                "Configuring the viewport meta tag for different screen sizes",
              ],
            },
            {
              name: "Including CSS and JavaScript in HTML",
              SUB: [
                "Introduction to Cascading Style Sheets (CSS) and JavaScript",
                "Linking external CSS files using the <link> tag",
                "Embedding JavaScript code in HTML with the <script> tag",
              ],
            },
            {
              name: "Working with External Files and File Paths",
              SUB: [
                "Organizing project files and directories",
                "Specifying relative and absolute file paths",
              ],
            },
            {
              name: "Using HTML to Create a Basic Layout",
              SUB: [
                "Designing the structure of a basic web page layout",
                "Implementing header, navigation, content, and footer sections",
              ],
            },
            {
              name: "Implementing Responsive Design Principles",
              SUB: [
                "Understanding media queries for responsive layouts",
                "Adapting the layout for different screen sizes (mobile, tablet, desktop)",
                "Using CSS flexbox and grid for responsive design",
              ],
            },
          ],
        }, //2nd part end
        {
          name: "ADVANCED HTML ELEMENTS",
          topics: [
            {
              name: "Embedding Multimedia in HTML",
              SUB: [
                "Using the <audio> tag to embed audio files",
                "Incorporating video content with the <video> tag",
                "Controlling playback and appearance with attributes",
              ],
            },
            {
              name: "Creating Progress Bars and Meters",
              SUB: [
                "Utilizing the <progress> tag for progress bars",
                "Displaying measurements with the <meter> tag",
              ],
            },
            {
              name: "Utilizing Data Tags and Lists",
              SUB: [
                "Working with the <data> tag to store machine-readable data",
                "Creating nested lists for complex data structures",
              ],
            },
            {
              name: "Building Headers and Footers for Sections",
              SUB: [
                "Understanding the semantic importance of <header> & <footer> tags",
                "Using these tags to define header and footer sections within a web page",
              ],
            },
            {
              name: "Organizing Content with Article and Aside Tags",
              SUB: [
                "Implementing the <article> tag for standalone content",
                "Using the <aside> tag for related, but non-essential, content",
              ],
            },
            {
              name: "Creating Interactive Dialogs with HTML",
              SUB: [
                "Utilizing the <dialog> tag for interactive dialogs and modal windows",
                "Handling user interactions and actions",
              ],
            },
            {
              name: "Working with Figures and Captions",
              SUB: [
                "Using the <figure> and <figcaption> tags to associate captions with images and multimedia",
                "Enhancing accessibility and user experience with captions",
              ],
            },
            {
              name: "Understanding Semantic Elements",
              SUB: [
                "Reviewing the importance of semantic HTML elements for accessibility and SEO",
                "Implementing elements like <nav>, <main>, <section>, etc.",
              ],
            },
            {
              name: "Using Time, Main, Wbr, Canvas, & SVG Elements",
              SUB: [
                "Incorporating the <time> tag to represent dates and times",
                "Utilizing the <main> tag to indicate the main content of a page",
                "Employing the <wbr> tag for word breaking opportunities",
                "Creating graphics with the <canvas> and <svg> tags",
              ],
            },
          ],
        },
        {
          name: "HTML SEMANTIC ELEMENTS",
          topics: [
            {
              name: "Understand the Role of Semantic Elements",
              SUB: [
                "Importance of semantic HTML for web accessibility and SEO",
                "How semantic elements improve code readability and maintenance",
              ],
            },
            {
              name: "Implementing Sectioning Elements",
              SUB: [
                "Using the <header>, <nav>, <main>, <section>, <article>, <aside>, and <footer> tags",
                "Structuring the layout and content of web pages using these elements",
              ],
            },
            {
              name: "Working with the <details> & <summary> Tags",
              SUB: [
                "Creating expandable and collapsible content sections",
                "Enhancing user experience with the details and summary elements",
              ],
            },
            {
              name: "Using the <time> Tag for Dates and Times",
              SUB: [
                "Representing dates and times on web pages",
                "Formatting time-related content using HTML's <time> element",
              ],
            },
            {
              name: "Define the Main Content with the <main> Tag",
              SUB: [
                "Indicating the primary content of a web page with the <main> element",
                "Properly structuring content for better accessibility",
              ],
            },
            {
              name: "Enhancing Accessibility with the <figure> and <figcaption> Tags",
              SUB: [
                "Associating captions with images and multimedia content",
                "Improving accessibility and understanding of visual content",
              ],
            },
            {
              name: "Working with the <mark> & <ins>/<del> Tags",
              SUB: [
                "Highlighting text with the <mark> element",
                "Indicating inserted or deleted content with <ins> & <del> elements",
              ],
            },

            {
              name: "Organize Data with the <data> & <time> Tags",
              SUB: [
                "Using the <data> element to store machine-readable data",
                "Formatting time-related content with the <time> element",
              ],
            },
            {
              name: "Creating Interactive Dialogs - <dialog> Tag",
              SUB: [
                "Building interactive dialogs and modal windows with the <dialog> element",
                "Handling user interactions and actions",
              ],
            },
            {
              name: "Understanding HTML5 Form Elements",
              SUB: [
                "Exploring new input types like date, time, email, and more",
                "Validating form data using HTML attributes",
              ],
            },
          ],
        },
        {
          name: "HTML COLOR AND INTERVIEW QUESTIONS",
          topics: [
            {
              name: "HTML Color Names",
              SUB: [
                "Understanding the use of named colors in HTML",
                "Exploring the list of pre-defined color names",
              ],
            },
            {
              name: "Applying Color to HTML Elements",
              SUB: [
                "Using CSS to apply colors to various HTML elements",
                "Understanding hexadecimal and RGB color values",
              ],
            },
            {
              name: "HTML Color Codes",
              SUB: [
                "Learning how to use color codes in HTML and CSS",
                "Creating custom color shades for your web pages",
              ],
            },
            {
              name: "Styling with CSS",
              SUB: [
                "Incorporating color styles into HTML elements using CSS",
                "Applying color to text, backgrounds, and border",
              ],
            },
            {
              name: "HTML Color Names vs. Color Codes",
              SUB: [
                "Pros and cons of using color names and color codes",
                "Best practices for choosing appropriate colors",
              ],
            },
            {
              name: "Interview Questions - HTML",
              SUB: [
                "Reviewing common interview questions related to HTML",
                "Tips and techniques for answering interview questions effectively",
              ],
            },
            {
              name: "Interview Questions - HTML5",
              SUB: [
                "Exploring advanced interview questions specific to HTML5 features",
                "Preparing comprehensive answers to showcase your knowledge",
              ],
            },
          ],
        },
      ],
    },

    {
      id: 15,
      name: "MASTERING SOLIDWORKS",
      thumbnail: "../../images/course.jpg",
      slide: s3,
      order: 15,
      category: "SOFTWARE",
      description:
        "SolidWorks is a comprehensive 3D computer-aided design (CAD) software widely used in the engineering and manufacturing industries. ",
      description_L: [
        "SolidWorks is a comprehensive 3D computer-aided design (CAD) software widely used in the engineering and manufacturing industries.",
        "This 60-hour online course is designed to provide participants with a solid foundation in using SolidWorks to create 3D models, assemblies, and engineering drawings.",
        "Throughout the course, participants will gain hands-on experience with the software, learning how to navigate the user interface, utilize essential tools, and employ various features to design and visualize 3D models.",
        "This Program offers students to get clear insights of Solidworks CAD Software by Practical training which will be handled by Mechnido's faculty and industrial experts. ",
        "In 60 hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/courses%2F7N89M9HTyoLSA55dfMd4%2Fcertificates%2Fcert.jpg?alt=media&token=6d1b7c8a-520c-4ada-8bde-8c30ffa54961",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria. ",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],

      schedule: [
        {
          name: "BEGINNER LEVEL",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Introduction to SolidWorks ",
              SUB: [
                "Overview of SolidWorks software and its applications",
                "Understanding the user interface and navigation",
              ],
            },
            {
              name: "Sketch Creation Tools",
              SUB: [
                "Using sketch tools: lines, arcs, circles, rectangles, and more",
                "Applying sketch constraints for precise geometry",
              ],
            },
            {
              name: "Sketch Editing Tools",
              SUB: [
                "Editing and modifying sketches: trim, extend, offset, and fillet",
                "Converting entities and sketch patterns",
              ],
            },
            {
              name: "GD&T Symbols and Feature Control Frames",
              SUB: [
                "Understanding the basic GD&T symbols and their meanings",
                "Introduction to feature control frames and their components",
                "Interpreting GD&T callouts on engineering drawings",
              ],
            },
            {
              name: "Part Modeling Features",
              SUB: [
                "Exploring various distribution channels for reaching customers.",
                "Analyzing different customer relationship models and their impact on customer satisfaction.",
              ],
            },
            {
              name: "Advanced Part Modeling",
              SUB: [
                "Working with design intent: patterns, configurations, and design tables",
                "Introduction to parametric modeling",
              ],
            },
            {
              name: "Fillets and Chamfers",
              SUB: [
                "Adding fillets to rounds sharp edges and corners.",
                "Applying chamfers for beveled edges.",
              ],
            },
            {
              name: "Creating Patterns",
              SUB: [
                "Linear pattern: replicating features along a linear path.",
                "Circular pattern: duplicating features in a circular arrangement.",
              ],
            },
          ],
        },
        {
          name: "INTERMEDIATE LEVEL-ADVANCED PART MODELING",
          topics: [
            {
              name: "Advanced Sketching Techniques",
              SUB: [
                "Working with splines and style splines for smooth curves.",
                "Using equations in sketches to drive dimensions.",
                "Creating curves and paths for loft and sweep features.",
              ],
            },

            {
              name: "Swept Boss/Base",
              SUB: [
                "Creating advanced swept features along complex paths.",
                "Utilizing guide curves for more control over the sweep.",
              ],
            },
            {
              name: "Lofted Boss/Base",
              SUB: [
                "Generating complex shapes by lofting between multiple profiles.",
                "Exploring guide curves for lofted features.",
              ],
            },
            {
              name: "FilletXpert and DraftXpert",
              SUB: [
                "Utilizing FilletXpert for analyzing and applying variable fillet sizes.",
                "Understanding DraftXpert for draft analysis.",
              ],
            },
            {
              name: "Multibody Design ",
              SUB: [
                "Creating parts with multiple solid bodies in a single file.",
                "Managing and organizing multiple bodies in the feature tree.",
              ],
            },
            {
              name: "Design Tables and Configurations",
              SUB: [
                "Using design tables to control multiple configurations of a part.",
                "Managing configurations for different sizes and options.",
              ],
            },
            {
              name: "Working with Equations",
              SUB: [
                "Understanding equations for parametric modeling.",
                "Linking dimensions and controlling parts using equations.",
              ],
            },
            {
              name: "Advanced Patterns",
              SUB: [
                "Creating sketch-driven patterns for more flexibility.",
                "Using fill patterns to distribute features across surfaces",
              ],
            },
            {
              name: "Advanced Hole Wizard ",
              SUB: [
                "Creating holes with complex patterns and custom sizes.",
                "Adding standard and custom threads to holes.",
              ],
            },
            {
              name: "Exporting and Importing ",
              SUB: [
                "Exporting parts and assemblies to various file formats (STEP, IGES, etc.).",
                "Importing external models into SolidWorks.",
              ],
            },
          ],
        },
        {
          name: "INTERMEDIATE LEVEL-SURFACE MODELING & SHEET METAL ",
          topics: [
            {
              name: "Introduction to Surface Modeling",
              SUB: [
                "Understanding the difference between solid and surface modeling.",
                "Introducing the Surface tab and its various tools.",
              ],
            },
            {
              name: "Creating and Editing Surfaces",
              SUB: [
                "Building surfaces using boundary, loft, and fill features.",
                "Editing surfaces using trimming, extending, & knitting operations",
              ],
            },
            {
              name: "Surface Repair and Knitting ",
              SUB: [
                "Identifying & repairing gaps, holes, errors in surface geometry.",
                "Combining multiple surfaces into a single quilt using knit tools.",
              ],
            },
            {
              name: "Surface Trim and Extend",
              SUB: [
                "Trimming and extending surfaces to achieve desired shapes.",
                "Using trimming tools to intersect surfaces accurately",
              ],
            },
            {
              name: "Surface Offset and Thicken",
              SUB: [
                "Creating offset surfaces for thickening and shelling operations.",
                "Adding thickness to surfaces to create solid models.",
              ],
            },
            {
              name: "Surface Loft and Boundary",
              SUB: [
                "Advanced surface creation techniques using loft and boundary features.",
                "Achieving complex and organic shapes with guide curves",
              ],
            },
            {
              name: "Introduction to Sheet Metal",
              SUB: [
                "Understanding the fundamentals of sheet metal design.",
                "Design considerations for sheet metal manufacturing",
              ],
            },
            {
              name: "Base Flange and Sketched Bend ",
              SUB: [
                "Creating sheet metal parts using the Base Flange feature.",
                "Adding sketched bends to create bends at specific locations.",
              ],
            },
            {
              name: "Sheet Metal Forming Tools",
              SUB: [
                "Utilizing forming tools to create embosses, louvers, and ribs.",
                "Customizing and saving forming tool libraries.",
              ],
            },
            {
              name: "Flat Pattern and Exporting",
              SUB: [
                "Generating flat patterns for manufacturing.",
                "Exporting sheet metal parts for fabrication processes.",
              ],
            },
          ],
        },
        {
          name: "ADVANCED LEVEL-  ADVANCED ASSEMBLIES",
          topics: [
            {
              name: "Assembly Features",
              SUB: [
                "Creating assembly-level cuts, holes, and patterns.",
                "Understanding the impact of assembly features on individual components.",
              ],
            },
            {
              name: "Advanced Mates ",
              SUB: [
                "Limiting degrees of freedom with distance and angle mates.",
                "Applying tangent, width, and symmetry mates for more complex connections.",
              ],
            },
            {
              name: "Assembly Configurations",
              SUB: [
                "Creating and managing different configurations within an assembly.",
                "Using configurations to explore design alternatives.",
              ],
            },
            {
              name: "Smart Fasteners",
              SUB: [
                "Automatically adding standard fasteners to assemblies.",
                "Customizing and managing smart fastener libraries.",
              ],
            },

            {
              name: "Top-Down Assembly Design",
              SUB: [
                "Designing parts within assemblies using in-context modeling.",
                "Utilizing layout sketches to drive part geometry.",
              ],
            },
            {
              name: "Assembly Visualization",
              SUB: [
                "Analyzing and optimizing large assemblies for performance.",
                "Identifying and resolving performance bottlenecks.",
              ],
            },
            {
              name: "Exploded Views and Animations",
              SUB: [
                "Creating exploded views to showcase assembly details.",
                "Generating animations for dynamic assembly presentations",
              ],
            },
            {
              name: "Assembly Drawings",
              SUB: [
                "Generating detailed assembly drawings with views & annotations.",
                "Creating bills of materials (BOM) for part and assembly lists.",
              ],
            },
            {
              name: "Advanced Assembly Techniques",
              SUB: [
                "Skeleton modeling: Using layout sketches as a skeleton for parts.",
                "Designing multi-body parts within assemblies.",
              ],
            },
            {
              name: "Collaboration and CAD Management ",
              SUB: [
                "Collaborating with team members using SolidWorks PDM.",
                "Managing CAD files and revisions effectively.",
              ],
            },
          ],
        },
        {
          name: "ADVANCED LEVEL-SIMULATION AND RENDERING ",
          topics: [
            {
              name: "Introduction to Simulation ",
              SUB: [
                "Understanding the importance of simulation in the design process.",
                "Overview of SolidWorks Simulation and its capabilities.",
              ],
            },
            {
              name: "Static Analysis",
              SUB: [
                "Applying boundary conditions & loads for static structural analysis.",
                " Interpreting and analyzing simulation results.",
              ],
            },
            {
              name: "Thermal Analysis",
              SUB: [
                "Defining thermal loads & boundary conditions for heat transfer analysis.",
                "Analyzing temperature distribution and thermal effects.",
              ],
            },
            {
              name: "Modal Analysis",
              SUB: [
                "Performing modal analysis to study natural frequencies and mode shapes.",
                "Identifying potential vibration issues in designs.",
              ],
            },
            {
              name: "Flow Simulation",
              SUB: [
                "Setting up fluid flow simulations in SolidWorks Flow Simulation.",
                "Analyzing fluid behavior and heat transfer within designs",
              ],
            },
            {
              name: "Introduction to PhotoView 360",
              SUB: [
                "Overview of PhotoView 360 for rendering purposes.",
                "Understanding rendering settings and options",
              ],
            },
            {
              name: "Applying Appearances and Textures ",
              SUB: [
                "Enhancing model appearance with materials, textures, and appearances.",
                "Utilizing scene settings for improved realism.",
              ],
            },
            {
              name: "Lighting and Cameras",
              SUB: [
                "Adjusting lighting conditions to improve rendering quality.",
                "Setting up cameras for different perspectives.",
              ],
            },
            {
              name: "Rendering the Model",
              SUB: [
                "Configuring rendering options and quality settings.",
                "Rendering high-quality images and animations.",
              ],
            },
            {
              name: "Additive Manufacturing and 3D Printing",
              SUB: [
                "Designing for additive manufacturing processes like 3D printing",
                "Preparing models for successful 3D printing",
              ],
            },
          ],
        },
        {
          name: "PRACTICES & INTERVIEW PREPARATION",
          topics: [
            {
              name: "Beginner - Practices ",
              SUB: [
                "Practice 1: Sketching Practice ",
                "Practice 2: Part Modeling Practice",
                "Practice 3: Assembly Practice",
                "Practice 4: Drawing Practice ",
                "Practice 5: Comprehensive Project ",
              ],
            },
            {
              name: "Intermediate - Practices ",
              SUB: [
                "Practice 1: Advanced Part Modeling",
                "Practice 2: Advanced Assembly",
                "Practice 3: Surface Modeling",
                "Practice 4: Dynamic Blocks & Attributes",
                "Practice 5: Comprehensive Project ",
              ],
            },
            {
              name: "Advanced - Practices ",
              SUB: [
                "Practice 1: Simulation and Analysis ",
                "Practice 2: Advanced Surface Modeling",
                "Practice 3: Rendering and Visualization",
                "Practice 4: Drawings and Detailing",
                "Practice 5: Comprehensive Project ",
              ],
            },
            {
              name: "Interview Preparation",
              SUB: [
                "Reviewing common SOLIDWORKS interview questions and potential answers",
                " Discussing tips and strategies for effectively answering interview questions",
                " Preparing for technical and non-technical aspects of interviews",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 16,
      name: "3D PRINTING MASTERCLASS",
      thumbnail: "../../images/course.jpg",
      slide: s3,
      order: 16,
      category: "DESIGN ELEMENTS",
      description:
        "This Program offers students to get clear insights of  3D Printing Technology by Practical training which will be handled by SEED faculties and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of  3D Printing Technology by Practical training which will be handled by SEED faculties and industrial experts.",
        "In 15 hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from SEED.",
        'The "3D Printing Masterclass" is designed to provide participants with a comprehensive introduction to the fascinating world of 3D printing. This course is ideal for beginners and individuals with limited or no prior experience in 3D printing technology. ',
        "Participants will gain a solid foundation in various aspects of 3D printing, including its history, different printing technologies, materials, software tools, hardware components, and real-world applications.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/courses%2FB3UFiWffTYeK0BtKItYF%2Fcertificates%2Fcert.jpg?alt=media&token=ad8786a5-68b3-4b04-bba5-49f151b1d855",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria. ",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],

      schedule: [
        {
          name: "INTRODUCTION TO 3D PRINTING",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Introduction to 3D Printing",
              SUB: [
                "What is 3D printing, and how does it work?",
                "The significance of 3D printing in various industries.",
                "Real-world examples of 3D printing applications.",
              ],
            },
            {
              name: "Types of 3D Printing Technologies",
              SUB: [
                "Fused Deposition Modeling (FDM) - principles and applications.",
                "Stereolithography (SLA) - how it differs from FDM and its uses.",
                "Selective Laser Sintering (SLS) - advantages and materials utilized.",
                "Digital Light Processing (DLP) - understanding the DLP process.",
              ],
            },
            {
              name: "3D Printing Materials ",
              SUB: [
                "Commonly used filament materials (PLA, ABS, PETG, etc.).",
                "Resins for SLA and DLP printers and their properties.",
                "Specialty materials for specific purposes (flexible, conductive, etc.).",
              ],
            },
            {
              name: "3D Modeling Software ",
              SUB: [
                "Introduction to Computer-Aided Design (CAD) software.",
                "Basic 3D modeling concepts and tools.",
                "Preparing a 3D model for printing (file formats, scaling, etc.).",
              ],
            },
            {
              name: "3D Printing Hardware and Equipment",
              SUB: [
                "Components of a 3D printer and their functions.",
                "Understanding printer settings and parameters.",
                "Troubleshooting common 3D printing issues.",
              ],
            },
          ],
        },
        {
          name: "ADVANCED 3D PRINTING TECHNIQUES ",
          topics: [
            {
              name: "3D Printer Calibration and Maintenance",
              SUB: [
                "Importance of calibrating your 3D printer for precise prints.",
                "Step-by-step guide to calibrating the printer's axes & bed leveling.",
                "Understanding and adjusting temperature settings for different materials.",
                "Routine maintenance to keep your 3D printer in top condition.",
              ],
            },

            {
              name: "Post-Processing Techniques",
              SUB: [
                "Removing support structures and rafts from your 3D prints.",
                "Sanding, polishing, & painting your prints for a professional finish.",
                "Exploring vapor smoothing & other advanced post-processing methods.",
                "Tips for optimizing post-processing to achieve desired results.",
              ],
            },
            {
              name: "Designing for Functionality",
              SUB: [
                "Understanding mechanical properties and material selection for functional prints.",
                "Design guidelines for incorporating moving parts and assemblies.",
                "Case studies of functional 3D-printed objects in various industries.",
                "Tips for testing and iterating functional designs for best performance.",
              ],
            },
            {
              name: "3D Scanning and Photogrammetry ",
              SUB: [
                "Introduction to 3D scanning technologies and their applications.",
                "Using smartphones and inexpensive tools for photogrammetry.",
                "Converting physical objects into digital 3D models.",
                "Cleaning and preparing scanned models for 3D printing.",
              ],
            },
            {
              name: "3D Printing for Engineering & Prototyping",
              SUB: [
                "Rapid prototyping: advantages, use cases, and limitations.",
                "Design considerations for functional prototypes.",
                "Best practices for printing engineering components with complex geometries.",
                "Reducing prototyping costs and lead times using 3D printing.",
              ],
            },
          ],
        },
        {
          name: " 3D PRINTING APPLICATIONS & FUTURE TRENDS ",
          topics: [
            {
              name: "3D Printing in Medicine and Healthcare ",
              SUB: [
                "Bio-printing: Creating living tissues & organs through 3D printing.",
                "Custom prosthetics and orthotics for improved patient care.",
                "Medical models & surgical planning using patient-specific 3D prints.",
                "Advancements and challenges in medical 3D printing.",
              ],
            },
            {
              name: "3D Printing - Aerospace & Automotive Industry",
              SUB: [
                "Lightweight & high-performance parts for aerospace applications.",
                "Additive manufacturing in the automotive sector",
                "Case studies of successful 3D printed components in aerospace and automotive.",
                "Reducing carbon footprint & enhancing design freedom with 3D printing",
              ],
            },
            {
              name: "3D Printing in Art and Fashion",
              SUB: [
                "Pushing artistic boundaries with 3D printed sculptures & installations.",
                "Customized fashion design and wearable technology.",
                "Collaborations between artists, designers, and 3D printing experts.",
                "Sustainable fashion and its connection to additive manufacturing.",
              ],
            },
            {
              name: "Intellectual Property & Legal Considerations",
              SUB: [
                "Copyright and licensing challenges in the world of 3D printing.",
                "Protecting your designs and intellectual property.",
                "Patent landscape and its impact on 3D printing technology.",
                "Navigating legal issues in 3D printing services and industries.",
              ],
            },
            {
              name: "Future Trends in 3D Printing",
              SUB: [
                "Cutting-edge materials and their potential applications.",
                "Advances in 3D printing technologies: Multi-material and multi-color printing.",
                "The role of 3D printing in Industry 4.0 and smart manufacturing.",
                "The democratization of 3D printing and its impact on various sectors.",
              ],
            },
          ],
        },
        {
          name: "PRACTICES & INTERVIEW PREPARATION",
          topics: [
            {
              name: "Beginner - Practices ",
              SUB: [
                "Creating assembly-level cuts, holes, and patterns.",
                "Understanding the impact of assembly features on individual components.",
              ],
            },
            {
              name: "Advanced Mates ",
              SUB: [
                "Practice 1: Designing a Functional 3D Model",
                "Practice 2: 3D Printing and Post-Processing",
                "Practice 3: 3D Printer Calibration",
                "Practice 4: Reflection and Discussion ",
                "Practice 5: Comprehensive Project ",
              ],
            },
            {
              name: "Interview Preparation",
              SUB: [
                "Reviewing common 3D Printing and Additive manufacturing interview questions and potential answers",
                "Discussing tips and strategies for effectively answering interview questions",
                "Preparing for technical and non-technical aspects of interviews",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 17,
      name: "FUSION 360 BOOTCAMP",
      thumbnail: "../../images/course.jpg",
      slide: s3,
      order: 17,
      
      description:
        "This Program offers students to get clear insights of  Fusion 360 3D Modelling Software by Practical training which will be handled by Mechnido's faculty and industrial experts.",
      description_L: [
        "This Program offers students to get clear insights of  Fusion 360 3D Modelling Software by Practical training which will be handled by Mechnido's faculty and industrial experts.",
        "In 40 hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
        "Fusion 360 Course is designed to equip participants with the knowledge and skills required to master Autodesk Fusion 360, a powerful 3D computer-aided design (CAD) and computer-aided manufacturing (CAM) software. Throughout this in-depth course, you will embark on a journey from the basics of Fusion 360 to advanced design and manufacturing techniques and you will gain a thorough understanding of Fusion 360's capabilities and become proficient in various design and engineering tasks.",
      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/courses%2F8s6lEkkIU0jQDediZpM9%2Fcertificates%2Fcert.jpg?alt=media&token=3097e826-53b9-401c-b46a-09a93bede0ac",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria. ",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      category: "DESIGN ELEMENTS",
      fee: [
        {
          id: 0,
          type: "One time",
          price: 2500,
        },
      ],

      schedule: [
        {
          name: "BEGINNER LEVEL",
          topics: [
            {
              name: "Welcome and Course Introduction",
              SUB: [
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda",
              ],
            },
            {
              name: "Introduction to Fusion 360",
              SUB: [
                "Overview of Fusion 360 and its features",
                "Understanding the user interface and navigation",
              ],
            },
            {
              name: "Sketching",
              SUB: [
                "Creating 2D sketches using lines, circles, arcs, and other tools",
                "Applying constraints for precise sketching",
              ],
            },
            {
              name: "Basic 3D Modeling",
              SUB: [
                "Extruding, revolving, and sweeping sketches into 3D solids",
                "Editing and modifying 3D shapes",
              ],
            },
            {
              name: "Assemblies and Components",
              SUB: [
                "Creating and managing components in an assembly",
                "Applying constraints to simulate real-world relationships",
              ],
            },
            {
              name: "Parametric Modeling",
              SUB: [
                "Understanding parametric design and history timeline",
                "Utilizing parameters and equations for flexible designs",
              ],
            },
            {
              name: "Sculpting and Freeform Modeling",
              SUB: [
                "Exploring T-Splines and sculpting tools for organic shapes",
                "Combining sculpting with parametric modeling",
              ],
            },
            {
              name: "Importing and Working with CAD Files",
              SUB: [
                "Importing and referencing CAD files from other software",
                "Collaborating with different file formats",
              ],
            },
          ],
        },
        {
          name: "INTERMEDIATE LEVEL",
          topics: [
            {
              name: "Advanced Sketching Techniques",
              SUB: [
                "Working with splines, equations, & more complex sketch profiles.",
                "Utilizing sketch patterns for efficient design.",
              ],
            },

            {
              name: "Advanced 3D Modeling",
              SUB: [
                "Creating organic shapes using sculpting and T-Spline tools.",
                "Applying advanced filleting and chamfering.",
              ],
            },
            {
              name: "Sheet Metal Design",
              SUB: [
                "Introduction to sheet metal modeling and bending operations.",
                "Creating sheet metal components with specific parameters.",
              ],
            },
            {
              name: "Creating and Editing Parametric Constraints",
              SUB: [
                "Managing and editing existing constraints in complex designs.",
                "Using parameters and equations for design automation.",
              ],
            },
            {
              name: "Animation and Rendering",
              SUB: [
                "Creating animations to visualize motion and assembly sequences.",
                "Rendering realistic images for presentations and marketing.",
              ],
            },
            {
              name: "Intro to CAM ",
              SUB: [
                "Overview of CAM tools and workflows in Fusion 360.",
                "Setting up manufacturing operations and tool libraries.",
              ],
            },
            {
              name: "Toolpaths and Machining Strategies",
              SUB: [
                "Generating toolpaths for 2D and 3D machining operations.",
                "Understanding different machining strategies (e.g., adaptive clearing, contouring).",
              ],
            },
            {
              name: "CAM Simulation and Post-Processing",
              SUB: [
                "Simulating toolpaths to detect collisions and optimize machining.",
                "Generating G-code for CNC machines.",
              ],
            },
          ],
        },
        {
          name: "ADVANCED LEVEL",
          topics: [
            {
              name: "Advanced Assembly Techniques",
              SUB: [
                "Managing large assemblies efficiently with top-down design strategies.",
                "Using components and joints effectively in complex assemblies.",
              ],
            },
            {
              name: "Simulation & FEA in-depth",
              SUB: [
                "Conducting comprehensive stress analysis on complex models.",
                "Understanding simulation results and interpreting FEA data.",
              ],
            },
            {
              name: "Advanced CAM and Multi-Axis Machining",
              SUB: [
                "Mastering advanced CAM strategies for intricate machining operations.",
                "Implementing multi-axis machining for complex geometries.",
              ],
            },
            {
              name: "Designing for 3D Printing & Additive Manufacturing",
              SUB: [
                "Optimizing designs for 3D printing and additive manufacturing processes.",
                "Utilizing lattice structures and generative design tools.",
              ],
            },
            {
              name: "Creating Custom Materials and Appearances",
              SUB: [
                "Customizing material properties to simulate real-world behavior.",
                "Creating realistic appearances and textures for rendering.",
              ],
            },
            {
              name: "Collaboration and Data Management",
              SUB: [
                "Utilizing cloud-based collaboration tools within Fusion 360.",
                "Managing design versions and project data efficiently.",
              ],
            },
            {
              name: "Design Automation with iLogic ",
              SUB: [
                "Introduction to iLogic for automating design processes.",
                "Creating rules and logic to drive parametric models.",
              ],
            },
            {
              name: "Customizing Fusion 360 with Scripts and Add-Ins",
              SUB: [
                "Writing and using custom scripts to extend Fusion 360's functionality.",
                "Installing and using add-ins to streamline workflows",
              ],
            },
          ],
        },
        {
          name: "PRACTICES & INTERVIEW PREPARATION",
          topics: [
            {
              name: "Beginner - Practices ",
              SUB: [
                "Practice 1: Navigating the Interface ",
                "Practice 2: Sketching ",
                "Practice 3: Creating Basic 3D Shapes ",
                "Practice 4: Assemblies ",
                "Practice 5: Introduction to Simulation ",
              ],
            },
            {
              name: "Intermediate - Practices ",
              SUB: [
                "Practice 1: Advanced Sketching ",
                "Practice 2: Parametric Modeling ",
                "Practice 3: Sheet Metal Design",
                "Practice 4: Surface Modeling ",
                "Practice 5: More Assembly Techniques ",
              ],
            },
            {
              name: "Advanced - Practices ",
              SUB: [
                "Practice 1: Sculpting ",
                "Practice 2: Mesh Modeling ",
                "Practice 3: Generative Design ",
                "Practice 4: CAM",
                "Practice 5: Comprehensive Project ",
              ],
            },
            {
              name: "Interview Preparation",
              SUB: [
                "Reviewing common Fusion360 and designing interview questions and potential answers",
                "Discussing tips and strategies for effectively answering interview questions",
                "Preparing for technical and non-technical aspects of interviews",
              ],
            },
          ],
        },
      ],
    },


    {
      id: 18,
      name: "ADDITIVE MANUFACTURING",
      thumbnail: "../../images/course.jpg",
      slide: s3,
      order: 18,

      description:
        "This Program offers students to get clear insights of  Additive Manufacturing by Practical training which will be handled by SEED and industrial experts. ",
      description_L: [
        "This Program offers students to get clear insights of  Additive Manufacturing by Practical training which will be handled by SEED and industrial experts.", 
        "In 15 hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from SEED.",
        "The Additive Manufacturing is a comprehensive and interactive learning program that provides participants with a thorough understanding of additive manufacturing technologies, processes, applications, and future advancements.",
        " Additive manufacturing, also known as 3D printing, is a revolutionary manufacturing method that builds objects layer by layer, offering unique design possibilities and transforming various industries."


      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/courses%2FFr2jw8tMSd1774kGJ2ve%2Fcertificates%2Fcert.jpg?alt=media&token=e79e6c67-1242-4369-8464-615ea9ed67d2",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria. ",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      category: "DESIGN ELEMENTS",
      fee: [
        {
          id: 0,
          type: "One time",
          price: 399,
        },
      ],

      schedule:[
        {
          name:"INTRODUCTION TO ADDITIVE MANUFACTURING",
          topics:[
            {
              name:"Welcome and Course Introduction",
              SUB:[
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda"
              ]
            },
            {
              name:"Understanding Additive Manufacturing",
              SUB:[
                "Definition and principles of additive manufacturing",
                "Comparison with traditional manufacturing processes"
              ]
            },
            {
              name:"Types of Additive Manufacturing Technologies",
              SUB:[
                "Overview of various AM technologies (SLA, SLS, FDM, DMLS, etc.)",
                "Advantages and limitations of each technology"
              ]
            },
            {
              name:"Design for Additive Manufacturing",
              SUB:[
                "Principles of designing for AM",
                "Topology optimization and lattice structures",
                "Case studies showcasing optimized designs for specific applications"
              ]
            },
            {
              name:"Case Study 1: Aerospace Industry",
              SUB:[
                "How additive manufacturing revolutionized aerospace manufacturing",
                "Real-world examples of 3D printed aerospace components."
              ]
            },
           
            
          ]
        },
        {
          name:"ADVANCED ADDITIVE MANUFACTURING TECHNIQUES",
          topics:[
            {
              name:"Material Selection for Additive Manufacturing ",
              SUB:[
                "Types of materials used in AM (polymers, metals, ceramics, composites)",
                "Material properties and their impact on the final product"
              ]
            },
            {
              name:"Post-Processing and Finishing",
              SUB:[
                "Importance of post-processing in AM",
                "Surface finishing, heat treatment, and stress relief techniques"
              ]
            },
            {
              name:"Additive Manufacturing of Metal Parts",
              SUB:[
                "Metal AM processes and equipment",
                "Case studies of metal AM in the automotive industry"
              ]
            },
            {
              name:"Additive Manufacturing of Polymer Parts",
              SUB:[
                "Overview of polymer AM processes",
                "Application examples in consumer goods and medical devices"
              ]
            },
            {
              name:"Case Study 2: Medical Applications",
              SUB:[
                "3D printing in the healthcare sector: prosthetics, implants, surgical guides",
                "Success stories and challenges in medical AM"
              ]
            },
           
          ]
        },
        {
          name:"ADVANCEMENTS & FUTURE OF ADDITIVE MANUFACTURING",
          topics:[
            {
              name:"Additive Manufacturing in Industry 4.0",
              SUB:[
                "Integration of AM in smart factories",
                "Role of AM in decentralized production"
              ]
            },
            {
              name:"Hybrid Manufacturing: Combining AM with Traditional Processes",
              SUB:[
                "Understanding hybrid manufacturing concepts",
                "Case studies highlighting the synergy of AM and CNC machining"
              ]
            },
            {
              name:"3D Printing Large-Scale Objects",
              SUB:[
                "Challenges and solutions for printing large objects",
                "Examples of architectural and construction applications"
              ]
            },
            
            {
              name:"Additive Manufacturing for Sustainable Practices",
              SUB:[
                "Environmental benefits and considerations of AM",
                "Case studies demonstrating sustainable AM applications"
              ]
            },
            {
              name:"Case Study 3: Future Perspectives",
              SUB:[
                "Emerging trends and research in additive manufacturing",
                "Speculations on the future impact of AM on various industries"
              ]
            },
          ]
        }
      ]

    },

    {
      id: 19,
      name: "MASTERING MS WORD",
      thumbnail: "../../images/course.jpg",
      slide: s3,
      order: 19,

      description:
        "This Program offers students to get clear insights of MS Word Advanced by Practical training which will be handled by SEED and industrial experts. ",
      description_L: [
        "This Program offers students to get clear insights of MS Word Advanced by Practical training which will be handled by SEED and industrial experts. ",
        "In 8 hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from SEED.",
        "The MS Word Online Course is designed to equip participants with the essential knowledge and practical skills to harness the full potential of Microsoft Word, the industry-leading word processing software.", 
        "Whether you're a student, a professional, an aspiring writer, or simply someone who wants to create impressive documents, this course is tailor-made for you."

      ],
      duration: [
        "Flexible Timing",
        "Weekend : 2 Sessions",
        "    Saturday & Sunday - 4 Hrs",
        "Weekday : 2 Sessions (Any 2 Days)",
        "    Monday to Friday - 4 Hrs",
      ],
      certificate: {
        title: "Requirements for Certification",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/seed-25898.appspot.com/o/courses%2F82AeJcLml7iPMTjfjjTU%2Fcertificates%2Fcert.jpg?alt=media&token=a682048c-50c3-4065-be9b-fca8f9fe7d55",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria. ",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      category: "SOFTWARE",
      fee: [
        {
          id: 0,
          type: "One time",
          price: 299,
        },
      ],
      schedule:[
        {
          name:"INTRODUCTION TO MS WORD ",
          topics:[
            {
              name:"Welcome and Course Introduction",
              SUB:[
                "Introduction to the facilitator and course objectives",
                "Overview of the session agenda"
              ]
            },
            {
              name:"Introduction to MS Word",
              SUB:[
                "What is Microsoft Word & its significance in document processing.",
                "Common uses of Word in various industries and professions."
              ]
            },
            {
              name:"Navigating the Word Interface",
              SUB:[
                "Understanding the Ribbon: Tabs, Groups, and Commands.",
                "Customizing the Quick Access Toolbar for frequently used commands.",
                "Utilizing the Backstage view for managing documents."
              ]
            },
            {
              name:"Creating and Opening Documents",
              SUB:[
                "Creating a new document from scratch.",
               " Opening existing documents from different locations (local and cloud storage)."
              ]
            },
            {
              name:"Working with Paragraphs",
              SUB:[
                "Indenting paragraphs for better readability.",
                "Adding bullets and numbering to create lists.",
                "Changing paragraph alignment within the document."
              ]
            },
            {
              name:"Saving and Closing Documents",
              SUB:[
                "Saving documents in different formats: .docx, .pdf, .doc, etc.",
                "Using auto-save and version history in cloud-based platforms.",
                "Closing documents and understanding the difference between closing and quitting Word."
              ]
            },
            {
              name:"Basic Text Editing",
              SUB:[
                "Typing and entering text in a document.",
                "Selecting, copying, cutting, and pasting text.",
                "Using undo and redo to correct mistakes."
              ]
            },
            {
              name:"Formatting Text",
              SUB:[
                "Applying font styles (bold, italic, underline) to text.",
                "Changing font size and color.",
                "Aligning text: left, right, center, and justified.",
                "Adjusting line spacing and paragraph spacing."
              ]
            }
          ]
        },

        {
          name:"DOCUMENT FORMATTING",
          topics:[
            {
              name:"Paragraph Formatting",
              SUB:[
                "Adjusting indentation for different document elements (e.g., quotes, paragraphs).",
                "Using line spacing effectively to enhance readability.",
                "Applying bullets and numbering with various formatting options.",
                "Creating and modifying lists."
              ]
            },
            {
              name:"Working with Styles and Themes",
              SUB:[
                "Understanding the concept of styles and their significance in document formatting.",
                "Applying pre-defined styles to text for consistency and efficiency.",
                "Creating custom styles to suit specific document requirements.",
                "Exploring document themes to give a cohesive look to the entire document."
              ]
            },
            {
              name:"Page Setup and Layout",
              SUB:[
                "Adjusting margins, orientation (portrait vs. landscape), and paper size.",
                "Inserting page breaks for proper page layout.",
                "reating headers and footers for professional document branding."
              ]
            },
            {
              name:"Headers and Footers",
              SUB:[
                "Differentiating between the header and footer sections of a document.",
                "Adding dynamic content (e.g., document title, chapter titles) to headers and footers.",
                "Inserting page numbers and page count information."
              ]
            },
            {
              name:"Using Tables for Organizing Information",
              SUB:[
                "Creating tables to organize data in rows and columns.",
                "Formatting tables with borders, shading, and text alignment.",
                "Merging and splitting cells for advanced table layouts."
              ]
            },
            {
              name:"Inserting and Formatting Graphics",
              SUB:[
                "Inserting images and illustrations into the document.",
                "Resizing and positioning images to fit the content.",
                "Applying text wrapping options around images.",
                "Adding captions and labels to images and tables."
              ]
            },
          ]

        },
        {
          name:"WORKING WITH TABLES AND GRAPHICS",
          topics:[
            {
              name:"Creating and Formatting Tables",
              SUB:[
                "Inserting tables into documents and defining the number of rows and columns.",
                "Applying basic formatting to tables: adjusting cell size, changing borders, and shading.",
                "Working with table styles to create consistent designs.",
                "Sorting and filtering data within tables for better organization."
              ]
            },
            {
              name:"Advanced Table Features",
              SUB:[
                "Merging and splitting cells to create complex table layouts.",
                "Adding and formatting table headers and footers.",
                "Using formulas for basic calculations within tables.",
                "Converting text to tables and tables to text."
              ]
            },
            {
              name:"Inserting Images and Illustrations",
              SUB:[
                "Adding images from various sources: local files and online resources.",
                "Understanding image formats: JPEG, PNG, GIF, and more.",
                "Resizing, rotating, and positioning images for better visual impact.",
                "Applying image corrections and artistic effects."
              ]
            },
            {
              name:"Working with Shapes and SmartArt",
              SUB:[
                "Inserting shapes (e.g., arrows, rectangles, circles) to highlight content.",
                "Customizing shapes with different colors, outlines, and effects.",
                "Creating and modifying SmartArt graphics to visually represent information."
              ]
            },
            {
              name:"Text Wrapping and Alignment with Graphics",
              SUB:[
                "Controlling text wrapping around images and shapes.",
                "Adjusting text alignment in relation to graphics.",
                "Using anchor points to position graphics precisely."
              ]
            },
            {
              name:"Adding Captions and Labels",
              SUB:[
                "Adding captions to images and tables for better context.",
                "Inserting and customizing labels for graphic elements.",
                "Managing captions and labels for multiple graphics."
              ]
            },
           
          ]
        },
        {
          name:"ADVANCED FEATURES AND COLLABORATION ",
          topics:[
            {
              name:"Working with References",
              SUB:[
                "Creating a table of contents (TOC) for long documents.",
                "Adding footnotes and endnotes for proper citation and referencing.",
                "Managing citations and creating a bibliography with citations tools."
              ]
            },
            {
              name:"Using Track Changes and Comments",
              SUB:[
                "Enabling and navigating the Track Changes feature for document revision.",
               " Accepting and rejecting changes made by collaborators.",
                "Adding and responding to comments for feedback and discussion"
              ]
            }, {
              name:"Collaborative Editing and Sharing",
              SUB:[
                "Sharing documents for real-time collaboration via cloud platforms.",
                "Co-authoring documents with multiple users simultaneously.",
                "Resolving conflicts and version control in collaborative editing."
              ]
            },
            {
              name:"Mail Merge for Personalized Communication",
              SUB:[
                "Creating form letters and personalized emails using the Mail Merge wizard.",
                "Importing recipient data from external sources (e.g., Excel spreadsheets).",
                "Previewing and printing merged documents."
              ]
            }, {
              name:"Document Protection and Security",
              SUB:[
                "Applying document protection to control editing, formatting, and content changes.",
                "Setting permissions and passwords to restrict document access.",
                "Encrypting documents for secure sharing and storage."
              ]
            },
            {
              name:"Time-Saving Tips and Shortcuts",
              SUB:[
                "Introducing time-saving keyboard shortcuts for common tasks.",
                "Utilizing AutoCorrect and AutoText for automatic text insertion.",
                "Customizing the Quick Access Toolbar for frequently used commands."
              ]
            },
          ]
        }
      ]
    }
  ];

  const eventList = [
    {
      id: "hUaPM58nSpDcAbUNXSf7",
      title: "TNKC",
      subtitle: "TAMILNADU KARTING CHAMPIONSHIP",
      logo: tnkcLogo,
      about: {
        img: "",
        title: "ABOUT TNKC",
        description:
          `TNKC stands for TAMILNADU KARTING CHAMPIONSHIP is powered by Mechnido's Seed. It is an offline event encouraging budding engineers in designing a Go-kart or E-kart with proper engineering techniques. It aims at developing appropriate designing skills and understanding of the relevant scientific theories. It is a team event. The participating teams have to develop a model of Go-kart or an E-kart, analyze and optimize virtually, under ideal conditions using modern computer applications, scientific theories and engineering calculations. The teams are then evaluated based on various relevant aspects required to design a fully functional vehicle.`,
      },
      why: {
        img: "",
        heading: " Why TNKC 2023?",
        sibling: [
          {
            title: "EXPERIENTIAL LEARNING",
            description:
              "Learning through doing, while experiential education incorporates the pedagogies and structures that support this process",
          },
          {
            title: "PARTICLE EXPOSURE",
            description:
              "We introduce engineering students to actual workplace scenarios",
          },
          {
            title: "NETWORKING WITH EXPERT",
            description:
              "Network with experts to learn about new trends, share insights and receive",
          },
          {
            title: "TEAMWORK",
            description:
              " Characterized by effective communication, mutual respect, shared goals and objectives, and a willingness to work together to achieve those goals",
          },
          {
            title: "COMPETITIVE SPIRIT",
            description: "Desire to succeed, be the best,and win",
          },
          {
            title: "ENTREPRENEURIAL SKILLS",
            description:
              "Possess creative problem-solving skills, an  engineer’s mindset and a toolkit of  experience based on agile practices, multitasking and self-drive.",
          },
          {
            title: "CHALLENGE",
            description:
              "Facing challenges and ensure their honourable profession is continued into future generation",
          },
          {
            title: "CAREER DEVELOPMENT",
            description:
              " Involves acquiring new skills and knowledge, setting goals, and developing strategies to achieve those goals",
          },
        ],
      },
      features: {
        img: "",
        sib: [
          {
            title: "Internships for Champions & Runner",
            image:
              "https://img.icons8.com/?size=512&id=Shgdq9ciSCMx&format=png",
          },
          {
            title: "Placements for Champions & Runner ",
            image:
              "https://img.icons8.com/?size=512&id=Shgdq9ciSCMx&format=png",
          },
          {
            title: "Workshops will  be provided to all participants",
            image:
              "https://img.icons8.com/?size=512&id=Shgdq9ciSCMx&format=png",
          },
          {
            title: "2 Lakhs Cash Prize & Awards",
            image:
              "https://img.icons8.com/?size=512&id=Shgdq9ciSCMx&format=png",
          },
          {
            title: "20% Discount on complete Female Participants",
            image:
              "https://img.icons8.com/?size=512&id=Shgdq9ciSCMx&format=png",
          },
          {
            title: "Winners will get 5% Discount on courses in SEED platform",
            image:
              "https://img.icons8.com/?size=512&id=Shgdq9ciSCMx&format=png",
          }
        ],
      },
      workflow: {
        title: "Workflow",
        data: [
          "Registration",
          "Workshop",
          "Virtual Event ",
          "College Level Technical inspection",
          "Team Promo Video Submission",
          "Static Event",
          "Dynamic Event",
          "Endurance",
        ],
      },
      register_end: "08/15/2023",

      schedule: {
        title: "Schedule",
        data: [
          {
            task: "Registration Starts",
            date: "15.07.2023",
          },
          {
            task: "Payment Last Date",
            date: "At the Time of Registration",
          },
          {
            task: "Registration Ends",
            date: "15.08.2023",
          },
          {
            task: "Team Details Submission End",
            date: "17.08.2023",
          },
          {
            task: "Workshop",
            date: "21.08.2023",
          },
          {
            task: "Phase 1 Design Report Submission Start",
            date: "11.09.2023",
          },
          {
            task: "Phase 1 Design Report Submission End",
            date: "12.09.2023",
          },
          {
            task: "Presentation Report Submission Start",
            date: "11.09.2023",
          },
          {
            task: "Presentation Report Submission End",
            date: "12.09.2023",
          },
          {
            task: "Virtual Event Day 1",
            date: "15.09.2023",
          },
          {
            task: "Virtual Event Day 2",
            date: "16.09.2023",
          },
          {
            task: "Virtual Results",
            date: "17.09.2023",
          },
          {
            task: "Final Design Report Submission Start",
            date: "23.10.2023",
          },
          {
            task: "Final Design Report Submission End",
            date: "24.10.2023",
          },
          {
            task: "College Level Technical inspection",
            date: "25.10.2023",
          },
          {
            task: "Team Promo Video Submission",
            date: "25.10.2023",
          },
          {
            task: "Final Event Starts",
            date: "09.11.2023",
          },
          {
            task: "Final Event Ends",
            date: "11.11.2023",
          },
        ],
      },
      types: ["IC Engine", "Electric"],
      prize: {
        title: "Cash Prize & Awards",
        img: "",
        sib: [
          {
            img: "",
            text: "IC Engine",
            description: "Overall Cash Prize",
            money: "95,000 INR",
          },
          {
            img: "",
            text: "Electric",
            description: "Overall Cash Prize",
            money: "80,000 INR",
          },
        ],
      },
      overAllCash: "2,00,000",
      registerFee: '24,999',
      awards: {
        img: "",
        title: 'IC Engine & Electric',
        array:[
          {
            h1: "Champion",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "Runner Up",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "Best Endurance",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "Design & CAE",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "BMC",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "Innovation",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "Aesthetics",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "Acceleration",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "SkidPad",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "Autocross",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "Team Strategy",
            p: "Trophy + Cash Prize",
          },
          {
            h1: "Dronacharya",
            p: "Trophy + Cash Prize",
          },
        ],
      },
    }, // till here one event
  ];

  const quotations = [
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },

    {
      quote:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
    },
    {
      quote: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      quote:
        "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone",
    },
    {
      quote:
        "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon",
    },
    {
      quote: "We become what we think about.",
      author: "Earl Nightingale",
    },

    {
      quote: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll",
    },
    {
      quote:
        "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker",
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      quote: "An unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      quote: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    },
    {
      quote:
        "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    {
      quote: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi",
    },
    {
      quote:
        "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey",
    },
    {
      quote:
        "Every child is an artist.  The problem is how to remain an artist once he grows up.",
      author: "Pablo Picasso",
    },
    {
      quote:
        "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus",
    },
    {
      quote:
        "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou",
    },
    {
      quote: "Either you run the day, or the day runs you.",
      author: "Jim Rohn",
    },
    {
      quote: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford",
    },
    {
      quote:
        "The two most important days in your life are the day you are born and the day you find out why.",
      author: "Mark Twain",
    },
    {
      quote:
        "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra",
    },
    {
      quote:
        "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
      author: "Zig Ziglar",
    },
    {
      quote: "Life shrinks or expands in proportion to one’s courage.",
      author: "Anais Nin",
    },
    {
      quote:
        "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
      author: "Vincent Van Gogh",
    },
    {
      quote:
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
      author: "Aristotle",
    },
    {
      quote:
        "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      author: "Jesus",
    },
    {
      quote:
        "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "Go confidently in the direction of your dreams.  Live the life you have imagined.",
      author: "Henry David Thoreau",
    },
    {
      quote:
        "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
      author: "Erma Bombeck",
    },
    {
      quote:
        "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
      author: "Booker T. Washington",
    },
    {
      quote:
        "Certain things catch your eye, but pursue only those that capture the heart.",
      author: " Ancient Indian Proverb",
    },
    {
      quote: "Believe you can and you’re halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      quote:
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      author: "Plato",
    },
    {
      quote:
        "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
      author: "Maimonides",
    },
    {
      quote: "Start where you are. Use what you have.  Do what you can.",
      author: "Arthur Ashe",
    },
    {
      quote:
        "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
      author: "John Lennon",
    },
    {
      quote: "Fall seven times and stand up eight.",
      author: "Japanese Proverb",
    },
    {
      quote:
        "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
      author: "Helen Keller",
    },
    {
      quote: "Everything has beauty, but not everyone can see.",
      author: "Confucius",
    },
    {
      quote:
        "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
      author: "Anne Frank",
    },
    {
      quote: "When I let go of what I am, I become what I might be.",
      author: "Lao Tzu",
    },
    {
      quote:
        "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      author: "Maya Angelou",
    },
    {
      quote:
        "Happiness is not something readymade.  It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      quote:
        "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
      author: "Sheryl Sandberg",
    },
    {
      quote:
        "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
      author: "Aristotle",
    },
    {
      quote: "If the wind will not serve, take to the oars.",
      author: "Latin Proverb",
    },
    {
      quote:
        "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
      author: "Unknown",
    },
    {
      quote:
        "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
      author: "Marie Curie",
    },
    {
      quote:
        "Too many of us are not living our dreams because we are living our fears.",
      author: "Les Brown",
    },
    {
      quote:
        "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine",
    },
    {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington",
    },
    {
      quote:
        "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      author: "Leonardo da Vinci",
    },
    {
      quote:
        "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
      author: "Jamie Paolinetti",
    },
    {
      quote:
        "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
      author: "Erica Jong",
    },
    {
      quote:
        "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
      author: "Bob Dylan",
    },
    {
      quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "In order to succeed, your desire for success should be greater than your fear of failure.",
      author: "Bill Cosby",
    },
    {
      quote: "A person who never made a mistake never tried anything new.",
      author: " Albert Einstein",
    },
    {
      quote:
        "The person who says it cannot be done should not interrupt the person who is doing it.",
      author: "Chinese Proverb",
    },
    {
      quote: "There are no traffic jams along the extra mile.",
      author: "Roger Staubach",
    },
    {
      quote: "It is never too late to be what you might have been.",
      author: "George Eliot",
    },
    {
      quote: "You become what you believe.",
      author: "Oprah Winfrey",
    },
    {
      quote: "I would rather die of passion than of boredom.",
      author: "Vincent van Gogh",
    },
    {
      quote:
        "A truly rich man is one whose children run into his arms when his hands are empty.",
      author: "Unknown",
    },
    {
      quote:
        "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
      author: "Ann Landers",
    },
    {
      quote:
        "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
      author: "Abigail Van Buren",
    },
    {
      quote:
        "Build your own dreams, or someone else will hire you to build theirs.",
      author: "Farrah Gray",
    },
    {
      quote:
        "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
      author: "Jesse Owens",
    },
    {
      quote: "Education costs money.  But then so does ignorance.",
      author: "Sir Claus Moser",
    },
    {
      quote:
        "I have learned over the years that when one’s mind is made up, this diminishes fear.",
      author: "Rosa Parks",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },

    {
      quote:
        "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
      author: "Dalai Lama",
    },
    {
      quote:
        "You can’t use up creativity.  The more you use, the more you have.",
      author: "Maya Angelou",
    },
    {
      quote: "Dream big and dare to fail.",
      author: "Norman Vaughan",
    },
    {
      quote:
        "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr.",
    },
    {
      quote: "Do what you can, where you are, with what you have.",
      author: "Teddy Roosevelt",
    },
    {
      quote:
        "If you do what you’ve always done, you’ll get what you’ve always gotten.",
      author: "Tony Robbins",
    },
    {
      quote: "Dreaming, after all, is a form of planning.",
      author: "Gloria Steinem",
    },
    {
      quote:
        "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
      author: "Mae Jemison",
    },
    {
      quote:
        "You may be disappointed if you fail, but you are doomed if you don’t try.",
      author: "Beverly Sills",
    },
    {
      quote: "Remember no one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Life is what we make it, always has been, always will be.",
      author: "Grandma Moses",
    },
    {
      quote:
        "The question isn’t who is going to let me; it’s who is going to stop me.",
      author: "Ayn Rand",
    },
    {
      quote:
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford",
    },
    {
      quote:
        "It’s not the years in your life that count. It’s the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    },
    {
      quote:
        "Either write something worth reading or do something worth writing.",
      author: "Benjamin Franklin",
    },
    {
      quote: "Nothing is impossible, the word itself says, “I’m possible!”",
      author: "–Audrey Hepburn",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "If you can dream it, you can achieve it.",
      author: "Zig Ziglar",
    },
  ];

  const [quotes, setQuote] = useState(
    quotations[Math.ceil(Math.random() * 100)]
  );

  return (
    <StoreContext.Provider
      value={{
        userId,
        setUserId,
        userName,
        setUserName,
        user,
        setUser,
        change,
        setChange,
        courseList,
        courses,
        setCourses,
        events,
        setEvents,
        section,
        setSection,
        filter,
        setFilter,
        eventList,
        courseIndex,
        setCourseIndex,
        eventIndex,
        setEventIndex,
        quotations,
        quotes,
        setQuote,
        metrics,
        setMetrics,
        feedback,
        setFeedback,
        theme,
        setTheme,
        check,
        setCheck,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
