import React from 'react';
import './App.css';

function App() {
  const [user,setUser]=React.useState();
  const [jobs,setJobs]=React.useState();
  React.useEffect(()=>{
    //fetch call for user data
    fetch("http://refertest.pythonanywhere.com/user/data")
    .then(res=>res.json())
    .then(data=>{setUser(data.data)})
    //fetch call for jobs data
    fetch("http://refertest.pythonanywhere.com/job/openings")
    .then(res=>res.json())
    .then(data=>{setJobs(data.data)})
  },[])
  return (
    <div>
      <div className='d-flex justify-content-between bg-dark text-light p-2' style={{fontWeight:'bold'}}>
        <span className='ms-3'>Home</span>
      <div className='me-3'>
        <span className='me-4'>{user && user.college}</span>
        <img src={user && user.pictureUrl} width="25px" style={{borderRadius:"50%"}}/>
        <span className='ms-1'>{user && user.name}</span>
      </div>
      </div>
      <div className='d-flex flex-wrap justify-content-around m-4'>
        {
          jobs && jobs.map((job,i)=>{
            return(
              <div className='card p-4 m-3 rounded shadow' style={{width:"450px"}}>
                <p>Designation : {job.designation}</p>
                <p>Company : {job.company}</p>
                <p>Location : {job.location}</p>
                <p>Minimum experience(years) : {job.min_experience==0 ? 'fresher': job.min_experience}</p>
                <p>Skills : {job.skills.join(', ')}</p>
              </div>
            )
          })
        }
      </div>
      </div>
  );
}

export default App;
