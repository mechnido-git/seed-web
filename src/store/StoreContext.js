import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/config";
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

export const StoreContext = createContext(null);

const Store = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [user, setUser] = useState(null);
  const [change, setChange] = useState(true);
  const [courses, setCourses] = useState(null);
  const courseList = [
    {
      id: 0,
      name: "Product Development Program",
      thumbnail: "../../images/courses.jpg",
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
      name: "Design thinking",
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
      name: "Reverse Engineering",
      thumbnail: "../../images/course.jpg",
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
  ];

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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
