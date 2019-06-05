import * as React from "react";
import Modal from "react-responsive-modal";

type props = {
  notice: string;
};

const Spinner = (props: props) => {
  return (
    <div>
      <Modal
        open={true}
        onClose={() => {}}
        classNames={{
          overlay: "spinner-overlay",
          modal: "spinner-modal"
        }}
        animationDuration={1000}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        showCloseIcon={false}
        center
      >
        <div className="loader" />
        <div>{props.notice}</div>
      </Modal>
    </div>
  );
};

export default Spinner;
