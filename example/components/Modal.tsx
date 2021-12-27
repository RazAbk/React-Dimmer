import * as React from 'react';

interface IModalProps {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({closeModal}: IModalProps) => {
    return (
        <div className="modal">
            <div className="modal-header">
                <h2 onClick={() => {closeModal(false)}}>X</h2>
            </div>
            <div className="modal-body">
                <h2>This is a modal</h2>
            </div>
        </div>
    )
}
