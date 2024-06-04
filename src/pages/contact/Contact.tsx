import { useState } from "react";
import PageFadeIn from "../../components/animation/PageFadeIn";
import emailjs from "@emailjs/browser";
import { Bounce, toast } from "react-toastify";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
        },
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

          clearForm();
        },
        () => {
          toast.error("Error sending message", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
      )
      .finally(() => setIsSending(false));
  }

  function clearForm() {
    setName("");
    setEmail("");
    setMessage("");
  }

  const inputBlockClassName = "relative z-0 w-full mb-8";
  const inputClassName =
    "peer block w-full appearance-none border-0 border-b-[2px] border-[#b5b5b5] bg-transparent px-0 py-2.5 text-gray-lite focus:outline-none focus:ring-0 dark:border-[#333333] dark:text-white";
  const labelClassName =
    "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium dark:text-color-910";

  return (
    <PageFadeIn>
      <div className="pb-[30px] md:pb-[60px]">
        <h2 className="after-effect mb-12 pl-4 pt-12 after:left-60 after:top-[76px] md:mb-[30px] md:pl-[60px]">
          Contact
        </h2>

        <div className="mx-4 rounded-xl bg-color-810 p-4 dark:border-2 dark:border-[#212425] dark:bg-[#111111] md:mx-[60px] md:p-16">
          <h3 className="text-4xl">
            <span className="text-gray-lite dark:text-[#a6a6a6]">
              I&apos;m always open to
            </span>
            <br />
            <span className="font-semibold dark:text-white">
              New Job Opportunities.
            </span>
          </h3>

          <form onSubmit={handleSubmit}>
            <div className={`${inputBlockClassName} mt-[40px]`}>
              <input
                type="text"
                id="name"
                name="name"
                className={`${inputClassName} autofill:bg-transparent focus:border-[#ff6464] dark:focus:border-[#ff6464]`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
              <label
                htmlFor="name"
                className={`${labelClassName} peer-focus:text-[#ff6464]`}
              >
                Name &#42;
              </label>
            </div>

            <div className={inputBlockClassName}>
              <input
                type="email"
                id="user-email"
                name="user-email"
                className={`${inputClassName} autofill:text-red-900 focus:border-[#5185d4] dark:focus:border-[#5185d4]`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <label
                htmlFor="user-email"
                className={`${labelClassName} peer-focus:text-[#5185d4]`}
              >
                Email &#42;
              </label>
            </div>

            <div className={inputBlockClassName}>
              <input
                type="text"
                id="message"
                name="message"
                className={`${inputClassName} autofill:bg-yellow-200 focus:border-[#ca56f2] dark:focus:border-[#ca56f2]`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <label
                htmlFor="message"
                className={`${labelClassName} peer-focus:text-[#ca56f2]`}
              >
                Message &#42;
              </label>
            </div>

            <div className="mt-3 inline-block rounded-lg from-[#fa5252] to-[#dd2476] transition-all duration-300 ease-in-out hover:bg-gradient-to-r">
              <button
                type="submit"
                disabled={isSending}
                className="cursor-pointer rounded-lg border-[2px] border-color-910 px-6 py-2 font-semibold transition duration-200 ease-in hover:border-transparent hover:text-white dark:text-white"
              >
                {isSending ? "Submitting" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageFadeIn>
  );
}

export default Contact;
