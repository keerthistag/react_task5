import './App.css';
import {Component} from "react";

class App extends Component {
  state = {date:"",years :0}

  onChangeDate =(event)=>{
    this.setState({date: event.target.value})
  }

  onClickCalculateAge =()=>{
    const todayDate=new Date();
    const {date}=this.state
    const dateBirth = new Date(date.slice(0,4),date.slice(5,7)-1,date.slice(-2,)) 
    console.log(dateBirth)
    const m= todayDate.getMonth()-dateBirth.getMonth()
    if ( m<0 || (m===0 && todayDate.getDate()<dateBirth.getDate())){
      this.setState({years:todayDate.getFullYear()-dateBirth.getFullYear() -1})
    }
    else{
      this.setState({years:todayDate.getFullYear()-dateBirth.getFullYear()})
    }
    
  
    
  }
  
  render(){
    const {date,years}= this.state
    return (
      <div className='age-container'>
        <center><h1 className='heading'>Age Calculator</h1></center>
        <center><p className='date-para'>Enter your date of birth</p></center>
        <input type='date' className='date' onChange={this.onChangeDate} value={date}/>
        <center><button className='calculate-age' onClick={this.onClickCalculateAge}>Caculate Age</button></center>
        <center><h1>Your are {years} years old</h1></center>
      </div>
    );
  }
}

export default App;