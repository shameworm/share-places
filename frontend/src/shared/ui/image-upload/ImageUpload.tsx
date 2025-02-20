import { ReactNode, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../button";
import { X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Input } from "../input";

interface ImageUploadProps {
  onChange: (files: File[]) => void;
  value?: string[];
  multiple?: boolean;
  maxFiles?: number;
  accept?: string[];
  button?: ReactNode;
  className?: string;
  isAvatar?: boolean;
}

export function ImageUpload({
  onChange,
  value = [],
  multiple = false,
  maxFiles = 1,
  accept = ["image/*"],
  button,
  className = "",
  isAvatar = false,
}: ImageUploadProps) {
  const [previews, setPreviews] = useState<string[]>(value);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newPreviews = acceptedFiles.map((file) =>
        URL.createObjectURL(file),
      );

      if (isAvatar) {
        setPreviews([newPreviews[0]]);
      } else {
        setPreviews((prev) => [...prev, ...newPreviews]);
      }

      onChange(acceptedFiles);
    },
    [onChange, isAvatar],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept.reduce((acc, curr) => ({ ...acc, [curr]: [] }), {}),
    multiple,
    maxFiles,
  });

  const removeImage = (index: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
    onChange(
      previews.filter((_, i) => i !== index).map((url) => new File([], url)),
    );
  };

  const removeAvatar = () => {
    setPreviews([]);
    onChange([]);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div {...getRootProps()} className="cursor-pointer">
        <Input {...getInputProps()} type="file" />
        {isAvatar ? (
          <div className="relative w-24 h-24 mx-auto">
            <Avatar className="w-full h-full">
              <AvatarImage src={previews[0]} />
              <AvatarFallback>{button || "Upload"}</AvatarFallback>
            </Avatar>
            {previews.length > 0 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-0 right-0 -mt-2 -mr-2 hover:bg-destructive"
                onClick={removeAvatar}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ) : (
          button
        )}
      </div>
      {isDragActive && <p>Drop the files here ...</p>}
      {!isAvatar && (
        <div className="grid grid-cols-3 gap-4">
          {previews.map((preview, index) => (
            <div key={preview} className="relative">
              <img
                src={preview || "/placeholder.svg"}
                alt={`Preview ${index + 1}`}
                className="w-24 h-24 rounded-md object-cover"
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-0 right-0 -mt-2 -mr-2"
                onClick={() => removeImage(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
