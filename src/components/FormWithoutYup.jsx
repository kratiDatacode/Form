import { useState } from "react";

const FormWithoutYup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedInterests = [...formData.interests];
    if (checked) {
      updatedInterests.push(name);
    } else {
      updatedInterests = updatedInterests.filter(
        (interest) => interest !== name
      );
    }
     
    setFormData({
        ...formData,
        interests:updatedInterests,
    });
  };

  return (
    <>
      <section className="row mx-0 py-5 d-flex justify-content-center align-items-center">
        <div className="col-md-10">
          <div className="row mx-0 d-flex justify-content-center align-items-center">
            <div className="col-md-10 p-4 rounded shadow bg-white">
              <form onSubmit={handleSubmit}>
                <div>
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Enter your first name"
                    className="form-control mb-3"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Enter your last name"
                    className="form-control mb-3"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    className="form-control mb-3"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Phone Number:</label>
                  <input
                    type="email"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    placeholder="Enter your Phone Number"
                    className="form-control mb-3"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password"
                    className="form-control mb-3"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm your password"
                    className="form-control mb-3"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    placeholder="Enter your age"
                    className="form-control mb-3"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Gender:</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    className="form-control mb-3"
                    onChange={handleChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-3">Interests:</label>
                  <label>
                    <input
                      type="checkbox"
                      name="coding"
                      checked={formData.interests.includes("coding")}
                      onChange={handleCheckboxChange}
                    />
                    Coding
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="sports"
                      checked={formData.interests.includes("sports")}
                      onChange={handleCheckboxChange}
                    />
                    Sports
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="reading"
                      checked={formData.interests.includes("reading")}
                      onChange={handleCheckboxChange}
                    />
                    Reading
                  </label>
                </div>
                <div>
                  <label>Date of Birth:</label>
                  <input
                    type="date"
                    name="bithDate"
                    value={formData.birthDate}
                    placeholder="Enter your date of bith"
                    className="form-control mb-3"
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormWithoutYup;
