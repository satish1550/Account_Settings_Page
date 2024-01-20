import React, { useState, useRef, useEffect } from "react";
import "./settings.css";
import { Pencil, Ban, X } from "lucide-react";

function NameModal({ isOpen, onClose, onSubmit }) {
  useEffect(() => {
    document.title = "Account";
  }, []);
  const [newName, setNewName] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" ref={modalRef}>
      <div className="modal">
        <div className="modalTop">
          <h1>Update name</h1>
          <X onClick={onClose} size={30} className="icon" />
        </div>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <div className="modalBottom">
          <button onClick={onClose} className="cancelButton">Cancel</button>
          <button onClick={() => onSubmit(newName)} className="updateButton">Update</button>
        </div>
      </div>
    </div>
  );
}

export default function Settings({ name, setName }) {
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  // const [name, setName] = useState("Satish Daraboina");

  const toggleNameModal = () => {
    setIsNameModalOpen(!isNameModalOpen);
  };

  const handleUpdateName = (newName) => {
    setName(newName);
    setIsNameModalOpen(false);
  };

  return (
    <div className="settings">
      <div className="settingsTop">
        <h1>Account Settings</h1>
      </div>
      <div className="settingsBottom">
        <div className="profile">
          <div className="profileText">
            <h1>Profile</h1>
          </div>
          <div className="profileName">
            <span>Name</span>
            <div className="profilename">
              <h1>{name}</h1>
              <Pencil size={18} className="icon" onClick={toggleNameModal} />
            </div>
          </div>
          <div className="profileEmail">
            <span>Email</span>
            <div className="profilemail">
              <h1>satish@gmail.com</h1>
              <div className="icon-container">
                <Ban size={18} className="icon" />
                <span className="hover-text">You can't edit email</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NameModal
        isOpen={isNameModalOpen}
        onClose={() => setIsNameModalOpen(false)}
        onSubmit={handleUpdateName}
      />
    </div>
  );
}
