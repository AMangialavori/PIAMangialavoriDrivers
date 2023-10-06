const validateGetdriverDetail = (req, res, next) => {
  const { idDriver } = req.params;
  if (!idDriver)
    return res.status(400).json({ error: "You must enter driver's id" });
  next();
};

const validateCreateDriver = (req, res, next) => {
  const { forename, surname, description, image, nationality, dob, teams } =
    req.body;
  if ((!forename, !surname, !description, !image, !nationality, !dob, !teams))
    return res.status(400).json({ error: "Missing data" });
  next();
};

module.exports = {
  validateCreateDriver,
  validateGetdriverDetail,
};
