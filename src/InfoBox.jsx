import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    const Cloudy_img = "https://images.unsplash.com/photo-1509803874385-db7c23652552?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWR8ZW58MHx8MHx8fDA%3D";
    
    const HOT_img = "https://images.unsplash.com/photo-1661962265343-449d0e288853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEhvdCUyMGVudmlyb25tZW50fGVufDB8fDB8fHww";
    const COLD_img = "https://images.unsplash.com/photo-1640955788205-46267ab3b3cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_img = "https://images.unsplash.com/photo-1603262439120-3e17d13bab3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
    <div className="InfoBox">
       <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
           ? RAINY_img
           : info.temp < 20
           ? COLD_img
           : HOT_img
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {

          info.humidity > 80
           ? <ThunderstormIcon />
           : info.temp > 15
           ? <SunnyIcon/>
           : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature - {info.temp}&deg;C</p>
          <p>Humidity - {info.humidity}</p>
          <p>Max-temp - {info.tempMAX}&deg;C</p>
          <p>Min-temp - {info.tempMIN}&deg;C</p>
          <p>The weather can be described as {info.weather} and feels like - {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
         </Card>
      </div>
    </div>
   )
}