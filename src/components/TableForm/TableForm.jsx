import React from 'react'
import './TableForm.css'
const TableForm = () => {
    return (
        <section className="table_main">
            <div className="container table_main ">
                <div className="row ">
                    <div className="col-md-6 table_text ">
                        <h3>Book A Table</h3>
                        <h1>Book Your Table For Private Dinners & Happy Hours</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.</p>
                    </div>
                    <div className="col-md-5 form_div">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control"  placeholder="Name" />
                            <label for="floatingPassword">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="tel" className="form-control"  placeholder="Mobile" />
                            <label for="floatingPassword">Mobile</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="date" class="form-control datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker"/>
                            <label for="floatingPassword">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="time" className="form-control"  placeholder="Time" />
                            <label for="floatingPassword">Time</label>
                        </div>
                        <div class="control-group mb-3">
                            <div class="input-group">
                                <select class="form-select">
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
                                </div> */}
                            </div>
                        </div>
                        <div>
                            <button class=" w-100 btn custom-btn" type="submit">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TableForm
