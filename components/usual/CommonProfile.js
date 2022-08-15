import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../pages/_app";

const InitialFormData = {
  fullname: "",
  username: "",
  phone: "",
  member_type: "",
};

const CommonProfile = () => {
  const [enableEdit, setEnableEdit] = useState(false);
  const [user, setUser] = useContext(UserContext);

  const [formData, setFormData] = useState(
    user ? { ...user.details } : InitialFormData
  );
  const [errorMessage, setErrorMessage] = useState(
    user ? InitialFormData : formData
  );

  const member_type = user.details.member_type;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(validator(formData));
  };

  useEffect(() => {
    if (Object.keys(errorMessage).length === 0) {
      // call api

      const updated_data = {
        fullname: formData.fullname,
        username: formData.username,
        phone: formData.phone,
        member_type: member_type === "admin" ? "admin" : formData.member_type,
      };
      const data = {
        id: user.details.id,
        updated_data,
      };

      const fetchAPI = async () => {
        const response = await axios.put(
          `http://localhost:9000/${
            member_type === "admin" ? "admins" : "users"
          }/update`,
          data
        );
        console.log(response);
        if (response.status === 200) {
          setUser({
            ...user,
            ["details"]: { ...user.details, ...updated_data },
          });
        }
      };
      fetchAPI();
    } else {
      console.log("Error in form validation : ", errorMessage);
    }
  }, [errorMessage]);
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
            disabled={!enableEdit}
            onChange={handleOnChange}
            defaultValue={user.details?.fullname}
          />
          {errorMessage.fullname && (
            <div className="errorStyle">{errorMessage.fullname}</div>
          )}
        </div>

        <div className="dc__form__inputbox">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            placeholder="John Doe"
            readOnly={!enableEdit}
            disabled={!enableEdit}
            onChange={handleOnChange}
            defaultValue={user.details.username}
          />
          {errorMessage.username && (
            <div className="errorStyle">{errorMessage.username}</div>
          )}
        </div>

        <div className="dc__form__inputbox">
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            id="email"
            placeholder="abian@abc.com"
            readOnly={true}
            disabled={true}
            onChange={handleOnChange}
            defaultValue={user.details.email}
          />
          {errorMessage.email && (
            <div className="errorStyle">{errorMessage.email}</div>
          )}
        </div>

        <div className="dc__form__inputbox">
          <label htmlFor="phone">Phone number</label>
          <input
            name="phone"
            id="phone"
            placeholder="+88012345678"
            readOnly={!enableEdit}
            disabled={!enableEdit}
            onChange={handleOnChange}
            defaultValue={user.details.phone}
          />
          {errorMessage.phone && (
            <div className="errorStyle">{errorMessage.phone}</div>
          )}
        </div>

        <div className="dc__form__inputbox">
          <label htmlFor="member_type">Member type</label>
          <select
            name="member_type"
            id="member_type"
            disabled={!enableEdit}
            onChange={handleOnChange}
            defaultValue={user.details?.member_type}
          >
            {member_type === "Admin" ? (
              <option
                value="Admin"
                selected={`${
                  user.details.member_type === "Admin" ? "selected" : ""
                }`}
              >
                Admin
              </option>
            ) : (
              <>
                <option
                  value="..."
                  selected={`${
                    user.details.member_type === "..." ? "selected" : ""
                  }`}
                >
                  ...
                </option>
                <option
                  value="Silver"
                  selected={`${
                    user.details.member_type === "Silver" ? "selected" : ""
                  }`}
                >
                  Silver
                </option>
                <option
                  value="Gold"
                  selected={`${
                    user.details.member_type === "Gold" ? "selected" : ""
                  }`}
                >
                  Gold
                </option>
                <option
                  value="Dimond"
                  selected={`${
                    user.details.member_type === "Dimond" ? "selected" : ""
                  }`}
                >
                  Dimond
                </option>
              </>
            )}
          </select>
          {errorMessage.member_type && (
            <div className="errorStyle">{errorMessage.member_type}</div>
          )}
        </div>
      </form>
      {enableEdit ? (
        <button onClick={handleOnSubmit} className="btn-primary">
          Update profile
        </button>
      ) : null}
    </div>
  );
};

export default CommonProfile;

const validator = (data) => {
  console.log(data);
  let err = {};
  if (!data.username.trim()) {
    err.username = "Username is required!";
  }
  if (data.phone) {
    if (!data.phone.trim()) {
      err.phone = "phone is required!";
    }
  }
  if (data.fullname) {
    if (!data.fullname.trim()) {
      err.fullname = "fullname is required!";
    }
  }
  if (!data.member_type.trim()) {
    err.member_type = "member_type is required!";
  }
  return err;
};
