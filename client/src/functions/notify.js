import { toast } from "react-toastify";

const notify = (message) => {
  if (message.error) {
    if (Array.isArray(message.error)) {
      return message.error.forEach((err) => toast.error(err));
    }
    return toast.error(message.error);
  }

  return toast.success(message.success);
};

export default notify;
