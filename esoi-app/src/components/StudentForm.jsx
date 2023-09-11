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

    <div className="block w-4/5 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    
      <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 gap-4 ">
            {/* <!--First name input--> */}
            <TEInput
              type="email"
              label="First name"
              className="mb-6"
            ></TEInput>

            {/* <!--Last name input--> */}
            <TEInput
              type="password"
              label="Last name"
              className="mb-6"
            ></TEInput>
          </div>

          {/* <!--Email input--> */}
          <TEInput
            type="email"
            label="Email address"
            className="mb-6"
          ></TEInput>

          {/* <!--Password input--> */}
          <TEInput
            type="password"
            label="Password"
            className="mb-6"
          ></TEInput>

          {/* <!--Submit button--> */}
          <TERipple rippleColor="light" className="w-full">
            <button
              type="button"
              className="block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
            >
              Sign up
            </button>
          </TERipple>
      </form>
  </div>
  )
}

export default StudentForm 

      /*<label>Name</label>
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
      <input type="submit" value="Submit" />*/