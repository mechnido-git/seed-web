import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import profile from "../../images/profile.png";
import HomeNav from "../home/homeNav/HomeNav";
import './privacy.css'
import Footer from "../../components/footer/Footer";

function PrivacyPolicy() {
    const [signIn, setSignIn] = useState(false);
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dp, setDp] = useState(profile);

    const policy = {
        main_head: "Privacy Policy",
        main_para: "This Privacy Policy outlines the types of information collected, how it is used, and the choices you have regarding your personal information when you use Mechnido's Seed Learning Hub (referred to as \"the platform,\" \"we,\" or \"us\"). By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.",
        topic: [
            {
                head: "Information We Collect: ",
                sub_topic: [
                    {
                        sub_head: "Personal Information:",
                        paras: [
                            "When you register an account or use our platform, we may collect certain personally identifiable information, including but not limited to: ",
                            "Full name",
                            "Email address",
                            "Contact number",
                            "Billing and payment information",
                            "Profile picture (optional)",
                            "Any other information you choose to provide voluntarily "
                        ]
                    },
                    {
                        sub_head: "Usage Information: ",
                        paras: [
                            "We may collect non-personally identifiable information about how you use our platform, including but not limited to: ",
                            "Log data (e.g., IP address, browser type, referring/exit pages, timestamps",
                            "Device information (e.g., device model, operating system, unique device identifiers)",
                        ]
                    },
                    {
                        sub_head: "Cookies and Similar Technologies:",
                        paras: [
                            "We may use cookies, web beacons, and other similar technologies to enhance your experience on our platform. These technologies help us collect and store certain information automatically. You can manage your preferences for cookies through your browser settings."
                        ]
                    },
                ]
            },
            {
                head: "Use of Information:",
                sub_topic: [
                    {
                        sub_head: "Provide Services:",
                        paras: [
                            "We use the information collected to deliver and improve our services, personalize your learning experience, process payments, and provide customer support. We may also use your information to communicate with you about updates, promotions, and relevant information regarding our courses and events. "
                        ]
                    },
                    {
                        sub_head: "Analytics and Research: ",
                        paras: [
                            "We may analyze and aggregate the collected information to better understand user preferences, improve our platform's functionality, and conduct research and analysis for internal purposes. ",
                        ]
                    },
                    {
                        sub_head: "Legal Compliance: ",
                        paras: [
                            "We may use your information to comply with applicable laws, regulations, or legal processes, respond to requests from public and governmental authorities, and protect our rights, privacy, safety, or property, as well as that of our users."
                        ]
                    },
                ]
            },
            {
                head: "Information Sharing:",
                sub_topic: [
                    {
                        sub_head: "Service Providers:",
                        paras: [
                            "We may share your information with trusted third-party service providers who assist us in operating our platform, such as hosting providers, payment processors, email service providers, and analytics services. These providers are bound by confidentiality obligations and are only authorized to use your information to the extent necessary to perform services on our behalf."
                        ]
                    },
                    {
                        sub_head: "Compliance with Law:",
                        paras: [
                            "We may disclose your information if required by law or in response to valid requests by public authorities (e.g., law enforcement agencies, government entities) when we believe such disclosure is necessary to comply with a legal obligation, protect our rights, prevent fraud or abuse, or ensure the safety of our users.",
                        ]
                    },
                    {
                        sub_head: "Business Transfers:",
                        paras: [
                            "In the event of a merger, acquisition, or any form of sale or transfer of some or all of our assets, we may disclose or transfer your information to the relevant third party involved in the transaction. We will notify you of any such change in ownership or control of your personal information."
                        ]
                    },
                ]
            },
            {
                head: "Data Security:",
                sub_topic: [
                    {
                        sub_head: null,
                        paras: [
                            "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure. Therefore, while we strive to protect your information, we cannot guarantee its absolute security."
                        ]
                    },
                ]
            },
            {
                head: "Your Choices:",
                sub_topic: [
                    {
                        sub_head: "Account Information:",
                        paras: [
                            "You can review, update, or delete your account information by logging into your account settings. If you wish to delete your account, please contact us using the information provided below, and we will process your request promptly."
                        ]
                    },
                    {
                        sub_head: "Communication Preferences:",
                        paras: [
                            "You can manage your communication preferences by adjusting your account settings or following the unsubscribe instructions provided in the emails we send you. Please note that even if you opt-out of receiving marketing communications, we may still send you non-promotional messages related to your account and the services we provide.",
                        ]
                    },
                    {
                        sub_head: "Cookies: ",
                        paras: [
                            "Most web browsers are set to accept cookies by default. You can modify your browser settings to block or delete cookies if you prefer. However, please be aware that disabling cookies may affect the functionality of our platform."
                        ]
                    },
                ]
            },
            {
                head: "Children's Privacy:",
                sub_topic: [
                    {
                        sub_head: null,
                        paras: [
                            "Mechnido's Seed Learning Hub is not intended for use by individuals under the age of 12. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 12, we will take steps to delete the information as soon as possible. If you believe that we may have collected personal information from a child under 12, please contact us using the information provided below. "
                        ]
                    },
                ]
            },
            {
                head: "Third-Party Links: ",
                sub_topic: [
                    {
                        sub_head: null,
                        paras: [
                            "Our platform may contain links to third-party websites or services that are not controlled or operated by us. This Privacy Policy does not apply to such third-party websites or services. We encourage you to review the privacy policies of those third parties before providing any personal information or using their services."
                        ]
                    },
                ]
            },
            {
                head: "Changes to this Privacy Policy:",
                sub_topic: [
                    {
                        sub_head: null,
                        paras: [
                            "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the \"Effective Date\" at the top of this policy will be revised. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information."
                        ]
                    },
                ]
            },
            {
                head: "Contact Us:",
                sub_topic: [
                    {
                        sub_head: null,
                        paras: [
                            "If you have any questions, concerns, or requests regarding this Privacy Policy or the privacy practices of Mechnido's Seed Learning Hub, please contact us at:",
                            "Email: support@mseed.in",
                            "We will endeavor to respond to your inquiries in a timely manner.",
                            "By using Mechnido's Seed Learning Hub, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein. ",
                        ]
                    },
                ]
            },
        ]
    }

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
                bodyId={"privacy"}
                dp={dp}
                setLoading={setLoading}
                userName={userName}
                setSignIn={setSignIn}
                signIn={signIn}
            />
            <div id="privacy">
                <h1>{policy.main_head}</h1>
                <p>{policy.main_para}</p>

                <ol className="content">
                    {policy.topic.map((item, num1) => {
                        return (
                            <li>
                                <h2>{num1+1}.{item.head}</h2>
                                <ul className="sub-topic">
                                    {item.sub_topic.map((item, num2) => (
                                        <li >
                                            {item.sub_head && <h3 >{item.sub_head}</h3>}
                                            <div className="paras">
                                                {item.paras.map(item => <>
                                                    <p>{item}</p>
                                                </>)}
                                            </div>
                                        </li>
                                    )
                                    )}
                                </ul>
                            </li>
                        )
                    })}
                </ol>
            </div>
            <Footer />
        </>
    );
}

export default PrivacyPolicy;
