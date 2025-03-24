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
import { fetchPortfolios } from '../../store/slices/portfoliosSlice';
import { fetchFunds } from '../../store/slices/fundsSlice';
import PortfolioSummary from './components/PortfolioSummary';
import WatchList from './components/WatchList';
import MarketNews from './components/MarketNews';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const { items: portfolios, status: portfoliosStatus, error: portfoliosError } = 
  //   useSelector((state: RootState) => state.portfolios);
  // const { items: funds, status: fundsStatus, error: fundsError } = 
  //   useSelector((state: RootState) => state.funds);

  // useEffect(() => {
  //   if (portfoliosStatus === 'idle') {
  //     dispatch(fetchPortfolios());
  //   }
  //   if (fundsStatus === 'idle') {
  //     dispatch(fetchFunds());
  //   }
  // }, [dispatch, portfoliosStatus, fundsStatus]);

  // if (portfoliosStatus === 'loading' || fundsStatus === 'loading') {
  //   return (
  //     <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
  //       <CircularProgress />
  //     </Grid>
  //   );
  // }

  // if (portfoliosError || fundsError) {
  //   return (
  //     <Alert severity="error">
  //       {portfoliosError || fundsError}
  //     </Alert>
  //   );
  // }

  const funds = [
    { "id": "1", "name": "Global Equity Fund", "ticker": "GEF" },
    { "id": "2", "name": "International Bond Fund", "ticker": "IBF" },
    { "id": "3", "name": "Emerging Markets Fund", "ticker": "EMF" },
    { "id": "4", "name": "Tech Innovators Fund", "ticker": "TIF" },
    { "id": "5", "name": "Healthcare Growth Fund", "ticker": "HGF" },
    { "id": "6", "name": "Real Estate Income Fund", "ticker": "REIF" },
    { "id": "7", "name": "Sustainable Future Fund", "ticker": "SFF" },
    { "id": "8", "name": "Dividend Opportunities Fund", "ticker": "DOF" },
    { "id": "9", "name": "Small Cap Value Fund", "ticker": "SCVF" },
    { "id": "10", "name": "Large Cap Growth Fund", "ticker": "LCGF" },
    { "id": "11", "name": "Balanced Strategy Fund", "ticker": "BSF" },
    { "id": "12", "name": "Energy Sector Fund", "ticker": "ESF" },
    { "id": "13", "name": "Global Infrastructure Fund", "ticker": "GIF" },
    { "id": "14", "name": "Corporate Bond Fund", "ticker": "CBF" },
    { "id": "15", "name": "Consumer Discretionary Fund", "ticker": "CDF" },
    { "id": "16", "name": "Technology Select Fund", "ticker": "TSF" },
    { "id": "17", "name": "Environmental Impact Fund", "ticker": "EIF" },
    { "id": "18", "name": "Financial Services Fund", "ticker": "FSF" },
    { "id": "19", "name": "Utilities Income Fund", "ticker": "UIF" },
    { "id": "20", "name": "Value Investing Fund", "ticker": "VIF" }
  ];

  const portfolios = [
    {
      "id": "1",
      "name": "Retirement Fund",
      "description": "Long-term growth investment for retirement.",
      "status": "Active"
    },
    {
      "id": "2",
      "name": "Tech Innovations",
      "description": "Focused on emerging tech companies.",
      "status": "Active"
    },
    {
      "id": "3",
      "name": "Real Estate Trust",
      "description": "Invest in lucrative real estate projects.",
      "status": "Active"
    },
    {
      "id": "4",
      "name": "Green Energy",
      "description": "Portfolio of companies in renewable energy.",
      "status": "Pending"
    },
    {
      "id": "5",
      "name": "Dividend Kings",
      "description": "Companies with strong dividend payment history.",
      "status": "Active"
    },
    {
      "id": "6",
      "name": "Healthcare Growth",
      "description": "Investments in innovative healthcare solutions.",
      "status": "Closed"
    },
    {
      "id": "7",
      "name": "Global Markets",
      "description": "Diversified international stock portfolio.",
      "status": "Active"
    },
    {
      "id": "8",
      "name": "Small Cap Leaders",
      "description": "High growth potential small-cap companies.",
      "status": "Pending"
    },
    {
      "id": "9",
      "name": "Cryptocurrency Basket",
      "description": "A mix of top cryptocurrencies and tokens.",
      "status": "Active"
    },
    {
      "id": "10",
      "name": "Value Investing",
      "description": "Investments in undervalued stocks.",
      "status": "Active"
    }
  ]

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Grid>
      
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, height: '100%' }}>
          <PortfolioSummary portfolios={portfolios} />
        </Paper>
      </Grid>
      
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, mb: 3 }}>
          <WatchList funds={funds} />
        </Paper>
        <Paper sx={{ p: 2 }}>
          <MarketNews />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;