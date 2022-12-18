import { toast } from "react-toastify";

const notify = (message) => {
  if (message.error) {
    return toast.error(message.error);
  }

  return toast.success(message.success);
};

export default notify;
