import axios from "axios";
import { useEffect, useState } from "react";
import FormStyles from "../../styles/modules/form.module.scss";

const InitialFormData = {
  title: "",
  deadline: "",
  targeted_amount: "",
  raised_amount: "",
  description: "",
};

const CreateEvent = () => {
  const [formData, setFormData] = useState(InitialFormData);
  const [errorMessage, setErrorMessage] = useState(formData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validator(formData));
  };

  const fetchCreatEvent = async () => {
    const response = await axios.post(
      `http://localhost:9000/events/create`,
      formData
    );
    console.log(response);
  };

  useEffect(() => {
    if (Object.keys(errorMessage).length === 0) {
      // call api
      fetchCreatEvent();
    } else {
      console.log(errorMessage);
    }
  }, [errorMessage]);

  return (
    <div>
      <h2>Create a new event to collect donation</h2>

      <form className={FormStyles.formBox}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            onChange={handleOnChange}
            name="title"
            type="text"
            id="title"
            className={FormStyles.inputBox}
          />
          {errorMessage.title && (
            <div className="errorStyle">{errorMessage.title}</div>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            onChange={handleOnChange}
            name="description"
            type="text"
            id="description"
            className={FormStyles.inputBox}
            rows="7"
          />
          {errorMessage.description && (
            <div className="errorStyle">{errorMessage.description}</div>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="deadline">Deadline</label>
          <br />
          <input
            onChange={handleOnChange}
            name="deadline"
            type="date"
            id="deadline"
            className={FormStyles.inputBox}
          />
          {errorMessage.deadline && (
            <div className="errorStyle">{errorMessage.deadline}</div>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="targeted_amount">Targeted Amount</label>
          <br />
          <input
            onChange={handleOnChange}
            name="targeted_amount"
            type="number"
            id="targeted_amount"
            className={FormStyles.inputBox}
          />
          {errorMessage.targeted_amount && (
            <div className="errorStyle">{errorMessage.targeted_amount}</div>
          )}
        </div>
        <br />
        <div>
          <label htmlFor="raised_amount">Raised Amount</label>
          <br />
          <input
            onChange={handleOnChange}
            name="raised_amount"
            type="number"
            id="raised_amount"
            className={FormStyles.inputBox}
          />
          {errorMessage.raised_amount && (
            <div className="errorStyle">{errorMessage.raised_amount}</div>
          )}
        </div>
        <br />
        <button onClick={handleOnSubmit} className="btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;

const validator = (data) => {
  let err = {};
  if (!data.title.trim()) {
    err.title = "title is required!";
  }
  if (!data.description.trim()) {
    err.description = "description is required!";
  }
  if (!data.deadline.trim()) {
    err.deadline = "deadline is required!";
  }
  if (!data.targeted_amount.trim()) {
    err.targeted_amount = "targeted_amount is required!";
  }
  if (!data.raised_amount.trim()) {
    err.raised_amount = "raised_amount is required!";
  }
  return err;
};
