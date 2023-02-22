import { useState } from "react";
import { helpHttp } from "../components/helpers";




export const useForm = (initialForm, validateForm ) => {

     const [form, setForm] = useState(initialForm);
     const [errors, setErrors] = useState({});
     const [loading, setLoading] = useState(false);
     const [response, setResponse] = useState(null);


    const handleChange = ({target}) =>{
        const {name, value} = target;

        setForm({
            ...form, 
            [ name ]: value
        });
    }


    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors)-length === 0){
            alert("Sending Message");
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/ajax/p.emanuelszarabar@gmail.com", {
                body:form,
                headers:{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((res) => {
                setLoading(false);
                setResponse(true);
                setForm(initialForm);
                setTimeout(() => setResponse(false), 2000);
            })
             }else{
            return;
        }

    }

  return {
   form,
   errors,
   loading,
   response,
   handleChange,
   handleBlur,
   handleSubmit
}
  
}
