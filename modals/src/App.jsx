import './App.css'
import React,{useState} from 'react'

import Modal from './components/Modal'
import Form from './components/Form'


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleFormSubmit = (formData) => {
    console.log(formData)
    handleCloseModal()
  }
  return (
    <div>
      <h1>React Modal with Portal Example ::</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Form onSubmit={handleFormSubmit} />
      </Modal>
    </div>
  )
}

export default App
