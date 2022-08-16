import { useEffect } from "react";

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

  useEffect(() => {
    if (Object.keys(errorMessage).length === 0) {
      // call api
    } else {
      console.log(errorMessage);
    }
  }, [errorMessage]);

  return (
    <div>
      <h3>Create New Event</h3>
      <form>
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
};

export default CreateEvent;

const validator = (data) => {
  let err = {};
  return err;
};
