import React, { useState } from 'react';
import Select from 'react-select';

export interface SelectProps<OptionType> {
  onChange: (optionValue: OptionType | null) => void;
  options: OptionType[];
  value?: OptionType;
  name?: string;
}

export const CustomSelect = <OptionType,>({
  onChange,
  options,
  value,
  name,
}: SelectProps<OptionType>): React.ReactElement => {
  const [selectValue, setSelectValue] = useState<OptionType | null>(value ?? null);

  const onSelectChange = (optionValue: OptionType | null) => {
    setSelectValue(optionValue);
    onChange(optionValue);
  };

  return <Select options={options} onChange={onSelectChange} value={selectValue} name={name} />;
};
