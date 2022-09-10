import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';


const Form = () => {
    const [practical, setPractical] = useState("hidden");
    const [educational, setEducational] = useState("hidden");
    const [cvdone, setCvdone] = useState("notdone");
    const [INFO, setINFO] = useState([{name:"", email:"", phone:""}, {school:"", titlestudy:"", datestudy:""},{companyname:"", positiontitle:"", maintask:"", from:"", to:""} ]);
    const [basicobj, setBasicobj] = useState({name:"", email:"", phone:""});
    const [educatobj, setEducatobj] = useState({school:"", titlestudy:"", datestudy:""});
    const [practicalobj, setPracticalobj] = useState({companyname:"", positiontitle:"", maintask:"", from:"", to:""});


    function submitfunction(e){
        e.preventDefault();
        setINFO((previnfo) => {;return([basicobj, educatobj, practicalobj])});
        setCvdone("done");
    }

    useEffect(() => {console.log(INFO)}, [INFO])
    
    function makeeducationalvisible(){
        setEducational("");
    }

    function makepracticalvisible(){
        setPractical("");
    }
    
    function basicobjfunc(e){
        setBasicobj(prevbasicobj => ({
            ...prevbasicobj,
            [e.target.id]: e.target.value
        }))
        console.log(basicobj);
    }

    function educationalobjfunc(e){
        setEducatobj(preveducatobj => ({
            ...preveducatobj,
            [e.target.id]: e.target.value
        }))
    }

    function practicalobjfunc(e){
        setPracticalobj(prevbasicobj => ({
            ...prevbasicobj,
            [e.target.id]: e.target.value
        }))
    }

    function editbutton(e){
        setINFO([{name:"", email:"", phone:""}, {school:"", titlestudy:"", datestudy:""},{company:"", position:"", main:"", from:"", to:""}]);
        setCvdone("notdone");
    }


    return(
        <>
        <form onSubmit={submitfunction} className={cvdone}>
            <div className="font12 bold">Basic Information</div>
            <fieldset>
                <label htmlFor="name">
                Name
                    <input type="text" id="name" placeholder="Name?" onChange={basicobjfunc}></input>
                </label>
                <label htmlFor="email">
                Email
                    <input type="text" id="email" placeholder="Email" onChange={basicobjfunc}></input>
                </label>
                <label htmlFor="phone">
                Telephone
                    <input type="tel" id="phone" placeholder="Telephone" onChange={basicobjfunc}></input>
                </label>
            </fieldset>
            <div className="font12 bold">Educational Experience</div>
            <div className="add" onClick={makeeducationalvisible}>+</div>
            <fieldset className={educational}>
                <label htmlFor="school">
                    School
                    <input list="schools" id="school" placeholder="School" onChange={educationalobjfunc}></input>
                </label>
                <label htmlFor="titlestudy">
                    Title of study
                    <input type="text" id="titlestudy" placeholder="Title of study" onChange={educationalobjfunc}></input>
                </label>
                <label htmlFor="datestudy">
                    Date of study
                    <input type="text" id="datestudy" placeholder="Date of study" onChange={educationalobjfunc}></input>
                </label>
            </fieldset>
            <div className="font12 bold">Practical Experience</div>
            <div className="add" onClick={makepracticalvisible}>+</div>
            <fieldset className={practical}>
                <label htmlFor="companyname">
                    Company Name
                    <input type="text" id="companyname" placeholder="Company Name" onChange={practicalobjfunc}></input>
                </label>
                <label htmlFor="positiontitle">
                    Position Title
                    <input type="text" id="positiontitle" placeholder="Position Title" onChange={practicalobjfunc}></input>
                </label>
                <label htmlFor="maintask">
                    Main Task
                    <input type="text" id="maintask" placeholder="Main Task" onChange={practicalobjfunc}></input>
                </label>
                <div className="fromtodates">
                    <label htmlFor="from">
                       From
                       <input type="date" id="from" onChange={practicalobjfunc}></input>
                    </label>
                    <label htmlFor="to">
                       To
                       <input type="date" id="to" onChange={practicalobjfunc}></input>
                    </label>
                </div>
            </fieldset>
            <button>Submit</button>    
        </form>
        <div className={cvdone}>
            <div className="infocontainer">
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[0].name}</div>
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[0].email}</div>
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[0].phone}</div>
            </div>
            <div className="infocontainer">
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[1].school}</div>
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[1].titlestudy}</div>
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[1].datestudy}</div>
            </div>
            <div className="infocontainer">
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[2].companyname}</div>
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[2].positiontitle}</div>
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[2].maintask}</div>
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[2].from}</div>
                <div className="infotitle">Company Name</div>
                <div className="info">{INFO[2].to}</div>
            </div>
            <button className="edit" onClick={editbutton}>Edit</button>
        </div>
        </>
    )
}

export default Form;
