import { Box, Text, Image } from "@chakra-ui/react"
function Home() {
    return (
        <Box className="main_home_box">
            <Box className="top_banner_box" m="auto" w="100%">
                <Image src="kooves banner.png" m="auto" w="85%" p="5%" />
            </Box>
            <Box className="second_top_banner_box" display="flex" mt="20px">
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/artist_edite_sections_re-02.jpg?v=1675945846&width=360" w="120%" />
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/artist_edite_sections_re-01.jpg?v=1675945931&width=360" w="120%" />
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/neverlechew-05a_7497cf47-cebb-4dda-a282-f977bab2532f.jpg?v=1675862765&width=360" w="120%" />
            </Box>
            <Box className="gorge_thome">
                
            </Box>
        </Box>
    )
}
export default Home;