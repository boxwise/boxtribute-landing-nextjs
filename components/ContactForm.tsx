import React from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

interface IContactUsFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactUsFormData>();

  const onSubmit: SubmitHandler<IContactUsFormData> = async (data) => {
    const webhookUrl =
      "https://hooks.slack.com/workflows/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";
    const res = await axios.post(webhookUrl, JSON.stringify(data), {
      withCredentials: false,
    });
    if (res.status === 200) {
      alert("Message was succesfully sent.");
      reset();
    } else {
      alert("There was an error. Please try again later.");
    }
  };

  return (
    <form
      className="mt-4 mb-16 px-4 md:px-16 flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        aria-label="Your Name"
        type="text"
        id="name"
        className="border-2 rounded-none border-black focus:border-yellow active:border-yellow p-2"
        {...register("name", { required: true })}
        placeholder="Your Name"
      />
      {errors.name && errors.name.type === "required" && <span>Please enter your name</span>}
      <input
        aria-label="Your Email"
        type="email"
        id="email"
        className="border-2 rounded-none border-black focus:border-yellow active:border-yellow p-2"
        {...register("email", { required: true })}
        placeholder="Your Email"
      />
      {errors.email && errors.email.type === "required" && <span>Please enter an email</span>}
      <textarea
        aria-label="What did you want to talk about?"
        id="message"
        className="border-2 rounded-none border-black focus:border-yellow active:border-yellow p-2"
        {...register("message", { required: true })}
        placeholder="What did you want to talk about?"
      />
      {errors.message && errors.message.type === "required" && <span>Please add a message</span>}
      <button className="bg-lightblue p-2" type="submit">
        Send us a message
      </button>
    </form>
  );
}
