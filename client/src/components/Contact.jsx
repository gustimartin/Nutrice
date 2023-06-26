function Contact() {
  return (
    <div className="h-screen w-full  grid md:grid-cols-2  justify-center items-center  p-4 ">
      <div className=" ">
        {/* <div className=" w-full h-60 ">
          <img
            src="./log1.png"
            alt=""
            className=" w-full h-full  object-scale-down  "
          />
        </div> */}
        <div>
          <h1 className=" first-letter:text-purple-800  text-zinc-800 px-4">
            Nutrice
          </h1>
          <h3 className="text-2xl text-zinc-800 px-10 py-2">
            Alimentos Naturales
          </h3>

          <p className=" text-xl text-zinc-800">
            Estamos aquí para responder tus preguntas, brindarte información
            adicional y ayudarte en lo que necesites. Si tienes alguna consulta
            sobre nuestros productos, sugerencias o simplemente deseas compartir
            tus experiencias con Nutrice, no dudes en contactarnos.
          </p>
        </div>
        <div></div>
      </div>

      <div
        className="justify-items-center
 justify-self-stretch place-content-center
"
      >
        <form className="justify-center block p-6  rounded-lg  shadow-xl max-w-md  bg-opacity-20 backdrop-blur-md drop-shadow-lg    ">
          <div className="form-group mb-6   w-96">
            <input
              // {...register("user_name", {
              //   required: "Username is required",
              //   minLength: {
              //     value: 3,
              //     message: "Username must be atleast 3 charracters long",
              //   },
              // })}
              type="text"
              className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal    
    bg-clip-padding
    
    rounded
 "
              placeholder="Name"
              name="user_name"
            />
            {/* <p className=" text-red-700"> 
          {errors.user_name?.message}</p> */}
          </div>
          <div className="form-group mb-6">
            <input
              // {...register("user_email", {
              //   required: "Email is required",
              //   pattern: {
              //     value:
              //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              //     message: "Email must be valid",
              //   },
              // })}
              name="user_email"
              type="email"
              className="form-control block
          
    w-full
    px-3
    py-1.5
    text-base
    font-normal
   
    border border-solid border-amber-50
    rounded
    transition
    ease-in-out
    m-0"
              placeholder="Email"
            />
            {/* <p className=" text-red-700">{errors.user_email?.message}</p> */}
          </div>
          <div className="form-group mb-6">
            <textarea
              // {...register("Message", {
              //   required: "Message is required",
              //   minLength: {
              //     value: 15,
              //     message: "Message must be atleast 15 charracters long",
              //   },
              //   maxLength: {
              //     value: 150,
              //     message: "Message must be less than 150 charracters",
              //   },
              // })}
              name="Message"
              className="
    form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    bg-white bg-clip-padding
    border border-solid border-amber-50
    rounded
    
   
  "
              rows="3"
              placeholder="Message"
            ></textarea>
            {/* <p className=" text-red-700"> {errors.Message?.message}</p> */}
          </div>
          <div className="form-group  text-center mb-6"></div>
          <button
            type="submit"
            value="send"
            className=" text-white cursor-pointer p-2 flex justify-center rounded-md shadow-md w-full bg-purple-800 hover:bg-purple-900  mt-1 "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
