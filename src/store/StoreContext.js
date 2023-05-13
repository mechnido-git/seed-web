import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/config";

export const  StoreContext = createContext(null);

const Store = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [user, setUser] = useState(null);
    const [change, setChange] = useState(true);
    const courseList = [
        {
          name: "Product Development Program",
          thumbnail: "../../images/courses.jpg",
          description: "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts",
          description_L: [
            "This Program offers students to get clear insights of product development concepts by hands-on training which will be handled by Mechnido's faculty and industrial experts",
            "In 18+ hours sessions, students will get an overview of the concepts and potential opportunities in the field. Moreover, students will get certificates from Mechnido.",
            "This program gives a general outlook on how to identify real time problems and forming solutions, by systematic approaches like applying , Design Thinking , Reverse Engineering, root cause analysis, DFMEA and other relevant tools.",
            "The topics are explained using product development strategy. Moreover, in this session students get brief explanation of new product trends and opportunities.",
          ],
          duration: ["Day 01 - 06 Hrs", "Day 02 - 06 Hrs", "Day 03 - 06 Hrs"],
          fee: [
            {
              type: "One Day",
              price: 200
            },
            {
              type: "Two Days",
              price: 350
            },
            {
              type: "Three Days",
              price: 450
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
                  name: "PRODUCT DEVELOPMENT",
                  SUB: [
                    "Introduction to Product Development",
                    "Product management Tool - Road mapping",
                    "Net Present Value (NPV)",
                    "Introduction to Pattern Rights - Utility, Design, and Plant",
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
                    "Introduction to Product Development",
                    "Product management Tool - Road mapping",
                    "Net Present Value (NPV)",
                    "Introduction to Pattern Rights - Utility, Design, and Plant",
                    "Case Study",
                  ],
                },
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
                  name: "PRODUCT DEVELOPMENT",
                  SUB: [
                    "Introduction to Product Development",
                    "Product management Tool - Road mapping",
                    "Net Present Value (NPV)",
                    "Introduction to Pattern Rights - Utility, Design, and Plant",
                    "Case Study",
                  ],
                },
              ],
            },
          ],
        },
      ];
      

    useEffect(()=>{console.log(user);}, [user])

    return(

    <StoreContext.Provider value={{userId, setUserId, userName, setUserName, user, setUser, change, setChange, courseList}}>
        {children}
    </StoreContext.Provider>
    )
        
}

export default Store