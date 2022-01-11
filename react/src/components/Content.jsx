import React from 'react'  
import DatePicker from "react-datepicker";
import * as nasaService from '../services/nasaCalls'
import "react-datepicker/dist/react-datepicker.css";

class Content extends React.Component{
  state = {
    visibility: true,
    startDate: '',
    endDate: '',
    quantity: 9,
    startObject: {},
    endObject: {}
  }

  componentDidMount(){
    // console.log(this.state.images.items)
    // this.setState({
    //   mappedImages: this.state.images.items.map(this.mapImages)
    // }) 
    // nasaService.initialApodCall()
    // .then((res)=> this.setState({mappedImages: res.items.map(this.mapImages)}))
  }

  // Map through the returned images and set box contents. 
  // Set them to state, then render
  mapImages = (image) => {
    return <div key={image.copyright} className="col">
    <div className="card shadow-sm">
    
      <img style={{'width': '100%', 'height': '100%'}} src={image.url} alt={image.media_type}/>
     <div style={{'maxHeight': '250px', 'overflow-y': 'scroll'}} className="card-body align-items-stretch flex-shrink">
        <p className="card-text ">
          {image.explanation}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <b>{image.copyright}</b>
            
            </div>
          <small className="text-muted">{image.date}</small>
        </div>
      </div>
    </div>
  </div>
  }

  // Get current month for date selector
  getSelectedMonth = (date) => {
    const dateString = date.toString()
    const dateStringSplit = dateString.split(' ')
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    const month_index =  months.findIndex((month) => month === dateStringSplit[1])
    const dateObject = {
      year: parseInt(dateStringSplit[3]),
      month: month_index + 1,
      day: parseInt(dateStringSplit[2]),
    }
    return dateObject
  }

  // Set the start date for calandar, or allow to specify date plus quantity.
  setStartDate = (date) => {
    const startObject = this.getSelectedMonth(date)
    this.setState({startDate: date, startObject})
  }
  // Set end date, can only be paired with start date
  setEndDate = (date) => {
    const endObject = this.getSelectedMonth(date)
    this.setState({endDate: date, endObject})
  }

   formatDate(d)
  {
    const date = new Date(d)
    let dd = date.getDate(); 
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear(); 
    if(dd<10){dd='0'+dd} 
    if(mm<10){mm='0'+mm};
    return d = dd+'/'+mm+'/'+yyyy
  }

  setQuantity = (e) => {
    console.log(e.target.value)
    if(e.target.value)
    {
      this.setState({quantity: parseInt(e.target.value)})
    }
    else {
      this.setState({quantity: 9})
    }
  }

  render(){
    return(
      <div className="album py-5 bg-light">

<div className="container">
<header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
  
  <ul className="nav col-12 col-md-auto mb-2 justify-content-center ">
    <li>
    <div style={{'paddingRight': '10px'}} className="col text-center">
    <DatePicker  placeholderText='Select your start date' selected={this.state.startDate} onChange={(date) => this.setStartDate(date)} />
    </div>
    </li>
    <div style={{'paddingRight': '10px'}} className="col text-center">
    <DatePicker disabled={this.state.quantity !== 9 ? true : false} placeholderText='Select your end date' selected={this.state.endDate} onChange={(date) => this.setEndDate(date)} />
    </div>
    <li style={{'paddingRight': '10px'}} ><input disabled={(this.state.startDate && this.state.endDate) || this.state.endDate ? true : false} onChange={(e)=>{this.setQuantity(e)}} placeholder='How many?'></input></li>
    <li style={{'justifyContent': 'center'}} className='col'>
    <div className="text-end">
    <button type="button" className="btn btn-lg btn-primary" disabled>Search</button>
 
</div>
    </li>
    
  </ul>
  
</header>
</div>


  <div className="container">
   
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {this.state.mappedImages}
      
      <div className="col">
       </div>
      </div>
  </div>
</div>
    )
  }
}

export default Content