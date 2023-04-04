import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import Swal from 'sweetalert2'
import "../styles/form.css";
import { getFirestore, collection, addDoc, updateDoc, doc} from "firebase/firestore"

function checkEmailRegex(email){
  const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
  return regexEmail.test(email)
}

function sendUpdateItemStockRequests(cart){
  // Uses promise in order to finish looping before cart is modified in next line.
  // Avoids error while being called before clearCart.
  return new Promise((resolve, reject)=>{
    const temp_cart = [...cart];
    temp_cart.forEach(item => {
      const db = getFirestore();
      const item_doc = doc(db, 'Productos', item.id)
      updateDoc(item_doc,{stock: (item.stock - 1) })
    })
    resolve()
  })
}

const Form = () => {
  const {cart, totalPrice, clearCart} = useCartContext();
  const [fieldName, setName] = useState("");
  const [fieldEmail, setEmail] = useState("");
  const [fieldPhone, setPhone] = useState("");
  const [fieldAddress, setAddress] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const displayAlert = (request) => {
    Swal.fire({
      title: 'Has Creado tu Orden',
      text: `ID de seguimiento : ${request.id}`,
      icon: 'success',
      confirmButtonText: 'OK'
    })
  };

  const displayError = (reason) => {
    Swal.fire({
      title: 'Ocurrió un error',
      text: `No pudimos crear tu order: ${reason}`,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

  const sendConfirmationEmail = async () => {
    const message = {
      to: fieldEmail,
      subject: 'Confirmación de orden',
      text: `Hola ${fieldName}, gracias por tu orden.`,
    };

    // Send the email message.
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      console.error('Failed to send confirmation email:', response.statusText);
    }
  }

  const submitNewOrder = async () => {
    if (!checkEmailRegex(fieldEmail)){
      displayError("Email Invalido")
      return
    }
    if (fieldEmail !== confirmEmail) {
      displayError("Los correos electrónicos no coinciden");
      return;
    }
    const order = {
      name: fieldName,
      email: fieldEmail,
      phone: fieldPhone,
      address: fieldAddress,
      total: totalPrice(),
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      })),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "Orders");
    const result = await addDoc(ordersCollection, order);
    setName("")
    setEmail("")
    setPhone("")
    setAddress("")
    setConfirmEmail("")
    await sendUpdateItemStockRequests(cart)
    clearCart()
    displayAlert(result);
    await sendConfirmationEmail();
  };

  return (
    <div>
    <form className="checkout-form">
      <span id="formTitle">Completá tus datos</span>
      <input
        type="text"
        placeholder="Nombre y apellido"
        className="checkout-field"
        onChange={(e) => setName(e.target.value)}
        value={fieldName}
      />
      <input
        type="text"
        placeholder="Mail"
        className="checkout-field"
        onChange={(e) => setEmail(e.target.value)}
        value={fieldEmail}
      />
      <input
        type="text"
        placeholder="Confirmar mail"
        className="checkout-field"
        onChange={(e) => setConfirmEmail(e.target.value)}
        value={confirmEmail}
      />
      <input
        type="text"
        placeholder="Teléfono"
        className="checkout-field"
        onChange={(e) => setPhone(e.target.value)}
        value={fieldPhone}
      />
      <input
        type="text"
        placeholder="Dirección"
        className="checkout-field"
        onChange={(e) => setAddress(e.target.value)}
        value={fieldAddress}
      />
      <button id="checkout-submit" onClick={() => submitNewOrder()} type="button">
        Finalizar compra
      </button>
    </form>
  </div>
  );
};

export default Form;


