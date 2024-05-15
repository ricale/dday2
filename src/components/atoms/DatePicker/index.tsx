import { ComponentProps } from 'react';
import DateTimePicker from 'react-native-ui-datepicker';

type DatePickerProps = Omit<
  ComponentProps<typeof DateTimePicker>,
  'date' | 'onChange' | 'mode'
> & {
  date: string | undefined;
  onChange: (date: string) => void;
};
function DatePicker({ date, onChange, ...props }: DatePickerProps) {
  return (
    <DateTimePicker
      {...props}
      date={date}
      mode="single"
      onChange={params => {
        onChange(
          !params.date
            ? ''
            : typeof params.date === 'object'
            ? params.date.toISOString()
            : `${params.date}`,
        );
      }}
    />
  );
}

export default DatePicker;
