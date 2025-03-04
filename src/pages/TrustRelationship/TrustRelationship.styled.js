import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const SearchTextField = styled(TextField)({
  color: '#000',
  backgroundColor: '#ffffff',
  padding: '0',
  width: '19rem',
  fontWeight: 'bold',
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    height: '2.5rem',
    '& fieldset': {
      borderColor: '#86C232',
      padding: '0',
    },
    '&:hover fieldset': {
      borderColor: '#86C232',
      borderWidth: '2px',
    },
  },
});

export const FilterButton = styled(Button)({
  color: '#373A3E',
  backgroundColor: '#ffffff',
  height: '2.5rem',
  dispay: 'flex',
  width: '6.8rem',
  fontSize: '0.8rem',
  fontWeight: '400',
  textTransform: 'capitalize',
  padding: '0.5rem 1rem 0.5rem 1rem',
  borderRadius: '4px',
});
