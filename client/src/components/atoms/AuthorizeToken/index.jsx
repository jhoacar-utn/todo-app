import { getToken } from '../../../utils/token';
import { Card, CardContent, Typography } from '@mui/material';
export default function AuthorizeToken({ children }) {
  const token = getToken();
  if (!token) {
    return (
      <Card>
        <CardContent sx={{textAlign: 'center'}}>
          <Typography variant="h5">
            Ud no esta autorizado
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return children;
}
