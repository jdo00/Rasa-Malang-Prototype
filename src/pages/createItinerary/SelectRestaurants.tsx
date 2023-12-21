import Card from "@mui/material/Card"
import { Header } from "../../components/Header"
import { Scaffold } from "../../components/Scaffold"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react"

interface OpeningHours {
    [day: string]: {
      Open: boolean;
      OpenTime: number;
      CloseTime: number;
    };
  }
  
  interface StarRatings {
    "5": number;
    "4": number;
    "3": number;
    "2": number;
    "1": number;
  }
  
  interface Restaurant {
    RestaurantID: number;
    RestaurantName: string;
    URL: string;
    Coordinates: [number, number];
    Address: string;
    Ward: string;
    Subdistrict: string;
    PostalCode: string;
    PhoneNumber: string;
    Payment: string[];
    ClosestLocation: string;
    EstablishmentType: string;
    CuisineType: string[];
    CulinaryCriteria: string[];
    Menu: string;
    Interior: string;
    OpeningHours: OpeningHours;
    AverageRating: number;
    NumRatings: number;
    StarRatings: StarRatings;
    Keywords: string[];
    AverageSentiment: number;
    LowestSentiment: number;
    PositiveReviews: string;
  }
interface Attraction {
    id: number;
    title: string;
  }

export function SelectRestaurants (props:{AttractionId: number, AttractionNr: number}) {
    const attractions = [
        {
          id: 1,
          title: 'Brawijaya Museum',
        },
        {
          id: 2,
          title: 'Cultural Center Of East Java',
        },
        {
          id: 3,
          title: 'Kampug Warna Warni',
        },
        {
          id: 4,
          title: 'Malang nigth paradise',
        },
      ];


const [restaurantsData, setRestaurantsData] = useState(null);
const [selectedRestaurants, setSelectedRestaurants] = useState<number[]>([]);
const matchingRestaurants: Restaurant[] | undefined = getRestaurantsByAttractionId(props.AttractionId, attractions, restaurantsData);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/PrototypeData/Restaurant/ExampleRestaurantData.json');
      const data = await response.json();
      setRestaurantsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


const getAttractionTitleById = (attractionId: number) => {
    const attraction = attractions.find((attraction) => attraction.id === attractionId);
    return attraction ? attraction.title : "Unknown Attraction";
  };

const toggleAttractionSelection = (restaurantId: number) => {
    setSelectedRestaurants((prevSelected) => {
      if (prevSelected.includes(restaurantId)) {
        return prevSelected.filter((id) => id !== restaurantId);
      } else {
        return [...prevSelected, restaurantId];
      }
    });
  
    //updateFields({ attractionsIDs: [...selectedRestaurants, Restaurant] });
  };

  function getRestaurantsByAttractionId(
    attractionId: number,
    attractions: Attraction[],
    restaurantsData: { restaurants: Restaurant[] }[] | null
  ): Restaurant[] | undefined {
    // Den Titel der Attraktion anhand der ID finden
    const attractionTitle = attractions.find(attraction => attraction.id === attractionId)?.title;
  
    // Restaurants mit der passenden ClosestLocation
    const matchingRestaurants = restaurantsData?.flatMap((data) =>
    data.restaurants.filter((restaurant) => restaurant.ClosestLocation === attractionTitle)
  );
  return matchingRestaurants;
  }


    return (
        <Scaffold header= {<Header isRestaurant={false}/>}>
        <div style={{marginTop:"5rem"}}>
        <h2 style={{ fontSize: "1em", marginBottom: "1rem" }}>Create itinerary<span style={{ fontSize: "0.8em" }}>- select restaurants</span> </h2>
        <h2>Stop nr. {props.AttractionNr+1} {getAttractionTitleById(props.AttractionId)}</h2>
        <div style={{ display: 'flex', flexDirection:"column", justifyContent: 'space-around', marginTop: '20px' }}>
      {matchingRestaurants?.map((restaurant) => (
        <Card key={restaurant.RestaurantID} sx={{ maxWidth: 345 , marginTop: restaurant.RestaurantID !== 1 ? "2rem" : "0", backgroundColor:"#e6e2dd"}}>
          <CardMedia sx={{ height: 120 }} image={restaurant.Interior} title={restaurant.RestaurantName} />
          <CardContent sx={{ paddingBottom: '0' }}>
            <Typography gutterBottom variant="h5" component="div">
              {restaurant.RestaurantName}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            {selectedRestaurants.includes(restaurant.RestaurantID) ? (
              <Button size="small" endIcon={<DeleteIcon />} onClick={() => toggleAttractionSelection(restaurant.RestaurantID)}>
                Delete
              </Button>
            ) : (
              <Button size="small" endIcon={<AddCircleOutlineIcon />} onClick={() => toggleAttractionSelection(restaurant.RestaurantID)}>
                Select
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </div>
    </div>
        </Scaffold> 



    )
}  