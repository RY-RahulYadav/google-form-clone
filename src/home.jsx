import UpperBox from './components/upperBox'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Footer from './components/footer'

 const optArr1=["option1", "option2" , "option3"];
 const optArr2=["1", "2" , "3" ,"4" ,"5" ];
 const optArr3=["Row1" , "Row2" ,"Row3"];




export default function Home(){

  return (
<div>
<UpperBox/>
     <Card1 key={1}   title="MCQ" optionarray={optArr1} type="radio" height="210px" />
     <Card1 key={2}  title="Checkbox" optionarray={optArr1} type ="checkbox" height="210px"  />
     <Card2 key={3}  type="text" title= "Short Answer"  height="190px"/>
     <Card2 key={4}  type="text" title= "ParaGraph" height="190px"/>
     <Card2 key={5}  type='dropdown' title="Drop down" height="190px"/>
     <Card2 key={6} type="file" title= "File Upload" height="160px" />
     <Card1 key={7}  title= "Linear Scale" optionarray={optArr2} type="scale" height="210px" />
     <Card3 key={8}  title="Multi choice Grid" optionarray={optArr3} type="radio" height="280px"/>
     <Card3 key={9}  title="Tick box Grid" optionarray={optArr3} type="checkbox" height="280px"/>
     <Footer/>
</div>
  )
}