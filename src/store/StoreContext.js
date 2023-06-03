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

export const StoreContext = createContext(null);

const Store = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [user, setUser] = useState(null);
  const [change, setChange] = useState(true);
  const [courses, setCourses] = useState(null)
  const courseList = [
    {
      id: 0,
      name: "Product Development Program",
      thumbnail: "../../images/courses.jpg",
      metrics: {
        students: 1000,
        hours: 18
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
        imgURL: "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2FxYDMzS4SDOxwsH0HTYNa%2Fcertificates%2Fcert.jpg?alt=media&token=0a3e9cdc-a152-4692-afe6-e8077978fb79&_gl=1*19607cn*_ga*MTI0Mzg0ODM1MS4xNjg0MjQ5MjMz*_ga_CW55HF8NVT*MTY4NTc2NzM5MS4zMy4xLjE2ODU3NzE1MTcuMC4wLjA.",
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        { id:0,
          type: "One Day",
          price: 200,
        },
        {
          id:1,
          type: "Two Days",
          price: 350,
        },
        { id: 2,
          type: "Three Days",
          price: 450,
        },
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
        hours: 20
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
      duration: ["Flexible Timing","Weekend : 2 Sessions", "    Saturday & Sunday - 4 Hrs", "Weekday : 2 Sessions (Any 2 Days)", "    Monday to Friday - 4 Hrs"],
      feedback: [
        {
          name: "TAMILSELVAN [STUDENT]",
          msg: "I absolutely loved this course! It provided a comprehensive introduction to Design Thinking, and the sessions were wellstructured and engaging. The reallife examples and case studies helped me understand how Design Thinking can be applied in various contexts.",
          dp: p7,
        },
        {
          name: "ABIRAMI R [STUDENT]",
          msg: 'I now have a better understanding of stakeholder engagement and communication strategies that are essential for successful implementation of design solutions.',
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
        imgURL: "https://firebasestorage.googleapis.com/v0/b/idea-website-9344a.appspot.com/o/courses%2FgnEqBo9BphFg2f393Bbw%2Fcertificates%2Fcert.jpg?alt=media&token=1d1f9649-d26a-4a10-be92-b5ccb0f1f856&_gl=1*13cfvvy*_ga*MTI0Mzg0ODM1MS4xNjg0MjQ5MjMz*_ga_CW55HF8NVT*MTY4NTc2NzM5MS4zMy4xLjE2ODU3NzE0MzEuMC4wLjA.",
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
        courses, setCourses
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
