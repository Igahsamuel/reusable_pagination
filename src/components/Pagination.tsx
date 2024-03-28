// import  React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps{
  count: number,
  spacing: number,
  page: number,
  // currentPost: string | number | boolean,
  setCurrentPage: any
  // handleChange: any
}

export default function PaginationControlled({count, spacing, page, setCurrentPage}: PaginationProps) {
  // const [page, setPage] = React.useState(1);
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault()
    setCurrentPage(value);
  };

  return (
    <Stack spacing={spacing}>
      <Typography>page: {page}</Typography>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}
