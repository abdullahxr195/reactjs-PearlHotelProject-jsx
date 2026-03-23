import React from 'react'
export default function CardEvent(name, date, description) {






  return (
    <>
        
  
   <Card sx={{ maxWidth: 345 }}>
         <CardMedia component="img" image={image} />

            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>



        </Card>


    </>
  )

  }

  









