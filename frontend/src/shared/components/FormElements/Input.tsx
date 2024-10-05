import { ForwardedRef, forwardRef } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
interface InputProps {
  label: string;
  type?: string;
  isTextArea?: boolean;
  error: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  value?: string;
}
const Input: React.ForwardRefRenderFunction<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
> = ({ label, type, error, isTextArea, value, ...props }, ref) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-xl font-bold mb-2">
        {label}
      </label>
      {isTextArea && (
        <textarea
          {...props}
          ref={ref as ForwardedRef<HTMLTextAreaElement>}
          className={`shadow appearance-none whitespace-nowrap border rounded w-full py-3 h-40 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            error && 'border-[#f05a5a]'
          }`}
          value={value as string}
        ></textarea>
      )}
      {!isTextArea && (
        <input
          {...props}
          type={type}
          ref={ref as ForwardedRef<HTMLInputElement>}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            error && 'border-[#f05a5a]'
          }`}
          value={value as string}
        />
      )}
      {error?.message && (
        <p className="text-[#b93d3d] text-sm italic pt-1">
          {error.message?.toString()}
        </p>
      )}
    </div>
  );
};

const ForwardedInput = forwardRef(Input);

export default ForwardedInput;
