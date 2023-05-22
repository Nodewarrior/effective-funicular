import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: 'Sanji Vinsmoke',
    gender: 'male',
    dateOfBirth: '1990-01-01',
    timeOfBirth: '12:00 PM',
    location: 'New York',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //handle submission here
    console.log(formData);
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name:
        <input type="text" id="name" value={formData.name} onChange={handleChange}/>
      </label>
      <label htmlFor='gender'>
        Gender:
        <select id="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <div className="birth">
        <label htmlFor='date'>
          Date of Birth:
          <input type="text" id="date" />
        </label>
        <label htmlFor='time'>
          Time of Birth:
          <input type="text" id="time" />
        </label>
      </div>
      <label htmlFor='birthLocation'>
        Birth Location:
        <input type="text" id="birthLocation" value={formData.location} onChange={handleChange}/>
      </label>
      <label htmlFor="emailId">
        Email: 
        <input type="email" id="emailId" />
      </label>
      <label htmlFor="agree" className='conditions'>
        <input type="checkbox" id="agree" />
        <p>I agree to the terms and conditions</p>
      </label>
      <label htmlFor="submit">
        <button type="submit" className='btn-grad'>Get Details</button>
      </label>
    </form>
  )
}

export default App
