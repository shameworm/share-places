import { useState, useRef } from "react";
import { Control, FieldValues, FormState, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form";
import { Input } from "~/shared/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "~/shared/ui/avatar";

type FormType<T extends FieldValues> = {
  control: Control<T> | undefined;
  formState: FormState<T> | undefined;
};

type ImageUploadFieldProps<T extends FieldValues> = {
  form: FormType<T>;
  name: Path<T>;
  label: string;
  isAvatar?: boolean;
  onChange?: (files: FileList | null) => void;
};

export function ImageUploadField<T extends FieldValues>({
  form,
  name,
  label,
  isAvatar = false,
  onChange,
}: ImageUploadFieldProps<T>) {
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  if (!form) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setImageFiles(files);
      onChange?.(files);
    }
  };

  const renderAvatar = () => {
    if (imageFiles && imageFiles[0]) {
      const avatarUrl = URL.createObjectURL(imageFiles[0]);
      return (
        <Avatar className="mx-auto w-24 h-24">
          <AvatarImage src={avatarUrl} alt="Avatar Image" />
        </Avatar>
      );
    }
    return (
      <Avatar className="mx-auto w-24 h-24">
        <AvatarFallback>FL</AvatarFallback>
      </Avatar>
    );
  };

  const renderMultipleImages = () => {
    if (imageFiles && imageFiles.length > 0) {
      return (
        <div
          className={`grid items-center ${imageFiles.length > 1 ? "grid-cols-3" : "grid-cols-1"}`}
        >
          {Array.from(imageFiles).map((file, index) => {
            const imageUrl = URL.createObjectURL(file);
            return (
              <img
                key={index}
                src={imageUrl}
                alt={`Uploaded Image ${index + 1}`}
                className="w-16 h-16 object-cover rounded-md"
              />
            );
          })}
        </div>
      );
    }
    return null;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderInputComponent = (field: any) => {
    return (
      <>
        {isAvatar ? renderAvatar() : renderMultipleImages()}
        <Input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="mt-2"
          onChange={(e) => {
            handleFileChange(e);
            if (e.target.files && e.target.files.length > 0) {
              if (isAvatar) {
                field.onChange(e.target.files[0]);
              } else {
                field.onChange(e.target.files);
              }
            }
          }}
          multiple={!isAvatar}
        />
      </>
    );
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{renderInputComponent(field)}</FormControl>
          {form?.formState?.errors[name] && (
            <FormMessage>
              {form.formState.errors[name]?.message?.toString()}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}
