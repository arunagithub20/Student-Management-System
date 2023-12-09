
import { useState, useEffect } from "react";
import axios from "axios";


function StudentProfile() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.post("http://localhost/project/20it0494/backend/profile.php", {
            role: localStorage.getItem('Role'),
            nic: localStorage.getItem('Nic')
        }).then(function (response) {
            setdata(response.data);
            // console.log(response.data);
        }).catch(function (response) {
            alert("Something went wrong");
        });

        
    }, []);
    return(
<div className="a">
    <section className="b">
                <div className="c">
                    <div >
                        <div className="d">
                        <center> <img src="https://www.seekpng.com/png/detail/46-463314_v-th-h-user-profile-icon.png" alt="..." width='150' /></center> 
                            </div><br/>
                            <div className="e">
                                <div className="f">
                                <h3 className="uname text-center">{data.fname} {data.lname}</h3>
                                <center><span className=" h4">{data.role}</span></center>
                                </div>
                                <div className="udetails">
                                <ul className="  list-unstyled text-center" >
                                    <li className=""><span className=""><b>Role :</b></span>  <span className="ml-2">{data.role}</span> </li>
                                    <li className=""><span className=""><b>NIC :</b></span>   <span className="ml-2">{data.nic}</span> </li>
                                    <li className=""><span className=""><b>First Name :</b></span>  <span className="ml-2">{data.fname}</span> </li>
                                    <li className=""><span className=""><b>Last Name :</b></span>  <span className="ml-2">{data.lname}</span> </li>
                                    <li className=""><span className=""><b>E-mail :</b> </span>   <span className="ml-2">{data.email}</span> </li>
                                    <li className=""><span className=""><b>Phone Number :</b></span>   <span className="ml-2">{data.mobile}</span> </li>
                                    <li className=""><span className=""><b>Student ID :</b></span>    <span className="ml-2">{data.stuid}</span> </li>
                                </ul>
                                </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
}

export default StudentProfile;