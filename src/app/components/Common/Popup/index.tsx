/**
 *
 * Modal
 *
 */
 import React from 'react';
 import { Modal } from '@mantine/core';
 
//  import './style.css';
 
 export function Popup(props) {
   return (
     <>
       <Modal
         opened={props.opened}
         onClose={props.handleClose}
         centered={props.centered}
         size={props.size}
         overflow={props.overflow}
         title={props.title}
       >
         {props.content}
       </Modal>
     </>
   );
 }