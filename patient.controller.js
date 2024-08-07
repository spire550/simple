import patientModel from "./patient.model.js";

export const getAllData = async (req, res, next) => {
  const data = await patientModel.find();
  if (!data.length) {
    return next(new Error("No Data exists"));
  }
  res.json({ success: true, data });
};
export const add = async (req, res, next) => {
  const { name, phone, email, age, address, medicalCheck } = req.body;

  const addPatient = await patientModel.create({
    name,
    phone,
    email,
    address,
    age,
    medicalCheck,
  });
  return res.json({ success: true, message: "Data Added Successfully" });
};

export const deletePatient = async (req, res, next) => {
  const { id } = req.params;
  const data = await patientModel.findById(id);
  if (!data) {
    return next(new Error("No patient with this id", { cause: 404 }));
  }
  const deletedPatient = await patientModel.findByIdAndDelete(id);
  if (!deletedPatient)
    return next(new Error(`There's no patient with this id`, { cause: 400 }));
  return res.json({
    success: true,
    message: "patient Deleted Successfully",
  });
};

export const updatePatient = async (req, res, next) => {
  const { id } = req.params;
  const { name, phone, email, age, address, medicalCheck } = req.body;

  const data = await patientModel.findById(id);
  if (!data) {
    return next(new Error("No patient with this id", { cause: 404 }));
  }
  const update = await patientModel.findOneAndUpdate({
    name,
    phone,
    email,
    age,
    address,
    medicalCheck,
  });
  return res.json({ success: true, message: "Patient Updated successfully" });
};
