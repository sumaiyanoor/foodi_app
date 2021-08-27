import React from 'react';
import './form-input-style.css';

class FromInput extends React.Component {
    state = {
        account : {
            name : "" ,
            email : "" ,
            mobile : "" ,
            date : "" ,
            time : ""
        }
    };

    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Book Completed");
    };
    
    render() { 
        const {account} = this.state;
        return ( 
        <div className="col-md-5 form_div"> 
        
            {/* form is now working now you can add securety function 
            with joi , firebase or another way*/}

            <form onSubmit={this.handleSubmit}>
            <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control"  
                    placeholder="Name"
                    name = "name" 
                    value = {account.name}
                    onChange={this.handleChange}
                />
            <label htmlFor="name">Name</label>
            </div> 

            <div className="form-floating mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="Email" 
                    name = "email"
                    value={account.email}
                    onChange={this.handleChange}
                />
            <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3">
                <input 
                    type="tel" 
                    className="form-control"  
                    placeholder="Mobile" 
                    name ="mobile"
                    value={account.mobile}
                    onChange={this.handleChange}
                />
            <label htmlFor="mobile">Mobile</label>
            </div>

            <div className="form-floating mb-3">
                <input 
                    type="date" 
                    class="form-control datetimepicker-input" 
                    placeholder="Date" data-target="#date" 
                    data-toggle="datetimepicker"
                    name ="date"
                    value={account.date}
                    onChange={this.handleChange}
                />
            <label htmlFor="date">Date</label>
            </div>

            <div className="form-floating mb-3">
                <input 
                    type="time" 
                    className="form-control"  
                    placeholder="Time" 
                    name ="time"
                    value={account.time}
                    onChange={this.handleChange}
                />
            <label htmlFor="time">Time</label>
            </div>

            <div className="control-group mb-3">
                <div className="input-group">
                    <select className="form-select">
                        <option selected>Guest</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guest</option>
                        <option value="3">3 Guest</option>
                        <option value="4">4 Guest</option>
                        <option value="5">5 Guest</option>
                        <option value="6">6 Guest</option>
                        <option value="7">7 Guest</option>
                        <option value="8">8 Guest</option>
                        <option value="9">9 Guest</option>
                        <option value="10">10 Guest</option>
                    </select>
                                {/* <div class="input-group-append">
                                <div class="input-group-text"><i class="fa fa-chevron-down"></i></div>
                                </div>   */}
                </div>
            </div>
            
            <button className=" w-100 btn custom-btn" type="submit">
                Book Now
            </button>
            </form>
        </div> 
         );
    }
}
 
export default FromInput;