import { useState } from 'react';
import AstrologyChart from './components/AstrologyChart'
import { mockData } from './AstroData'
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: 'Sanji Vinsmoke',
    gender: 'male',
    dateOfBirth: '1990-01-01',
    timeOfBirth: '12:00',
    location: 'New York',
    email: 'Please type you email id',
    agree: false
  });
  const [chartData, setChartData] = useState(null);

  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData(prevData => ({ ...prevData, [event.target.name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setChartData(mockData)
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
        </label>
        <label htmlFor='gender'>Gender:
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <div className="birth">
          <label htmlFor='dateOfBirth'>Date of Birth:
            <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange}/>
          </label>
          <label htmlFor='timeOfBirth'>Time of Birth:
            <input type="time" id="timeOfBirth" name="timeOfBirth" value={formData.timeOfBirth} onChange={handleChange}/>
          </label>
        </div>
        <label htmlFor='location'>Birth Location:
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange}/>
        </label>
        <label htmlFor="email">Email: 
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
        </label>
        <label htmlFor="agree" className='conditions'>
          <input type="checkbox" id="agree" name="agree" checked={formData.agree} onChange={handleChange}/>
          <p>I agree to the terms and conditions</p>
        </label>
        <button type="submit" className='btn-grad'>Get Details</button>
      </form>
      {chartData && <AstrologyChart data={chartData}/>}
    </>
  );
}

export default App;
