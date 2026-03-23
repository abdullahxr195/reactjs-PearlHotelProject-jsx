

export default function ListCardEvent( ) {
const data = [    
    { id: 1, title: "Event 1" ,date: "2023-10-15", description: "Description for Event 1" },
    { id: 2, title: "Event 2", date: "2023-10-20", description: "Description for Event 2" },
    { id: 3, title: "Event 3", date: "2023-10-25", description: "Description for Event 3" },
];



return(
<>

<Container>
         <Typography variant="h4">Events</Typography>

            <Grid container spacing={4}>
                {data.map((event) =>{

                    <Grid item key={event.id}>
                        <MenuCardEvent
                            title={event.title}
                            date={event.date}
                            description={event.description}
                        />
                    </Grid>






                })}
                
                


            </Grid>







        </Container>
     
    
    




</>

)

}