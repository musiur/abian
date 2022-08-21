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
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Olect from "../components/RawCompBuilder/FormElements/Olect";
import Oradio from "../components/RawCompBuilder/FormElements/Oradio";
import DevelopmentOnGoing from "../components/usual/DevelopmentOnGoing";
import HomeStyles from "../styles/modules/home.module.scss";
import { UserContext } from "./_app";
import Carousel from "/components/usual/Carousel";

//form data object scaffolding
const InitialFormData = {
  name: "",
  location: "",
  event_id: "",
  payment_method: "",
  amount: "",
  transaction_id: "",
  contact_number: ""
};

//main function
const Index = () => {
  const [user, setUser] = useContext(UserContext);
  const [eventIDs, setEventIDs] = useState([]);
  //form data managing states
  const [formData, setFormData] = useState(InitialFormData);
  const [errorMessage, setErrorMessage] = useState(formData);

  //adding values to the state
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //checking errors on submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validator(formData));
  };

  //action on errors
  useEffect(() => {
    if (Object.keys(errorMessage).length === 0) {
      const {
        name,
        location,
        contact_number,
        transaction_id,
        amount,
        payment_method,
        event_id,
      } = formData;

      const data = {
        name,
        location,
        contact_number,
        transaction_id,
        amount,
        member_type: user.details.member_type,
        payment_method,
        donar_id: user.details.id,
        event_id,
      };

      const fetchAPI = async () => {
        const response = await axios.post(
          `http://localhost:9000/donation/create`,
          data
        );
        console.log(response);
      };

      fetchAPI();
    }
  }, [errorMessage]);

  useEffect(() => {
    const fetchEventDetails = async () => {
      const response = await axios.get(`http://localhost:9000/events`);
      // console.log(response);

      const arr = [];
      if (response.status === 200) {
        response.data.result.forEach((element) => {
          arr.push(element.id);
        });

        setEventIDs(arr);
      }
    };
    fetchEventDetails();
  }, []);

  //donation form element data for section of causes and payment method
  const paymentMethods = ["bKash", "Rocket", "Nagad"];
  const memberType = ["Silver", "Gold", "Dimond"];

  return (
    <>
      <section className={HomeStyles.heroSectionRoot}>
        <div>
          <div>
            <h1 className="heroHeading">
              Tempor askjsd{" "}
              <span className="heroHeading">deserunt excepteur</span> in sint
              Lorem labourm aute
            </h1>

            <p>
              Reprehenderit aliqua enim duis voluptate laboris dolor tempor
              reprehenderit est ipsum irure dolore.
            </p>
          </div>
          <div></div>
        </div>
      </section>

      <section className={HomeStyles.donateSection}>
        <div className={HomeStyles.donateLeftDiv}>
          <h4>WELCOME TO ABIANFUND CHARITY</h4>
          <h2>We Help Thousands of Children to Get Their Education</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <div style={{ marginTop: "3rem" }}>
            {cards.map((cardData, i) => {
              return (
                <div key={i}>
                  <Image src={cardData.image} alt="" width={100} height={100} />
                  <p>{cardData.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={HomeStyles.donateRightDiv}>
          <form>
            <label htmlFor="name">Full name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name..."
              className="name inputStyle donateInput"
              onChange={handleOnChange}
            />

            {errorMessage.name ? (
              <div className="errorStyle">{errorMessage.name}</div>
            ) : null}
            <br />

            <label htmlFor="location">Location</label>
            <input
              name="location"
              type="text"
              placeholder="Enter your location..."
              className="location inputStyle donateInput"
              onChange={handleOnChange}
            />
            {errorMessage.location ? (
              <div className="errorStyle">{errorMessage.location}</div>
            ) : null}
            <br />

            <label htmlFor="event_id">Event ID</label>
            <Olect
              name="event_id"
              className="event_id"
              defaultValue="None"
              options={eventIDs}
              onChange={handleOnChange}
            />

            {errorMessage.event_id ? (
              <div className="errorStyle">{errorMessage.event_id}</div>
            ) : null}
            <br />

            <label htmlFor="contact_number">Contact number</label>
            <input
              name="contact_number"
              type="number"
              placeholder="Enter your email address..."
              className="contact_number inputStyle donateInput"
              onChange={handleOnChange}
            />

            {errorMessage.contact_number ? (
              <div className="errorStyle">{errorMessage.contact_number}</div>
            ) : null}
            <br />

            <label htmlFor="amount">Amount you had given</label>
            <input
              name="amount"
              type="number"
              placeholder="Enter your email address..."
              className="amount inputStyle donateInput"
              onChange={handleOnChange}
            />

            {errorMessage.amount ? (
              <div className="errorStyle">{errorMessage.amount}</div>
            ) : null}
            <br />

            <label htmlFor="transaction_id">Transaction ID</label>
            <input
              name="transaction_id"
              type="text"
              placeholder="Enter your email address..."
              className="transaction_id inputStyle donateInput"
              onChange={handleOnChange}
            />

            {errorMessage.transaction_id ? (
              <div className="errorStyle">{errorMessage.transaction_id}</div>
            ) : null}
            <br />

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

            {errorMessage.payment_method ? (
              <div className="errorStyle">{errorMessage.payment_method}</div>
            ) : null}
            <br />

            <button onClick={handleOnSubmit}>Donate now</button>
          </form>
        </div>
      </section>

      <section className={HomeStyles.technicalStatics}>
        <p>Greate review for our service</p>
        <h2>Technical Statistics</h2>

        <div className={HomeStyles.statisticsCouter}>
          {statistics.map((data, i) => {
            return (
              <div key={i}>
                <p className={HomeStyles.counterStyle}>{data.counter}+</p>
                <p>{data.title}</p>
              </div>
            );
          })}
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
        <p>
          Mollit adipisicing velit mollit eu id minim laborum dolore aute
          voluptate quis anim laboris. Amet non ad deserunt eiusmod duis.
          Cupidatat Lorem labore dolor aute dolore commodo fugiat esse ut culpa
          est. Culpa qui amet aliqua nostrud deserunt ut enim mollit Mollit
          adipisicing velit mollit eu id minim laborum dolore aute voluptate
          quis anim laboris. Amet non ad deserunt eiusmod duis. Cupidatat Lorem
          labore dolor aute dolore commodo fugiat esse ut culpa est. Culpa qui
          amet aliqua nostrud deserunt ut enim
        </p>

        <div>
          <button className="btn-primary">Donate now</button>
          <button className="btn-success">Become a volunteer</button>
        </div>
      </section>

      <DevelopmentOnGoing />
    </>
  );
};

export default Index;

const validator = (data) => {
  //error object
  let err = {};

  //fullname validation
  if (!data.name.trim()) {
    err.name = "Full name is required!";
  }

  //email validation
  if (!data.location.trim()) {
    err.location = "Location is required!";
  }

  //causes validation
  if (!data.event_id.toString().trim()) {
    err.event_id = "Event ID are required!";
  }

  //amount validation
  if (!data.amount.toString().trim() && data.amount < 1) {
    err.amount = "Amount is required";
  }

  //payment-method validation
  if (!data.payment_method.trim()) {
    err.payment_method = "Payment method is required!";
  }
  //transaction id validation
  if (!data.transaction_id.trim()) {
    err.transaction_id = "Transaction method is required!";
  }

  if (!data.contact_number.toString().trim()) {
    err.contact_number = "Contact number is required!";
  }

  return err;
};

const cards = [
  {
    title: "Community",
    image: "/static/icons/home/community.png",
  },
  {
    title: "Generous",
    image: "/static/icons/home/generous.png",
  },
  {
    title: "Volunteer",
    image: "/static/icons/home/volunteer.png",
  },
];

const statistics = [
  {
    counter: 2000,
    title: "Fund raised",
    icon: "",
  },
  {
    counter: 2000,
    title: "Completed projects",
    icon: "",
  },
  {
    counter: 2000,
    title: "Donation",
    icon: "",
  },
  {
    counter: 2000,
    title: "Volunteer",
    icon: "",
  },
];
