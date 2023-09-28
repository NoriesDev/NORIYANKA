
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Footer() {
  return (
    <Stack spacing={2}>
      <Pagination style={{ display: 'flex', justifyContent: 'center', padding: '15px', paddingBottom: '0px' }} count={5} shape="rounded" />
      <p style={{ display: 'flex', justifyContent: 'center', padding: 'none', fontWeight: 'lighter' }} >Copyright 2023</p>
    </Stack>
  );
}