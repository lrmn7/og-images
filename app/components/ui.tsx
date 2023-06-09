import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { forwardRef } from "react";

import type { VariantProps } from "class-variance-authority";
import { cx, cva } from "class-variance-authority";

const INTERACTION_RESET_STYLES =
  " focus:outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/25 disabled:cursor-not-allowed disabled:opacity-50 ";

export const buttonStyles = cva(
  cx(
    "flex flex-row items-center justify-center leading-none gap-2 rounded-lg border border-white/25  hover:scale-105 active:scale-95 transition-transform",
    INTERACTION_RESET_STYLES
  ),
  {
    variants: {
      intent: {
        primary: "bg-gradient-to-br from-blue-600 to-purple-600",
        secondary: "bg-white/5",
      },
      size: {
        small: "px-3 py-1.5 font-medium text-sm",
        medium: "px-4 py-2 font-semibold text-base",
        large: "px-5 py-2.5 font-bold text-lg",
      },
      justifyItems: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
      },
    },
    defaultVariants: {
      intent: "secondary",
      size: "medium",
      justifyItems: "center",
    },
  }
);

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonStyles> & {
      iconLeft?: ReactNode;
      iconRight?: ReactNode;
    }
>(function ButtonWithRef(
  {
    children,
    iconLeft = null,
    iconRight = null,
    type = "button",
    className,
    intent,
    size,
    justifyItems,
    ...otherProps
  },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={buttonStyles({ intent, size, justifyItems, className })}
      {...otherProps}
    >
      {iconLeft}

      {children}

      {iconRight}
    </button>
  );
});

export const inputStyles = cva(
  cx(
    "rounded-lg border border-white/25 bg-white/5 px-4 py-2 text-base font-medium leading-none focus:outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/25 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-white/50",
    INTERACTION_RESET_STYLES
  )
);
export const inputLabelStyles = cva("text-lg font-semibold");
export const inputErrorMessageStyles = cva("text-sm text-red-500");

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof inputStyles> & {
      label?: string;
      error?: string;
    }
>(function InputWithRef(
  {
    label = null,
    error = null,
    id,
    type = "text",
    disabled = false,
    className,
    ...otherProps
  },
  ref
) {
  return (
    <fieldset
      className="flex flex-col items-stretch justify-start gap-0.5"
      disabled={disabled}
    >
      {label ? (
        <label htmlFor={id} className={inputLabelStyles()}>
          {label}
        </label>
      ) : null}
      <input
        ref={ref}
        id={id}
        type={type}
        className={inputStyles({ className })}
        {...otherProps}
      />
      {error ? <p className={inputErrorMessageStyles()}>{error}</p> : null}
    </fieldset>
  );
});
