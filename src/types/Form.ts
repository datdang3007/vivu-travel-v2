import { ControllerFieldState } from "react-hook-form";

export interface FormHelpTextProps {
  fieldState: ControllerFieldState;
}

export interface AutoCompleteOptions {
  label: string;
  id: number | string;
}