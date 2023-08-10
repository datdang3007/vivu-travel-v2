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
  subtitle?: string;
  children: ReactNode;
  mt?: string;
  mb?: string;
  titleSpacing?: string;
  isTitleCenter?: boolean;
}
