"use client";
// NextJS
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// Material UI
import Modal from "@mui/material/Modal";
// Icons
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

const SuccessModal = ({ open, setOpen }) => {
  // In case the user clicks the back button on the browser, the modal should be closed
  useEffect(() => {
    setOpen(false);
  }, []);

  const router = useRouter();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBackToSite = () => {
    router.push("/");
  };

  return (
    <Modal open={open}>
      <div
        style={style}
        className="flex flex-col gap-4 bg-white rounded-md items-center py-4 px-8 w-[80%] max-w-[600px]"
      >
        <p className="text-9xl">
          <MarkEmailReadOutlinedIcon
            sx={{ color: "#E9204F" }}
            fontSize="inherit"
          />
        </p>
        <p className="res-text-28 font-medium">Thank you!</p>
        <div>
          <p className="text-center">Your submission has been received.</p>
          <p className="text-center">We will be in touch soon.</p>
        </div>
        <button
          onClick={handleBackToSite}
          className="text-white flex items-center justify-center bg-primary rounded py-4 px-10 w-full"
        >
          <p className="font-medium">Back to site</p>
        </button>
      </div>
    </Modal>
  );
};

export default SuccessModal;
