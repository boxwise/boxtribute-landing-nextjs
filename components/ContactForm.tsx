type PropsContactForm = {
  form_title: string;
};

const ContactForm = ({ form_title }: PropsContactForm) => {
  return (
    <form className="flex flex-col" action="/api/form" method="post">
      <h2 className="text-5xl mb-2">{form_title}</h2>
      <label htmlFor="topic"></label>
      <input
        className="border px-4 text-lg py-4 my-4"
        type="text"
        id="first"
        name="first"
        required
        placeholder="Topic"
      />
      <div className="flex w-full my-4">
        <label htmlFor="first name"></label>
        <input
          className="border w-1/2 px-4 text-lg py-4"
          type="text"
          id="first name"
          name="first name"
          required
          placeholder="First name"
        />

        <label htmlFor="last name"></label>
        <input
          className="border w-1/2 px-4 text-lg py-4 border-l-0"
          type="text"
          id="last name"
          name="last name"
          required
          placeholder="Last name"
        />
      </div>
      <label htmlFor="email"></label>
      <input
        className="border px-4 text-lg py-4 my-4"
        type="email"
        id="email"
        name="email"
        required
        placeholder="Email address"
      />
      <label htmlFor="message"></label>
      <textarea
        className="border px-4 text-lg py-4 mb-8 mt-4"
        rows={8}
        id="message"
        name="message"
        required
        placeholder="Message"
      />

      <button
        className="bg-red rounded-lg px-8 py-2 text-white text-lg ml-auto"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
