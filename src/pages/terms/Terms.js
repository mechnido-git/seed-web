import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import profile from "../../images/profile.png";
import HomeNav from "../home/homeNav/HomeNav";
import "./terms.css";
import Footer from "../../components/footer/Footer";

function Terms() {
  const [signIn, setSignIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dp, setDp] = useState(profile);

  const terms = {
    main_head: "Terms and Conditions",
    main_para: `Please read these Terms and Conditions ("Terms") carefully before using Mechnido's Seed Learning Hub (referred to as "the platform," "we," or "us"). These Terms govern your access to and use of the platform. By accessing or using the platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use the platform`,
    topic: [
      {
        head: "Use of the Platform: ",
        sub_topic: [
          {
            sub_head: "Eligibility:",
            paras: [
              "You must be at least 12 years old to use the platform. By accessing or using the platform, you represent and warrant that you meet this eligibility requirement. ",
            ],
          },
          {
            sub_head: "Account Registration:",
            paras: [
              "To access certain features of the platform, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary to keep it accurate, current, and complete. ",
            ],
          },
          {
            sub_head: "Prohibited Activities: ",
            paras: [
              "You agree not to engage in any of the following activities while using the platform:",
              "Violating any applicable laws or regulations",
              "Infringing upon the intellectual property rights of others",
              "Interfering with or disrupting the platform or its servers",
              "Uploading or transmitting viruses, malware, or any other harmful code",
              "Attempting to gain unauthorized access to the platform or its systems",
              "Engaging in any activity that may negatively impact the performance or functionality of the platform ",
            ],
          },
        ],
      },
      {
        head: "Intellectual Property: ",
        sub_topic: [
          {
            sub_head: "Ownership:",
            paras: [
              "All content and materials available on the platform, including but not limited to text, graphics, logos, images, audio clips, videos, data compilations, and software, are the property of Mechnido's Seed Learning Hub or its licensors and are protected by intellectual property laws. ",
            ],
          },
          {
            sub_head: "Limited License: ",
            paras: [
              "Subject to your compliance with these Terms, Mechnido's Seed Learning Hub grants you a limited, nonexclusive, non-transferable, revocable license to access and use the platform for personal, non-commercial purposes. ",
            ],
          },
          {
            sub_head: "Restrictions:",
            paras: [
              "You may not reproduce, modify, distribute, display, perform, or create derivative works of any content or materials on the platform without prior written permission from Mechnido's Seed Learning Hub. ",
            ],
          },
        ],
      },
      {
        head: "Third-Party Links and Content:",
        sub_topic: [
          {
            sub_head: null,
            paras: [
              "The platform may contain links to third-party websites or resources. Mechnido's Seed Learning Hub does not endorse and is not responsible for the availability, accuracy, or reliability of any content, advertising, products, or other materials on or available from such websites or resources. You acknowledge and agree that Mechnido's Seed Learning Hub shall not be liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any third-party websites or resources. ",
            ],
          },
        ],
      },
      {
        head: "Disclaimer of Warranties: ",
        sub_topic: [
          {
            sub_head: null,
            paras: [
              `The platform is provided on an "as is" and "as available" basis. Mechnido's Seed Learning Hub makes no
                  warranties or representations, whether express or implied, regarding the platform, including but not
                  limited to the accuracy, reliability, or completeness of any content or materials available on or through the
                  platform. To the fullest extent permitted by applicable law, Mechnido's Seed Learning Hub disclaims all
                  warranties, express or implied, including but not limited to implied warranties of merchantability, fitness
                  for a particular purpose, and non-infringement.`,
            ],
          },
        ],
      },
      {
        head: "Limitation of Liability: ",
        sub_topic: [
          {
            sub_head: null,
            paras: [
              `To the fullest extent permitted by applicable law, Mechnido's Seed Learning Hub shall not be liable for
                  any indirect, incidental, special, consequential, or punitive damagesarising out of or in connection with
                  your use of the platform, including but not limited to any loss of profits, revenue, data, or business
                  opportunities. Mechnido's Seed Learning Hub's total liability for any claims arising under these Terms
                  shall not exceed the amount paid by you, if any, to access or use the platform.`,
            ],
          },
        ],
      },
      {
        head: "Termination:",
        sub_topic: [
          {
            sub_head: null,
            paras: [
              `Mechnido's Seed Learning Hub reserves the right, in its sole discretion, to suspend, restrict, or terminate
                  your access to the platform at any time and for any reason without prior notice or liability. Upon
                  termination, all rights and licenses granted to you under these Terms will immediately cease.`,
            ],
          },
        ],
      },
      {
        head: "Governing Law and Jurisdiction: ",
        sub_topic: [
          {
            sub_head: null,
            paras: [
              `These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any
                  dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the
                  courts of [Jurisdiction]. `,
            ],
          },
        ],
      },
      {
        head: "Severability:",
        sub_topic: [
          {
            sub_head: null,
            paras: [
              `If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions
                  shall continue in full force and effect to the maximum extent permitted by law. `,
            ],
          },
        ],
      },
      {
        head: "Entire Agreement:",
        sub_topic: [
          {
            sub_head: null,
            paras: [
              `These Terms constitute the entire agreement between you and Mechnido's Seed Learning Hub regarding
                  your use of the platform and supersede any prior or contemporaneous agreements, communications, and
                  proposals, whether oral or written, between you and Mechnido's Seed Learning Hub.`,
            ],
          },
        ],
      },
      {
        head: "Amendments: ",
        sub_topic: [
          {
            sub_head: null,
            paras: [
              `Mechnido's Seed Learning Hub reserves the right to modify or update these Terms at any time without
                  prior notice. Any changes to the Terms will be posted on the platform. Your continued use of the platform
                  after the posting of any changes constitutes your acceptance of such changes. `,
            ],
          },
        ],
      },
      {
        head: "Contact Us",
        sub_topic: [
          {
            sub_head: null,
            paras: [
              `If you have any questions, comments, or concerns about these Terms, please contact us at:`,
              `Email: support@mseed.in`,
              `By using Mechnido's Seed Learning Hub, you acknowledge that you have read and understood these
                  Terms and agree to be bound by them. `,
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
        bodyId={"terms"}
        dp={dp}
        setLoading={setLoading}
        userName={userName}
        setSignIn={setSignIn}
        signIn={signIn}
      />
      <div id="terms">
        <h1>{terms.main_head}</h1>
        <p>{terms.main_para}</p>

        <ol className="content">
          {terms.topic.map((item, num1) => {
            return (
              <li>
                <h2>
                  <span class="material-symbols-outlined">contract_edit</span>
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

export default Terms;
