import {  Trash2, TriangleAlert, XCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { apiStore } from "../store/apiHandler";

const RemoveProperty = ({id}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const {removeProperty} = apiStore();
  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleRemove = async () => {
    console.log("remove these property...");
    await removeProperty(id);
    setModalOpen(false);
  }

  return (
    <>
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`flex justify-center items-center rounded-xl shadow-sm mt-2 py-2 text-black bg-gray-300 hover:bg-rose-600 hover:text-white`}
        >
          <Trash2 size={20} /> &nbsp;Remove
        </button>
        <div
          className={`fixed left-0 top-0 z-50 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[550px] rounded-[20px] bg-white border shadow-lg p-4 text-center md:px-[50px] md:py-[40px]"
          >
            {/* <Warning */}
            <TriangleAlert size={40} className="text-orange-600 mx-auto" />
            <h3 className="flex pb-[18px] text-xl font-semibold text-dark sm:text-2xl">
             Are you sure you want to remove this Project?
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
            Note: This action will permanently delete the project and its associated data from the database. Once deleted, the information will be lost forever. Please confirm if you want to proceed with this irreversible action.
            </p>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="flex justify-center items-center w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-white bg-indigo-600 transition hover:border-indigo-600 hover:bg-indigo-600 dark:text-white"
                >
                  <XCircle size={20} /> &nbsp;
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button onClick={handleRemove} className="flex justify-center items-center w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-gray-50 transition hover:bg-rose-600 hover:text-white hover:border-rose-600">
                  <Trash2 size={20} />
                   Remove
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default RemoveProperty;
