const Joi = require("joi");
//validating intake input
var intakeschema = Joi.object()
  .keys({
    template: Joi.string().required(),
    form_fields: Joi.object().keys({
      u_requested_for: Joi.string().required(),
      u_project_id: Joi.string().required(),
      sap: Joi.string().required(),
      physical_server: Joi.string().required(),
      physical_location: Joi.string().required(),
      u_project_name: Joi.string().required(),
      u_project_description: Joi.string().required(),
      u_describe_request: Joi.string().required(),
      u_os_type: Joi.string().required(),
      u_location_id: Joi.string().required(),
      u_physical_server_request_type: Joi.string().required(),
      upload: Joi.string().required(),
      userInfo: Joi.object().keys({
        userId: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        pageRoute: Joi.string().required(),
        deptId: Joi.number().required()
      })
    })
  })
  .required();

module.exports = { intakeschema: intakeschema };
