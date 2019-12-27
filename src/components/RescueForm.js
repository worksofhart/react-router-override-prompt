import axios from "axios";

const Popup = ({ message, callback }) => {
  axios
    .post("https://postman-echo.com/post", { foo: "foo" })
    .then(res => {
      console.log(res);
      callback(true);
    })
    .catch(err => {
      console.log(err);
      callback(true);
    });
  return null;
};

export default Popup;
