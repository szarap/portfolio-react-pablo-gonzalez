
import 'animate.css';
import { useForm } from "../../hooks/useForm";
// import { Loader } from "../helpers/loader";
// import { Message } from "../helpers/message";




const initialForm = {
  name: '',
  lastName: '',
  email: '',
  subject: '',
  comments: '',
};

const validationsForm = (form) =>{
  const errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexLastName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexComments = /^.{1,255}$/;


 if(!form.name.trim()){
    errors.name = "this field is required";
  }else if(!regexName.test(form.name.trim())){
    errors.name = "only letters are allowed"
  }

  if(!form.lastName.trim()){
    errors.lastName = "this field is required";
  }else if(!regexLastName.test(form.lastName.trim())){
    errors.lastName = "only letters are allowed"
  }

  if(!form.email.trim()){
    errors.email = "this field is required";
  }else if(!regexEmail.test(form.email.trim())){
    errors.email = "only letters are allowed"
  }

  if(!form.subject.trim()){
    errors.subject = "this field is required";
  }
  if(!form.comments.trim()){
    errors.comments = "this field is required";
  }else if(!regexComments.test(form.comments.trim())){
    errors.comments = "only letters are allowed"
  } 


  return errors;
};



export const ContactPage = () => {

  const{   
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }= useForm (initialForm, validationsForm )

  return ( 
    <>
    
    <section className="contact__container"> 

        <article className="contact__son">
          <div className="contact__grid">

            <div className="contact__img">
                {/* <img src={contactImg} alt="Contact Us" /> */}
            </div>

            <div className="contact__form">  
              <h2>Get in touch</h2>  
             
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.name}
                  required
                />
                {errors.name && <p>{errors.name}</p>}

                <input
                  type="text"
                  name="lastName"
                  placeholder="Lastname"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.lastName}
                  required
                />
                {errors.lastName && <p>{errors.lastName}</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.email}
                  required
                />
                {errors.email && <p>{errors.email}</p>}

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.subject}
                  required
                />
                {errors.subject && <p>{errors.subject}</p>}

                <textarea
                  name="comments"
                  cols="50" rows="5"
                  placeholder="Share your comments"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.comments}
                  required>
                </textarea>
                {errors.comments && <p>{errors.comments}</p>}

                <button type="submit" value="Enviar">Send</button>
              </form>
              {/* {loading && <Loader />} */}
               {/*  {response && (
                  <Message msg="Your message has been send successfully" bgColor="#198754" />
                )} */}
            </div>
          </div>
        </article>
    </section>
    </>
  )
}

