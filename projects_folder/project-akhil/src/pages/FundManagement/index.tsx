import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { AppDispatch, RootState } from '../../store';
import { fetchFunds } from '../../store/slices/fundsSlice';
import FundList from './components/FundList';
import FundSearch from './components/FundSearch';

const FundManagement = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const { items: funds, status, error } = useSelector((state: RootState) => state.funds);

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchFunds());
  //   }
  // }, [dispatch, status]);

  if (status === 'loading') {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <CircularProgress />
      </Grid>
    );
  }

  // if (error) {
  //   return (
  //     <Alert severity="error">
  //       {error}
  //     </Alert>
  //   );
  // }

  const funds = [
    { "id": 1, "name": "Global Growth Fund", "ticker": "GGF" },
    { "id": 2, "name": "Global Equity Express", "ticker": "GGX" },
    { "id": 3, "name": "Global Zenith Investment", "ticker": "GGZ" },
    { "id": 4, "name": "Global Yield Opportunity", "ticker": "GGY" },
    { "id": 5, "name": "Global Quantum Ventures", "ticker": "GGQ" },
    { "id": 6, "name": "Global Alpha Fund", "ticker": "GGA" },
    { "id": 7, "name": "Global Beta Portfolio", "ticker": "GGB" },
    { "id": 8, "name": "Global Capital Innovators", "ticker": "GGC" },
    { "id": 9, "name": "Global Dynamic Trust", "ticker": "GGD" },
    { "id": 10, "name": "Global Emerging Markets", "ticker": "GGE" },
    { "id": 11, "name": "Global Financial Solutions", "ticker": "GGF1" },
    { "id": 12, "name": "Global Growth Advantage", "ticker": "GGF2" },
    { "id": 13, "name": "Global Green Initiative", "ticker": "GGF3" },
    { "id": 14, "name": "Global Goods Fund", "ticker": "GGF4" },
    { "id": 15, "name": "Global Gateway Opportunities", "ticker": "GGF5" }
  ]

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Fund Management
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2, mb: 3 }}>
          <FundSearch />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <FundList funds={funds} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FundManagement;