export interface InputData {
  labelValue: string;
  placeholder: string;
  type: string;
  error?: string;
  inputProps: string;
  style: Record<string, string>;
}

export interface MapErrorsFormik {
  [key: string]: string | undefined;
}
