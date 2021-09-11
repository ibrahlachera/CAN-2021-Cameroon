const Ajv = require('ajv');
const data = require('../data.json');
const schema = require('../schema/data-schema.json');

const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate(data);
if (!valid) {
    console.log(validate.errors);
    throw new Error('Validation failed');
}
