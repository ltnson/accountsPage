import { useController, useFormContext } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import dayjs from 'dayjs';
import CalendarSVG from '../../assets/SVG/accountsSVG/CalendarSVG';
import LabelForm from './label-inputAdorment/LabelForm';

//icon of datepicker input
const icon = (props: any) => {
  return <CalendarSVG onClick={props.onClick} />;
};

const DateForm = ({
  name,
  label,
  span,
}: {
  name: string;
  label: string;
  span: string;
}) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
  } = useController({
    name: name,
    defaultValue: new Date().toLocaleDateString('en-US'),
    control,
  });

  // using datepicker for date select and change icon of input date
  return (
    <div className={`col-span-${span}`}>
      <LabelForm label={label} />
      <DatePicker
        slots={{
          openPickerButton: icon,
        }}
        className="input-form"
        defaultValue={dayjs(value)}
        onChange={(date: any) =>
          onChange(moment(date?.$d).format('MM/DD/YYYY'))
        }
        onError={(error: any) => console.log(error)}
      />
    </div>
  );
};

export default DateForm;
