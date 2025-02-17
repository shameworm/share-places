import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { CreatePlaceFormValues, createPlaceSchema } from "../model";

export const useCreatePlace = () => {
  const form = useForm<CreatePlaceFormValues>({
    resolver: zodResolver(createPlaceSchema),
    defaultValues: {
      title: "",
      description: "",
      address: "",
    },
  });

  function onSubmit(data: CreatePlaceFormValues) {
    console.log(data);
    form.reset();
  }

  return { form, onSubmit };
};
