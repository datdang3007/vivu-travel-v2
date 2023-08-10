import { ReactNode } from "react";
import { ControllerFieldState } from "react-hook-form";

export interface FormHelpTextProps {
  fieldState: ControllerFieldState;
}

export interface AutoCompleteOptions {
  label: string;
  id: number | string;
}

export interface FormTitleOptions {
  title: string;
  children: ReactNode;
  size: string;
  mt?: string;
  mb?: string;
  isTitleCenter?: boolean;
}
