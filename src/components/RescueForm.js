import { useEffect } from "react";
import axios from "axios";

const RescueForm = ({ message, callback }) => {
  useEffect(() => {
    axios
      .post("https://webhook.site/d2f59c44-4b9a-4f53-a2a6-16ae50bd83c4", {
        formData: message
      })
      .then(res => {
        console.log(res.config.data);
        callback(true);
      })
      .catch(err => {
        console.log(err);
        callback(true);
      });
  }, [message, callback]);

  return null;
};

export default RescueForm;
