import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type TestimonialCardProps = {
  personName: string;
  businessName: string;
  position: string;
  testimonial: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  personName,
  businessName,
  position,
  testimonial,
}) => {
  return (
    <section className='justify-center shadow-2xl'>
      <div style={{ height: '100%', width: '100%' }}>
        <Card sx={{ height:'100%', width:'100%' ,  maxWidth: 450, backgroundColor: '#140c0A' , padding: '1px' }}>
          <CardContent>
            <Typography variant="h6" className='text-brown-400 text-wrap text-center'>
              {businessName}
            </Typography>
            <Typography variant="body2" className='text-brown-400 text-wrap text-center'>
              {personName}
            </Typography>
            <Typography variant="body2" className='text-brown-400 text-wrap text-center'>
              {position}
            </Typography>
            <Typography variant="body2" className='text-brown-400 overflow-auto text-center' style={{ maxHeight: 300 }}>
              {testimonial}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialCard;
