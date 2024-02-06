import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Thanks = () => {
     const [modalIsOpen, setModalIsOpen] = useState(true);
     const navigate = useNavigate();

     useEffect(() => {
          AOS.init({
               duration: 1000,
          });
     }, []);

     const closeModal = () => {
          setModalIsOpen(false);
          navigate('/');
     };
     return (
          <div className=' overflow-hidden'>
          <Modal
               isOpen={modalIsOpen}
               onRequestClose={closeModal}
               style={{
                    overlay: {
                         backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                         color: 'black',
                         width: '50%',
                         height: '50%',
                         margin: 'auto',
                         backgroundColor: 'white',
                         borderRadius: '10px',
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'center',
                         alignItems: 'center',
                    },
               }}
          >
               <div style={{ textAlign: 'center' }} data-aos="fade-down" className=' overflow-hidden'>
                    <h2 className='text-midBlue font-bold text-2xl'>🎉 Thank You for Registering! 🎉</h2>
                    <h3 className='text-midBlue font-bold text-xl'>Your verification is Pending</h3>
                    <h4 className='text-red'>Check your Email For Further Instructions</h4>
               </div>
               <button 
                    className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 mt-6"
                    onClick={closeModal}
                    data-aos="fade-up"
               >
                    Close
               </button>
               </Modal>
          </div>
     );
};

export default Thanks;