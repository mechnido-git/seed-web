import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import profile from "../../images/profile.png";
import HomeNav from "../home/homeNav/HomeNav";
import Footer from "../../components/footer/Footer";
import "./refundPolicy.css";

function RefundPolicy() {
  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dp, setDp] = useState(profile);

  const refund = {
    main_head: "Cancellation/Refund Policy",
    main_para: `This Cancellation/Refund Policy outlines the terms and conditions regarding cancellations and refunds for
     courses and events offered by Mechnido's Seed Learning Hub (referred to as "the platform," "we," or
     "us"). By accessing or using our platform, you acknowledge that you have read, understood, and agree to
     be bound by this Cancellation/Refund Policy. `,
    topic: [
      {
        head: "Course and Event Cancellations:",
        sub_topic: [
          {
            sub_head: "Platform Cancellations: ",
            paras: [
              `In rare circumstances, Mechnido's Seed Learning Hub may need to cancel a course or event due to
              unforeseen circumstances, such as low enrollment or instructor unavailability. If we cancel a course or
              event, we will notify registered participants promptly and provide the option to transfer to a different
              course or event or receive a full refund. `,
            ],
          },
          {
            sub_head: "Participant Cancellations: ",
            paras: [
              `If you, as a registered participant, need to cancel your enrollment in a course or event, please refer to the
              following guidelines:`,
              `Cancellation Notice: To be eligible for a refund, you must provide a cancellation notice in writing, either
              through email or through the cancellation process on the platform, within the specified timeframe
              mentioned below`,
              `Refund Eligibility: Refunds are subject to the following conditions:`,
              `Full Refund: If you cancel at least 2 days prior to the start date of the course or event, you will be eligible
              for a full refund of the course/event fees. `,
              `Partial Refund: If you cancel within 7 days prior to the start date of the course or event, a partial refund
              may be available, subject to deductions for any non-recoverable costs incurred by Mechnido's Seed
              Learning Hub. `,
            ],
          },
          {
            sub_head: "Refund Process: ",
            paras: [
              `To request a refund, you must contact our support team at support@mseed.in and provide the necessary
              information, including your name, course/event details, and reason for cancellation. Our support team will
              guide you through the refund process and inform you about the timeline for receiving your refund.`,
              `Payment Disputes: `,
              `If you have any concerns or disputes regarding a payment made for a course or event on our platform,
              please contact our support team at support@mseed.in We will review your case promptly and work
              towards a resolution in accordance with our policies and applicable laws. `,
              `Non-Transferable Fees: `,
              `Course or event fees paid to Mechnido's Seed Learning Hub are non-transferable to other participants or to
              future courses or events unless expressly stated otherwise in writing.`,
              `Changes to Courses/Events: `,
              `Mechnido's Seed Learning Hub reserves the right to make changes to course or event schedules,
              instructors, content, or any other aspect without prior notice. In the event of such changes, registered participants will be notified promptly, and reasonable efforts will be made to minimize any inconvenience
              caused. `,
            ],
          },
        ],
      },
      {
        head: "Contact Us: ",
        sub_topic: [
          {
            sub_head: null,
            paras: [
              `If you have any questions, concerns, or requests regarding this Cancellation/Refund Policy or the
                cancellation/refund process for Mechnido's Seed Learning Hub courses or events, please contact us at:`,
              `Email: support@mseed.in`,
              `We will endeavor to respond to your inquiries in a timely manner.`,
              `By using Mechnido's Seed Learning Hub, you acknowledge that you ha`,
            ],
          },
        ],
      },
    ],
  };

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

  useEffect(() => {
    if (!loading) {
      const loc = window.location.href.split("/");
      const last = loc[loc.length - 1];
      if (last[0] === "#") {
        const id = last.slice(1, last.length);
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [loading]);

  return (
    <>
      <HomeNav
        bodyId={"refund"}
        dp={dp}
        setLoading={setLoading}
        userName={userName}
        setSignIn={setSignIn}
        signIn={signIn}
      />
      <div id="refund">
        <h1>{refund.main_head}</h1>
        <p>{refund.main_para}</p>

        <ol className="content">
          {refund.topic.map((item, num1) => {
            return (
              <li>
                <h2>
                  <span class="material-symbols-outlined">request_quote</span>
                  {item.head}
                </h2>
                <ul className="sub-topic">
                  {item.sub_topic.map((item, num2) => (
                    <li className="show">
                      {item.sub_head && <h3 onClick={null}>{item.sub_head}</h3>}
                      <div className="paras">
                        {item.paras.map((item) => (
                          <>
                            <p>{item}</p>
                          </>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default RefundPolicy;
