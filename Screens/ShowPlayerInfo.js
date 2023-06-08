import React, { useEffect } from "react";
import { Box, Text,Avatar,HStack,VStack } from "native-base";
import { useState } from "react";
const ShowPlayerInfo = ({route}) => {
  const playerId= route.params.value
  const [player, setPlayer] = useState({});
  const [isSet, setIsSet] = useState(false);
  const players = [
    {
      id: 1,
      name: "Joel Embiid",
      team: "Philadelphia 76ers",
      position: "Center",
      weight: 280,
      height: "7'0''",
      kit: 21,
      logo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png",
      nationality: "Cameroonian",
      country: "Cameroon",
      shoeSize: 16,
    },
    {
      id: 2,
      name: "Luka Doncic",
      team: "Dallas Mavericks",
      position: "Guard",
      weight: 218,
      height: "6'7''",
      kit: 77,
      logo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png",
      nationality: "Slovenian",
      country: "Slovenia",
      shoeSize: 14,
    },
    {
      id: 3,
      name: "Damian Lillard",
      team: "Portland Trail Blazers",
      position: "Guard",
      weight: 195,
      height: "6'2''",
      kit: 0,
      logo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203081.png",
      nationality: "American",
      country: "United States",
      shoeSize: 12,
    },
    {
      id: 4,
      name: "Shai Gilgeous-Alexander",
      team: "Oklahoma City Thunder",
      position: "Guard",
      weight: 180,
      height: "6'6''",
      kit: 2,
      logo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628983.png",
      nationality: "Canadian",
      country: "Canada",
      shoeSize: 13,
    },
    {
      id: 5,
      name: "Giannis Antetokounmpo",
      team: "Milwaukee Bucks",
      position: "Forward",
      weight: 242,
      height: "6'11''",
      kit: 34,
      logo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png",
      nationality: "Greek",
      country: "Greece",
      shoeSize: 17,
    },
    {
      id: 6,
      name: "Trae Young",
      team: "Atlanta Hawks",
      position: "Guard",
      weight: 180,
      height: "6'1''",
      kit: 11,
      logo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png",
      nationality: "American",
      country: "United States",
      shoeSize: 11.5,
    },
    {
      id: 7,
      name: "James Harden",
      team: "Brooklyn Nets",
      position: "Guard",
      weight: 220,
      height: "6'5''",
      kit: 13,
      logo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png",
      nationality: "American",
      country: "United States",
      shoeSize: 13.5,
    },
    {
      id: 8,
      name: "Nikola Jokic",
      team: "Denver Nuggets",
      position: "Center",
      weight: 250,
      height: "7'0''",
      kit: 15,
      logo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png",
      nationality: "Serbian",
      country: "Serbia",
      shoeSize: 18,
    },
    {
      id: 9,
      name: "Jrue Holiday",
      team: "Milwaukee Bucks",
      position: "Guard",
      weight: 205,
      height: "6'3''",
      kit: 21,
      logo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3995.png",
      nationality: "American",
      country: "United States",
      shoeSize: 13,
    },
    {
      id: 10,
      name: "De'Aaron Fox",
      team: "Sacramento Kings",
      position: "Guard",
      weight: 175,
      height: "6'3''",
      kit: 5,
      logo: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628368.png",
      nationality: "American",
      country: "United States",
      shoeSize: 12.5,
    },
    {
      id: 11,
      name: "Anthony Davis",
      team: "Los Angeles Lakers",
      position: "Forward",
      weight: 253,
      height: "6'10''",
      kit: 3,
      logo: "https://b.fssta.com/uploads/application/nba/headshots/1790.vresize.350.350.medium.76.png",
      nationality: "American",
      country: "United States",
      shoeSize: 15,
    },
    {
      id: 12,
      name: "Kevon Looney",
      team: "Golden State Warriors",
      position: "Forward",
      weight: 220,
      height: "6'9''",
      kit: 5,
      logo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155535.png",
      nationality: "American",
      country: "United States",
      shoeSize: 14.5,
    },
    {
      id: 13,
      name: "Rudy Gobert",
      team: "Utah Jazz",
      position: "Center",
      weight: 258,
      height: "7'1''",
      kit: 27,
      logo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032976.png",
      nationality: "French",
      country: "France",
      shoeSize: 18.5,
    },
  ];
  
  const setPlayerInfo=()=>{
   let playerToSet = players.filter(item=>+item.id=== +playerId)
   setPlayer(playerToSet[0]);
   setIsSet(true)
  }
  useEffect(() => {
    setPlayerInfo()
  }, [])
  
  if (isSet)
    return (
      <Box>
        <Box
          style={{ height: "100%", padding: 30 }}
          backgroundColor={"#222222"}
        >
          <Box
            style={{
              backgroundColor: "#222222"
            }}
          >
              <Avatar
                style={{
                  margin: "auto",
                  alignSelf: "center",
                  margin: 20,
                  width: 160,
                  height: 160,
                }}
                source={{ uri: player.logo || "" }}
              />
          </Box>
          <Box
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "goldenrod",
              marginBottom: 15,
            }}
          ></Box>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              margin:5,
              marginBottom:20
              
            }}
          >
            {player.name}
          </Text>
          <Box style={{borderWidth:2,borderColor:"lightgrey",padding:5}}>
          <Text
            style={{ color: "lightgrey", textAlign: "left", fontSize: 16,marginLeft:20,marginTop:30 }}
          >
            Team: {player.team}
          </Text>
          <Text
            style={{ color: "lightgrey", textAlign: "left", fontSize: 16,marginLeft:20,marginTop:10 }}
          >
            Height: {player.height}
          </Text>
          <Text
            style={{ color: "lightgrey", textAlign: "left", fontSize: 16,marginLeft:20,marginTop:10 }}
          >
            Weight: {player.weight} lbs
          </Text>
          <Text
            style={{ color: "lightgrey", textAlign: "left", fontSize: 16,marginLeft:20,marginTop:10 }}
          >
            Kit: {player.kit}
          </Text>
          <Text
            style={{ color: "lightgrey", textAlign: "left", fontSize: 16,marginLeft:20,marginTop:10 }}
          >
            Position: {player.position}
          </Text>
          <Text
            style={{ color: "lightgrey", textAlign: "left", fontSize: 16,marginLeft:20,marginTop:10 }}
          >
            Country: {player.country}
          </Text>
          <Text
            style={{ color: "lightgrey", textAlign: "left", fontSize: 16,marginLeft:20,marginTop:10 }}
          >
            Nationality: {player.nationality}
          </Text>
          <Text
            style={{ color: "lightgrey", textAlign: "left", fontSize: 16,marginLeft:20,marginTop:10,marginBottom:20 }}
          >
            Shoe Size: {player.shoeSize}
          </Text>
        </Box>
        </Box>
      </Box>
    );
};

export default ShowPlayerInfo;
