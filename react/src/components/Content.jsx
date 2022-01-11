import React from 'react'  
import DatePicker from "react-datepicker";
import * as nasaService from '../services/nasaCalls'
import "react-datepicker/dist/react-datepicker.css";

class Content extends React.Component{
  state = {
    startDate: '',
    endDate: '',
    page: 0,
  }

  componentDidMount(){
    nasaService.initialApodCall()
    .then((res)=>console.log(res.items))
  }

  setStartDate = (date) => {
    this.setState({startDate: date})
  }
  render(){
    return(
      <div className="album py-5 bg-light">

<div className="container">
  <div className="row">
    <div className="col text-center">
    <DatePicker  placeholderText='Select your start date' selected={this.state.startDate} onChange={(date) => this.setStartDate(date)} />
    </div>
    <div className="col order-5 text-center">
    <DatePicker placeholderText='Select your end date' selected={this.state.startDate} onChange={(date) => this.setStartDate(date)} />
    </div>
    <div className="col order-1 text-center">
    -
    </div>
  </div>
</div>


  <div className="container">
   
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className="col">
        <div className="card shadow-sm">
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height={225}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: صورة مصغرة"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              صورة مصغرة
            </text>
          </svg>
          <div className="card-body">
            <p className="card-text">
              هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا
              المحتوى أطول قليلاً.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  عرض
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  تعديل
                </button>
              </div>
              <small className="text-muted">9 دقائق</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
       </div>
      </div>
  </div>
</div>
    )
  }
}

export default Content