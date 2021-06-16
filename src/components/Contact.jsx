import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });

    const InputEvent = (event) =>{
        const {name, value} = event.target;

        setData((preVal) => {
            return {
               ... preVal,
                [name]:value,
            };
        });
    };

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My phone no is ${data.phone}. my email is ${data.email}. my msg is ${data.msg}`);
    };

  return (
    <>
      <div className="my-5">
          <h1 className="text-center">Conatct Us</h1>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                  <form onSubmit= {formSubmit} >
                      <div className="mb-3">
                          <input type="text" name="fullname" value={data.name} onChange={InputEvent} className="form-control" placeholder="enter name.." />
                      </div>
                      <div className="mb-3">
                          <input type="text" name="phone" value={data.phone} onChange={InputEvent} className="form-control" placeholder="enter phone.." />
                      </div>
                      <div className="mb-3">
                          <input type="email" name="email" value={data.email} onChange={InputEvent} className="form-control" placeholder="enter email.." />
                      </div>
                      <div className="mb-3">
                          <textarea name="msg" value={data.msg} onChange={InputEvent} id="desc"  rows="3" className="form-control"></textarea>
                      </div>
                      <button type= "submit" className="btn btn-outline-primary">Submit</button>
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Contact
