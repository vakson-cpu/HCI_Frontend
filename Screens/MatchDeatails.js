import {Box,Text} from 'native-base'

const MatchDeatails = ({route}) => {
    console.log(route.params.value)
  return (
    <Box style={{padding:50}}><Text style={{color:"black"}}>{route.params.value}</Text></Box>
  )
}

export default MatchDeatails