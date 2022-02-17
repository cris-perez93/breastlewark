import Layout from "../components/Layout"
import HomePage from "../components/Home"
import SliderComponent from '../components/SliderComponent'
import useSWR from "swr"
import styled from "@emotion/styled"
import DisplayCharacters from "../components/DisplayCharacters"
import { useState } from "react"


const ContainerHome = styled.div`
  
  width: 1200px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`






   

export default function Home() {

  

  const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
    
  const { error, data} = useSWR(url)

  if(error) return <p>Error</p>
  if(!data) return <p>Loading...</p>

  return (
    <Layout>
      <ContainerHome>
        <HomePage/>

        <DisplayCharacters 
            characters = {data.Brastlewark}
            color = {[...new Set(data.Brastlewark.map(color => color.hair_color))]} 
        
        />
        </ContainerHome>

        
      
    </Layout>
  )
}
