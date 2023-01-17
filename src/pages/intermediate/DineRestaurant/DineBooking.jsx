import React, {useState} from 'react'
import Footer from './Footer.jsx'
import {Link} from 'react-router-dom'
import './DineBooking.css'
import logo from './assets/images/logo.svg'
import beef from './assets/images/homepage/beef-desktop-tablet.jpg'

const DineBooking = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [reservation, setReservation] = useState({
        name: '',
        email: '', 
        month: '', 
        day: '',
        year: '', 
        countPeople: 4,
        hour: '',
        min: '',
        period: '',  
    })
    const [showError, setShowError] = useState(false)

    const handleCountPeople = (e, direction) => {
        e.preventDefault()
       if (direction === 'desc') {
          if(reservation.countPeople === 1) return 
          setReservation({...reservation, countPeople: reservation.countPeople - 1})
       }
       else {
        setReservation({...reservation, countPeople: reservation.countPeople + 1})
       }
    }


    const handleReservation = (e) => {
        e.preventDefault()
        if(reservation.name === '' ||
           reservation.email === '' ||
           reservation.hour === '' ||
           reservation.min === '' ||
           reservation.period === '' ||
           reservation.month === '' ||
           reservation.day === '' || 
           reservation.year === '' ) {
            setShowError(true)
        } 
        else {
            setIsSubmitted(true)
        }
    }

    return (
        <section className='dine dine-booking'>
            <section className='dine-booking-hero'>
                <Link to='/pages/dine-restaurant'>
                <img src={logo} alt="" />
                </Link>
`               <h1 className="dine-booking-hero-title">
                Reservations
               </h1>`
                <p className="dine-booking-hero-subtitle">
                    We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
                </p>
            </section>
            <section className="dine-booking-form-section">
                {isSubmitted ? 
                <form action="" className="dine-booking-form dine-thank-you">
                    <img src={beef} alt="" />
                    <p>Thank you! {reservation.name}</p>
                    <p>Your Reservation for <bold>{reservation.countPeople}</bold> people at <bold>{
                        `${reservation.hour}:${reservation.min} ${reservation.period}`}</bold> on <bold>{reservation.month}</bold> <bold>{reservation.day}</bold> , <bold>{reservation.year}</bold> has been succesfully made.</p>
                </form>
                : 
                <form action="" className="dine-booking-form">
                    {showError && <p className='dine-error'>All fields must be filled.</p>}
                    <input type="text" placeholder='Name' required onChange={(e)=>setReservation({...reservation, name: e.target.value})}/>
                    <input type="text" placeholder='Email' required onChange={(e)=>setReservation({...reservation, email: e.target.value})}/>
                    <fieldset>
                    <p>Pick a date</p>
                    <div className="dine-booking-select-container">
                    <select name='month' className='dine-booking-form-month' required onChange={(e)=>setReservation({...reservation, month: e.target.value})}>
                        <option value=''>MM</option>
                        <option value='January'>01</option>
                        <option value='February'>02</option>
                        <option value='March'>03</option>
                        <option value='April'>04</option>
                        <option value='May'>05</option>
                        <option value='June'>06</option>
                        <option value='July'>07</option>
                        <option value='August'>08</option>
                        <option value='September'>09</option>
                        <option value='October'>10</option>
                        <option value='November'>11</option>
                        <option value='December'>12</option>
                    </select>
                    <select name="day" required onChange={(e)=>setReservation({...reservation, day: e.target.value})}>
                        <option value="">DD</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select name="year" required onChange={(e)=>setReservation({...reservation, year: e.target.value})}>
                        <option value="">YYYY</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                    </div>
                    </fieldset>
                    <fieldset>
                    <p>Pick a time</p>
                    <div className="dine-booking-select-container">
                    <select name="hour" onChange={(e)=>setReservation({...reservation, hour: e.target.value})}>
                        <option value="00">00</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <select name="min" required onChange={(e)=>setReservation({...reservation, min: e.target.value})}>
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                    </select>
                    <select name="period" required onChange={(e)=>setReservation({...reservation, period: e.target.value})}>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>

                    </div>
                    </fieldset>
                    <div className="dine-booking-form-counter">
                        <button className="dine-booking-form-desc-btn"  onClick={(e)=>handleCountPeople(e,'desc')}>-</button>
                        <p>{reservation.countPeople} people</p>
                        <button className="dine-booking-form-inc-btn" onClick={(e)=>handleCountPeople(e,'inc')}>+</button>
                    </div>
                    <button className='dine-hero-cta dine-hero-cta-dark'
                    onClick={(e)=>handleReservation(e)}>Make Reservation</button>
                </form>
            }
            </section>
            <Footer></Footer>
        </section>
    )
}

export default DineBooking
