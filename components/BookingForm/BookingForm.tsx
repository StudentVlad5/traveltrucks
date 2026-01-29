"use client";

import { useEffect } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../UI/Input/Input";
import { TextareaInput } from "../UI/TextareaInput/TextareaInput";
import { IBookingData } from "@/types/bookingData";
import { STORAGE_KEY } from "@/helper/CONST";
import { toast } from "react-hot-toast";

export const BookingForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IBookingData>({
    defaultValues: {
      name: "",
      email: "",
      bookingDate: null,
      comment: "",
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsed = JSON.parse(savedData);
      reset({
        ...parsed,
        bookingDate: parsed.bookingDate ? new Date(parsed.bookingDate) : null,
      });
    }
  }, [reset]);

  const formData = useWatch({
    control,
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const onSubmit = (data: IBookingData) => {
    console.log("Booking Data Submit:", data);
    toast.success("Booking successful!");

    // Очищуємо форму та LocalStorage
    localStorage.removeItem(STORAGE_KEY);
    reset({ name: "", email: "", bookingDate: null, comment: "" });
  };

  return (
    <div className="p-6 border border-gray-light rounded-2xl">
      <h3 className="text-xl font-semibold mb-2 text-main">
        Book your campervan now
      </h3>
      <p className="text-gray-dark mb-6">
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {/* Name */}
        <div className="relative">
          <Input
            id="name"
            label=""
            placeholder="Name*"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-accent-red text-xs">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <Input
            id="email"
            label=""
            type="email"
            placeholder="Email*"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.email && (
            <span className="text-accent-red text-xs">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Date Picker (через Controller, бо це сторонній компонент) */}
        <div className="relative">
          <Controller
            control={control}
            name="bookingDate"
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date: Date | null) => field.onChange(date)}
                placeholderText="Booking date*"
                minDate={new Date()}
                className="w-full px-[18px] py-[18px] border-none rounded-xl bg-gray-ghost placeholder-gray-medium focus:outline-none"
              />
            )}
          />
          {errors.bookingDate && (
            <span className="text-accent-red text-xs">
              {errors.bookingDate.message}
            </span>
          )}
        </div>

        {/* Comment */}
        <TextareaInput placeholder="Comment" {...register("comment")} />

        <button
          type="submit"
          className="mt-6 px-10 py-4 bg-accent-red text-white rounded-full font-medium 
                     hover:bg-red-600 transition-colors self-center lg:self-start"
        >
          Send
        </button>
      </form>
    </div>
  );
};
