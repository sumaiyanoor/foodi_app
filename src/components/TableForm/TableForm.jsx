import React from 'react';
import FormInput from '../../pages/form-page/form-page';
import './TableForm.css';

const TableForm = () => {
    return (
        <div className="table_main">
            <div className="container table_main ">
                <div className="row ">
                    <div className="col-md-6 table_text ">
                        <h3>Book A Table</h3>
                        <h1>Book Your Table For Private Dinners & Happy Hours</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur
                        facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, 
                        viverra quis sem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretiummi.
                        Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, 
                        viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. 
                        Aliquam interdum at lacus non blandit.</p>
                    </div>
                    <FormInput />
                </div>
            </div>
        </div>
    )
}

export default TableForm