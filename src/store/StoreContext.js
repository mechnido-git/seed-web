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
      name: "Product Development Program 2",
      thumbnail: "../../images/course.jpg",
      slide: s2,
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
        sub: [
          "An individual enrolled in the program should complete the training within the program's time limit.",
          "To acquire the certification, you must complete all the course's assignments, tests, case studies, projects, and other criteria.",
          "To acquire certification, the student must show up to every session that the instructor provides.",
        ],
      },
      fee: [
        {
          type: "One Day",
          price: 200,
        },
        {
          type: "Two Days",
          price: 350,
        },
        {
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
