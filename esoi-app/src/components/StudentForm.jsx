import { useRef, React } from 'react'
import emailjs from '@emailjs/browser';

const StudentForm = () => {

    

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
        <input type="text" name="user_name" />
      <label>Email</label>
        <input type="email" name="user_email" />
      <label>Contact</label>
        <input type="email" name="user_contact" />
      <label>University</label>
        <input type="text" name="user_uni" />
      <label>Submission</label>
        <select>
            <option value="research" name="user_select"> Research </option>
            <option value="article" name="user_select"> Article </option>
            <option value="casestudy" name="user_select"> Case Study </option>
        </select>    
      <input type="submit" value="Submit" />
    </form>
  )
}

export default StudentForm