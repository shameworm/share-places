import { useRef } from "react";
import { useForm } from "react-hook-form";

import ForwardedInput from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

const Input = ForwardedInput;

const NewPlace: React.FC = () => {
  const titleRef = useRef<HTMLInputElement | null>();
  const descriptionRef = useRef<HTMLTextAreaElement | null>();
  const addressRef = useRef<HTMLInputElement | null>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    // event.preventDefault();
    console.log(data);
  };

  const { ref: refTitle, ...restTitleProps } = register("title", {
    required: {
      value: true,
      message: "This field is required!",
    },
    minLength: {
      value: 5,
      message: "Title is to short!",
    },
  });

  const { ref: refDescription, ...restDescriptionProps } = register(
    "description",
    {
      required: {
        value: true,
        message: "This field is required!",
      },
      minLength: {
        value: 10,
        message:
          "Please describe the place in more detail, (10 characters minimum)",
      },
      maxLength: {
        value: 230,
        message:
          "The description is to large, please short it. (230 characters maximum)",
      },
    }
  );

  const { ref: refAddress, ...restAddressProps } = register("address", {
    required: {
      value: true,
      message: "This field is required!",
    },
  });

  return (
    <div className="w-full mx-auto max-w-[40rem]">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Title"
          type="text"
          error={errors.title}
          ref={(e) => {
            refTitle(e);
            titleRef.current = e as HTMLInputElement;
          }}
          {...restTitleProps}
        ></Input>
        <Input
          label="Description"
          isTextArea={true}
          error={errors.description}
          ref={(e) => {
            refDescription(e);
            descriptionRef.current = e as HTMLTextAreaElement;
          }}
          {...restDescriptionProps}
        ></Input>
        <Input
          label="Address"
          type="text"
          error={errors.address}
          ref={(e) => {
            refAddress(e);
            addressRef.current = e as HTMLInputElement;
          }}
          {...restAddressProps}
        ></Input>
        <Button inverse type="submit">
          Submit
        </Button>
        <Button to="../" type="button">
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default NewPlace;
