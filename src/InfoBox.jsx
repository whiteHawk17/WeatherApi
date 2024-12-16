

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";



export default function InfoBox({info}){

    const HOT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHmrp_IQx8Wo5hI-Iaxmbj-mmAFZWFjdXVBg&s"
    const COLD_URL="https://media.istockphoto.com/id/637409946/photo/thermometer-on-snow-shows-low-temperatures-under-zero.jpg?s=612x612&w=0&k=20&c=fmRJtO3RRIMA6TV3JI93CSlteBTrQI1PAjmWaRLiBlA="
    const RAIN_URL="https://static.vecteezy.com/system/resources/thumbnails/051/263/379/small/rainy-day-serenity-water-droplets-and-floating-autumn-leaves-photo.jpg"

    return(
        <div className='InfoBox'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}

                
                image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                <p>Temperature={info.tempMin}&deg;C</p>
                <p>Humidity={info.humidity}</p>
                <p>Min Temp={info.tempMin}</p>
                <p>Max Temp={info.tempMax}</p>
                <p>The weather can be described as <i>{info.weather} </i>and feels like ={info.feelsLike}&deg;C</p>


                </Typography>
            </CardContent>
           
            </Card>
        </div>
    )
}   