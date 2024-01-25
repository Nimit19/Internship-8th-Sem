function field(value) {
  this.value = value;
}
field.prototype.validate = function () {
  return this.value.length > 0;
};

var username = new field("nick19");
var password = new field("hi123");
var sName = new field("Nick Patel");
var birthday = new field("19-07-2002");

var fields = [username, password, sName, birthday];

var isValidForm = fields.every(function (field) {
  return field.validate();
});

console.log(isValidForm);

if(isValidForm) {
    // allow user to submit
}else{
    // show error message
}
