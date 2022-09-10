import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultiSelect({
  handleChange,
  selected,
  title,
  options,
  isMultiple,
}) {
  const labels = [];
  options.map(opt =>
    selected.includes(opt.value) ? labels.push(opt.label) : null,
  );

  return (
    <div>
      <FormControl style={{ width: '200px' }}>
        <InputLabel id="demo-multiple-checkbox-label">{title}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={!!isMultiple}
          value={selected}
          onChange={(ev, element) => {
            ev.preventDefault();
            ev.stopPropagation();
            handleChange(ev, element);
          }}
          input={<OutlinedInput label={title} />}
          renderValue={selectedValue =>
            selectedValue.includes('all') ? 'All Languages' : labels.join(',')
          }
          MenuProps={MenuProps}
          variant="filled"
        >
          {options.map(item => (
            <MenuItem key={item.value} value={item.value}>
              <Checkbox
                checked={selected.indexOf(item.value) > -1}
                color="primary"
              />
              <ListItemText primary={item.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

MultiSelect.propTypes = {
  handleChange: PropTypes.func,
  selected: PropTypes.array,
  title: PropTypes.func,
  options: PropTypes.array,
  isMultiple: PropTypes.bool,
};
