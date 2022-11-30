import { BtnBrowse, BtnPrimary } from "./Button";
import FormRow from "./FormRow";
import { useState } from "react";

const initialState = {
  name: "",
  subject: "",
  email: "",
  file: "",
  terms: "",
  department: "",
  sales: "",
};

const Form = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <div className="mb-4 text-sm flex justify-center">
        <span className="mr-4 font-semibold">Departament:</span>
        <label className="mr-4 flex space-x-2">
          <span>
            <FormRow
              type="radio"
              name="department"
              value={values.department}
              handleChange={handleChange}
            />
          </span>

          <span>Support</span>
        </label>
        <label className="flex space-x-2">
          <span>
            <FormRow
              type="radio"
              name="sales"
              value={values.sales}
              handleChange={handleChange}
            />
          </span>

          <span>Sales</span>
        </label>
      </div>
      <div className="mb-4">
        <FormRow
          type="text"
          name="subject"
          value={values.subject}
          placeholder="Subject"
          handleChange={handleChange}
        />
      </div>
      <div className="mb-4 ">
        <FormRow
          type="text"
          name="name"
          value={values.name}
          placeholder="Name"
          handleChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <FormRow
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          handleChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-gray-50 rounded outline-none"
          placeholder="Message..."
          wt-ignore-input="true"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="flex px-2 bg-gray-50 rounded">
          <span className="hidden">
            <FormRow
              type="file"
              name="file"
              value={values.file}
              handleChange={handleChange}
            />
          </span>

          <BtnBrowse />
        </label>
      </div>
      <div className="flex justify-between items-center">
        <label className="flex">
          <span className="mr-1">
            <FormRow
              type="checkbox"
              name="terms"
              value={values.terms}
              handleChange={handleChange}
            />
          </span>

          <span className="text-sm font-semibold w-full">
            I agree to terms and conditions.
          </span>
        </label>
        <BtnPrimary type="submit" title="Submit" />
      </div>
    </form>
  );
};

export default Form;
