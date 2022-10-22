import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./AddEvent.css";
import { addEvent } from "../store/someSlice";

const AddEvent = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dateofevent: "",
    location: "",
    type: "",
    price: 0,
  });

  const { name, description, dateofevent, location, type, price } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(addEvent(formData));
    console.log(formData);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => onSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add Event</h3>
          <div className="form-group mt-3">
            <label>Event Name</label>
            <input
              type="text"
              className="form-control mt-1"
              value={name}
              onChange={onChange}
              name="name"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Event Description</label>
            <input
              type="text"
              className="form-control mt-1"
              value={description}
              onChange={onChange}
              name="description"
            />
          </div>
          <div className="form-group mt-3">
            <label>Type</label>
            <input
              type="text"
              className="form-control mt-1"
              name="type"
              onChange={onChange}
              value={type}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>
              <b>Venue</b>
            </label>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Venue"
                  aria-label="City"
                  onChange={onChange}
                  value={location}
                  name="location"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Entry Fee</label>
            <input
              type="number"
              className="form-control mt-1"
              name="price"
              onChange={onChange}
              value={price}
            />
          </div>
          <div className="form-group mt-3">
            <label>Date of Event</label>
            <input
              type="date"
              className="form-control mt-1"
              name="dateofevent"
              onChange={onChange}
              value={dateofevent}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Add Event
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
