"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/utils/sendEmail";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Script from "next/script";
import { FC } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <main>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async={true}
        defer={true}
      />

      <form onSubmit={handleSubmit(onSubmit)} action="/api/handler">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <Input
          type="text"
          className="mb-4"
          {...register("name", { required: true })}
        />
        <label htmlFor="email" className=" font-semibold">
          Email
        </label>
        <Input
          type="email"
          className="mb-4"
          {...register("email", { required: true })}
        />
        <label htmlFor="message" className="font-semibold">
          More details as you wish
        </label>
        <Textarea {...register("message", { required: true })} rows={10} />
        <div
          className="cf-turnstile checkbox"
          data-sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}
        />
        {/* TODO Find ways to implement loading status while API is on-call */}
        <Button className="mt-4 h-14 w-full hover:bg-red dark:text-black dark:hover:bg-blue">
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Submit
        </Button>
      </form>
    </main>
  );
};

export default ContactForm;
