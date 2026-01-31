"use client";

import React, { useEffect } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "../UI/Input/Input";
import { TextareaInput } from "../UI/TextareaInput/TextareaInput";
import { IBookingData } from "@/types/bookingData";
import { STORAGE_KEY } from "@/helper/CONST";
import { toast } from "react-hot-toast";
import { Button } from "../UI/Button/Button";

export const BookingForm = React.memo(() => {
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
    localStorage.removeItem(STORAGE_KEY);
    reset({ name: "", email: "", bookingDate: null, comment: "" });
  };

  return (
    <div className="px-[57px] py-[44px] border border-gray-light rounded-2xl">
      <h3 className="text-[20px] leading-[1.2] font-semibold mb-[8px] text-main">
        Book your campervan now
      </h3>
      <p className="text-[16px] leading-[1.5] font-normal text-gray mb-6">
        Stay connected! We are always ready to help you.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[14px] w-full"
      >
        <div className="relative w-full">
          {" "}
          <Input
            id="name"
            label=""
            placeholder="Name*"
            autoComplete="name"
            className={`w-full ${formData?.name ? "bg-white" : "bg-inputs"}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="absolute text-accent-red text-xs mt-[2px]">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="relative w-full">
          {" "}
          <Input
            id="email"
            label=""
            type="email"
            placeholder="Email*"
            autoComplete="email"
            className={`w-full ${formData?.email ? "bg-white" : "bg-inputs"}`}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.email && (
            <p className="absolute text-accent-red text-xs mt-[1px]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative w-full">
          {" "}
          <Controller
            control={control}
            name="bookingDate"
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DatePicker
                id="bookingDate"
                name="bookingDate"
                preventOpenOnFocus
                shouldCloseOnSelect
                autoFocus={false}
                formatWeekDay={(nameOfDay) =>
                  nameOfDay.toUpperCase().slice(0, 3)
                }
                selected={field.value}
                onChange={(date: Date | null) => field.onChange(date)}
                placeholderText="Booking date*"
                minDate={new Date()}
                autoComplete="off"
                calendarStartDay={1}
                className={`w-full px-[18px] py-[18px] border border-gray-300 rounded-xl placeholder-gray focus:outline-none focus:ring-1 focus:ring-gray-medium focus:border-gray-medium sm:text-sm transition-colors ${
                  formData?.bookingDate ? "bg-white" : "bg-inputs"
                }`}
              />
            )}
          />
          {errors.bookingDate && (
            <p className="absolute text-accent-red text-xs mt-[1px]">
              {errors.bookingDate.message}
            </p>
          )}
        </div>

        <TextareaInput
          placeholder="Comment"
          {...register("comment")}
          className={`w-full ${formData?.comment ? "bg-white" : "bg-inputs"}`}
        />

        <div className="mt-6 flex justify-center justify-center">
          <Button type="submit" variant="primary">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
});

BookingForm.displayName = "BookingForm";
