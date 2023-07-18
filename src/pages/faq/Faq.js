import React, { useEffect, useState } from "react";
import "./faq.css";
import HomeNav from "../home/homeNav/HomeNav";
import profile from "../../images/profile.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import Footer from "../../components/footer/Footer";

function Faq() {
    const [signIn, setSignIn] = useState(false);
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dp, setDp] = useState(profile);

    const faq = [
        {
            question: "What is Mechnido's Seed Learning Hub?",
            answer: "Mechnido's Seed Learning Hub is a dynamic and innovative platform that offers a comprehensive learning solution for individuals across diverse segments. It provides a wide range of courses and events designed by industry experts and educators."
        },
        {
            question: "How do I create an account on Mechnido's Seed Learning Hub?",
            answer: 'To create an account, visit our website and click on the "Sign Up" or "Register" button. Follow the prompts to enter your information and complete the registration process.'
        },
        {
            question: "How can I enroll in a course or event?",
            answer: "Once you have an account, you can browse the available courses and events on the platform. Click on the course or event you're interested in and follow the enrollment instructions provided."
        },
        {
            question: "Are the courses and events on Mechnido's Seed Learning Hub self-paced or scheduled?",
            answer: "The availability and format of courses and events vary. Some may be self-paced, allowing you to learn at your own pace, while others may have scheduled sessions. The course/event details will specify the format."
        },
        {
            question: "How much do the courses and events cost?",
            answer: "The cost of courses and events varies depending on the specific offering. The price will be clearly displayed on the course or event page."
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept various payment methods, including credit/debit cards and online payment platforms. The available payment options will be displayed during the checkout process."
        },
        {
            question: "Is financial assistance or scholarships available for courses?",
            answer: "We may offer financial assistance or scholarships for select courses or events. Details about any available assistance programs will be mentioned on the respective course or event page."
        },
        {
            question: "Can I get a refund if I need to cancel my enrollment?",
            answer: "Our cancellation and refund policy applies to course and event enrollments. Please refer to the Cancellation/Refund Policy section on our website for detailed information."
        },
        {
            question: "Are there any prerequisites for enrolling in specific courses?",
            answer: "Some courses may have prerequisites or recommended prerequisites. The course details will provide information about any requirements or recommended knowledge/skills."
        },
        {
            question: "How can I access the course materials or event resources? ",
            answer: "Once you're enrolled in a course or event, you will typically have access to the relevant materials and resources through your account on the platform. Detailed instructions will be provided within the course or event page."
        },
        {
            question: "Can I interact with instructors or other learners? ",
            answer: "Yes, depending on the course or event, you may have opportunities to interact with instructors and fellow learners through discussion boards, forums, or live sessions. These interaction options will be specified within the course or event details."
        },
        {
            question: "How long do I have access to the course materials?",
            answer: "The duration of access to course materials varies depending on the course or event. Some may provide lifetime access, while others may have a specified access period. The course or event details will indicate the access duration."
        },
        {
            question: "Are certificates provided upon course completion?",
            answer: "Certificates of completion may be available for certain courses or events. The eligibility criteria and certificate details will be provided on the course or event page. "
        },
        {
            question: "Can I switch to a different course or event after enrolling? ",
            answer: "Switching to a different course or event after enrollment may be possible in certain cases. Contact our support team at support@mseed.in to inquire about switching options and any associated fees or requirements."
        },
        {
            question: "Is technical support available if I encounter issues? ",
            answer: "Yes, we provide technical support to address any platform-related issues you may encounter. You can reach our support team by emailing support@mseed.in"
        },
        {
            question: "Can I access the courses or events on mobile devices?",
            answer: "Yes, our platform is designed to be mobile-responsive, allowing you to access courses and events on various devices, including smartphones and tablets."
        },
        {
            question: "Can I access the courses or events offline? ",
            answer: "Most of our courses and events are designed to be accessed online. However, there may be certain materials or resources that can be downloaded for offline use. The availability of offline access will be specified within the course or event details"
        },
        {
            question: "Can I share my account with others?",
            answer: "No, sharing your account with others is not permitted. Each user should have their own individual account on Mechnido's Seed Learning Hub."
        },
        {
            question: "How can I provide feedback or report issues with a course or event? ",
            answer: "We value your feedback and encourage you to provide it to us. You can provide feedback or report any issues by contacting our support team at support@mseed.in We appreciate your input in helping us improve our courses and events."
        },
        {
            question: "How can I stay updated with new courses and events? ",
            answer: "To stay updated with new courses and events, you can subscribe to our newsletter or follow us on our social media channels. We regularly announce new offerings and updates through these channels."
        },

    ]

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserName(user.displayName);
                if (user.photoURL) setDp(user.photoURL);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    }, []);

    const showSubs = (e) => {
        console.log(e.target.parentElement);
        e.target.parentElement.classList.toggle("show");
    };

    if (loading) return <Spinner other="globel" loading={loading} />;

    return (
        <>
            <HomeNav
                bodyId={"faq"}
                dp={dp}
                setLoading={setLoading}
                userName={userName}
                setSignIn={setSignIn}
                signIn={signIn}
            />

            <div id="faq">
                <div className="title">
                    <span class="material-symbols-outlined">
                        quiz
                    </span>
                    <h1>Frequently Asked Questions (FAQs) for Mechnido's Seed Learning Hub </h1>
                </div>
                <div className="questions">
                    {faq.map((item, i) => <div className="topics" key={i} >
                        <h4 onClick={showSubs}>
                            <span class="material-symbols-outlined">
                                quiz
                            </span> {item.question}</h4>
                        <ul>
                            <li>
                                <span class="material-symbols-outlined">
                                    emoji_objects
                                </span><p>{item.answer}</p></li>
                        </ul>
                    </div>)}
                    <p><span class="material-symbols-outlined">
                        info
                    </span>Please note that the answers provided here are general and may vary based on specific courses and events
                        offered on Mechnido's Seed Learning Hub. It's always recommended to refer to the individual course or
                        event pages for the most accurate and up-to-date information. </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faq;
