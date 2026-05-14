import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    mode: 'onChange'
  });

  const existingUsernames = ['admin', 'user123', 'john'];
  const checkIfUsernameExist = async (username) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return existingUsernames.includes(username);
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    reset();
  };

  // const validateName = (value) => {
  //   if (value === 'admin') {
  //     return 'Admin is not allowed';
  //   }
  //   return true;
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input 
          {...register('name', { 
            required: true, 
            minLength: 2,
            validate: {
              notAdmin: (value) => value !== "admin" || "Admin is not allowed",
              isNotNumber: (value) => isNaN(value) || "Name cannot be number",
              checkUsername: async (value) => {
                const exist = await checkIfUsernameExist(value);
                return !exist || 'Username already taken';
              }
            }
          })} 
        />
      </label>
      {errors.name && <p>{errors.name.message || "Name is required and must be at least 2 characters long."}</p>}
      <br />
      <label>
        Email:
        <input 
          {...register('email', { 
            required: true, 
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 
          })} 
        />
      </label>
      {errors.email && <p>Invalid email format.</p>}
      <br />
      <label>
        Password:
        <input type='password' {...register('password', { 
            required: true, 
            minLength: 2
            })}>
        </input>
      </label>
      {errors.password && <p>{errors.password.message}</p>}
      <br />
      <label>
        Confirm Password:
        <input type='password' {...register('confirmPassword', { 
            required: true, 
            minLength: 2,
            validate: value => value === watch('password') || 'Passwords do not match'
            })}>
        </input>
      </label>
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => reset()}>Reset</button> {/* Reset button */}
    </form>
  );
}


export default App;
