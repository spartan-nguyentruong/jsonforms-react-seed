import { withJsonFormsControlProps } from '@jsonforms/react';
import { MediaCapture } from './MediaCapture';
import { rankWith, scopeEndsWith } from '@jsonforms/core';
import React from 'react';

interface MediaCaptureControlTesterProps {
  uischema: any;
  schema: any;
}
interface newHaldleChangeProps {
  handleChange(path: string, newValue: any): void;
  path: string;
  newValue: any;
}
interface MediaCaptureControlProps {
  data: any;
  path: string;
  label: string;
  handleChange(path: string, value: any): void;
}

export const MediaCaptureControlTester = rankWith(
  3, //increase rank as needed
  scopeEndsWith('media-capture')
);


const newHaldleChange = ({handleChange, path, newValue}: newHaldleChangeProps) => {
  handleChange(path, newValue)
}

const MediaCaptureControl = ({ data, handleChange, path, label }: MediaCaptureControlProps) => (
  <MediaCapture
    updateValue={(newValue: string) => newHaldleChange({handleChange, path, newValue})}
    value={data}
    path={path}
    label={label}
  />
);

const MediaCaptureControlWithJsonForms = withJsonFormsControlProps(MediaCaptureControl);
export default MediaCaptureControlWithJsonForms