import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';

const Contact = () => {
  return(
  <Layout>
    <SEO title='Contact |' />
    <div className='ContactStyle'>
      <div className='wrapper'>
        <h1>Contact</h1>
        <form action='/' name='contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field'>
          <input type='hidden' name='form-name' value='contact' />
          <input type='text' name='name' placeholder='What is your name?...' className='input' />
          <input type='email' name='email' placeholder='What is your email?...' className='input' />
          <textarea type='text' name='message' placeholder='What can we help you with?...' className='textarea' />
          <button type='submit' className='btn'>Send!</button>
        </form>
      </div>
    </div>
  </Layout>
  );
}
export default Contact;
