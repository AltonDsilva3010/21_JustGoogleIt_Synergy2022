import { useState } from "react";
import "./AddEvent.css";

const AddEvent = () => {
  const [vol, setVol] = useState(false);

  const handleChange = (event) => {
    if (event.target.value === "yes") {
      setVol(true);
    } else {
      setVol(false);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add Event</h3>
          <div className="form-group mt-3">
            <label>Event Name</label>
            <input type="text" className="form-control mt-1" name="Ename" />
          </div>
          <div className="form-group mt-3">
            <label>Type</label>
            <input type="text" className="form-control mt-1" name="Type" />
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
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Entry Fee</label>
            <input type="number" className="form-control mt-1" name="Fees" />
          </div>
          <div className="form-group mt-3">
            <p>Do you need volunteer</p>
            <div className="item">
              <label htmlFor="yes" className="radio">
                Yes
              </label>
              <input
                type="radio"
                name="select"
                id="yes"
                value="yes"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="no" className="radio">
                No
              </label>
              <input
                type="radio"
                name="select"
                id="no"
                value="no"
                onChange={handleChange}
              />
            </div>
          </div>

          {vol && (
            <div className="form-group mt-3">
              <label>Strength</label>
              <input
                type="number"
                className="form-control mt-1"
                name="Volunteers"
              />
            </div>
          )}

          <div className="form-group mt-3">
            <label>Date of Event</label>
            <input type="date" className="form-control mt-1" name="Date" />
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
