"use client";

import ContentPadding from "../Layout/ContentPadding/ContentPadding";
import LayoutWrapper from "../Layout/LayoutWrapper";
import styles from "./ContactForm.module.css";
import { useState } from "react";
import Image from "next/image";
import Img7 from "../../../public/images/img7.png";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    senderEmail: "",
    companyName: "",
    currentWebsiteUrl: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev: any) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <div className={styles.content}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.circleContainer}>
                {/* <CircleImage /> */}
              </div>
              <h2 className={styles.heading}>
                Request a <span className={styles.highlight}>Demo</span>
              </h2>
              <p className={styles.copy}>
                Feel free to contact us any time. We will glady answer any
                questions you have. We can&#39;t wait to hear from you!
              </p>
              <div className={styles.imgContainer}>
                <Image src={Img7} alt='img' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <form
                className={styles.form}
                // action={async (formData) => {
                //   const { data, error } = await sendEmail(formData);

                //   if (error) {
                //     toast.error(error);
                //     return;
                //   }
                //   toast.success("Email sent successfully!");
                //   setInputs({
                //     firstName: "",
                //     lastName: "",
                //     senderEmail: "",
                //     companyName: "",
                //     currentWebsiteUrl: "",
                //     message: "",
                //   });
                // }}
              >
                <div className={styles.namesContainer}>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='firstName'>
                      First Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id='firstName'
                      name='firstName'
                      type='text'
                      value={inputs.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='lastName'>
                      Last Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id='lastName'
                      name='lastName'
                      type='text'
                      value={inputs.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.everythingElse}>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='email'>
                      Email <span className={styles.required}>*</span>
                    </label>
                    <span>So we can respond. We won&#39;t send you spam.</span>
                    <input
                      id='senderEmail'
                      type='email'
                      name='senderEmail'
                      value={inputs.senderEmail}
                      onChange={handleChange}
                      required
                      maxLength={500}
                    />
                  </div>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='companyName'>Company Name</label>
                    <input
                      id='companyName'
                      type='text'
                      name='companyName'
                      value={inputs.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='currentWebsiteUrl'>
                      Current Website URL
                    </label>
                    <input
                      id='currentWebsiteUrl'
                      type='text'
                      name='currentWebsiteUrl'
                      value={inputs.currentWebsiteUrl}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.labelInputBox}>
                    <label htmlFor='message'>
                      Message <span className={styles.required}>*</span>
                    </label>
                    <span>No solicitations, please.</span>
                    <textarea
                      id='message'
                      name='message'
                      maxLength={5000}
                      value={inputs.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.btnBtnContainer}>
                  {/* <SubmitButton /> */}
                </div>
              </form>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default ContactForm;
