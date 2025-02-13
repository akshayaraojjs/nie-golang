import React from "react";

const EditCar = () => {
  return (
    <div className="container mt-4">
      <h2>Edit Car Details</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Car Brand</label>
          <input type="text" className="form-control" value="?" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Car Number</label>
          <input type="text" className="form-control" value="?" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Car Type</label>
          <select className="form-select">
            <option>SUV</option>
            <option>Sedan</option>
            <option>Hatchback</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Incoming Time</label>
          <input type="time" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Outgoing Time</label>
          <input type="time" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Parking Slot</label>
          <input type="text" className="form-control" value="?" required />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditCar;