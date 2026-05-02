import { useState } from 'react';
import './App.css';

function App() {
  const[firstName, setFirstName]=useState("");
  const[middleName, setMiddleName]=useState("");
  const[lastName, setLastName]=useState("");

  const[email ,setEmail]=useState("");
  const[contact, setContact]=useState("");

  const[gender, setGender]=useState("male");

  const[subject, setSubject]=useState({
    English: true,
    Physics: false,
    ComputerScience: false
  });
  const handleSubjectChange = (sub) => {
        setSubject((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }
      )
    )
  };
  

  const[resume, setResume]=useState("");
  const[url, setUrl]=useState("");

  const[selectOption, setSelectOption]=useState("");

  const[about, setAbout]=useState("");

  const handlereset=()=>{

    //reset all the values

      setFirstName("");
      setMiddleName("");
      setLastName("");

      setEmail("");
      setContact("");

      setGender("male");

      setSubject({
        English:true,
        Physics:false,
        ComputerScience:false
      })

      setResume("");
      setUrl("");

      setSelectOption("");

      setAbout("");

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(
      firstName,
      middleName,
      lastName,
      email,
      contact,
      gender,
      subject,
      resume,
      url,
      selectOption,
      about
    );
  }

  return(
    <div className='App'>

    

    <fieldset> 
      <h1>Form in React</h1>
      

    <form onSubmit={handleSubmit}>
    
    <div className='name' >
    <label for="First Name">First Name*</label> <br></br>
      <input  id="First Name" 
              type="text" 
              placeholder="First Name" 
              value={firstName} 
              onChange={(e)=>setFirstName(e.target.value)} 
              required></input>
    <br></br>

    <label for="Middle Name ">Middle Name*</label> <br></br>
      <input  id="Middle Name" 
              type="text" 
              placeholder="Middle Name" 
              value={middleName}
              onChange={(e)=>setMiddleName(e.target.value)}  
              required></input>
    <br></br>

    <label for="Last Name">Last Name*</label> <br></br>
      <input  id="Last Name" 
              type="text" 
              placeholder="Last Name" 
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}  
              required></input>
    <br></br>


    

    <label for="Email">Email*</label> <br></br>
      <input  id="Email" 
              type="Email" 
              placeholder="XXX@gmail.com" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              required></input>
    <br></br>

    <label for="Contact">Contact Number*</label> <br></br>
      <input id="Contact" 
             type="text" 
             size="13" 
             placeholder="Mobile Number" 
             value={contact} 
             onChange={(e)=>setContact(e.target.value)} 
             required></input>
    <br/>
    </div>




    <div>
    <label for="gender">Gender*</label><br/>

      <input id="male" 
             name="gender" 
             value="male"  
             type="radio"
             checked={gender==="male"}
             onChange={(e)=>setGender(e.target.value)} 
              ></input>
    Male
      <input id="female" 
             name="gender" 
             value="female" 
             type="radio" 
             checked={gender==="female"}
             onChange={(e)=>setGender(e.target.value)} 
             ></input>
    Female
      <input id="others" 
             name="gender" 
             value="other"  
             type="radio" 
             checked={gender==="other"}
             onChange={(e)=>setGender(e.target.value)} 
             ></input>
    Other
</div>



    <div>
    <label for="Subject">Your favorite Subject*</label><br/>
    
      <input id="English" 
             name="Subject" 
             type="checkbox" 
             checked={subject.English === true}
                        onChange={() =>
                            handleSubjectChange("English")}
             ></input>
    English
      <input id="Physics" 
             name="Subject" 
             type="checkbox" 
             checked={subject.Physics === true}
                        onChange={() =>
                            handleSubjectChange("Physics")}
             ></input>
    Physics
      <input id="Computer Science" 
             name="Subject" 
             type="checkbox" 
             checked={subject.ComputerScience === true}
                        onChange={() =>
                            handleSubjectChange("ComputerScience")}
             ></input>
    Computer Science
    </div>




    <br></br>
    <label for="file">Upload your Resume*</label><br></br>
      <input name="file" 
             id="file" 
             type="file" 
             onChange={(e)=>setResume(e.target.files[0])} 
             required></input>

    <br></br>
    <label for="url">Enter Your URL*</label><br></br>
      <input name="url" 
             id="url" 
             type="url" 
             placeholder="Enter the Url"
             value={url}
             onChange={(e)=>setUrl(e.target.value)} 
             ></input>

    
    
    <br></br>
    Select your choice<br/>

<select
  value={selectOption}
  onChange={(e) => setSelectOption(e.target.value)}
>
  <option value="" disabled>Select your ans</option>

  <optgroup label="Beginners">
    <option value="html">HTML5</option>
    <option value="css">CSS3</option>
    <option value="js">JavaScript</option>
  </optgroup>

  <optgroup label="Intermediate">
    <option value="cpp">C/C++</option>
    <option value="python">Python</option>
    <option value="java">Java</option>
  </optgroup>

  <optgroup label="Advanced">
    <option value="react">React.js</option>
    <option value="node">Node.js</option>
    <option value="express">Express.js</option>
  </optgroup>

  <optgroup label="Pro">
    <option value="mysql">MySQL</option>
    <option value="sql">SQL</option>
    <option value="mongodb">MongoDB</option>
  </optgroup>
</select>


    <br></br>
    <label for="me">About you*</label><br></br>
      <textarea name="me" 
                id="me" 
                placeholder="Tell us about yourself" 
                value={about}
                onChange={(e)=>setAbout(e.target.value)}
                required></textarea>
    <br></br>



    <button type="button" 
            onClick={handlereset}
            >Reset</button>
    
    
    <button type="submit" 
            value="submit" 
            onSubmit={(e)=>handleSubmit(e)}
            >Submit</button>


    </form>
    </fieldset>
    </div>
  ); 
}

export default App;
