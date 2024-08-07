import React, { useState } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from "./FormInput";

import ButtonComponent from "../button/ButtonComponent";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  console.log(formFields);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log("Respuesta de inicio de sesión:", response);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Mail o contraseña incorrecta");
        resetFormFields();
      }
      console.error("Error al iniciar sesión:", error.message);
      // Aquí puedes agregar lógica para mostrar el error al usuario
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h1>YA TIENES UNA CUENTA</h1>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Inicia sesión con Email y Contraseña
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <FormInput
            label="Contraseña"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <ButtonComponent>Iniciar sesión</ButtonComponent>
        <ButtonComponent onClick={signInWithGoogle} buttonType="google">
          Iniciar sesión con Google
        </ButtonComponent>
      </form>
    </div>
  );
};

export default SignInForm;
