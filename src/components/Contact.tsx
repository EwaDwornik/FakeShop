import React from 'react';
import {Formik, Field, Form, FormikHelpers} from "formik";
import * as Yup from 'yup';
import {ContactValues} from "../model";
import facebook from "../images/Facebook-icon.png";
import emailjs from 'emailjs-com';


const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short')
        .max(50, 'Too long')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    subject: Yup.string().min(10, 'Too short').required('Required'),
    message: Yup.string().min(20, 'Too short').required('Required'),
});


// Simple contact page.
const Contact = () =>{

    const templateParams = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    return (
        <div>
            <div className="contact-background">
                <div><a href="https://www.facebook.com/nofutureyoga" target="_blank"><img src={facebook} alt={facebook}></img></a>
                </div>
                <div><a href="mailto: ewa@nofuture.yoga">ewa@nofuture.yoga
                </a>
                </div>
            </div>

            <div className="contact-box">
                <div>

                </div>
                <Formik
                    initialValues={templateParams}
                    validationSchema={ContactSchema}
                    onSubmit={(
                        values: ContactValues,
                        {setSubmitting}: FormikHelpers<ContactValues>
                    ) => {
                        // @ts-ignore
                        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID , values, process.env.REACT_APP_USER_ID)
                            .then(function(response) {
                                console.log('SUCCESS!', response.status, response.text);
                            }, function(error) {
                                console.log('FAILED...', error);
                            });

                        setTimeout(() => {
                            alert("your message has been sent! We will answer as soon as possible" );
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({errors, touched}) => (
                        <Form className="contactForm ">
                            <div className="pos-relative">
                                <label htmlFor="Name">name</label>
                                <Field className="effect-underline" name="name" placeholder="Ewok"/>
                                <span className="focus-border"></span>
                                {errors.name ? (
                                    <div>{errors.name}</div>
                                ) : null}
                            </div>
                            <div className="pos-relative">
                                <label htmlFor="email">e-mail</label>
                                <Field
                                    className="effect-underline"
                                    name="email"
                                    placeholder="ewok@sw.com"
                                    type="email"
                                />
                                <span className="focus-border"></span>
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            </div>
                            <div className="pos-relative">
                                <label htmlFor="subject">subject</label>
                                <Field className="effect-underline" name="subject" placeholder="subject"/>
                                {errors.subject ? (
                                    <div>{errors.subject}</div>
                                ) : null}
                                <span className="focus-border"></span>
                            </div>
                            <div className="pos-relative">
                                <label htmlFor="message">message</label>
                                <Field className="effect-underline" component='textarea' row={7} id="message"
                                       name="message"
                                       placeholder="message"/>
                                <span className="focus-border"></span>
                                {errors.message ? (
                                    <div>{errors.message}</div>
                                ) : null}

                            </div>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>

    )
        ;
}

export default Contact;






