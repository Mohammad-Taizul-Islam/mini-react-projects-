import React from 'react'
import ReactDOM from 'react-dom'




const modal = ({isOpen, onClose,children}) => {
    if (!isOpen) return null
  return ReactDOM.createPortal(
    <div style={styles.overlay}>
        <div style={styles.modal}>
            <button style={styles.closeButton} onClick={onClose}>X</button>
            {children}
        </div>
    </div>,
    document.getElementById('modal-root')
  );
};




const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },


    modal: {
        position: 'relative',
        padding: 32,
        width: 600,
        backgroundColor: '#fff',
        borderRadius: 8,
    },



    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 8,
        margin: 8,
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },


}



export default modal