import { useState } from "react";
import { Modal } from "antd";

const useModal = (title, content) => {
  const [modalState, setModalState] = useState({
    visible: false,
    result: false,
  });

  const showModal = () => {
    setModalState({ ...modalState, visible: true });
  };

  const handleOk = () => {
    setModalState({ visible: false, result: true });
  };

  const handleCancel = () => {
    setModalState({ visible: false, result: false });
  };

  const ModalComponent = () => (
    <Modal
      title={title}
      open={modalState.visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <p className="text-base text-center my-6">{content}</p>
      <div className="flex gap-2 justify-center font-semibold text-base">
        <button
          className="py-1 w-20 rounded-md duration-200 border-2 hover:border-gray-500"
          key="cancel"
          onClick={handleCancel}
        >
          No
        </button>

        <button
          className="p-1 w-20 rounded-md bg-red-500 duration-200 text-white hover:bg-red-600"
          key="confirm"
          onClick={handleOk}
        >
          Yes
        </button>
      </div>
    </Modal>
  );

  return [showModal, ModalComponent, modalState.result];
};

export default useModal;
