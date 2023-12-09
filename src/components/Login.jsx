import './Login.css';

import axios from "axios";
import { useFormInputValidation } from "react-form-input-validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const [fields, errors, form] = useFormInputValidation(
    {
      role: "",
      nic: "",
      pswd: "",
    },
    {
      role: "required",
      nic: "required|between:5,15",
      pswd: "required|between:5,15",
    }
  );

  const onSub = async (event) => {
    const isvalid = await form.validate(event);
    if (isvalid) {
      try {
        await axios
          .post("http://localhost/project/20it0494/backend/login.php", {
            role: fields.role,
            nic: fields.nic,
            password: fields.pswd,
          })
          .then(function (response) {
            if (response.data) {
              if (response.data.role === "student") {
                popupStudent(response.data);
              } else if (response.data.role === "teacher") {
                popupTeacher(response.data);
              } else {
                popuperror();
              }
            } else {
              popuperror();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };
  const popupStudent = (x) => {
    localStorage.setItem("Role", x.role);
    localStorage.setItem("Name", x.fname);
    localStorage.setItem("Nic", x.nic);

    // setting cookie for student
    const d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = "userCookie=" + x.nic + x.role + ";" + expires + ";path=/";

    toast.success("Student: Successfully Logged in!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      window.location= "http://localhost:3000/";
    }, 2000);
  };
  const popupTeacher = (x) => {
    localStorage.setItem("Role", x.role);
    localStorage.setItem("Name", x.fname);
    localStorage.setItem("Nic", x.nic);

    // setting cookie for teacher
    const d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = "userCookie=" + x.nic + x.role + ";" + expires + ";path=/";

    toast.success("Teacher: Successfully Logged in!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      window.location= "http://localhost:3000/";
    }, 2000);
  };
  const popuperror = () => {
    toast.error("Incorrect Password and Username", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

    return(
        <div class="log">   
        <section>     
            <form   id="loginForm" name="loginForm" onSubmit={onSub}>
            <div class="Lheading text-center"><u>LOGIN</u></div>
            <div class="log-details">

                <div class="log-box text-center">
                    <span class="Ldetails " for="NIC"> NIC </span><br/>
                    <input type="text" name="nic" placeholder="Enter Your NIC"  id="nic"
                     onChange={form.handleChangeEvent} onBlur={form.handleBlurEvent} value={fields.nic}/>
                        <label className="error" style={{ color: "red" }}>
                          {errors.nic ? errors.nic : ""}
                        </label>
                </div>              
                        
                <div class="log-box text-center">
                    <span class="Ldetails" for="Password"> Password </span><br/>
                    <input type="Password" name="pswd" placeholder="Enter Password" id="pswd" 
                    onChange={form.handleChangeEvent} onBlur={form.handleBlurEvent} value={fields.pswd}/>
                        <label className="error" style={{ color: "red" }}>
                          {errors.pswd ? errors.pswd : ""}
                        </label>
                </div>
                
                        
                <div class="bttn">
                    <div class="d" for="jobType"><center><u>CHOOSE JOB ROLE</u></center></div>
                <div class="circle">
                    <input type="radio"  name="role" id="role" value="student"
                     onChange={form.handleChangeEvent} onBlur={form.handleBlurEvent} />Student<br/>
                    <input type="radio"  name="role" id="role2" value="teacher" 
                     onChange={form.handleChangeEvent} onBlur={form.handleBlurEvent}/>Teacher

                        <label className="error mb-3" style={{ color: "red" }}>
                          {errors.role ? errors.role : ""}
                        </label>
                </div>
                </div>
                <div class="Lbutton">
                    <input  type="submit" name="login" value="Login"/>
                </div> 


            </div>
            </form>
            <ToastContainer />
      </section>
        </div>
    )
}
export default Login;