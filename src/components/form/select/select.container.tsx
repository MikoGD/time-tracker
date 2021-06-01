import React from 'react';
import { SelectView } from './select.view';

interface SelectContainerProps<OptionType> {
  onChange: (optionValue: OptionType | null) => void;
  options: OptionType[];
  value: OptionType;
}

const SelectContainer = <OptionType,>({
  onChange,
  options,
  value,
}: SelectContainerProps<OptionType>): React.ReactElement => {
  return <SelectView<OptionType> onChange={onChange} options={options} value={value} />;
};

export const Select = SelectContainer;
