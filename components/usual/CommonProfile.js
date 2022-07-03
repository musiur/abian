import { useState } from "react";

const InitialFormData = {
  fullname: "",
  email: "",
  phone: "",
  registrationNo: "",
};

const CommonProfile = () => {
  const [enableEdit, setEnableEdit] = useState(false);

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
  return (
    <div className="dc__profile">
      <h3>Public Profile</h3>

      <div
        className="dc__enable_edit"
        onClick={() => setEnableEdit(!enableEdit)}
      >
        <div className="dc__ee__checkbox">
          <div
            className={`dc__ee__c__innerbox ${enableEdit && "checkedbox"}`}
          ></div>
        </div>
        <p>Enable edit</p>
      </div>
      {enableEdit && (
        <p className="dc__enable_message">Now you can edit your profile!</p>
      )}

      <form className="dc__form">
        <div className="dc__form__inputbox">
          <label htmlFor="fullname">Fullname</label>
          <input
            name="fullname"
            id="fullname"
            placeholder="John Doe"
            readOnly={!enableEdit}
            onChange={handleOnChange}
          />
          {errorMessage.fullname && <p>{errorMessage.fullname}</p>}
        </div>

        <div className="dc__form__inputbox">
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            id="email"
            placeholder="abian@abc.com"
            readOnly={!enableEdit}
            onChange={handleOnChange}
          />
          {errorMessage.email && <p>{errorMessage.email}</p>}
        </div>

        <div className="dc__form__inputbox">
          <label htmlFor="phone">Phone number</label>
          <input
            name="phone"
            id="phone"
            placeholder="+88012345678"
            readOnly={!enableEdit}
            onChange={handleOnChange}
          />
          {errorMessage.phone && <p>{errorMessage.phone}</p>}
        </div>

        <div className="dc__form__inputbox">
          <label htmlFor="registrationNo">Registration number</label>
          <input
            name="registrationNo"
            id="registrationNo"
            placeholder="012345678"
            readOnly={!enableEdit}
            onChange={handleOnChange}
          />
          {errorMessage.registrationNo && <p>{errorMessage.registrationNo}</p>}
        </div>
      </form>
    </div>
  );
};

export default CommonProfile;

const validator = () => {
  let err = {};
  return err;
};
