import React, { useState } from 'react';
import Select from 'react-select';

interface SelectViewProps<OptionType> {
  onChange: (optionValue: OptionType | null) => void;
  options: OptionType[];
  value: OptionType;
}

export const SelectView = <OptionType,>({
  onChange,
  options,
  value,
}: SelectViewProps<OptionType>): React.ReactElement => {
  const [selectValue, setSelectValue] = useState<OptionType | null>(value);

  const onSelectChange = (optionValue: OptionType | null) => {
    setSelectValue(optionValue);
    onChange(optionValue);
  };

  return <Select options={options} onChange={onSelectChange} value={selectValue} />;
};
