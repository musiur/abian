/***
 * 
 * Title: Home page
 * 
 * Author: Musiur Alam Opu
 * 
 * Date: 1/28/2022
 * 
 */



//dependencies
import Image from "next/image";
import { useEffect, useState } from "react";
import Olect from "../components/RawCompBuilder/FormElements/Olect";
import Oradio from "../components/RawCompBuilder/FormElements/Oradio";
import DevelopmentOnGoing from "../components/usual/DevelopmentOnGoing";
import HomeStyles from "../styles/modules/home.module.scss";
import Carousel from "/components/usual/Carousel";


//form data object scaffolding
const InitialFormData = { full_name: "", email: "", causes: "", payment_method: "", amount: "" };

//main function
const Index = () => {

  //form data managing states
  const [formData, setFormData] = useState(InitialFormData);
  const [errorMessage, setErrorMessage] = useState(formData);


  //adding values to the state
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  //checking errors on submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validator(formData));
  }

  //action on errors
  useEffect(() => {
    if (Object.keys(errorMessage).length === 0) {
      console.log(formData);
    } else {
      console.log(errorMessage);
    }
  }, [errorMessage]);

  //donation form element data for section of causes and payment method
  const causesList = ["Food", "Cloth", "Education", "Others"];
  const paymentMethods = ["bKash", "Rocket", "Nagad"];

  return (
    <>
      <section className={HomeStyles.heroSectionRoot}>
        <div>
          <div>
            <h1 className="heroHeading">
              Tempor askjsd <span className="heroHeading">deserunt excepteur</span>  in sint Lorem labourm aute
            </h1>

            <p>Reprehenderit aliqua enim duis voluptate laboris dolor tempor reprehenderit est ipsum irure dolore.</p>

          </div>
          <div>
          </div>
        </div>
      </section>

      <section className={HomeStyles.donateSection}>
        <div className={HomeStyles.donateLeftDiv}>
          <h4>WELCOME TO ABIANFUND CHARITY</h4>
          <h2>We Help Thousands of Children to Get Their Education</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <div style={{marginTop: "3rem"}}>
            {
              cards.map((cardData, i) => {
                return (
                  <div key={i}>
                    <Image src={cardData.image} alt="" width={100} height={100} />
                    <p>{cardData.title}</p>
                  </div>
                )
              })
            }
          </div>
        </div>


        <div className={HomeStyles.donateRightDiv}>
          <form>
            <label htmlFor="fullName">Full name</label>
            <input name="full_name" type="text" placeholder="Enter your full name..." className="fullName inputStyle donateInput" onChange={handleOnChange} />

            <label htmlFor="emailAddress">Email address</label>
            <input name="email" type="email" placeholder="Enter your email address..." className="emailAddress inputStyle donateInput" onChange={handleOnChange} />

            <label htmlFor="causes">Cause</label>
            <Olect
              name="causes"
              className="causes"
              defaultValue="None"
              options={causesList}
              onChange={handleOnChange}
            />

            <label htmlFor="emailAddress">Amount you had given</label>
            <input name="amount" type="email" placeholder="Enter your email address..." className="emailAddress inputStyle donateInput" onChange={handleOnChange} />

            <label htmlFor="paymentMethod">Payment type</label>
            <div className={HomeStyles.radioSelection}>
              {/* @TODO custom radio input tag will be added here  */}
              <Oradio
                name="payment_method"
                className="paymentMethod"
                onChange={handleOnChange}
                options={paymentMethods}
                defaultValue=""
              />

            </div>

            <button onClick={handleOnSubmit}>Donate now</button>
          </form>
        </div>
      </section>

      <section className={HomeStyles.technicalStatics}>
        <p>Greate review for our service</p>
        <h2>Technical Statistics</h2>

        <div className={HomeStyles.statisticsCouter}>
          {
            statistics.map((data, i) => {
              return (
                <div key={i}>
                  <p className={HomeStyles.counterStyle}>{data.counter}+</p>
                  <p>{data.title}</p>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className={HomeStyles.ourCauses}>
        <p>Our Causes</p>
        <h2>Our Causes & help us</h2>

        <div>
          <Carousel />
        </div>
      </section>

      <section className={HomeStyles.abianCharity}>
        <span>Hello Bangak adisad sdss</span>
        <h2>Aute labore officia aute consectetur qui minim nulla culpa.</h2>
        <p>Mollit adipisicing velit mollit eu id minim laborum dolore aute voluptate quis anim laboris. Amet non ad deserunt eiusmod duis. Cupidatat Lorem labore dolor aute dolore commodo fugiat esse ut culpa est. Culpa qui amet aliqua nostrud deserunt ut enim mollit Mollit adipisicing velit mollit eu id minim laborum dolore aute voluptate quis anim laboris. Amet non ad deserunt eiusmod duis. Cupidatat Lorem labore dolor aute dolore commodo fugiat esse ut culpa est. Culpa qui amet aliqua nostrud deserunt ut enim</p>

        <div>
          <button className="btn-primary">Donate now</button>
          <button className="btn-success">Become a volunteer</button>
        </div>

      </section>

      <DevelopmentOnGoing />
    </>
  )
}

export default Index;

const validator = (data) => {

  //error object
  let err = {};

  //fullname validation
  if (!data.full_name.trim()) {
    err.full_name = "Full name is required!";
  }

  //email validation
  if (!data.email.trim()) {
    err.email = "Email is required!";
  }

  //causes validation
  if (!data.causes.trim()) {
    err.causes = "Causes are required!";
  }

  //amount validation
  if (!data.amount.trim()) {
    err.amount = "Amount is required";
  }

  //payment-method validation
  if (!data.payment_method.trim()) {
    err.payment_method = "Payment method is required!"
  }



  return err;
}

const cards = [
  {
    title: "Community",
    image: "/static/icons/home/community.png"
  },
  {
    title: "Generous",
    image: "/static/icons/home/generous.png"
  },
  {
    title: "Volunteer",
    image: "/static/icons/home/volunteer.png"
  }
]

const statistics = [
  {
    counter: 2000,
    title: "Fund raised",
    icon: ""
  },
  {
    counter: 2000,
    title: "Completed projects",
    icon: ""
  },
  {
    counter: 2000,
    title: "Donation",
    icon: ""
  },
  {
    counter: 2000,
    title: "Volunteer",
    icon: ""
  },
]