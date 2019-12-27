import { useEffect } from "react";
import axios from "axios";

const RescueForm = ({ message, callback }) => {
  useEffect(() => {
    axios
      .post("https://webhook.site/d2f59c44-4b9a-4f53-a2a6-16ae50bd83c4", {
        foo: "foo"
      })
      .then(res => {
        console.log(res);
        callback(true);
      })
      .catch(err => {
        console.log(err);
        callback(true);
      });
  }, [callback]);

  return null;
};

export default RescueForm;
