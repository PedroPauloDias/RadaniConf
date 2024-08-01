import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { LuMoveRight } from "react-icons/lu";
import { MyButton } from './../myButton/index';

export default function CustomModal({ children, modalTitle }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("center");
  const [backdrop, setBackdrop] = React.useState('blur')

  const [size, setSize] = React.useState('md')

  const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];


  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }

  return (
    <>
      <div className="flex justify-start mt-6" >
        <MyButton key={size} onPress={() => handleOpen(size)} color="radani" className=" max-w-36 flex items-center justify-center text-sm gap-2 p-2"
        >Detalhes
          <LuMoveRight className="" />
        </MyButton>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={modalPlacement} backdrop={backdrop} size='5xl' className="dark:bg-zinc-800 ">
        <ModalContent  >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 mt-4 text-2xl">
                {modalTitle}
                <div className="w-full h-[4px]  bg-gradient-to-r from-[#ee9c2e] via-[#85adb5]  to-[#ee9c2e] mt-2"></div>
              </ModalHeader>
              <ModalBody  >
                {children}
              </ModalBody>
              <ModalFooter>

                <MyButton color="radani" onPress={onClose}>
                  Fechar
                </MyButton>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
